<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$descr = $_POST['descr'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'mailerdobro@gmail.com ';                 // Наш логин
$mail->Password = 'dwcvhhekquixflyv';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('' . $email . '', ''. $email . '');   // От кого письмо 
$mail->addAddress('nanin3ko@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Нова заявка';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Імя: ' . $name . ' <br>
	Пошта: ' . $email . ' <br>
	Номер телефона: ' . $phone . '<br>
	Опис: ' . $descr . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>