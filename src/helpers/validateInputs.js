const Joi = require('@hapi/joi')

const schema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(2)
    .max(30)
    .required(),
  type: Joi.string()
    .valid(['input', 'password'])
    .required(),
  message: Joi.string()
    .max(200)
    .required()
})