const inquirer = require('inquirer')

const createQuestion = questionList => {

  const questions = questionList.map(question => {
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