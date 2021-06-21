import {fizzbuzzOf} from "../main/fizzbuzz";

/**
 * Write a function that takes numbers from 1 to 100 and outputs them as a string,
 * but:
 *
 *  - For multiples of three returns "Fizz" instead of the number and
 *  - For the multiples of five returns "Buzz".
 *  - For numbers which are multiples of both three and five returns "FizzBuzz".
 */

describe('Fizz Buzz', () => {

    it('should print number as a string', () => {

        expect(fizzbuzzOf(1)).toBe('1')
        expect(fizzbuzzOf(2)).toBe('2')
        expect(fizzbuzzOf(4)).toBe('4')
    })

    it('should print `fizz` when getting multiples of 3', () => {
        expect(fizzbuzzOf(3)).toBe('fizz')
        expect(fizzbuzzOf(6)).toBe('fizz')
        expect(fizzbuzzOf(9)).toBe('fizz')
    })

    it('should print `buzz` when getting multiples 5', () => {
        expect(fizzbuzzOf(5)).toBe('buzz')
        expect(fizzbuzzOf(10)).toBe('buzz')
        expect(fizzbuzzOf(20)).toBe('buzz')
    })

    it('should print `fizzbuzz` when getting multiples of 3 and 5', () => {
        expect(fizzbuzzOf(15)).toBe('fizzbuzz')
        expect(fizzbuzzOf(30)).toBe('fizzbuzz')
        expect(fizzbuzzOf(45)).toBe('fizzbuzz')
    })
})