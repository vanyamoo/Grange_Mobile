/* pagesGeneratingFunctions.js
 * 
 * functions for generating pages for the Grange Mobile app
 */

// generate Lecturers pages
function generateLecturersPages() {

    // try to retrieve the data from local storage
    var data = retrieveFromLocalStorage('lecturers');

    // initialise variable DataIsRecent to false
    var dataIsRecent = false;

    // get seconds since epoch (1 jan 1970)
    var currentTimestamp = new Date()/1000;
    
    // if there is data stored in local storage
    if (data) {
        // check if that data is not older than 1 day
        if (currentTimestamp - data.timestamp < 24*60*60){
            // if it is set DataIsRecent to true
            dataIsRecent = true;
        }
    }
    //  if there is data stored in local storage and that data is not older than 1 day
    if (data && dataIsRecent) {
        // render it
        renderLecturersPages(data);   
    }
    else { // if no data is stored in local storage or data is older than 1 day
        // make LECTURERS json call
        $.getJSON('php/json-data-lecturers.php', function(returnedData) { // because we cannot assume that retrieving data from the server is instant we use this patters: call a function and rather than assuming that the data is ready on the next line, you call a function that runs only when the data is ready (because in the meantime the browser wants to do other things)
            // save data to local storage
            saveToLocalStorage(returnedData, 'lecturers');
            // render data
            renderLecturersPages(returnedData);
        });
    }
}

// render Lecturers pages    
function renderLecturersPages(data){
        
    // start lecturers loop
    $.each(data.lecturers, function(index, lecturer) {

        //build lecturers' list page
        $("#peoplePageList").append('<li><a href="#' + lecturer.firstName + lecturer.lastName + '">'+ lecturer.firstName + ' ' + lecturer.lastName +'</a></li>');

        //build lecturer's details page
        var lecturerPageHtml = '';
        
        // page (open div)
        lecturerPageHtml += '<div data-role="page" id="' + lecturer.firstName + lecturer.lastName + '">';

            // header (open div)
            lecturerPageHtml += '<div style="background-color:#474747; height:60px;" data-role="header">';

                // breadcrumb navigation
                lecturerPageHtml += '<div class="ui-grid-d">';
                lecturerPageHtml += '<div class="ui-block-a breadcrumbHome"><a href="#homePage"><img src="images/menu_home_small.png" class="ui-btn breadcrumbImage"></a></div>';
                lecturerPageHtml += '<div class="ui-block-b breadcrumbRecent"><a href="#peoplePage"><img src="images/menu_lecturers.png" class="ui-btn breadcrumbImage"></a></div>';
                lecturerPageHtml += '<div class="ui-block-c breadcrumbCurrent"><h4 class="breadcrumbText">Lecturer</h4></div></div>';

            // header (close div)
            lecturerPageHtml += '</div>';

            // content (open div)
            lecturerPageHtml += '<div data-role="main" class="ui-content">';
                // content sections
                lecturerPageHtml += '<div class="ui-body ui-body-a ui-corner-all">name<h4>'+ lecturer.firstName + ' ' + lecturer.lastName +'</h4></div><br/>';
                lecturerPageHtml += '<div class="ui-body ui-body-a ui-corner-all">email<h4><a href="mailto:'+ lecturer.email +'">'+ lecturer.email +'</a></h4></div><br/>';
                lecturerPageHtml += '<div class="ui-body ui-body-a ui-corner-all">staff number<h4>'+ lecturer.staffNumber +'</h4></div><br/>';
                lecturerPageHtml += '<div class="ui-body ui-body-a ui-corner-all">phone number<h4><a href="tel:' + lecturer.phoneNo + '">' + lecturer.phoneNo + '</a></h4></div><br/>';
            // content (close div)
            lecturerPageHtml += '</div>';
            // footer
            //lecturerPageHtml += '<div data-role="footer"><h5>Grange Mobile 2014</h5></div>';
        // page (close div)
        lecturerPageHtml += '</div>';

        $('body').append(lecturerPageHtml);

    }); // end lecturers loop                
}

// generate Modules pages
function generateModulesPages() {

    // try to retrieve the data from local storage
    var data = retrieveFromLocalStorage('modules');

    // initialise variable DataIsRecent to false
    var dataIsRecent = false;

    // get seconds since epoch (1 jan 1970)
    var currentTimestamp = new Date()/1000;
    
    // if there is data stored in local storage
    if (data) {
        // check if that data is not older than 1 day
        if (currentTimestamp - data.timestamp < 24*60*60){
            // if it is set DataIsRecent to true
            dataIsRecent = true;
        }
    }
    //  if there is data stored in local storage and that data is not older than 1 day
    if (data && dataIsRecent) {
        // render it
        renderModulesPages(data);
    }
    else { // if no data is stored in local storage or data is older than 1 day
        // make MODULES json call
        $.getJSON('php/json-data-modules.php', function(returnedData) { // because we cannot assume that retrieving data from the server is instant we use this patters: call a function and rather than assuming that the data is ready on the next line, you call a function that runs only when the data is ready (because in the meantime the browser wants to do other things)
            // save data to local storage
            saveToLocalStorage(returnedData, 'modules');
            // render data
            renderModulesPages(returnedData);
        });
    }
}

// render Modules pages    
function renderModulesPages(data){

    // start modules loop
    $.each(data.modules, function(index, module) {
        
        //build modules' list page
        $("#modulesPageList").append('<li><a href="#' + module.moduleNo + '">' + module.moduleName + '</a></li>');
        
        //build module's details page
        var modulePageHtml = '';
        
        // page (open div)
        modulePageHtml += '<div data-role="page" id="' + module.moduleNo + '">';

            // header (open div)
            modulePageHtml += '<div style="background-color:#474747; height:60px;" data-role="header">';

                // breadcrumb navigation
                modulePageHtml += '<div class="ui-grid-d">';
                modulePageHtml += '<div class="ui-block-a breadcrumbHome"><a href="#homePage"><img src="images/menu_home_small.png" class="ui-btn breadcrumbImage"></a></div>';
                modulePageHtml += '<div class="ui-block-b breadcrumbRecent"><a href="#modulesPage"><img src="images/menu_modules.png" class="ui-btn breadcrumbImage"></a></div>';
                modulePageHtml += '<div class="ui-block-c breadcrumbCurrent"><h4 class="breadcrumbText">Module</h4></div></div>';

            // header (close div)
            modulePageHtml += '</div>';

            // content (open div)
            modulePageHtml += '<div data-role="main" class="ui-content">';
                // content sections
                modulePageHtml += '<div class="ui-body ui-body-a ui-corner-all">module<h4>' + module.moduleName + '</h4></div><br/>';
                modulePageHtml += '<div class="ui-body ui-body-a ui-corner-all">website<h4><a href="'+ module.website +'">'+ module.website +'</a></h4></div><br/>';
                modulePageHtml += '<div class="ui-body ui-body-a ui-corner-all">location<h4>'+ module.location +' </h4>room<h4>' + module.room + '</h4></div><br/>';
                modulePageHtml += '<div class="ui-body ui-body-a ui-corner-all">credits<h4>' + module.credits + '</h4></div><br/>';
            // content (close div)
            modulePageHtml += '</div>';
            // footer
            //modulePageHtml += '<div data-role="footer"><h5>Grange Mobile 2014</h5></div>';
        // page (close div)
        modulePageHtml += '</div>';

        $('body').append(modulePageHtml);
            
    }); // end modules loop     
}

// generate Students pages
function generateStudentsPages() {

    // try to retrieve the data from local storage
    var data = retrieveFromLocalStorage('students');

    // initialise variable DataIsRecent to false
    var dataIsRecent = false;

    // get seconds since epoch (1 jan 1970)
    var currentTimestamp = new Date()/1000;
    
    // if there is data stored in local storage
    if (data) {
        // check if that data is not older than 1 day
        if (currentTimestamp - data.timestamp < 24*60*60){
            // if it is set DataIsRecent to true
            dataIsRecent = true;
        }
    }
    //  if there is data stored in local storage and that data is not older than 1 day
    if (data && dataIsRecent) {
        // render it
        console.log('Rendering from localStorage');
        renderStudentsPages(data);
    }
    else { // if no data is stored in local storage or data is older than 1 day
        console.log('this was not in localStorage');
        // make STUDENTS json call
        $.getJSON('php/json-data-students.php', function(returnedData) { // because we cannot assume that retrieving data from the server is instant we use this patters: call a function and rather than assuming that the data is ready on the next line, you call a function that runs only when the data is ready (because in the meantime the browser wants to do other things)
            // save data to local storage
            saveToLocalStorage(returnedData, 'students');
            // render data
            renderStudentsPages(returnedData);
        });
    }
}

// render Students pages    
function renderStudentsPages(data){

    // start students loop
    $.each(data.students, function(index, student) {
        
        //build students' list page
        $("#studentsPageList").append('<li><a href="#' + student.firstName + student.lastName + '">'+ student.firstName + ' ' + student.lastName +'</a></li>');
        
        //build student's details page
        var studentPageHtml = '';
        
        // page (open div)
        studentPageHtml += '<div data-role="page" id="' + student.firstName + student.lastName + '">';

            // header (open div)
            studentPageHtml += '<div style="background-color:#474747; height:60px;" data-role="header">';

                // breadcrumb navigation
                studentPageHtml += '<div class="ui-grid-d">';
                studentPageHtml += '<div class="ui-block-a breadcrumbHome"><a href="#homePage"><img src="images/menu_home_small.png" class="ui-btn breadcrumbImage"></a></div>';
                studentPageHtml += '<div class="ui-block-b breadcrumbRecent"><a href="#studentsPage"><img src="images/menu_students.png" class="ui-btn breadcrumbImage"></a></div>';
                studentPageHtml += '<div class="ui-block-c breadcrumbCurrent"><h4 class="breadcrumbText">Student</h4></div></div>';

            // header (close div)
            studentPageHtml += '</div>';
            

            // content (open div)
            studentPageHtml += '<div data-role="main" class="ui-content">';
                // content sections
                studentPageHtml += '<div class="ui-body ui-body-a ui-corner-all">name<h4>'+ student.firstName + ' ' + student.lastName +'</h4></div><br/>';
                studentPageHtml += '<div class="ui-body ui-body-a ui-corner-all">course ID<h4>'+ student.courseID +'</h4></div><br/>';
                studentPageHtml += '<div class="ui-body ui-body-a ui-corner-all">ID number<h4>'+ student.studentID +'</h4></div><br/>';
                studentPageHtml += '<div class="ui-body ui-body-a ui-corner-all">modules<h4>'+ student.moduleNo1 +' </h4><h4>' + student.moduleNo2 + '</h4></div><br/>';
            // content (close div)
            studentPageHtml += '</div>';
            
            // footer
            //studentPageHtml += '<div data-role="footer"><h5>Grange Mobile 2014</h5></div>';
        // page (close div)
        studentPageHtml += '</div>';

        $('body').append(studentPageHtml);
            
    }); // end students loop 
}

// generate Library pages
function generateLibraryPages() {

    // try to retrieve the data from local storage
    var data = retrieveFromLocalStorage('books');

    // initialise variable DataIsRecent to false
    var dataIsRecent = false;

    // get seconds since epoch (1 jan 1970)
    var currentTimestamp = new Date()/1000;
    
    // if there is data stored in local storage
    if (data) {
        // check if that data is not older than 1 day
        if (currentTimestamp - data.timestamp < 24*60*60){
            // if it is set DataIsRecent to true
            dataIsRecent = true;
        }
    }
    //  if there is data stored in local storage and that data is not older than 1 day
    if (data && dataIsRecent) {
        // render it
        console.log('Rendering from localStorage');
        renderLibraryPages(data);
    }
    else { // if no data is stored in local storage or data is older than 1 day
        console.log('this was not in localStorage');
        // make LIBRARY json call
        $.getJSON('php/json-data-libraries.php', function(returnedData) { // because we cannot assume that retrieving data from the server is instant we use this patters: call a function and rather than assuming that the data is ready on the next line, you call a function that runs only when the data is ready (because in the meantime the browser wants to do other things)
            // save data to local storage
            saveToLocalStorage(returnedData, 'books');
            // render data
            renderLibraryPages(returnedData);
        });
    }
}


// render Library pages    
function renderLibraryPages(data){

    // retrieve Colleges' locations
    fetchCollegesLocations();

    // start books loop
    $.each(data.books, function(index, book) {

        // calculate distance to each college from current position
        calculateDistanceToColleges();
        
        //build books' list page
        $("#libraryPageList").append('<li><a href="#' + book.catNo + '"><h2>'+ book.title +'</h2><p>'+ book.year +', '+ book.author +'</p></a></li>');
        
        //build book's details page
        var bookPageHtml = '';
        
        // page (open div)
        bookPageHtml += '<div data-role="page" id="' + book.catNo + '">';

            // header (open div)
            bookPageHtml += '<div style="background-color:#474747; height:60px;" data-role="header">';

                // breadcrumb navigation
                bookPageHtml += '<div class="ui-grid-d">';
                bookPageHtml += '<div class="ui-block-a breadcrumbHome"><a href="#homePage"><img src="images/menu_home_small.png" class="ui-btn breadcrumbImage"></a></div>';
                bookPageHtml += '<div class="ui-block-b breadcrumbRecent"><a href="#libraryPage"><img src="images/menu_library.png" class="ui-btn breadcrumbImage"></a></div>';
                bookPageHtml += '<div class="ui-block-c breadcrumbCurrent"><h4 class="breadcrumbText">Title</h4></div></div>';

            // header (close div)
            bookPageHtml += '</div>';

            // content (open div)
            bookPageHtml += '<div data-role="main" class="ui-content" id="bookPageContent' + book.catNo + '">';
                // content sections
                bookPageHtml += '<ul data-role="listview" data-inset="true" id="bookPageList' + book.catNo + '">';
                bookPageHtml += '<li><h2>'+ book.title +'</h2><p style = "color: grey">'+ book.year +', '+ book.author +'</p></li>';
                bookPageHtml += '<li><div><h2>Availability</h2><p>Kevin Street: '+ book.availability.KevinStr + ' copies</p><p class ="KevinStreet distance" style = "color: grey"></p>';
                bookPageHtml += '<p>Aungier Street: '+ book.availability.AungierStr +' copies</p><p class ="AungierStreet distance" style = "color: grey"></p>';
                bookPageHtml += '<p>Bolton Street: '+ book.availability.BoltonStr +' copies</p><p class ="BoltonStreet distance" style = "color: grey"></p>';
                bookPageHtml += '<p>Cathal Brugha Street: '+ book.availability.CathalBrughaStr +' copies</p><p class ="CathalBrughaStreet distance" style = "color: grey"></p></div></li></ul>';
            // content (close div)
            bookPageHtml += '</div>';  
            
            // footer
            //bookPageHtml += '<div data-role="footer"><h5>Grange Mobile 2014</h5></div>';
        // page (close div)
        bookPageHtml += '</div>';
        //console.log('BOOKPAGEHTML', bookPageHtml);

        $('body').append(bookPageHtml);

        //rebuild and style the book page listview
        //$('#1000').bind('pageinit', function() {
            //console.log('refreshing list view #bookPageList' + book.catNo)
            //$('#bookPageList' + book.catNo).listview('refresh');
            //console.log('DONE refreshing list view #bookPageList' + book.catNo)
        //});
            
    }); // end books loop 
}


// generate Art College pages
function generateArtCollegePage(){

    // try to retrieve the data from local storage
    var data = retrieveFromLocalStorage('artcollege');

    // initialise variable DataIsRecent to false
    var dataIsRecent = false;

    // get seconds since epoch (1 jan 1970)
    var currentTimestamp = new Date()/1000;
    
    // if there is data stored in local storage
    if (data) {
        // check if that data is not older than 1 day
        if (currentTimestamp - data.timestamp < 24*60*60){
            // if it is set DataIsRecent to true
            dataIsRecent = true;
        }
    }
    //  if there is data stored in local storage and that data is not older than 1 day
    if (data && dataIsRecent) {
        // render it
        console.log('Rendering from localStorage');
        renderArtCollegePages(data);
    }
    else { // if no data is stored in local storage or data is older than 1 day
        // make ART COLLEGE json call
        $.getJSON('php/json-data-artcollege.php', function(returnedData) { // because we cannot assume that retrieving data from the server is instant we use this patters: call a function and rather than assuming that the data is ready on the next line, you call a function that runs only when the data is ready (because in the meantime the browser wants to do other things)
            // save data to local storage
            saveToLocalStorage(returnedData, 'artcollege');
            // render data
            renderArtCollegePages(returnedData);
        });
    }
}

// render Art College pages    
function renderArtCollegePages(data){
        
        // start art college loop
        $.each(data.schools, function(index, school) {
            
            //build art college list page
            $("#artsPageList").append('<li><a href="' + school.website + '">'+ school.name +'</a></li>');
        
        }); // end art college loop       
}

// generate Engineering College pages
function generateEngineeringCollegePage(){

    // try to retrieve the data from local storage
    var data = retrieveFromLocalStorage('engineeringcollege');

    // initialise variable DataIsRecent to false
    var dataIsRecent = false;

    // get seconds since epoch (1 jan 1970)
    var currentTimestamp = new Date()/1000;
    
    // if there is data stored in local storage
    if (data) {
        // check if that data is not older than 1 day
        if (currentTimestamp - data.timestamp < 24*60*60){
            // if it is set DataIsRecent to true
            dataIsRecent = true;
        }
    }
    //  if there is data stored in local storage and that data is not older than 1 day
    if (data && dataIsRecent) {
        // render it
        renderEngineeringCollegePages(data);
    }
    else { // if no data is stored in local storage or data is older than 1 day
        // make ENGINEERING COLLEGE json call
        $.getJSON('php/json-data-engineeringcollege.php', function(returnedData) { // because we cannot assume that retrieving data from the server is instant we use this patters: call a function and rather than assuming that the data is ready on the next line, you call a function that runs only when the data is ready (because in the meantime the browser wants to do other things)
            // save data to local storage
            saveToLocalStorage(returnedData, 'engineeringcollege');
            // render data
            renderEngineeringCollegePages(returnedData);
        });
    }
}

// render Engineering College pages    
function renderEngineeringCollegePages(data){
        
    // start engineering college loop
    $.each(data.schools, function(index, school) {
        
        //build schools' list page
        $("#engineeringPageList").append('<li><a href="' + school.website + '">'+ school.name +'</a></li>');

    }); // end engineering college loop       
}

// generate Business College pages
function generateBusinessCollegePage(){

    // try to retrieve the data from local storage
    var data = retrieveFromLocalStorage('businesscollege');

    // initialise variable DataIsRecent to false
    var dataIsRecent = false;

    // get seconds since epoch (1 jan 1970)
    var currentTimestamp = new Date()/1000;
    
    // if there is data stored in local storage
    if (data) {
        // check if that data is not older than 1 day
        if (currentTimestamp - data.timestamp < 24*60*60){
            // if it is set DataIsRecent to true
            dataIsRecent = true;
        }
    }
    //  if there is data stored in local storage and that data is not older than 1 day
    if (data && dataIsRecent) {
        // render it
        renderBusinessCollegePages(data);
    }
    else { // if no data is stored in local storage or data is older than 1 day
        // make BUSINESS COLLEGE json call
        $.getJSON('php/json-data-businesscollege.php', function(returnedData) { // because we cannot assume that retrieving data from the server is instant we use this patters: call a function and rather than assuming that the data is ready on the next line, you call a function that runs only when the data is ready (because in the meantime the browser wants to do other things)
            // save data to local storage
            saveToLocalStorage(returnedData, 'businesscollege');
            // render data
            renderBusinessCollegePages(returnedData);
        });
    }
}

// render Business College pages    
function renderBusinessCollegePages(data){
        
        // start schools loop
        $.each(data.schools, function(index, school) {
            
            //build schools' list page
            $("#businessPageList").append('<li><a href="' + school.website + '">'+ school.name +'</a></li>');

        }); // end business college loop
}

// generate Science College pages
function generateScienceCollegePage(){

    // try to retrieve the data from local storage
    var data = retrieveFromLocalStorage('sciencecollege');

    // initialise variable DataIsRecent to false
    var dataIsRecent = false;

    // get seconds since epoch (1 jan 1970)
    var currentTimestamp = new Date()/1000;
    
    // if there is data stored in local storage
    if (data) {
        // check if that data is not older than 1 day
        if (currentTimestamp - data.timestamp < 24*60*60){
            // if it is set DataIsRecent to true
            dataIsRecent = true;
        }
    }
    //  if there is data stored in local storage and that data is not older than 1 day
    if (data && dataIsRecent) {
        // render it
        renderScienceCollegePages(data);
    }
    else { // if no data is stored in local storage or data is older than 1 day
        // make BUSINESS COLLEGE json call
        $.getJSON('php/json-data-sciencecollege.php', function(returnedData) { // because we cannot assume that retrieving data from the server is instant we use this patters: call a function and rather than assuming that the data is ready on the next line, you call a function that runs only when the data is ready (because in the meantime the browser wants to do other things)
            // save data to local storage
            saveToLocalStorage(returnedData, 'sciencecollege');
            // render data
            renderScienceCollegePages(returnedData);
        });
    }
}

// render Science College pages    
function renderScienceCollegePages(data){
  
        // start schools loop
        $.each(data.schools, function(index, school) {
            
            //build schools' list page
            $("#sciencePageList").append('<li><a href="' + school.website + '">'+ school.name +'</a></li>');

        }); // end science college loop
}

// generate News page
function generateNewsPage(){

    // rss feed source https://github.com/jfhovinne/jFeed/blob/master/example.html
    $(function() {
        $.browser = {};

        // start get rss feed call
        $.getFeed({
            url: 'rss/rss.xml',
            success: function(feed) {
                
                // DIT News link
                var html = '';
                var counter = 0;
                //for(var i = 0; i < feed.items.length && i < 10; i++) {
                for(var i = 0; i < feed.items.length; i++) {
                
                    var item = feed.items[i];
                    //build feeds' list page
                    html += '<li><a href="#' + counter + '">' + item.title + '</a></li>';

                    //build feed page
                    var feedHtml = '';
                    // page (open div)
                    feedHtml += '<div data-role="page" id="' + counter + '">';


                        // header
                        //feedHtml += '<div data-role="header"><h1></h1></div>';

                        // header (open div)
                        feedHtml += '<div style="background-color:#474747; height:60px;" data-role="header">';

                            // breadcrumb navigation
                            feedHtml += '<div class="ui-grid-d">';
                            feedHtml += '<div class="ui-block-a breadcrumbHome"><a href="#homePage"><img src="images/menu_home_small.png" class="ui-btn breadcrumbImage"></a></div>';
                            feedHtml += '<div class="ui-block-b breadcrumbRecent"><a href="#newsPage"><img src="images/menu_news.png" class="ui-btn breadcrumbImage"></a></div>';
                            feedHtml += '<div class="ui-block-c breadcrumbCurrent"><h4 class="breadcrumbText">Story</h4></div></div>';

                        // header (close div)
                        feedHtml += '</div>';

                        // content (open div)
                        feedHtml += '<div data-role="main" class="ui-content">';
                            // content sections
                            feedHtml += '<div class="ui-body ui-body-a ui-corner-all"><h4>'+ item.title +'</h4><p>'+ item.description + '</p><a href="'+ item.link + '" data-role="button" data-icon="arrow-r" data-iconpos="right">Read full story in browser</a></div><br/>';
                        // content (close div)
                        feedHtml += '</div>';
                        
                    // page (close div)
                    feedHtml += '</div>';

                    $('body').append(feedHtml);
                    counter++;
                }  // end of loop
                $('#newsPageList').append(html);
            }    
        });  // end get rss feed call
    });
}



// generate Tweets page
function generateSocialPage(){

    $.getJSON('php/timeline_response.php', function(data) {

        $.each(data, function(index, tweet) {
                //for(var i = 0; i < feed.items.length && i < 10; i++) {
                
                
                    // build tweets' list page
                    // http://stackoverflow.com/questions/10156081/multiline-listview-items-with-jquery-mobile
                    $("#socialPageList").append('<li><p style="white-space:normal;">' + tweet + '</p></li>');
                
        
        });
    
    });
    
}
