const _get = (v) => v.toUpperCase();
const _set = (v) => v.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
const _validate = (v)=> (v.length > 4) & (v.length<=25)


const mongodb = require('mongoose');
module.exports = {
	type: String ,
		set:_set,
		validate:[_validate," Atencao tamanho invalido siga o modelo => 25 > Nome  > 4"],
		// required:true


}