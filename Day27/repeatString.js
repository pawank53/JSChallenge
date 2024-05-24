// Solution 1
const repeatString = (str, k) => {
  let s = "";
  if (k > 0) {
    for (let i = 0; i < k; i++) {
      s = s.concat(str);
    }
  } else {
    return str;
  }
  return s;
};
console.log(repeatString("abc", 3));
console.log(repeatString("abc", 0));
console.log(repeatString("", 3));
// Solution 2
console.log("###########################");
const repeatString2=(str, k)=>{
    return k>0 ?str.repeat(k): str;
}
console.log(repeatString2("abc", 3));
console.log(repeatString2("abc", 0));
console.log(repeatString2("", 3));
