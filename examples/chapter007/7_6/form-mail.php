<?php
// Data for the configuration
$mailto      =  'youraddress@address.com';
$mailFrom = 'form-mailer PHP script';
$mailSubject =  'Feedback from PHP form';
$returnPage  =  'http://serveraddress/thankyou.html';
$returnError =  'http://serveraddress/error.html';
$mailContent =  '';

// Read form data and create mail from it
if(isset($_POST)) {
  foreach($_POST as $name => $value) {
   $mailContent .= $name . " : " . $value . "\n";
  }
}
// Send email
$mailSent = mail( $mailto, $mailSubject, $mailContent,
                  "From: " . $mailFrom );
// Check email dispatch
if($mailSent === TRUE) {
  header("Location: " . $returnPage);
}
else {
  header("Location: " . $returnError);
}
exit();
?>
