//synchrous java script(time consuming tasks are executed one by one and the next task will not start 
// until the previous one is completed)
//asynchronous java script(time consuming tasks are executed in the background and the next task will 
// start without waiting for the previous one to complete)

//synchronous java script example
/* In this example, Task 1 is executed first, and then Task 2 and Task 3 are executed sequentially.
console.log("Task 1");
 for(i=0;i<=10000000;i++){}//time consuming task
console.log("Task 2");
console.log("Task 3");
*/


//asynchronous java script example
/* In this example, Task 1 is executed first, and then the setTimeout function is called to schedule Task 2 to be executed after 8 seconds.
console.log("Task 1");
setTimeout(function() {
    console.log("Task 2");
}, 8000); //time consuming task
console.log("Task 3");
*/

//setTimeout() is a built-in function in JavaScript that allows you to execute a function after a 
// specified delay (in milliseconds).
/*setTimeout() syntax:
setTimeout
(function() {
    console.log("This message will be displayed after 3 seconds");
}, timeout); //delay of 3 seconds (3000 milliseconds)
*/

//example of setTimeout() function
setTimeout(function() {
    console.log("This message will be displayed after 3 seconds");
}, 3000); //delay of 3 seconds (3000 milliseconds)
console.log("behaves asynchronously and will not block the execution of the next line of code");


//setInterval() is a built-in function in JavaScript that allows you to execute a function repeatedly at 
// specified intervals (in milliseconds).
/*
setInterval(function() {
    console.log("This message will be displayed every 2 seconds");
}, 2000); //interval of 2 seconds (2000 milliseconds)
*/


//promise is a built-in object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// create a promise (executor receives resolve and reject)
//call a friend in 5 min promise(incomplete)

/*const promiseobj= new Promise(function(fulfilled, rejected) {
 setTimeout(function() {
    if(futureCondition==true) {
        fulfilled("hello........");
    } else {
        rejected("sorry........");
    }
    }, 10000);
});

promiseobj
.then(message) {
 */
//promise examples
//make api requests
//hash a password
//creating tokens
//database/HTTP libraries
//file and stream api

