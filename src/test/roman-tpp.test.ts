import {romanConverter} from "../main/roman-tpp";

describe('Roman Numerals', () => {
    it.each([
        ["", 0],
        ["I", 1],
        ["II", 2],
        ["III", 3],
        ["IV", 4],
        ["V", 5],
        ["VI", 6],
        ["VII", 7],
        ["VIII", 8],
        ["IX", 9],
        ["X", 10],
        ]
    )("should return '%s' when passing %i", (expected: string, arg: number) => {
        expect(romanConverter(arg)).toBe(expected)
    })
})