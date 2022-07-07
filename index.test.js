const sum = require("./index");

describe("Testing sum function", () => {
    test("add n possitive number", () => {
        expect(sum(1,4,3,4)).toBe(12)
    })
    
})