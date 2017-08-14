'use strict'
module.exports=(Actions)=>{ 
	const Router = [  
	{
		method:'get',
		path:'/listar',
		action:Actions.listar
	},
	{
		method:'get',
		path:'/buscar',
		action:Actions.buscar
	},
	{
		method:'post',
		path:'/save',
		action:Actions.save
	},
	{
		method:'put',
		path:'/update',
		action:Actions.update
	},
	{
		method:'post',
		path:'/remove',
		action:Actions.remove
	}
	]
	return Router
}