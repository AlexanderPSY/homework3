//31
var arr = []
for (let i = 0; i < 5; i++) {
    arr.push(prompt("Type something"))
}
var sum = 0
for (var val of arr) {
    isNaN(val) ? sum += 0 : sum += +val
}
console.log(arr)
alert(sum)