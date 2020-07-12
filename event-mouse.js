
// dojo/mouse Useful where you want to track mouse events and restrict some
// or want to show something specific on right click of mouse
require(["dojo/dom", "dojo/on", "dojo/mouse", "dojo/dom-style", "dojo/domReady!"],
    function (dom, on, mouse, domstyle) {


        var mouseClick = dom.byId("mouseClickAlert")
        var div = dom.byId("myDiv")
        var domStyleDiv = dom.byId("domStyle")

        /* var mouseEnter = on(div, mouse.enter, function (event) {
                domstyle.set(div, "width", "2500px")
    
                div.innerHTML = "Move mouse pointer away to change color to while; width is: " + domstyle.get(div, "width")
                div.style.background = "yellow"
                // Remove the handler after first event, you can also remove after some condition met
                mouseEnter.remove();
            }) 
               OR  */

        on.once(div, mouse.enter, function (event) {
            domstyle.set(div, "width", "2500px")

            div.innerHTML = "Move mouse pointer away to change color to while; width is: " + domstyle.get(div, "width")
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

        on(domStyleDiv, "click", function (event) {

            var styles = domstyle.getComputedStyle(domStyleDiv)
            div.innerHTML = "width is: " + styles.width + " height is: " + styles.height + " background color is " + styles.color
        })

    });