function setId(e){if(e!==currentId){"cover"===e?(console.log(e),$("body").attr("class","section-0")):$("body").attr("class"," "),spots.eachLayer(function(t){if(t.feature.properties.id===e){var o=t.feature.geometry.coordinates,r=$(".sprite");r.removeClass("active");var i=$("div[class*='"+e+"']")[0];i.className=i.className+" active","cover"===e?map.setView(o,15):map.setView(o,16)}});for(var t=0;t<sections.length;t++)sections[t].className=sections[t].id===e?"active":"";currentId=e}}function fullscreenFix(){var e=$("body").height();$(".content-b").each(function(){$(this).innerHeight()<=e&&$(this).closest(".fullscreen").addClass("not-overflow")})}function fadeOnScroll(){var e=$("#splash");$(window).scroll(function(){e.fadeOut(1500)})}$(document).foundation(),L.mapbox.accessToken="pk.eyJ1IjoibGF1cmVuYmVuaWNob3UiLCJhIjoiQ1BlZGczRSJ9.EVMieITn7lHNi6Ato9wFwg";var map=L.mapbox.map("map","laurenbenichou.54e91cf8",{zoomControl:!1}).setView([37.812,-122.294],15);map.scrollWheelZoom.disable();var places={type:"FeatureCollection",features:[{geometry:{type:"Point",coordinates:[37.812,-122.294]},properties:{id:"cover",zoom:15},type:"Feature"},{geometry:{type:"Point",coordinates:[37.812515,-122.28703]},properties:{id:"defermery"},type:"Feature"},{geometry:{type:"Point",coordinates:[37.805054,-122.295128]},properties:{id:"bart"},type:"Feature"},{geometry:{type:"Point",coordinates:[37.815969,-122.316791]},properties:{id:"crane"},type:"Feature"},{geometry:{type:"Point",coordinates:[37.815694,-122.29724]},properties:{id:"station"},type:"Feature"},{geometry:{type:"Point",coordinates:[37.808917,-122.292539]},properties:{id:"mural"},type:"Feature"},{geometry:{type:"Point",coordinates:[37.826317,-122.278605]},properties:{id:"hotel"},type:"Feature"},{geometry:{type:"Point",coordinates:[37.818513,-122.278765]},properties:{id:"mcclymonds"},type:"Feature"},{geometry:{type:"Point",coordinates:[37.818513,-122.278765]},properties:{id:"malik"},type:"Feature"},{geometry:{type:"Point",coordinates:[37.811607,-122.29448]},properties:{id:"cookie"},type:"Feature"},{geometry:{type:"Point",coordinates:[37.812878,-122.294654]},properties:{id:"kevin"},type:"Feature"},{geometry:{type:"Point",coordinates:[37.81085,-122.29633]},properties:{id:"open"},type:"Feature"},{geometry:{type:"Point",coordinates:[37.809877,-122.294366]},properties:{id:"joshua"},type:"Feature"},{geometry:{type:"Point",coordinates:[37.807101,-122.269838]},properties:{id:"about"},type:"Feature"}]},spots=L.mapbox.featureLayer().addTo(map);spots.setGeoJSON(places),spots.eachLayer(function(e){var t="sprite sprite-"+e.feature.properties.id,o=e.feature.geometry.coordinates,r=L.divIcon({className:t,iconSize:[80,80]});L.marker(o,{icon:r}).addTo(map)});var sections=$("section"),narrative=$("#narrative")[0],currentId="cover";narrative.onscroll=function(){for(var e=narrative.offsetHeight,t=currentId,o=sections.length-1;o>=0;o--){var r=sections[o].getBoundingClientRect();r.top>=0&&r.top/.5<=e&&(t=sections[o].id)}setId(t)},setId("cover"),$(window).resize(fullscreenFix),fullscreenFix(),fadeOnScroll();