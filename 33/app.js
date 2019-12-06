//33
var str = 'Как однажды Жак звонарь сломал фонарь головой'
var strRight = str.split(' ')
strRight.push(strRight.splice(strRight.indexOf('фонарь'), 1)[0])
console.log(strRight.join(' '))
console.log(str)