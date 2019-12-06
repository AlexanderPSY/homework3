//8
var arr = [2, 5, 9, -1, -6, 15, -2, 0, 4]
var sum = 0
for (var val of arr) {
    if (val > 0) {
        sum += val
    }
}
console.log(sum)