class AnswerCollectionBuilder {
  let answers;
  constructor() {}
  withAnswers(answers) {
    this.answers = answers
    return this
  }

  build() {
  return new AnswerCollection(answers);
  }
}


//const leon = new FrogBuilder('Leon', 'male')
//  .setWeight(14)
//  .setHeight(3.7)
//  .build()
