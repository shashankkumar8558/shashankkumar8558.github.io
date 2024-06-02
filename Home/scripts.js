$(document).ready(function () {
  // Show the contact modal when the 'Contact Us' button is clicked
  $('#contactBtn').click(function () {
    $('#contactModal').modal('show');
  });

  // Handle the form submission
  $('#contactForm').submit(function (event) {
    event.preventDefault(); // Prevent the default form submission

    $.ajax({
      url: $(this).attr('action'), // Get the form action URL
      method: $(this).attr('method'), // Get the form method (POST)
      data: $(this).serialize(), // Serialize the form data
      success: function (response) {
        alert('Form submitted successfully!'); // Display a success message
        $('#contactModal').modal('hide'); // Hide the modal
      },
      error: function () {
        alert('There was an error submitting the form. Please try again.'); // Display an error message
      }
    });
  });
});
