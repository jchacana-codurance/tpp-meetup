import {romanConverter} from "../main/roman-normal";

describe('Roman Numerals', () => {
    it('should return `` when passing 0', () => {
        expect(romanConverter(0)).toBe('')
    })

    it('should return `I` when passing 1', () => {
        expect(romanConverter(1)).toBe('I')
    })

    it('should return `V` when passing 5', () => {
        expect(romanConverter(5)).toBe('V')
    })

    it('should return `X` when passing 10', () => {
        expect(romanConverter(10)).toBe('X')
    })
})