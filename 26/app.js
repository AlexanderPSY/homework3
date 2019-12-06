//26
function lastLetterToUpperCase(str) {
    return str.slice(0, str.length - 1) + str[str.length - 1].toUpperCase()
}

console.log(lastLetterToUpperCase('some string'))