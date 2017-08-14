
const _set = require('./../quarks/quarks-namePrimeiraMaiuscula.js')
const _validate = require('./../quarks/quarks-validate-name.js')


const mongodb = require('mongoose');
module.exports = {
	type: String ,
		set:_set,
		validate:_validate,
		// required:true


}