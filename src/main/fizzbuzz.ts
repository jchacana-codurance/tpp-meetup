function isMultipleOf3(number: number) {
    return number % 3 === 0;
}

export function fizzbuzzOf(number: number) {
    if( number % 5 === 0 && isMultipleOf3(number)) return 'fizzbuzz'
    if (number % 5 === 0) return 'buzz'
    if( isMultipleOf3(number)) return 'fizz'
    return number.toString()
}