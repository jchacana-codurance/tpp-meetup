export function romanConverter(number: number): string {
    if(number >= 5)
        return 'V' + romanConverter(number - 5);
    if(number >= 4)
        return 'IV' + romanConverter(number - 4);
    if(number >= 1)
        return 'I' + romanConverter(number - 1);
    return '';
}