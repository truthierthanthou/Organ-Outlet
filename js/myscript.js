// reference geoJson file
var sellers = {
   "type": "FeatureCollection",
   "features": [
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 78.96288,20.593684 ]
    },
    "properties": {
    "country":"India",
    "name":"Raiji",
    "cost":"750",
    "status":"available",
    "story":"I want to do more than just laundry work.",
    "fate":"I only got 750 out of the 2500 promised to me. The hospital refused to provide for my accommodation, and I had to pay for my own medication. I begged for cash for two years. I filed a complaint against the broker, but the police threatened to arrest me for agreeing to sell my kidney.",
    "source":"http://www.amazon.com/The-Red-Market-Brokers-Traffickers/dp/0061936464"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 53.688046,32.427908 ]
    },
    "properties": {
    "country":"Iran",
    "name":"Narin",
    "cost":"5500",
    "status":"available",
    "story":"Donating your kidney is an act of altruism.",
    "fate":"The doctor said that I must diet and drink much more. But I have stopped taking the pills and going to hospital. It's painful.",
    "source":"http://www.theguardian.com/society/2015/may/10/kidneys-for-sale-organ-donation-iran"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [34.5,31.3]
    },
    "properties": {
    "country":"Israel",
    "name":"Vera",
    "cost":"10000",
    "status":"available",
    "story":"I hoped to find a better life in Israel, but because of choices in my life I'm deep in debt. I want to support my daughter.",
    "fate":"My kidney hurts like a toothache that doesn't go away. I try to drink more liquids. I should never have done it. I feel powerless. Hospital care is too costly.",
    "source":"http://www.spiegel.de/international/world/the-illegal-trade-in-organ-is-fueled-by-desperation-and-growing-a-847473.html"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 35.4,30.5 ]
    },
    "properties": {
    "country":"Israel",
    "name":"Elhan",
    "cost":"20000",
    "status":"available",
    "story":"I am currently unemployed, and I think donating my kidney would improve my social standing. ",
    "fate":"I wanted to change my mind, but they had me under anesthesia and the next thing I knew my kidney was gone.",
    "source":"http://newint.org/features/2014/05/01/organ-trafficking-keynote"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 28.369885,47.411631 ]
    },
    "properties": {
    "country":"Moldova",
    "name":"\"C\"",
    "cost":"2700",
    "status":"available",
    "story":"I want to find work.",
    "fate":"I did not know that I was going to Turkey to sell a kidney. N [the recruiter] told me they were going to find us work, maybe to bake bread or to sew leather jackets. Had I known, I would not have gone for anything on earth.",
    "source":"http://newint.org/features/2014/05/01/organ-trafficking-keynote"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 69.345116,30.375321 ]
    },
    "properties": {
    "country":"Pakistan",
    "name":"Haleem",
    "cost":"1500",
    "status":"available",
    "story":"My husband's hand was severed in a work accident, and I needed to support my family.",
    "fate":"My family is still in debt, my health has worsened because I don't have access to hospitals. The money has all been spent and now I have to work all day, which is very tiring.",
    "source":"http://www.who.int/bulletin/volumes/85/1/07-020107/en/"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 121.774017,12.879721 ]
    },
    "properties": {
    "country":"Philippines",
    "name":"Bok",
    "cost":"1500",
    "status":"available",
    "story":"I want to bring my family out of poverty.",
    "fate":"My body hurts. I feel easily tired. I can't get work because I had an operation, so I'm not covered by insurance. I already spent all our money in building our house. I now work as a ferryman.",
    "source":"http://www.gmanetwork.com/news/story/121443/publicaffairs/sine-totoo-presents-kidneys-for-sale"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -95.712891,37.09024 ]
    },
    "properties": {
    "country":"United States",
    "name":"Ji Hun",
    "cost":"30000",
    "status":"available",
    "story":"I'm an immigrant from South Korea. I need money for university, and I might get deported if I drop out.",
    "fate":"It's very painful, I can't eat, urinate or defecate. I don't have medical insurance, and I already used the money for bills and tuition and remittances for my parents.",
    "source":"http://newint.org/features/2014/05/01/organ-trafficking-keynote"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 90.356331,23.684994 ]
    },
    "properties": {
    "country":"Bangladesh",
    "name":"",
    "cost":"1100",
    "status":"sold",
    "story":"",
    "fate":"",
    "source":"http://www.spiegel.de/international/world/the-illegal-trade-in-organ-is-fueled-by-desperation-and-growing-a-847473.html"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -51.92528,-14.235004 ]
    },
    "properties": {
    "country":"Brazil",
    "name":"",
    "cost":"6000",
    "status":"sold",
    "story":"",
    "fate":"",
    "source":"http://newint.org/features/2014/05/01/organ-trafficking-keynote"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 104.195397,35.86166 ]
    },
    "properties": {
    "country":"China",
    "name":"",
    "cost":"5000",
    "status":"sold",
    "story":"",
    "fate":"",
    "source":"http://newint.org/features/2014/05/01/organ-trafficking-keynote"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 30.802498,26.820553 ]
    },
    "properties": {
    "country":"Egypt",
    "name":"",
    "cost":"2000",
    "status":"sold",
    "story":"",
    "fate":"",
    "source":"http://www.huffingtonpost.com/2009/07/24/illegal-organ-trafficking_n_244686.html"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 74,18 ]
    },
    "properties": {
    "country":"India",
    "name":"",
    "cost":"1500",
    "status":"sold",
    "story":"",
    "fate":"",
    "source":"http://www.spiegel.de/international/world/the-illegal-trade-in-organ-is-fueled-by-desperation-and-growing-a-847473.html"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-75.015152,-9.189967]
    },
    "properties": {
    "country":"Peru",
    "name":"",
    "cost":"10,000",
    "status":"sold",
    "story":"",
    "fate":"",
    "source":"http://newint.org/features/2014/05/01/organ-trafficking-keynote"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 35.243322,38.963745 ]
    },
    "properties": {
    "country":"Turkey",
    "name":"",
    "cost":"7500",
    "status":"sold",
    "story":"",
    "fate":"",
    "source":"http://newint.org/features/2014/05/01/organ-trafficking-keynote"
    }
  }
]
};

// regular array of buyer fate
var buyerFates = ["You survive the operation, but you also receive an extra add-on of hepatitis B from the lack of regulation.", "Your operation was a success. Your family surrounds you at the hospital with flowers, gifts, smiles and prayers.", "The kidney you received never functioned, so you have to go back on dialysis in a weaker state than you started.", "Your body rejected the kidney... You don't survive."];

// set map
var map = L.map('map', {zoomAnimation: false}, {zoom: 10});
map.scrollWheelZoom.disable()
map.fitWorld().zoomIn();
map.on('resize', function(e) {
	map.fitWorld({reset: true}).zoomIn();
});

// set tileLayer for Leaflet
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
id: 'anicavarro.o3ib38bn',
accessToken: 'pk.eyJ1IjoiYW5pY2F2YXJybyIsImEiOiJjaWdvbHhsbngwMDZldHBrbjNlbXBhMnp2In0.Bq6WmOP5xTIrOzESzzQnfQ', 
}).addTo(map);

// set legend
var legend = L.control({position: 'topright'});

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'legend');
    div.innerHTML = "<p>Click on a person to check out their kidney.</p>" +
	"<p><i style='background:#FF9711'></i> Available</p>" + 
	"<p><i style='background:#7E725B'></i> Sold</p>";
    return div;
};

legend.addTo(map);


//icon size
var iconWidth = 21.83,
	iconHeight = 60, 
	shadowWidth = 43.785,
	shadowHeight = 26.362;


//define variables for icons
var soldIcon = L.icon({
	iconUrl: "img/sold.png",
	shadowUrl: "img/shadow.png",
	
	iconSize: [iconWidth,iconHeight],
	shadowSize: [shadowWidth, shadowHeight],
	iconAnchor: [iconWidth,iconHeight],
	shadowAnchor: [iconWidth,iconHeight/2],
	popupAnchor: [(iconWidth/2)-iconWidth,-(iconHeight)]
	
});

var availableIcon = L.icon({
	iconUrl: "img/available.png",
	shadowUrl: "img/shadow.png",
	
	iconSize: [iconWidth,iconHeight],
	shadowSize: [shadowWidth, shadowHeight],
	iconAnchor: [iconWidth,iconHeight],
	shadowAnchor: [iconWidth,iconHeight/2],
	popupAnchor: [(iconWidth/2)-iconWidth,-(iconHeight)]
	
});


//initializing the map icons
var layer = L.geoJson(sellers, {
	pointToLayer: function (feature, latlng) {
		switch (feature.properties.status) {
			case 'sold': return L.marker(latlng, {icon: soldIcon});
			case 'available': return L.marker(latlng, {icon: availableIcon});
		}
	},
	
	filter: function(feature, layer) {
		return (parseInt(feature.properties.cost) <= 1500) && (parseInt(feature.properties.cost) >= 750);
	}, //filter
	
	onEachFeature: function (feature, layer) {
		// set text here
		var availableText = "<p>$" + feature.properties.cost + "</p><p>" +
			feature.properties.name + ", " + feature.properties.country + "</p><p>" + feature.properties.story + "</p><p><button class='trigger'>Add to cart</button></p>";
		var soldText = "<p>Donor, " + feature.properties.country + "</p><p>Sold for $" + feature.properties.cost + "</p>"
		//end text
		
		//popups
		if (feature.properties.status === "sold") {
			layer.bindPopup(soldText);
		}
		else {
			layer.bindPopup(availableText);
		}	
	}
});


/* Hide all the relevant divs */
var hideAll = function() {
	$('#checkout').hide();
	$('#consequences').hide();
};
hideAll();

/* BUTTON INTERACTIONS 
=============================*/

// store clicked marker value in variable getCost
map.on('popupopen', function (e) {
	getName = (e.popup._source.feature.properties.name)
	getCost = (parseInt(e.popup._source.feature.properties.cost));
	getFate = (e.popup._source.feature.properties.fate);
	getUrl = (e.popup._source.feature.properties.source);
});

// these variables initialize the cost and fate of participants
var getCost = getCost;
var getFate = getFate;
var getUrl = getUrl;
var buyerKey = 0;
var buyerFate = buyerFates[buyerKey];

// change buyer's fate when different buyer is selected
$('input[type=radio]').change(function() {
	buyerKey = $('input:checked').val();
	buyerFate = buyerFates[buyerKey];;
});

var buyerKey = buyerKey;
var buyerFate = buyerFate;

// clicking on 'add to cart' triggers this action
$('#map').on('click', '.trigger', function() {
	$('#checkout').show();
	$("#fee").text("$" + getCost);
	//var randomTotal = Math.floor(Math.random() * (200000-100000+1) + 100000);
	var randomTotal = 150000;
	$("#total").text("$" + randomTotal);
	$("#package").text("$" + (randomTotal - getCost));
	//console.log(getCost);
	$('body').scrollTo('#checkout', {duration:'slow', offsetTop : '50'});
});

//clicking on 'go back' triggers this action
$('#back').click(function() {
	$('body').scrollTo('#budget', {duration:'slow', offsetTop : '50'});
});

//clicking on 'check out' triggers this action
$('#checkout-btn').click(function() {
	$('#consequences').show();
	$('#donor-name').text(getName + "'s Review");
	$('#donor-fate').html('"' + getFate + '" <a href=' + getUrl + ' target="_blank">More...</a>');
	$('#buyer-fate').text(buyerFate);
	$('body').scrollTo('#consequences', {duration:'slow', offsetTop : '50'});
});

//clicking on 'continue shopping' triggers this action
$('#continue').click(function() {
	hideAll();
	$('body').scrollTo('#explorer', {duration:'fast', offsetTop : '50'});
});


/* TOGGLING THE SLIDER & MAP 
================================= */
	
//turn the geoJson layer into a featureGroup
group = L.featureGroup([layer]).addTo(map);

// This is the function for creating the slider
var slider = $(function() {
	$("#slider-range").slider({
		range: true,
		min: 750, //hard-coded the values
		max: 30000, 
		values: [750, 1500],
		slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			//this is where i connect the slider with the map
			group.clearLayers();
			newlayer = L.geoJson(sellers, {
				pointToLayer: function (feature, latlng) {
					switch (feature.properties.status) {
						case 'sold': return L.marker(latlng, {icon: soldIcon});
						case 'available': return L.marker(latlng, {icon: availableIcon});
					}
				}, 
				filter: function(feature, layer) {
					return (parseInt(feature.properties.cost) <= ui.values[ 1 ]) && (parseInt(feature.properties.cost) >= ui.values[ 0 ]);
				}, //filter
				
				onEachFeature: function (feature, layer) {			
					// set text here
					var availableText = "<p>$" + feature.properties.cost + "</p><p>" +
						feature.properties.name + ", " + feature.properties.country + "</p><p>" + feature.properties.story + "</p><p><button class='trigger'>Add to cart</button></p>";
					var soldText = "<p>Donor, " + feature.properties.country + "</p><p>Sold for $" + feature.properties.cost + "</p>"
					//end text
					if (feature.properties.status === "sold") {
						layer.bindPopup(soldText);
					}
					else {
						layer.bindPopup(availableText);
					}
				}
			});//new layer
			
			group = L.featureGroup().addLayer(newlayer);
			group.addTo(map);
	
/* RELATED PRODUCTS
======================================= */	

			key = getKey(ui.values, relatedProducts, current);
			current = relatedProducts[key];
			//console.log("new current: " + current);
			
			//keys : 0: name, 1: type, 2: price, 3: description, 4: url, 5: img location
			var desc = prodDesc(key);
			
			$(".current-img").remove();
			$(".product-img").append(desc);
			
		}}); //slide and slider  
			 
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	
	// Create a function for the related product description
	var prodDesc = function(key) {
		return "<div class='current-img'><img src='img/" + relatedProducts[key][5] + "'/><h4>" + relatedProducts[key][0] + "</h4><p><b>$" + relatedProducts[key][2] + "</b></p><p>" + relatedProducts[key][3] + "</p></div>";
	}
	
	// Function for finding out if a product falls into the price range of the slider
	function getKey(values,array,current) {
		var key = 0;
		for (var i=0; i < array.length; i++) {
			var temp = array[i][2];
			if (temp > current) {
				} if ((temp <= values[1]) && (temp > values[0])) {
					current = temp;
					key = i;
				}
			}
		return key;
	};
	
	// set the initial values for the document's related products
	var key = 0;
	var current = relatedProducts[0][2];
	$(".product-img").append(prodDesc(key));
 
});//end of slider IMPT