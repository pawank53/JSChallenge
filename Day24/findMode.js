const findMode=(arr)=>{
    let map={};
    let count=0;
    let mode=0;
    arr.forEach(element => {
        if(map[element]){
            map[element]++;
            
        }else{
            map[element]=1;
        }
        if(map[element]> count){
            count=map[element];
            mode=element;
        }
    });
    return mode;
}
console.log(findMode([1, 2, 2, 3 ,1, 4 ,2]));
console.log(findMode([2, 1, 1, 2, 3, 3]));