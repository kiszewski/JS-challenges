/* 
Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct.
However, since someone could look over your shoulder,
you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

function maskify(answer) {

    if(answer.length < 4) return answer

    lastFour = answer.slice(-4)

    answer = answer.slice(0, (answer.length - 4))

    const regex = /./g;

    console.log(answer)
    console.log(lastFour)

    return answer.replace(regex, "#") + lastFour
}

console.log(maskify("Estou com muita fome"))