// set map
var map = L.map('map', {zoomAnimation: false}, {zoom: 10});
map.scrollWheelZoom.disable()
map.fitWorld().zoomIn();
map.on('resize', function(e) {
	map.fitWorld({reset: true}).zoomIn();
});

// create geoJson file
var sellers = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[78.96288,20.593684]},"properties":{"country":"India","name":"Rani","cost":"750","status":"available","story":"I want to do more than just laundry work.","fate":"I only got 750 out of the 2500 promised to me. The hospital refused to provide for my accommodation, and I had to pay for my own medication. I begged for cash for two years. I filed a complaint against the broker, but the police threatened to arrest me for agreeing to sell my kidney."}},{"type":"Feature","geometry":{"type":"Point","coordinates":[53.688046,32.427908]},"properties":{"country":"Iran","name":"Narin","cost":"5500","status":"available","story":"Donating your kidney is an act of altruism.","fate":"The doctor said that I must diet and drink much more. But I have stopped taking the pills and going to hospital. It's painful."}},{"type":"Feature","geometry":{"type":"Point","coordinates":[35,31.3]},"properties":{"country":"Israel","name":"Vera","cost":"10000","status":"available","story":"I hoped to find a better life in Israel, but because of choices in my life I'm deep in debt. I want to support my daughter.","fate":"My kidney hurts like a toothache that doesn't go away. I try to drink more liquids. I sh78.96288ld never have done it. I feel powerless. Hospital care is too costly."}},{"type":"Feature","geometry":{"type":"Point","coordinates":[35,30.5]},"properties":{"country":"Israel","name":"Elhan","cost":"20000","status":"available","story":"I am currently unemployed, and I think donating my kidney would improve my social standing. ","fate":"I wanted to change my mind, but they had me under anesthesia and the next thing I knew my kidney was gone."}},{"type":"Feature","geometry":{"type":"Point","coordinates":[28.369885,47.411631]},"properties":{"country":"Moldova","name":"\"C\"","cost":"2700","status":"available","story":"I just want to find work.","fate":"I did not know that I was going to Turkey to sell a kidney. N [the recruiter] told me they were going to find us work, maybe to bake bread or to sew leather jackets. Had I known, I would not have gone for anything on earth."}},{"type":"Feature","geometry":{"type":"Point","coordinates":[69.345116,30.375321]},"properties":{"country":"Pakistan","name":"Haleem","cost":"1500","status":"available","story":"My husband's hand was severed in a work accident, and I needed to support my family.","fate":"My family is still in debt, my health has worsened because I don't have access to hospitals. The money has all been spent and now I have to work all day, which is very tiring."}},{"type":"Feature","geometry":{"type":"Point","coordinates":[121.774017,12.879721]},"properties":{"country":"Philippines","name":"Bok","cost":"1500","status":"available","story":"I want to bring my family out of poverty.","fate":"My body hurts. I feel easily tired. I can't get work because I had an operation, so I'm not covered by insurance. I already spent all our money in building our house. I now work as a ferryman."}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-95.712891,37.09024]},"properties":{"country":"United States","name":"Ji Hun","cost":"30000","status":"available","story":"I'm an immigrant from South Korea. I need money for university, and I might get deported if I drop out.","fate":"It's very painful, I can't eat, urinate or defecate. I don't have medical insurance, and I already used the money for bills and tuition and remittances for my parents."}},{"type":"Feature","geometry":{"type":"Point","coordinates":[90.356331,23.684994]},"properties":{"country":"Bangladesh","name":"","cost":"1100","status":"sold","story":"","fate":""}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-51.92528,-14.235004]},"properties":{"country":"Brazil","name":"","cost":"6000","status":"sold","story":"","fate":""}},{"type":"Feature","geometry":{"type":"Point","coordinates":[104.195397,35.86166]},"properties":{"country":"China","name":"","cost":"5000","status":"sold","story":"","fate":""}},{"type":"Feature","geometry":{"type":"Point","coordinates":[30.802498,26.820553]},"properties":{"country":"Egypt","name":"","cost":"2000","status":"sold","story":"","fate":""}},{"type":"Feature","geometry":{"type":"Point","coordinates":[74,18]},"properties":{"country":"India","name":"","cost":"1500","status":"sold","story":"","fate":""}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-75.015152,-9.189967]},"properties":{"country":"Peru","name":"","cost":"10,000","status":"sold","story":"","fate":""}},{"type":"Feature","geometry":{"type":"Point","coordinates":[35.243322,38.963745]},"properties":{"country":"Turkey","name":"","cost":"7500","status":"sold","story":"","fate":""}}]}

// set tileLayer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
id: 'anicavarro.o3ib38bn',
accessToken: 'pk.eyJ1IjoiYW5pY2F2YXJybyIsImEiOiJjaWdvbHhsbngwMDZldHBrbjNlbXBhMnp2In0.Bq6WmOP5xTIrOzESzzQnfQ', 
}).addTo(map);

//create icons


//create a geoJson layer
var layer = L.geoJson(sellers, {
	pointToLayer: function (feature, latlng) {
		switch (feature.properties.status) {
			case 'sold': return L.circleMarker(latlng, {fillColor: "gray", color: "white", weight: 1, fillOpacity: 0.8, radius: 12});
			case 'available': return L.circleMarker(latlng, {fillColor: "red", color: "white", weight: 1, fillOpacity: 0.8, radius: 12});
		}
	},
	
	filter: function(feature, layer) {
		return (parseInt(feature.properties.cost) <= 2000) && (parseInt(feature.properties.cost) >= 750);
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

// store clicked marker value in variable getCost
map.on('popupopen', function (e) {
	getCost = (e.popup._source.feature.properties.cost);
});

var getCost = getCost;

// clicking on check out triggers this action. TBA
$('#map').on('click', '.trigger', function() {
	//alert(getCost);
	//console.log(getCost);
});
	
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
					case 'sold': return L.circleMarker(latlng, {fillColor: "gray", color: "white", weight: 1, fillOpacity: 0.8, radius: 12});
					case 'available': return L.circleMarker(latlng, {fillColor: "red", color: "white", weight: 1, fillOpacity: 0.8, radius: 12});
					}//switch
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
			
			key = getKey(ui.values, relatedProducts, current);
			current = relatedProducts[key];
			//console.log("new current: " + current);
			
			prodDesc = "<div class='current-img'><p>" + relatedProducts[key][0] +  
					", $" + relatedProducts[key][2] + "</p><p>" + relatedProducts[key][3] + "</p><img src='img/" + relatedProducts[key][5] + "'/></div>";
			$(".current-img").remove();
			$(".product-img").append(prodDesc);
			
		}}); //slide and slider  
			 
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	
	//set current values
	var key = 0;
	var current = relatedProducts[0][2];
	
	//loop through array
	function getKey(values,array,current) {
		//console.log("min-max: " + values[0] + "-" + values[1]);
		//console.log("feeding " + current + " into function");
		var key = 0;
		for (var i=0; i < array.length; i++) {
			var temp = array[i][2];
			//console.log("temp number: " + temp);
			if (temp > current) {
				//console.log (temp + " is greater than " + current);
				} if ((temp <= values[1]) && (temp > values[0])) {
					//console.log(temp + "fits the criteria");
					current = temp;
					key = i;
				}
			}
		console.log("key example: " + key)
		return key;
	};
 
});//end of slider IMPT