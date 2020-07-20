const AnswerCollectionBuilder = require('./AnswerCollectionBuilder');
/**
 * AnswerCollection class
 */
class AnswerCollection {
    constructor(answerCollectionBuilder) {
        // Throw error if the argument is not AnswerCollectionBuilder
        if (!answerCollectionBuilder || !(answerCollectionBuilder instanceof AnswerCollectionBuilder.constructor)) {
            throw 'Invalid answeCollectionBuilder'
        }
        this.answersMap = new Map(answerCollectionBuilder.getAnswers());
        // We are 'injecting' the builder as a parameter here
        // Suggested by this reference
        // https://github.com/ryanmcdermott/clean-code-javascript#dependency-inversion-principle-dip
        this.answerCollectionBuilder = answerCollectionBuilder;
    }

    size() {
        return this.answersMap.size;
    }

    isEmpty() {
        return this.answersMap.size === 0;
    }

    // Removes the key and creates a new answer collection
    remove(k) {
        let answerMapOut = new Map(this.answersMap);
        console.log('deleting key:',k)
        console.log(answerMapOut.get(k))
        answerMapOut.delete(k)
        return this.answerCollectionBuilder.newBuilder().withAnswers(answerMapOut).build();
    }

    getKeys() {
        return this.answersMap.keys();
    }

    // method returns a boolean indicating whether an element with the specified key exists or not.
    hasKey(k) {
        return this.answersMap.hasKey(k);
    }

    findKeyMatches(keyRegex) {
        // return an answer collection whose keys match to given regex pattern
    }

    removeKeyMatches(keyRegex) {
        // return an answer collection with answers whose keys match to given regex pattern are removed from 'this'
    }

    // we will return answers in object format
    getAnswers() {
        let answersOut = [];
        this.answersMap.forEach(function(value, key){
            answersOut[key] = value;
        })
        return answersOut;
    }

}

// Export the module.
module.exports = AnswerCollection;