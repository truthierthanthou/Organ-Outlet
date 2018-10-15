/* GETTING STEPS */
function getSteps(){
	return document.getElementsByClassName("step");
};

function resetPrev() {
	if (currentStep == 0) {
		$(".prev").prop( "disabled", true);
	}	
};

//validation
function validateName() {
	return ($("#userName").val().length !== 0) 
};

function validateCondition() {
	return (condition.length !== 0)
};

/* CREATING ADS */
function createAd(condition, buyerAds) {
	//$("#ads").empty();
	var title = buyerAds[condition][0],
		description = buyerAds[condition][1];
	$("#ads h4").text(title);
	$("#ads p").text(description);
};


/* UPDATING PRICES */
function computeBalance() {
  if (offerAdded == true) {
  	$("#offerDescription").toggleClass("d-none");
    return (getCost + packagePrice + 999);
  }
  else {
    return getCost + packagePrice;
  }
};

function updatePrices() {
  var balance = computeBalance();
  var addTransFee = balance * .105;
  var total = balance + addTransFee;
  $("#step-3 #kidney-price").text("$" + getCost);
  $("#step-3 #package-price").text("$"+packagePrice);
  $("#step-3 #trans-fee").text("$" + addTransFee);
  $("#step-3 #total-price").text("$" + total);
};


/* FUNCTION FOR UPDATING TESTIMONIALS */

function updateBuyerName() {
	$("#buyerName").text(userName);
};

function updateDonorFate() {
  $('.donor-fate').text(getDonorFate);
  $('.donor-name').text("-" + getName + ", Kidney Donor");
  $('.donor-testimonial a').attr('href', getUrl);
};

function updateBuyerFate() {
  $('.buyer-fate').text(getBuyerFate(condition, buyerFates));
};

function getBuyerFate(condition, buyerFates) {
	return buyerFates[condition];
};


// initialize all the steps
var steps = getSteps();
var totalSteps = steps.length;
var currentStep = 0;
var	previousStep = -1;
var nextStep = 1;


// initialize all buyer information
var userName = "EPIC Participant";
// var buyerReasons = ["critical", "cost", "depression", "convenience"];
var buyerAds = [["Express Delivery", "Speed up your processing time to get your kidney ASAP"], 
				["Party Basket", "Make the most out of your old kidney before your big day"], 
				["Virtual Therapy", "Feel better by chatting with our on-call therapists"], 
				["Premium Package",	"Upgrade to an exclusive suite, with all the luxury you deserve"]]
var offerAdded = false;
var buyerFates = ["Your operation was a success. Your family surrounds you at the hospital with flowers, gifts, smiles and prayers.", 
	"The kidney you received never functioned, so you have to go back on dialysis in a weaker state than you started.", 
	"Your body rejected the kidney. You don't survive.", 
	"You survive the operation, but you receive an add-on of hepatitis B. Looks like the screening process wasn't so strict."];
var condition = 0;
var buttonText = "";
var packagePrice = 150000;

//hide all steps, except the first element
$(document).ready(function() {
//initialize
	// set opacity of all items to 0
	//$(".step").hide();
	$(".step").addClass("d-none");
	resetPrev();
	steps[currentStep].classList.toggle("d-none");	
	// set opacity of this item to 1

/* NAVIGATION PROMPTS */

	$(".step").on("click", ".next", (function(){

		if ((steps.length >= nextStep + 1)) {
			currentStep++, previousStep++, nextStep++;
			steps[previousStep].classList.toggle("d-none");
			//set opacity to 1
			steps[currentStep].classList.toggle("d-none");
			//set opacity to 0, tho maybe redundant
			$( ".prev" ).prop( "disabled", false);
		}
	})
	);

	$(".step").on("click", ".prev", (function(){
		console.log("back");

		if (previousStep >= -1) {
			steps[previousStep].classList.toggle("d-none");
			// set opacity to 1
			steps[currentStep].classList.toggle("d-none");
			// set opacity to 0
			currentStep--, previousStep--, nextStep--;
		}
		resetPrev();
	})
	);

$("#userName").change(function() {
	userName = $(this).val();
	console.log("Name change");

	/*
	if (validateName()) {
		$("#step-1-input .next").prop( "disabled", false);

	}
	else {
		$("#step-1-input .next").prop( "disabled", true);
	}
	*/
});
 
/* GET USER DATA */

$("#step-1-reason .card").click(function(){
	condition = $(this).attr("id");
	condition = parseInt((condition.split("-"))[1]) - 1;
	console.log(condition);
	$("#step-1-reason .card").removeClass("active");
	$(this).addClass("active");
	if (validateCondition()) {
		$("#step-1-reason .next").prop( "disabled", false);
	}
	createAd(condition,buyerAds);
});

$("#step-2-map .card").click(function() {
	$("#step-2-map .card").removeClass("active");
	$(this).addClass("active");
});

$("#ads button").click(function() {
	buttonText = $(this).text();
	if (buttonText == "Added") {
		$(this).text("Add");
		offerAdded = false;
	}
	else {
		$(this).text("Added");
		offerAdded = true;
	}
});

$(".reload").click(function() {
	location.reload()
});


}); //doc

