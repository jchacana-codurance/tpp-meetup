import {romanConverter} from "../main/roman-tpp";

describe('Roman Numerals', () => {
    it("should return '' when passing 0", () => {
        expect(romanConverter(0)).toBe('')
    })
})