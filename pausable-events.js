//Allows you to pause event listening for some amount of time

require(["dojo/on", "dojo/dom", "dojo/domReady!"], function(on, dom){

    var enableBtn = dom.byId('enable');
    var disableBtn = dom.byId('disable');
    var clickBtn = dom.byId('clickMe');

    var buttonHandler = on.pausable(clickBtn, "click", function(evt){
        alert('i am clickable');
      
        on(disableBtn, "click", function(evt){
            buttonHandler.pause();
        });

        on(enableBtn, "click", function(evt){
            buttonHandler.resume();
        });

    })




});