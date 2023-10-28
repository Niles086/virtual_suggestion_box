// Function to add a new suggestion
function addSuggestion() {
    const suggestionInput = document.getElementById("suggestion");
    const suggestionText = suggestionInput.value.trim();

    if (suggestionText !== "") {
        saveSuggestion(suggestionText);
        suggestionInput.value = "";
    }
}

// Function to save a suggestion on the server
function saveSuggestion(suggestion) {
    fetch('save_suggestion.php', {
        method: 'POST',
        body: JSON.stringify({ suggestion: suggestion }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Optionally, you can display a confirmation message on the main page.
    });
}
