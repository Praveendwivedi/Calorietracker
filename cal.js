gen = document.getElementById("genders");
var age = document.getElementById('age');
var bmr = "";
var height = document.getElementById('height');
var weight = document.getElementById("weight");
document.getElementById("btn").addEventListener("click", calculate);

function calculate() {
if(gen.value=="male"){
    bmr =  13.397*weight.value + 4.799*height.value - 5.677*age.value + 88.362;
    document.getElementById("result").innerHTML = bmr+"Joule";
}
else if(gen.value=="female"){
    bmr =  9.247*weight.value + 3.098*height.value - 4.330*age.value + 447.593;
    document.getElementById("result").innerHTML = bmr+"Joule";
}
else{
    bmr = "Please select valid option"
    document.getElementById("result").innerHTML = bmr;
}
}
var n = 1;
document.getElementById("new").addEventListener("click",add);
function add(){
  var tab = document.getElementById("table");
  var row = tab.insertRow();
  var cell1 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell1 = row.insertCell(2);
  var cell1 = row.insertCell(3);
  food=window.prompt("enter food item");
  fat=window.prompt("enter fat content");
  car=window.prompt("enter carbohydrate content");
  prot=window.prompt("enter protein content");
  x=document.getElementById('table').rows[n].cells;
  x[0].innerHTML=food;
  x[1].innerHTML=fat;
  x[2].innerHTML=car;
  x[3].innerHTML=prot;
  n+=1;
  
}
