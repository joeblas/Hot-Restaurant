$(document).ready(function(){

	console.log("Hello!")
	
$.get('/api/tables', function(data){
	console.log(data);
})

$('body').on('click', function(){
	console.log('stuff')
})

})
