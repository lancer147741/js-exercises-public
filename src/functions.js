const getSymbol = (str, index) => {
    const result = str[index];
    if (result === undefined) {
        return ""
    }
    return result
}


const removeDigit = (number) => {
    let str = ''
    let strNum = number.toString()
    str += strNum[0]
    str += strNum[2]
    return parseInt(str)
}
const isSquare = (number1, number2) => {
    let max = Math.max(number1, number2);
    let min = Math.min(number1, number2)
    return min ** 2 === max

}
const numberLength = (number) => {
    const numStr = number.toString();
    return numStr.length;
}
const flipOver = (str) => {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i -= 1) {
        reverse += str[i];
    }
    return reverse;
}
export { getSymbol, removeDigit, isSquare, numberLength, flipOver }