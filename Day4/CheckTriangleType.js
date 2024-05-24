const CheckTriangleType=(a, b, c)=> {
    if(a===b && a===c){
        console.log("Equilateral");
    }else if((a===b && a!==c) || ((b===c && b!==a))|| ((c===a && c!==b))){
        console.log("Isosceles");
    }else{
        console.log("Scalene");
  }
}
CheckTriangleType(3, 3, 3,);
CheckTriangleType(3, 4, 3);
CheckTriangleType(3, 4, 5);