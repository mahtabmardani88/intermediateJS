// // =====================================================================================================================================================
// JS Intermediate
// // =====================================================================================================================================================
// 1. Addition
// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.
// let sum =0 ;
// for (let i = 200; i <2700; i++) {
//    if((i % 3 === 0 || i% 5 === 0)&& (i % 3 !== 0 || i% 5 !== 0)){
//     sum += [i];
//    }
// } console.log(sum);

// // ------------------------------------------------------------------------------------------------------
// 2. Shift the Values
// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].
// let x=[2,1,6,4,-7];
// // x.reverse();
// // console.log(x);
// ---------------
// let reverseValue=[];
// for(let i = x.length -1 ; i >=0 ;i--){
//     let result = x[i];
//     reverseValue.push(result);
// } console.log(reverseValue);
// // ------------------------------------------------------------------------------------------------------
// 3. FizzBuzz
// Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".
// Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]
// let sum=[];
// for (let i = 1; i <= 135; i++) {
//     if(i %3===0 && i%5===0){
//         sum.push("fizzBuzz");
//     }else if(i%3===0){
//         sum.push("fizz");
//     }else if(i%5===0){
//         sum.push("buzz")
//     }else{
//         sum.push(i);
//     }
// } console.log(sum);
// // ------------------------------------------------------------------------------------------------------
// 4. Fibonacci
// For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.
// 0 1 1 2 3 5 8 13 21...
// let fibu=[];
// for (let i = 0; i <= 1000; i++) {
//    if(i == 0){
//     fibu[i]= i;
//    } else if(i == 1){
//     fibu[i]=i;
//    }else{
//     fibu[i]= fibu[i-1]+fibu[i-2];
//    }
    
// } console.log(fibu.length);
// console.log(fibu);
 

// // ------------------------------------------------------------------------------------------------------
// 5. Remove the Negative
// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].
// let x=[1,-2,4,1];
// let result = x.filter(num => num>0);
// console.log(result);

// // ------------------------------------------------------------------------------------------------------
// 6. Communist Censorship
// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice
// let x =['Man', 'I','Love','The','Matrix','Program'];
// let word="Program";
// let sum ="";
// for (let i = 0; i < x.length; i++) {
//     if( i < word.length){
//         sum +="*";
//     }
//     if(x[i] == word){
//         x[i]=sum;
//     }
// } console.log(x);