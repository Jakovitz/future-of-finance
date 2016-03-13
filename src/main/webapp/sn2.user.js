// ==UserScript==
// @name MicroinjectSN2
// @version 0.1
// @description Lorem ipsum durum
// @author kje
// @author krj
// @author jmn
// @include	https://www.sparnord.dk/om-spar-nord/presse/pressemeddelelser/2016/*
// @noframes
// @namespace Microinject
// ==/UserScript==

if (typeof jQuery !== 'undefined') {
    init(jQuery);
}

function init($) {
    $('head').append('<script src="https://fof.local:8443/spar-nord2.js"></script>');
    $('head').append('<link rel="stylesheet" href="https://fof.local:8443/spar-nord.css">');
}
