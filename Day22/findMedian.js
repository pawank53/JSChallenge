const findMedian=(arr)=>{
    arr.sort((a, b)=>a -b );
    let n=arr.length
    if(n %2 !=0){
        return (arr[Math.floor(n/2)]);
    }else{
        return (arr[(Math.floor(n/2))-1] + arr[Math.floor(n/2)])/2;
    }
}
console.log(findMedian([5, 3, 9, 1 ,7]));
console.log(findMedian([2, 4, 6, 8]));
console.log(findMedian([3, 3, 5 , 7, 9, 11]));