// Asynchronous JavaScript: setTimeout() and setInterval()

// Asynchronous JavaScript allows you to perform time-consuming tasks without blocking the execution of other code. 
// Two commonly used functions for handling asynchronous operations in JavaScript are setTimeout() and setInterval().

/*
//evaluateExam() function simulates the process of submitting an exam and evaluating it asynchronously using setTimeout() function.
function evaluateExam() {
    console.log("exam submitted successfully");
    setTimeout(function() {
        console.log("evaluating the exam...");
    }, 2000);
    setTimeout(function() {
        console.log("exam evaluation completed");
    }, 4000);
}

// invoke the function to see output
evaluateExam();

//otp resend countdown timer using setTimeout() function

let timeLeft=10;
function countdown() { 
    
    if(timeLeft > 0) {
        console.log(`resend otp in:${timeLeft}`);
        timeLeft--;
        setTimeout(countdown, 1000); //call the function again after 1 second (1000 milliseconds)
    } else {
        console.log("you can request a new OTP now");
    }
}
console.log("OTP resent successfully. Please wait for the countdown to complete before requesting a new OTP.");

countdown();
*/

/*
//otp resend countdown timer using setInterval() function

let timeLeft1=10;
let timerId = setInterval(function() {
    if(timeLeft1 > 0) {
        console.log(`resend otp in:${timeLeft1}`);  
        timeLeft1--;
    } else {
        console.log("you can request a new OTP now");
        clearInterval(timerId); //stop the interval timer when countdown is complete
    } 
}, 1000); //execute the function every 1 second (1000 milliseconds)

console.log("OTP resent successfully. Please wait for the countdown to complete before requesting a new OTP.");
*/











