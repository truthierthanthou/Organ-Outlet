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
    "id": 1,
    "country":"India",
    "name":"Raiji",
    "cost":750,
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
    "id": 2,
    "country":"Iran",
    "name":"Narin",
    "cost":5500,
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
    "id": 3,
    "country":"Israel",
    "name":"Vera",
    "cost":10000,
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
    "id": 4,
    "country":"Israel",
    "name":"Elhan",
    "cost":20000,
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
    "id": 5,
    "country":"Moldova",
    "name":"\"C\"",
    "cost":2700,
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
    "id": 6,
    "country":"Pakistan",
    "name":"Haleem",
    "cost":1500,
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
    "id": 7,
    "country":"Philippines",
    "name":"Bok",
    "cost":1500,
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
    "id": 8,
    "country":"United States",
    "name":"Ji Hun",
    "cost":20000,
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
    "id": 9,
    "country":"Bangladesh",
    "name":"",
    "cost":1100,
    "status":"soldout",
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
    "id": 10,
    "country":"Brazil",
    "name":"",
    "cost":6000,
    "status":"soldout",
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
    "id": 11,
    "country":"China",
    "name":"",
    "cost":5000,
    "status":"soldout",
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
    "id": 12,
    "country":"Egypt",
    "name":"",
    "cost":2000,
    "status":"soldout",
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
    "id": 13,
    "country":"India",
    "name":"",
    "cost":1500,
    "status":"soldout",
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
    "id": 14,
    "country":"Peru",
    "name":"",
    "cost":10000,
    "status":"soldout",
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
    "id": 15,
    "country":"Turkey",
    "name":"",
    "cost":7500,
    "status":"soldout",
    "story":"",
    "fate":"",
    "source":"http://newint.org/features/2014/05/01/organ-trafficking-keynote"
    }
  }
]
};


/*
function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; 
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
};

sortByKey(sellers, 'cost');
*/


// CREATE MAP
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

/* set legend
var legend = L.control({position: 'topright'});

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'legend');
    div.innerHTML = "<p>Click on a person to check out their kidney.</p>" +
  "<p><i style='background:#FF9711'></i> Available</p>" + 
  "<p><i style='background:#7E725B'></i> Sold out</p>";
    return div;
};

legend.addTo(map);

*/


//icon size
var iconWidth = 25,
  iconHeight = 60, 
  shadowWidth = 43.785,
  shadowHeight = 26.362;

//define variables for icons
var soldIcon = L.icon({
  iconUrl: "img/sold.svg",
  shadowUrl: "img/shadow.png",
  
  iconSize: [iconWidth,iconHeight],
  shadowSize: [shadowWidth, shadowHeight],
  iconAnchor: [iconWidth,iconHeight],
  shadowAnchor: [iconWidth,iconHeight/2],
  popupAnchor: [(iconWidth/2)-iconWidth,-(iconHeight)]
  
});

var availableIcon = L.icon({
  iconUrl: "img/available.svg",
  shadowUrl: "img/shadow.png", //need to change this
  
  iconSize: [iconWidth,iconHeight], //need to change this to something auto
  shadowSize: [shadowWidth, shadowHeight],
  iconAnchor: [iconWidth,iconHeight],
  shadowAnchor: [iconWidth,iconHeight/2],
  popupAnchor: [(iconWidth/2)-iconWidth,-(iconHeight)]
  
});

var status = "any",
  min = 0,
  max = 30000;

//initializing the map icons

var layer = L.geoJson(sellers, {
  pointToLayer: function (feature, latlng) {
    switch (feature.properties. status) {
      case 'soldout': return L.marker(latlng, {icon: soldIcon});
      case 'available': return L.marker(latlng, {icon: availableIcon});
    } //this creates the icons
  },
  
  filter: function(feature, layer) {
    return (parseInt(feature.properties.cost) <= max) && (parseInt(feature.properties.cost) >= min);
  }, //filter
  
  onEachFeature: function (feature, layer) {
    // set text here
    var availableText = "<span>$" + feature.properties.cost + "</span><p>" +
      feature.properties.name + ", " + feature.properties.country + "</p><p>" + feature.properties.story + "</p><button class='btn btn-primary btn-sm next trigger'>Add to cart</button>";
    var soldText = "<p>Donor, " + feature.properties.country + "</p><p>Sold for $" + feature.properties.cost + "</p>"
       
    //popups
    if (feature.properties.status == "soldout") {
      layer.bindPopup(soldText);
      //insert function for creating a sold out list item, with feature.properties.id
    }
    else {
      layer.bindPopup(availableText);
      //insert function for creating an available list item, with feature.properties.id
    }
    addtoList(layer);

  } //onEachFeature
});

/* TOGGLING THE SLIDER & MAP 
================================= */
layer.addTo(map);
var pricerange = [[0,30000],[0,1000],[1000,2000],[2000,6000],[6000,10000],[10000,30000]];


// OPTIONAL - ADD HOVER EFFECT
// CORRECT SHADOW

// CLICK EVENT - LIST ITEM
$("#list").on("click", ".listItem", function() {
  var child = $(this).find(".card-body");
  var id = parseInt(child.attr('id'));
  console.log(id);
  layer.eachLayer(function(layer) {
    if (parseInt(layer.feature.properties.id) === id) {
      layer.openPopup();
      }//if 
    }); //eachlayer
});

// CLICK EVENT - FILTERS
$("#dropdownAvailability").change(function() {
  status = $(this).val().toLowerCase();
  filter(layer, min, max, status);
});

$("#dropdownPrice").change(function() {
  price = $(this).val();
  if (price != "any") {
    min = pricerange[price][0];
    max = pricerange[price][1];
  }
  else {
    min = 0,
    max = 30000;
  }
  filter(layer, min, max, status);
});

function filter(layer, min, max, status) {  
  $('#list').empty();
  
  layer.eachLayer(function(layer) {
    var layerCost = layer.feature.properties.cost;
    var layerStatus = layer.feature.properties.status;
    var criteria1 = (status == layerStatus) || (status == "any");
    var criteria2 = (layerCost <= max) && (layerCost >= min);

    if (criteria1 && criteria2) {
      map.addLayer(layer);
      addtoList(layer);
    }

    else {
      map.removeLayer(layer);
    }

    }); //eachlayer
};


function createBadge(num) {
  if (num > .7) {
    return "<div class='badge'>Trending</div>"
  }
  else {
    return ""
  }
};

/* FUNCTION FOR CREATING LIST */
function addtoList(layer) {
    var id = layer.feature.properties.id,
      cost = layer.feature.properties.cost,
      name = layer.feature.properties.name,
      country = layer.feature.properties.country,
      badge = Math.random();

    var availableDiv = "<div class='card d-flex flex-row justify-content-start listItem'><div class='card-img-sm card-img-av'></div><div class='card-body' id='" + id + "'><p class='card-title'>" +
            name + "</p><span>$" + cost + "</span><p>" +
            country + "</p>" + createBadge(badge) + "</div></div>";

    var soldDiv = "<div class='card d-flex flex-row justify-content-start listItem' style='color: #9B9B9B'><div class='card-img-sm card-img-sold'></div><div class='card-body' id='" + id + "'><p class='card-title'>Sold out" +
        "</p>" + "<span>$" + cost + "</span><p>" +
        country + "</p></div></div>";
   
    if (layer.feature.properties.status == "soldout") {
      $('#list').append(soldDiv);
    }
    else {
      $('#list').append(availableDiv);
    }
};


/* CHECK OUT INTERACTIONS
=============================*/

// store clicked marker value in variable getCost
map.on('popupopen', function (e) {
      getName = (e.popup._source.feature.properties.name),
      getCost = (parseInt(e.popup._source.feature.properties.cost)), 
      getDonorFate = (e.popup._source.feature.properties.fate), 
      getUrl = (e.popup._source.feature.properties.source);
      getCountry = (e.popup._source.feature.properties.country);
      getStory = (e.popup._source.feature.properties.story);
});

var getName = getName, 
    getCost = getCost,
    getDonorFate = getDonorFate,
    getUrl = getUrl,
    getCountry = getCountry,
    getStory = getStory;


// clicking on 'add to cart' triggers this action
$('#map').on('click', '.trigger', function() {
  $("#in-cart .card-title").text(getName + "'s Kidney • $" + getCost);
  $("#in-cart .card-quote").text('"' + getStory + '"');
  updatePrices();
  updateDonorFate();
  updateBuyerFate();
  updateBuyerName();
});
