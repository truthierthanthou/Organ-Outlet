	// run code
	current = setCurrent(ui.values, relatedProducts, current);
	console.log("new current: " + current);
	//$(".product-img").append("<img\>");
	
	
	//set current value
	var current = relatedProducts[1][2];
	
	//loop through array
	function setCurrent(values,array,current) {
		console.log("min-max: " + values[0] + "-" + values[1]);
		console.log("feeding " + current + " into function");
		for (var i=0; i < array.length; i++) {
			var temp = array[i][2];
			console.log("temp number: " + temp);
			if (temp > current) {
				console.log (temp + " is greater than " + current);
				} if ((temp <= values[1]) && (temp > values[0])) {
					console.log(temp + "fits the criteria");
					current = temp;
				}
			}
		return current;
	};
