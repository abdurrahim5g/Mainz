		// Set the date we're counting down to
		var countDownDate = new Date("Dec 31, 2020 15:37:25").getTime();

		// Update the count down every 1 second
		var x = setInterval(function() {

		  // Get todays date and time
		  var now = new Date().getTime();

		  // Find the distance between now an the count down date
		  var distance = countDownDate - now;

		  // Time calculations for days, hours, minutes and seconds
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		  // Display the result in an element with id="demo"
		  // demo1
		  document.getElementById("day").innerHTML = days + " ";
		  // demo2
		  document.getElementById("hour").innerHTML = hours + " ";
		  // demo3
		  document.getElementById("min").innerHTML = minutes + " ";
		  // demo4
		  document.getElementById("sec").innerHTML = seconds + " ";

		  // If the count down is finished, write some text
		  if (distance < 0) {
		    clearInterval(x);
		    document.getElementById("demo").innerHTML = "EXPIRED";
		  }
		}, 1000);