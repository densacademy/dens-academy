var cards = $('.card-progress');

// Filter function
$( ".courses-menu .tab" ).click(function() { 
    // Get data of category

    var customType = $( this ).data('filter'); // category
    
    cards
        .hide()
        .filter(function () {
            return $(this).data('cat') === customType;
        })
        .fadeIn();
});

// Show All
$( "[data-filter='all']" ).click(function() {
    cards.fadeIn();
});

// Navigation Tab Active on Click
$(".courses-menu .tab").click(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
});