<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents("suggestions.txt");
    $suggestions = json_decode($data, true);

    $newSuggestion = json_decode(file_get_contents('php://input'), true);
    $suggestions[] = $newSuggestion['suggestion'];

    file_put_contents("suggestions.txt", json_encode($suggestions));

    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error']);
}
?>
