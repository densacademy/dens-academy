// focus ke next input setelah input maxlength reached
$('.otp').keyup(function() {
    if ($(this).val().length == $(this).attr("maxlength")) {
        $(this).closest('div').next().find('.otp').focus();
    }
});

// focus ke prev input ketika menghapus
$(".otp").keyup(function(){
    var key = event.keyCode || event.charCode;
    if( key == 8 || key == 46 ){
        $(this).closest('div').prev().find('.otp').focus();
    }
})

// disable button jika input field empty
$('.otp').on('keyup', function() {
    let empty = false;

    $('.otp').each(function() {
      empty = $(this).val().length == 0;
    });

    if (empty)
      $('.btn-submit').attr('disabled', 'disabled');
    else
      $('.btn-submit').attr('disabled', false);
  });