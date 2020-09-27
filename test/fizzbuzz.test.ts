import { fizzBuzz } from '../src/fizzbuzz'

describe('FizzBuzz', () => {
    it('returns "1" for 1 number', () => {
        expect(fizzBuzz(1)).toEqual('1')
    })

    it('returns "2" for 2 number', () => {
        expect(fizzBuzz(2)).toEqual('2')
    })

    it('returns "Fizz" for 3 number', () => {
        expect(fizzBuzz(3)).toEqual('Fizz')
    })

    it('returns "Fizz" for 6 number', () => {
        expect(fizzBuzz(6)).toEqual('Fizz')
    })

    it('returns "Buzz" for 5 number', () => {
        expect(fizzBuzz(5)).toEqual('Buzz')
    })

    it('returns "Buzz" for 10 number', () => {
        expect(fizzBuzz(10)).toEqual('Buzz')
    })

    it('returns "Buzz" for 5 number', () => {
        expect(fizzBuzz(5)).toEqual('Buzz')
    })

    it('returns "FizzBuzz" for 15 number', () => {
        expect(fizzBuzz(15)).toEqual('FizzBuzz')
    })
})
