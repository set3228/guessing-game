class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        return this.guessAnswer = this.min + Math.round((this.max - this.min) / 2);
    }

    lower() {
        this.max = this.guessAnswer;
    }

    greater() {
        this.min = this.guessAnswer;
    }
}

module.exports = GuessingGame;
