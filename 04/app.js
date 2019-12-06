//4
var obj = {
    'Минск': 'Беларусь',
    'Москва': 'Россия',
    'Киев': 'Украина'
};
for (var key in obj) {
    console.log(`${key} - это ${obj[key]}`)
}