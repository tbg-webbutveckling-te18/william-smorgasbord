
var age = 19;
if (age >= 18) {
    console.log('Du får ta körkortet.')
} else {
    console.log('Du får inte ta körkortet.')
}


var lesson = 'web development';
if (lesson == 'history'){
    console.log('We have:' + lesson)
} else if (lesson == 'web development'){
    console.log('we have: ' + lesson);
} else {
    console.log('spare time!');
}

var isSunny = false;
if (isSunny == true){
    console.log('Put on some shorts today.');
} else {
    console.log('Put on some warm clothes today.');
}

var d = new Date();

if (d.getHours() < 18){
    console.log('Good day!');
}else{
    console.log('Good evening!');
}

if (d.getHours() < 10){
    console.log('Good morning!');
}else if (d.getHours() < 18){
    console.log('Good day');
}else {
    console.log('Good evening');
}


if (d.getHours() < 10){
    if(d.getMonth() > 9 || d.getMonth() < 2) {
        console.log('Go ahead and sleep like a bear!')
    }else{
        console.log('Good morning!');
    }
}else if (d.getHours() < 18){
    console.log('Good day');
}else {
    console.log('Good evening');
}
