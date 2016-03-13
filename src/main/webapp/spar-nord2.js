
// https://www.sparnord.dk/om-spar-nord/presse/pressemeddelelser/2016/februar-gn-store-nord-aktien-i-milliardhop.aspx
// <div class="cmenu-t2"> .... <div class="head">
var articleHead = '<h1>Spar Nord fordobler donationer til ny taghave på Sygehus Nord\'s børneafdeling for kræftramte børn</h1>';

// <div id="setup" class="setup"> ... <div class="pad"> 
var articleAndDonate = '<p>\
<strong>I et samarbejde med kræftens bekæmpelse matcher Spar Nord alle donationer til funding af den nye taghave på Sygehus Nord\'s børneafdeling. \
</strong>\
<br>\
<br>\
Sygerplejesker har igennem de senere år udtrykt et stort ønske om en forskønnelse af ...\
</p>\
<p>\
<a href="onclick();">Donate</a>\
</p>';

document.title = "Spar Nord fordobler donationer til ny taghave på Sygehus Nords børneafdeling for kræftramte børn";
window.history.pushState('page2', 'Title', '/om-spar-nord/presse/pressemeddelelser/2016/spar-nord-fordobler-donationer-til-ny-taghave-paa-sygehus-nords-boerneafdeling-for-kraeftramte-boern.aspx');

$('div.head').html(articleHead);

$('div.intro').find('div.pad').html(articleAndDonate);