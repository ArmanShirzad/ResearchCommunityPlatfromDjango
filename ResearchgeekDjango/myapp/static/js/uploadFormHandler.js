document.addEventListener('DOMContentLoaded', function() {
    var uploadForm = document.getElementById('upload-form');
    if(uploadForm) {
        uploadForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Create a FormData object, passing the form as a parameter
            var formData = new FormData(uploadForm);

            // Fetch the CSRF token from the cookie
            var csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

            // Perform the AJAX request
            fetch("/assign_doi/", {  // Make sure to use the correct path to the assign_doi view
                method: 'POST',
                headers: {
                    // Add the CSRF token to the request header
                    'X-CSRFToken': csrftoken
                },
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if(data.doi) {
                    // If a DOI was assigned, alert the user or update the DOM as needed
                    alert('Assigned DOI: ' + data.doi);
                } else {
                    // Handle any errors returned from the server
                    alert('An error occurred while assigning the DOI.');
                }
            })
            .catch((error) => {
                // Handle errors related to the fetch operation
                console.error('Error:', error);
                alert('Failed to assign DOI.');
            });
        });
    }
});
