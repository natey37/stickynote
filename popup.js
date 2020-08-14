document.addEventListener('DOMContentLoaded', function(){
 let checkPageButton = document.getElementById("click")
 checkPageButton.addEventListener('click', function(){
     chrome.tabs.getSelected(null, function(tab){
         alert("u been clicked");
     });
 }, false);
}, false);