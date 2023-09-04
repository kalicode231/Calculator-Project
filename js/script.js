// Business Logic
function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function product(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1/num2;
}

// User Interface

const addNumber1 = parseInt(prompt("Enter an number"));
const addNumber2 = parseInt(prompt("Enter another number"));
sum = add(addNumber1, addNumber2);
alert(`The sum of both numbers is ${sum}`);

const subNumber1 = parseInt(prompt("Enter an number"));
const subNumber2 = parseInt(prompt("Enter another number"));
sub = sub(addNumber1, addNumber2);
alert(`The difference of both numbers is ${sub}`);

const productNumber1 = parseInt(prompt("Enter an number"));
const productNumber2 = parseInt(prompt("Enter another number"));
times = product(productNumber1, productNumber2);
alert(`The product of both numbers is ${times}`);

const divNumber1 = parseInt(prompt("Enter an number"));
const divNumber2 = parseInt(prompt("Enter another number"));
divide = div(divNumber1, divNumber2);
alert(`The division of both numbers is ${divide}`);