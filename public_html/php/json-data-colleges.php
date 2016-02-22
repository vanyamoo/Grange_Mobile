<?
/*
 * Following code will list all the schools in arts college
 */

// array for JSON response
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db
$db = new DB_CONNECT();

// get all lecturers from lecturerTable
$result = mysql_query("SELECT * FROM collegesTable") or die(mysql_error());

// check for empty result
if (mysql_num_rows($result) > 0)
 {
    // looping through all results
    // colleges node
    $response["colleges"] = array();

     while ($row = mysql_fetch_array($result)) 
     {
        	// temp college array
            $college = array();
            $college["name"] = $row["name"];
            $college["lat"] = $row["lat"];
            $college["lon"] = $row["lon"];
            $college["website"] = $row["website"];
            $college["address"] = $row["address"];

       // push single college into final response array
        array_push($response["colleges"], $college);
    }
    // success
    $response["success"] = 1;

    // echoing JSON response
    print (json_encode($response));
    // echo (json_encode($response));

}else {

    // no colleges found
    $response["success"] = 0;
    $response["message"] = "No colleges found";

    // echo no colleges JSON
    print (json_encode($response));
    //echo (json_encode($response));
}


?>


