'use strict';

function init() {
  animatedAnchorScroll();
}

// Due to the lack of real estate to cover (at this moment) on the page, 
// this enhancement is completely unneccessary, 
// but thought what the hell, I'll stretch the javascript muscles a bit.
// Should refactor from jQuery to Vanilla JS
// might even make the animation smoother than it currently is.
// NOTE: animation ignored by Safari (OS + iOS) =/ 

function animatedAnchorScroll() {
  console.log(window.location);
  $('a.js-scroll-link').click(function(event) {
    event.preventDefault();
    $('html, body').animate({ 
      scrollTop: $($(this).attr('href')).offet().top 
    }, 800);

    // REFACTOR
    // replace the window.location URL so it purges it of the #anchor

  });
}

$(init());