define(["underscore", "marionette", "mapbox"],
    function (_, Marionette, L) {
        "use strict";
        var MapboxView = Marionette.View.extend({
            id: 'map',
            initialize: function () {
                L.mapbox.accessToken = 'pk.eyJ1IjoibGF1cmVuYmVuaWNob3UiLCJhIjoiQ1BlZGczRSJ9.EVMieITn7lHNi6Ato9wFwg';
                // Create a map in the div #map and takes two arguments: the id of the html element and the map id from Mapbox
                this.map = L.mapbox.map('map', 'laurenbenichou.54e91cf8', {
                    zoomControl: false
                }).setView([37.812, -122.294], 15);
            }
        });
        return MapboxView;
    });