
window.onload=function(){
var iinches = document.getElementById("inches");
var ifeet = document.getElementById("feet");
var iyards = document.getElementById("yards");
var imiles = document.getElementById("miles");
////////////////////////////////////////////////////////////////////
iinches.addEventListener("input",function inches_to_feet_to_yards(){
	ifeet.value = iinches.value/12;
	iyards.value = iinches.value*0.02777777778;
	imiles.value = iinches.value/63360;
	
});
ifeet.addEventListener("input",function feets_to_yards_to_inches(){
	iyards.value = ifeet.value/3;
	iinches.value = ifeet.value*12;
	imiles.value = ifeet.value/5280;
});

iyards.addEventListener("input",function yards_to_inches_to_feet(){
	iinches.value = iyards.value*36;
	ifeet.value = iyards.value*3;
	imiles.value = ifeet.value/5280;
}); 
imiles.addEventListener("input", function miles_to_yards_to_feet_to_inches(){
	iyards.value= imiles.value*1760;
	ifeet.value = imiles.value*5280;
	iinches.value = ifeet.value*12;
});

document.getElementById("reset").addEventListener("click",function reset(){
	iinches.value = "";
	ifeet.value = "";
	iyards.value = "";
	imiles.value = "";

});
    };
