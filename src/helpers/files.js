const fs = require('fs')
const path = require('path')

const getCurrentDirectoryBasePath = () => path.basename(process.cwd)
const directoryExists = filePath => fs.existsSync(filePath)

module.exports = {
  getCurrentDirectoryBasePath,
  directoryExists
}