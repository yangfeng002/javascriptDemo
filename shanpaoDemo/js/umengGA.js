/* 
*Created by fengyang on 2018/3/7
**/
$(function() {

    // auto track DOM with data-ga click event
    $(document).on('click', '[data-ga]', function(event) {

        var p = $(this).data('ga').split(',');

        p[2] = p[2] || undefined;

        try {
            _gaq.push( ['_trackEvent', p[0], p[1], p[2]] );
        } catch(e) {
            console.log(e.message)
        }

    });

});

// manual track event
function trackEvent(categories, actions, label) {
    try{
        _gaq.push( ['_trackEvent', categories, actions, label] );
    } catch(e) {
        console.log(e.message)
    }
}
