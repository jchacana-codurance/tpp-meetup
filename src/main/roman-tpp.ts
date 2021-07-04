export function romanConverter(number: number): string {
    if(number === 4)
        return 'IV' + romanConverter(0);
    if(number >= 1)
        return 'I' + romanConverter(number - 1);
    return '';
}