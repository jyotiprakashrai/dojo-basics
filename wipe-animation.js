require(["dojo/dom", "dojo/on", "dojo/fx","dojo/fx/easing", "dojo/domReady!"],
    function (dom, on, fx, easy) {

        var testNode = dom.byId("testNode")
        var wipein = dom.byId("wipein")
        var wipeout = dom.byId("wipeout")

        on(wipein, "click", function () {
            var wipeInAnim = fx.wipeIn({ node: testNode, duration:5000, easing: easy.bounceIn});
            wipeInAnim.play();
        })

        on(wipeout, "click", function () {
            var wipeOutAnim = fx.wipeOut({ node: testNode, duration:4000})
            wipeOutAnim.play()
        })

    })
