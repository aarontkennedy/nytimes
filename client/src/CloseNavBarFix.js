import $ from 'jquery';
/* https://github.com/twbs/bootstrap/issues/12852#start-of-content */
$(document).on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a') && ( $(e.target).attr('class') !== 'dropdown-toggle' ) ) {
        $(this).collapse('hide');
    }
});