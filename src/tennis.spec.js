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



it("jugador 1 anota 2 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("30 - Love");
  });

 it("jugador 1 anota 3 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("40 - Love");
  });


it("jugador 2 anota jugador 1 en 0", () => {
    let tennis = new Tennis();  
    tennis.player2Scores();     
    let resultado =tennis.score() 
    expect(resultado).toEqual("Love - 15"); 
  }); 

it("jugador 2 anota 2 veces jugador 1 en 0", () => {
    let tennis = new Tennis();  
    tennis.player2Scores();     
    tennis.player2Scores();     
    let resultado =tennis.score() 
    expect(resultado).toEqual("Love - 30"); 
  }); 

it("jugador 2 anota 3 veces jugador 1 en 0", () => {
    let tennis = new Tennis();  
    tennis.player2Scores();     
    tennis.player2Scores();     
    tennis.player2Scores();     
    let resultado =tennis.score() 
    expect(resultado).toEqual("Love - 40"); 
  }); 

it("jugador 2 anota 3 veces jugador 1 anota 3 veces", () => {
    let tennis = new Tennis();  
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player2Scores();     
    tennis.player2Scores();     
    tennis.player2Scores();     
    let resultado =tennis.score() 
    expect(resultado).toEqual("Deuce"); 
  }); 


it("jugador 1 anota 4 veces jugador 1 anota 3 veces", () => {
    let tennis = new Tennis();  
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player2Scores();     
    tennis.player2Scores();     
    tennis.player2Scores();     
    let resultado = tennis.score() 
    expect(resultado).toEqual("Advantage Player 1"); 
  }); 

it("jugador 1 anota 5 veces jugador 1 anota 3 veces", () => {
    let tennis = new Tennis();  
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player2Scores();     
    tennis.player2Scores();     
    tennis.player2Scores();     
    let resultado = tennis.score() 
    expect(resultado).toEqual("Game for player 1"); 
  }); 

  