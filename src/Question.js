class ToleranceRangeError extends Error {
    constructor(message) {
        super(message);
        this.name = "ToleranceRangeError";
    }
}

 export default class Question {
    // text - not empty string
    // anwser - number from 0 to options.length
    // options - string or number array with at least 2 elements
    constructor(text, answer, options = []) {
        if(!text) {
            throw new ToleranceRangeError('argument 1 must be not empty.');
        }
        else if (options.length < 2) {
            throw new ToleranceRangeError('argument 3 must be array and have at least 2 elements');
        }
        else if (answer <= 0 || answer > options.length) {
            throw new ToleranceRangeError('argument 2 must be higher than zero and lower than argument 3 length.');
        }
        this.text = text;
        this.answer = answer;
        this.options = options;
    }
    /*get text() {
        return this.text;
    }
    get options() {
        return this.options;
    }
    get answer() {
        return this.answer;
    }*/
} 