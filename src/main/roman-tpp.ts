const symbols = ['', 'I', 'IV', 'V']
export function romanConverter(number: number): string {
    if(number >= 5)
        return symbols[3] + romanConverter(number - 5);
    if(number >= 4)
        return symbols[2] + romanConverter(number - 4);
    if(number >= 1)
        return symbols[1] + romanConverter(number - 1);
    return symbols[0];
}