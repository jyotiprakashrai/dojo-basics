

require(["dojo/dom", "dojo/on", "dojo/domReady!"], function (dom, on) {

    var showButton = dom.byId("showDiv")
    var hideButton = dom.byId("hideDiv")
    var div = dom.byId("myDiv")

    on(div, "mouseenter", function (event) {
        div.innerHTML = "Move mouse pointer away to change color to while"
        div.style.background = "yellow"
    })

    on(div, "mouseleave", function (event) {
        div.innerHTML = "Mouse over to change color to yellow"
        div.style.background = "white"
    })

    on(hideButton, "click", function (event) {
        div.style.display = "none"
    })

    on(showButton, "click", function (event) {
        if (div.style.display === "none") {
            div.style.display = "block"
        }
    })

});