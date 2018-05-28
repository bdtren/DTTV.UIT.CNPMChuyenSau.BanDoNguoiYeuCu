!function($) {
    "use strict";
    var wrap, items, style, maxLevel, colors, breadcrumbs;
    var itemsByParent = {};
    var itemsById = {};
    var initStyle = {};
    var styled = {};
    var breadcrumbsTemplate = _.template('<li class="item">' + '<a class="item-link" href="javascript:;" title="<%= title %>" data-id="<%= id %>">' + '<i class="glyph-icon">&#10095;</i> <%= title %>' + "</a>" + "</li>");
    function insertRule(selector, rules, contxt) {
        var context = contxt || document, stylesheet;
        if (typeof context.styleSheets == "object") {
            if (context.styleSheets.length) {
                stylesheet = context.styleSheets[context.styleSheets.length - 1];
            }
            if (context.styleSheets.length) {
                if (context.createStyleSheet) {
                    stylesheet = context.createStyleSheet();
                } else {
                    context.getElementsByTagName("head")[0].appendChild(context.createElement("style"));
                    stylesheet = context.styleSheets[context.styleSheets.length - 1];
                }
            }
            if (stylesheet.addRule) {
                for (var i = 0; i < selector.length; ++i) {
                    stylesheet.addRule(selector[i], rules);
                }
            } else {
                stylesheet.insertRule(selector.join(",") + "{" + rules + "}", stylesheet.cssRules.length);
            }
        }
    }
    function processLargeArrayAsync(array, fn, chunk, context) {
        context = context || window;
        chunk = chunk || 100;
        var index = 0;
        function doChunk() {
            var cnt = chunk;
            while (cnt-- && index < array.length) {
                fn.call(context, array[index], index, array);
                ++index;
            }
            if (index < array.length) {
                setTimeout(doChunk, 1);
            }
            if (index >= array.length) {
                fn.call(context, null, index, array);
            }
        }
        doChunk();
    }
    function renderBreadcrumbs(items) {
        breadcrumbs.empty();
        _.each(items, function(item) {
            var node = $(breadcrumbsTemplate(item));
            node.data("item", item);
            breadcrumbs.append(node);
        });
        breadcrumbs.find(".item-link").click(function() {
            var li = $(this).parent();
            var item = li.data("item");
            wrap.trigger("loadItems", [ li, item ]);
            return false;
        });
    }
    window.sitemapInit = function(i) {
        $(function() {
            items = i;
            wrap = $("#sitemap-wrap");
            style = wrap.data("style");
            maxLevel = parseInt(wrap.data("max-level")) - 1;
            colors = wrap.data("colors");
            breadcrumbs = $("#header .breadcrumbs");
            repositionMainbody();
            groupItems(function() {
                initStyle[style]();
            });
        });
    };
    function groupItems(finish) {
        processLargeArrayAsync(items, function(item) {
            if (!item) {
                finish();
                return;
            }
            itemsById[item.id] = item;
            var parentKey = item.parent_id ? item.parent_id : "#";
            if (_.isUndefined(itemsByParent[parentKey])) {
                itemsByParent[parentKey] = [];
            }
            itemsByParent[parentKey].push(item);
        }, 500);
    }
    initStyle.default = function() {
        var ul = $('<ul class="branch">');
        var li = $('<li class="leaf">');
        var itemBoxTemplate = _.template('<div class="bx"><div class="bx2 <%= classname %>">        <% if(prev){ %>        <div class="btn-nav top">        <a href="javascript:;" class="pv btn small"><i class="glyph-icon icon-arrow-up"></i></a>        </div>        <% } %>        <h4><%= title %><%if(label){%><span class="<%=labelType%>"><%=label%></span><%}%></h4>        <% if(typeof(url) != "undefined" && !_.isEmpty(url)){ %>        <p><a href="<%= url %>" target="_blank"><%= url %></a></p>        <% } %>        <% if(next){ %>        <div class="btn-nav">        <a href="javascript:;" class="nx btn small"><i class="glyph-icon icon-arrow-down"></i></a>        </div>        <% } %>        </div></div>');
        var currentParent;
        var path = [];
        function renderItems(parentItems, level, elWrap) {
            if (level > maxLevel) {
                return;
            }
            if (level === 0) {
                elWrap.empty();
            }
            var ulWrap = ul.clone();
            _.each(_.isArray(parentItems) ? parentItems : [ parentItems ], function(i) {
                var liWrap = li.clone();
                liWrap.attr("id", "leaf" + i.id);
                liWrap.data("item", i);
                if (!styled[i.id]) {
                    if (i.bg) {
                        insertRule([ "#leaf" + i.id + " > .bx > .bx2" ], "background-color:" + i.bg + " !important");
                        styled[i.id] = true;
                    }
                    if (i.fg) {
                        insertRule([ "#leaf" + i.id + " > .bx > .bx2 *" ], "color:" + i.fg + " !important");
                        styled[i.id] = true;
                    }
                }
                var tplVars = _.extend({
                    prev: false,
                    next: false,
                    classname: ""
                }, i);
                var children = itemsByParent[i.id];
                if (children && level === maxLevel) {
                    tplVars.next = true;
                }
                if (currentParent.id === i.id && path.length > 1) {
                    tplVars.prev = true;
                }
                if (colors.length) {
                    var colorIndex = level - Math.floor(level / colors.length) * colors.length;
                    tplVars.classname = "l" + colorIndex + "bg";
                }
                var label = "";
                var labelType = "";
                if (i.link_type == "pdf") {
                    label = "PDF";
                    labelType = "pdf";
                } else if (i.link_status >= 300 && i.link_status <= 399) {
                    label = "3xx";
                    labelType = "3xx";
                } else if (i.link_status >= 400) {
                    label = i.link_status.toString().substring(0, 1) + "xx";
                    labelType = "err";
                }
                tplVars.label = label;
                tplVars.labelType = labelType;
                liWrap.append(itemBoxTemplate(tplVars));
                ulWrap.append(liWrap);
                liWrap.find(".btn-nav .btn.nx").click(function() {
                    var itemBox = $(this).parents(".leaf:first");
                    var item = itemBox.data("item");
                    currentParent = item;
                    path.push(item);
                    renderBreadcrumbs(path);
                    renderItems(item, 0, wrap);
                    window.scrollTo(0, 0);
                });
                liWrap.find(".btn-nav .btn.pv").click(function() {
                    path.pop();
                    var item = path[path.length - 1];
                    currentParent = item;
                    renderBreadcrumbs(path);
                    renderItems(item, 0, wrap);
                    window.scrollTo(0, 0);
                });
                if (children) {
                    setTimeout(function() {
                        renderItems(children, level + 1, liWrap);
                    });
                }
            });
            elWrap.append(ulWrap);
        }
        _.each(itemsByParent["#"], function(item) {
            currentParent = item;
            path.push(item);
            renderBreadcrumbs(path);
            renderItems(item, 0, wrap);
        });
        wrap.on("loadItems", function(ev, li, item) {
            if (currentParent.id === item.id) {
                return;
            }
            path = path.slice(0, li.index() + 1);
            currentParent = item;
            renderBreadcrumbs(path);
            renderItems(item, 0, wrap);
        });
    };
    initStyle.thumbnail = function() {
        var ul = $('<ul class="branch">');
        var li = $('<li class="leaf">');
        var itemBoxTemplate = _.template('<div class="tbx"><div class="tbx2 <%=classname%>">        <% if(prev){ %>        <div class="btn-nav t">        <a class="pv">&#9650;</a>        </div>        <% } %>        <% if(type === "link"){ %>        <div class="u">        <div><i></i><i></i><i></i></div>        <%if(typeof(url) != "undefined" && !_.isEmpty(url)){%>        <a href="<%=url%>" target="_blank"><%=url%></a>        <%}%>        </div>        <div class="thm"><img class="fill" src="https://sitemap-screenshot.s3.amazonaws.com/fill.jpg" />        <%if(thumb){%>            <img class="thumb" src="<%=thumb%>" />        <%}else{%>            <i class="fa fa-image"></i>        <%}%>        </div>        <% } %>        <div class="ttl"><%=title%><%if(label){%><span class="<%=labelType%>"><%=label%></span><%}%></div>        <% if(category){ %>        <div class="cat0"><div class="cat"><i></i><i><%= category %></i></div></div>        <% } %>        <% if(next){ %>        <div class="btn-nav b">        <a class="nx">&#9660;</a>        </div>        <% } %>        </div></div>');
        var currentParent;
        var path = [];
        function renderItems(parentItems, level, elWrap) {
            if (level > maxLevel) {
                return;
            }
            if (level === 0) {
                elWrap.empty();
            }
            var ulWrap = ul.clone();
            _.each(_.isArray(parentItems) ? parentItems : [ parentItems ], function(i) {
                var liWrap = li.clone();
                liWrap.attr("id", "leaf" + i.id);
                liWrap.data("item", i);
                if (!styled[i.id]) {
                    if (i.bg) {
                        insertRule([ "#leaf" + i.id + " > .bx > .bx2" ], "background-color:" + i.bg + " !important");
                        styled[i.id] = true;
                    }
                    if (i.fg) {
                        insertRule([ "#leaf" + i.id + " > .bx > .bx2 *" ], "color:" + i.fg + " !important");
                        styled[i.id] = true;
                    }
                }
                var tplVars = _.extend({
                    prev: false,
                    next: false,
                    classname: "",
                    category: null
                }, i);
                var children = itemsByParent[i.id];
                if (children && level === maxLevel) {
                    tplVars.next = true;
                }
                if (currentParent.id === i.id && path.length > 1) {
                    tplVars.prev = true;
                }
                if (colors.length) {
                    var colorIndex = level - Math.floor(level / colors.length) * colors.length;
                    tplVars.classname = "l" + colorIndex + "bg";
                }
                var label = "";
                var labelType = "";
                if (i.link_type == "pdf") {
                    label = "PDF";
                    labelType = "pdf";
                } else if (i.link_status >= 300 && i.link_status <= 399) {
                    label = "3xx";
                    labelType = "3xx";
                } else if (i.link_status >= 400) {
                    label = i.link_status.toString().substring(0, 1) + "xx";
                    labelType = "err";
                }
                tplVars.label = label;
                tplVars.labelType = labelType;
                var colorClass = "";
                if (i.type === "container") {
                    colorClass += " tbxc";
                } else {
                    colorClass += " tbxu";
                }
                tplVars.classname += colorClass;
                liWrap.append(itemBoxTemplate(tplVars));
                ulWrap.append(liWrap);
                liWrap.find(".btn-nav .nx").click(function() {
                    var itemBox = $(this).parents(".leaf:first");
                    var item = itemBox.data("item");
                    currentParent = item;
                    path.push(item);
                    renderBreadcrumbs(path);
                    renderItems(item, 0, wrap);
                    window.scrollTo(0, 0);
                });
                liWrap.find(".btn-nav .pv").click(function() {
                    path.pop();
                    var item = path[path.length - 1];
                    currentParent = item;
                    renderBreadcrumbs(path);
                    renderItems(item, 0, wrap);
                    window.scrollTo(0, 0);
                });
                if (children) {
                    setTimeout(function() {
                        renderItems(children, level + 1, liWrap);
                    });
                }
            });
            elWrap.append(ulWrap);
        }
        _.each(itemsByParent["#"], function(item) {
            currentParent = item;
            path.push(item);
            renderBreadcrumbs(path);
            renderItems(item, 0, wrap);
        });
        wrap.on("loadItems", function(ev, li, item) {
            if (currentParent.id === item.id) {
                return;
            }
            path = path.slice(0, li.index() + 1);
            currentParent = item;
            renderBreadcrumbs(path);
            preloadFillImage().always(function() {
                renderItems(item, 0, wrap);
            });
        });
        function preloadFillImage() {
            var url = "https://sitemap-screenshot.s3.amazonaws.com/fill.jpg";
            try {
                var df = $.Deferred();
                var img = new Image();
                img.onload = function() {
                    df.resolve();
                };
                img.onerror = function() {
                    df.resolve();
                };
                img.src = url;
                return df.promise();
            } catch (e) {
                return $.when();
            }
        }
    };
    initStyle.tree = function() {
        var maxTitleLength = 20;
        var d3api = wrap.treeLayout();
        var openParent;
        d3api.treeNodeRadius(8);
        d3api.treeLineHeight(35);
        d3api.treeNodeOuterRadius(10);
        function loadItems(items, level) {
            if (level > maxLevel) {
                d3api.refreshVisualization();
                d3api.open(openParent.id);
                d3api.focus(openParent.id);
                return;
            }
            var hasChildren = false;
            _.each(_.isArray(items) ? items : [ items ], function(item) {
                var children = itemsByParent[item.id];
                if (!_.isEmpty(d3api.getNode(item.id))) {
                    if (children) {
                        setTimeout(function() {
                            loadItems(children, level + 1);
                        }, 1);
                    }
                    return;
                }
                if (children && level === maxLevel) {
                    item["data-next"] = 1;
                }
                if (colors.length) {
                    item["data-depth"] = level - Math.floor(level / colors.length) * colors.length;
                }
                if (children) {
                    item["data-isparent"] = 1;
                }
                var title = item.title;
                if (title.length > maxTitleLength) {
                    title = title.substr(0, maxTitleLength) + "...";
                }
                d3api.addNodeQueue(item.parent_id, item.id, title, item);
                if (!styled[item.id]) {
                    if (item.bg) {
                        insertRule([ '.node[id="' + item.id + '"] > circle.tree_node' ], "fill:" + item.bg + " !important;stroke:" + item.bg + " !important;");
                        styled[item.id] = true;
                    }
                    if (item.fg) {
                        insertRule([ '.node[id="' + item.id + '"] > text.tree_node' ], "fill:" + item.fg + " !important;");
                        styled[item.id] = true;
                    }
                }
                if (children) {
                    hasChildren = true;
                    setTimeout(function() {
                        loadItems(children, level + 1);
                    }, 1);
                }
            });
            if (!hasChildren) {
                d3api.refreshVisualization();
                d3api.open(openParent.id);
                d3api.focus(openParent.id);
            }
        }
        d3api.on("d3click", function(event, node) {
            var data = node.data;
            if (!node.loaded && data["data-next"]) {
                openParent = data;
                loadItems(data, 0);
                node.loaded = true;
            }
        });
        _.each(itemsByParent["#"], function(item) {
            openParent = item;
            loadItems(item, 0);
        });
    };
    initStyle.circle = function() {
        wrap.addClass("style-circle");
        var d3api = wrap.circleLayout();
        var openParent;
        var manualFocus = false;
        var path = [];
        function loadItems(items, level) {
            if (level > maxLevel) {
                d3api.refreshVisualization();
                manualFocus = true;
                d3api.focus(openParent.id);
                manualFocus = false;
                return;
            }
            var hasChildren = false;
            _.each(_.isArray(items) ? items : [ items ], function(item) {
                var children = itemsByParent[item.id];
                if (!_.isEmpty(d3api.getNode(item.id))) {
                    if (children) {
                        setTimeout(function() {
                            loadItems(children, level + 1);
                        }, 1);
                    }
                    return;
                }
                if (children && level === maxLevel) {
                    item["data-next"] = 1;
                }
                if (colors.length) {
                    item["data-depth"] = level - Math.floor(level / colors.length) * colors.length;
                }
                if (children) {
                    item["data-isparent"] = 1;
                }
                d3api.addNodeQueue(item.parent_id, item.id, item.title, item);
                if (!styled[item.id]) {
                    if (item.bg) {
                        insertRule([ '.style-circle circle[id="' + item.id + '"]' ], "fill:" + item.bg + " !important;");
                        styled[item.id] = true;
                    }
                    if (item.fg) {
                        insertRule([ '.style-circle text[id="' + item.id + '"]' ], "fill:" + item.fg + " !important;");
                        styled[item.id] = true;
                    }
                }
                if (children) {
                    hasChildren = true;
                    setTimeout(function() {
                        loadItems(children, level + 1);
                    }, 1);
                }
            });
            if (!hasChildren) {
                d3api.refreshVisualization();
                manualFocus = true;
                d3api.focus(openParent.id);
                manualFocus = false;
            }
        }
        function getItemPath(item) {
            var currentItem = item;
            var path = [];
            do {
                path.push(currentItem);
                if (currentItem.parent_id && itemsById[currentItem.parent_id]) {
                    currentItem = itemsById[currentItem.parent_id];
                } else {
                    currentItem = null;
                }
            } while (currentItem);
            return path.reverse();
        }
        d3api.on("d3focus", function(event, node) {
            var data = node.data;
            openParent = data;
            if (manualFocus) {
                return;
            }
            path = getItemPath(data);
            renderBreadcrumbs(path);
            if (!node.loaded && data["data-next"]) {
                openParent = data;
                loadItems(data, 0);
                node.loaded = true;
            }
        });
        _.each(itemsByParent["#"], function(item) {
            openParent = item;
            path = getItemPath(item);
            renderBreadcrumbs(path);
            loadItems(item, 0);
        });
        wrap.on("loadItems", function(ev, li, item) {
            if (openParent.id === item.id) {
                return;
            }
            path = path.slice(0, li.index() + 1);
            openParent = item;
            renderBreadcrumbs(path);
            manualFocus = true;
            d3api.focus(item.id);
            manualFocus = false;
        });
    };
    initStyle.folder = function() {
        var fileIcon = "glyph-icon icon-file font-size-20";
        var folderIcon = "glyph-icon icon-folder-close font-size-20";
        var currentSelected;
        var treeApi;
        var wrapInner = $("<div>");
        var path = [];
        wrap.html(wrapInner);
        function jsonConvertItem(value, level) {
            var opened = false;
            var selected = false;
            var icon = fileIcon;
            var children = itemsByParent[value.id];
            if (children) {
                opened = true;
                icon = folderIcon;
            }
            var colorIndex = "";
            if (colors.length) {
                colorIndex = level - Math.floor(level / colors.length) * colors.length;
            }
            var result = {
                id: value.id,
                parent: value.parent_id || "#",
                text: value.title,
                icon: icon,
                state: {
                    opened: opened,
                    selected: selected,
                    disabled: false
                },
                data: value,
                li_attr: {},
                a_attr: {
                    class: "level" + colorIndex,
                    "data-depth": level
                }
            };
            if (children && level == maxLevel) {
                result.children = true;
                result.state.opened = false;
            }
            return result;
        }
        function loadItems(id, callback) {
            var finalItems = [];
            function fillItems(items, level) {
                _.each(_.isArray(items) ? items : [ items ], function(item) {
                    var converted = jsonConvertItem(item, level);
                    if (!styled[item.id]) {
                        if (item.bg) {
                            insertRule([ 'li[id="' + item.id + '"] > .jstree-anchor .jstree-icon' ], "color:" + item.bg + " !important;");
                            styled[item.id] = true;
                        }
                        if (item.fg) {
                            insertRule([ 'li[id="' + item.id + '"] > .jstree-anchor' ], "color:" + item.fg + " !important;");
                            styled[item.id] = true;
                        }
                    }
                    finalItems.push(converted);
                    if (converted.state.opened) {
                        var children = itemsByParent[item.id];
                        fillItems(children, level + 1);
                    }
                });
            }
            _.each(itemsByParent[id], function(item) {
                fillItems(item, 0);
            });
            callback(finalItems);
            if (id == "#") {
                setTimeout(function() {
                    treeApi.select_node(finalItems[0].id);
                }, 10);
            }
        }
        function getItemPath(item) {
            var currentItem = item;
            var path = [];
            do {
                path.push(currentItem);
                if (currentItem.parent_id && itemsById[currentItem.parent_id]) {
                    currentItem = itemsById[currentItem.parent_id];
                } else {
                    currentItem = null;
                }
            } while (currentItem);
            return path.reverse();
        }
        wrapInner.jstree({
            core: {
                themes: {
                    variant: "large"
                },
                check_callback: function() {
                    return true;
                },
                data: function(node, callback) {
                    if (node.id == "#") {
                        loadItems(node.id, callback);
                        return;
                    }
                    loadItems(node.id, callback);
                },
                multiple: false
            }
        });
        wrapInner.on("select_node.jstree", function(ev, node) {
            if (!currentSelected || currentSelected.id != node.node.id) {
                path = getItemPath(itemsById[node.node.id]);
                renderBreadcrumbs(path);
            }
            currentSelected = node.node;
        });
        treeApi = wrapInner.jstree(true);
        wrap.on("loadItems", function(ev, li, item) {
            if (currentSelected.id === item.id) {
                return;
            }
            path = path.slice(0, li.index() + 1);
            renderBreadcrumbs(path);
            treeApi.deselect_all();
            treeApi.select_node(item.id);
        });
    };
    function repositionMainbody() {
        var logo = $("#header .page-logo");
        var logoPos = logo.position();
        var logoBottomPos = logoPos.top + logo.outerHeight();
        var mainBody = $("#mainbody").css({
            top: logoBottomPos + "px"
        });
        if (style === "tree" || style === "circle") {
            var mainBodyPos = mainBody.position();
            var windowHeight = $(window).height();
            mainBody.css("height", windowHeight - mainBodyPos.top - 20);
        }
    }
    $(window).load(function() {
        repositionMainbody();
    });
}(jQuery);