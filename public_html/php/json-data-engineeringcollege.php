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
$result = mysql_query("SELECT * FROM engineeringCollegeTable") or die(mysql_error());

// check for empty result
if (mysql_num_rows($result) > 0)
 {
    // looping through all results
    // schools node
    $response["schools"] = array();

     while ($row = mysql_fetch_array($result)) 
     {
        	// temp school array
            $school = array();
            $school["name"] = $row["name"];
            $school["website"] = $row["website"];
            $school["address"] = $row["address"];

       // push single school into final response array
        array_push($response["schools"], $school);
    }
    // success
    $response["success"] = 1;

    // echoing JSON response
    print (json_encode($response));
    // echo (json_encode($response));

}else {

    // no schools found
    $response["success"] = 0;
    $response["message"] = "No schools found";

    // echo no schools JSON
    print (json_encode($response));
    //echo (json_encode($response));
}


?>

