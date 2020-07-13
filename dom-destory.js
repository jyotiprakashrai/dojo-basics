require(["dojo/dom", "dojo/on", "dojo/dom-construct", "dojo/query", "dojo/domReady!"],
    function (dom, on, domConstruct, query) {
        var destroyBtn = dom.byId("destroy")

        var destorySecondBtn = dom.byId("removeSecondDiv")

        on(destroyBtn, "click", function () {
            query(".testClass").forEach(domConstruct.destroy);
        })

        on(destorySecondBtn, "click", function(){
            domConstruct.destroy("test2")
        })

    })
