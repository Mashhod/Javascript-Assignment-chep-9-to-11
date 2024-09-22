
//Write a program to create a calculator for +,-,*, / & % using if statements.//




var first_number = Number(prompt("First number"));

var oprator= prompt("(+, -, *, /, %)");


var second_number = Number(prompt("Second number"));


if (oprator == '+'){
    alert(first_number + second_number);
    document.write(first_number + second_number)

}else if (oprator == "-"){
    alert(first_number - second_number);

}else if (oprator == "*"){
    alert(first_number * second_number);

}else if (oprator == "/"){
    alert(first_number / second_number);


}else if (oprator == "%"){
    alert(first_number % second_number)

}else {
    alert("Incorrect Operator!");
}


