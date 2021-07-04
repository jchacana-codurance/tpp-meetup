const symbols: Record<number, string> = {
    0: '',
    1: 'I',
    4: 'IV',
    5: 'V'
}

function getKey(number: number): number {
    if(number >= 5)
        return 5;
    if(number >= 4)
        return 4;
    if(number >= 1)
        return 1;
    return 0;
}

export function romanConverter(number: number): string {
    const key = getKey(number)
    if(key === 0)
        return symbols[0];
    return symbols[key] + romanConverter(number - key);
}