import {romanConverter} from "../main/roman-normal";

describe('Roman Numerals', () => {
    it('should return `` when passing 0', () => {
        expect(romanConverter(0)).toBe('')
    })

    it('should return `I` when passing 1', () => {
        expect(romanConverter(1)).toBe('I')
    })
})