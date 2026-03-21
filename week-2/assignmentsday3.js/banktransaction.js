const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];



//filter() all credit transactions
const r1=transactions.filter((transaction)=> transaction.type==="credit");
console.log(r1);


//map() to extract only transaction amounts
const r2=transactions.map((transaction)=> transaction.amount);
console.log(r2);



//reduce() to calculate final account balance
const r3=transactions.reduce((balance,transaction)=>{
    if(transaction.type==="credit"){
        return balance+transaction.amount;
    }
    else{
        return balance-transaction.amount;
    }
},0);
console.log(r3);



//find() the first debit transaction
const r4=transactions.find((transaction)=> transaction.type==="debit");
console.log(r4);




//findIndex() of transaction with amount 10000
const r5=transactions.findIndex((transaction)=> transaction.amount===10000);
console.log(r5);