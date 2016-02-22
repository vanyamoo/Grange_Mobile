/* GoogleMapScript.js
 * 
 * 
 */
var map;

// draw google map, add markers for all colleges 
function drawMap() { 

    var dublinLatLng = new google.maps.LatLng(53.338545, -6.26607); // position set to Dublin coordinates
    var myOptions = {
            zoom: 14,
            center: dublinLatLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
            //styles: styles
        };

    //map = new google.maps.Map($("#map-canvas"), myOptions);
    map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);

    var data = fetchCollegesLocations();
    //console.log(data);

    createCollegeMarker(data);

    geoFindMe();

    setTimeout(function(){ 
        google.maps.event.trigger(map, "resize");
        map.setCenter(dublinLatLng);
     }, 500); // wait for page to render, then resize

}

// fetch colleges' coordinates
function fetchCollegesLocations() {
    //console.log("calling fetchCollegesLocations() function");
    // try to retrieve the data from local storage
    var data = retrieveFromLocalStorage('colleges');
    
    // initialise variable DataIsRecent to false
    var dataIsRecent = false;

    // get seconds since epoch (1 jan 1970)
    var currentTimestamp = new Date()/1000;
    
    // if there is data stored in local storage
    if (data) {
        // check if that data is not older than 30 days
        if (currentTimestamp - data.timestamp < 30*24*60*60){
            // if it is set DataIsRecent to true
            dataIsRecent = true;
        }
    }
    //  if there is data stored in local storage and that data is not older than 30 days
    if (data && dataIsRecent) {
        
        return data;   
    }
    else { // if no data is stored in local storage or data is older than 30 days
        // make COLLEGES json call
        $.getJSON('php/json-data-colleges.php', function(returnedData) { // because we cannot assume that retrieving data from the server is instant we use this patters: call a function and rather than assuming that the data is ready on the next line, you call a function that runs only when the data is ready (because in the meantime the browser wants to do other things)
            // save data to local storage
            saveToLocalStorage(returnedData, 'colleges');
            
            return returnedData;
        });
    }
}

// create markers for the colleges on the map
function createCollegeMarker(data){

    var collegeLatLng;
    var collegeMarker;
    var collegeInfoWindow; 

    // start colleges loop
    $.each(data.colleges, function(index, college) {
        
            var collegeLatLng = new google.maps.LatLng(college.lat, college.lon); // position set to each college's coordinates
            //create a marker for for each college
            var collegeMarker = new google.maps.Marker({
                position: collegeLatLng,
                map: map,
                title: college.address
            });

            var collegeInfoWindow = new google.maps.InfoWindow({
              content: college.address
            });
            collegeInfoWindow.open(map,collegeMarker);

            google.maps.event.addListener(collegeMarker, 'click', function() {
                collegeInfoWindow.open(map,collegeMarker);
            });
    }); // end colleges loop
}

// geolocation
function geoFindMe() {
  var output = $("#out");

  if (!navigator.geolocation){
    output.text("Geolocation is not supported by your browser");
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.text("Map");


    //create a marker for current position
    var myLatLng = new google.maps.LatLng(latitude, longitude);
    var myMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'current position'
    });
    var myInfowindow = new google.maps.InfoWindow({
          content: 'current location'
        });
        myInfowindow.open(map,myMarker);

        google.maps.event.addListener(myMarker, 'click', function() {
            myInfowindow.open(map,myMarker);
        });
  };

  function error() {
    output.text("Unable to retrieve your location");
  };

  output.text("Locating…");  

  navigator.geolocation.getCurrentPosition(success, error);
}


// calculate distance to colleges
function calculateDistanceToColleges() {
  var output = $(".distance");

  if (!navigator.geolocation){
    output.text("Geolocation is not supported by your browser");
    return;
  }

  function success(position) {
    var myLat  = position.coords.latitude;
    var myLon = position.coords.longitude;

    //console.log("successfully fetches current coordinates");
    // retrieve object containing colleges' coordinates
    var collegesLocation = fetchCollegesLocations();
    // calculate distance
    var distToCollege;
    for (var i=0; i<4; i++){
        var output = $('.' + collegesLocation.colleges[i].address.replace(/ /g, ''));
        //console.log('Replacing' + collegesLocation.colleges[i].address.replace(/ /g, ''))
        distToCollege = distance(myLat, myLon, collegesLocation.colleges[i].lat, collegesLocation.colleges[i].lon);
        output.text("Distance from your current location: " + distToCollege + "km");
    }
  };

  function error() {
    output.text("Unable to retrieve your location");
  };

  output.text("Locating…");  

  navigator.geolocation.getCurrentPosition(success, error);
}


// calculate distance between two points
// source http://www.geodatasource.com/developers/javascript
function distance(lat1, lon1, lat2, lon2) {

    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var radlon1 = Math.PI * lon1/180;
    var radlon2 = Math.PI * lon2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;

    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515 * 1.609344;

    return (dist).toFixed(1);
}
