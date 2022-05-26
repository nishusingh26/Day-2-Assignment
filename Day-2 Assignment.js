// This Assignment is baed on Arrays and Functions

// //Question1. Find the Number of Digits in Number.

let count = 0;
let num = 3332323;

function numberOfDigits(num){
    if(typeof num === 'number'){
        num = num + '';
        for(let i=0; i< num.length;i++){
            count = count + 1;
        }
    }
    return count;
}

const digits = numberOfDigits(num);
console.log(`Digits are ${digits} in the Number ${num}.`);


// Question 2. WAP to Reverse the Natural Numbers.

function reverse(num){
    let reversed = 0;
    let last;
    let number = num ;

    while(number>0){
        last = number % 10; 
        reversed = reversed * 10  + last;
        number = Math.floor(number / 10) ;
    }

    if(num < 0){
        return -1 * reversed;
    }

    return reversed;

}

const reversedNum = reverse(6745);
console.log("The Reverse Number is:",reversedNum);

// Question 3. WAP to find the Sum of Natural Numbers.
let counter =0;
let number = 6;

function sumNatural(number){

    for(let i=1; i <= number ; i++){
        counter = counter + i;
    }
    return counter;
}

let naturalSum = sumNatural(number);
console.log(`The Sum of ${number} Natural Numbers is: `,naturalSum);

// Question 4. WAP to find the Binary form of a Number.

let rem;
let bin = 0;
let i = 1;
let value = 5;
function findBinary(number){

    while(number>0){
        rem = number % 2;
        number = parseInt(number / 2);
        bin = bin + rem * i;
        i = i * 10;
    }

    return bin;
}

const findBin = findBinary(value);
console.log(`Binary form of ${value} is: `,findBin);


// Question 5. WAP to calculate the sum of digits in Number.

const val = [3,1,9,89];

function sumDigits(){
    let sum = 0;
    for(let i = 0; i < val.length; i++){
        sum = sum + val[i];
    }
    return sum;
}

const sumDigit = sumDigits(val);
console.log(`Sum of the Digits in Array is: `,sumDigit);


// Question 6. WAP to find the largest number in array.

const arr2 = [4,102,5,6,1,90,34,67,1000];
let max = 0;

function maximum(){
    for(let i = 0; i<= arr2.length; i++){
        if(arr2[i] > max){
            max = arr2[i];
        }
    }
    return max;
}

const maximumNum = maximum(arr2);
console.log(`Maximum Number is ${maximumNum} from Array [${arr2}]`);

