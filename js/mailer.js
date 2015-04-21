$(function() {

    // Get the form.
    var form = $('#ajax-contact');
    var submit_form = $("#submit_form")
    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(submit_form).on("click", function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();
        console.log("sending form...")
        // Serialize the form data.
        var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
      }).done(function(response) {

    // // Make sure that the formMessages div has the 'success' class.
        // $(formMessages).removeClass('error');
        // $(formMessages).addClass('success');

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $('#name').val('');
        $('#last_name').val('');
        $('#email').val('');
        $('#story').val('');
        $('#location').val('');
        $('#image_url').val('');
      }).fail(function(data) {
        // // Make sure that the formMessages div has the 'error' class.
        // $(formMessages).removeClass('success');
        // $(formMessages).addClass('error');

        // Set the message text.
        if (data.responseText !== '') {
            debugger
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }
      });
    });
});