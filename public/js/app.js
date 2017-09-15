$(document).ready(function(){

		console.log("Hello!")
		
	$.get('/api/tables', function(data){
		console.log(data);
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
