// after reading https://computer.howstuffworks.com/bytes.htm
function convertBinaryToDecimal(num) {
    const str = String(num);

    return str.split("").reverse().reduce((total, digit, index) => {
        return total + Number(digit) * 2 ** index;
    }, 0);
}
