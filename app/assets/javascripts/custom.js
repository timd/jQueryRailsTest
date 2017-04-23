$( document ).on('turbolinks:load', function() {

	$(".options").click( function () {

		// Using the core $.ajax() method
		$.ajax({
 
		    // The URL for the request
		    url: "/",
 
		    // The data to send (will be converted to a query string)
		    data: {
		        id: event.target.id
		    },
 
		    // Whether this is a POST or GET request
		    type: "POST",
 
		    // The type of data we expect back
		    dataType : "json",
		})
		  // Code to run if the request succeeds (is done);
		  // The response is passed to the function
		  .done( function( json ) {
			  doneFunction(json)
		  })
		  // Code to run if the request fails; the raw request and
		  // status codes are passed to the function
		  .fail(function( xhr, status, errorThrown ) {
		    alert( "Sorry, there was a problem!" );
		    console.log( "Error: " + errorThrown );
		    console.log( "Status: " + status );
		    console.dir( xhr );
		  })
		  // Code to run regardless of success or failure;
		  .always(function( xhr, status ) {
		  });
	
	 event.preventDefault();
	 
	});
 
});

function doneFunction(json) {
	
	// Remove the highlighted class from all the spans in the options div
	$("div.options").children("span").removeClass("highlighted")
	
	// construct the id of the clicked option, e.g. #1
	var id = "#" + json.clicked;
	
	// Add the highlighted class to the span
	$(id).addClass("highlighted");

}

