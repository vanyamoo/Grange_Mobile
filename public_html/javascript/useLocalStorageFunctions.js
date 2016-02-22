 /* useLocalStorageFunctions.js
 * 
 * functions for storing/retrieving data in local storage
 */

// save json string to local storage
function saveToLocalStorage(objectToStore, localStorageName){

    // first check if HTML5 storage is available
    if (typeof(Storage) !== 'undefined') {

        // save seconds since epoch (1 jan 1970)
        objectToStore.timestamp = new Date()/ 1000;

        localStorage[localStorageName] = JSON.stringify(objectToStore);
    }

}

// retrieve json string from local storage
function retrieveFromLocalStorage(localStorageName){

    // check if json string is already stored
        if (typeof localStorage[localStorageName] !== 'undefined') {

            var JSONString = localStorage[localStorageName];
            // parse JSON String and convert to JavaScript Object
            JSONObject = JSON.parse(JSONString);
            
            return JSONObject;   
        }
        else{
            return false;
        }

}


