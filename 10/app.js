//10
var arr = [10, 20, 30, 50, 235, 3000]
for (var val of arr) {
    if (val.toString()[0] === '1' || val.toString()[0] === '2' || val.toString()[0] === '5') {
        console.log(val)
    }
}