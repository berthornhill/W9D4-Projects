const FollowToggle = require('./follow_toggle.js');

$(() => {
    const $followToggles = $('.follow-toggle') // [btn1, btn2, btn3]
    
    $followToggles.each(function() {
        debugger
        new FollowToggle(this);
    });

    $('.follow-toggle').on("submit", e => {
        e.preventDefault();
        debugger
    });
});
