define(["underscore",
        "jquery",
        "backbone",
        "marionette",
        "views/base",
        "views/record-list",
        "views/record-detail",
        "views/mapbox",

        "functions"
    ],
    function (_, $, Backbone, Marionette, BaseView, RecordListView, RecordDetailView, MapboxView) {
        "use strict";
        var App = new Marionette.Application();
        _.extend(App, {
            collections: {},
            datasets: {},
            pages: {},
            routes: {},
            appRouter: null,
            defaultTarget: '.section-content',
            spokesTarget: '.explore_mainnav',

            buildViews: function (pages) {
                var that = this;
                /* Dynamically builds Backbone Views from the config file */
                _.each(pages, function (page) {
                    var View = that.getView(page),
                        v;
                    if (!page.url && page.url != "") {
                        v = new View(page);
                        $(page.target || that.defaultTargets).html(v.el);
                        v.delegateEvents();
                    }
                });
            },
            getView: function (page) {
                switch (page.type) {
                case "list":
                    _.extend(page, this.datasets[page.dataset]);
                    return RecordListView.extend(page);
                case "detail":
                    return RecordDetailView.extend(page);
                case "mapbox":
                    _.extend(page, this.datasets[page.dataset]);
                    return MapboxView.extend(page);
                default:
                    return BaseView.extend(page);
                }
            },

            buildRoutes: function (pages) {
                var that = this;
                /* Dynamically builds Backbone Routes from the config file */
                _.each(pages, function (page) {
                    that.pages[page.url] = page;
                    if (page.type == "detail") {
                        page.modelID = page.id;
                    }
                    that.routes[page.url] = function (id) {
                        if (page.template_path) {
                            that.loadView(page, id);
                        }
                        that.executeTransition(page);
                    };
                });
            },

            loadView: function (page, id) {
                //console.log(page);
                if (id) { page.modelID = id; }
                var View = this.getView(page),
                    view = new View(page);
                $(page.target || this.defaultTarget).html(view.el);
                view.delegateEvents();
            },

            executeTransition: function (page) {
                if (page.transition) {
                    eval(page.transition + "()");
                }
            }
        });

        App.addInitializer(function (opts) {
            this.datasets = opts.datasets;
            this.buildViews(opts.pages);
            this.buildRoutes(opts.pages);
            var AppRouter = Backbone.Router.extend({
                routes: this.routes
            });
            this.appRouter = new AppRouter();
            Backbone.history.start();
        });
        return App;
    });

