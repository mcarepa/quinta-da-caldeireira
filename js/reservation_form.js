function toggleReservationForm() {
  $('.js-overlay').fadeToggle();
  $('.js-reservation-form').fadeToggle();
  $('body').toggleClass('no-scroll');
}

$(function() {
  $('.js-toggle-reservation-form').on('click', function(e) {
    e.preventDefault();
    toggleReservationForm();
  });
});

// validate contact form
$(function() {
    $('#reservation').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Precisa de preencher o campo de nome.",
                minlength: "O nome deve ter, no mínimo, 2 caractéres."
            },
            email: {
                required: "Insira um email válido."
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "process.php",
                success: function() {
                    $("#reservation").find(':input').val("");
                    toggleReservationForm();
                    //$('#success').fadeIn();
                },
                error: function() {
                    toggleReservationForm();
                    console.log('falhou');
                    //$('#error').fadeIn();
                }
            });
        }
    });
});
