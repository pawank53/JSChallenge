// Solution 1
const reverseString=(str)=>{
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev+=str.charAt(i);
    }
    return rev;
}
console.log(reverseString("Pawan"));
console.log(reverseString("Pawan is my name"));
// Solution 2
const reverse=(str)=>{
    let strArr=str.split("");
    let low=0;
    let high=strArr.length-1;
    while(low<=high){
        let temp=strArr[low];
        strArr[low]=strArr[high]
        strArr[high]=temp;
        low++;
        high--;
    }

    return strArr.join('');
}
console.log(reverse("Pawan"));
console.log(reverse("Pawan is my name"));