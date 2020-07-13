require(["dojo/dom", "dojo/on", "dojo/fx", "dojo/_base/fx", "dojo/domReady!"],
    function (dom, on, fx, basefx) {

        var testNode = dom.byId("testNode")
        var slidein = dom.byId("slidein")
        var slideout = dom.byId("slideout")
        var message = dom.byId("message")

        on(slidein, "click", function () {
            var slideInAnim = fx.slideTo({ node: testNode, duration: 4000, top: 120, left: 10 });
            var fadeInAnim = basefx.fadeIn({ node: testNode, duration: 4000 });
            fx.chain([slideInAnim, fadeInAnim]).play();

        })

        on(slideout, "click", function () {
            var slideOutAnim = fx.slideTo({ node: testNode, duration: 4000, top: 200, left: 500 })
            var fadeOutAnim = basefx.fadeOut({ node: testNode, 
                duration: 4000 ,
                beforeBegin: function(){
                   message.innerHTML='Starting animation..'
                },
                onAnimate: function(){
                    message.innerHTML='Progess...'
                 },
                 onEnd: function(){
                    message.innerHTML=''
                 }


            })
            fx.combine([slideOutAnim, fadeOutAnim]).play();
        })

    })

    /*
    Animation events
     1-beforeBegin
     2-onBegin
     3-onPlay
     4-onAnimate
     5-onEnd

    Can also handle animation events like: 
     on(fadeOutAnim, "End", function(){
         
     })
    */
