import {sum} from "../sum";

test("The sum function should return the sum of two numbers",()=>{

    const result = sum(3,4);
    //assertion
    expect(result).toBe(7);
})