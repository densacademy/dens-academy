var pages = $('.page');

// Filter function
$( ".courses-menu .tab" ).click(function() { 
    // Get data of category

    var customType = $( this ).data('filter'); // category
    
    pages
        .hide()
        .filter(function () {
            return $(this).data('cat') === customType;
        })
        .fadeIn();
});

// Navigation Tab Active on Click
$(".courses-menu .tab").click(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
});

// select all checkbox
function selectAll(source) {
    checkboxes = document.getElementsByName('select');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
}