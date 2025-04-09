
document.addEventListener('click', function(event) {
    const link = event.target.closest('a');
    if (link && link.closest('.photo-item')) {
        event.preventDefault(); // Prevent the default navigation
        const concertId = link.closest('.photo-item').dataset.concertId;
        const concertName = link.closest('.photo-item').dataset.concertName;
        window.location.href = `order-form.html?ConcertId=${concertId}&ConcertName=${concertName}`;
    }
});
