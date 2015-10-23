define(["jquery", "marionette", "mapbox"],
    function ($, Marionette, L) {
        "use strict";
        var MapboxView = Marionette.CompositeView.extend({
            id: 'map',
            map: null,
            layer: null,
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
                if (this.layer != null) { return; }
                this.layer = L.mapbox.featureLayer().addTo(this.map);
                var places = {
                        type: 'FeatureCollection',
                        features: []
                    },
                    that = this;
                this.collection.each(function (marker) {
                    var properties = {
                        id: marker.get("id"),
                        name: marker.get("name")
                    };

                    //add icon:
                    if (marker.get("extras") && marker.get("extras").icon) {
                        properties.icon = {
                            className: "sprite " + marker.get("extras").icon,
                            iconSize: [80, 80]
                        };
                    } else {
                        _.extend(properties, {
                            "marker-color": marker.get("color"),
                            "marker-symbol": "village",
                            "marker-size": "large"
                        });
                    }

                    //console.log(properties);
                    places.features.push({
                        geometry: marker.get("geometry"),
                        properties: properties,
                        type: "Feature"
                    });
                });
                this.layer.on('layeradd', function (e) {
                    if (e.layer.feature.properties.icon) {
                        e.layer.setIcon(L.divIcon(e.layer.feature.properties.icon));
                    }
                });
                this.layer.setGeoJSON(places);
                this.layer.on('click', function (e) {
                    that.markerClick(e);
                });
            },
            markerClick: function (e) {
                var $div = $(e.originalEvent.srcElement),
                    id = e.layer.feature.properties.id,
                    route = "#/detail/" + id,
                    latLng = e.layer.getLatLng();

                //show active map icon:
                $(".sprite").removeClass("active");
                $div.addClass("active");
                $("body.section-0 #map").css({ opacity: 1 });

                // load panel:
                window.location.hash = route;

                // pan map:
                this.map.setView([latLng.lat, latLng.lng], 16);
            }
        });
        return MapboxView;
    });