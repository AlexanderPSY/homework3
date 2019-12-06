//28
var arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6']
var sum = 0
for (var val of arr) {
    isNaN(val) ? sum += 0 : sum += +val
}
console.log(sum);