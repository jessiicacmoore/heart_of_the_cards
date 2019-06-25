class Deck {
  // We've defined the constructor method, although it's not currently doing anything.
  // This is the perfect place to set up the initial state of any new Deck instances.
  constructor() {
    this.cards = [];

    for (let i = 1; i <= 52; i++) {
      this.cards.push(i);
    }

    
  }
  
  // Any additional instance methods required by the test suite can be defined below.
    shuffle() {
      this.cards.sort(() => Math.random() - 0.5);
      return this.cards;
    }

    draw (num) {
      if (this.cards.length === 0) {
        return -1;
      } else {   
        if (num === undefined) {
          let card = this.cards[this.cards.length-1];
          this.cards.pop();
          return card;
        } else if (typeof num !== 'number') {
          return;
        } else {
          return this.cards.splice(-num).reverse();
        }
      }
    }
}

module.exports = Deck;
