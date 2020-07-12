

require(["dojo/dom", "dojo/on", "dojo/topic", "dojo/domReady!"],
    function (dom, on, topic) {

        var btn1 = dom.byId("one");
        var testNode = dom.byId("testNode");

        topic.subscribe("test/topic", function (a) {
            //alert('Received '+a.length+' events');
            //console.log(a[0])
           // alert(a.length);
           alert(a.t1)
        })

        topic.subscribe("test/topic", function (a, b, c) {
           // testNode.innerHTML = 'I received the values :[' + a + ', ' + b + ', ' + c + ']';
           testNode.innerHTML = 'I received the values :[' + a + ', ' + b + ', ' + c + ']';
        })

        on(btn1, "click", function () {
            //topic.publish("test/topic", "Testing pub/sub", "Testing again", "Testing same")
            topic.publish("test/topic", {t1:"Testing pub/sub", t2:"Testing again", t3:"Testing same"})
        });

    });
