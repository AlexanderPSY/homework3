//33
var str = '��� ������� ��� ������� ������ ������ �������'
var strRight = str.split(' ')
strRight.push(strRight.splice(strRight.indexOf('������'), 1)[0])
console.log(strRight.join(' '))
console.log(str)