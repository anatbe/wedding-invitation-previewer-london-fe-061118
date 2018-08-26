function onForm() {
  var guest = document.getElementById("guest").value;
  var guest2 = document.getElementById("guest2").value;
  var lastName = document.getElementById("last-name").value;
  var finalText = guest+ " "+lastName;
  if (guest2.length > 0)
    finalText = guest+" & "+guest2+" " +lastName;
  document.getElementById("guests").innerHTML = finalText;
  
  var bride = document.getElementById("bride").value;
  var groom = document.getElementById("groom").value;
  var date = document.getElementById("date").value;
  var hour = document.getElementById("hour").value;
  var location = document.getElementById("location").value;
    document.getElementById("bride-text").innerHTML = bride;
    document.getElementById("groom-text").innerHTML = groom;
    document.getElementById("date-text").innerHTML = date;
    document.getElementById("hour-text").innerHTML = hour;
    document.getElementById("location-text").innerHTML = location;
}

window.onload = function(){  
  document.getElementById("vintage").addEventListener("click", changeToVintage);
  document.getElementById("sunset").addEventListener("click", changeToSunset);
  document.getElementById("summertime").addEventListener("click", changeToSummertime); 
}
function changeToVintage() {
    document.getElementById("invitation").style.backgroundImage = "url('https://i.pinimg.com/736x/37/91/80/379180a973e0f7d95674eff7420b281f--vintage-backgrounds-vintage-wallpapers.jpg')";
document.getElementById("vintage").style.fontFamily = listValue;
}
function changeToSunset(){
   document.getElementById("invitation").style.backgroundImage = "url('https://i.imgur.com/EIQsLdi.jpg')";
}
function changeToSummertime(){
     document.getElementById("invitation").style.backgroundImage = "url('https://i.imgur.com/y8TL6NJ.jpg')";

}
function myFunction(selectTag) {
var listValue = selectTag.options[selectTag.selectedIndex].text;
document.getElementById("vintage").style.fontFamily = listValue;
}