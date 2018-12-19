/* Scroll top button */

$(function() {
	var scrollTop = $("#scrollTop");
	$(scrollTop).click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
});

/* Scroll bottom button */

$(function() {
	var scrollBottom = $("#scrollBottom");
	$(scrollBottom).click(function() {
		$('html, body').animate({
			scrollTop: $("#scrollToBlock").offset().top
		}, 700);
	});
});


$(function() {
	var scrollBottom1 = $("#third");
	$(scrollBottom1).click(function() {
		$('html, body').animate({
			scrollTop: $("#scrollToBlock1").offset().top
		}, 700);
	});
});

/* Add blue-border to active faq accordion item */

(function() {
	$(".card").on("show.bs.collapse hide.bs.collapse", function(e) {
		if (e.type=='show') {
			$(this).addClass('blue-card');
		} else {
			$(this).removeClass('blue-card');
		}
	});  
}).call(this);

const lineEq = (y2, y1, x2, x1, currentVal) => {
    var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
    return m * currentVal + b;
};
const distanceThreshold = {min: 0, max: 100};
const grayscaleInterval = {from: 1, to: 0};
const borderInterval = {from: 0.1, to: 1};
const graphicInterval = {from: 60, to: 0};
const textInterval = {from: 0, to: -20};


/* Monthly calculator */

$(document).ready( function () {
	
	var resultMonth, resultYear;
	var calculator = $('.monthly-calculator');
	var calculatorRange = calculator.find('.monthly-calculator-range');
	var calculatorForecastMonth = calculator.find('.monthly-calculator-forecast-month');
	var calculatorResultMonth = calculator.find('.monthly-calculator-result-month');
	var calculatorResultYear = calculator.find('.monthly-calculator-result-year');
	var amountVal = calculator.find('.monthly-calculator-amount-val');

	$(window).on('DOMContentLoaded', function () {
		amountVal.val(calculatorRange.val());
		if(calculatorRange.val() >= 10 && calculatorRange.val() <= 499) {
			resultMonth = calculatorRange.val() * 0.16;
			calculatorForecastMonth.text('16%');
		}
		if(calculatorRange.val() >= 500 && calculatorRange.val() <= 1499) {
			resultMonth = calculatorRange.val() * 0.17;
			calculatorForecastMonth.text('17%');
		}
		if(calculatorRange.val() >= 1500 && calculatorRange.val() <= 4999) {
			resultMonth = calculatorRange.val() * 0.18;
			calculatorForecastMonth.text('18%');
		}
		if(calculatorRange.val() >= 5000 && calculatorRange.val() <= 9999) {
			resultMonth = calculatorRange.val() * 0.19;
			calculatorForecastMonth.text('19%');
		}
		if(calculatorRange.val() >= 10000 && calculatorRange.val() <= 19999) {
			resultMonth = calculatorRange.val() * 0.20;
			calculatorForecastMonth.text('20%');
		}
		if(calculatorRange.val() >= 20000 && calculatorRange.val() <= 50000) {
			resultMonth = calculatorRange.val() * 0.21;
			calculatorForecastMonth.text('21%');
		}
		resultYear = calculatorRange.val() * 1.25;
		calculatorResultMonth.text(resultMonth.toFixed(0) + ' $');
		calculatorResultYear.text(resultYear.toFixed(0) + ' $');
	});
	
	calculatorRange.on('change', function() {
		amountVal.val(calculatorRange.val());
		calculatorRange.val(amountVal.val());
		if(calculatorRange.val() >= 10 && calculatorRange.val() <= 499) {
			resultMonth = calculatorRange.val() * 0.16;
			calculatorForecastMonth.text('16%');
		}
		if(calculatorRange.val() >= 500 && calculatorRange.val() <= 1499) {
			resultMonth = calculatorRange.val() * 0.17;
			calculatorForecastMonth.text('17%');
		}
		if(calculatorRange.val() >= 1500 && calculatorRange.val() <= 4999) {
			resultMonth = calculatorRange.val() * 0.18;
			calculatorForecastMonth.text('18%');
		}
		if(calculatorRange.val() >= 5000 && calculatorRange.val() <= 9999) {
			resultMonth = calculatorRange.val() * 0.19;
			calculatorForecastMonth.text('19%');
		}
		if(calculatorRange.val() >= 10000 && calculatorRange.val() <= 19999) {
			resultMonth = calculatorRange.val() * 0.20;
			calculatorForecastMonth.text('20%');
		}
		if(calculatorRange.val() >= 20000 && calculatorRange.val() <= 50000) {
			resultMonth = calculatorRange.val() * 0.21;
			calculatorForecastMonth.text('21%');
		}
		resultYear = calculatorRange.val() * 1.25;
		calculatorResultMonth.text(resultMonth.toFixed(0) + ' $');
		calculatorResultYear.text(resultYear.toFixed(0) + ' $');
	});
	
	amountVal.on('change', function () {
		amountVal.val(calculatorRange.val());
		calculatorRange.val(amountVal.val());
		if(calculatorRange.val() >= 10 && calculatorRange.val() <= 499) {
			resultMonth = calculatorRange.val() * 0.16;
			calculatorForecastMonth.text('16%');
		}
		if(calculatorRange.val() >= 500 && calculatorRange.val() <= 1499) {
			resultMonth = calculatorRange.val() * 0.17;
			calculatorForecastMonth.text('17%');
		}
		if(calculatorRange.val() >= 1500 && calculatorRange.val() <= 4999) {
			resultMonth = calculatorRange.val() * 0.18;
			calculatorForecastMonth.text('18%');
		}
		if(calculatorRange.val() >= 5000 && calculatorRange.val() <= 9999) {
			resultMonth = calculatorRange.val() * 0.19;
			calculatorForecastMonth.text('19%');
		}
		if(calculatorRange.val() >= 10000 && calculatorRange.val() <= 19999) {
			resultMonth = calculatorRange.val() * 0.20;
			calculatorForecastMonth.text('20%');
		}
		if(calculatorRange.val() >= 20000 && calculatorRange.val() <= 50000) {
			resultMonth = calculatorRange.val() * 0.21;
			calculatorForecastMonth.text('21%');
		}
		resultYear = calculatorRange.val() * 1.25;
		calculatorResultMonth.text(resultMonth.toFixed(0) + ' $');
		calculatorResultYear.text(resultYear.toFixed(0) + ' $');
	});

});

/* Daily calculator */

$(document).ready( function () {
	
	var resultMonthD, resultDayD;
	var dailyCalculator = $('.daily-calculator');
	var dailyCalculatorRange = dailyCalculator.find('.daily-calculator-range');
	var dailyCalculatorResultDay = dailyCalculator.find('.daily-calculator-result-day');
	var dailyCalculatorResultMonth = dailyCalculator.find('.daily-calculator-result-month');
	var dailyCalculatorAmountVal = dailyCalculator.find('.daily-calculator-amount-val');

	$(window).on('DOMContentLoaded', function() {
		dailyCalculatorAmountVal.val(dailyCalculatorRange.val());
		resultDayD = (dailyCalculatorRange.val() * 0.08) / 31.5;
		resultMonthD = dailyCalculatorRange.val() * 0.16;
		dailyCalculatorResultDay.text(resultDayD.toFixed(2) + ' $');
		dailyCalculatorResultMonth.text(resultMonthD.toFixed(0) + ' $');
	});
	
	dailyCalculatorRange.on('change', function() {
		dailyCalculatorAmountVal.val(dailyCalculatorRange.val());
		dailyCalculatorRange.val(dailyCalculatorAmountVal.val());
		resultDayD = (dailyCalculatorRange.val() * 0.08) / 31.5;
		resultMonthD = dailyCalculatorRange.val() * 0.16;
		dailyCalculatorResultDay.text(resultDayD.toFixed(2)  + ' $');
		dailyCalculatorResultMonth.text(resultMonthD.toFixed(0) + ' $');
	});
	
	dailyCalculatorAmountVal.on('change', function() {
		dailyCalculatorAmountVal.val(dailyCalculatorRange.val());
		dailyCalculatorRange.val(dailyCalculatorAmountVal.val());
		resultDayD = (dailyCalculatorRange.val() * 0.08) / 31.5;
		resultMonthD = dailyCalculatorRange.val() * 0.16;
		dailyCalculatorResultDay.text(resultDayD.toFixed(2) + ' $');
		dailyCalculatorResultMonth.text(resultMonthD.toFixed(0) + ' $');
	});

});

function openMobileMenu() {
	document.getElementById("mobile-menu").style.height = "100%";
	$("#hamburger").css('display', 'none');
}

function closeMobileMenu() {
	document.getElementById("mobile-menu").style.height = "0%";
	$("#hamburger").css('display', 'flex');
}