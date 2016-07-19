// MENU CALLS - ANIMATION IN GSAP

$( document ).ready(function() {

    // GSAP MENU MOTION FOR .menu-fixed

    if ( $( "header" ).is( ".menu-fixed" ) ) { 

        // GET ANIMATIONS PRIMED     
        var element = $('.inner');
        var menu_border = $('nav');
        TweenMax.to(element, 0.1, {scale: 0.85, autoAlpha: 0});  

        // OPEN MENU  
        $("#open-menu").click(function() {  

           $(".inner").show( 10, function() {
                $(".toggle").hide();
                $("body").addClass("menu-visible");
                TweenMax.to(element, 0.5, {scale: 1, autoAlpha: 1}); 
                $("#content").addClass("menu-over");

           });    
           
        });

        // CLOSE MENU  
        $("#close_menu").click(function() {
              $(".toggle").show();
              $("body").removeClass("menu-visible");
              TweenMax.to(element, 0.5, {scale: 0.85, autoAlpha: 0, display: 'block'});    
             $("#content").removeClass("menu-over");   
        });

            // CLOSE MENU ON OUTSIDE CLICK 
            if ( $( "#overlay" ).is( ":visible" ) ) { 
              $(document).mouseup(function (e)
                {
                    var container = $(".navbar");
                     // if target click isn't inside container... CLOSE MENU
                        if (!container.is(e.target) && container.has(e.target).length === 0)  
                    // ... or a child element of container ... CLOSE MENU
                        {   
                          $("body").removeClass("menu-visible");
                           $(".toggle").show();
                           TweenMax.to(element, 0.5, {scale: 0.85, autoAlpha: 0, display: 'block'});    
                            $("#content").removeClass("menu-over");  
                        }
                });
            }
    }

    /*** END .menu-fixed   ***/

});
