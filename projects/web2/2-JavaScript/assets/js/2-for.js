for(var i = 0; i < 12; i++) {
 document.writeln('Count is:' + i + '<br>');
   
}
// increment by 2 (or more)
for(var count = 1; count < 56; count ++){
    document.writeln('Count is: ' + count + '<br>');
}


document.writeln('----------------------------<br>')


// loop through list
var str =  'Hello World!';
// document.writeln(str[0]);
for(var i = 0; i < str.length; i++){
    document.writeln(str[i]);
}

document.writeln('<br>----------------------------<br>')

var codeArr = ['CSS','HTML','JS','18',true]; 
var len = codeArr.length;
for(var i = 0; i 
    < len; i++){
    document.writeln('language: ' + codeArr[i] + '<br>')
}

document.writeln('----------------------------<br>')

// the modulo operator
// == means equal to 12== 12
// === means equal to and check if same data type 12 === 12

for(var i = 1; i < 366; i++){
    if(i % 2 == 0){
        document.writeln('Even dates:' + i + '<br>');
    }
}

// exercise three

for(var i =-10; i < 20; i++){
   document.writeln(i + '<br>');
       

}
document.writeln('----------------------------<br>')

for(var i =10; i < 41; i++){
    if(i % 2 == 0){
     document.writeln(i + '<br>');
    }

}
document.writeln('----------------------------<br>')

for(var i =300; i < 334; i++){
    if (i % 2 !==0 ) {
    document.writeln(i + '<br>');
    }

}
document.writeln('----------------------------<br>')

for(var i =0; i < 1; i++){
    if (i % 2 ==0 ) {
    document.writeln(i + '<br>');
      }
}




for(var i = 0; i < 5; i++){
    for(var j = 0; j < 5; j++){
        document.writeln('*' );
    }
    document.writeln('<br>');
}

document.writeln('----------------------------<br>')


