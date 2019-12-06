//1
var i = 1
do {
    console.log(i++)
}
while (i <= 50)


//2
var arr = [1, 2, 3, 4, 5]
for (var val of arr) {
    console.log(val);
}

//3
var arr = [2, 3, 4, 5]
sum = 0
for (var val of arr) {
    sum += val
}
console.log(sum);

//4
var obj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина'
};
for (var key in obj) {
    console.log(`${key} - это ${obj[key]}`)
}

//5
var num = 0
while (num <= 100) {
    console.log(num)
    num += 2
}

//6
var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}
for (var key in obj) {
    console.log(`${key} - это ${obj[key]}`)
}

//7
var arr = [2, 5, 9, 15, 0, 4]
for (var val of arr) {
    if (val > 3 && val < 10) {
        console.log(val)
    }
}

//8
var arr = [2, 5, 9, -1, -6, 15, -2, 0, 4]
var sum = 0
for (var val of arr) {
    if (val > 0) {
        sum += val
    }
}
console.log(sum)

//9
var arr = [1, 2, 5, 9, 4, 13, 4, 10]
for (var val of arr) {
    if (val === 4) {
        console.log('Есть!')
        break
    }
}

//10
var arr = [10, 20, 30, 50, 235, 3000]
for (var val of arr) {
    if (val.toString()[0] === '1' || val.toString()[0] === '2' || val.toString()[0] === '5') {
        console.log(val)
    }
}

//11
var st = Math.pow(2, 10)
console.log(st)

//12
var str = 'aaa@bbb@ccc'
console.log(str.replace(/@/g, '!'))

//13
var str = 'aaa bbb ccc'
console.log(str.substr(4, 3))
console.log(str.substring(4, 7))
console.log(str.slice(4, 7))

//14
var dateEn = '2025-12-31'
console.log(dateEn.split('-').reverse().join('/'));

//15
var str = 'js'
console.log(str.toUpperCase())

//16
var str = 'JS'
console.log(str.toLowerCase())

//17
var str = 'я учу javascript!'
console.log(str.length)

//18
var str = 'я учу javascript!'
console.log(str.substr(2, 3))
console.log(str.substring(2, 5))
console.log(str.slice(2, 5))

//19
var str = 'я учу javascript!'
console.log(str.indexOf('учу'))

//20
var str = 'я учу javascript!'
console.log(str.replace(/ /g, '-'))

//21
var str = 'я учу javascript!'
console.log(str.split(' '))

//22
var str = 'я учу javascript!'
console.log(str.split(''))

//23
var dateEn = '2025-12-31'
console.log(dateEn.split('-').reverse().join('.'));

//24
var arr = ['я', 'учу', 'javascript', '!']
console.log(arr.join('+'));

//25
function firstLetterToUpperCase(str) {
    return str[0].toUpperCase() + str.slice(1)
}

console.log(firstLetterToUpperCase('some string'))

//26
function lastLetterToUpperCase(str) {
    return str.slice(0, str.length - 1) + str[str.length - 1].toUpperCase()
}

console.log(lastLetterToUpperCase('some string'))

//27
function deleteUnderline(str) {
    return str.split('_').reduce((accumulator, value) => accumulator + value[0].toUpperCase() + value.slice(1))
}

console.log(deleteUnderline('good_var_test_text'))

//28
var arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6']
var sum = 0
for (var val of arr) {
    isNaN(val) ? sum += 0 : sum += +val
}
console.log(sum);

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

//30
var arr = ['AngularJS', 'jQuery']
arr.unshift('Backbone.js')
arr.push('ReactJS', 'Vue.js')
arr.splice(1, 0, 'CommonJS')
alert('Это здесь лишнее: ' + arr.splice(arr.indexOf('jQuery'), 1))
var dlyaLyudshix = []
if (arr.indexOf('Vue.js') !== -1) {
    dlyaLyudshix.push(arr[arr.indexOf('Vue.js')])
}
console.log(dlyaLyudshix);

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

//32
var phone = {
    brand: 0,
    model: 0,
    resolution: 0,
    color: 0
}
for (var key in phone) {
    phone[key] = prompt(`Please input ${key} of phone`)
}
console.log(phone);

//33
var str = 'Как однажды Жак звонарь сломал фонарь головой'
var strRight = str.split(' ')
strRight.push(strRight.splice(strRight.indexOf('фонарь'), 1)[0])
console.log(strRight.join(' '))
console.log(str)

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


//just

