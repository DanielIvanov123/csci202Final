$(document).ready(function() {
    function updateIframe() {
        var value = $('#page-slider').val();
        var percentage = (value - 1) / 24;
        var leftPosition = percentage * 1000;  // Assuming the slider is 1000px wide

        $('#slider-value').text(value);
        $('#slider-value-container').css('left', leftPosition + 'px');

        $('.my-iframe').hide();
        $('#iframe' + ((value-1) + 1)).show();

        $('.info-overlay').hide();
        $('.info-button').hide();
        $('#iframe-container' + ((value-1) + 1) + ' .info-button').show();

        // Check if info tab was open previously and open it
        var infoTabState = localStorage.getItem('infoTabState');
        if (infoTabState === 'open') {
            $('#iframe-container' + ((value-1) + 1) + ' .info-overlay').show();
        }
    }

    $('#page-slider').on('input', function() {
        updateIframe();
    });

    $('.info-button').click(function() {
        var infoOverlay = $(this).siblings('.info-overlay');
        infoOverlay.fadeIn();

        // Store info tab state as open in local storage
        localStorage.setItem('infoTabState', 'open');
    });

    $('.close-button').click(function() {
        var infoOverlay = $(this).parent('.info-overlay');
        infoOverlay.fadeOut();

        // Store info tab state as closed in local storage
        localStorage.setItem('infoTabState', 'closed');
    });

    updateIframe();
});
