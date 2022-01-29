
const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      //generates the random number
      // console.log(this.getGuess())
      // console.log(this.secretNum)
      do {
        guesses = this.getGuess();
          // if (isNaN(guesses) === false);
          console.log(guesses);
        //this calls the getGuess function and saves it as a variable, guesses
            this.prevGuesses.push(guesses);
            console.log(this.prevGuesses);
            this.render();
            //this pops it into the prevGuesses array
          }
      while (this.secretNum !== this.prevGuesses[this.prevGuesses.length - 1]);
      //this will keep the function running until the number is guessed, calling the array's last number because if you use guesses, it can't take in guesses and do this while statement at the same time so you can access the guess from the end of the prevGuesses array
      console.log(this.secretNum)
    //return this.secretNum
      //not sure this ^ is necessary when the secretNum is defined above?

  },
  getGuess: function() {
    //ask for a number between this.biggestNum and this.smallestNum, keep asking until a suitable number is inputted
    let myNum = null;
    //this does not fit the condition so it will start the while loop
    while (myNum < this.smallestNum || isNaN(myNum) || myNum > this.biggestNum) {
      myNum = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
      // console.log(typeof(myNum), myNum)
    //this keeps it looping until the conditions are met, also properly converts it to a number
    //it is currently recording each value, even when it is NaN
    //parsInt to make it from a string to a number
  } return myNum
},
  //here in render, I need to create a function that will show an alert() saying either - if the the prev.Guesses[this.prevGuesses.length =1] === secretNum, "Congrats! You guessed the number in [number of prevGuesses]!" else if Your guess is too [high|low] Previous guesses: x, x, x, x
  //it needs to be triggered after every guess - so it will be placed in the do...while loop
  //I need it to access the prevGuesses array to print out the previous guesses
  render: function() {
    if (this.secretNum < this.prevGuesses[this.prevGuesses.length - 1]) {
      alert(`Your guess is too high! Previous guesses: ${this.prevGuesses} `)
    } else if (this.secretNum > this.prevGuesses[this.prevGuesses.length - 1]) {
      alert(`Your guess is too low! Previous guesses: ${this.prevGuesses}`)
    } else {
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`)
    }
      } 
      }
game.play()
//console.log(game.play())
// game.getGuess()
