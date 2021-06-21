function isMultipleOf3(number: number) {
    return number % 3 === 0;
}

function isMultipleOf5(number: number) {
    return number % 5 === 0;
}

export function fizzbuzzOf(number: number) {
    if( isMultipleOf5(number) && isMultipleOf3(number)) return 'fizzbuzz'
    if( isMultipleOf5(number)) return 'buzz'
    if( isMultipleOf3(number)) return 'fizz'
    return number.toString()
}