define(["marionette", "collection", "mapbox"],
    function (Marionette, Collection, L) {
        "use strict";
        var MapboxView = Marionette.CompositeView.extend({
            id: 'map',
            map: null,
            initialize: function (opts) {
                this.collection = opts.collection;
                //initialize the map:
                L.mapbox.accessToken = 'pk.eyJ1IjoibGF1cmVuYmVuaWNob3UiLCJhIjoiQ1BlZGczRSJ9.EVMieITn7lHNi6Ato9wFwg';
                this.map = L.mapbox.map('map', 'laurenbenichou.54e91cf8', {
                    zoomControl: false
                }).setView([37.812, -122.294], 15);

                //get data
                this.collection.fetch({ reset: true });
                this.listenTo(this.collection, 'reset', this.renderMarkers);
            },
            renderMarkers: function () {
                var spots = L.mapbox.featureLayer().addTo(this.map),
                    places = {
                        type: 'FeatureCollection',
                        features: []
                    },
                    that = this;
                this.collection.each(function (marker) {
                    places.features.push({
                        geometry: marker.get("geometry"),
                        properties: {
                            id: marker.get("id"),
                            name: marker.get("name"),
                            "marker-color": marker.get("color"),
                            "marker-symbol": "village",
                            "marker-size": "large"
                        },
                        type: "Feature"
                    });
                });
                spots.setGeoJSON(places);
                spots.on('click', function (e) {
                    that.markerClick(e);
                });
            },
            markerClick: function (e) {
                var id = e.layer.feature.properties.id,
                    model = this.collection.get(id),
                    target = "#" + id,
                    latLng = e.layer.getLatLng();
                window.location.hash = target;

                // Get Marker Detail if applicable:
                if (model.get("overlay_type") == "marker" && !model.get("children")) {
                    model.urlRoot = 'http://dev.localground.org' + this.api_endpoint;
                    model.fetch();
                }
                this.map.setView([latLng.lat, latLng.lng], 16);
            }
        });
        return MapboxView;
    });