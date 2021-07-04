export function romanConverter(number: number): string {
    if(number === 4)
        return 'IV' + romanConverter(number - 4);
    if(number >= 1)
        return 'I' + romanConverter(number - 1);
    return '';
}