<?php 

// You MUST modify app_tokens.php to use your own Oauth tokens
require 'app_tokens.php';

// Create an OAuth connection
require 'tmhOAuth.php';
$connection = new tmhOAuth(array(
  'consumer_key'    => $consumer_key,
  'consumer_secret' => $consumer_secret,
  'user_token'      => $user_token,
  'user_secret'     => $user_secret
));

// Get the timeline with the Twitter API
$http_code = $connection->request('GET',$connection->url('1.1/statuses/user_timeline.json'),
	array('screen_name' => 'ditofficial', 'count' => 20));
			
// Request was successful
if ($http_code == 200) {
	// Extract the tweets from the API response
	$tweet_data = json_decode($connection->response['response'], true);
	
	// Accumulate tweets from results
	$tweet_stream = array();	
	foreach($tweet_data as $tweet) {		
		// Add this tweet's text to the results
		//$tweet_stream .= $tweet['text'] . '<br/><br/>';
		$tweet_stream[] = $tweet['text'];
	}

	// Send the tweets back to the Ajax request
	print (json_encode($tweet_stream));
	
// Handle errors from API request
} else {
	if ($http_code == 429) {
		print 'Error: Twitter API rate limit reached';
	} else {
		print 'Error: Twitter was not able to process that request';
	}
}
?>