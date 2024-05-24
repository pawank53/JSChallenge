const  GenerateHashTag=(str)=> {
    if(str.length>280 || str.length===0){
        return false;
    }
    strArr=str.split(" ")
    let concatWords=""
    strArr.map((word)=>{
        concatWords+=word.charAt(0).toUpperCase()+ word.slice(1)
    })
    console.log("#".concat(concatWords));
}
GenerateHashTag("Keep rocking gyus");
GenerateHashTag("100 Days of javascript challange");
GenerateHashTag("coding");
GenerateHashTag("JavaScript");
GenerateHashTag("My name is pawan Kumar")