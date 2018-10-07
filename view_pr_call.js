
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

	 $(function() {
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
      
        $.ajax({
            url: "https://viewpr.azure-api.net/api/venue?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","50e21f374f8a4c099e9decb02f1a1703");
            },
            type: "GET",
            // Request body
            data: "",
        })
        .done(function(data) {
            console.log("success");
            response = data;

            if(typeof response) {
            	// Loop array
            	var curObj;
            	var address;
            	var tA;
            	for(var el in response) {
            		curObj = response[el];
            		
            	}
            }
        })
        .fail(function() {
            console.log("error");
        });
    });

	

}



// Modal Window



// For Head - include jQuery and modals
<!-- Remember to include jQuery :) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>

<!-- jQuery Modal -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />