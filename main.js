(function ($) {
    $('body').append('<div id="microinject-dialog" title="Basic dialog">\
        <p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the \'x\' icon.</p>\
        <button>KØB</button>\
    </div>');

    $('.subscriber-hide a').text('Køb (kr. 0,50)');
    $('.premium-title-label a').text('Køb (kr. 0,50)');
    $('#mini-panel-non_subscriber_ad_article h3').text('Læs artiklen');
    $('#mini-panel-non_subscriber_ad_article p:first a').text('Kr. 0,50');

    $('.subscriber-hide a').on('click', function (e) {
        $("#microinject-dialog").dialog({
            position: {my: "left bottom", at: "left top", of: $(this)}
        });
        e.preventDefault();
        return false;
    });
}(jQuery));