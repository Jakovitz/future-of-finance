// ==UserScript==
// @name Microinject
// @version 0.1
// @description Lorem ipsum durum
// @author kje
// @author krj
// @author jmn
// @include	http://*.information.*
// @include	https://*.information.*
// @noframes
// @namespace Microinject
// ==/UserScript==

if (typeof jQuery !== 'undefined') {
    init(jQuery);
}

function init($) {
    $('head').append('<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>');
    $('head').append('<script src="https://raw.githubusercontent.com/Jakovitz/future-of-finance/master/src/main/webapp/main.js"></script>');
    $('head').append('<link rel="stylesheet" href="https://raw.githubusercontent.com/Jakovitz/future-of-finance/master/src/main/webapp/style.css">');
}
