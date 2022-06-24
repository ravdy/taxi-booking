var uberGoogleMap = undefined;
var uberGoogleMap_loadCallback = function() {};
var uberGoogleMap_started_loading = false;
var googleMapsAPI_loaded = false;
var editorMode = false;
var ugm_maps = new Array();
var ugm_maps_to_load = new Array();

;(function($, window, document, undefined) {
    "use strict";

    $.uber_google_maps_get_map_object = function() {
        return
    }

    $.uber_google_maps_markers = {};

    var pluginName = "UberGoogleMaps",
    defaults = {
        positionType : 'manual',
        lat : -34.397,
        lng : 150.644,
        zoom : 8,
        width : 640,
        height : 480,
        responsive : 1,
        searchQuery : '',
        language : 'en',
        markers : [],
        infoWindows : [],
        showInfoWindowsOn : 'click',
        animateMarkers : 1,
        style_type : 'preset',
        style_index : 3,
        style_array : undefined,
        style_array_custom : '[]',
        auto_sign_in : 1,
        fullscreen_enabled : 1,
        is_fullscreen : 0
    };

    var plugin = undefined;
    var visibleWindow = undefined;

    function UberGoogleMaps(element, options) {
        this.el = $(element);
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.map = undefined;
        this.markers = {};
        this.info_windows = {};
        this.id = Math.floor(Math.random() * 10000);
    }

    $.extend(UberGoogleMaps.prototype, {
        init: function () {
            var self = this;
            ugm_maps[this.id] = this;
            this.el.html('');

            if (typeof(google) == 'undefined') return;

            // Map size
            if (!editorMode) {

                var width = this.settings.width;
                if (parseInt(this.settings.responsive, 10) == 1) {
                    width = '100%';
                }

                this.el.css({
                    width : width,
                    height : this.settings.height
                });
            }

            var mapOptions = {
                center : { lat : parseFloat(this.settings.lat), lng : parseFloat(this.settings.lng) },
                zoom : parseFloat(this.settings.zoom)
            }

            var styled_map = undefined;

            // disable scroll
            if (parseInt(this.settings.disable_scroll, 10) == 1) {
                mapOptions.scrollwheel = false;
            }

            if (this.settings.style_type == 'preset') {
                var styled_map = new google.maps.StyledMapType(this.settings.style_array, { name: "Styled Map" });
                mapOptions.mapTypeControlOptions = {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                };
            }

            if (this.settings.style_type == 'custom') {
                var styled_map = new google.maps.StyledMapType(JSON.parse(this.settings.style_array_custom), { name: "Styled Map" });
                mapOptions.mapTypeControlOptions = {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                };
            }

            this.map = new google.maps.Map(self.el.get(0), mapOptions);
            this.map.map_id = this.id;

            if (this.settings.style_type == 'preset' || this.settings.style_type == 'custom') {
                this.map.mapTypes.set('map_style', styled_map);
                this.map.setMapTypeId('map_style');
            }

            // Place markers
            if (this.settings.markers.length > 0) {
                var len = this.settings.markers.length;
                var animation = null;
                var delay = 0;

                if (parseInt(this.settings.animateMarkers) == 1) {
                    animation = google.maps.Animation.DROP;
                    delay = 150;
                }

                var i = 0;

                self.markerInterval = setInterval(function() {
                    var marker_model = self.settings.markers[i];
                    var marker_options = {
                        position : { lat : parseFloat(marker_model.lat), lng : parseFloat(marker_model.lng) },
                        title : marker_model.title,
                        animation : animation
                    }

                    if (marker_model.icon != 'default') {
                        marker_options.icon = marker_model.icon_url;
                    }

                    var marker = new google.maps.Marker(marker_options);

                    $.uber_google_maps_markers[self.settings.markers[i].id] = marker;
                    self.markers[self.settings.markers[i].id] = marker;
                    marker.setMap(self.map);

                    i++;
                    if (i == len) {
                        clearInterval(self.markerInterval);

                        // Place info windows
                        if (self.settings.infoWindows.length > 0) {
                            var window_len = self.settings.infoWindows.length;

                            for (var j=0; j<window_len; j++) {

                                var content = '<div class="uber-google-maps-info-window-content-wrap">';

                                if (self.settings.infoWindows[j].title.length > 0) {
                                    content += '<div class="uber-google-maps-info-window-field uber-google-maps-title">' + self.settings.infoWindows[j].title + '</div>';
                                }
                                if (self.settings.infoWindows[j].subtitle.length > 0) {
                                    content += '<div class="uber-google-maps-info-window-field uber-google-maps-subtitle">' + self.settings.infoWindows[j].subtitle + '</div>';
                                }
                                if (self.settings.infoWindows[j].phone.length > 0) {
                                    content += '<div class="uber-google-maps-info-window-field uber-google-maps-phone">' + self.settings.infoWindows[j].phone + '</div>';
                                }
                                if (self.settings.infoWindows[j].address.length > 0) {
                                    content += '<div class="uber-google-maps-info-window-field uber-google-maps-address">' + self.settings.infoWindows[j].address + '</div>';
                                }
                                if (self.settings.infoWindows[j].email.length > 0) {
                                    content += '<div class="uber-google-maps-info-window-field uber-google-maps-email">' + self.settings.infoWindows[j].email + '</div>';
                                }
                                if (self.settings.infoWindows[j].web.length > 0) {
                                    content += '<div class="uber-google-maps-info-window-field uber-google-maps-web"><a href="' + self.settings.infoWindows[j].web + '">' + self.settings.infoWindows[j].web + '</a></div>';
                                }
                                if (self.settings.infoWindows[j].content.length > 0) {
                                    content += self.settings.infoWindows[j].content;
                                }

                                content += '</div>';

                                var is_open = false;

                                if (parseInt(self.settings.infoWindows[j].open) == 1) {
                                    is_open = true;
                                }

                                var infoWindow = new google.maps.InfoWindow({
                                    content : content,
                                    is_open : is_open
                                });

                                var marker_id = self.settings.infoWindows[j].marker_id;
                                self.info_windows[marker_id] = infoWindow;

                                google.maps.event.addListener(self.markers[marker_id], self.settings.showInfoWindowsOn, self.toggle_window);

                                if (parseInt(self.settings.infoWindows[j].open) == 1) {
                                    infoWindow.open(self.map, self.markers[marker_id]);
                                    visibleWindow = infoWindow;
                                    visibleWindow.is_open = true;
                                }
                            }
                        }
                    }
                }, delay);
            }

            // Fullscreen button
            if (parseInt(this.settings.fullscreen_enabled) == 1 && parseInt(this.settings.is_fullscreen) == 0) {
                this.el.append('<div class="uber-google-maps-fullscreen-button" id="go-fullscreen">Go Fullscreen</div>');

                $('#go-fullscreen').on('click', function() {
                    self.go_fullscreen();
                });
            }
            if (parseInt(this.settings.fullscreen_enabled) == 1 && parseInt(this.settings.is_fullscreen) == 1) {
                this.el.append('<div class="uber-google-maps-fullscreen-button" id="close-fullscreen">Close Fullscreen</div>');

                $('#close-fullscreen').on('click', function() {
                    self.close_fullscreen();
                });
            }

            if (parseInt(this.settings.is_fullscreen) == 0) {
                uberGoogleMap_loadCallback(self.map);
            }
        },
        toggle_window : function(event) {
            var map_id = this.map.map_id;
            var plugin = ugm_maps[map_id];

            var position = event.latLng;
            var marker_id = position.lat() + '_' + position.lng();

            if (plugin.settings.showInfoWindowsOn == 'click') {
                if (plugin.info_windows[marker_id].is_open) {
                    plugin.info_windows[marker_id].is_open = false;
                    plugin.info_windows[marker_id].close();
                    visibleWindow = undefined;
                } else {
                    if (visibleWindow != undefined) {
                        visibleWindow.is_open = false;
                        visibleWindow.close();
                    }

                    plugin.info_windows[marker_id].is_open = true;
                    plugin.info_windows[marker_id].open(plugin.map, plugin.markers[marker_id]);
                    visibleWindow = plugin.info_windows[marker_id];
                }
            } else {
                if (visibleWindow != undefined) {
                    visibleWindow.is_open = false;
                    visibleWindow.close();
                }

                plugin.info_windows[marker_id].is_open = true;
                plugin.info_windows[marker_id].open(plugin.map, plugin.markers[marker_id]);
                visibleWindow = plugin.info_windows[marker_id];
            }
        },
        go_fullscreen : function() {
            var html = '';

            // Clean up
            $('.uber-google-maps-fullscreen-wrap').remove();
            $('body, html').removeClass('uber-google-maps-fullscreen');

            html += '<div class="uber-google-maps-fullscreen-wrap">';
            html += '   <div class="uber-google-map" id="uber-google-maps-fullscreen-map"></div>';
            html += '</div>';

            $('body').prepend(html);
            $('body, html').addClass('uber-google-maps-fullscreen');

            var settings = this.settings;

            settings.is_fullscreen = 1;
            settings.responsive = 1;
            settings.height = '100%';

            $('#uber-google-maps-fullscreen-map').UberGoogleMaps(settings);
        },
        close_fullscreen : function() {
            // Clean up
            $('.uber-google-maps-fullscreen-wrap').remove();
            $('body, html').removeClass('uber-google-maps-fullscreen');
        }
    });

    $.fn[pluginName] = function(options, cb, editor) {
        editorMode = editor;

        if (typeof(cb) != 'undefined') {
            uberGoogleMap_loadCallback = cb;
        }

        if (!uberGoogleMap_started_loading) {
            uberGoogleMap_started_loading = true;

            if (parseInt(options.load_api, 10) == 1) {
                uberGoogleMap_loadScript(options.language, options.auto_sign_in);
            } else {
                googleMapsAPI_loaded = true;
            }
        }

        return this.each(function() {
            uberGoogleMap = new UberGoogleMaps(this, options);

            if (!googleMapsAPI_loaded) {
                ugm_maps_to_load.push(uberGoogleMap);
            } else {
                uberGoogleMap.init();
            }
        });
    };

})(jQuery, window, document);

function uberGoogleMap_initialize() {
    googleMapsAPI_loaded = true;

    for (var i=0; i<ugm_maps_to_load.length; i++) {
        ugm_maps_to_load[i].init();
    }

    ugm_maps_to_load = new Array();
}

function uberGoogleMap_loadScript(language, signed_in) {
    var signed_in_str = '';
    if (parseInt(signed_in) == 1) {
        signed_in_str = 'true';
    } else {
        signed_in_str = 'false';
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    if (editorMode) {
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyB9v7hw6MuDrKEijZmFgKsPGBNt-le4asM&callback=uberGoogleMap_initialize&libraries=places&language=' + language;
        // script.src = 'https://maps.googleapis.com/maps/api/js?v=3&callback=uberGoogleMap_initialize&libraries=places&language=' + language;
    } else {
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyB9v7hw6MuDrKEijZmFgKsPGBNt-le4asM&callback=uberGoogleMap_initialize&language=' + language + '&signed_in=' + signed_in_str;
        // script.src = 'https://maps.googleapis.com/maps/api/js?v=3&callback=uberGoogleMap_initialize&language=' + language + '&signed_in=' + signed_in_str;
    }
    document.body.appendChild(script);
}
