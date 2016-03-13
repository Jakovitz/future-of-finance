
// https://www.sparnord.dk/om-spar-nord/presse/pressemeddelelser/2016/februar-gn-store-nord-aktien-i-milliardhop.aspx
// <div class="cmenu-t2"> .... <div class="head">
var articleHead = '<h1>Spar Nord fordobler donationer til ny taghave på Sygehus Nords børneafdeling for kræftramte børn</h1>';

// <div id="setup" class="setup"> ... <div class="pad"> 
var articleAndDonate = '<p>\
<strong>I et samarbejde med Kræftens Bekæmpelse matcher Spar Nord alle donationer til funding af den nye taghave på Sygehus Nords børneafdeling. \
</strong>\
<br>\
<br>\
Sygehus Nord har en tagterrasse, hvor børn og deres forældre fra kræftafdelingen, kan få et tiltrængt frirum fra hospitalets sterile stuer. \
Men bla. sygeplejersker og forældre har igennem de senere år udtrykt et stort ønske om en forskønnelse af terrassen med blomster, træer og bedre legeredskaber. \
Regionen fattes dog penge, så Spar Nord har i samarbejde Kræftens Bekæmpelse og Sygehus Nord indgået et donations samarbejde hvor private og virksomheder kan donerer penge til projektet. \
Og hvor Spar Nord fordobler alle donationer frem til 1. maj.\
</p>\
<p>\
<img src="https://fof.local:8443/swipp.svg" style="height: 26px; width: auto; position: relative; top: 4px;" /> <a id="microinject-init" href="onclick();" style="text-decoration: none;">Doner beløb</a>\
</p>';

document.title = "Spar Nord fordobler donationer til ny taghave på Sygehus Nords børneafdeling for kræftramte børn";
window.history.pushState('page2', 'Title', '/om-spar-nord/presse/pressemeddelelser/2016/spar-nord-fordobler-donationer-til-ny-taghave-paa-sygehus-nords-boerneafdeling-for-kraeftramte-boern.aspx');

(function ($) {

    $('div.head').html(articleHead);
    $('div.intro').find('div.pad').html(articleAndDonate);

    $('body').append('<div id="microinject-dialog" title="Betal med Swipp">\
        <form class="buy-form"><a href="#" style="display: block; margin-top: 10px; outline: 0; color: #d00; font-weight: 700; font-size: 13px;">Jeg er ikke Rasmus (20894692)</a></form>\
        <a class="buy" style="margin-top: 17px;"><img src="https://fof.local:8443/swipp.svg" style="height: 22px;"><span style="float: right;">Kr. 5</span></a>\
        <a class="buy"><img src="https://fof.local:8443/swipp.svg" style="height: 22px;"><span style="float: right;">Kr. 10</span></a>\
        <a class="buy"><img src="https://fof.local:8443/swipp.svg" style="height: 22px;"><span style="float: right;">Kr. 20</span></a>\
        <a id="microinject-buy" class="buy"><img src="https://fof.local:8443/swipp.svg" style="height: 22px;"><span style="float: right;">Kr. 50</span></a>\
    </div>');

    $('body').append('<div id="microinject-receipt-dialog" title="Bekræft donationen">\
        <a id="microinject-confirm" class="buy"><img src="https://fof.local:8443/swipp.svg" style="height: 22px;"><span style="float: right;">Kr. 50</span></a>\
    </div>');

    $('.subscriber-hide a').each(function () {
        var link = $(this).closest('li.views-row').find('a').attr('href');

        if (localStorage.getItem(link)) {
            $(this).hide();
        } else {
            $(this).text('Køb (kr. 2,25)');
        }
    });

    if (localStorage.getItem('phone')) {
        $('#microinject-dialog .buy-form').html('<a href="#" style="color: #d00; font-weight: 700; font-size: 13px;">Jeg er ikke Rasmus (20894692)</a>');
    }

    $('.premium-title-label a').text('Køb (kr. 2,25)');
    $('#mini-panel-non_subscriber_ad_article h3').text('Læs artiklen');
    $('#mini-panel-non_subscriber_ad_article p:first a').text('Kr. 0,50');

    $('#microinject-init').on('click', function (e) {
        var clicked = $(this);

        $("#microinject-dialog").dialog({
            minHeight: 0,
            width: 300,
            dialogClass: 'microinject-dialog',
            position: {
                my: "left-10 bottom",
                at: "left top+33",
                of: $(this)
            }
        });
        
        $('.ui-icon-grip-diagonal-se').hide();

        var transact = function (e) {
            $("#microinject-dialog").dialog('close');

            $("#microinject-receipt-dialog").dialog({
                minHeight: 0,
                width: 300,
                dialogClass: 'microinject-dialog',
                position: {
                    my: "left-10 bottom",
                    at: "left top+33",
                    of: clicked
                }
            });
            
            $('.ui-icon-grip-diagonal-se').hide();

            $('#microinject-confirm').on('click', function (e) {
                $('#microinject-confirm').addClass('busy');
                $('#microinject-confirm').html('<img src="https://fof.local:8443/swipp.svg" style="height: 22px;"><span style="float: right;">Behandler</span>');

                setTimeout(function () {
                    $('#microinject-confirm').addClass('thanks');
                    $('#ui-dialog-title-microinject-receipt-dialog').text('Tak for donationen');
                    $('#microinject-confirm').html('<img src="https://fof.local:8443/swipp.svg" style="height: 22px;"><span style="float: right;">Projektet modtager 100,-</span>');
                }, 300);

            });

            e.preventDefault();
            return false;
        };

        $('#microinject-buy').on('click', transact);

        e.preventDefault();
        return false;
    });
}(jQuery));
