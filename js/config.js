/*
  Todo: Make this so that you don't have to know JavaScript.
  Should look like a stylesheet, or MarkDown.
*/
var datasets = {
    places: {
        api_endpoint: 'http://dev.localground.org/api/0/markers/',
        page_size: 50,
        filter: "WHERE project = 23"
    }
};
var pages = [
    {
        collection_template_path: "place-list.html",
        item_template_path: "place-item.html",
        region: '#narrative',
        type: "list",
        dataset: "places"
    },
    {
        region: '#map_container',
        type: "mapbox",
        dataset: "places",
        click: ""
    },
    {
        url: "",
        template_path: "splash.html",
        region: "#pan",
        postRender: "animateLogo",
        events: {
            "click .icon": "open"
        }
    },
    {
        url: "start",
        transition: "hidePanels"
    },
    {
        url: "share",
        template_path: "mailer.html",
        region: "#shareModal",
        postRender: "showModal",
        transition: "hidePanels"
    },
    {
        url: "detail/:id",
        type: "detail",
        dataset: "places",
        template_path: "place-detail.html",
        transition: "scroll",
        region: '#:id'
    },
    {
        url: "*notFound",
        transition: "hidePanels"
    }
];
