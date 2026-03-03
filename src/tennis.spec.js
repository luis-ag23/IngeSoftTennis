import Tennis from "./tennis.js"

describe("Tennis Scorer",()=>{
  it("toma en cuenta el caso de inicio de juego",()=>{
    let tennis = new Tennis();
    expect(tennis.score()).toEqual("Love - Love")
  })
});