// Dependencies.

// The length of the order id.
const orderIdLength = 20;

/**
 * Order class
 */
class AnswerCollection {
    constructor(answers) {
        // List of menu items user is going to by
        if (!Array.isArray(answers)) {
            throw 'Parameter is not an array!';
        } else
        this.answers = answers;
    }

    /**
     * Check if order has all required fields.
     * @return {boolean}
     */
    isValid() {
        return Array.isArray(this.answers);
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