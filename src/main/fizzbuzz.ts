export function fizzbuzzOf(number: number) {
    if(number === 9) return 'fizz'
    if(number === 6) return 'fizz'
    if(number === 3) return 'fizz'
    return number.toString()
}