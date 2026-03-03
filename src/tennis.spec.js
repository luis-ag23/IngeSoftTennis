import Tennis from "./tennis.js"

describe("Tennis Scorer",()=>{
  it("toma en cuenta el caso de inicio de juego",()=>{
    let tennis = new Tennis();
    expect(tennis.score()).toEqual("Love - Love")
  })
});

it("jugador 1 anota jugador dos en cero", () => {
    let tennis = new Tennis();  
    tennis.player1Scores();     
    let resultado =tennis.score() 
    expect(resultado).toEqual("15 - Love"); 
  });
