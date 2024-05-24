const CountCharacter=(str, value)=>{
    str=str.toUpperCase();
    value=value.toUpperCase();
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)=== value){
            count++;
        }
    }
    console.log(count);
}
CountCharacter("PawanKumar", "a");
CountCharacter("AcceptthisChallange", "t");