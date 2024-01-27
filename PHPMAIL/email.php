<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Email</title>
</head>
<body>
<?php
$to_email = "yambaooo@mailinator.com";
$subject = "CODEEWORKS! WEBSITE";
$body = "NEWEST";
$headers = "From: luisegianyambao.asi@gmail.com";

if (mail($to_email, $subject, $body, $headers)) {
    echo "Email successfully sent to $to_email...";
} else {
    echo "FAILED TO SEND";
}

    

?>
    
</body>
</html>