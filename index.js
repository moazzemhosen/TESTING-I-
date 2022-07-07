function sum(...args) {
    let sumValue = [...args].reduce((a, c) => a + Number(c), 0)
    return Number(sumValue.toFixed(1));
}
module.exports = sum;