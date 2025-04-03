function handleResponse(event) {
    let status = event.detail.xhr.status;
    let response = event.detail.xhr.responseText;

    try {
        let json = JSON.parse(response);
        response = json.error || response;  // Extract error message
    } catch (e) {
        // Not JSON, use raw text
    }

    if (status !== 200) {
        document.getElementById("response-message").innerText = 
            `Error ${status}: ${response}`;
    } else {
        document.getElementById("response-message").innerText = 
            "Order submitted successfully!";
        document.getElementById("response-message").style.color = "green";
    }
}