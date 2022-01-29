
const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      return this.secretNum
  },
  getGuess: function() {
    //ask for a number between this.biggestNum and this.smallestNum, keep asking until a suitable number is inputted
    let myNum = null;
    //this does not fit the condition so it will start the while loop
    while (myNum < this.smallestNum || isNaN(myNum) || myNum > this.biggestNum) {
      myNum = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`);
    //this keeps it looping until the conditions are met
    console.log(myNum)

    //parsInt to make it from a string to a number
  }
  // render: function() {

  }
}
console.log(game.play())
game.getGuess()
