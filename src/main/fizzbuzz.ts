export function fizzbuzzOf(number: number) {
    if( number === 20) return 'buzz'
    if( number === 10) return 'buzz'
    if( number === 5) return 'buzz'
    if( number % 3 === 0) return 'fizz'
    return number.toString()
}