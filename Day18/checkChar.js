const checkChar=(char)=>{
    if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90){
        return "Upper case"
    }else if(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122){
        return "Lower case"
    }else{
        return "Other"
    }
}
console.log(checkChar("a"));
console.log(checkChar("P"));