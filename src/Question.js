class ToleranceRangeError extends Error {
    constructor(message) {
        super(message);
        this.name = "ToleranceRangeError";
    }
}

class Option {
    constructor(text, iscorrect=false) {
        this.text = text;
        this.iscorrect = iscorrect;
    }
}

 export default class Question {
    // text - not empty string
    // anwser - number from 0 to options.length
    // options - string or number array with at least 2 elements
    constructor(text, anwser, options = []) {
        if(!text) {
            throw new ToleranceRangeError('argument 1 must be not empty.');
        }
        else if (options.length < 2) {
            throw new ToleranceRangeError('argument 3 must be array and have at least 2 elements');
        }
        else if (anwser <= 0 || anwser > options.length) {
            throw new ToleranceRangeError('argument 2 must be higher than zero and lower than argument 3 length.');
        }
        
        this.text = text;
        this.anwser = anwser - 1;
        this.options = [];
        for(let i = 1; i <= 4; i++) {
            this.options.push(new Option(options[i], (i === this.anwser) ? true : false ))
        }
    }
} 