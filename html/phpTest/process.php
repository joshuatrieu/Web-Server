<?php

DEFINE ('DB_USER' , 'test');
DEFINE ('DB_PASSWORD' , 'duckducks');
DEFINE ('DB_HOST' , 'localhost');
DEFINE ('DB_NAME' , 'test')

$dbc = @mysqli_connect(DB_HOST , DB_USER, DB_PASSWORD, DB_NAME)
OR die('Could not connect to MySQL' . mysqli_connect_error());

?>
