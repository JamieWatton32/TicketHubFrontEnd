function handleResponse(event) {
    let status = event.detail.xhr.status;
    let response = event.detail.xhr.responseText;
    let responseDiv = document.getElementById("response-message");

    try {
        let json = JSON.parse(response);
        response = json.error || json.message || response;
    } catch (e) {
        // If response is not JSON, leave it as is
    }

    if (status === 200) {
        responseDiv.innerHTML = `<div class="alert alert-success">✅ Order submitted successfully!</div>`;
    } else {
        responseDiv.innerHTML = `<div class="alert alert-danger">❌ Error ${status}: ${response}</div>`;
    }
}

document.addEventListener('htmx:load', function(event) {
    // This event fires after HTMX content has been loaded and processed.
    const concertIdInput = document.getElementById('concertId');
    const urlParams = new URLSearchParams(window.location.search);
    const concertId = urlParams.get('ConcertId');

    if (concertIdInput) {
        concertIdInput.value = concertId;
    }
});

document.addEventListener('htmx:load', function(event) {
    // This event fires after HTMX content has been loaded and processed.
    const concertNameH3 = document.getElementById('concertName');
    const urlParams = new URLSearchParams(window.location.search);
    const concertName = urlParams.get('ConcertName');

    if (concertName) {
        concertNameH3.innerHTML+=concertName
    }
});



