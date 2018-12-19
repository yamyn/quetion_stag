/* Feedback modal */

var feedbackModal = document.getElementById('feedbackModal');
var feedbackModalTrigger = document.getElementById("feedbackModalTrigger");
var closefeedbackModal = document.getElementById("closefeedbackModal");

feedbackModalTrigger.onclick = function() {
	feedbackModal.style.display = "block";
}

closefeedbackModal.onclick = function() {
	feedbackModal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == feedbackModal) {
		feedbackModal.style.display = "none";
	}
}