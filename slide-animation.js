require(["dojo/dom", "dojo/on", "dojo/fx","dojo/fx/easing", "dojo/domReady!"],
    function (dom, on, fx, easy) {

        var testNode = dom.byId("testNode")
        var slidein = dom.byId("slidein")
        var slideout = dom.byId("slideout")

        on(slidein, "click", function () {
            var slideInAnim = fx.slideTo({ node: testNode,delay:1000, duration:5000, easing: easy.bounceIn, top:120, left:10});
            slideInAnim.play();
        })

        on(slideout, "click", function () {
            var slideOutAnim = fx.slideTo({ node: testNode, duration:4000, top:200, left:500})
            slideOutAnim.play()
        })

    })
