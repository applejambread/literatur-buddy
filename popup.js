let $ = document.getElementById.bind(document);
window.onload = function(){
  chrome.storage.local.get(/* String or Array */"toggleonoff", function(result){
    if(result.toggleonoff == "on"){
      document.getElementById("onoff").checked = true;
    }
  });
}
$('show').onclick = function() {
};
$('reset').onclick = function() {
};

$('onoff').onchange = function(element) {
  var checked = "";
  if(document.getElementById("onoff").checked){
    checked = "on";
  } else {
    checked = "off";
  }
  chrome.storage.local.set({ "toggleonoff": checked }, function(){
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
  });
}
