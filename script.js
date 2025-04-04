document.getElementById("ticket-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;  // New Age field
    var seat = document.getElementById("seat").value;
    var date = new Date().toISOString().split('T')[0];  // Current date as the Date of Booking
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var travelDate = document.getElementById("travel-date").value;  // Date of Travel
    var acType = document.getElementById("ac-type").value;
    var gender = document.getElementById("gender").value;

    var ticketId = "T" + Math.floor(Math.random() * 10000);

    var tableBody = document.getElementById("history-table-body");
    var newRow = tableBody.insertRow();
    newRow.innerHTML = "<td>" + ticketId + "</td><td>" + name + "</td><td>" + age + "</td><td>" + seat + "</td><td>" + date + "</td><td>" + from + "</td><td>" + to + "</td><td>" + travelDate + "</td><td>" + acType + "</td><td>" + gender + "</td><td><button class='delete-btn' data-ticket-id='" + ticketId + "'>Delete</button></td>";

    alert("Ticket with ID " + ticketId + " has been booked successfully.");
    document.getElementById("ticket-form").reset();
});

document.getElementById("view-history-btn").addEventListener("click", function() {
    document.getElementById("ticket-history").style.display = "block";
});

document.getElementById("ticket-history").addEventListener("click", function(event) {
    if (event.target.classList.contains('delete-btn')) {
        var ticketIdToDelete = event.target.getAttribute('data-ticket-id');
        event.target.closest('tr').remove();
        alert("Ticket with ID " + ticketIdToDelete + " has been deleted.");
    }
});
