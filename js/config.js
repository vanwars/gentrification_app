/*
  Todo: Make this so that you don't have to know JavaScript.
  Should look like a stylesheet, or MarkDown.
*/
var datasets = {
    places: {
        api_endpoint: 'https://dev.localground.org/api/0/markers/',
        page_size: 50,
        filter: "WHERE project = 23"
    }
};
var pages = [
    {
        collection_template_path: "place-list.html",
        item_template_path: "place-item.html",
        region: '#data',
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
        url: "detail/cover",
        template_path: "cover.html",
        transition: "scroll",
        region: '#cover',
        postRender: "makeActive"
    },
    {
        url: "detail/yr",
        template_path: "about-yr.html",
        region: '#yr',
        transition: "scroll",
        postRender: "makeActive"
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
        url: "share",
        template_path: "mailer.html",
        region: "#share-modal",
        postRender: "showModal",
        transition: "hidePanels"
    },
    {
        url: "*notFound",
        transition: "hidePanels"
    }
];
