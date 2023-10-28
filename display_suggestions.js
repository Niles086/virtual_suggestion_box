// Function to display suggestions on the suggestion list page
function displaySuggestions() {
    const suggestionsList = document.getElementById("suggestions-list");

    fetch('get_suggestions.php')  // Fetch suggestions from the server
        .then(response => response.json())
        .then(suggestions => {
            suggestionsList.innerHTML = ""; // Clear the existing list

            suggestions.forEach((suggestion, index) => {
                const li = document.createElement("li");
                li.textContent = suggestion;
                suggestionsList.appendChild(li);
            });
        });
}

// Call the displaySuggestions() function when the page loads
window.addEventListener("load", displaySuggestions);
