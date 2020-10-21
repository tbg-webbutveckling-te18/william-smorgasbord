
// document.writeln('Blikna lilla stjärna där <br>');
// document.writeln('hur jag undrar var du är <br>');
// document.writeln('Fjärran lockar du min syn <br>');
// document.writeln('lik en diamant i skyn <br>'); 

// document.writeln('<br>')



















function twinkle() {
    document.writeln('Blikna lilla stjärna där <br>');
    document.writeln('hur jag undrar var du är <br>');
    document.writeln('Fjärran lockar du min syn <br>');
    document.writeln('lik en diamant i skyn <br>'); 
    
    document.writeln('<br>')
}

// twinkle();
// twinkle();

function square(num) {
    document.writeln(num * num);
}

square(10);
square('A'); // not a number

function area(width,length){
   return width * length;
}

document.writeln('<br>' + area(5,10));


function quadrupleMe(x) {
    return 4 * x;
}
var myNumber = quadrupleMe(4);
alert(myNumber);


var buttonNumber = document.getElementById('myNumber');

buttonNumber.innerHTML = '<strong>My favourite</strong> number is ' + myNumber;

function capitalize(str){
    return str.charAt('').toUpperCase() + str.slice(1);
}

var city ='stockholm';
var capital = capitalize(city);
document.writeln('<br> Capital of Sweden is: ' + capital);


function isEven(dad){
    if (dad % 2 == 0){
        return true

    }
}
function isEven(dad){
    if (dad % 2 != 0){
        return false
    }
}



function kebabToSnake(kebstring){
    return document.writeln(kebstring.replaceAll('-','_'));
} 

var papi = "No-do";

kebstring = papi

kebabToSnake(kebstring)


var p = document.getElementById('scopes');

function localScope(){
    var localVar = 31;
    p.innerHTML = localVar;
}

localScope();

var globalVar = 'This is a global variable';

p.innerHTML = globalVar;
p.style.fontSize = '20px';
p.style.color = '#fff';

function changeGlobalVar(){
    globalVar = ' Ha Ha i got a new varibel now';
    p.innerHTML = globalVar;
}

changeGlobalVar();

function tricky(){
var globalVar = ' am i a local variable';
}

tricky();
p.innerHTML = globalVar;



function myTimer() {
var d = new Date();
var clock = document.getElementById('clock');
clock.innerHTML = d.toLocaleTimeString();
}

myTimer();

var seconds = setInterval(myTimer, 1000);
var btnStopTime = document.getElementsByClassName('stopTime')[0];
var doomsStr = document.getElementById('doomsMessage')

btnStopTime.addEventListener('click',function(){
clearInterval(seconds);
doomsStr.innerHTML = ' Ha HA get rekt noob';
doomsStr.style.transition = 'all .4s ease';
doomsStr.style.fontSize = '60px';
doomsStr.style.color = 'crimson';
});