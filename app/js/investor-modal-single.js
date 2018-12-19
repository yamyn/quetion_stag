/* Investor modal */

var investorModal = document.getElementById('investorModal');
var investorModalTrigger = document.getElementById("investorModalTrigger");
var closeinvestorModal = document.getElementById("closeinvestorModal");

investorModalTrigger .onclick = function() {
	investorModal.style.display = "block";
};

closeinvestorModal.onclick = function() {
	investorModal.style.display = "none";
};

window.onclick = function(event) {
	if (event.target == investorModal) {
		investorModal.style.display = "none";
	}
}