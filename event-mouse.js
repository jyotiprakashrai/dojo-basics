
// dojo/mouse Useful where you want to track mouse events and restrict some
// or want to show something specific on right click of mouse
require(["dojo/dom", "dojo/on", "dojo/mouse", "dojo/domReady!"], function (dom, on, mouse) {


    var mouseClick = dom.byId("mouseClickAlert")
    var div = dom.byId("myDiv")

    on(div, mouse.enter, function (event) {
        div.innerHTML = "Move mouse pointer away to change color to while"
        div.style.background = "yellow"
    })

    on(div, mouse.leave, function (event) {
        div.innerHTML = "Mouse over to change color to yellow"
        div.style.background = "white"
    })

    on(mouseClick, "mousedown", function (event) {
        if (mouse.isLeft(event)) {
            // handle mouse left click
            alert('MOUSE LEFT CLICKED');
        } else if (mouse.isRight(event)) {
            // handle mouse right click
            alert('MOUSE RIGHT CLICKED');
        }
    })

});