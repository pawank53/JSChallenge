const isPalindrome=(str)=>{
    str=str.toUpperCase();
    str=str.split(" ").join("");
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev+=str.charAt(i)
    }
    if(str===rev){
        console.log("Palindrome");
    }else{
        console.log("Not Palindrome");
    }
}
isPalindrome("My nAme is $%$ sIEman ym");
isPalindrome("Madam");
isPalindrome("Was it a car or a Cat I saw");
isPalindrome("Javascript");