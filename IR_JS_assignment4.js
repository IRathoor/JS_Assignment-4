//Q1
var num = prompt("Enter number divisible by 3")
if (num % 3===0){
    alert (+num+ " Divisible by 3")
} else {
    alert (+num+ " not divisible by 3")
}

//Q2 hello
var num = prompt ("Enter Number")
if (num % 2=== 0){
    alert (+num+ " is even number")
} else {
    alert (+num+ " is odd number ")
}

//Q3

var age = prompt("Enter your age")
if (age > 18){
    alert ("Old enough")
} else {
    alert ("Too young")
}

//Q4
var userName = prompt ("Enter your Name")
if (userName ==="Rathore"){
    alert ("Welcome Mr " +userName)
} else {
    alert ("You can not login")
}

//Q5
var num = prompt("Enter number divisible by 3")
switch(num % 3){
    case 0:
        alert("Divisible by 3");
        break;
default:
    alert ("Not Divisible by 3")

}


if (num % 3===0){
    alert (+num+ " Divisible by 3");
} else {
    alert (+num+ " not divisible by 3")
}

//Q6
var input = prompt ("Enter Some Thing")
var code = input.charCodeAt()
//alert(code)
if (code >= 97 && code <= 122){
alert("This is lower case letter")
} else if (code >= 65 && code <= 90){
    alert ("This is upper case")
} else if (code >= 48 && code <= 57){
    alert ("This is number")
}
//Q7
var number1 = prompt ("Enter 1st Number")
var number2 = prompt ("Enter 2nd Number")
var Operator = prompt ("Enter Operator +,-,*,/,%")
if (Operator === "+") {
    alert (+number1 + +number2)
} else if (Operator === "-"){
    alert (number1-number2)
}else if (Operator === "*"){
    alert (number1*number2)
}else if (Operator === "/"){
    alert (number1/number2)
}else if (Operator === "%"){
    alert (number1%number2)
} else{
    alert ("Select correct Operator")
}

//Q8
var time = prompt ("24 hours clock format like: 1900")
if (time >= "0000" && time < 1200){
    alert ("Good Morning")
} else if (time >= 1200 && time < 1700){
    alert ("Good Afternoon")
} else if (time >= 1700 && time < 2100){
    alert ("Good Evening")
} else if (time >= 2100 && time < 2359){
    alert ("Good Afternoon")
}

//Q9
var year = prompt ("Enter Year like! YYYY")
if (year % 4===0) {
    alert ("This is leap Year")
} else {
    alert ("This is not a leap Year")
}

//Q10
var password = prompt ("Enter Password")
var password1 = prompt ("Enter Password again")
if (password === ""){
    alert ("Please Enter your password")
} else if (password === password1){
    alert ("Correct! The password you entered matches the original password")
} else {
    alert ("Please Enter your Correct Password")
}

//Q11
var name3 = prompt ("Enter your Name")
if (name3 === "Fahad"){
    alert ("Hello "+name3)
} else {
    alert ("You are not Fahad")
}

//Q12
var hour = prompt ("Please Enter Time Like: 1300")
if (hour < 1200){
    alert ("Good Morning")
} else if (hour < 1700){
    alert ("Good Afternoon")
} else if (hour < 2100){
    alert ("Good Evening")
} else{
    alert ("Good Night")
}

//Q13


//Q14
var num = prompt ("Enter number")
if (num < 0){
    alert (num+ " Its a Negative number")
} else {
    alert(num+ " Its a Positive number")
}

//Q15
var hour = prompt ("Please enter time so you can alert Breakfast, Lunch, Dinner")
if (hour >= 0600 && hour <= 0900){
    alert ("Breakfast Served")
} else if (hour >= 1100 && hour <= 1300){
    alert ("Time for Lunch")
}else if (hour >= 1700 && hour <= 2000){
    alert ("Its a dinner time")
} else {
    alert ("Sorry, you'll have to wait, or go get a snack.")
}

//Q16

var a = ("Pakistan")
var b = (92)
var c = (true)
alert(a + " is a string")
alert(b + " is a number")
alert(c + " is a boolean")
typeof

//Q17


//Q18
var value = prompt ("Display Operator")
var value1 = prompt ("Display Operator")
if (value!=value1){
    alert (value+ " is not equal to " +value1+ " Its True" )
}

//Q19

var month = prompt ("Enter month number")
switch(month){
    case "1":
        alert("January");
        break;
    case "2":
        alert("February");
        break;
    case "3":
        alert("March");
        break;
    case "4":
        alert("April");
        break;
    case "5":
        alert("May");
        break;
    case "6":
        alert("June");
        break;
    case "7":
        alert("July");
        break;
    case "8":
        alert("August");
        break;
    case "9":
        alert("September");
        break;
    case "10":
        alert("October");
        break;
    case "11":
        alert("November");
        break;
    case "12":
        alert("December");
        break;
}

//Q20
var age =prompt ("Enter your age for voting")
if (age < 18){
    alert ("Votable should be 'too young' ")
} else {
    alert ("Votable should be 'old enough' ")
}