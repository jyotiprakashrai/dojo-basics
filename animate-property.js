require(["dojo/dom", "dojo/on", "dojo/_base/fx", "dojo/domReady!"],
    function (dom, on, fx, easy) {

        var testNode = dom.byId("testNode")
        var redBtn = dom.byId("shrink")
        var greenBtn = dom.byId("grow")

        var redBtnAnimation = fx.animateProperty({
            node: testNode,
            properties: {
                backgroundColor:"red",
                height: 100,
                width: 100
            },
            duration: 3000,
            delay: 1000
        })

        var greenBtnAnimation = fx.animateProperty({
            node: testNode,
            properties: {
                backgroundColor:"green",
                height: 500,
                width: 500
            },
            duration: 3000,
            delay: 1000
        })

        on(redBtn, "click", function () {
            
            redBtnAnimation.play();
        })

        on(greenBtn, "click", function () {
           
            greenBtnAnimation.play()
        })

    })
