// Business Logic
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function modulo(num1, num2){
    return num1 % num2;
}

// User Interface

$(document).ready( () =>{
    $("#Addition").submit( (event) =>{
        event.preventDefault();

        const inputedNumberOne = parseInt($("#numberOne").val());
        const inputedNumberTwo = parseInt($("#numberTwo").val());

        let result = add(inputedNumberOne, inputedNumberTwo);

        $(".answer").text(result);
        $(".display").show();
    });

    $("#Subtraction").submit((event) =>{
        event.preventDefault();

        const inputedNumberOne = parseInt($("#numberOneMinus").val());
        const inputedNumberTwo = parseInt($("#numberTwoMinus").val());

        let result = subtract(inputedNumberOne, inputedNumberTwo);

        $(".answer1").text(result);
        $(".display").show();
    });
    // Multiplication
    $("#Multiplication").submit((event) =>{
        event.preventDefault();

        const inputedNumberOne = parseInt($("#numberOneMultiply").val());
        const inputedNumberTwo = parseInt($("#numberTwoMultiply").val());

        let result = multiply(inputedNumberOne, inputedNumberTwo);

        $(".answer2").text(result);
        $(".display").show();
    })
    // Modulus
    $("#Modulus").submit((event) =>{
        event.preventDefault();

        const inputedNumberOne = parseInt($("#numberOneModulo").val());
        const inputedNumberTwo = parseInt($("#numberTwoModulo").val());

        let result = modulo(inputedNumberOne, inputedNumberTwo);

        $(".answer4").text(result);
        $(".display").show();
    })
})






// const addNumber1 = parseInt(prompt("Enter an number"));
// const addNumber2 = parseInt(prompt("Enter another number"));
// sum = add(addNumber1, addNumber2);
// alert(`The sum of both numbers is ${sum}`);

// const subNumber1 = parseInt(prompt("Enter an number"));
// const subNumber2 = parseInt(prompt("Enter another number"));
// sub = sub(addNumber1, addNumber2);
// alert(`The difference of both numbers is ${sub}`);

// const productNumber1 = parseInt(prompt("Enter an number"));
// const productNumber2 = parseInt(prompt("Enter another number"));
// times = product(productNumber1, productNumber2);
// alert(`The product of both numbers is ${times}`);

// const divNumber1 = parseInt(prompt("Enter an number"));
// const divNumber2 = parseInt(prompt("Enter another number"));
// divide = div(divNumber1, divNumber2);
// alert(`The division of both numbers is ${divide}`);