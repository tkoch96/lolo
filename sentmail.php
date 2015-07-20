<?php
ob_start();
function sendMail($to, $message, $from)
{

    if($headers == null){
        $headers = "From: " . $from . "\r\n";
        //$headers .= 'Reply-To: someoneElseWhoIsNotMe@noOneWillReadThis.qwerty' . "\r\n";
        $headers .= 'Content-type: text/html' . "\r\n";
        $headers .= 'MIME-Version: 1.0' . "\r\n";
        $headers .= "Content-Type: text/html; \r\n";
    }


    return mail($to, $subject, $message, $headers);
} 
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$sendMailTo = 'laurel.com';
	
	$from = $name . "<" . $email . ">";
	if(sendMail($sendMailTo, $message, $from )){
		echo "GOOD good. <!-- Mail Sent to " . $to . "-->";
		header("Location: sentMail.html");
	}
    else
		echo "<br>Error sending mail<br>";
	echo "<a href=\"javascript:history.go(-1)\">GO BACK</a>";
	
	
?>