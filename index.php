<?php
$agent = $_SERVER['HTTP_USER_AGENT'];
if(preg_match('/Mobi/',$agent)) {
	$mobChoice = '';
}
else $mobChoice = '';
$language = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
if (($language !== 'fr') && ($language !== 'de')){
	$language = 'de';
}
header('Location: ./'.$mobChoice.$language.'/index.php');
exit(); 
?> 