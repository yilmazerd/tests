const AnswerCollectionBuilder = require('./AnswerCollectionBuilder');
const AnswerCollection = require('./AnswerCollection');
console.log("works ")

// Test answerCollection builder - built out of an array
let answersArray = [];
answersArray['answer1.key'] = 'answer1.value';
answersArray['answer2.key'] = 'answer2.value';

// TEST-1 Assert anser collection is built
let ac1 = new AnswerCollectionBuilder().withAnswers(answersArray).build();
console.log('test-1:')
console.log(ac1 instanceof AnswerCollection)
//console.log(ac1)

// TEST-2 Assert constructor only with AnswerCollectionBuilder
// ac = new AnswerCollection() -> throws error

// TEST-3 Assert error null answers
//let ac31 = new AnswerCollectionBuilder().withAnswers().build();
//let ac32 = new AnswerCollectionBuilder('2').withAnswers().build();

//TEST-4 Assert we can build with map
let answersMap = new Map();
answersMap.set('key.1','value.1')
answersMap.set('key.2','value.2')
answersMap.set('personInfo', {phone: "213-555-1234", address: "123 N 1st Ave"})
answersMap.set('vehicles', ['vehicle1', 'vehicle2'])
let ac41 = new AnswerCollectionBuilder().withAnswers(answersMap).build();
console.log(ac41 instanceof AnswerCollection)

//TEST-5 Assert we can build with empty array
new AnswerCollectionBuilder().withAnswers([]).build();

//TEST-6 Assert we can build with empty array
let answersMap6 = new Map();
ac61 = new AnswerCollectionBuilder().withAnswers(answersMap).withAnswer('key.1.1','value.1.1').withAnswer('key.2.1','value.2.1').build();
console.log(ac61);
console.log(ac61.size());
console.log(ac61.isEmpty());
console.log(ac61.getAnswers())

//TEST-7 test remove
ac71 = new AnswerCollectionBuilder().withAnswers(answersMap).withAnswer('key.1.1','value.1.1').withAnswer('key.2.1','value.2.1').build();
ac72 = ac71.remove('key.1')
ac73 = ac72.remove('key.2')
console.log('*********************** latest greatest')
console.log(ac73)

//Test-8 test get keys
ac81 = new AnswerCollectionBuilder().withAnswers(answersMap).withAnswer('key.1.1','value.1.1').withAnswer('key.2.1','value.2.1').build();
console.log(ac81.getKeys())
