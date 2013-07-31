define( function( require ) {
  "use strict";

  //Will be added lazily after image loader complete.
  //Makes it possible to load through the module system rather than passed as parameter everywhere or used as global. 

  return {
    imageNames: [
      'slider.png',
      'reset_button_disabled.png',
      'reset_button_down.png',
      'reset_button_over.png',
      'reset_button_up.png'
    ]  };
} );