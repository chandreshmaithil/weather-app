var input = document.querySelector('.input_text');
var main = document.querySelector('#name');

var temp_min_1 = document.querySelector('.temp_min_1');
var temp_max_1 = document.querySelector('.temp_max_1');

var temp_min_2 = document.querySelector('.temp_min_2');
var temp_max_2 = document.querySelector('.temp_max_2');

var temp_min_3 = document.querySelector('.temp_min_3');
var temp_max_3 = document.querySelector('.temp_max_3');

var desc = document.querySelector('.desc');

var suggestionTemp = document.querySelector('.suggestionTemp');
var suggestionRain = document.querySelector('.suggestionRain');

var button= document.querySelector('.submit');

var appId = "d2929e9483efc82c82c32ee7e02d563e";

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+appId)
.then(response => response.json())
.then(data => {

  window.alert(JSON.stringify(data));

  var tempMinValue = data['main']['temp_min'];
  var tempMaxValue = data['main']['temp_max'];


	//	window.alert("1 ");


  var nameValue = data['name'];
  var descValue = data['weather'][0]['main'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Will It Rain Today (True / False)?  - "+ (descValue.localeCompare("Rain") == 1) ;


  	//	window.alert("2 ");

if((Math.round(tempMaxValue - 273.15)>2)){
     //window.alert("2.5");

    suggestionTemp.innerHTML = "Temprature Will Be More Than 40 Degree Celsius Today Use sunscreen lotion ! ";
    //window.alert("2.6");

}

	//	window.alert("3 ");

if(descValue.localeCompare("Rain") == 1){
    suggestionRain.innerHTML = "It Will Rain Today Carry Umbrella !";
}

	//	window.alert("4 ");


  temp_min_1.innerHTML = "Temp Min Day 1 - "+Math.round(tempMinValue - 273.15)+ " Degree Celsius";
  temp_max_1.innerHTML = "Temp Max Day 1 - "+Math.round(tempMaxValue - 273.15)+ " Degree Celsius";

  input.value ="";

//  window.alert("5");


})

.catch(err => alert("Please check the spelling of your city name!"));
})
