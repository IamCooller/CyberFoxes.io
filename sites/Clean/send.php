<?php
$name = $_POST['name'];
$email = $_POST['email'];
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$name = urldecode($name);
$email = urldecode($email);
$name = trim($name);
$email = trim($email);
echo $name;
echo "<br>";
echo $email;
if (mail("vladkolomiets2012@gmail.com", "Заявка с сайта", "Имя:".$name.". E-mail: ".$email ,"From: http://clean \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>