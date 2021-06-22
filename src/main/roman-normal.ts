export function romanConverter(number: number) {
    switch (number) {
        case 10:
            return 'X'
        case 5:
            return 'V'
        case 1:
            return 'I'
        default:
            return ''
    }
}