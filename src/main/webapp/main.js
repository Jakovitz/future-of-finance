(function ($) {
    $('body').append('<div id="microinject-dialog" title="Betal med Swipp">\
        <form class="buy-form"><p><input id="microinject-input" type="text" placeholder="Telefonnummer"></input><br /><label><input type="checkbox" /> Husk mig på denne enhed</label></form>\
        <a id="microinject-buy" class="buy"><img src="https://raw.githubusercontent.com/Jakovitz/future-of-finance/master/src/main/webapp/swipp.svg" style="height: 22px;"><span style="float: right;">Kr. 2,25</span></a>\
    </div>');

    $('body').append('<div id="microinject-receipt-dialog" title="Bekræft købet">\
        <a id="microinject-confirm" class="buy"><img src="https://raw.githubusercontent.com/Jakovitz/future-of-finance/master/src/main/webapp/swipp.svg" style="height: 22px;"><span style="float: right;">Kr. 2,25</span></a>\
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
        $('#microinject-dialog .buy-form').html('Rasmus (20894692)');
        $('#microinject-dialog .buy-form').html('<a href="#" style="color: #d00; font-weight: 700; font-size: 13px;">Jeg er ikke Rasmus (20894692)</a>');
    }

    $('.premium-title-label a').text('Køb (kr. 2,25)');
    $('#mini-panel-non_subscriber_ad_article h3').text('Læs artiklen');
    $('#mini-panel-non_subscriber_ad_article p:first a').text('Kr. 0,50');

    $('.subscriber-hide a').on('click', function (e) {
        var clicked = $(this);

        $("#microinject-dialog").dialog({
            minHeight: 0,
            width: 200,
            dialogClass: 'microinject-dialog',
            position: {
                my: "left-10 bottom",
                at: "left top+33",
                of: $(this)
            }
        });

        var link = $(this).closest('li.views-row').find('a').attr('href');

        var transact = function (e) {
            $("#microinject-dialog").dialog('close');

            $("#microinject-receipt-dialog").dialog({
                minHeight: 0,
                width: 200,
                dialogClass: 'microinject-dialog',
                position: {
                    my: "left-10 bottom",
                    at: "left top+33",
                    of: clicked
                }
            });

            $('#microinject-confirm').on('click', function (e) {
                localStorage.setItem(link, true);
                $('#microinject-confirm').addClass('busy');
                $('#microinject-confirm').html('<img src="https://raw.githubusercontent.com/Jakovitz/future-of-finance/master/src/main/webapp/swipp.svg" style="height: 22px;"><span style="float: right;">Behandler</span>');

                if (localStorage.getItem('phone')) {
                    setTimeout(function () {
                        location.href = link;
                    }, 300);
                } else {
                    $(window).keypress(function (e) {
                        if (e.keyCode === 0 || e.keyCode === 32) {
                            e.preventDefault();
                            location.href = link;
                        }
                    });
                }
                
                localStorage.setItem('phone', true);
            });

            e.preventDefault();
            return false;
        };

        $('#microinject-buy').on('click', transact);

        e.preventDefault();
        return false;
    });
}(jQuery));
