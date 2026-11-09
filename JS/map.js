// STEP 1: Set the starting location of the map.
// Coordinates are written as [latitude, longitude].

const startLocation = [-26.27147, 28.13356];

// STEP 2: Create the map.
// setView determines the starting location and zoom level.

const map = L.map('map').setView(startLocation, 15);

// STEP 3: Add the OpenStreetMap layer.
// This displays the actual map.

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// STEP 4: Create a marker for the NSPCA location.

const marker = L.marker(startLocation).addTo(map);

// STEP 5: Add information to the marker.
// A popup appears when the marker is clicked.

marker.bindPopup(`
    <h3>NSPCA</h3>
    <p>National Council of SPCAs</p>
    <p>6 Clark Road, Florentia, Alberton</p>
    <p>Phone: 011 907 3590</p>
`);

// STEP 6: Add the Zoom In button.
// Increase the zoom level by one.

document.getElementById('zoomIn').addEventListener('click', function() {

    map.zoomIn();

});

// STEP 7: Add the Zoom Out button.
// Decrease the zoom level by one.

document.getElementById('zoomOut').addEventListener('click', function() {

    map.zoomOut();

});

// STEP 8: Reset the map to its original position.

document.getElementById('resetMap').addEventListener('click', function() {

    map.setView(startLocation, 15);

    marker.closePopup();

});

// STEP 9: Display GPS coordinates when the map is clicked.

map.on('click', function(event) {

    // Get the latitude and longitude.

    const latitude = event.latlng.lat.toFixed(5);
    const longitude = event.latlng.lng.toFixed(5);

    // Display the coordinates on the page.

    document.getElementById('coordinates').textContent =
        'Latitude: ' + latitude +
        ' | Longitude: ' + longitude;

});

