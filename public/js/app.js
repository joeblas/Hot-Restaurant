$(document).ready(function(){



	console.log("Hello!")
	
$.get('/api/tables', function(data){
	for (var i = 0; i < data.length; i++){
	var person = data[i].customerName;
	console.log(person);

	$("#tableBody").append("<tr>" + "<td>" + person + "</td>" + "</tr>");

	}

	
})


	$('body').on('click', function(){
		console.log('stuff')
	})


	/* THIS HANDLES THE RESERVATION FORM AND POSTS IT TO THE ARRAY */
	$('#add-reservation').on('click',function(event){
		event.preventDefault();
		var newReservation = {
			customerName: $('#form-name').val().trim(),
			phoneNumber: $('#form-phone').val().trim(),
			customerEmail: $('#form-email').val().trim(),
			customerID: $('#form-id').val().trim()
		}
		console.log(newReservation)
		
		$.post("/api/new", newCharacter)
			.done(function(data) {
				  console.log(data);
			  alert("Adding character...");
		});
	})

	//////////////////////////////////////////////////////////////////
})
