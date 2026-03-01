function arraysum(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return console.log(sum)
}

let arr=[23,45,65,89]
arraysum(arr)