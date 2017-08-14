const _validate = (v) => (v.length > 4) & (v.length <= 9)
const mongodb = require('mongoose');
module.exports = {
    type: String,
    validate: [_validate, " Matricula Inválida"],
    // required:true


}