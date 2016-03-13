// https://www.sparnord.dk/om-spar-nord/presse/pressemeddelelser.aspx
// <div id="setup" class="setup"> .... <div class="list"><div class="list"><ul>
var announcement = '<li>\
    <div class="lft">\
        <p>13.03.2016</p>\
    </div>\
    <div class="rgt">\
        <a href="/om-spar-nord/presse/pressemeddelelser/2016/februar-gn-store-nord-aktien-i-milliardhop.aspx">Spar Nord fordobler donationer til ny taghave på Sygehus Nord\'s børneafdeling for kræftramte børn</a>\
    </div>\
    <div class="clr"> </div>\
</li>';

$('div.setup').find('div.list').find('div.list').find('ul').prepend(announcement);

// https://www.sparnord.dk/om-spar-nord/presse/pressemeddelelser/2016/februar-gn-store-nord-aktien-i-milliardhop.aspx
