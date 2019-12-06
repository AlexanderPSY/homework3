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