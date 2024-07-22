import sum from "./sum";

test("testing the sum function",()=>{
    expect(sum(10,10)).toBe(20);
})

test("testing the sum function",()=>{
    let a = 20;
    let b = 30;
    let result = 50;
    expect(sum(a,b)).toBe(result);
})

// test("testing the sum function",()=>{
//     let a = 120;
//     let b = 30;
//     let result = 50;
//     expect(sum(a,b)).toBe(result);
// })
    