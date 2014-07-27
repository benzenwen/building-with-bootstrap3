//
// Web App UI handlers
//

$(document).ready(function(){
    //
    // Tooltip at the top of the page. 
    //
    $('#tooltip-bpe').tooltip(
        { trigger: 'click focus hover manual' }
    )
});

    //
    // Popover on the misc tab.
    //
    $('#popover-bpe').popover()

    //
    // Loading state button
    //
    $('#loading-example-btn').click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function() { // add the state change callback here
            btn.button('reset')
        }, 2000)
    });

    //
    // Progress bar
    //
    $('#progress-example-btn').click(function () {
        var pbar = $('#progress-bpe')
        var prg = 0;
        function mov () {
            prg = prg + 10
            prg = prg > 100 ? 100 : prg
            pbar.attr('aria-valuenow', prg)
            pbar.css('width', prg.toString() + '%')
            pbar.text(prg.toString() + '%')
        }
        var tmr = setInterval(mov, 100) // add incremental check callback here
        setTimeout(function() { 
            clearInterval(tmr)
            prg = 0
            pbar.attr('aria-valuenow', prg)
            pbar.css('width', prg.toString() + '%')
            pbar.text(prg.toString() + '%')
        }, 3000)
    });

    // 
    // Modal
    //

    $('.tooltip-test').tooltip()
    $('.popover-test').popover()

    //
    // Alert alert
    //
    $('#alert-notice').tooltip('show');

    setTimeout(function() {
        $('#alert-notice').tooltip('hide');
    }, 3000);
