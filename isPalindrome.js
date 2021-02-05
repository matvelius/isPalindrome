var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function (line) {
    var sanitizedString = line.replace(/\W/g, '').toLowerCase()

    if (sanitizedString.length == 0) {
        console.log("False")
        rl.close()
        return
    } else if (sanitizedString.length == 1) {
        console.log("True")
        rl.close()
        return
    }

    // console.log(`sanitizedString: ${sanitizedString}`)

    const stringHasEvenNumberOfCharacters = sanitizedString.length % 2 == 0

    // console.log(`stringHasEvenNumberOfCharacters: ${stringHasEvenNumberOfCharacters}`)

    var rightCharIndex = Math.floor(sanitizedString.length / 2)
    var leftCharIndex = rightCharIndex - 1

    if (!stringHasEvenNumberOfCharacters) {
        rightCharIndex = rightCharIndex + 1
    }

    // console.log(`rightCharIndex: ${rightCharIndex}`)
    // console.log(`leftCharIndex: ${leftCharIndex}`)

    while (sanitizedString[leftCharIndex] == sanitizedString[rightCharIndex] && leftCharIndex > 0 && rightCharIndex < sanitizedString.length) {
        leftCharIndex -= 1
        rightCharIndex += 1
    }

    if (leftCharIndex == 0 && sanitizedString[leftCharIndex] == sanitizedString[rightCharIndex]) {
        console.log("True")
    } else {
        console.log("False")
    }

    rl.close()
})