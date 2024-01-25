var pantalla = $(window).width();

$(window).scroll(function () {

  // Altura header
  if ($(this).scrollTop() > 50)
    $("#headerPage").addClass('scrolled');
  else
    $("#headerPage").removeClass('scrolled');

});

jQuery(document).ready(function($) {

    //Acordeon cookies en Politica de privacidad
    $(".accordionCookies .cookieType").on('click keydown', function(e) {
        // e.preventDefault();
        if (e.type === "click" || (e.type === "keydown" && e.keyCode === 13)) {
           
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                $(this).attr('aria-expanded', 'false');
                $(".collapse").hide();
            } else {
                $('.accordionCookies .cookieType').removeClass('open');
                $('.accordionCookies .cookieType').attr('aria-expanded', 'false');
                $(this).toggleClass('open');
                $(this).attr('aria-expanded', 'true');
                $(".collapse").hide();
                $(this).next(".collapse").slideToggle(50);
                // $('html, body').animate({scrollTop: $(this).offset().top - 80}, 300);         
            };
        };
    });

    $('.showMenu').on('click', function(e) {
        e.preventDefault();
        //$("#headerPage .searchContent").removeClass('activo');
        $(this).toggleClass('open');
        $("#mainNav").parent().toggleClass('active');
        if ($(this).hasClass('open')) {
            // $('.searchContent').css('display', 'none');
             //$('#mainNav, .overlay').css('display', 'block');
            $("#mainNav").addClass('active');
            //$("#headerPage #mainNav .temas").addClass('open');
            $(".topMenu").hide();  
         
            $(this).attr('aria-expanded', 'true');
             $("body").addClass('fixBody');
        } else {
            $("#mainNav").removeClass('active');
            $("#mainNav ul li").removeClass('active');
            $("#mainNav ul li > ul").parent().find('> a').attr('aria-expanded', 'false');
            $(this).attr('aria-expanded', 'false');
            $("#headerPage #mainNav .temas").removeClass('open');
            $(".topMenu").show(); 
            // $('#mainNav, .footerMobile, .overlay, .searchContent').removeAttr('style');
             //$('#mainNav, .overlay').removeAttr('style');
             $('#mainNav').removeAttr('style');
             $("body").removeClass('fixBody');
        }
    });

    //Despliega caja de búsqueda y cierra el menú
    $('#headerPage .showSearch').on('click', function (e) {
        e.preventDefault();
        $("#headerPage .claim").toggle();
        $(".searchContent").toggleClass('activo');
        setTimeout(function () {
          $('.searchContent .textSearch').focus();
        }, 700);
    });  

    $('.searchContent .showFilter').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('.searchContent .btnReset').toggle();
    });  

    $('.searchContent form fieldset.listTags label').on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('selected')){
                $(this).removeClass('selected');
                $('input', this).prop("checked", false);  
        }else{  
            $(this).addClass('selected');
            $('input', this).prop("checked", true);
        }
    }); 

    $('.searchContent form .btnReset').on('click', function (e) {
        e.preventDefault();
        $('.searchContent form fieldset.listTags label').removeClass('selected');  
        $('.searchContent form fieldset.listTags input').prop("checked", false);  
        $('.searchContent form fieldset.fecha select').prop('selectedIndex',0);  
    }); 

    $('#headerPage #mainNav li.temas').on('click', function (e) {
       // e.preventDefault();
        $("#headerPage #mainNav .temas").toggleClass('open');
    })

    $('.hdPost .readMore').on('click', function (e) {
        e.preventDefault();
        $('.hdPost .summary').toggleClass('open')
    });

    $('.customCheck input').change(function(){
        if($(this).is(":checked")) {
            $(this).closest('label').addClass("ckTick");
        } else {
            $(this).closest('label').removeClass("ckTick");
        }
    });

    //Sliders
    var swiper = new Swiper(".modCarrusel", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var swiper = new Swiper(".modScroll .slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
          },
          breakpoints: {
            768: {
              slidesPerView: 3.3,
            },
          },
    });

    var swiper = new Swiper(".modScroll.col4 .slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
          },
          breakpoints: {
            768: {
              slidesPerView: 4.2,
            },
          },
    });

    var swiper = new Swiper(".modPodcast .slider", {
        slidesPerView: 1,
        spaceBetween: 60,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
          },
          breakpoints: {
            768: {
              slidesPerView: 2.7,
              spaceBetween: 60,
            },
          },
    });

    //Selección pestañas
    $('.tabs li').on('click', function (e) {
        e.stopPropagation();
        $('.tabs li').removeClass('current');
        $(this).addClass('current');
        id_panel = $(this).attr('aria-controls');
        $('.contentTab').removeClass('current');
        $('.contentTab#' + id_panel).addClass('current');  
        $('.contentTab#' + id_panel).focus({preventScroll:true});
    });

    //Selección etiquetas
    $('.tagsTemas li').on('click', function (e) {
        e.stopPropagation();
        $(this).toggleClass('selected');
    });

    $('.hdPost .contentImg.wrapVideo').on('click',function(){
        $(this).toggleClass('playing')
        vid = $(".hdPost .contentImg.wrapVideo video")[0];
        vid.paused ? vid.play() : vid.pause();
    });

});
