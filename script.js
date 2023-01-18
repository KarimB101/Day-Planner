// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// console.dir(window); 
	// TODO: Add a listener for click events on the save button. This code should
	// use the id in the containing time-block as a key to save the user input in
	// local storage. HINT: What does `this` reference in the click listener
	// function? How can DOM traversal be used to get the "hour-x" id of the
	// time-block containing the button that was clicked? How might the id be
	// useful when saving the description in local storage?

var saveBtn = $(".saveBtn")
var text = $("textarea")
// attach function to save button when clicked to save text
	saveBtn.on('click', function(){
		console.log($(this)) //this appears to attach itself to button element...
		// this variable grabs all the siblings/like elements with the description class 
		var textValue = $(this).siblings('.description').val()
		console.log(textValue)
		// this variable selects the parent element of this with corresponding id 
		var textTime = $(this).parent().attr("id")
		console.log(textTime)
		localStorage.setItem(textTime, textValue)
	})
// stores the values saved in textarea to local storage
$("#hour-8am .description").val(localStorage.getItem("hour-8am"))
$("#hour-9am .description").val(localStorage.getItem("hour-9am"))
$("#hour-10am .description").val(localStorage.getItem("hour-10am"))
$("#hour-11am .description").val(localStorage.getItem("hour-11am"))
$("#hour-12pm .description").val(localStorage.getItem("hour-12pm"))
$("#hour-1pm .description").val(localStorage.getItem("hour-1pm"))
$("#hour-2pm .description").val(localStorage.getItem("hour-2pm"))
$("#hour-3pm .description").val(localStorage.getItem("hour-3pm"))
$("#hour-4pm .description").val(localStorage.getItem("hour-4pm"))
$("#hour-5pm .description").val(localStorage.getItem("hour-5pm"))
	
	// TODO: Add code to apply the past, present, or future class to each time
	// block by comparing the id to the current hour. HINTS: How can the id
	// attribute of each time-block be used to conditionally add or remove the
	// past, present, and future classes? How can Day.js be used to get the
	// current hour in 24-hour time?
	var currentTime = dayjs().format('h')
	var textTime = $(this).parent().attr("id")
	var hour = $(this).parent().attr('.class')
	
	
	var schTime = document.querySelectorAll("textarea")
	for (var i = 0; i < schTime.length; i++){
		if (schTime[i].dataset.hour < currentTime) {
		
			console.log(currentTime)
		schTime[i].setAttribute('class', 'past')
	}
			// console.log(typeof schTime[i].dataset.hour)
		}
		
	// TODO: Add code to get any user input that was saved in localStorage and set
	// the values of the corresponding textarea elements. HINT: How can the id
	// attribute of each time-block be used to do this?
	//
	// TODO: Add code to display the current date in the header of the page.
	var displayTime = dayjs().format('MMM D, YYYY, hh:mm:ss a' )
	$('#currentDay').text(displayTime)
// });
// console.log(saveBtn)
// console.log(text)
