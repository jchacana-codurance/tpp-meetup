const symbols: Record<number, string> = {
    0: '',
    1: 'I',
    4: 'IV',
    5: 'V'
}

const keys = Object.keys(symbols).map(key => Number(key)).reverse()

function getKey(number: number): number {
    return keys.filter(key => number >= key)[0];
}

export function romanConverter(number: number): string {
    const key = getKey(number)
    if(key === 0)
        return symbols[0];
    return symbols[key] + romanConverter(number - key);
}