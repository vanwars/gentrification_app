/*
  Todo: Make this so that you don't have to know JavaScript.
  Should look like a stylesheet, or MarkDown.
*/
var pages = [
    {
        collection_template_path: "place-list.html",
        item_template_path: "place-item.html",
        target: '#narrative',
        type: "list",
        api_endpoint: '/api/0/markers/',
        page_size: 50,
        filter: "WHERE project = 23"
    },
    {
        target: '#map_container',
        type: "mapbox"
    },
    {
        url: "",
        template_path: "splash.html",
        target: "#pan"
    },
    {
        url: "start",
        transition: "hideSplashScreen"
    }
];
