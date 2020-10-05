       

       function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                     
    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
    map.setTilt(50);
         
    // Multiple markers location, latitude, and longitude
    var markers = [
        ['Italian And Sons, Australia', -35.274997, 149.132315],
        ['Belluci\'s Italian, Australia', -35.319613, 149.132421],
        ['Chairman & Yip, Australia', -35.311651, 149.133943],
        ['Blu Ginger, Australia', -35.277040, 149.131981],
        ['Dickson Asian Noodle House, Australia', -35.250327, 149.136426],
        ['Jewel Of India, Australia', -35.320558, 149.132836]
    ];
                         
    // Info window content
    var infoWindowContent = [
        ['<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 >Italian And Sons</h1>' +
          '<div id="bodyContent">' +
          '<div class="row">'+
          '<div class="img1"><img src="images/location/is_logo.jpg"></div>'+
          '<div class="img2"><p>A casual Italian trattoria that specialises in wood fired pizzas such as Rucola with Prosciutto di Parma, rucola & reggiano. Dont miss daily changing main dishes of the day such as their wood roast suckling pig, rosemary, garlic, baked baby fennel & mustard fruits. Australian Good Food Guide.<br><br><a href="http://italianandsons.com.au/" class="click">Click here</a> for the Italian and Sons website</p></div></div></div>'],

       ['<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          "<h1 >Belluci's Italian</h1>" +
          '<div id="bodyContent">' +
          '<div class="row">'+
          '<div class="img1"><img src="images/location/bellucis_logo.jpg"></div>'+
          '<div class="img2"><p>Belluci\'s demonstrates a new concept, a new food philosophy – the dawn of a new era in Canberra dining. Having been established more than 20 years ago, Belluci\'s fast became an iconic name in Canberra. To bring you the finest dishes, we’ve gone back to traditional Italian routes, creating simple, rustic food. Belluci\'s Italian Website.<br><br><a href="http://italianandsons.com.au/" class="click">Click here</a> for the Belluci\'s Italian website</p></div></div></div>'],

        ['<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1>Chairman & Yip</h1>' +
          '<div id="bodyContent">' +
          '<div class="row">'+
          '<div class="img1"><img src="images/location/chairman_logo.jpg"></div>'+
          '<div class="img2"><p>The Chairman & Yip has become one of Canberra’s longest standing and most highly regarded institutions, having received numerous awards over the years, offering an ever consistent and professional quality of service for corporate dining, conferences and presentations.<br><br><a href="http://italianandsons.com.au/" class="click">Click here</a> for the Chairman & Yip website</p></div></div></div>'],

        ['<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 >Blu Ginger</h1>' +
          '<div id="bodyContent">' +
          '<div class="row">'+
          '<div class="img1"><img src="images/location/bluginger_logo.jpg"></div>'+
          '<div class="img2"><p>At Blu Ginger we use only the freshest locally sourced produce, combined with authentic spices imported directly from the sub-continent, to offer classic, traditional recipes with a modern twist, creating a unique and memorable dining experience for you." Blu Ginger Website.<br><br><a href="http://italianandsons.com.au/" class="click">Click here</a> for the Blu Ginger website</p></div></div></div>'],

          ['<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1>Dickson Asian Noodle House</h1>' +
          '<div id="bodyContent">' +
          '<div class="row">'+
          '<div class="img1"><img src="images/location/noodle_logo.jpg"></div>'+
          '<div class="img2"><p>The Dickson Asian Noodle House specialises in traditional Malaysian, Thai and Lao cuisine. The dining atmosphere is casual and cosy providing for a la carte dining, banquets and take away. Vibe FM Website.<br><br><a href="http://italianandsons.com.au/" class="click">Click here</a> for the Dickson Asian Noodle House website</p></div></div></div>'],

          ['<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1>Jewel Of India</h1>' +
          '<div id="bodyContent">' +
          '<div class="row">'+
          '<div class="img1"><img src="images/location/jewel_logo.jpg"></div>'+
          '<div class="img2"><p>Finding a balance between dishes inspired by authentic recipes and creating a modern take on classic cuisine sees a loyal following of Canberra locals returning for a mouth-watering feast." Australian Good Food Guide Website.<br><br><a href="http://italianandsons.com.au/" class="click">Click here</a> for the Jewel Of India website</p></div></div></div>'],
    ];
         
    // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent,
      
    }), marker, i;
     
    // Place each marker on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
         
        // Add info window to marker    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));
 
        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
    }
 
    // Set zoom level
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(13);
        google.maps.event.removeListener(boundsListener);
    });
     
}
// Load initialize function
google.maps.event.addDomListener(window, 'load', initMap);


function gotoSlide(number){
   $(".carousel").carousel(number);
}

