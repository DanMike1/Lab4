function addin() {
    numbers = new Array;

    for (let i = 0; i < parseInt(collector); i++) {
        numbers[i] = prompt("Number" + (i + 1));
    }
    answers = 0;
    for (index in numbers) {
        answers += parseInt(numbers[index]);
    }
    return answers
}

function Multipling() {
    numbers = new Array;
    for (let i = 0; i < parseInt(collector); i++) {
        numbers[i] = prompt("Number" + (i + 1));
    }
    prod = 1;

    for (let i = 0; i < numbers.length; i++) {
        prod *= numbers[i];

    }
    return prod;
}



function divising() {
    numbers1 = prompt("What is the dividend?")
    numbers2 = prompt("What is the divisor")

    if (numbers2 > 0) {
        let Quotient = numbers1 / numbers2
        return Quotient
    } else {
        return alert("divisor can't be 0")
    }

}

function Subtractions() {
    numbers1 = prompt("What is the number to be subtracted from?")
    numbers2 = prompt("What is the number to substract")

    if (numbers1 > 0) {
        let difference = numbers1 - numbers2
        return difference
    } else {
        return alert("Wrong Input")
    }

}

function Squared() {
    numbers1 = prompt("What is the number to be Squared?")
    if (numbers1 > 0) {
        let squared = numbers1 * numbers1
        return squared
    } else {
        return console.log("The square of 0 is 0")
    }

}

function SquareRoot() {
    numbers1 = prompt("What is the number to be Square rooted?")
    if (numbers1 > 0) {
        let squaroot = Math.sqrt(numbers1)
        return squaroot
    } else {
        return console.log("The square root of 0 is 0")
    }

}

function Avrg() {
    numbers = new Array;

    for (let i = 0; i < parseInt(collector); i++) {
        numbers[i] = prompt("Number" + (i + 1));
    }
    AvrgAns = 0;
    for (index in numbers) {
        AvrgAns += parseInt(numbers[index]);
    }
    if (collector>1){
    Averag = AvrgAns/2;
    return Averag}
    else {
        return parseInt(numbers);
    }
}



(function Choice() {

    Mercha = parseInt(prompt("Choose the Desired operation: 1 for Addition, 2 for Multiplication, 3 for Division, 4 for Multiplication, 5 for square, 6 for Square root, 7 for Average"))

    if (Mercha == 1) {
        collector = prompt("How many numbers")
        console.log(addin())
    } else if (Mercha == 2) {
        collector = prompt("How many numbers")
        console.log(Multipling())
    } else if (Mercha == 3) {
        console.log(divising())
    } else if (Mercha == 4) {
        console.log(Subtractions())
    } else if (Mercha == 5) {
        console.log(Squared());
    } else if (Mercha == 6) {
        console.log(SquareRoot());
    }
    else if (Mercha == 7){
        collector = prompt("How many numbers")
        console.log(Avrg())
    }
    else{
        alert("Wrong Input")
        Choice()
    }





})();