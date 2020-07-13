require(["dojo/dom", "dojo/on", "dojo/request", "dojo/domReady!"], function (dom, on, request) {

    var testDiv = dom.byId("testDiv")
    var html = "<table border='1px;'>"

    on(dom.byId("textButton"), "click", function (evt) {


        // request("text/testFile.txt").then(
        request("text/testFile.txt", { handleAs: "json" }).then(
            function (response) {
                console.log(response)
                //testDiv.innerHTML = response
                // testDiv.innerHTML = JSON.stringify(response)

                for (var index in response.employees) {
                    html = html + "<tr>"
                    var emp = response.employees[index]
                    for (var i in emp) {
                        html = html + "<td>" + emp[i] + "</td>"
                    }
                    html = html + "</tr>"
                }
                html = html + "</table>"
                testDiv.innerHTML = html;
            },
            function (error) {
                testDiv.innerHTML = "<div class = \"error\">" + error + "</div>"
            }
        )
    })

})