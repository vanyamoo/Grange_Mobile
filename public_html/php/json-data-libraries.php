<?
/*
 * Following code will list boks available in all libraries
 */

// array for JSON response
$response = array();

// include db connect class
require_once __DIR__ . '/db_connect.php';

// connecting to db
$db = new DB_CONNECT();

// get all lecturers from librariesTable
$result = mysql_query("SELECT * FROM librariesTable") or die(mysql_error());

// check for empty result
if (mysql_num_rows($result) > 0)
 {
    // looping through all results
    // books node
    $response["books"] = array();

     while ($row = mysql_fetch_array($result)) 
     {
        	// temp title array
            $book = array();
            $book["title"] = $row["title"];
            $book["catNo"] = $row["catNo"];
            $book["year"] = $row["year"];
            $book["author"] = $row["author"];
            $book["availability"]["KevinStr"] = $row["KevinStr"];
            $book["availability"]["AungierStr"] = $row["AungierStr"];
            $book["availability"]["BoltonStr"] = $row["BoltonStr"];
            $book["availability"]["CathalBrughaStr"] = $row["CathalBrughaStr"];

       // push single title into final response array
        array_push($response["books"], $book);
    }
    // success
    $response["success"] = 1;

    // echoing JSON response
    print (json_encode($response));
    // echo (json_encode($response));

}else {

    // no colleges found
    $response["success"] = 0;
    $response["message"] = "No books found";

    // echo no colleges JSON
    print (json_encode($response));
    //echo (json_encode($response));
}


?>


