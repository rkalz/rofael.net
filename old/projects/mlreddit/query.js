var api = "http://titletosubreddit.rofael.net/todo/api/v1/eval/q=";
var dict = {};
dict["0.0"] = "AskReddit";
dict["1.0"] = "aww";
dict["2.0"] = "funny";
dict["3.0"] = "gaming";
dict["4.0"] = "gifs";
dict["5.0"] = "pics";
dict["6.0"] = "todayilearned";
dict["7.0"] = "videos";

window.onload = function () {
  setup();
};

function setup() {
  document.getElementById("submit").onmousedown = function() {
    sendRequest();
  };
  
  document.getElementById("query").onkeypress = function(e){
    if (!e) e - window.event;
    var keyCode = e.keyNode || e.which;
    if (keyCode == '13') {
      sendRequest();
      return false;
    }
  }
}

function sendRequest() 
{
  document.getElementById("result").innerHTML = "<p>This server has been permanently shut down.</p>";
  /*var text = document.getElementById("query").value;
  var arr;
  var send = api + text;
  if (text.length != 0)
  {
    arr = $.getJSON(send)
    arr.done(function(response) {
      document.getElementById("result").innerHTML = "<p>Response received! Parsing...</p>";
      var out = "";
      data = response.data;
      for (var i = 0; i < Object.keys(data).length; i++)
      {
        cur = data[i]
        val = cur.value
        sub = dict[val]
        out += "<p>" + cur.query + " matches best with " + sub + ".</p><br>";
        document.getElementById("result").innerHTML = out;
      }
    });
  }*/
}

  
