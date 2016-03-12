(function ($) {
    $('body').append('<div id="microinject-dialog" title="Indtast dit telefonnummer for at købe artiklen">\
        <p><form class="buy-form"><input type="text"></input></form></p>\
        <a class="buy">Køb (kr. 1,50)</a>\
    </div>');

    $('.subscriber-hide a').text('Køb (kr. 1,50)');
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
        
        // Set article link on buy button
        $("form.buy-form").attr('action', $(this).closest('li.views-row').find('a').attr('href'));
        $("#microinject-dialog .buy").attr('href', $(this).closest('li.views-row').find('a').attr('href'));
        e.preventDefault();
        return false;
    });
}(jQuery));