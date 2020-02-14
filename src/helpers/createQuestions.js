const inquirer = require('inquirer')
const schema = require('./validateInputs')

const createQuestion = questionList => {

  const questions = questionList.map(question => {
    const { error } = schema.validate(question)

    if (error) {
      return error
    }

    return {
      name: question.name,
      type: question.type,
      message: question.message,
      validate: value => value.length ? true : 'Invalid input'
    }
  })

  return inquirer.prompt(questions)
}

module.exports = createQuestion