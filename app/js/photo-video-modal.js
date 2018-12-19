/* Investor modal */

var investorModal = document.getElementById('investorModal');
var investorModalTrigger1 = document.getElementById("investorModalTrigger1");
var investorModalTrigger2 = document.getElementById("investorModalTrigger2");
var investorModalTrigger3 = document.getElementById("investorModalTrigger3");
var closeinvestorModal = document.getElementById("closeinvestorModal");

investorModalTrigger1.onclick = function() {
	investorModal.style.display = "block";
}

investorModalTrigger2.onclick = function() {
	investorModal.style.display = "block";
}

investorModalTrigger3.onclick = function() {
	investorModal.style.display = "block";
}

closeinvestorModal.onclick = function() {
	investorModal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == investorModal) {
		investorModal.style.display = "none";
	}
}