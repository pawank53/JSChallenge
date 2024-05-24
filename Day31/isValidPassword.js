// Solution 1
const isValidPassword=(password)=>{
    const regex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;<>,.?~\\|\-])[a-zA-Z0-9!@#$%^&*()_+={}\[\]:;<>,.?~\\|\-]{8,}$/;
    return regex.test(password);
}
console.log(isValidPassword("Abc123")); // Output: false
console.log(isValidPassword("Abcd@123")); // Output: true
console.log(isValidPassword("Strongpassword123!")); // Output: true
console.log(isValidPassword("Ab@13")); // Output: false
console.log("############################");
// Solution 2
const isValidPassword2=(password)=>{
    let isUpperCase=false;
    let isLowerCase=false;
    let isNumeric=false;
    let isSpecialCharacter=false;
    for(const ch of password){
        if(ch.charCodeAt(0) >= 48 && ch.charCodeAt(0) <=57){
            isNumeric=true;
        }else if(ch.charCodeAt(0) >=65 && ch.charCodeAt(0) <=90){
            isUpperCase=true;
        }else if(ch.charCodeAt(0) >=97 && ch.charCodeAt(0) <=122){
            isLowerCase=true;
        }else{
            isSpecialCharacter=true;
        }
    }
    if(isLowerCase && isNumeric && isSpecialCharacter && isUpperCase && password.length>=8){
        return true;
    }else{
        return false;
    }
}
console.log(isValidPassword2("Abc123"));
console.log(isValidPassword2("Abcd@123"));
console.log(isValidPassword2("Strongpassword123!"));
console.log(isValidPassword2("Ab@13"));