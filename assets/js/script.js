$(document).ready(function () {

    new WOW().init();

    // code_checker

    $('#btn01').click(function () {
        $('.form_wrapper:has(.form_01)').css('display', 'block');
        $('.form_wrapper:has(.form_02)').css('display', 'none');
        $('.form_wrapper:has(.form_03)').css('display', 'none');
        $('#btn01').css('color', 'grey');
        $('#btn02, #btn03').css('color', '#474C63');

    });

    $('#btn02').click(function () {
        $('.form_wrapper:has(.form_02)').css('display', 'block');
        $('.form_wrapper:has(.form_01)').css('display', 'none');
        $('.form_wrapper:has(.form_03)').css('display', 'none');
        $('#btn01, #btn03').css('color', 'grey');
        $('#btn02').css('color', '#474C63');

    });

    $('#btn03').click(function () {
        $('.form_wrapper:has(.form_03)').css('display', 'block');
        $('.form_wrapper:has(.form_01)').css('display', 'none');
        $('.form_wrapper:has(.form_02)').css('display', 'none');
        $('#btn01, #btn02').css('color', 'grey');
        $('#btn03').css('color', '#474C63');
    });


    //  map_tooltip

    $(function () {
        $(".map__state").click(function (e) {
            e.stopPropagation();
            $(".map__state").removeClass("active");
            $(this).addClass("active");
            if ($(this).hasClass('sr')) {
                $('.tool_tip_el').css('visibility', 'hidden');
                $('.shimal_retsi').css('visibility', 'visible');
            } else if ($(this).hasClass('br')) {
                $('.tool_tip_el').css('visibility', 'hidden');
                $('.baki_retsi').css('visibility', 'visible');
            } else if ($(this).hasClass('cr')) {
                $('.tool_tip_el').css('visibility', 'hidden');
                $('.cenub_retsi').css('visibility', 'visible');
            } else if ($(this).hasClass('ar')) {
                $('.tool_tip_el').css('visibility', 'hidden');
                $('.aran_retsi').css('visibility', 'visible');
            } else if ($(this).hasClass('mar')) {
                $('.tool_tip_el').css('visibility', 'hidden');
                $('.merkezi_aran_retsi').css('visibility', 'visible');
            } else if ($(this).hasClass('qr')) {
                $('.tool_tip_el').css('visibility', 'hidden');
                $('.qerb_retsi').css('visibility', 'visible');
            } else if ($(this).hasClass('sqr')) {
                $('.tool_tip_el').css('visibility', 'hidden');
                $('.sqerb_retsi').css('visibility', 'visible');
            }
        });
    }());


    $(function () {
        $('html').click(function () {
            $('.tool_tip_el').css('visibility', 'hidden');
            $(".map__state").removeClass('active');
        });
    });

    //    footer_img

    $(function () {
        $(".sec3_link").mouseover(function () {
            if ($(this).hasClass('li1')) {
                $('.im1').css('-webkit-filter', 'grayscale(0%)').css('filter', 'grayscale(0%)').css('opacity', '1');
            } else if ($(this).hasClass('li2')) {
                $('.im2').css('-webkit-filter', 'grayscale(0%)').css('filter', 'grayscale(0%)').css('opacity', '1');
            } else if ($(this).hasClass('li3')) {
                $('.im3').css('-webkit-filter', 'grayscale(0%)').css('filter', 'grayscale(0%)').css('opacity', '1');
            } else if ($(this).hasClass('li4')) {
                $('.im4').css('-webkit-filter', 'grayscale(0%)').css('filter', 'grayscale(0%)').css('opacity', '1');
            }
        });
    }());

    // nav_toggle
    $(function () {
        $('.nav-item').click(function () {
            $('.sublink-div').css('display', 'none');
            $(this).children('.sublink-div').css('display', 'grid');
        });;
    });




    //  news_anchor_size
    $(function () {
        if ($(window).width() < 1481) {
            var dots = " ...";
            var limit = 80;


            if ($('.news_slogan').text().length > limit) {
                $('.news_slogan').text(
                    $('.news_slogan').text().substring(0, limit) + dots
                );
            }
        }
    });

    //up
    $('.up').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	

});