var myName='Alisher Maratov';
var myGroup = 'CS-2119';
document.getElementById("demo1").innerHTML=myName;
document.getElementById("demo2").innerHTML=myGroup;
const a = new Date("2022");
let year = a.getFullYear();
document.getElementById("demo3").innerHTML = year;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const b = new Date();
let day = weekday[b.getDay()];
document.getElementById("demo4").innerHTML = day;
const c = new Date();
document.getElementById("demo5").innerHTML = c.getDate();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let name = month[d.getMonth()];
document.getElementById("demo6").innerHTML = name;

const e = new Date();
document.getElementById("demo7").innerHTML = e;


var dgrad = '840';

document.getElementById("demo8").innerHTML = dgrad;

var op; 

  // функция расчёта
  function func() {
  	// переменная для результата
    var result;
    // получаем первое и второе число
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    // смотрим, что было в переменной с действием, и действуем исходя из этого
    switch (op) {
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }
    document.getElementById("demo9").innerHTML = result;

  }
