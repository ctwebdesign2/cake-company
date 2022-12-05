/*Creates google map*/
function initMap() {
    var location = {
        lat: 53.050440,
        lng: -7.426794
    };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}