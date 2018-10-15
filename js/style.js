/* GETTING STEPS */
function getSteps(){
	return document.getElementsByClassName("step");
};

function getPages() {
	return document.getElementsByClassName("page");
}

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
	console.log("triggered");
	var title = buyerAds[condition][0],
		description = buyerAds[condition][1];
		img ="img/" + buyerAds[condition][2];
	$(".ad-container h3").text(title);
	$(".ad-container p").text(description);
	$(".ad-container img").attr("src", img);
	$("#offerDescription .small").text(title);
};


/* UPDATING PRICES */
function computeBalance() {
  if (offerAdded == true) {
  	$("#offerDescription").removeClass("d-none");
    return (getCost + packagePrice + 999);
  }
  else {
    return getCost + packagePrice;
  }
};

function updatePrices() {
  var balance = computeBalance();
  var addTransFee = Math.round(balance * .105);
  var total = Math.round(balance + addTransFee);
  $("#step-3 #kidney-price").text("$" + getCost.toLocaleString());
  $("#step-3 #package-price").text("$"+packagePrice.toLocaleString());
  $("#step-3 #trans-fee").text("$" + addTransFee.toLocaleString());
  $("#step-3 #total-price").text("$" + total.toLocaleString());
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

function addAnimation() {
	$(".donor-testimonial, .buyer-testimonial, .continue-shopping").addClass("wow fadeIn animated");
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
var buyerAds = [["Express Delivery", "Speed up your processing time so you'll get your kidney ASAP!", "noun_delivery.svg", "delivery by Mello from the Noun Project"],
				["Samesung X", "Talk to your loved ones, before it's too late.", "noun_phone.svg", "Phone by i cons from the Noun Project"], //
				["TV Therapy", "Feeling down? Catch up to your favorite shows with our streaming service.", "noun_tv.svg", "play icon by andriwidodo from the Noun Project"], //depression
				["Platinum Package", "Upgrade to an exclusive suite, with all the luxury you deserve.", "noun_hotel.svg", "Hotel by Nociconist from the Noun Project"]];
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
			steps[currentStep].classList.toggle("fadeIn");
			steps[previousStep].classList.toggle("d-none");
			steps[currentStep].classList.toggle("d-none");
			$( ".prev" ).prop( "disabled", false);
			window.scrollTo(0,0);
		}

		if ($("#step-4").not("d-none")) {
			addAnimation();
		}
	})
	);

	$(".step").on("click", ".prev", (function(){
		console.log("back");

		if (previousStep >= -1) {
			steps[currentStep].classList.toggle("fadeIn");
			steps[previousStep].classList.toggle("d-none");
			steps[currentStep].classList.toggle("d-none");
			currentStep--, previousStep--, nextStep--;
			window.scrollTo(0,0);
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
			updatePrices();
		}
		else {
			$(this).text("Added");
			offerAdded = true;
			updatePrices();
		}
	});

	$(".reload").click(function() {
		location.reload()
	});

}); //doc

	$(document).on('click', '.arrow', function() { 
		console.log("clicked");
	    $('html, body').animate({
	    scrollTop: $(".arrow-down").offset().top
	    }, 1000);
	});

