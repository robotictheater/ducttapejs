__.routes = [
    [".*", function(p, next) {
      if (!localStorage.getItem("device_id")) {
        localStorage.setItem("device_id", __.rndString(32, ["letters", "uppercase", "numbers"]));
      }
      next();
    }],
    


    // DEFAULT CATCH ALL 
    [".*", (p) => {
        __.renderLayout("site", function() {
            __.renderScreen("home", p);
        });
    }]
];


(function(){ 
    __.router(true, 0, () => { });
})();