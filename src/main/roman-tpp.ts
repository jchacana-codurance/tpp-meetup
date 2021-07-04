export function romanConverter(number: number): string {
    if(number === 1)
        return 'I' + romanConverter(0);
    return '';
}