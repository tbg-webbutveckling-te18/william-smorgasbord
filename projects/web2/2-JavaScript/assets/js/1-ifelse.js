
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



var grade ='A';
switch(grade){
    case 'A':
        console.log('Great job');
    break;

    case 'B':
        console.log('well done')
    break;

    case 'C':
        console.log('you can achive more')
    break;

    case 'D':
        console.log('strive further')
    break;

    case 'E':
        console.log('you need to pull youreself up')

    default:
        console.log('Unknown grade!')

}



var whatday = new Date();
switch(whatday.getDay()) {
 case '0':
 console.log('Today is Sunday')
   break;
 case '1':
 console.log('Today is Monday')
   break;
 case '2':
 console.log('Today is Tuesday')
   break;
 case '3':
 console.log('Today is Wednesday')
    break;



}
