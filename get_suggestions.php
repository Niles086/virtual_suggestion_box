<?php
$data = file_get_contents("suggestions.txt");
$suggestions = json_decode($data, true);
echo json_encode($suggestions);
?>
