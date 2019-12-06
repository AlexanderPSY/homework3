//27
function deleteUnderline(str) {
    return str.split('_').reduce((accumulator, value) => accumulator + value[0].toUpperCase() + value.slice(1))
}

console.log(deleteUnderline('good_var_test_text'))