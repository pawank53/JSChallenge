const RandomHexColorGenerator=()=>{
    const randomInt = Math.floor(Math.random() * 16777215);
    const hexColor = `#${randomInt.toString(16).padStart(6, '0')}`;
    return hexColor;
}
console.log(RandomHexColorGenerator());