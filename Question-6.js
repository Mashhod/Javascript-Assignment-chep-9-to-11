
//Write a program to take input the marks obtained in three subjects & total marks.//

var total_marks = Number( prompt("Enter Total Marks"));

var obtained_marks = Number (prompt("Enter Obtained Marks"));

var percent = obtained_marks * 100 / total_marks;

if (percent >= 80){
    alert("Grade : A-one");
    alert("Excellent");

}else if (percent >= 70){
    alert("Grade : A");
    alert("Good");

}else if (percent >= 60){
    alert("Grad : B");
    alert("You ned to improve");

}else {
    aler("Grade: Fail")
    alert("Sorry")
}