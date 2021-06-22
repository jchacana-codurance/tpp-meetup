import {romanConverter} from "../main/roman-tpp";

describe('Roman Numerals', () => {
    it("should return '' when passing 0", () => {
        expect(romanConverter(0)).toBe('')
    })

    it("should return 'I' when passing 1", () => {
        expect(romanConverter(1)).toBe('I')
    })

    it("should return 'II' when passing 2", () => {
        expect(romanConverter(2)).toBe('II')
    })
})