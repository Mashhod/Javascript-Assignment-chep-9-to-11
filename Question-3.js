
//Write a program to take input color of road traffic signal//

var signalcolor1 = "red";

var signalcolor2 = "yellow";

var signalcolor3 = "green";


var userinput = prompt("Enter Your Color of Road Traffic Signal");

if (userinput == signalcolor1){
    alert("Must Stop");

}else if (userinput == signalcolor2){
    alert("Ready to move");

}else if(userinput == signalcolor3){
    alert("Move now")

}else{
    alert("Error Color Not Defined!")
}
