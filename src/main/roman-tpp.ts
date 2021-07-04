const symbols: Record<number, string> = {
    0: '',
    1: 'I',
    4: 'IV',
    5: 'V'
}
export function romanConverter(number: number): string {
    if(number >= 5)
        return symbols[5] + romanConverter(number - 5);
    if(number >= 4)
        return symbols[4] + romanConverter(number - 4);
    if(number >= 1)
        return symbols[1] + romanConverter(number - 1);
    return symbols[0];
}