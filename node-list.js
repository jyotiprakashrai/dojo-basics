
// Event delegation
require(["dojo/dom", "dojo/on", "dojo/mouse", "dojo/domReady!"],
function (dom, on, mouse) {
    var div = dom.byId('myDiv');

    on(div, on.selector(".clickMe", mouse.enter), function () {
        console.log('jhdjdhjdhdjhjhdjdhdj');
    });
});