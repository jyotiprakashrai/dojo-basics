require(["dojo/dom", "dojo/on", "dojo/_base/fx","dojo/fx/easing", "dojo/domReady!"],
    function (dom, on, fx, easy) {

        var testNode = dom.byId("testNode")
        var fadein = dom.byId("fadein")
        var fadeout = dom.byId("fadeout")

        on(fadein, "click", function () {
           // var fadeInAnim = fx.fadeIn({ node: testNode });
            var fadeInAnim = fx.fadeIn({ node: testNode, duration:5000, easing: easy.bounceIn});
            fadeInAnim.play();
        })

        on(fadeout, "click", function () {
           // var fadeOutAnim = fx.fadeOut({ node: testNode })
            var fadeOutAnim = fx.fadeOut({ node: testNode, duration:4000})
            fadeOutAnim.play()
        })

    })
