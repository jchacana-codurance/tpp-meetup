export function romanConverter(number: number): string {
    if(number >= 1)
        return 'I' + romanConverter(number - 1);
    return '';
}