import { test,expect} from "vitest";
import {add} from "./calculator.js";

test('should return 0 for empty string', () => {
    expect(add('')).toBe(0);
});

test('should return the number itself for single number input', () =>{
    expect(add('5')).toBe(5);
} );

test(`should return the sum of two numbers`,()=>{
    expect(add('12,11')).toBe(23);
}

);