const Joi = require('@hapi/joi')

const schema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(2)
    .max(30)
    .required()
    .error(() => {
      return {
        message: 'Invalid field name'
      }
    }),
  type: Joi.string()
    .required(),
  message: Joi.string()
    .max(200)
    .required()
})

module.exports = schema