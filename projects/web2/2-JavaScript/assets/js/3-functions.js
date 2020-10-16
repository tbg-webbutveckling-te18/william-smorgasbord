
document.writeln('Blikna lilla stjärna där <br>');
document.writeln('hur jag undrar var du är <br>');
document.writeln('Fjärran lockar du min syn <br>');
document.writeln('lik en diamant i skyn <br>'); 

document.writeln('<br>')



















function twinkle() {
    document.writeln('Blikna lilla stjärna där <br>');
    document.writeln('hur jag undrar var du är <br>');
    document.writeln('Fjärran lockar du min syn <br>');
    document.writeln('lik en diamant i skyn <br>'); 
    
    document.writeln('<br>')
}

twinkle();
twinkle();

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
    retrun 4 * x;
}
var myNubmer = quadrupleMe(4);
alert(myNubmer);

