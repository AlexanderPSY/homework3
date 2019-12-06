//29
var length = 10
arr = [1, 2]
for (let i = 0; i < length; i++) {
    arr.push(Math.random().toFixed(2))
}
for (let val of arr) {
    console.log(valPow(val, 5));
}

function valPow(val, pow) {
    let valPowered = 1
    while (pow) {
        valPowered *= val
        pow--
    }
    return valPowered
}
