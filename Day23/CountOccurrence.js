const CountOccurrence=(arr)=>{

    let map={};
    arr.forEach(element => {
        if(map[element]){
            map[element]++;
        }else{
            map[element]=1;
        }
    });
    return map;
}
console.log(CountOccurrence([1, 12, 31, 2, 1, 31, 4, 4, 5]));
console.log(CountOccurrence([1,2,2,3,1,4,2]));