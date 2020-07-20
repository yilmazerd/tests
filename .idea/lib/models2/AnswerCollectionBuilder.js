/**
 * AnswerCollectionBuilder class
 */
const AnswerCollection = require('./AnswerCollection');
class AnswerCollectionBuilder {
    constructor() {
        this.answersMap = new Map();
    }

    withAnswers(answers) {
        // we let the client build an answer collection builder with a map or with an array
        if (answers instanceof Map)
        {
            console.log('Building answercollection out of a map')
            this.answersMap = new Map([...this.answersMap, ...answers])
            return this;
        } else if (answers instanceof Array) {
            console.log('Building answercollection out of an array / object')
            let newMap = new Map();
            Object.keys(answers).forEach(answerKey => {
                newMap.set(answerKey, answers[answerKey]);
            })
            this.answersMap = new Map([...this.answersMap, ...newMap]);
            return this;
        } else {
            console.log(typeof  answers)
        throw 'Invalid answers type'
        }
    }

    withAnswer(k,v) {
        this.answersMap.set(k,v);
        return this;
    }

    getAnswers() {
        return this.answersMap;
    }

    newBuilder() {
        return new AnswerCollectionBuilder([]);
    }

    build() {
        return new AnswerCollection(this);
    }


}

module.exports = AnswerCollectionBuilder;