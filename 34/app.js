//34
var arr = []
for (let i = 1; i <= 10; i++) {
    arr[i - 1] = []
    for (let j = 1; j <= 10; j++) {
        arr[i - 1].push(`${i}x${j}=${i * j}`)
        if (i === 6 && j === 6) {
            i = 11
            break
        }
    }
}
console.log(arr);