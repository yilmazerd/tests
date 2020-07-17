const AnswerCollection = require('../models/AnswerCollection');
let answers = [];
answers['l'] = 'k';
let a = new AnswerCollection(answers);
console.log(a.isValid());
console.log(a.getAnswers());
console.log(a.getAnswers());
let a2 = new AnswerCollection(answers);
let a3 = a2.filter()
console.log(a3)
let a44 = new AnswerCollection([]);
console.log(a.size())