function openNav() {
    $('.sidebar-overlay').show();
    $('#mySidebar').css({width: '240px'});
    $('.sidebar-inner').fadeIn('slowest');
    $('html,body').css({overflow: 'hidden'});
}

function closeNav() {
    $('.sidebar-overlay').hide();
    $('#mySidebar').css({width: '0'});
    $('.sidebar-inner').hide();
    $('html, body').css({overflow: 'visible'});
}