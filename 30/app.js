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