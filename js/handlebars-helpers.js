define(["handlebars", "backbone"],
    function (Handlebars, Backbone) {
        "use strict";
        Handlebars.registerHelper("ifHasQuotes", function (txt, block) {
            if (txt && txt.indexOf("\"") != -1) {
                return block.fn(this);
            }
            return false;
        });

        Handlebars.registerHelper("highlightIntensity", function (txt) {
            var re = /(d+):/i,
                found = txt.match(re),
                color;
            console.log(found);
            if (!txt) { return ''; }
            if (txt.indexOf("1:") != -1) {
                color = "#F6FEAA";
            } else if (txt.indexOf("2:") != -1) {
                color = "#F7F8A4";
            } else if (txt.indexOf("3:") != -1) {
                color = "#F9F29F";
            } else if (txt.indexOf("4:") != -1) {
                color = "#FAEC99";
            } else if (txt.indexOf("5:") != -1) {
                color = "#FCE694";
            }
            return new Handlebars.SafeString('style="background-color: ' + color + '"');
        });

        Handlebars.registerHelper("repeat", function (txt, fa_class) {
            if (!txt) { return ''; }

            var found = txt.match(/(\d+):/i),
                bubbles = "",
                count,
                i;
            if (found && found.length > 1) {
                count = found[1];
                for (i = 0; i < count; i++) {
                    bubbles += '<i class="fa ' + fa_class + '"></i>&nbsp;';
                }
            }
            return bubbles;
        });

        Handlebars.registerHelper("paginator", function () {
            var re = /page=(\d+)/i,
                previous = null,
                next = null,
                html = '';
            if (this.previous) { previous = this.previous.match(re); }
            if (this.next) { next = this.next.match(re); }
            if (previous && previous.length > 1) {
                html += '<button class="btn page" style="margin-right:10px" page-num="' + previous[1] + '">' +
                    '<i class="fa fa-angle-double-left"></i> previous' +
                    '</button>';
            }
            if (next && next.length > 1) {
                html += '<button class="btn page" page-num="' + next[1] + '">' +
                    'next <i class="fa fa-angle-double-right"></i>' +
                    '</button>';
            }
            return html;
        });


    });