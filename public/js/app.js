$(document).ready(function(){

	console.log("Hello!")
	
$.get('/api/tables', function(data){
	for (var i = 0; i < data.length; i++){
	var person = data[i].customerName;
	console.log(person);

	$("#tableBody").append("<tr>" + "<td>" + person + "</td>" + "</tr>");

	}

	// $(function(){
	// 	$.each(person, function(value) {
	// 		console.log(key);
	// 		var $tr = $('<tr>').append(
	// 			// $('<td>').text(key),				
	// 			$('<td>').text(value)
	// 		).appendTo('.table')
	// 	})
	// })
})

$('body').on('click', function(){
	console.log('stuff')
})

})
