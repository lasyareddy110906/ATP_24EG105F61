function search(array, target) {
    for (let i=0;i<array.length;i++){
        if(array[i]==target)
            return i;
    }
    return -1;
}

let arr=[1,2,3,4,5];
let target=3;
let result=search(arr,target);
if (result==-1){
    console.log("Element not found");
}else{
    console.log("Element found at index:",result);
}