
// Get button dom info
var btn_obj = document.getElementById("btn");
// attach click event
btn_obj.addEventListener('click', calculateMathString);

// function to calculate string
function calculateMathString() {
    // Get input dom value
    let inputVal = document.getElementById("mathStr").value;
    // Get span dom
    let spDom = document.getElementsByClassName("answer");
    let n;

    // check for empty input
    if (inputVal.length === 0) {
        spDom[0].innerHTML = "Input is empty";
        return;
    }

    
    if (inputVal.indexOf('+') !== -1) { // + operator
        n = inputVal.split('+');
        spDom[0].innerHTML = "Answer: " + calcNumber(Number(n[0]), Number(n[1]), '+');
    } else if (inputVal.indexOf('-') !== -1) { // - operator
        n = inputVal.split('-');
        spDom[0].innerHTML = "Answer: " + calcNumber(Number(n[0]), Number(n[1]), '-');
    } else if (inputVal.indexOf('*') !== -1) { // * operator
        n = inputVal.split('*');
        spDom[0].innerHTML = "Answer: " + calcNumber(Number(n[0]), Number(n[1]), '*');
    } else if (inputVal.indexOf('/') !== -1) { // / operator
        n = inputVal.split('/');
        // for division, check for divide by zero
        if (Number(n[1]) !== 0) {
            spDom[0].innerHTML = "Answer: " + calcNumber(Number(n[0]), Number(n[1]), '/');
        } else {
            spDom[0].innerHTML = "Cannot divide by zero";
        }
    } else { // operation cannot be completed
        spDom[0].innerHTML = "Invalid Operation";
    }
}

function calcNumber(n1, n2, optr) {
    // object to determine the math operation needed
    let math_it_up = {
        '+': function (n1, n2) {
            return n1 + n2
        },
        '-': function (n1, n2) {
            return n1 - n2
        },
        '*': function (n1, n2) {
            return n1 * n2
        },
        '/': function (n1, n2) {
            return n1 / n2
        }
    };

    // call the object property base on the operator and do the calculation
    let r = math_it_up[optr](n1, n2);

    return r;
}


