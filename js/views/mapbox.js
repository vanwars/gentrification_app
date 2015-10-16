define(["marionette", "collection", "mapbox"],
    function (Marionette, Collection, L) {
        "use strict";
        var MapboxView = Marionette.CompositeView.extend({
            id: 'map',
            initialize: function (opts) {
                this.collection = new Collection({
                    api_endpoint: opts.api_endpoint,
                    page_size: opts.page_size || 10,
                    comparator: opts.ordering_field || "id",
                    filter: opts.filter
                });

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
                    };
                this.collection.each(function (marker) {
                    places.features.push({
                        geometry: marker.get("geometry"),
                        properties: {
                            id: marker.get("id"),
                            name: marker.get("name"),
                            "marker-color": marker.get("color")
                        },
                        type: "Feature"
                    });
                });
                spots.setGeoJSON(places);
                spots.on('click', function (e) {
                    var id = "#" + e.layer.feature.properties.id;
                    window.location.hash = id;
                });
            },
            markerClick: function () {
                //
            }
        });
        return MapboxView;
    });