/**
 * AnswerCollection class
 */
class AnswerCollection {
    constructor(answers) {
        // Throw error if the argument answers is not an array
        if (!Array.isArray(answers)) {
            throw 'Argument is not an array!';
        } else
        this.answers = answers;
    }

    isEmpty() {
        return this.answers.length === 0;
    }

    size() {
        return this.getAnswers().length;
    }

    getAnswers() {
        return this.answers;
    }

    filter() {
        return new AnswerCollection(this.getAnswers());
    }
}

// Export the module.
module.exports = AnswerCollection;
