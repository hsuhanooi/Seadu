var AUDIENCE=function(a){var b=function(){var b=a.getVar("joinRoomUrl"),c={room_name:a.getVar("roomName")};$.getJSON(b,c,function(a){console.log("Joined Game: "+JSON.stringify(a)),d(a)})},c=function(){var b=a.getVar("roomName"),c=a.getElement("pollChoices"),e=a.getVar("submitMoodUrl");$.each(c,function(a,c){var f=$(c).data("choice"),g={room_name:b,answer:f};$(c).click(function(){console.log("Submit Mood: "+f),$.getJSON(e,g,function(a){console.log("Received Choice: "+JSON.stringify(a)),d(a)})})})},d=function(a){var b=CONTEXT.getElement("console");$(b).append("<li>"+JSON.stringify(a)+"</li>")},e=function(){b(),c()},f={};return f.initOnPageReady=e,f}(CONTEXT)