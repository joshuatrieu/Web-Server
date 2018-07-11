<?php

require_once('../process.php');
$query = "SELECT first_name, last_name, email, street, city, state, zip, phone, birth_date, FROM students";

$response = @mysqli_query($dbc , $query);

if($response){

echo '<table align="left"cellspacing="5" cellpadding="8">

<tr><td align="left"><b>First Name</b></td>
<td align="left"><b>Last Name</b></td>
<td align="left"><b>Email</b></td>
<td align="left"><b>Street</b></td>
<td align="left"><b>City</b></td>
<td align="left"><b>State</b></td>
<td align="left"><b>Zip</b></td>
<td align="left"><b>Phone</b></td>
<td align="left"><b>Birth Day</b></td></tr>';


while ($row = mysqli_fetch_array($response)){
  echo '<tr><td align="left">' .
  $row['first_name'] . '</td><td align="left">' .
  $row['last_name'] . '</td><td align="left">' .
  $row['email'] . '</td><td align="left">' .
  $row['street'] . '</td><td align="left">' .
  $row['city'] . '</td><td align="left">' .
  $row['state'] . '</td><td align="left">' .
  $row['zip'] . '</td><td align="left">' .
  $row['phone'] . '</td><td align="left">' .
  $row['birth_date'] . '</td><td align="left">';

  echo '</tr>';
}

echo '</table>';

} else {
  echo "Did not query. <br/>";

  echo mysqli_error($dbc);
}

mysqli_close($dbc);
?>
