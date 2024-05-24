const CountVowels=(str)=>{
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)=="A" || str.charAt(i)=="a" || str.charAt(i)=="E" || str.charAt(i)=="e" || 
        str.charAt(i)=="I" || str.charAt(i)=="i" || str.charAt(i)=="O" || str.charAt(i)=="o" || 
        str.charAt(i)=="U" || str.charAt(i)=="u"){
            count ++;
        }
    }
    return count;
}
console.log(CountVowels("My name is Pawan KUMAR"));
console.log(CountVowels("Pawan KUMAR"));
console.log(CountVowels("Helloo world"));
console.log(CountVowels("ThE quIck brOwn fOx"));
console.log(CountVowels("Brrrp"));