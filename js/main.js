jQuery(document).ready(function () {

    // Scroll to Top
    jQuery('.scrolltotop').click(function () {
        jQuery('html').animate({
            'scrollTop': '0px'
        }, 400);
        return false;
    });

    jQuery(window).scroll(function () {
        var upto = jQuery(window).scrollTop();
        if (upto > 500) {
            jQuery('.scrolltotop').fadeIn();
        } else {
            jQuery('.scrolltotop').fadeOut();
        }
    });

    //jquery for toggle sub menus
    $('.sub-btn').click(function () {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.side-dropdown').toggleClass('rotate');
    });

    //collapse the sidebar
    $('.menu-btn').click(function () {
        $('.sidebar-menu').addClass('active');

    });

    $('.close-btn').click(function () {
        $('.sidebar-menu').removeClass('active');
    });

    //search-bar
    $('.searchToggler').on('click', function (e) {
        e.preventDefault();
        $('.header01Search').addClass('active');
    });
    $('.cancleSearch').on('click', function (e) {
        e.preventDefault();
        $('.header01Search input').val('');
        $('.header01Search').removeClass('active');
    });

    //language
    $(function () { // Dropdown toggle
        $('.dropdown-toggle').click(function () {
            $(this).next('.dropdown').slideToggle();
        });

        $(document).click(function (e) {
            var target = e.target;
            if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle'))
            //{ $('.dropdown').hide(); }
            {
                $('.dropdown').slideUp();
            }
        });
    });


//main
});