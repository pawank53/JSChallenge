const numberRange=(start, end)=>{
    let arr=[];
    let index=0;
    for(let i=start;i<=end;i++){
        arr[index]=i;
        index++
    }
    return arr;
}
console.log(numberRange(0, 5));
console.log(numberRange(3, 7));
console.log(numberRange(-2, 2));