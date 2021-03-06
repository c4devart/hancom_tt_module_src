var Singleton = (function () {
  // Instance stores a reference to the Singleton
  var instance;
  function init() {
    // Singleton
    return {
      // Public methods and variables
      publicMethod: function () {
        console.log( "The public can see me!" );
      },
      publicProperty: "I am also public"
    };
  };

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
      if ( !instance ) {
        instance = init();
        console.log( "The public init!!!" );
      } else {
    	  console.log( "The public instance!" );
	  }
      return instance;
    }
  };
})();