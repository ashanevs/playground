// after reading https://computer.howstuffworks.com/bytes.htm
// ... this breaks with something like 1010111101010110101110, 
// see: https://stackoverflow.com/questions/1685680/how-to-avoid-scientific-notation-for-large-numbers-in-javascript
function convertBinaryToDecimal(num) {
    const str = String(num);

    return str.split("").reverse().reduce((total, digit, index) => {
        return total + Number(digit) * 2 ** index;
    }, 0);
}
