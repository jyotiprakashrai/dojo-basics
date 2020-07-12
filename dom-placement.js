require(["dojo/dom", "dojo/on", "dojo/dom-construct", "dojo/domReady!"],
    function (dom, on, domConstruct) {

        var lst = dom.byId("list")

        var first = dom.byId("one")
        var three = dom.byId("three")
        var four = dom.byId("four")
        var five = dom.byId("five")

        var moveTop = dom.byId("moveToTop")
        var moveBeforeFive = dom.byId("moveBeforeFive")
        var moveAfterFirst = dom.byId("moveAfterFirst")
        var replaceFourByThree = dom.byId("replaceFour")
        var replaceAllBtn = dom.byId("replaceAll")


        function moveToTheTop() {
            domConstruct.place(three, lst, "first")
            // domConstruct.place(three, lst)
        }

        function moveBeforeFiveItem() {
            domConstruct.place(three, five, "before")
        }

        function moveAfterFirstItem() {
            domConstruct.place(three, first, "after")
        }

        //Replace four with three
        function replaceFourWithThree(){
            domConstruct.place(three, four, "replace")
        }

        function replaceAll(){
            domConstruct.place(three, lst, "only")
            // To move three to fifth position
            //domConstruct.place(three, lst, "4")
        }


        on(moveTop, "click", moveToTheTop)
        on(moveBeforeFive, "click", moveBeforeFiveItem)
        on(moveAfterFirst, "click", moveAfterFirstItem)
    
        on(replaceFourByThree, "click", replaceFourWithThree)
        on(replaceAllBtn, "click", replaceAll)
    });