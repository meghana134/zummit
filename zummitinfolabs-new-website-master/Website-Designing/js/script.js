/*===================
     Preloader
======================*/
$(window).on('load', function(){
    $('#infinity').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

/*===================
     owl-carousel
======================*/
$(function(){
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        nav: true,
        autoplayHoverPause: true,
        dots: false
    });
});

/*===================
     Waypoints
======================*/
$(function(){
    $("#progress-bars").waypoint(function(){
            $(".progress-bar").each(function(){
                $(this).animate({
                    width: $(this).attr("aria-valuenow") + "%"
                }, 1000);  
            });
        this.destroy();
    },{
        offset: 'bottom-in-view'
    });
});


/*==========================
     Isotope Filtering
==========================*/
$(window).on('load', function(){
    //initialise isotope
    $("#isotope-container").isotope({});
    
    //filter items on click
    $("#isotope-filter").on('click','button', function(){
        var filterValue = $(this).attr('data-filter');
        
        $("#isotope-container").isotope({ filter: filterValue });
        
        //active button
    $("#isotope-filter").find(".active").removeClass("active");
    $(this).addClass('active');
    
    });
});



/*==========================
    Magnific Popup
==========================*/

$(function(){
    $("#portfolio-wrapper").magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*==========================
     Client Testimonial
==========================*/
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
});

/*==========================
     Google Map
==========================*/
$(window).on('load', function(){
    
    var addressString = "Sipna College Of Engineering And Technology, Badnera Road, Gopal Nagar, Amravati, Maharashtra";
    var myLatlng = {lat: 20.884260, lng: 77.745018};
    
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 12, center: myLatlng});
    
    var marker = new google.maps.Marker({position: myLatlng, map: map, title:"Sipna College Of Engineering And Technology, Badnera Road, Gopal Nagar, Amravati, Maharashtra"});
    
    var infowindow = new google.maps.InfoWindow({  
        content: addressString
    });
    
    marker.addListener('click', function(){
        infowindow.open(map, marker);
    });
});












