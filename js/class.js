// show only video player if link to video is clicked
$('.link-video').click(showVideo);
function showVideo() {
    $('#document, #exam, #finish, #answers').hide();
    $('#video').fadeIn();
    $('#class-syllabus').show();

    // highlight 
    $(".active").removeClass("active");
    $(this).find('li').addClass("active");

}

// show only document if link to pdf is clicked
$('.link-document').click(showDocument);
function showDocument() {
    $('#video, #exam, #finish, #answers').hide();
    $('#document').fadeIn();
    $('#class-syllabus').show();

    // highlight 
    $(".active").removeClass("active");
    $(this).find('li').addClass("active");
}

// show only exam if link to exam is clicked
$('.link-exam').click(showExam);
function showExam() {
    $('#video, #document, #finish, #answers').hide();
    $('#exam').fadeIn();

    // highlight 
    $(".active").removeClass("active");
    $(this).find('li').addClass("active");

    // Hide Syllabus on small screen & only if exam is active.
    function screenWidth() {
        if($(window).innerWidth() < 992) {
            if($('#exam').is(':visible')){
                $('#class-syllabus').hide();
            }
        } else {
            $('#class-syllabus').show();
        }
    }

    // Fire.
    screenWidth();

    // And recheck when window gets resized.
    $(window).bind('resize',function(){
        screenWidth();
    });

}

// show only score results & certificate if link to certificate is clicked
function showFinish() {
    $('#video, #document, #exam, #answers').hide();
    $('#finish').fadeIn();

    // Hide Modal
    $('#finish-exam').fadeOut(500);
    setTimeout(function(){
       $('#finish-exam').modal("hide");
    }, 1000);

    // Hide Syllabus on small screen & only if exam is active.
    function screenWidth() {
        if($(window).innerWidth() < 992) {
            if($('#finish').is(':visible')){
                $('#class-syllabus').hide();
            }
        } else {
            $('#class-syllabus').show();
        }
    }

    // Fire.
    screenWidth();

    // And recheck when window gets resized.
    $(window).bind('resize',function(){
        screenWidth();
    });
}


// show only answers if link to answers is clicked
function showAnswers() {
    $('#video, #document, #exam, #finish').hide();
    $('#answers').fadeIn();

    // Hide Syllabus on small screen & only if exam is active.
    function screenWidth() {
        if($(window).innerWidth() < 992) {
            if($('#answers').is(':visible')){
                $('#class-syllabus').hide();
            }
        } else {
            $('#class-syllabus').show();
        }
    }

    // Fire.
    screenWidth();

    // And recheck when window gets resized.
    $(window).bind('resize',function(){
        screenWidth();
    });

}

// addition progress bar jika tombol selanjutnya diclick
$('.next').click(function() {
    // change percentage value
    var currentval = parseInt($('.percentage').html());
    var addition = currentval + 25;
    $('.percentage').html(addition)

    // set max percentage 100
    if (addition > 100){
        var addition = 100;
        $('.percentage').html(addition)
    }

    // change progress bar
    $('.progress-bar').attr({'aria-valuenow': addition, "style": 'width:'+ addition + '%'} );

    // ganti halaman dummy
    showDocument()
})

// substract progress bar jika tombol sebelumnya diclick
$('.prev').click(function() {
    // change percentage value
    var currentval = parseInt($('.percentage').html());
    var subsctraction = currentval - 25;
    $('.percentage').html(subsctraction)

    // set max percentage 100
    if (subsctraction < 0){
        var subsctraction = 0;
        $('.percentage').html(subsctraction)
    }

    // change progress bar
    $('.progress-bar').attr({'aria-valuenow': subsctraction, "style": 'width:'+ subsctraction + '%'} );

    // ganti halaman dummy
    showVideo()
})