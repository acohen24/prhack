
// ViewPR API call
window.call_view_pr = function(userPref) {
	 var outActivity = '';
	 var outCategory = '';
	 if(userPref == 'philanthropy') {
	 	outActivity = 'Nonprofit Organization';
	 } else if(userPref == 'fitness') {
	 	outCategory = 'Nature';
	 } else if(userPref == 'adventure') {
	 	outActivity = 'Attractions';
	 } else if(userPref == 'culture') {
	 	outCategory = 'Historic Sites and Landmarks';
	 }

	 // Output JSON
	 var response = '';

	 var params = {
            // Request parameters
            "name": "",
            "address": "",
            "neighborhood": "",
            "city": "",
            "latitude": "",
            "longitude": "",
            "radiusOfBuffer": "",
            "businessStatus": "1",
            "activity": outActivity,
            "category": outCategory,
            "type": "",
            "amenity": "",
            "characteristic": "",
            "lastUpdated": "",
            "Id": "",
     };

	 function httpGetAsync() {
	 	callback = function(data) {
            console.log("success");
            response = data;

            if(typeof response) {
            	// Loop array
            	var curObj;
            	var address;
            	var tA;
            	for(var el in response) {
            		curObj = response[el];
            		address = curObj.address;
            		tA = curObj.tA;
            	}
            }
        };
	    var xmlHttp = new XMLHttpRequest();
	    xmlHttp.setRequestHeader("Ocp-Apim-Subscription-Key","50e21f374f8a4c099e9decb02f1a1703");
	    xmlHttp.onreadystatechange = function() { 
	        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
	            callback(xmlHttp.responseText);
	    }
	    xmlHttp.open("GET", "https://viewpr.azure-api.net/api/venue?" + $.param(params), true); // true for asynchronous 
	    xmlHttp.send(null);
	}

	httpGetAsync();
}

window.call_view_pr('philanthropy');