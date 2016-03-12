(function ($) {
    $('body').append('<div id="microinject-dialog" title="Læs artiklen">\
        <a class="buy">Køb (kr. 0,50)</a>\
    </div>');

    $('.subscriber-hide a').text('Køb (kr. 0,50)');
    $('.premium-title-label a').text('Køb (kr. 0,50)');
    $('#mini-panel-non_subscriber_ad_article h3').text('Læs artiklen');
    $('#mini-panel-non_subscriber_ad_article p:first a').text('Kr. 0,50');

    $('.subscriber-hide a').on('click', function (e) {
        $("#microinject-dialog").dialog({
            minHeight: 0,
            closeText: "x",
            dialogClass: 'microinject-dialog',
            position: {
                my: "left-10 bottom",
                at: "left top+28",
                of: $(this)
            }
        });
        e.preventDefault();
        return false;
    });
}(jQuery));