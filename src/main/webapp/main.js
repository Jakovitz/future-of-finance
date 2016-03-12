(function ($) {
    $('body').append('<div id="microinject-dialog" title="Indtast dit telefonnummer for at købe artiklen">\
        <p><form class="buy-form"><input id="microinject-input" type="text"></input></form></p>\
        <a id="microinject-buy" class="buy">Køb (kr. 1,50)</a>\
    </div>');

    $('.subscriber-hide a').each(function () {
        var link = $(this).closest('li.views-row').find('a').attr('href');

        if (localStorage.getItem(link)) {
            $(this).hide();
        } else {
            $(this).text('Køb (kr. 1,50)');
        }
    });

    if (localStorage.getItem('phone')) {
        $('#microinject-dialog input').hide();
    }

    $('.premium-title-label a').text('Køb (kr. 1,50)');
    $('#mini-panel-non_subscriber_ad_article h3').text('Læs artiklen');
    $('#mini-panel-non_subscriber_ad_article p:first a').text('Kr. 0,50');

    $('.subscriber-hide a').on('click', function (e) {
        $("#microinject-dialog").dialog({
            minHeight: 0,
            closeText: "x",
            dialogClass: 'microinject-dialog',
            position: {
                my: "left-10 bottom",
                at: "left top+33",
                of: $(this)
            }
        });

        var link = $(this).closest('li.views-row').find('a').attr('href');
        localStorage.setItem(link, true);

        // Set article link on buy button
        $("form.buy-form").attr('action', link);
        $("#microinject-dialog .buy").attr('href', link);

        var transact = function (e) {
            $("#microinject-input").prop('disabled', true);
            $('#microinject-buy').addClass('busy');
            $('#microinject-buy').html('Behandler');

            setTimeout(function () {
                localStorage.setItem('phone', true);
                location.href = link;
            }, 3000);

            e.preventDefault();
            return false;
        };

        $('#microinject-buy').on('click', transact);
        $("form.buy-form").on('submit', function (e) {

            transact(e)
        });

        e.preventDefault();
        return false;
    });
}(jQuery));