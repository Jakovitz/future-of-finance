(function ($) {
//    localStorage.clear();

    $('body').append('<div id="microinject-dialog" title="Indtast dit telefonnummer for at købe artiklen">\
        <p><form class="buy-form"><input id="microinject-input" type="text"></input></form></p>\
        <a id="microinject-buy" class="buy">Køb (kr. 1,50)</a>\
    </div>');

    $('body').append('<div id="microinject-receipt-dialog" title="Du er ved at købe">\
        <a id="microinject-confirm" class="buy">Bekræft køb (kr. 1,50)</a>\
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
        $('#microinject-dialog').attr('title', 'Velkommen tilbage');
        $('#microinject-dialog input').hide();
    }

    $('.premium-title-label a').text('Køb (kr. 1,50)');
    $('#mini-panel-non_subscriber_ad_article h3').text('Læs artiklen');
    $('#mini-panel-non_subscriber_ad_article p:first a').text('Kr. 0,50');

    $('.subscriber-hide a').on('click', function (e) {
        var clicked = $(this);

        $("#microinject-dialog").dialog({
            minHeight: 0,
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
                $('#microinject-confirm').html('Behandler');

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
        $("form.buy-form").on('submit', transact);

        e.preventDefault();
        return false;
    });
}(jQuery));