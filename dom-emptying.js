require(["dojo/dom", "dojo/on", "dojo/dom-construct", "dojo/query", "dojo/domReady!"],
    function (dom, on, domConstruct, query) {

        var container = dom.byId("container")
        var firstDiv = dom.byId("firstDiv")
        var secondDiv = dom.byId("secondDiv")

        var removeDivOne = dom.byId("removeDivOne")
        var removeDivTwo = dom.byId("removeDivTwo")

        var removeBtn = dom.byId("removeTestNodes")



        on(removeDivOne, "click", function () {
            domConstruct.empty(firstDiv)
        })
        on(removeDivTwo, "click", function () {
            domConstruct.empty(secondDiv)
        })

        on(removeBtn, "click", function () {
            query(".testClass").forEach(domConstruct.empty);
        })

    })
