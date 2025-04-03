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