import {romanConverter} from "../main/roman-tpp";

describe('Roman Numerals', () => {
    it.each([
        ["", 0],
        ["I", 1],
        ["II", 2],
        ["III", 3],
        ["IV", 4],
        ["V", 5],
        ]
    )("should return '%s' when passing %i", (expected: string, arg: number) => {
        expect(romanConverter(arg)).toBe(expected)
    })
})