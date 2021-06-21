export function fizzbuzzOf(number: number) {
    if (number % 5 === 0) return 'buzz'
    if( number % 3 === 0) return 'fizz'
    return number.toString()
}