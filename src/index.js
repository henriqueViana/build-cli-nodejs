const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')

const files = require('./helpers/files')
const createQuestion = require('./helpers/createQuestions')

clear()

console.log(
  chalk.yellow(
    figlet.textSync('NodeJS CLI', { horizontalLayout: 'full'})
  )
)

if (files.directoryExists('.git')) {
  console.log(
    chalk.red('A Git repository !!!')
  )
}

createQuestion(
  [
    {
      name: 'username',
      type: 'input',
      message: 'Enter your login'
    },
    {
      name: 'password',
      type: 'password',
      message: 'Enter your password'
    }
  ]
)
