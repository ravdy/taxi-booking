(function ($) {
    "use strict";

    $(function () {

        // Phone trigger on small device
        // -----------------------------------------------------------------
        var phone = $(".phones");
        $("#phone-trigger").on("click", function () {
            phone.slideToggle(300);
            return false;
        });

        // Nav trigger on small device
        // -----------------------------------------------------------------
        var mainNav = $(".main-nav");
        $("#nav-trigger").on("click", function () {
            mainNav.slideToggle(300);
            return false;
        });

        // Mobile subnav
        // -----------------------------------------------------------------

        $('.main-nav ul li:has(> ul)', '#nav-bar').addClass('parent');

        $('.main-nav ul li.parent a', '#nav-bar').append("<span></span>");

        $('.main-nav ul li.parent a span', '#nav-bar').on("click", function () {
            $(this).parent().parent().find("> ul").slideToggle(300);
            $(this).toggleClass("rotate");
        });

        // Slider owlCarousel
        // -----------------------------------------------------------------

        $(".slider").owlCarousel({
            loop: true,
            items: 1,
            dots: false,
            nav: true,
            smartSpeed: 1000,
            navText: [
                "<i class='ion-ios-arrow-left'></i>",
                "<i class='ion-ios-arrow-right'></i>"
            ]
        });

        // Testimonials carousel owlCarousel
        // -----------------------------------------------------------------

        $(".testimonials .owl-carousel").owlCarousel({
            loop: true,
            items: 1,
            dots: true,
            nav: false
        });

        // Date & time picker
        // -----------------------------------------------------------------

        $('.datepicker').pickadate({
            firstDay: 1,
            min: true
        });

        $('.timepicker').pickatime({
            interval: 15,
            format: 'H:i',
            formatLabel: '<b>H</b>:i'
        });

        // Garage map
        // -----------------------------------------------------------------


        $("#garage-map").UberGoogleMaps({"positionType": "manual", "lat": "40.71014533022524", "lng": "286.0137693347931", "zoom": "16", "width": 640, "height": 500, "responsive": 1, "searchQuery": "", "language": "en", "markers": [{"id": "40.71052395170071_-73.98746967315674", "lat": 40.71052395170071, "lng": -73.98746967315674, "icon": "custom", "icon_url": "http://www.coffeecreamthemes.com/themes/taxigrabber/html/images/map-marker.png", "title": "Taxi Grabber Garage"}], "infoWindows": [{"id": 73453, "marker_id": "40.71052395170071_-73.98746967315674", "title": "Taxi Grabber", "subtitle": "Garage", "phone": "+1 800 123 4567", "address": "123 South St.", "email": "", "web": "", "content": "", "open": 0}], "showInfoWindowsOn": "click", "animateMarkers": 1, "style_type": "preset", "style_index": 99, "style_array_custom": "[]", "auto_sign_in": 1, "fullscreen_enabled": 1, "disable_scroll": 1, "load_api": 1, "style_array": [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"saturation": "-100"}, {"lightness": "-30"}]}, {"featureType": "administrative.land_parcel", "elementType": "geometry.stroke", "stylers": [{"lightness": "0"}, {"saturation": "-100"}, {"gamma": "1.00"}]}, {"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"color": "#f2f2f2"}]}, {"featureType": "landscape.man_made", "elementType": "geometry.stroke", "stylers": [{"lightness": "-4"}]}, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "poi", "elementType": "geometry.fill", "stylers": [{"saturation": "-100"}, {"lightness": "0"}, {"gamma": "1.00"}]}, {"featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{"visibility": "on"}, {"weight": "1"}, {"saturation": "-80"}, {"lightness": "17"}, {"gamma": "1.2"}]}, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100}, {"lightness": 45}]}, {"featureType": "road", "elementType": "geometry.fill", "stylers": [{"lightness": "9"}]}, {"featureType": "road", "elementType": "geometry.stroke", "stylers": [{"lightness": "0"}, {"gamma": "1"}]}, {"featureType": "road", "elementType": "labels.text.fill", "stylers": [{"lightness": "-43"}]}, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"}]}, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "transit", "elementType": "labels.text.fill", "stylers": [{"saturation": "-90"}]}, {"featureType": "transit.line", "elementType": "geometry", "stylers": [{"hue": "#52ff00"}, {"lightness": "-50"}, {"gamma": "1.00"}]}, {"featureType": "transit.station.airport", "elementType": "geometry", "stylers": [{"saturation": "-77"}, {"gamma": "1.79"}, {"lightness": "23"}]}, {"featureType": "transit.station.bus", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "transit.station.rail", "elementType": "all", "stylers": [{"hue": "#ff7e00"}]}, {"featureType": "transit.station.rail", "elementType": "labels.text.fill", "stylers": [{"weight": "1.00"}, {"gamma": "1.00"}, {"lightness": "0"}, {"saturation": "0"}]}, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#ccd7dc"}, {"visibility": "on"}]}, {"featureType": "water", "elementType": "geometry.fill", "stylers": [{"visibility": "on"}, {"lightness": "-20"}, {"saturation": "-90"}, {"gamma": "1.00"}]}, {"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"lightness": "-39"}, {"saturation": "-100"}]}, {"featureType": "water", "elementType": "labels.text.stroke", "stylers": [{"lightness": "55"}]}], "title": "Garage map", "shortcode": ""});


        // Locations map
        // -----------------------------------------------------------------


        $("#locations-map").UberGoogleMaps({"positionType": "manual", "lat": "40.73304296255392", "lng": "-73.95601826286315", "zoom": "12", "width": 640, "height": 700, "responsive": 1, "searchQuery": "", "language": "en", "markers": [{"id": "40.71052395170071_-73.98746967315674", "lat": 40.71052395170071, "lng": -73.98746967315674, "icon": "custom", "icon_url": "http://www.coffeecreamthemes.com/themes/taxigrabber/html/images/map-marker.png", "title": "1"}, {"id": "40.7717018705776_-73.95790100097656", "lat": 40.7717018705776, "lng": -73.95790100097656, "icon": "custom", "icon_url": "http://www.coffeecreamthemes.com/themes/taxigrabber/html/images/map-marker.png", "title": "2"}, {"id": "40.773261878622634_-74.0317153930664", "lat": 40.773261878622634, "lng": -74.0317153930664, "icon": "custom", "icon_url": "http://www.coffeecreamthemes.com/themes/taxigrabber/html/images/map-marker.png", "title": "3"}, {"id": "40.74049401829621_-74.04338836669922", "lat": 40.74049401829621, "lng": -74.04338836669922, "icon": "custom", "icon_url": "http://www.coffeecreamthemes.com/themes/taxigrabber/html/images/map-marker.png", "title": "4"}, {"id": "40.767541670057234_-73.91841888427734", "lat": 40.767541670057234, "lng": -73.91841888427734, "icon": "custom", "icon_url": "http://www.coffeecreamthemes.com/themes/taxigrabber/html/images/map-marker.png", "title": "5"}, {"id": "40.74725696280421_-73.93901824951172", "lat": 40.74725696280421, "lng": -73.93901824951172, "icon": "custom", "icon_url": "http://www.coffeecreamthemes.com/themes/taxigrabber/html/images/map-marker.png", "title": "6"}, {"id": "40.68037766429694_-73.948974609375", "lat": 40.68037766429694, "lng": -73.948974609375, "icon": "custom", "icon_url": "http://www.coffeecreamthemes.com/themes/taxigrabber/html/images/map-marker.png", "title": "7"}, {"id": "40.73268976628568_-74.168701171875", "lat": 40.73268976628568, "lng": -74.168701171875, "icon": "custom", "icon_url": "http://www.coffeecreamthemes.com/themes/taxigrabber/html/images/map-marker.png", "title": "8"}, {"id": "40.72566515672145_-73.80237579345703", "lat": 40.72566515672145, "lng": -73.80237579345703, "icon": "custom", "icon_url": "http://www.coffeecreamthemes.com/themes/taxigrabber/html/images/map-marker.png", "title": "9"}, {"id": "40.74985791219438_-73.87481689453125", "lat": 40.74985791219438, "lng": -73.87481689453125, "icon": "custom", "icon_url": "http://www.coffeecreamthemes.com/themes/taxigrabber/html/images/map-marker.png", "title": "10"}, {"id": "40.71916022743469_-74.08287048339844", "lat": 40.71916022743469, "lng": -74.08287048339844, "icon": "custom", "icon_url": "http://www.coffeecreamthemes.com/themes/taxigrabber/html/images/map-marker.png", "title": "11"}], "infoWindows": [{"id": 14312, "marker_id": "40.773261878622634_-74.0317153930664", "title": "Taxi Grabber", "subtitle": "West New York", "phone": "+1 800 123 4567", "address": "123 Fake Address", "email": "", "web": "", "content": "", "open": 0}, {"id": 16445, "marker_id": "40.74049401829621_-74.04338836669922", "title": "Taxi Grabber", "subtitle": "Hoboken", "phone": "+1 800 123 4567", "address": "123 Fake Address", "email": "", "web": "", "content": "", "open": 0}, {"id": 19811, "marker_id": "40.72566515672145_-73.80237579345703", "title": "Taxi Grabber", "subtitle": "Queens", "phone": "+1 800 123 4567", "address": "123 Fake Address", "email": "", "web": "", "content": "", "open": 0}, {"id": 21467, "marker_id": "40.767541670057234_-73.91841888427734", "title": "Taxi Grabber", "subtitle": "Astoria", "phone": "+1 800 123 4567", "address": "123 Fake Address", "email": "", "web": "", "content": "", "open": 0}, {"id": 22961, "marker_id": "40.68037766429694_-73.948974609375", "title": "Taxi Grabber", "subtitle": "Brooklyn", "phone": "+1 800 123 4567", "address": "123 Fake Address", "email": "", "web": "", "content": "", "open": 0}, {"id": 44151, "marker_id": "40.74725696280421_-73.93901824951172", "title": "Taxi Grabber", "subtitle": "Long Island City", "phone": "+1 800 123 4567", "address": "123 Fake Address", "email": "", "web": "", "content": "", "open": 0}, {"id": 50510, "marker_id": "40.71916022743469_-74.08287048339844", "title": "Taxi Grabber", "subtitle": "Jersey City", "phone": "+1 800 123 4567", "address": "123 Fake Address", "email": "", "web": "", "content": "", "open": 0}, {"id": 73453, "marker_id": "40.71052395170071_-73.98746967315674", "title": "Taxi Grabber", "subtitle": "Lower Manhattan", "phone": "+1 800 123 4567", "address": "123 Fake Address", "email": "", "web": "", "content": "", "open": 0}, {"id": 84389, "marker_id": "40.74985791219438_-73.87481689453125", "title": "Taxi Grabber", "subtitle": "Jackson Heights", "phone": "+1 800 123 4567", "address": "123 Fake Address", "email": "", "web": "", "content": "", "open": 0}, {"id": 85943, "marker_id": "40.7717018705776_-73.95790100097656", "title": "Taxi Grabber", "subtitle": "Upper East Side", "phone": "+1 800 123 4567", "address": "123 Fake Address", "email": "", "web": "", "content": "", "open": 0}, {"id": 96295, "marker_id": "40.73268976628568_-74.168701171875", "title": "Taxi Grabber", "subtitle": "Newark", "phone": "+1 800 123 4567", "address": "123 Fake Address", "email": "", "web": "", "content": "", "open": 0}], "showInfoWindowsOn": "click", "animateMarkers": 1, "style_type": "preset", "style_index": 99, "style_array_custom": "[]", "auto_sign_in": 1, "fullscreen_enabled": 1, "disable_scroll": 1, "load_api": 1, "style_array": [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"saturation": "-100"}, {"lightness": "-30"}]}, {"featureType": "administrative.land_parcel", "elementType": "geometry.stroke", "stylers": [{"lightness": "0"}, {"saturation": "-100"}, {"gamma": "1.00"}]}, {"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"color": "#f2f2f2"}]}, {"featureType": "landscape.man_made", "elementType": "geometry.stroke", "stylers": [{"lightness": "-4"}]}, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "poi", "elementType": "geometry.fill", "stylers": [{"saturation": "-100"}, {"lightness": "0"}, {"gamma": "1.00"}]}, {"featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{"visibility": "on"}, {"weight": "1"}, {"saturation": "-80"}, {"lightness": "17"}, {"gamma": "1.2"}]}, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100}, {"lightness": 45}]}, {"featureType": "road", "elementType": "geometry.fill", "stylers": [{"lightness": "9"}]}, {"featureType": "road", "elementType": "geometry.stroke", "stylers": [{"lightness": "0"}, {"gamma": "1"}]}, {"featureType": "road", "elementType": "labels.text.fill", "stylers": [{"lightness": "-43"}]}, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"}]}, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "transit", "elementType": "labels.text.fill", "stylers": [{"saturation": "-90"}]}, {"featureType": "transit.line", "elementType": "geometry", "stylers": [{"hue": "#52ff00"}, {"lightness": "-50"}, {"gamma": "1.00"}]}, {"featureType": "transit.station.airport", "elementType": "geometry", "stylers": [{"saturation": "-77"}, {"gamma": "1.79"}, {"lightness": "23"}]}, {"featureType": "transit.station.bus", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "transit.station.rail", "elementType": "all", "stylers": [{"hue": "#ff7e00"}]}, {"featureType": "transit.station.rail", "elementType": "labels.text.fill", "stylers": [{"weight": "1.00"}, {"gamma": "1.00"}, {"lightness": "0"}, {"saturation": "0"}]}, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#ccd7dc"}, {"visibility": "on"}]}, {"featureType": "water", "elementType": "geometry.fill", "stylers": [{"visibility": "on"}, {"lightness": "-20"}, {"saturation": "-90"}, {"gamma": "1.00"}]}, {"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"lightness": "-39"}, {"saturation": "-100"}]}, {"featureType": "water", "elementType": "labels.text.stroke", "stylers": [{"lightness": "55"}]}], "title": "Locations map", "shortcode": ""});


        // Contact map
        // -----------------------------------------------------------------


        $("#contact-map").UberGoogleMaps({"positionType": "manual", "lat": "40.725367929408215", "lng": "-73.95945149040222", "zoom": "13", "width": 640, "height": 500, "responsive": 1, "searchQuery": "", "language": "en", "markers": [{"id": "40.72735633420242_-73.9559268951416", "lat": 40.72735633420242, "lng": -73.9559268951416, "icon": "custom", "icon_url": "http://www.coffeecreamthemes.com/themes/taxigrabber/html/images/map-marker.png", "title": "Taxi Grabber"}], "infoWindows": [{"id": 95715, "marker_id": "40.72735633420242_-73.9559268951416", "title": "Taxi Grabber", "subtitle": "Headquater", "phone": "+1 800 123 4567", "address": "123 Fake Address", "email": "info@taxigrabber.biz", "web": "", "content": "", "open": 0}], "showInfoWindowsOn": "click", "animateMarkers": 1, "style_type": "preset", "style_index": 99, "style_array_custom": "[]", "auto_sign_in": 1, "fullscreen_enabled": 1, "disable_scroll": 1, "load_api": 1, "style_array": [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"saturation": "-100"}, {"lightness": "-30"}]}, {"featureType": "administrative.land_parcel", "elementType": "geometry.stroke", "stylers": [{"lightness": "0"}, {"saturation": "-100"}, {"gamma": "1.00"}]}, {"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"color": "#f2f2f2"}]}, {"featureType": "landscape.man_made", "elementType": "geometry.stroke", "stylers": [{"lightness": "-4"}]}, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "poi", "elementType": "geometry.fill", "stylers": [{"saturation": "-100"}, {"lightness": "0"}, {"gamma": "1.00"}]}, {"featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{"visibility": "on"}, {"weight": "1"}, {"saturation": "-80"}, {"lightness": "17"}, {"gamma": "1.2"}]}, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100}, {"lightness": 45}]}, {"featureType": "road", "elementType": "geometry.fill", "stylers": [{"lightness": "9"}]}, {"featureType": "road", "elementType": "geometry.stroke", "stylers": [{"lightness": "0"}, {"gamma": "1"}]}, {"featureType": "road", "elementType": "labels.text.fill", "stylers": [{"lightness": "-43"}]}, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"}]}, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "transit", "elementType": "labels.text.fill", "stylers": [{"saturation": "-90"}]}, {"featureType": "transit.line", "elementType": "geometry", "stylers": [{"hue": "#52ff00"}, {"lightness": "-50"}, {"gamma": "1.00"}]}, {"featureType": "transit.station.airport", "elementType": "geometry", "stylers": [{"saturation": "-77"}, {"gamma": "1.79"}, {"lightness": "23"}]}, {"featureType": "transit.station.bus", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "transit.station.rail", "elementType": "all", "stylers": [{"hue": "#ff7e00"}]}, {"featureType": "transit.station.rail", "elementType": "labels.text.fill", "stylers": [{"weight": "1.00"}, {"gamma": "1.00"}, {"lightness": "0"}, {"saturation": "0"}]}, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#ccd7dc"}, {"visibility": "on"}]}, {"featureType": "water", "elementType": "geometry.fill", "stylers": [{"visibility": "on"}, {"lightness": "-20"}, {"saturation": "-90"}, {"gamma": "1.00"}]}, {"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"lightness": "-39"}, {"saturation": "-100"}]}, {"featureType": "water", "elementType": "labels.text.stroke", "stylers": [{"lightness": "55"}]}], "title": "Garage map", "shortcode": ""});


    });

})(jQuery);