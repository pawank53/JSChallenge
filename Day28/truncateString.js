// Solution 1
const truncateString=(str, maxLength)=>{
    if(maxLength<=0){
        return str;
    }
    else if(str.length>maxLength){
        return str.substring(0, maxLength).concat("...");
    }else{
        return str;
    }
}
console.log(truncateString("A-tisket a-tasket a green and yellow basket", 8));
//Solution 2
const truncateString2=(str, maxLength)=>{
    if(maxLength<=0){
        return str;
    }else if(str.length> maxLength){
        return str.slice(0, maxLength).concat("...")
    }else{
        return str;
    }
}
console.log(truncateString2("A-tisket a-tasket a green and yellow basket", 8));
console.log(truncateString2("A-tisket a-tasket a green and yellow basket", 0));