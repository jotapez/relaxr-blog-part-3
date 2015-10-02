/*global document, $ */
(function () {
    'use strict';

    $(document).ready(function () {
        /* ----- Begin writing your JavaScript here  ------*/
        $('.readmore a').click(function () {
            // slide down content
            $('.post .hide').slideDown();
});
            $('.readless a').click(function () {
            $('.post .hide').slideUp();
});
            $('.learnmore').click(function () {
            $('#sidebar .hide').slideDown();
            $('.learnmore').hide(); 
});
        // $('.readless hide').on(click



        // hide content


        // 

        /* ----- Finish writing your JavaScript here  -----*/
    });
}());