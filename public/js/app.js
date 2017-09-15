$(document).on("ready", function(){

	console.log('test');
$.get('/api/tables', function(data){
	console.log(data);
})

})