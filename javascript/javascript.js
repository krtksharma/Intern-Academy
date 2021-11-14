know = {

    "Hello": "<hr>  Hi there! If needed our help type Yes else No !<hr>",
    "hello": "<hr>  Hi there! If needed our help type Yes else No !<hr>",
    "HELLO": "<hr>  Hi there! If needed our help type Yes else No ! <hr>",
    "Who are you?": "<hr> I am your Assistant<hr>",
    "who are you?": "<hr> I am your Assistant<hr>",
    "WHO ARE YOU?": "<hr> I am your Assistant<hr>",
    "How are you?": "<hr> I am Fine<hr>",
    "How old are you?": "<hr> I am infinity in age<hr>",
    "no":"<hr>Thanks For visiting us<hr>",
    "NO":"<hr>Thanks For Visiting us<hr>",
    "No":"<hr>Thanks For visiting us<hr>",

};

function talk() {
    var user = document.getElementById("userBox").value;
    document.getElementById("userBox").value = "";
    document.getElementById("chatLog").innerHTML += user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML += know[user] + " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <br>";
    } else {
        document.getElementById("chatLog").innerHTML += " <hr> Fill The form given Below <hr>";
        setTimeout(function(){ 
            var a =document.getElementById("medForm");
            a.style.visibility="visible"; }, 200);
            document.getElementById("userBox").disabled = true;    
    }
}

        