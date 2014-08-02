$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['home_screen', 'events_screen', 'about_screen', 'team_screen', 'calendar_screen', 'contact_screen'],
    	slidesNavigation: true,
    	resize: true,
    	scrollOverflow: true,
    	menu: 'nav',
    	css3: true,
        paddingTop: '100px',
        menu: '.nav'
    });
    /*$('.section').slimScroll({
    	width: '100%'
    });*/
});