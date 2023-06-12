import isEmail from "validator/lib/isEmail"

const validator = require("validator")
console.log(validator.isEmail("john"))

if(module.hot)
{
  module.hot.accept()
}