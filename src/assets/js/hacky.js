$(document).ready(function () {
    $(window).bind('hashchange', function () {
        console.log(document.URL);
    });
});

