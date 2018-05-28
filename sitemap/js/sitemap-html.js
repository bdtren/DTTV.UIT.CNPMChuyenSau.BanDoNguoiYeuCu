(function(window, undefined) {
    var readyList, rootjQuery, core_strundefined = typeof undefined, location = window.location, document = window.document, docElem = document.documentElement, _jQuery = window.jQuery, _$ = window.$, class2type = {}, core_deletedIds = [], core_version = "1.10.2", core_concat = core_deletedIds.concat, core_push = core_deletedIds.push, core_slice = core_deletedIds.slice, core_indexOf = core_deletedIds.indexOf, core_toString = class2type.toString, core_hasOwn = class2type.hasOwnProperty, core_trim = core_version.trim, jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context, rootjQuery);
    }, core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, core_rnotwhite = /\S+/g, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, rvalidchars = /^[\],:{}\s]*$/, rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g, rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function(all, letter) {
        return letter.toUpperCase();
    }, completed = function(event) {
        if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
            detach();
            jQuery.ready();
        }
    }, detach = function() {
        if (document.addEventListener) {
            document.removeEventListener("DOMContentLoaded", completed, false);
            window.removeEventListener("load", completed, false);
        } else {
            document.detachEvent("onreadystatechange", completed);
            window.detachEvent("onload", completed);
        }
    };
    jQuery.fn = jQuery.prototype = {
        jquery: core_version,
        constructor: jQuery,
        init: function(selector, context, rootjQuery) {
            var match, elem;
            if (!selector) {
                return this;
            }
            if (typeof selector === "string") {
                if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
                    match = [ null, selector, null ];
                } else {
                    match = rquickExpr.exec(selector);
                }
                if (match && (match[1] || !context)) {
                    if (match[1]) {
                        context = context instanceof jQuery ? context[0] : context;
                        jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                            for (match in context) {
                                if (jQuery.isFunction(this[match])) {
                                    this[match](context[match]);
                                } else {
                                    this.attr(match, context[match]);
                                }
                            }
                        }
                        return this;
                    } else {
                        elem = document.getElementById(match[2]);
                        if (elem && elem.parentNode) {
                            if (elem.id !== match[2]) {
                                return rootjQuery.find(selector);
                            }
                            this.length = 1;
                            this[0] = elem;
                        }
                        this.context = document;
                        this.selector = selector;
                        return this;
                    }
                } else if (!context || context.jquery) {
                    return (context || rootjQuery).find(selector);
                } else {
                    return this.constructor(context).find(selector);
                }
            } else if (selector.nodeType) {
                this.context = this[0] = selector;
                this.length = 1;
                return this;
            } else if (jQuery.isFunction(selector)) {
                return rootjQuery.ready(selector);
            }
            if (selector.selector !== undefined) {
                this.selector = selector.selector;
                this.context = selector.context;
            }
            return jQuery.makeArray(selector, this);
        },
        selector: "",
        length: 0,
        toArray: function() {
            return core_slice.call(this);
        },
        get: function(num) {
            return num == null ? this.toArray() : num < 0 ? this[this.length + num] : this[num];
        },
        pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            ret.context = this.context;
            return ret;
        },
        each: function(callback, args) {
            return jQuery.each(this, callback, args);
        },
        ready: function(fn) {
            jQuery.ready.promise().done(fn);
            return this;
        },
        slice: function() {
            return this.pushStack(core_slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: core_push,
        sort: [].sort,
        splice: [].splice
    };
    jQuery.fn.init.prototype = jQuery.fn;
    jQuery.extend = jQuery.fn.extend = function() {
        var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[1] || {};
            i = 2;
        }
        if (typeof target !== "object" && !jQuery.isFunction(target)) {
            target = {};
        }
        if (length === i) {
            target = this;
            --i;
        }
        for (;i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];
                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }
                        target[name] = jQuery.extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    };
    jQuery.extend({
        expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
        noConflict: function(deep) {
            if (window.$ === jQuery) {
                window.$ = _$;
            }
            if (deep && window.jQuery === jQuery) {
                window.jQuery = _jQuery;
            }
            return jQuery;
        },
        isReady: false,
        readyWait: 1,
        holdReady: function(hold) {
            if (hold) {
                jQuery.readyWait++;
            } else {
                jQuery.ready(true);
            }
        },
        ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                return;
            }
            if (!document.body) {
                return setTimeout(jQuery.ready);
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
                return;
            }
            readyList.resolveWith(document, [ jQuery ]);
            if (jQuery.fn.trigger) {
                jQuery(document).trigger("ready").off("ready");
            }
        },
        isFunction: function(obj) {
            return jQuery.type(obj) === "function";
        },
        isArray: Array.isArray || function(obj) {
            return jQuery.type(obj) === "array";
        },
        isWindow: function(obj) {
            return obj != null && obj == obj.window;
        },
        isNumeric: function(obj) {
            return !isNaN(parseFloat(obj)) && isFinite(obj);
        },
        type: function(obj) {
            if (obj == null) {
                return String(obj);
            }
            return typeof obj === "object" || typeof obj === "function" ? class2type[core_toString.call(obj)] || "object" : typeof obj;
        },
        isPlainObject: function(obj) {
            var key;
            if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                return false;
            }
            try {
                if (obj.constructor && !core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }
            } catch (e) {
                return false;
            }
            if (jQuery.support.ownLast) {
                for (key in obj) {
                    return core_hasOwn.call(obj, key);
                }
            }
            for (key in obj) {}
            return key === undefined || core_hasOwn.call(obj, key);
        },
        isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
                return false;
            }
            return true;
        },
        error: function(msg) {
            throw new Error(msg);
        },
        parseHTML: function(data, context, keepScripts) {
            if (!data || typeof data !== "string") {
                return null;
            }
            if (typeof context === "boolean") {
                keepScripts = context;
                context = false;
            }
            context = context || document;
            var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
            if (parsed) {
                return [ context.createElement(parsed[1]) ];
            }
            parsed = jQuery.buildFragment([ data ], context, scripts);
            if (scripts) {
                jQuery(scripts).remove();
            }
            return jQuery.merge([], parsed.childNodes);
        },
        parseJSON: function(data) {
            if (window.JSON && window.JSON.parse) {
                return window.JSON.parse(data);
            }
            if (data === null) {
                return data;
            }
            if (typeof data === "string") {
                data = jQuery.trim(data);
                if (data) {
                    if (rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, ""))) {
                        return new Function("return " + data)();
                    }
                }
            }
            jQuery.error("Invalid JSON: " + data);
        },
        parseXML: function(data) {
            var xml, tmp;
            if (!data || typeof data !== "string") {
                return null;
            }
            try {
                if (window.DOMParser) {
                    tmp = new DOMParser();
                    xml = tmp.parseFromString(data, "text/xml");
                } else {
                    xml = new ActiveXObject("Microsoft.XMLDOM");
                    xml.async = "false";
                    xml.loadXML(data);
                }
            } catch (e) {
                xml = undefined;
            }
            if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
                jQuery.error("Invalid XML: " + data);
            }
            return xml;
        },
        noop: function() {},
        globalEval: function(data) {
            if (data && jQuery.trim(data)) {
                (window.execScript || function(data) {
                    window["eval"].call(window, data);
                })(data);
            }
        },
        camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },
        nodeName: function(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
        each: function(obj, callback, args) {
            var value, i = 0, length = obj.length, isArray = isArraylike(obj);
            if (args) {
                if (isArray) {
                    for (;i < length; i++) {
                        value = callback.apply(obj[i], args);
                        if (value === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callback.apply(obj[i], args);
                        if (value === false) {
                            break;
                        }
                    }
                }
            } else {
                if (isArray) {
                    for (;i < length; i++) {
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callback.call(obj[i], i, obj[i]);
                        if (value === false) {
                            break;
                        }
                    }
                }
            }
            return obj;
        },
        trim: core_trim && !core_trim.call("\ufeff ") ? function(text) {
            return text == null ? "" : core_trim.call(text);
        } : function(text) {
            return text == null ? "" : (text + "").replace(rtrim, "");
        },
        makeArray: function(arr, results) {
            var ret = results || [];
            if (arr != null) {
                if (isArraylike(Object(arr))) {
                    jQuery.merge(ret, typeof arr === "string" ? [ arr ] : arr);
                } else {
                    core_push.call(ret, arr);
                }
            }
            return ret;
        },
        inArray: function(elem, arr, i) {
            var len;
            if (arr) {
                if (core_indexOf) {
                    return core_indexOf.call(arr, elem, i);
                }
                len = arr.length;
                i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
                for (;i < len; i++) {
                    if (i in arr && arr[i] === elem) {
                        return i;
                    }
                }
            }
            return -1;
        },
        merge: function(first, second) {
            var l = second.length, i = first.length, j = 0;
            if (typeof l === "number") {
                for (;j < l; j++) {
                    first[i++] = second[j];
                }
            } else {
                while (second[j] !== undefined) {
                    first[i++] = second[j++];
                }
            }
            first.length = i;
            return first;
        },
        grep: function(elems, callback, inv) {
            var retVal, ret = [], i = 0, length = elems.length;
            inv = !!inv;
            for (;i < length; i++) {
                retVal = !!callback(elems[i], i);
                if (inv !== retVal) {
                    ret.push(elems[i]);
                }
            }
            return ret;
        },
        map: function(elems, callback, arg) {
            var value, i = 0, length = elems.length, isArray = isArraylike(elems), ret = [];
            if (isArray) {
                for (;i < length; i++) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret[ret.length] = value;
                    }
                }
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);
                    if (value != null) {
                        ret[ret.length] = value;
                    }
                }
            }
            return core_concat.apply([], ret);
        },
        guid: 1,
        proxy: function(fn, context) {
            var args, proxy, tmp;
            if (typeof context === "string") {
                tmp = fn[context];
                context = fn;
                fn = tmp;
            }
            if (!jQuery.isFunction(fn)) {
                return undefined;
            }
            args = core_slice.call(arguments, 2);
            proxy = function() {
                return fn.apply(context || this, args.concat(core_slice.call(arguments)));
            };
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;
            return proxy;
        },
        access: function(elems, fn, key, value, chainable, emptyGet, raw) {
            var i = 0, length = elems.length, bulk = key == null;
            if (jQuery.type(key) === "object") {
                chainable = true;
                for (i in key) {
                    jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
                }
            } else if (value !== undefined) {
                chainable = true;
                if (!jQuery.isFunction(value)) {
                    raw = true;
                }
                if (bulk) {
                    if (raw) {
                        fn.call(elems, value);
                        fn = null;
                    } else {
                        bulk = fn;
                        fn = function(elem, key, value) {
                            return bulk.call(jQuery(elem), value);
                        };
                    }
                }
                if (fn) {
                    for (;i < length; i++) {
                        fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                    }
                }
            }
            return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
        },
        now: function() {
            return new Date().getTime();
        },
        swap: function(elem, options, callback, args) {
            var ret, name, old = {};
            for (name in options) {
                old[name] = elem.style[name];
                elem.style[name] = options[name];
            }
            ret = callback.apply(elem, args || []);
            for (name in options) {
                elem.style[name] = old[name];
            }
            return ret;
        }
    });
    jQuery.ready.promise = function(obj) {
        if (!readyList) {
            readyList = jQuery.Deferred();
            if (document.readyState === "complete") {
                setTimeout(jQuery.ready);
            } else if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", completed, false);
                window.addEventListener("load", completed, false);
            } else {
                document.attachEvent("onreadystatechange", completed);
                window.attachEvent("onload", completed);
                var top = false;
                try {
                    top = window.frameElement == null && document.documentElement;
                } catch (e) {}
                if (top && top.doScroll) {
                    (function doScrollCheck() {
                        if (!jQuery.isReady) {
                            try {
                                top.doScroll("left");
                            } catch (e) {
                                return setTimeout(doScrollCheck, 50);
                            }
                            detach();
                            jQuery.ready();
                        }
                    })();
                }
            }
        }
        return readyList.promise(obj);
    };
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function isArraylike(obj) {
        var length = obj.length, type = jQuery.type(obj);
        if (jQuery.isWindow(obj)) {
            return false;
        }
        if (obj.nodeType === 1 && length) {
            return true;
        }
        return type === "array" || type !== "function" && (length === 0 || typeof length === "number" && length > 0 && length - 1 in obj);
    }
    rootjQuery = jQuery(document);
    (function(window, undefined) {
        var i, support, cachedruns, Expr, getText, isXML, compile, outermostContext, sortInput, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + -new Date(), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), hasDuplicate = false, sortOrder = function(a, b) {
            if (a === b) {
                hasDuplicate = true;
                return 0;
            }
            return 0;
        }, strundefined = typeof undefined, MAX_NEGATIVE = 1 << 31, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = arr.indexOf || function(elem) {
            var i = 0, len = this.length;
            for (;i < len; i++) {
                if (this[i] === elem) {
                    return i;
                }
            }
            return -1;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", identifier = characterEncoding.replace("w", "w#"), attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + "*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]", pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)", rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rsibling = new RegExp(whitespace + "*[+~]"), rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + characterEncoding + ")"),
            CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
            TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rescape = /'|\\/g, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), funescape = function(_, escaped, escapedWhitespace) {
            var high = "0x" + escaped - 65536;
            return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        };
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push = {
                apply: arr.length ? function(target, els) {
                    push_native.apply(target, slice.call(els));
                } : function(target, els) {
                    var j = target.length, i = 0;
                    while (target[j++] = els[i++]) {}
                    target.length = j - 1;
                }
            };
        }
        function Sizzle(selector, context, results, seed) {
            var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
            if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                setDocument(context);
            }
            context = context || document;
            results = results || [];
            if (!selector || typeof selector !== "string") {
                return results;
            }
            if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
                return [];
            }
            if (documentIsHTML && !seed) {
                if (match = rquickExpr.exec(selector)) {
                    if (m = match[1]) {
                        if (nodeType === 9) {
                            elem = context.getElementById(m);
                            if (elem && elem.parentNode) {
                                if (elem.id === m) {
                                    results.push(elem);
                                    return results;
                                }
                            } else {
                                return results;
                            }
                        } else {
                            if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                results.push(elem);
                                return results;
                            }
                        }
                    } else if (match[2]) {
                        push.apply(results, context.getElementsByTagName(selector));
                        return results;
                    } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                        push.apply(results, context.getElementsByClassName(m));
                        return results;
                    }
                }
                if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                    nid = old = expando;
                    newContext = context;
                    newSelector = nodeType === 9 && selector;
                    if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
                        groups = tokenize(selector);
                        if (old = context.getAttribute("id")) {
                            nid = old.replace(rescape, "\\$&");
                        } else {
                            context.setAttribute("id", nid);
                        }
                        nid = "[id='" + nid + "'] ";
                        i = groups.length;
                        while (i--) {
                            groups[i] = nid + toSelector(groups[i]);
                        }
                        newContext = rsibling.test(selector) && context.parentNode || context;
                        newSelector = groups.join(",");
                    }
                    if (newSelector) {
                        try {
                            push.apply(results, newContext.querySelectorAll(newSelector));
                            return results;
                        } catch (qsaError) {} finally {
                            if (!old) {
                                context.removeAttribute("id");
                            }
                        }
                    }
                }
            }
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        function createCache() {
            var keys = [];
            function cache(key, value) {
                if (keys.push(key += " ") > Expr.cacheLength) {
                    delete cache[keys.shift()];
                }
                return cache[key] = value;
            }
            return cache;
        }
        function markFunction(fn) {
            fn[expando] = true;
            return fn;
        }
        function assert(fn) {
            var div = document.createElement("div");
            try {
                return !!fn(div);
            } catch (e) {
                return false;
            } finally {
                if (div.parentNode) {
                    div.parentNode.removeChild(div);
                }
                div = null;
            }
        }
        function addHandle(attrs, handler) {
            var arr = attrs.split("|"), i = attrs.length;
            while (i--) {
                Expr.attrHandle[arr[i]] = handler;
            }
        }
        function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
            if (diff) {
                return diff;
            }
            if (cur) {
                while (cur = cur.nextSibling) {
                    if (cur === b) {
                        return -1;
                    }
                }
            }
            return a ? 1 : -1;
        }
        function createInputPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
            };
        }
        function createButtonPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type;
            };
        }
        function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches) {
                    var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                    while (i--) {
                        if (seed[j = matchIndexes[i]]) {
                            seed[j] = !(matches[j] = seed[j]);
                        }
                    }
                });
            });
        }
        isXML = Sizzle.isXML = function(elem) {
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement ? documentElement.nodeName !== "HTML" : false;
        };
        support = Sizzle.support = {};
        setDocument = Sizzle.setDocument = function(node) {
            var doc = node ? node.ownerDocument || node : preferredDoc, parent = doc.defaultView;
            if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                return document;
            }
            document = doc;
            docElem = doc.documentElement;
            documentIsHTML = !isXML(doc);
            if (parent && parent.attachEvent && parent !== parent.top) {
                parent.attachEvent("onbeforeunload", function() {
                    setDocument();
                });
            }
            support.attributes = assert(function(div) {
                div.className = "i";
                return !div.getAttribute("className");
            });
            support.getElementsByTagName = assert(function(div) {
                div.appendChild(doc.createComment(""));
                return !div.getElementsByTagName("*").length;
            });
            support.getElementsByClassName = assert(function(div) {
                div.innerHTML = "<div class='a'></div><div class='a i'></div>";
                div.firstChild.className = "i";
                return div.getElementsByClassName("i").length === 2;
            });
            support.getById = assert(function(div) {
                docElem.appendChild(div).id = expando;
                return !doc.getElementsByName || !doc.getElementsByName(expando).length;
            });
            if (support.getById) {
                Expr.find["ID"] = function(id, context) {
                    if (typeof context.getElementById !== strundefined && documentIsHTML) {
                        var m = context.getElementById(id);
                        return m && m.parentNode ? [ m ] : [];
                    }
                };
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        return elem.getAttribute("id") === attrId;
                    };
                };
            } else {
                delete Expr.find["ID"];
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
                        return node && node.value === attrId;
                    };
                };
            }
            Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                if (typeof context.getElementsByTagName !== strundefined) {
                    return context.getElementsByTagName(tag);
                }
            } : function(tag, context) {
                var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                if (tag === "*") {
                    while (elem = results[i++]) {
                        if (elem.nodeType === 1) {
                            tmp.push(elem);
                        }
                    }
                    return tmp;
                }
                return results;
            };
            Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                if (typeof context.getElementsByClassName !== strundefined && documentIsHTML) {
                    return context.getElementsByClassName(className);
                }
            };
            rbuggyMatches = [];
            rbuggyQSA = [];
            if (support.qsa = rnative.test(doc.querySelectorAll)) {
                assert(function(div) {
                    div.innerHTML = "<select><option selected=''></option></select>";
                    if (!div.querySelectorAll("[selected]").length) {
                        rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                    }
                    if (!div.querySelectorAll(":checked").length) {
                        rbuggyQSA.push(":checked");
                    }
                });
                assert(function(div) {
                    var input = doc.createElement("input");
                    input.setAttribute("type", "hidden");
                    div.appendChild(input).setAttribute("t", "");
                    if (div.querySelectorAll("[t^='']").length) {
                        rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                    }
                    if (!div.querySelectorAll(":enabled").length) {
                        rbuggyQSA.push(":enabled", ":disabled");
                    }
                    div.querySelectorAll("*,:x");
                    rbuggyQSA.push(",.*:");
                });
            }
            if (support.matchesSelector = rnative.test(matches = docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                assert(function(div) {
                    support.disconnectedMatch = matches.call(div, "div");
                    matches.call(div, "[s!='']:x");
                    rbuggyMatches.push("!=", pseudos);
                });
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            contains = rnative.test(docElem.contains) || docElem.compareDocumentPosition ? function(a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return true;
                        }
                    }
                }
                return false;
            };
            sortOrder = docElem.compareDocumentPosition ? function(a, b) {
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                if (compare) {
                    if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                        if (a === doc || contains(preferredDoc, a)) {
                            return -1;
                        }
                        if (b === doc || contains(preferredDoc, b)) {
                            return 1;
                        }
                        return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
                    }
                    return compare & 4 ? -1 : 1;
                }
                return a.compareDocumentPosition ? -1 : 1;
            } : function(a, b) {
                var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                } else if (!aup || !bup) {
                    return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
                } else if (aup === bup) {
                    return siblingCheck(a, b);
                }
                cur = a;
                while (cur = cur.parentNode) {
                    ap.unshift(cur);
                }
                cur = b;
                while (cur = cur.parentNode) {
                    bp.unshift(cur);
                }
                while (ap[i] === bp[i]) {
                    i++;
                }
                return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
            };
            return doc;
        };
        Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements);
        };
        Sizzle.matchesSelector = function(elem, expr) {
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem);
            }
            expr = expr.replace(rattributeQuotes, "='$1']");
            if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                try {
                    var ret = matches.call(elem, expr);
                    if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                        return ret;
                    }
                } catch (e) {}
            }
            return Sizzle(expr, document, null, [ elem ]).length > 0;
        };
        Sizzle.contains = function(context, elem) {
            if ((context.ownerDocument || context) !== document) {
                setDocument(context);
            }
            return contains(context, elem);
        };
        Sizzle.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
            return val === undefined ? support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null : val;
        };
        Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        Sizzle.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i = 0;
            hasDuplicate = !support.detectDuplicates;
            sortInput = !support.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
                while (elem = results[i++]) {
                    if (elem === results[i]) {
                        j = duplicates.push(i);
                    }
                }
                while (j--) {
                    results.splice(duplicates[j], 1);
                }
            }
            return results;
        };
        getText = Sizzle.getText = function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (!nodeType) {
                for (;node = elem[i]; i++) {
                    ret += getText(node);
                }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                if (typeof elem.textContent === "string") {
                    return elem.textContent;
                } else {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        ret += getText(elem);
                    }
                }
            } else if (nodeType === 3 || nodeType === 4) {
                return elem.nodeValue;
            }
            return ret;
        };
        Expr = Sizzle.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(match) {
                    match[1] = match[1].replace(runescape, funescape);
                    match[3] = (match[4] || match[5] || "").replace(runescape, funescape);
                    if (match[2] === "~=") {
                        match[3] = " " + match[3] + " ";
                    }
                    return match.slice(0, 4);
                },
                CHILD: function(match) {
                    match[1] = match[1].toLowerCase();
                    if (match[1].slice(0, 3) === "nth") {
                        if (!match[3]) {
                            Sizzle.error(match[0]);
                        }
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +(match[7] + match[8] || match[3] === "odd");
                    } else if (match[3]) {
                        Sizzle.error(match[0]);
                    }
                    return match;
                },
                PSEUDO: function(match) {
                    var excess, unquoted = !match[5] && match[2];
                    if (matchExpr["CHILD"].test(match[0])) {
                        return null;
                    }
                    if (match[3] && match[4] !== undefined) {
                        match[2] = match[4];
                    } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess);
                    }
                    return match.slice(0, 3);
                }
            },
            filter: {
                TAG: function(nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === "*" ? function() {
                        return true;
                    } : function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },
                CLASS: function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "");
                    });
                },
                ATTR: function(name, operator, check) {
                    return function(elem) {
                        var result = Sizzle.attr(elem, name);
                        if (result == null) {
                            return operator === "!=";
                        }
                        if (!operator) {
                            return true;
                        }
                        result += "";
                        return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                    };
                },
                CHILD: function(type, what, argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                    return first === 1 && last === 0 ? function(elem) {
                        return !!elem.parentNode;
                    } : function(elem, context, xml) {
                        var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType;
                        if (parent) {
                            if (simple) {
                                while (dir) {
                                    node = elem;
                                    while (node = node[dir]) {
                                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                            return false;
                                        }
                                    }
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }
                            start = [ forward ? parent.firstChild : parent.lastChild ];
                            if (forward && useCache) {
                                outerCache = parent[expando] || (parent[expando] = {});
                                cache = outerCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = cache[0] === dirruns && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];
                                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                    if (node.nodeType === 1 && ++diff && node === elem) {
                                        outerCache[type] = [ dirruns, nodeIndex, diff ];
                                        break;
                                    }
                                }
                            } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                                diff = cache[1];
                            } else {
                                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                        if (useCache) {
                                            (node[expando] || (node[expando] = {}))[type] = [ dirruns, diff ];
                                        }
                                        if (node === elem) {
                                            break;
                                        }
                                    }
                                }
                            }
                            diff -= last;
                            return diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                PSEUDO: function(pseudo, argument) {
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                    if (fn[expando]) {
                        return fn(argument);
                    }
                    if (fn.length > 1) {
                        args = [ pseudo, pseudo, "", argument ];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                            var idx, matched = fn(seed, argument), i = matched.length;
                            while (i--) {
                                idx = indexOf.call(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i]);
                            }
                        }) : function(elem) {
                            return fn(elem, 0, args);
                        };
                    }
                    return fn;
                }
            },
            pseudos: {
                not: markFunction(function(selector) {
                    var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                        while (i--) {
                            if (elem = unmatched[i]) {
                                seed[i] = !(matches[i] = elem);
                            }
                        }
                    }) : function(elem, context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        return !results.pop();
                    };
                }),
                has: markFunction(function(selector) {
                    return function(elem) {
                        return Sizzle(selector, elem).length > 0;
                    };
                }),
                contains: markFunction(function(text) {
                    return function(elem) {
                        return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                    };
                }),
                lang: markFunction(function(lang) {
                    if (!ridentifier.test(lang || "")) {
                        Sizzle.error("unsupported lang: " + lang);
                    }
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function(elem) {
                        var elemLang;
                        do {
                            if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                elemLang = elemLang.toLowerCase();
                                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                            }
                        } while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return false;
                    };
                }),
                target: function(elem) {
                    var hash = window.location && window.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                root: function(elem) {
                    return elem === docElem;
                },
                focus: function(elem) {
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                enabled: function(elem) {
                    return elem.disabled === false;
                },
                disabled: function(elem) {
                    return elem.disabled === true;
                },
                checked: function(elem) {
                    var nodeName = elem.nodeName.toLowerCase();
                    return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                },
                selected: function(elem) {
                    if (elem.parentNode) {
                        elem.parentNode.selectedIndex;
                    }
                    return elem.selected === true;
                },
                empty: function(elem) {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) {
                            return false;
                        }
                    }
                    return true;
                },
                parent: function(elem) {
                    return !Expr.pseudos["empty"](elem);
                },
                header: function(elem) {
                    return rheader.test(elem.nodeName);
                },
                input: function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                button: function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === "button" || name === "button";
                },
                text: function(elem) {
                    var attr;
                    return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type);
                },
                first: createPositionalPseudo(function() {
                    return [ 0 ];
                }),
                last: createPositionalPseudo(function(matchIndexes, length) {
                    return [ length - 1 ];
                }),
                eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                    return [ argument < 0 ? argument + length : argument ];
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 0;
                    for (;i < length; i += 2) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    var i = 1;
                    for (;i < length; i += 2) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (;--i >= 0; ) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (;++i < length; ) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                })
            }
        };
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        for (i in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in {
            submit: true,
            reset: true
        }) {
            Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        function tokenize(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
                return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) {
                        soFar = soFar.slice(match[0].length) || soFar;
                    }
                    groups.push(tokens = []);
                }
                matched = false;
                if (match = rcombinators.exec(soFar)) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: match[0].replace(rtrim, " ")
                    });
                    soFar = soFar.slice(matched.length);
                }
                for (type in Expr.filter) {
                    if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: type,
                            matches: match
                        });
                        soFar = soFar.slice(matched.length);
                    }
                }
                if (!matched) {
                    break;
                }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
        }
        function toSelector(tokens) {
            var i = 0, len = tokens.length, selector = "";
            for (;i < len; i++) {
                selector += tokens[i].value;
            }
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, checkNonElements = base && dir === "parentNode", doneName = done++;
            return combinator.first ? function(elem, context, xml) {
                while (elem = elem[dir]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                        return matcher(elem, context, xml);
                    }
                }
            } : function(elem, context, xml) {
                var data, cache, outerCache, dirkey = dirruns + " " + doneName;
                if (xml) {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            if (matcher(elem, context, xml)) {
                                return true;
                            }
                        }
                    }
                } else {
                    while (elem = elem[dir]) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            outerCache = elem[expando] || (elem[expando] = {});
                            if ((cache = outerCache[dir]) && cache[0] === dirkey) {
                                if ((data = cache[1]) === true || data === cachedruns) {
                                    return data === true;
                                }
                            } else {
                                cache = outerCache[dir] = [ dirkey ];
                                cache[1] = matcher(elem, context, xml) || cachedruns;
                                if (cache[1] === true) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            };
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i = matchers.length;
                while (i--) {
                    if (!matchers[i](elem, context, xml)) {
                        return false;
                    }
                }
                return true;
            } : matchers[0];
        }
        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
            for (;i < len; i++) {
                if (elem = unmatched[i]) {
                    if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) {
                            map.push(i);
                        }
                    }
                }
            }
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
                postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
                postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
                var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                if (matcher) {
                    matcher(matcherIn, matcherOut, context, xml);
                }
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);
                    i = temp.length;
                    while (i--) {
                        if (elem = temp[i]) {
                            matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                        }
                    }
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            temp = [];
                            i = matcherOut.length;
                            while (i--) {
                                if (elem = matcherOut[i]) {
                                    temp.push(matcherIn[i] = elem);
                                }
                            }
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        i = matcherOut.length;
                        while (i--) {
                            if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
                                seed[temp] = !(results[temp] = elem);
                            }
                        }
                    }
                } else {
                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) {
                        postFinder(null, results, matcherOut, xml);
                    } else {
                        push.apply(results, matcherOut);
                    }
                }
            });
        }
        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [ function(elem, context, xml) {
                return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            } ];
            for (;i < len; i++) {
                if (matcher = Expr.relative[tokens[i].type]) {
                    matchers = [ addCombinator(elementMatcher(matchers), matcher) ];
                } else {
                    matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                    if (matcher[expando]) {
                        j = ++i;
                        for (;j < len; j++) {
                            if (Expr.relative[tokens[j].type]) {
                                break;
                            }
                        }
                        return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                            value: tokens[i - 2].type === " " ? "*" : ""
                        })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                    }
                    matchers.push(matcher);
                }
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var matcherCachedRuns = 0, bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, expandContext) {
                var elem, j, matcher, setMatched = [], matchedCount = 0, i = "0", unmatched = seed && [], outermost = expandContext != null, contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1;
                if (outermost) {
                    outermostContext = context !== document && context;
                    cachedruns = matcherCachedRuns;
                }
                for (;(elem = elems[i]) != null; i++) {
                    if (byElement && elem) {
                        j = 0;
                        while (matcher = elementMatchers[j++]) {
                            if (matcher(elem, context, xml)) {
                                results.push(elem);
                                break;
                            }
                        }
                        if (outermost) {
                            dirruns = dirrunsUnique;
                            cachedruns = ++matcherCachedRuns;
                        }
                    }
                    if (bySet) {
                        if (elem = !matcher && elem) {
                            matchedCount--;
                        }
                        if (seed) {
                            unmatched.push(elem);
                        }
                    }
                }
                matchedCount += i;
                if (bySet && i !== matchedCount) {
                    j = 0;
                    while (matcher = setMatchers[j++]) {
                        matcher(unmatched, setMatched, context, xml);
                    }
                    if (seed) {
                        if (matchedCount > 0) {
                            while (i--) {
                                if (!(unmatched[i] || setMatched[i])) {
                                    setMatched[i] = pop.call(results);
                                }
                            }
                        }
                        setMatched = condense(setMatched);
                    }
                    push.apply(results, setMatched);
                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                        Sizzle.uniqueSort(results);
                    }
                }
                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }
                return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        compile = Sizzle.compile = function(selector, group) {
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                if (!group) {
                    group = tokenize(selector);
                }
                i = group.length;
                while (i--) {
                    cached = matcherFromTokens(group[i]);
                    if (cached[expando]) {
                        setMatchers.push(cached);
                    } else {
                        elementMatchers.push(cached);
                    }
                }
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
            }
            return cached;
        };
        function multipleContexts(selector, contexts, results) {
            var i = 0, len = contexts.length;
            for (;i < len; i++) {
                Sizzle(selector, contexts[i], results);
            }
            return results;
        }
        function select(selector, context, results, seed) {
            var i, tokens, token, type, find, match = tokenize(selector);
            if (!seed) {
                if (match.length === 1) {
                    tokens = match[0] = match[0].slice(0);
                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                        context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                        if (!context) {
                            return results;
                        }
                        selector = selector.slice(tokens.shift().value.length);
                    }
                    i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                    while (i--) {
                        token = tokens[i];
                        if (Expr.relative[type = token.type]) {
                            break;
                        }
                        if (find = Expr.find[type]) {
                            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && context.parentNode || context)) {
                                tokens.splice(i, 1);
                                selector = seed.length && toSelector(tokens);
                                if (!selector) {
                                    push.apply(results, seed);
                                    return results;
                                }
                                break;
                            }
                        }
                    }
                }
            }
            compile(selector, match)(seed, context, !documentIsHTML, results, rsibling.test(selector));
            return results;
        }
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        support.detectDuplicates = hasDuplicate;
        setDocument();
        support.sortDetached = assert(function(div1) {
            return div1.compareDocumentPosition(document.createElement("div")) & 1;
        });
        if (!assert(function(div) {
            div.innerHTML = "<a href='#'></a>";
            return div.firstChild.getAttribute("href") === "#";
        })) {
            addHandle("type|href|height|width", function(elem, name, isXML) {
                if (!isXML) {
                    return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                }
            });
        }
        if (!support.attributes || !assert(function(div) {
            div.innerHTML = "<input/>";
            div.firstChild.setAttribute("value", "");
            return div.firstChild.getAttribute("value") === "";
        })) {
            addHandle("value", function(elem, name, isXML) {
                if (!isXML && elem.nodeName.toLowerCase() === "input") {
                    return elem.defaultValue;
                }
            });
        }
        if (!assert(function(div) {
            return div.getAttribute("disabled") == null;
        })) {
            addHandle(booleans, function(elem, name, isXML) {
                var val;
                if (!isXML) {
                    return (val = elem.getAttributeNode(name)) && val.specified ? val.value : elem[name] === true ? name.toLowerCase() : null;
                }
            });
        }
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;
    })(window);
    var optionsCache = {};
    function createOptions(options) {
        var object = optionsCache[options] = {};
        jQuery.each(options.match(core_rnotwhite) || [], function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    jQuery.Callbacks = function(options) {
        options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
        var firing, memory, fired, firingLength, firingIndex, firingStart, list = [], stack = !options.once && [], fire = function(data) {
            memory = options.memory && data;
            fired = true;
            firingIndex = firingStart || 0;
            firingStart = 0;
            firingLength = list.length;
            firing = true;
            for (;list && firingIndex < firingLength; firingIndex++) {
                if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
                    memory = false;
                    break;
                }
            }
            firing = false;
            if (list) {
                if (stack) {
                    if (stack.length) {
                        fire(stack.shift());
                    }
                } else if (memory) {
                    list = [];
                } else {
                    self.disable();
                }
            }
        }, self = {
            add: function() {
                if (list) {
                    var start = list.length;
                    (function add(args) {
                        jQuery.each(args, function(_, arg) {
                            var type = jQuery.type(arg);
                            if (type === "function") {
                                if (!options.unique || !self.has(arg)) {
                                    list.push(arg);
                                }
                            } else if (arg && arg.length && type !== "string") {
                                add(arg);
                            }
                        });
                    })(arguments);
                    if (firing) {
                        firingLength = list.length;
                    } else if (memory) {
                        firingStart = start;
                        fire(memory);
                    }
                }
                return this;
            },
            remove: function() {
                if (list) {
                    jQuery.each(arguments, function(_, arg) {
                        var index;
                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                            list.splice(index, 1);
                            if (firing) {
                                if (index <= firingLength) {
                                    firingLength--;
                                }
                                if (index <= firingIndex) {
                                    firingIndex--;
                                }
                            }
                        }
                    });
                }
                return this;
            },
            has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
            },
            empty: function() {
                list = [];
                firingLength = 0;
                return this;
            },
            disable: function() {
                list = stack = memory = undefined;
                return this;
            },
            disabled: function() {
                return !list;
            },
            lock: function() {
                stack = undefined;
                if (!memory) {
                    self.disable();
                }
                return this;
            },
            locked: function() {
                return !stack;
            },
            fireWith: function(context, args) {
                if (list && (!fired || stack)) {
                    args = args || [];
                    args = [ context, args.slice ? args.slice() : args ];
                    if (firing) {
                        stack.push(args);
                    } else {
                        fire(args);
                    }
                }
                return this;
            },
            fire: function() {
                self.fireWith(this, arguments);
                return this;
            },
            fired: function() {
                return !!fired;
            }
        };
        return self;
    };
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [ [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ], [ "notify", "progress", jQuery.Callbacks("memory") ] ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    deferred.done(arguments).fail(arguments);
                    return this;
                },
                then: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(i, tuple) {
                            var action = tuple[0], fn = jQuery.isFunction(fns[i]) && fns[i];
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                if (returned && jQuery.isFunction(returned.promise)) {
                                    returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                                } else {
                                    newDefer[action + "With"](this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments);
                                }
                            });
                        });
                        fns = null;
                    }).promise();
                },
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {};
            promise.pipe = promise.then;
            jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[3];
                promise[tuple[1]] = list.add;
                if (stateString) {
                    list.add(function() {
                        state = stateString;
                    }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
                }
                deferred[tuple[0]] = function() {
                    deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                    return this;
                };
                deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
                func.call(deferred, deferred);
            }
            return deferred;
        },
        when: function(subordinate) {
            var i = 0, resolveValues = core_slice.call(arguments), length = resolveValues.length, remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, deferred = remaining === 1 ? subordinate : jQuery.Deferred(), updateFunc = function(i, contexts, values) {
                return function(value) {
                    contexts[i] = this;
                    values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
                    if (values === progressValues) {
                        deferred.notifyWith(contexts, values);
                    } else if (!--remaining) {
                        deferred.resolveWith(contexts, values);
                    }
                };
            }, progressValues, progressContexts, resolveContexts;
            if (length > 1) {
                progressValues = new Array(length);
                progressContexts = new Array(length);
                resolveContexts = new Array(length);
                for (;i < length; i++) {
                    if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                        resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
                    } else {
                        --remaining;
                    }
                }
            }
            if (!remaining) {
                deferred.resolveWith(resolveContexts, resolveValues);
            }
            return deferred.promise();
        }
    });
    jQuery.support = function(support) {
        var all, a, input, select, fragment, opt, eventName, isSupported, i, div = document.createElement("div");
        div.setAttribute("className", "t");
        div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        all = div.getElementsByTagName("*") || [];
        a = div.getElementsByTagName("a")[0];
        if (!a || !a.style || !all.length) {
            return support;
        }
        select = document.createElement("select");
        opt = select.appendChild(document.createElement("option"));
        input = div.getElementsByTagName("input")[0];
        a.style.cssText = "top:1px;float:left;opacity:.5";
        support.getSetAttribute = div.className !== "t";
        support.leadingWhitespace = div.firstChild.nodeType === 3;
        support.tbody = !div.getElementsByTagName("tbody").length;
        support.htmlSerialize = !!div.getElementsByTagName("link").length;
        support.style = /top/.test(a.getAttribute("style"));
        support.hrefNormalized = a.getAttribute("href") === "/a";
        support.opacity = /^0.5/.test(a.style.opacity);
        support.cssFloat = !!a.style.cssFloat;
        support.checkOn = !!input.value;
        support.optSelected = opt.selected;
        support.enctype = !!document.createElement("form").enctype;
        support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
        support.inlineBlockNeedsLayout = false;
        support.shrinkWrapBlocks = false;
        support.pixelPosition = false;
        support.deleteExpando = true;
        support.noCloneEvent = true;
        support.reliableMarginRight = true;
        support.boxSizingReliable = true;
        input.checked = true;
        support.noCloneChecked = input.cloneNode(true).checked;
        select.disabled = true;
        support.optDisabled = !opt.disabled;
        try {
            delete div.test;
        } catch (e) {
            support.deleteExpando = false;
        }
        input = document.createElement("input");
        input.setAttribute("value", "");
        support.input = input.getAttribute("value") === "";
        input.value = "t";
        input.setAttribute("type", "radio");
        support.radioValue = input.value === "t";
        input.setAttribute("checked", "t");
        input.setAttribute("name", "t");
        fragment = document.createDocumentFragment();
        fragment.appendChild(input);
        support.appendChecked = input.checked;
        support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;
        if (div.attachEvent) {
            div.attachEvent("onclick", function() {
                support.noCloneEvent = false;
            });
            div.cloneNode(true).click();
        }
        for (i in {
            submit: true,
            change: true,
            focusin: true
        }) {
            div.setAttribute(eventName = "on" + i, "t");
            support[i + "Bubbles"] = eventName in window || div.attributes[eventName].expando === false;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        for (i in jQuery(support)) {
            break;
        }
        support.ownLast = i !== "0";
        jQuery(function() {
            var container, marginDiv, tds, divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", body = document.getElementsByTagName("body")[0];
            if (!body) {
                return;
            }
            container = document.createElement("div");
            container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
            body.appendChild(container).appendChild(div);
            div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            tds = div.getElementsByTagName("td");
            tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
            isSupported = tds[0].offsetHeight === 0;
            tds[0].style.display = "";
            tds[1].style.display = "none";
            support.reliableHiddenOffsets = isSupported && tds[0].offsetHeight === 0;
            div.innerHTML = "";
            div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
            jQuery.swap(body, body.style.zoom != null ? {
                zoom: 1
            } : {}, function() {
                support.boxSizing = div.offsetWidth === 4;
            });
            if (window.getComputedStyle) {
                support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
                support.boxSizingReliable = (window.getComputedStyle(div, null) || {
                    width: "4px"
                }).width === "4px";
                marginDiv = div.appendChild(document.createElement("div"));
                marginDiv.style.cssText = div.style.cssText = divReset;
                marginDiv.style.marginRight = marginDiv.style.width = "0";
                div.style.width = "1px";
                support.reliableMarginRight = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight);
            }
            if (typeof div.style.zoom !== core_strundefined) {
                div.innerHTML = "";
                div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
                support.inlineBlockNeedsLayout = div.offsetWidth === 3;
                div.style.display = "block";
                div.innerHTML = "<div></div>";
                div.firstChild.style.width = "5px";
                support.shrinkWrapBlocks = div.offsetWidth !== 3;
                if (support.inlineBlockNeedsLayout) {
                    body.style.zoom = 1;
                }
            }
            body.removeChild(container);
            container = div = tds = marginDiv = null;
        });
        all = select = fragment = opt = a = input = null;
        return support;
    }({});
    var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, rmultiDash = /([A-Z])/g;
    function internalData(elem, name, data, pvt) {
        if (!jQuery.acceptData(elem)) {
            return;
        }
        var ret, thisCache, internalKey = jQuery.expando, isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
        if ((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === "string") {
            return;
        }
        if (!id) {
            if (isNode) {
                id = elem[internalKey] = core_deletedIds.pop() || jQuery.guid++;
            } else {
                id = internalKey;
            }
        }
        if (!cache[id]) {
            cache[id] = isNode ? {} : {
                toJSON: jQuery.noop
            };
        }
        if (typeof name === "object" || typeof name === "function") {
            if (pvt) {
                cache[id] = jQuery.extend(cache[id], name);
            } else {
                cache[id].data = jQuery.extend(cache[id].data, name);
            }
        }
        thisCache = cache[id];
        if (!pvt) {
            if (!thisCache.data) {
                thisCache.data = {};
            }
            thisCache = thisCache.data;
        }
        if (data !== undefined) {
            thisCache[jQuery.camelCase(name)] = data;
        }
        if (typeof name === "string") {
            ret = thisCache[name];
            if (ret == null) {
                ret = thisCache[jQuery.camelCase(name)];
            }
        } else {
            ret = thisCache;
        }
        return ret;
    }
    function internalRemoveData(elem, name, pvt) {
        if (!jQuery.acceptData(elem)) {
            return;
        }
        var thisCache, i, isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[jQuery.expando] : jQuery.expando;
        if (!cache[id]) {
            return;
        }
        if (name) {
            thisCache = pvt ? cache[id] : cache[id].data;
            if (thisCache) {
                if (!jQuery.isArray(name)) {
                    if (name in thisCache) {
                        name = [ name ];
                    } else {
                        name = jQuery.camelCase(name);
                        if (name in thisCache) {
                            name = [ name ];
                        } else {
                            name = name.split(" ");
                        }
                    }
                } else {
                    name = name.concat(jQuery.map(name, jQuery.camelCase));
                }
                i = name.length;
                while (i--) {
                    delete thisCache[name[i]];
                }
                if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
                    return;
                }
            }
        }
        if (!pvt) {
            delete cache[id].data;
            if (!isEmptyDataObject(cache[id])) {
                return;
            }
        }
        if (isNode) {
            jQuery.cleanData([ elem ], true);
        } else if (jQuery.support.deleteExpando || cache != cache.window) {
            delete cache[id];
        } else {
            cache[id] = null;
        }
    }
    jQuery.extend({
        cache: {},
        noData: {
            applet: true,
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(elem) {
            elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
            return !!elem && !isEmptyDataObject(elem);
        },
        data: function(elem, name, data) {
            return internalData(elem, name, data);
        },
        removeData: function(elem, name) {
            return internalRemoveData(elem, name);
        },
        _data: function(elem, name, data) {
            return internalData(elem, name, data, true);
        },
        _removeData: function(elem, name) {
            return internalRemoveData(elem, name, true);
        },
        acceptData: function(elem) {
            if (elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9) {
                return false;
            }
            var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()];
            return !noData || noData !== true && elem.getAttribute("classid") === noData;
        }
    });
    jQuery.fn.extend({
        data: function(key, value) {
            var attrs, name, data = null, i = 0, elem = this[0];
            if (key === undefined) {
                if (this.length) {
                    data = jQuery.data(elem);
                    if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
                        attrs = elem.attributes;
                        for (;i < attrs.length; i++) {
                            name = attrs[i].name;
                            if (name.indexOf("data-") === 0) {
                                name = jQuery.camelCase(name.slice(5));
                                dataAttr(elem, name, data[name]);
                            }
                        }
                        jQuery._data(elem, "parsedAttrs", true);
                    }
                }
                return data;
            }
            if (typeof key === "object") {
                return this.each(function() {
                    jQuery.data(this, key);
                });
            }
            return arguments.length > 1 ? this.each(function() {
                jQuery.data(this, key, value);
            }) : elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null;
        },
        removeData: function(key) {
            return this.each(function() {
                jQuery.removeData(this, key);
            });
        }
    });
    function dataAttr(elem, key, data) {
        if (data === undefined && elem.nodeType === 1) {
            var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
                } catch (e) {}
                jQuery.data(elem, key, data);
            } else {
                data = undefined;
            }
        }
        return data;
    }
    function isEmptyDataObject(obj) {
        var name;
        for (name in obj) {
            if (name === "data" && jQuery.isEmptyObject(obj[name])) {
                continue;
            }
            if (name !== "toJSON") {
                return false;
            }
        }
        return true;
    }
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = jQuery._data(elem, type);
                if (data) {
                    if (!queue || jQuery.isArray(data)) {
                        queue = jQuery._data(elem, type, jQuery.makeArray(data));
                    } else {
                        queue.push(data);
                    }
                }
                return queue || [];
            }
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
            };
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }
            if (fn) {
                if (type === "fx") {
                    queue.unshift("inprogress");
                }
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
                hooks.empty.fire();
            }
        },
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return jQuery._data(elem, key) || jQuery._data(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    jQuery._removeData(elem, type + "queue");
                    jQuery._removeData(elem, key);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) {
                return jQuery.queue(this[0], type);
            }
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") {
                    jQuery.dequeue(this, type);
                }
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        delay: function(time, type) {
            time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
            type = type || "fx";
            return this.queue(type, function(next, hooks) {
                var timeout = setTimeout(next, time);
                hooks.stop = function() {
                    clearTimeout(timeout);
                };
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                if (!--count) {
                    defer.resolveWith(elements, [ elements ]);
                }
            };
            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while (i--) {
                tmp = jQuery._data(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var nodeHook, boolHook, rclass = /[\t\r\n\f]/g, rreturn = /\r/g, rfocusable = /^(?:input|select|textarea|button|object)$/i, rclickable = /^(?:a|area)$/i, ruseDefault = /^(?:checked|selected)$/i, getSetAttribute = jQuery.support.getSetAttribute, getSetInput = jQuery.support.input;
    jQuery.fn.extend({
        attr: function(name, value) {
            return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        },
        prop: function(name, value) {
            return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            name = jQuery.propFix[name] || name;
            return this.each(function() {
                try {
                    this[name] = undefined;
                    delete this[name];
                } catch (e) {}
            });
        },
        addClass: function(value) {
            var classes, elem, cur, clazz, j, i = 0, len = this.length, proceed = typeof value === "string" && value;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).addClass(value.call(this, j, this.className));
                });
            }
            if (proceed) {
                classes = (value || "").match(core_rnotwhite) || [];
                for (;i < len; i++) {
                    elem = this[i];
                    cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                cur += clazz + " ";
                            }
                        }
                        elem.className = jQuery.trim(cur);
                    }
                }
            }
            return this;
        },
        removeClass: function(value) {
            var classes, elem, cur, clazz, j, i = 0, len = this.length, proceed = arguments.length === 0 || typeof value === "string" && value;
            if (jQuery.isFunction(value)) {
                return this.each(function(j) {
                    jQuery(this).removeClass(value.call(this, j, this.className));
                });
            }
            if (proceed) {
                classes = (value || "").match(core_rnotwhite) || [];
                for (;i < len; i++) {
                    elem = this[i];
                    cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
                    if (cur) {
                        j = 0;
                        while (clazz = classes[j++]) {
                            while (cur.indexOf(" " + clazz + " ") >= 0) {
                                cur = cur.replace(" " + clazz + " ", " ");
                            }
                        }
                        elem.className = value ? jQuery.trim(cur) : "";
                    }
                }
            }
            return this;
        },
        toggleClass: function(value, stateVal) {
            var type = typeof value;
            if (typeof stateVal === "boolean" && type === "string") {
                return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            if (jQuery.isFunction(value)) {
                return this.each(function(i) {
                    jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
                });
            }
            return this.each(function() {
                if (type === "string") {
                    var className, i = 0, self = jQuery(this), classNames = value.match(core_rnotwhite) || [];
                    while (className = classNames[i++]) {
                        if (self.hasClass(className)) {
                            self.removeClass(className);
                        } else {
                            self.addClass(className);
                        }
                    }
                } else if (type === core_strundefined || type === "boolean") {
                    if (this.className) {
                        jQuery._data(this, "__className__", this.className);
                    }
                    this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
                }
            });
        },
        hasClass: function(selector) {
            var className = " " + selector + " ", i = 0, l = this.length;
            for (;i < l; i++) {
                if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
                    return true;
                }
            }
            return false;
        },
        val: function(value) {
            var ret, hooks, isFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                        return ret;
                    }
                    ret = elem.value;
                    return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
                }
                return;
            }
            isFunction = jQuery.isFunction(value);
            return this.each(function(i) {
                var val;
                if (this.nodeType !== 1) {
                    return;
                }
                if (isFunction) {
                    val = value.call(this, i, jQuery(this).val());
                } else {
                    val = value;
                }
                if (val == null) {
                    val = "";
                } else if (typeof val === "number") {
                    val += "";
                } else if (jQuery.isArray(val)) {
                    val = jQuery.map(val, function(value) {
                        return value == null ? "" : value + "";
                    });
                }
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    this.value = val;
                }
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : elem.text;
                }
            },
            select: {
                get: function(elem) {
                    var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one" || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0;
                    for (;i < max; i++) {
                        option = options[i];
                        if ((option.selected || i === index) && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                            value = jQuery(option).val();
                            if (one) {
                                return value;
                            }
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function(elem, value) {
                    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                    while (i--) {
                        option = options[i];
                        if (option.selected = jQuery.inArray(jQuery(option).val(), values) >= 0) {
                            optionSet = true;
                        }
                    }
                    if (!optionSet) {
                        elem.selectedIndex = -1;
                    }
                    return values;
                }
            }
        },
        attr: function(elem, name, value) {
            var hooks, ret, nType = elem.nodeType;
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            if (typeof elem.getAttribute === core_strundefined) {
                return jQuery.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                name = name.toLowerCase();
                hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
            }
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                } else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                } else {
                    elem.setAttribute(name, value + "");
                    return value;
                }
            } else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            } else {
                ret = jQuery.find.attr(elem, name);
                return ret == null ? undefined : ret;
            }
        },
        removeAttr: function(elem, value) {
            var name, propName, i = 0, attrNames = value && value.match(core_rnotwhite);
            if (attrNames && elem.nodeType === 1) {
                while (name = attrNames[i++]) {
                    propName = jQuery.propFix[name] || name;
                    if (jQuery.expr.match.bool.test(name)) {
                        if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                            elem[propName] = false;
                        } else {
                            elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;
                        }
                    } else {
                        jQuery.attr(elem, name, "");
                    }
                    elem.removeAttribute(getSetAttribute ? name : propName);
                }
            }
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(elem, name, value) {
            var ret, hooks, notxml, nType = elem.nodeType;
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return;
            }
            notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
            if (notxml) {
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value;
            } else {
                return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
            }
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
                }
            }
        }
    });
    boolHook = {
        set: function(elem, value, name) {
            if (value === false) {
                jQuery.removeAttr(elem, name);
            } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
            } else {
                elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
            }
            return name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = jQuery.expr.attrHandle[name] || jQuery.find.attr;
        jQuery.expr.attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function(elem, name, isXML) {
            var fn = jQuery.expr.attrHandle[name], ret = isXML ? undefined : (jQuery.expr.attrHandle[name] = undefined) != getter(elem, name, isXML) ? name.toLowerCase() : null;
            jQuery.expr.attrHandle[name] = fn;
            return ret;
        } : function(elem, name, isXML) {
            return isXML ? undefined : elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null;
        };
    });
    if (!getSetInput || !getSetAttribute) {
        jQuery.attrHooks.value = {
            set: function(elem, value, name) {
                if (jQuery.nodeName(elem, "input")) {
                    elem.defaultValue = value;
                } else {
                    return nodeHook && nodeHook.set(elem, value, name);
                }
            }
        };
    }
    if (!getSetAttribute) {
        nodeHook = {
            set: function(elem, value, name) {
                var ret = elem.getAttributeNode(name);
                if (!ret) {
                    elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));
                }
                ret.value = value += "";
                return name === "value" || value === elem.getAttribute(name) ? value : undefined;
            }
        };
        jQuery.expr.attrHandle.id = jQuery.expr.attrHandle.name = jQuery.expr.attrHandle.coords = function(elem, name, isXML) {
            var ret;
            return isXML ? undefined : (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null;
        };
        jQuery.valHooks.button = {
            get: function(elem, name) {
                var ret = elem.getAttributeNode(name);
                return ret && ret.specified ? ret.value : undefined;
            },
            set: nodeHook.set
        };
        jQuery.attrHooks.contenteditable = {
            set: function(elem, value, name) {
                nodeHook.set(elem, value === "" ? false : value, name);
            }
        };
        jQuery.each([ "width", "height" ], function(i, name) {
            jQuery.attrHooks[name] = {
                set: function(elem, value) {
                    if (value === "") {
                        elem.setAttribute(name, "auto");
                        return value;
                    }
                }
            };
        });
    }
    if (!jQuery.support.hrefNormalized) {
        jQuery.each([ "href", "src" ], function(i, name) {
            jQuery.propHooks[name] = {
                get: function(elem) {
                    return elem.getAttribute(name, 4);
                }
            };
        });
    }
    if (!jQuery.support.style) {
        jQuery.attrHooks.style = {
            get: function(elem) {
                return elem.style.cssText || undefined;
            },
            set: function(elem, value) {
                return elem.style.cssText = value + "";
            }
        };
    }
    if (!jQuery.support.optSelected) {
        jQuery.propHooks.selected = {
            get: function(elem) {
                var parent = elem.parentNode;
                if (parent) {
                    parent.selectedIndex;
                    if (parent.parentNode) {
                        parent.parentNode.selectedIndex;
                    }
                }
                return null;
            }
        };
    }
    jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    if (!jQuery.support.enctype) {
        jQuery.propFix.enctype = "encoding";
    }
    jQuery.each([ "radio", "checkbox" ], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (jQuery.isArray(value)) {
                    return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
                }
            }
        };
        if (!jQuery.support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
                return elem.getAttribute("value") === null ? "on" : elem.value;
            };
        }
    });
    var rformElems = /^(?:input|select|textarea)$/i, rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|contextmenu)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
    function returnTrue() {
        return true;
    }
    function returnFalse() {
        return false;
    }
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {}
    }
    jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
            if (!elemData) {
                return;
            }
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }
            if (!handler.guid) {
                handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
                events = elemData.events = {};
            }
            if (!(eventHandle = elemData.handle)) {
                eventHandle = elemData.handle = function(e) {
                    return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
                };
                eventHandle.elem = elem;
            }
            types = (types || "").match(core_rnotwhite) || [ "" ];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                special = jQuery.event.special[type] || {};
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle, false);
                        } else if (elem.attachEvent) {
                            elem.attachEvent("on" + type, eventHandle);
                        }
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid;
                    }
                }
                if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                    handlers.push(handleObj);
                }
                jQuery.event.global[type] = true;
            }
            elem = null;
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
            if (!elemData || !(events = elemData.events)) {
                return;
            }
            types = (types || "").match(core_rnotwhite) || [ "" ];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                if (!type) {
                    for (type in events) {
                        jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    }
                    continue;
                }
                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                origCount = j = handlers.length;
                while (j--) {
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) {
                            handlers.delegateCount--;
                        }
                        if (special.remove) {
                            special.remove.call(elem, handleObj);
                        }
                    }
                }
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                        jQuery.removeEvent(elem, type, elemData.handle);
                    }
                    delete events[type];
                }
            }
            if (jQuery.isEmptyObject(events)) {
                delete elemData.handle;
                jQuery._removeData(elem, "events");
            }
        },
        trigger: function(event, data, elem, onlyHandlers) {
            var handle, ontype, cur, bubbleType, special, tmp, i, eventPath = [ elem || document ], type = core_hasOwn.call(event, "type") ? event.type : event, namespaces = core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = tmp = elem = elem || document;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return;
            }
            if (type.indexOf(".") >= 0) {
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = undefined;
            if (!event.target) {
                event.target = elem;
            }
            data = data == null ? [ event ] : jQuery.makeArray(data, [ event ]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                return;
            }
            if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode;
                }
                for (;cur; cur = cur.parentNode) {
                    eventPath.push(cur);
                    tmp = cur;
                }
                if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                event.type = i > 1 ? bubbleType : special.bindType || type;
                handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
                if (handle) {
                    handle.apply(cur, data);
                }
                handle = ontype && cur[ontype];
                if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
                    event.preventDefault();
                }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
                    if (ontype && elem[type] && !jQuery.isWindow(elem)) {
                        tmp = elem[ontype];
                        if (tmp) {
                            elem[ontype] = null;
                        }
                        jQuery.event.triggered = type;
                        try {
                            elem[type]();
                        } catch (e) {}
                        jQuery.event.triggered = undefined;
                        if (tmp) {
                            elem[ontype] = tmp;
                        }
                    }
                }
            }
            return event.result;
        },
        dispatch: function(event) {
            event = jQuery.event.fix(event);
            var i, ret, handleObj, matched, j, handlerQueue = [], args = core_slice.call(arguments), handlers = (jQuery._data(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event;
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem;
                j = 0;
                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                    if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
                        event.handleObj = handleObj;
                        event.data = handleObj.data;
                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                        if (ret !== undefined) {
                            if ((event.result = ret) === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }
            if (special.postDispatch) {
                special.postDispatch.call(this, event);
            }
            return event.result;
        },
        handlers: function(event, handlers) {
            var sel, handleObj, matches, i, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
                for (;cur != this; cur = cur.parentNode || this) {
                    if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                        matches = [];
                        for (i = 0; i < delegateCount; i++) {
                            handleObj = handlers[i];
                            sel = handleObj.selector + " ";
                            if (matches[sel] === undefined) {
                                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [ cur ]).length;
                            }
                            if (matches[sel]) {
                                matches.push(handleObj);
                            }
                        }
                        if (matches.length) {
                            handlerQueue.push({
                                elem: cur,
                                handlers: matches
                            });
                        }
                    }
                }
            }
            if (delegateCount < handlers.length) {
                handlerQueue.push({
                    elem: this,
                    handlers: handlers.slice(delegateCount)
                });
            }
            return handlerQueue;
        },
        fix: function(event) {
            if (event[jQuery.expando]) {
                return event;
            }
            var i, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
            if (!fixHook) {
                this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
            }
            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
            event = new jQuery.Event(originalEvent);
            i = copy.length;
            while (i--) {
                prop = copy[i];
                event[prop] = originalEvent[prop];
            }
            if (!event.target) {
                event.target = originalEvent.srcElement || document;
            }
            if (event.target.nodeType === 3) {
                event.target = event.target.parentNode;
            }
            event.metaKey = !!event.metaKey;
            return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(event, original) {
                if (event.which == null) {
                    event.which = original.charCode != null ? original.charCode : original.keyCode;
                }
                return event;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(event, original) {
                var body, eventDoc, doc, button = original.button, fromElement = original.fromElement;
                if (event.pageX == null && original.clientX != null) {
                    eventDoc = event.target.ownerDocument || document;
                    doc = eventDoc.documentElement;
                    body = eventDoc.body;
                    event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                    event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
                }
                if (!event.relatedTarget && fromElement) {
                    event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
                }
                if (!event.which && button !== undefined) {
                    event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
                }
                return event;
            }
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== safeActiveElement() && this.focus) {
                        try {
                            this.focus();
                            return false;
                        } catch (e) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === safeActiveElement() && this.blur) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false;
                    }
                },
                _default: function(event) {
                    return jQuery.nodeName(event.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    if (event.result !== undefined) {
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        },
        simulate: function(type, elem, event, bubble) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true,
                originalEvent: {}
            });
            if (bubble) {
                jQuery.event.trigger(e, null, elem);
            } else {
                jQuery.event.dispatch.call(elem, e);
            }
            if (e.isDefaultPrevented()) {
                event.preventDefault();
            }
        }
    };
    jQuery.removeEvent = document.removeEventListener ? function(elem, type, handle) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handle, false);
        }
    } : function(elem, type, handle) {
        var name = "on" + type;
        if (elem.detachEvent) {
            if (typeof elem[name] === core_strundefined) {
                elem[name] = null;
            }
            elem.detachEvent(name, handle);
        }
    };
    jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
        }
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.returnValue === false || src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse;
        } else {
            this.type = src;
        }
        if (props) {
            jQuery.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || jQuery.now();
        this[jQuery.expando] = true;
    };
    jQuery.Event.prototype = {
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (!e) {
                return;
            }
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (!e) {
                return;
            }
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            e.cancelBubble = true;
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = returnTrue;
            this.stopPropagation();
        }
    };
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    if (!jQuery.support.submitBubbles) {
        jQuery.event.special.submit = {
            setup: function() {
                if (jQuery.nodeName(this, "form")) {
                    return false;
                }
                jQuery.event.add(this, "click._submit keypress._submit", function(e) {
                    var elem = e.target, form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
                    if (form && !jQuery._data(form, "submitBubbles")) {
                        jQuery.event.add(form, "submit._submit", function(event) {
                            event._submit_bubble = true;
                        });
                        jQuery._data(form, "submitBubbles", true);
                    }
                });
            },
            postDispatch: function(event) {
                if (event._submit_bubble) {
                    delete event._submit_bubble;
                    if (this.parentNode && !event.isTrigger) {
                        jQuery.event.simulate("submit", this.parentNode, event, true);
                    }
                }
            },
            teardown: function() {
                if (jQuery.nodeName(this, "form")) {
                    return false;
                }
                jQuery.event.remove(this, "._submit");
            }
        };
    }
    if (!jQuery.support.changeBubbles) {
        jQuery.event.special.change = {
            setup: function() {
                if (rformElems.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        jQuery.event.add(this, "propertychange._change", function(event) {
                            if (event.originalEvent.propertyName === "checked") {
                                this._just_changed = true;
                            }
                        });
                        jQuery.event.add(this, "click._change", function(event) {
                            if (this._just_changed && !event.isTrigger) {
                                this._just_changed = false;
                            }
                            jQuery.event.simulate("change", this, event, true);
                        });
                    }
                    return false;
                }
                jQuery.event.add(this, "beforeactivate._change", function(e) {
                    var elem = e.target;
                    if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
                        jQuery.event.add(elem, "change._change", function(event) {
                            if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                                jQuery.event.simulate("change", this.parentNode, event, true);
                            }
                        });
                        jQuery._data(elem, "changeBubbles", true);
                    }
                });
            },
            handle: function(event) {
                var elem = event.target;
                if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
                    return event.handleObj.handler.apply(this, arguments);
                }
            },
            teardown: function() {
                jQuery.event.remove(this, "._change");
                return !rformElems.test(this.nodeName);
            }
        };
    }
    if (!jQuery.support.focusinBubbles) {
        jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(orig, fix) {
            var attaches = 0, handler = function(event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
            };
            jQuery.event.special[fix] = {
                setup: function() {
                    if (attaches++ === 0) {
                        document.addEventListener(orig, handler, true);
                    }
                },
                teardown: function() {
                    if (--attaches === 0) {
                        document.removeEventListener(orig, handler, true);
                    }
                }
            };
        });
    }
    jQuery.fn.extend({
        on: function(types, selector, data, fn, one) {
            var type, origFn;
            if (typeof types === "object") {
                if (typeof selector !== "string") {
                    data = data || selector;
                    selector = undefined;
                }
                for (type in types) {
                    this.on(type, selector, data, types[type], one);
                }
                return this;
            }
            if (data == null && fn == null) {
                fn = selector;
                data = selector = undefined;
            } else if (fn == null) {
                if (typeof selector === "string") {
                    fn = data;
                    data = undefined;
                } else {
                    fn = data;
                    data = selector;
                    selector = undefined;
                }
            }
            if (fn === false) {
                fn = returnFalse;
            } else if (!fn) {
                return this;
            }
            if (one === 1) {
                origFn = fn;
                fn = function(event) {
                    jQuery().off(event);
                    return origFn.apply(this, arguments);
                };
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
            }
            return this.each(function() {
                jQuery.event.add(this, types, fn, data, selector);
            });
        },
        one: function(types, selector, data, fn) {
            return this.on(types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if (typeof types === "object") {
                for (type in types) {
                    this.off(type, selector, types[type]);
                }
                return this;
            }
            if (selector === false || typeof selector === "function") {
                fn = selector;
                selector = undefined;
            }
            if (fn === false) {
                fn = returnFalse;
            }
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        },
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
                return jQuery.event.trigger(type, data, elem, true);
            }
        }
    });
    var isSimple = /^.[^:#\[\.,]*$/, rparentsprev = /^(?:parents|prev(?:Until|All))/, rneedsContext = jQuery.expr.match.needsContext, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.fn.extend({
        find: function(selector) {
            var i, ret = [], self = this, len = self.length;
            if (typeof selector !== "string") {
                return this.pushStack(jQuery(selector).filter(function() {
                    for (i = 0; i < len; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return true;
                        }
                    }
                }));
            }
            for (i = 0; i < len; i++) {
                jQuery.find(selector, self[i], ret);
            }
            ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
            ret.selector = this.selector ? this.selector + " " + selector : selector;
            return ret;
        },
        has: function(target) {
            var i, targets = jQuery(target, this), len = targets.length;
            return this.filter(function() {
                for (i = 0; i < len; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true;
                    }
                }
            });
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        is: function(selector) {
            return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        },
        closest: function(selectors, context) {
            var cur, i = 0, l = this.length, ret = [], pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
            for (;i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                    if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                        cur = ret.push(cur);
                        break;
                    }
                }
            }
            return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret);
        },
        index: function(elem) {
            if (!elem) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
                return jQuery.inArray(this[0], jQuery(elem));
            }
            return jQuery.inArray(elem.jquery ? elem[0] : elem, this);
        },
        add: function(selector, context) {
            var set = typeof selector === "string" ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [ selector ] : selector), all = jQuery.merge(this.get(), set);
            return this.pushStack(jQuery.unique(all));
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });
    function sibling(cur, dir) {
        do {
            cur = cur[dir];
        } while (cur && cur.nodeType !== 1);
        return cur;
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            return jQuery.dir(elem, "parentNode");
        },
        parentsUntil: function(elem, i, until) {
            return jQuery.dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return jQuery.dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return jQuery.dir(elem, "previousSibling");
        },
        nextUntil: function(elem, i, until) {
            return jQuery.dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, i, until) {
            return jQuery.dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            return jQuery.sibling(elem.firstChild);
        },
        contents: function(elem) {
            return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var ret = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
                selector = until;
            }
            if (selector && typeof selector === "string") {
                ret = jQuery.filter(selector, ret);
            }
            if (this.length > 1) {
                if (!guaranteedUnique[name]) {
                    ret = jQuery.unique(ret);
                }
                if (rparentsprev.test(name)) {
                    ret = ret.reverse();
                }
            }
            return this.pushStack(ret);
        };
    });
    jQuery.extend({
        filter: function(expr, elems, not) {
            var elem = elems[0];
            if (not) {
                expr = ":not(" + expr + ")";
            }
            return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                return elem.nodeType === 1;
            }));
        },
        dir: function(elem, dir, until) {
            var matched = [], cur = elem[dir];
            while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
                if (cur.nodeType === 1) {
                    matched.push(cur);
                }
                cur = cur[dir];
            }
            return matched;
        },
        sibling: function(n, elem) {
            var r = [];
            for (;n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                    r.push(n);
                }
            }
            return r;
        }
    });
    function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i) {
                return !!qualifier.call(elem, i, elem) !== not;
            });
        }
        if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
                return elem === qualifier !== not;
            });
        }
        if (typeof qualifier === "string") {
            if (isSimple.test(qualifier)) {
                return jQuery.filter(qualifier, elements, not);
            }
            qualifier = jQuery.filter(qualifier, elements);
        }
        return jQuery.grep(elements, function(elem) {
            return jQuery.inArray(elem, qualifier) >= 0 !== not;
        });
    }
    function createSafeFragment(document) {
        var list = nodeNames.split("|"), safeFrag = document.createDocumentFragment();
        if (safeFrag.createElement) {
            while (list.length) {
                safeFrag.createElement(list.pop());
            }
        }
        return safeFrag;
    }
    var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g, rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"), rleadingWhitespace = /^\s+/, rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/, rtbody = /<tbody/i, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i, manipulation_rcheckableType = /^(?:checkbox|radio)$/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /^$|\/(?:java|ecma)script/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, wrapMap = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, safeFragment = createSafeFragment(document), fragmentDiv = safeFragment.appendChild(document.createElement("div"));
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    jQuery.fn.extend({
        text: function(value) {
            return jQuery.access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
            }, null, value, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this);
                }
            });
        },
        after: function() {
            return this.domManip(arguments, function(elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling);
                }
            });
        },
        remove: function(selector, keepData) {
            var elem, elems = selector ? jQuery.filter(selector, this) : this, i = 0;
            for (;(elem = elems[i]) != null; i++) {
                if (!keepData && elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem));
                }
                if (elem.parentNode) {
                    if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
                        setGlobalEval(getAll(elem, "script"));
                    }
                    elem.parentNode.removeChild(elem);
                }
            }
            return this;
        },
        empty: function() {
            var elem, i = 0;
            for (;(elem = this[i]) != null; i++) {
                if (elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem, false));
                }
                while (elem.firstChild) {
                    elem.removeChild(elem.firstChild);
                }
                if (elem.options && jQuery.nodeName(elem, "select")) {
                    elem.options.length = 0;
                }
            }
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return jQuery.access(this, function(value) {
                var elem = this[0] || {}, i = 0, l = this.length;
                if (value === undefined) {
                    return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
                }
                if (typeof value === "string" && !rnoInnerhtml.test(value) && (jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                    value = value.replace(rxhtmlTag, "<$1></$2>");
                    try {
                        for (;i < l; i++) {
                            elem = this[i] || {};
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }
                        elem = 0;
                    } catch (e) {}
                }
                if (elem) {
                    this.empty().append(value);
                }
            }, null, value, arguments.length);
        },
        replaceWith: function() {
            var args = jQuery.map(this, function(elem) {
                return [ elem.nextSibling, elem.parentNode ];
            }), i = 0;
            this.domManip(arguments, function(elem) {
                var next = args[i++], parent = args[i++];
                if (parent) {
                    if (next && next.parentNode !== parent) {
                        next = this.nextSibling;
                    }
                    jQuery(this).remove();
                    parent.insertBefore(elem, next);
                }
            }, true);
            return i ? this : this.remove();
        },
        detach: function(selector) {
            return this.remove(selector, true);
        },
        domManip: function(args, callback, allowIntersection) {
            args = core_concat.apply([], args);
            var first, node, hasScripts, scripts, doc, fragment, i = 0, l = this.length, set = this, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
            if (isFunction || !(l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test(value))) {
                return this.each(function(index) {
                    var self = set.eq(index);
                    if (isFunction) {
                        args[0] = value.call(this, index, self.html());
                    }
                    self.domManip(args, callback, allowIntersection);
                });
            }
            if (l) {
                fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, !allowIntersection && this);
                first = fragment.firstChild;
                if (fragment.childNodes.length === 1) {
                    fragment = first;
                }
                if (first) {
                    scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                    hasScripts = scripts.length;
                    for (;i < l; i++) {
                        node = fragment;
                        if (i !== iNoClone) {
                            node = jQuery.clone(node, true, true);
                            if (hasScripts) {
                                jQuery.merge(scripts, getAll(node, "script"));
                            }
                        }
                        callback.call(this[i], node, i);
                    }
                    if (hasScripts) {
                        doc = scripts[scripts.length - 1].ownerDocument;
                        jQuery.map(scripts, restoreScript);
                        for (i = 0; i < hasScripts; i++) {
                            node = scripts[i];
                            if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
                                if (node.src) {
                                    jQuery._evalUrl(node.src);
                                } else {
                                    jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
                                }
                            }
                        }
                    }
                    fragment = first = null;
                }
            }
            return this;
        }
    });
    function manipulationTarget(elem, content) {
        return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType === 1 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
    }
    function disableScript(elem) {
        elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
        return elem;
    }
    function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);
        if (match) {
            elem.type = match[1];
        } else {
            elem.removeAttribute("type");
        }
        return elem;
    }
    function setGlobalEval(elems, refElements) {
        var elem, i = 0;
        for (;(elem = elems[i]) != null; i++) {
            jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
        }
    }
    function cloneCopyEvent(src, dest) {
        if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
            return;
        }
        var type, i, l, oldData = jQuery._data(src), curData = jQuery._data(dest, oldData), events = oldData.events;
        if (events) {
            delete curData.handle;
            curData.events = {};
            for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                    jQuery.event.add(dest, type, events[type][i]);
                }
            }
        }
        if (curData.data) {
            curData.data = jQuery.extend({}, curData.data);
        }
    }
    function fixCloneNodeIssues(src, dest) {
        var nodeName, e, data;
        if (dest.nodeType !== 1) {
            return;
        }
        nodeName = dest.nodeName.toLowerCase();
        if (!jQuery.support.noCloneEvent && dest[jQuery.expando]) {
            data = jQuery._data(dest);
            for (e in data.events) {
                jQuery.removeEvent(dest, e, data.handle);
            }
            dest.removeAttribute(jQuery.expando);
        }
        if (nodeName === "script" && dest.text !== src.text) {
            disableScript(dest).text = src.text;
            restoreScript(dest);
        } else if (nodeName === "object") {
            if (dest.parentNode) {
                dest.outerHTML = src.outerHTML;
            }
            if (jQuery.support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML))) {
                dest.innerHTML = src.innerHTML;
            }
        } else if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) {
            dest.defaultChecked = dest.checked = src.checked;
            if (dest.value !== src.value) {
                dest.value = src.value;
            }
        } else if (nodeName === "option") {
            dest.defaultSelected = dest.selected = src.defaultSelected;
        } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue;
        }
    }
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, i = 0, ret = [], insert = jQuery(selector), last = insert.length - 1;
            for (;i <= last; i++) {
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);
                core_push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
        };
    });
    function getAll(context, tag) {
        var elems, elem, i = 0, found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll(tag || "*") : undefined;
        if (!found) {
            for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
                if (!tag || jQuery.nodeName(elem, tag)) {
                    found.push(elem);
                } else {
                    jQuery.merge(found, getAll(elem, tag));
                }
            }
        }
        return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([ context ], found) : found;
    }
    function fixDefaultChecked(elem) {
        if (manipulation_rcheckableType.test(elem.type)) {
            elem.defaultChecked = elem.checked;
        }
    }
    jQuery.extend({
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
            if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
                clone = elem.cloneNode(true);
            } else {
                fragmentDiv.innerHTML = elem.outerHTML;
                fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
            }
            if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for (i = 0; (node = srcElements[i]) != null; ++i) {
                    if (destElements[i]) {
                        fixCloneNodeIssues(node, destElements[i]);
                    }
                }
            }
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for (i = 0; (node = srcElements[i]) != null; i++) {
                        cloneCopyEvent(node, destElements[i]);
                    }
                } else {
                    cloneCopyEvent(elem, clone);
                }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
                setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            destElements = srcElements = node = null;
            return clone;
        },
        buildFragment: function(elems, context, scripts, selection) {
            var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length, safe = createSafeFragment(context), nodes = [], i = 0;
            for (;i < l; i++) {
                elem = elems[i];
                if (elem || elem === 0) {
                    if (jQuery.type(elem) === "object") {
                        jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem);
                    } else if (!rhtml.test(elem)) {
                        nodes.push(context.createTextNode(elem));
                    } else {
                        tmp = tmp || safe.appendChild(context.createElement("div"));
                        tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
                        wrap = wrapMap[tag] || wrapMap._default;
                        tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
                        j = wrap[0];
                        while (j--) {
                            tmp = tmp.lastChild;
                        }
                        if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
                            nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
                        }
                        if (!jQuery.support.tbody) {
                            elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild : wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;
                            j = elem && elem.childNodes.length;
                            while (j--) {
                                if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {
                                    elem.removeChild(tbody);
                                }
                            }
                        }
                        jQuery.merge(nodes, tmp.childNodes);
                        tmp.textContent = "";
                        while (tmp.firstChild) {
                            tmp.removeChild(tmp.firstChild);
                        }
                        tmp = safe.lastChild;
                    }
                }
            }
            if (tmp) {
                safe.removeChild(tmp);
            }
            if (!jQuery.support.appendChecked) {
                jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
            }
            i = 0;
            while (elem = nodes[i++]) {
                if (selection && jQuery.inArray(elem, selection) !== -1) {
                    continue;
                }
                contains = jQuery.contains(elem.ownerDocument, elem);
                tmp = getAll(safe.appendChild(elem), "script");
                if (contains) {
                    setGlobalEval(tmp);
                }
                if (scripts) {
                    j = 0;
                    while (elem = tmp[j++]) {
                        if (rscriptType.test(elem.type || "")) {
                            scripts.push(elem);
                        }
                    }
                }
            }
            tmp = null;
            return safe;
        },
        cleanData: function(elems, acceptData) {
            var elem, type, id, data, i = 0, internalKey = jQuery.expando, cache = jQuery.cache, deleteExpando = jQuery.support.deleteExpando, special = jQuery.event.special;
            for (;(elem = elems[i]) != null; i++) {
                if (acceptData || jQuery.acceptData(elem)) {
                    id = elem[internalKey];
                    data = id && cache[id];
                    if (data) {
                        if (data.events) {
                            for (type in data.events) {
                                if (special[type]) {
                                    jQuery.event.remove(elem, type);
                                } else {
                                    jQuery.removeEvent(elem, type, data.handle);
                                }
                            }
                        }
                        if (cache[id]) {
                            delete cache[id];
                            if (deleteExpando) {
                                delete elem[internalKey];
                            } else if (typeof elem.removeAttribute !== core_strundefined) {
                                elem.removeAttribute(internalKey);
                            } else {
                                elem[internalKey] = null;
                            }
                            core_deletedIds.push(id);
                        }
                    }
                }
            }
        },
        _evalUrl: function(url) {
            return jQuery.ajax({
                url: url,
                type: "GET",
                dataType: "script",
                async: false,
                global: false,
                throws: true
            });
        }
    });
    jQuery.fn.extend({
        wrapAll: function(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapAll(html.call(this, i));
                });
            }
            if (this[0]) {
                var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    wrap.insertBefore(this[0]);
                }
                wrap.map(function() {
                    var elem = this;
                    while (elem.firstChild && elem.firstChild.nodeType === 1) {
                        elem = elem.firstChild;
                    }
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(html) {
            if (jQuery.isFunction(html)) {
                return this.each(function(i) {
                    jQuery(this).wrapInner(html.call(this, i));
                });
            }
            return this.each(function() {
                var self = jQuery(this), contents = self.contents();
                if (contents.length) {
                    contents.wrapAll(html);
                } else {
                    self.append(html);
                }
            });
        },
        wrap: function(html) {
            var isFunction = jQuery.isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!jQuery.nodeName(this, "body")) {
                    jQuery(this).replaceWith(this.childNodes);
                }
            }).end();
        }
    });
    var iframe, getStyles, curCSS, ralpha = /alpha\([^)]*\)/i, ropacity = /opacity\s*=\s*([^)]*)/, rposition = /^(top|right|bottom|left)$/, rdisplayswap = /^(none|table(?!-c[ea]).+)/, rmargin = /^margin/, rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"), rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"), rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"), elemdisplay = {
        BODY: "block"
    }, cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: 0,
        fontWeight: 400
    }, cssExpand = [ "Top", "Right", "Bottom", "Left" ], cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
    function vendorPropName(style, name) {
        if (name in style) {
            return name;
        }
        var capName = name.charAt(0).toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length;
        while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in style) {
                return name;
            }
        }
        return origName;
    }
    function isHidden(elem, el) {
        elem = el || elem;
        return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
    }
    function showHide(elements, show) {
        var display, elem, hidden, values = [], index = 0, length = elements.length;
        for (;index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            values[index] = jQuery._data(elem, "olddisplay");
            display = elem.style.display;
            if (show) {
                if (!values[index] && display === "none") {
                    elem.style.display = "";
                }
                if (elem.style.display === "" && isHidden(elem)) {
                    values[index] = jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName));
                }
            } else {
                if (!values[index]) {
                    hidden = isHidden(elem);
                    if (display && display !== "none" || !hidden) {
                        jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
                    }
                }
            }
        }
        for (index = 0; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            if (!show || elem.style.display === "none" || elem.style.display === "") {
                elem.style.display = show ? values[index] || "" : "none";
            }
        }
        return elements;
    }
    jQuery.fn.extend({
        css: function(name, value) {
            return jQuery.access(this, function(elem, name, value) {
                var len, styles, map = {}, i = 0;
                if (jQuery.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;
                    for (;i < len; i++) {
                        map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    }
                    return map;
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        },
        show: function() {
            return showHide(this, true);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            if (typeof state === "boolean") {
                return state ? this.show() : this.hide();
            }
            return this.each(function() {
                if (isHidden(this)) {
                    jQuery(this).show();
                } else {
                    jQuery(this).hide();
                }
            });
        }
    });
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: true,
            fillOpacity: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            float: jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return;
            }
            var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== undefined) {
                type = typeof value;
                if (type === "string" && (ret = rrelNum.exec(value))) {
                    value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
                    type = "number";
                }
                if (value == null || type === "number" && isNaN(value)) {
                    return;
                }
                if (type === "number" && !jQuery.cssNumber[origName]) {
                    value += "px";
                }
                if (!jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                    style[name] = "inherit";
                }
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    try {
                        style[name] = value;
                    } catch (e) {}
                }
            } else {
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                    return ret;
                }
                return style[name];
            }
        },
        css: function(elem, name, extra, styles) {
            var num, val, hooks, origName = jQuery.camelCase(name);
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
                val = hooks.get(elem, true, extra);
            }
            if (val === undefined) {
                val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
                val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
            }
            return val;
        }
    });
    if (window.getComputedStyle) {
        getStyles = function(elem) {
            return window.getComputedStyle(elem, null);
        };
        curCSS = function(elem, name, _computed) {
            var width, minWidth, maxWidth, computed = _computed || getStyles(elem), ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined, style = elem.style;
            if (computed) {
                if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                    ret = jQuery.style(elem, name);
                }
                if (rnumnonpx.test(ret) && rmargin.test(name)) {
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;
                    style.minWidth = style.maxWidth = style.width = ret;
                    ret = computed.width;
                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth;
                }
            }
            return ret;
        };
    } else if (document.documentElement.currentStyle) {
        getStyles = function(elem) {
            return elem.currentStyle;
        };
        curCSS = function(elem, name, _computed) {
            var left, rs, rsLeft, computed = _computed || getStyles(elem), ret = computed ? computed[name] : undefined, style = elem.style;
            if (ret == null && style && style[name]) {
                ret = style[name];
            }
            if (rnumnonpx.test(ret) && !rposition.test(name)) {
                left = style.left;
                rs = elem.runtimeStyle;
                rsLeft = rs && rs.left;
                if (rsLeft) {
                    rs.left = elem.currentStyle.left;
                }
                style.left = name === "fontSize" ? "1em" : ret;
                ret = style.pixelLeft + "px";
                style.left = left;
                if (rsLeft) {
                    rs.left = rsLeft;
                }
            }
            return ret === "" ? "auto" : ret;
        };
    }
    function setPositiveNumber(elem, value, subtract) {
        var matches = rnumsplit.exec(value);
        return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
    }
    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0, val = 0;
        for (;i < 4; i += 2) {
            if (extra === "margin") {
                val += jQuery.css(elem, extra + cssExpand[i], true, styles);
            }
            if (isBorderBox) {
                if (extra === "content") {
                    val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                }
                if (extra !== "margin") {
                    val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            } else {
                val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                if (extra !== "padding") {
                    val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            }
        }
        return val;
    }
    function getWidthOrHeight(elem, name, extra) {
        var valueIsBorderBox = true, val = name === "width" ? elem.offsetWidth : elem.offsetHeight, styles = getStyles(elem), isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
        if (val <= 0 || val == null) {
            val = curCSS(elem, name, styles);
            if (val < 0 || val == null) {
                val = elem.style[name];
            }
            if (rnumnonpx.test(val)) {
                return val;
            }
            valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]);
            val = parseFloat(val) || 0;
        }
        return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
    }
    function css_defaultDisplay(nodeName) {
        var doc = document, display = elemdisplay[nodeName];
        if (!display) {
            display = actualDisplay(nodeName, doc);
            if (display === "none" || !display) {
                iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(doc.documentElement);
                doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
                doc.write("<!doctype html><html><body>");
                doc.close();
                display = actualDisplay(nodeName, doc);
                iframe.detach();
            }
            elemdisplay[nodeName] = display;
        }
        return display;
    }
    function actualDisplay(name, doc) {
        var elem = jQuery(doc.createElement(name)).appendTo(doc.body), display = jQuery.css(elem[0], "display");
        elem.remove();
        return display;
    }
    jQuery.each([ "height", "width" ], function(i, name) {
        jQuery.cssHooks[name] = {
            get: function(elem, computed, extra) {
                if (computed) {
                    return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ? jQuery.swap(elem, cssShow, function() {
                        return getWidthOrHeight(elem, name, extra);
                    }) : getWidthOrHeight(elem, name, extra);
                }
            },
            set: function(elem, value, extra) {
                var styles = extra && getStyles(elem);
                return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
            }
        };
    });
    if (!jQuery.support.opacity) {
        jQuery.cssHooks.opacity = {
            get: function(elem, computed) {
                return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
            },
            set: function(elem, value) {
                var style = elem.style, currentStyle = elem.currentStyle, opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "", filter = currentStyle && currentStyle.filter || style.filter || "";
                style.zoom = 1;
                if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
                    style.removeAttribute("filter");
                    if (value === "" || currentStyle && !currentStyle.filter) {
                        return;
                    }
                }
                style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
            }
        };
    }
    jQuery(function() {
        if (!jQuery.support.reliableMarginRight) {
            jQuery.cssHooks.marginRight = {
                get: function(elem, computed) {
                    if (computed) {
                        return jQuery.swap(elem, {
                            display: "inline-block"
                        }, curCSS, [ elem, "marginRight" ]);
                    }
                }
            };
        }
        if (!jQuery.support.pixelPosition && jQuery.fn.position) {
            jQuery.each([ "top", "left" ], function(i, prop) {
                jQuery.cssHooks[prop] = {
                    get: function(elem, computed) {
                        if (computed) {
                            computed = curCSS(elem, prop);
                            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                        }
                    }
                };
            });
        }
    });
    if (jQuery.expr && jQuery.expr.filters) {
        jQuery.expr.filters.hidden = function(elem) {
            return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !jQuery.support.reliableHiddenOffsets && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none";
        };
        jQuery.expr.filters.visible = function(elem) {
            return !jQuery.expr.filters.hidden(elem);
        };
    }
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [ value ];
                for (;i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                }
                return expanded;
            }
        };
        if (!rmargin.test(prefix)) {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
    });
    var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
            }).map(function(i, elem) {
                var val = jQuery(this).val();
                return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, value) {
            value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
        if (traditional === undefined) {
            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
        }
        if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            jQuery.each(a, function() {
                add(this.name, this.value);
            });
        } else {
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add);
            }
        }
        return s.join("&").replace(r20, "+");
    };
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (jQuery.isArray(obj)) {
            jQuery.each(obj, function(i, v) {
                if (traditional || rbracket.test(prefix)) {
                    add(prefix, v);
                } else {
                    buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
                }
            });
        } else if (!traditional && jQuery.type(obj) === "object") {
            for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
        } else {
            add(prefix, obj);
        }
    }
    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    });
    jQuery.fn.extend({
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        },
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        }
    });
    var ajaxLocParts, ajaxLocation, ajax_nonce = jQuery.now(), ajax_rquery = /\?/, rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, _load = jQuery.fn.load, prefilters = {}, transports = {}, allTypes = "*/".concat("*");
    try {
        ajaxLocation = location.href;
    } catch (e) {
        ajaxLocation = document.createElement("a");
        ajaxLocation.href = "";
        ajaxLocation = ajaxLocation.href;
    }
    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
    function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];
            if (jQuery.isFunction(func)) {
                while (dataType = dataTypes[i++]) {
                    if (dataType[0] === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func);
                    } else {
                        (structure[dataType] = structure[dataType] || []).push(func);
                    }
                }
            }
        };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) {
                    return !(selected = dataTypeOrTransport);
                }
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, src) {
        var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
        }
        if (deep) {
            jQuery.extend(true, target, deep);
        }
        return target;
    }
    jQuery.fn.load = function(url, params, callback) {
        if (typeof url !== "string" && _load) {
            return _load.apply(this, arguments);
        }
        var selector, response, type, self = this, off = url.indexOf(" ");
        if (off >= 0) {
            selector = url.slice(off, url.length);
            url = url.slice(0, off);
        }
        if (jQuery.isFunction(params)) {
            callback = params;
            params = undefined;
        } else if (params && typeof params === "object") {
            type = "POST";
        }
        if (self.length > 0) {
            jQuery.ajax({
                url: url,
                type: type,
                dataType: "html",
                data: params
            }).done(function(responseText) {
                response = arguments;
                self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
            }).complete(callback && function(jqXHR, status) {
                self.each(callback, response || [ jqXHR.responseText, status, jqXHR ]);
            });
        }
        return this;
    };
    jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    });
    jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": jQuery.parseJSON,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }
            options = options || {};
            var parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = "canceled", jqXHR = {
                readyState: 0,
                getResponseHeader: function(key) {
                    var match;
                    if (state === 2) {
                        if (!responseHeaders) {
                            responseHeaders = {};
                            while (match = rheaders.exec(responseHeadersString)) {
                                responseHeaders[match[1].toLowerCase()] = match[2];
                            }
                        }
                        match = responseHeaders[key.toLowerCase()];
                    }
                    return match == null ? null : match;
                },
                getAllResponseHeaders: function() {
                    return state === 2 ? responseHeadersString : null;
                },
                setRequestHeader: function(name, value) {
                    var lname = name.toLowerCase();
                    if (!state) {
                        name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },
                overrideMimeType: function(type) {
                    if (!state) {
                        s.mimeType = type;
                    }
                    return this;
                },
                statusCode: function(map) {
                    var code;
                    if (map) {
                        if (state < 2) {
                            for (code in map) {
                                statusCode[code] = [ statusCode[code], map[code] ];
                            }
                        } else {
                            jqXHR.always(map[jqXHR.status]);
                        }
                    }
                    return this;
                },
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) {
                        transport.abort(finalText);
                    }
                    done(0, finalText);
                    return this;
                }
            };
            deferred.promise(jqXHR).complete = completeDeferred.add;
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;
            s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [ "" ];
            if (s.crossDomain == null) {
                parts = rurl.exec(s.url.toLowerCase());
                s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
            }
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (state === 2) {
                return jqXHR;
            }
            fireGlobals = s.global;
            if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url;
            if (!s.hasContent) {
                if (s.data) {
                    cacheURL = s.url += (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data;
                    delete s.data;
                }
                if (s.cache === false) {
                    s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + ajax_nonce++) : cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++;
                }
            }
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                }
                if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
                return jqXHR.abort();
            }
            strAbort = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                jqXHR[i](s[i]);
            }
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
                done(-1, "No Transport");
            } else {
                jqXHR.readyState = 1;
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
                }
                if (s.async && s.timeout > 0) {
                    timeoutTimer = setTimeout(function() {
                        jqXHR.abort("timeout");
                    }, s.timeout);
                }
                try {
                    state = 1;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    if (state < 2) {
                        done(-1, e);
                    } else {
                        throw e;
                    }
                }
            }
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                if (state === 2) {
                    return;
                }
                state = 2;
                if (timeoutTimer) {
                    clearTimeout(timeoutTimer);
                }
                transport = undefined;
                responseHeadersString = headers || "";
                jqXHR.readyState = status > 0 ? 4 : 0;
                isSuccess = status >= 200 && status < 300 || status === 304;
                if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses);
                }
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                if (isSuccess) {
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            jQuery.lastModified[cacheURL] = modified;
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) {
                            jQuery.etag[cacheURL] = modified;
                        }
                    }
                    if (status === 204 || s.type === "HEAD") {
                        statusText = "nocontent";
                    } else if (status === 304) {
                        statusText = "notmodified";
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0;
                        }
                    }
                }
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]);
                } else {
                    deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
                }
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) {
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]);
                }
                completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
                    if (!--jQuery.active) {
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }
            return jqXHR;
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });
    jQuery.each([ "get", "post" ], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {
            if (jQuery.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }
            return jQuery.ajax({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            });
        };
    });
    function ajaxHandleResponses(s, jqXHR, responses) {
        var firstDataType, ct, finalDataType, type, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        }
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                }
            }
        }
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
        } else {
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) {
                    firstDataType = type;
                }
            }
            finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
        }
    }
    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv];
            }
        }
        current = dataTypes.shift();
        while (current) {
            if (s.responseFields[current]) {
                jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
                response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
                if (current === "*") {
                    current = prev;
                } else if (prev !== "*" && prev !== current) {
                    conv = converters[prev + " " + current] || converters["* " + current];
                    if (!conv) {
                        for (conv2 in converters) {
                            tmp = conv2.split(" ");
                            if (tmp[1] === current) {
                                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                if (conv) {
                                    if (conv === true) {
                                        conv = converters[conv2];
                                    } else if (converters[conv2] !== true) {
                                        current = tmp[0];
                                        dataTypes.unshift(tmp[1]);
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (conv !== true) {
                        if (conv && s["throws"]) {
                            response = conv(response);
                        } else {
                            try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) {
            s.cache = false;
        }
        if (s.crossDomain) {
            s.type = "GET";
            s.global = false;
        }
    });
    jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain) {
            var script, head = document.head || jQuery("head")[0] || document.documentElement;
            return {
                send: function(_, callback) {
                    script = document.createElement("script");
                    script.async = true;
                    if (s.scriptCharset) {
                        script.charset = s.scriptCharset;
                    }
                    script.src = s.url;
                    script.onload = script.onreadystatechange = function(_, isAbort) {
                        if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                            script.onload = script.onreadystatechange = null;
                            if (script.parentNode) {
                                script.parentNode.removeChild(script);
                            }
                            script = null;
                            if (!isAbort) {
                                callback(200, "success");
                            }
                        }
                    };
                    head.insertBefore(script, head.firstChild);
                },
                abort: function() {
                    if (script) {
                        script.onload(undefined, true);
                    }
                }
            };
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + ajax_nonce++;
            this[callback] = true;
            return callback;
        }
    });
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
                s.url += (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
                if (!responseContainer) {
                    jQuery.error(callbackName + " was not called");
                }
                return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window[callbackName];
            window[callbackName] = function() {
                responseContainer = arguments;
            };
            jqXHR.always(function() {
                window[callbackName] = overwritten;
                if (s[callbackName]) {
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    oldCallbacks.push(callbackName);
                }
                if (responseContainer && jQuery.isFunction(overwritten)) {
                    overwritten(responseContainer[0]);
                }
                responseContainer = overwritten = undefined;
            });
            return "script";
        }
    });
    var xhrCallbacks, xhrSupported, xhrId = 0, xhrOnUnloadAbort = window.ActiveXObject && function() {
        var key;
        for (key in xhrCallbacks) {
            xhrCallbacks[key](undefined, true);
        }
    };
    function createStandardXHR() {
        try {
            return new window.XMLHttpRequest();
        } catch (e) {}
    }
    function createActiveXHR() {
        try {
            return new window.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
    }
    jQuery.ajaxSettings.xhr = window.ActiveXObject ? function() {
        return !this.isLocal && createStandardXHR() || createActiveXHR();
    } : createStandardXHR;
    xhrSupported = jQuery.ajaxSettings.xhr();
    jQuery.support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    xhrSupported = jQuery.support.ajax = !!xhrSupported;
    if (xhrSupported) {
        jQuery.ajaxTransport(function(s) {
            if (!s.crossDomain || jQuery.support.cors) {
                var callback;
                return {
                    send: function(headers, complete) {
                        var handle, i, xhr = s.xhr();
                        if (s.username) {
                            xhr.open(s.type, s.url, s.async, s.username, s.password);
                        } else {
                            xhr.open(s.type, s.url, s.async);
                        }
                        if (s.xhrFields) {
                            for (i in s.xhrFields) {
                                xhr[i] = s.xhrFields[i];
                            }
                        }
                        if (s.mimeType && xhr.overrideMimeType) {
                            xhr.overrideMimeType(s.mimeType);
                        }
                        if (!s.crossDomain && !headers["X-Requested-With"]) {
                            headers["X-Requested-With"] = "XMLHttpRequest";
                        }
                        try {
                            for (i in headers) {
                                xhr.setRequestHeader(i, headers[i]);
                            }
                        } catch (err) {}
                        xhr.send(s.hasContent && s.data || null);
                        callback = function(_, isAbort) {
                            var status, responseHeaders, statusText, responses;
                            try {
                                if (callback && (isAbort || xhr.readyState === 4)) {
                                    callback = undefined;
                                    if (handle) {
                                        xhr.onreadystatechange = jQuery.noop;
                                        if (xhrOnUnloadAbort) {
                                            delete xhrCallbacks[handle];
                                        }
                                    }
                                    if (isAbort) {
                                        if (xhr.readyState !== 4) {
                                            xhr.abort();
                                        }
                                    } else {
                                        responses = {};
                                        status = xhr.status;
                                        responseHeaders = xhr.getAllResponseHeaders();
                                        if (typeof xhr.responseText === "string") {
                                            responses.text = xhr.responseText;
                                        }
                                        try {
                                            statusText = xhr.statusText;
                                        } catch (e) {
                                            statusText = "";
                                        }
                                        if (!status && s.isLocal && !s.crossDomain) {
                                            status = responses.text ? 200 : 404;
                                        } else if (status === 1223) {
                                            status = 204;
                                        }
                                    }
                                }
                            } catch (firefoxAccessException) {
                                if (!isAbort) {
                                    complete(-1, firefoxAccessException);
                                }
                            }
                            if (responses) {
                                complete(status, statusText, responses, responseHeaders);
                            }
                        };
                        if (!s.async) {
                            callback();
                        } else if (xhr.readyState === 4) {
                            setTimeout(callback);
                        } else {
                            handle = ++xhrId;
                            if (xhrOnUnloadAbort) {
                                if (!xhrCallbacks) {
                                    xhrCallbacks = {};
                                    jQuery(window).unload(xhrOnUnloadAbort);
                                }
                                xhrCallbacks[handle] = callback;
                            }
                            xhr.onreadystatechange = callback;
                        }
                    },
                    abort: function() {
                        if (callback) {
                            callback(undefined, true);
                        }
                    }
                };
            }
        });
    }
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"), rrun = /queueHooks$/, animationPrefilters = [ defaultPrefilter ], tweeners = {
        "*": [ function(prop, value) {
            var tween = this.createTween(prop, value), target = tween.cur(), parts = rfxnum.exec(value), unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"), start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)), scale = 1, maxIterations = 20;
            if (start && start[3] !== unit) {
                unit = unit || start[3];
                parts = parts || [];
                start = +target || 1;
                do {
                    scale = scale || ".5";
                    start = start / scale;
                    jQuery.style(tween.elem, prop, start + unit);
                } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
            }
            if (parts) {
                start = tween.start = +start || +target || 0;
                tween.unit = unit;
                tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
            }
            return tween;
        } ]
    };
    function createFxNow() {
        setTimeout(function() {
            fxNow = undefined;
        });
        return fxNow = jQuery.now();
    }
    function createTween(value, prop, animation) {
        var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]), index = 0, length = collection.length;
        for (;index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
                return tween;
            }
        }
    }
    function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = animationPrefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
        }), tick = function() {
            if (stopped) {
                return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
            for (;index < length; index++) {
                animation.tweens[index].run(percent);
            }
            deferred.notifyWith(elem, [ animation, percent, remaining ]);
            if (percent < 1 && length) {
                return remaining;
            } else {
                deferred.resolveWith(elem, [ animation ]);
                return false;
            }
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
                specialEasing: {}
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function(gotoEnd) {
                var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) {
                    return this;
                }
                stopped = true;
                for (;index < length; index++) {
                    animation.tweens[index].run(1);
                }
                if (gotoEnd) {
                    deferred.resolveWith(elem, [ animation, gotoEnd ]);
                } else {
                    deferred.rejectWith(elem, [ animation, gotoEnd ]);
                }
                return this;
            }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (;index < length; index++) {
            result = animationPrefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                return result;
            }
        }
        jQuery.map(props, createTween, animation);
        if (jQuery.isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
        }
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
            name = jQuery.camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (jQuery.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                for (index in value) {
                    if (!(index in props)) {
                        props[index] = value[index];
                        specialEasing[index] = easing;
                    }
                }
            } else {
                specialEasing[name] = easing;
            }
        }
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweener: function(props, callback) {
            if (jQuery.isFunction(props)) {
                callback = props;
                props = [ "*" ];
            } else {
                props = props.split(" ");
            }
            var prop, index = 0, length = props.length;
            for (;index < length; index++) {
                prop = props[index];
                tweeners[prop] = tweeners[prop] || [];
                tweeners[prop].unshift(callback);
            }
        },
        prefilter: function(callback, prepend) {
            if (prepend) {
                animationPrefilters.unshift(callback);
            } else {
                animationPrefilters.push(callback);
            }
        }
    });
    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, tween, hooks, oldfire, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHidden(elem), dataShow = jQuery._data(elem, "fxshow");
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;
            anim.always(function() {
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        hooks.empty.fire();
                    }
                });
            });
        }
        if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
            opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
            if (jQuery.css(elem, "display") === "inline" && jQuery.css(elem, "float") === "none") {
                if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
                    style.display = "inline-block";
                } else {
                    style.zoom = 1;
                }
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            if (!jQuery.support.shrinkWrapBlocks) {
                anim.always(function() {
                    style.overflow = opts.overflow[0];
                    style.overflowX = opts.overflow[1];
                    style.overflowY = opts.overflow[2];
                });
            }
        }
        for (prop in props) {
            value = props[prop];
            if (rfxtypes.exec(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    continue;
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
        }
        if (!jQuery.isEmptyObject(orig)) {
            if (dataShow) {
                if ("hidden" in dataShow) {
                    hidden = dataShow.hidden;
                }
            } else {
                dataShow = jQuery._data(elem, "fxshow", {});
            }
            if (toggle) {
                dataShow.hidden = !hidden;
            }
            if (hidden) {
                jQuery(elem).show();
            } else {
                anim.done(function() {
                    jQuery(elem).hide();
                });
            }
            anim.done(function() {
                var prop;
                jQuery._removeData(elem, "fxshow");
                for (prop in orig) {
                    jQuery.style(elem, prop, orig[prop]);
                }
            });
            for (prop in orig) {
                tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                if (!(prop in dataShow)) {
                    dataShow[prop] = tween.start;
                    if (hidden) {
                        tween.end = tween.start;
                        tween.start = prop === "width" || prop === "height" ? 1 : 0;
                    }
                }
            }
        }
    }
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || "swing";
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            } else {
                this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
                hooks.set(this);
            } else {
                Tween.propHooks._default.set(this);
            }
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
                    return tween.elem[tween.prop];
                }
                result = jQuery.css(tween.elem, tween.prop, "");
                return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
                if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween);
                } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                } else {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now;
            }
        }
    };
    jQuery.each([ "toggle", "show", "hide" ], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    });
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                if (empty || jQuery._data(this, "finish")) {
                    anim.stop(true);
                }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue && type !== false) {
                this.queue(type || "fx", []);
            }
            return this.each(function() {
                var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = jQuery._data(this);
                if (index) {
                    if (data[index] && data[index].stop) {
                        stopQueue(data[index]);
                    }
                } else {
                    for (index in data) {
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            stopQueue(data[index]);
                        }
                    }
                }
                for (index = timers.length; index--; ) {
                    if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                        timers[index].anim.stop(gotoEnd);
                        dequeue = false;
                        timers.splice(index, 1);
                    }
                }
                if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type);
                }
            });
        },
        finish: function(type) {
            if (type !== false) {
                type = type || "fx";
            }
            return this.each(function() {
                var index, data = jQuery._data(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                data.finish = true;
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) {
                    hooks.stop.call(this, true);
                }
                for (index = timers.length; index--; ) {
                    if (timers[index].elem === this && timers[index].queue === type) {
                        timers[index].anim.stop(true);
                        timers.splice(index, 1);
                    }
                }
                for (index = 0; index < length; index++) {
                    if (queue[index] && queue[index].finish) {
                        queue[index].finish.call(this);
                    }
                }
                delete data.finish;
            });
        }
    });
    function genFx(type, includeWidth) {
        var which, attrs = {
            height: type
        }, i = 0;
        includeWidth = includeWidth ? 1 : 0;
        for (;i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
            attrs.opacity = attrs.width = type;
        }
        return attrs;
    }
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
        if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
            if (jQuery.isFunction(opt.old)) {
                opt.old.call(this);
            }
            if (opt.queue) {
                jQuery.dequeue(this, opt.queue);
            }
        };
        return opt;
    };
    jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return .5 - Math.cos(p * Math.PI) / 2;
        }
    };
    jQuery.timers = [];
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.tick = function() {
        var timer, timers = jQuery.timers, i = 0;
        fxNow = jQuery.now();
        for (;i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
                timers.splice(i--, 1);
            }
        }
        if (!timers.length) {
            jQuery.fx.stop();
        }
        fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
        if (timer() && jQuery.timers.push(timer)) {
            jQuery.fx.start();
        }
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (!timerId) {
            timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
        }
    };
    jQuery.fx.stop = function() {
        clearInterval(timerId);
        timerId = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    jQuery.fx.step = {};
    if (jQuery.expr && jQuery.expr.filters) {
        jQuery.expr.filters.animated = function(elem) {
            return jQuery.grep(jQuery.timers, function(fn) {
                return elem === fn.elem;
            }).length;
        };
    }
    jQuery.fn.offset = function(options) {
        if (arguments.length) {
            return options === undefined ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
            });
        }
        var docElem, win, box = {
            top: 0,
            left: 0
        }, elem = this[0], doc = elem && elem.ownerDocument;
        if (!doc) {
            return;
        }
        docElem = doc.documentElement;
        if (!jQuery.contains(docElem, elem)) {
            return box;
        }
        if (typeof elem.getBoundingClientRect !== core_strundefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
            left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
        };
    };
    jQuery.offset = {
        setOffset: function(elem, options, i) {
            var position = jQuery.css(elem, "position");
            if (position === "static") {
                elem.style.position = "relative";
            }
            var curElem = jQuery(elem), curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [ curCSSTop, curCSSLeft ]) > -1, props = {}, curPosition = {}, curTop, curLeft;
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (jQuery.isFunction(options)) {
                options = options.call(elem, i, curOffset);
            }
            if (options.top != null) {
                props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
                props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
                options.using.call(elem, props);
            } else {
                curElem.css(props);
            }
        }
    };
    jQuery.fn.extend({
        position: function() {
            if (!this[0]) {
                return;
            }
            var offsetParent, offset, parentOffset = {
                top: 0,
                left: 0
            }, elem = this[0];
            if (jQuery.css(elem, "position") === "fixed") {
                offset = elem.getBoundingClientRect();
            } else {
                offsetParent = this.offsetParent();
                offset = this.offset();
                if (!jQuery.nodeName(offsetParent[0], "html")) {
                    parentOffset = offsetParent.offset();
                }
                parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
            }
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent || docElem;
                while (offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
                    offsetParent = offsetParent.offsetParent;
                }
                return offsetParent || docElem;
            });
        }
    });
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = /Y/.test(prop);
        jQuery.fn[method] = function(val) {
            return jQuery.access(this, function(elem, method, val) {
                var win = getWindow(elem);
                if (val === undefined) {
                    return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
                }
                if (win) {
                    win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
                } else {
                    elem[method] = val;
                }
            }, method, val, arguments.length, null);
        };
    });
    function getWindow(elem) {
        return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
    }
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return jQuery.access(this, function(elem, type, value) {
                    var doc;
                    if (jQuery.isWindow(elem)) {
                        return elem.document.documentElement["client" + name];
                    }
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable, null);
            };
        });
    });
    jQuery.fn.size = function() {
        return this.length;
    };
    jQuery.fn.andSelf = jQuery.fn.addBack;
    if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = jQuery;
    } else {
        window.jQuery = window.$ = jQuery;
        if (typeof define === "function" && define.amd) {
            define("jquery", [], function() {
                return jQuery;
            });
        }
    }
})(window);

(function() {
    var root = this;
    var previousUnderscore = root._;
    var breaker = {};
    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
    var push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
    var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
    var _ = function(obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
    };
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = _;
        }
        exports._ = _;
    } else {
        root._ = _;
    }
    _.VERSION = "1.6.0";
    var each = _.each = _.forEach = function(obj, iterator, context) {
        if (obj == null) return obj;
        if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
            for (var i = 0, length = obj.length; i < length; i++) {
                if (iterator.call(context, obj[i], i, obj) === breaker) return;
            }
        } else {
            var keys = _.keys(obj);
            for (var i = 0, length = keys.length; i < length; i++) {
                if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
            }
        }
        return obj;
    };
    _.map = _.collect = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
        each(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
        });
        return results;
    };
    var reduceError = "Reduce of empty array with no initial value";
    _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
        var initial = arguments.length > 2;
        if (obj == null) obj = [];
        if (nativeReduce && obj.reduce === nativeReduce) {
            if (context) iterator = _.bind(iterator, context);
            return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
        }
        each(obj, function(value, index, list) {
            if (!initial) {
                memo = value;
                initial = true;
            } else {
                memo = iterator.call(context, memo, value, index, list);
            }
        });
        if (!initial) throw new TypeError(reduceError);
        return memo;
    };
    _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
        var initial = arguments.length > 2;
        if (obj == null) obj = [];
        if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
            if (context) iterator = _.bind(iterator, context);
            return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
        }
        var length = obj.length;
        if (length !== +length) {
            var keys = _.keys(obj);
            length = keys.length;
        }
        each(obj, function(value, index, list) {
            index = keys ? keys[--length] : --length;
            if (!initial) {
                memo = obj[index];
                initial = true;
            } else {
                memo = iterator.call(context, memo, obj[index], index, list);
            }
        });
        if (!initial) throw new TypeError(reduceError);
        return memo;
    };
    _.find = _.detect = function(obj, predicate, context) {
        var result;
        any(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list)) {
                result = value;
                return true;
            }
        });
        return result;
    };
    _.filter = _.select = function(obj, predicate, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
        each(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list)) results.push(value);
        });
        return results;
    };
    _.reject = function(obj, predicate, context) {
        return _.filter(obj, function(value, index, list) {
            return !predicate.call(context, value, index, list);
        }, context);
    };
    _.every = _.all = function(obj, predicate, context) {
        predicate || (predicate = _.identity);
        var result = true;
        if (obj == null) return result;
        if (nativeEvery && obj.every === nativeEvery) return obj.every(predicate, context);
        each(obj, function(value, index, list) {
            if (!(result = result && predicate.call(context, value, index, list))) return breaker;
        });
        return !!result;
    };
    var any = _.some = _.any = function(obj, predicate, context) {
        predicate || (predicate = _.identity);
        var result = false;
        if (obj == null) return result;
        if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
        each(obj, function(value, index, list) {
            if (result || (result = predicate.call(context, value, index, list))) return breaker;
        });
        return !!result;
    };
    _.contains = _.include = function(obj, target) {
        if (obj == null) return false;
        if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
        return any(obj, function(value) {
            return value === target;
        });
    };
    _.invoke = function(obj, method) {
        var args = slice.call(arguments, 2);
        var isFunc = _.isFunction(method);
        return _.map(obj, function(value) {
            return (isFunc ? method : value[method]).apply(value, args);
        });
    };
    _.pluck = function(obj, key) {
        return _.map(obj, _.property(key));
    };
    _.where = function(obj, attrs) {
        return _.filter(obj, _.matches(attrs));
    };
    _.findWhere = function(obj, attrs) {
        return _.find(obj, _.matches(attrs));
    };
    _.max = function(obj, iterator, context) {
        if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
            return Math.max.apply(Math, obj);
        }
        var result = -Infinity, lastComputed = -Infinity;
        each(obj, function(value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            if (computed > lastComputed) {
                result = value;
                lastComputed = computed;
            }
        });
        return result;
    };
    _.min = function(obj, iterator, context) {
        if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
            return Math.min.apply(Math, obj);
        }
        var result = Infinity, lastComputed = Infinity;
        each(obj, function(value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            if (computed < lastComputed) {
                result = value;
                lastComputed = computed;
            }
        });
        return result;
    };
    _.shuffle = function(obj) {
        var rand;
        var index = 0;
        var shuffled = [];
        each(obj, function(value) {
            rand = _.random(index++);
            shuffled[index - 1] = shuffled[rand];
            shuffled[rand] = value;
        });
        return shuffled;
    };
    _.sample = function(obj, n, guard) {
        if (n == null || guard) {
            if (obj.length !== +obj.length) obj = _.values(obj);
            return obj[_.random(obj.length - 1)];
        }
        return _.shuffle(obj).slice(0, Math.max(0, n));
    };
    var lookupIterator = function(value) {
        if (value == null) return _.identity;
        if (_.isFunction(value)) return value;
        return _.property(value);
    };
    _.sortBy = function(obj, iterator, context) {
        iterator = lookupIterator(iterator);
        return _.pluck(_.map(obj, function(value, index, list) {
            return {
                value: value,
                index: index,
                criteria: iterator.call(context, value, index, list)
            };
        }).sort(function(left, right) {
            var a = left.criteria;
            var b = right.criteria;
            if (a !== b) {
                if (a > b || a === void 0) return 1;
                if (a < b || b === void 0) return -1;
            }
            return left.index - right.index;
        }), "value");
    };
    var group = function(behavior) {
        return function(obj, iterator, context) {
            var result = {};
            iterator = lookupIterator(iterator);
            each(obj, function(value, index) {
                var key = iterator.call(context, value, index, obj);
                behavior(result, key, value);
            });
            return result;
        };
    };
    _.groupBy = group(function(result, key, value) {
        _.has(result, key) ? result[key].push(value) : result[key] = [ value ];
    });
    _.indexBy = group(function(result, key, value) {
        result[key] = value;
    });
    _.countBy = group(function(result, key) {
        _.has(result, key) ? result[key]++ : result[key] = 1;
    });
    _.sortedIndex = function(array, obj, iterator, context) {
        iterator = lookupIterator(iterator);
        var value = iterator.call(context, obj);
        var low = 0, high = array.length;
        while (low < high) {
            var mid = low + high >>> 1;
            iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
        }
        return low;
    };
    _.toArray = function(obj) {
        if (!obj) return [];
        if (_.isArray(obj)) return slice.call(obj);
        if (obj.length === +obj.length) return _.map(obj, _.identity);
        return _.values(obj);
    };
    _.size = function(obj) {
        if (obj == null) return 0;
        return obj.length === +obj.length ? obj.length : _.keys(obj).length;
    };
    _.first = _.head = _.take = function(array, n, guard) {
        if (array == null) return void 0;
        if (n == null || guard) return array[0];
        if (n < 0) return [];
        return slice.call(array, 0, n);
    };
    _.initial = function(array, n, guard) {
        return slice.call(array, 0, array.length - (n == null || guard ? 1 : n));
    };
    _.last = function(array, n, guard) {
        if (array == null) return void 0;
        if (n == null || guard) return array[array.length - 1];
        return slice.call(array, Math.max(array.length - n, 0));
    };
    _.rest = _.tail = _.drop = function(array, n, guard) {
        return slice.call(array, n == null || guard ? 1 : n);
    };
    _.compact = function(array) {
        return _.filter(array, _.identity);
    };
    var flatten = function(input, shallow, output) {
        if (shallow && _.every(input, _.isArray)) {
            return concat.apply(output, input);
        }
        each(input, function(value) {
            if (_.isArray(value) || _.isArguments(value)) {
                shallow ? push.apply(output, value) : flatten(value, shallow, output);
            } else {
                output.push(value);
            }
        });
        return output;
    };
    _.flatten = function(array, shallow) {
        return flatten(array, shallow, []);
    };
    _.without = function(array) {
        return _.difference(array, slice.call(arguments, 1));
    };
    _.partition = function(array, predicate) {
        var pass = [], fail = [];
        each(array, function(elem) {
            (predicate(elem) ? pass : fail).push(elem);
        });
        return [ pass, fail ];
    };
    _.uniq = _.unique = function(array, isSorted, iterator, context) {
        if (_.isFunction(isSorted)) {
            context = iterator;
            iterator = isSorted;
            isSorted = false;
        }
        var initial = iterator ? _.map(array, iterator, context) : array;
        var results = [];
        var seen = [];
        each(initial, function(value, index) {
            if (isSorted ? !index || seen[seen.length - 1] !== value : !_.contains(seen, value)) {
                seen.push(value);
                results.push(array[index]);
            }
        });
        return results;
    };
    _.union = function() {
        return _.uniq(_.flatten(arguments, true));
    };
    _.intersection = function(array) {
        var rest = slice.call(arguments, 1);
        return _.filter(_.uniq(array), function(item) {
            return _.every(rest, function(other) {
                return _.contains(other, item);
            });
        });
    };
    _.difference = function(array) {
        var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
        return _.filter(array, function(value) {
            return !_.contains(rest, value);
        });
    };
    _.zip = function() {
        var length = _.max(_.pluck(arguments, "length").concat(0));
        var results = new Array(length);
        for (var i = 0; i < length; i++) {
            results[i] = _.pluck(arguments, "" + i);
        }
        return results;
    };
    _.object = function(list, values) {
        if (list == null) return {};
        var result = {};
        for (var i = 0, length = list.length; i < length; i++) {
            if (values) {
                result[list[i]] = values[i];
            } else {
                result[list[i][0]] = list[i][1];
            }
        }
        return result;
    };
    _.indexOf = function(array, item, isSorted) {
        if (array == null) return -1;
        var i = 0, length = array.length;
        if (isSorted) {
            if (typeof isSorted == "number") {
                i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
            } else {
                i = _.sortedIndex(array, item);
                return array[i] === item ? i : -1;
            }
        }
        if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
        for (;i < length; i++) if (array[i] === item) return i;
        return -1;
    };
    _.lastIndexOf = function(array, item, from) {
        if (array == null) return -1;
        var hasIndex = from != null;
        if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
            return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
        }
        var i = hasIndex ? from : array.length;
        while (i--) if (array[i] === item) return i;
        return -1;
    };
    _.range = function(start, stop, step) {
        if (arguments.length <= 1) {
            stop = start || 0;
            start = 0;
        }
        step = arguments[2] || 1;
        var length = Math.max(Math.ceil((stop - start) / step), 0);
        var idx = 0;
        var range = new Array(length);
        while (idx < length) {
            range[idx++] = start;
            start += step;
        }
        return range;
    };
    var ctor = function() {};
    _.bind = function(func, context) {
        var args, bound;
        if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
        if (!_.isFunction(func)) throw new TypeError();
        args = slice.call(arguments, 2);
        return bound = function() {
            if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
            ctor.prototype = func.prototype;
            var self = new ctor();
            ctor.prototype = null;
            var result = func.apply(self, args.concat(slice.call(arguments)));
            if (Object(result) === result) return result;
            return self;
        };
    };
    _.partial = function(func) {
        var boundArgs = slice.call(arguments, 1);
        return function() {
            var position = 0;
            var args = boundArgs.slice();
            for (var i = 0, length = args.length; i < length; i++) {
                if (args[i] === _) args[i] = arguments[position++];
            }
            while (position < arguments.length) args.push(arguments[position++]);
            return func.apply(this, args);
        };
    };
    _.bindAll = function(obj) {
        var funcs = slice.call(arguments, 1);
        if (funcs.length === 0) throw new Error("bindAll must be passed function names");
        each(funcs, function(f) {
            obj[f] = _.bind(obj[f], obj);
        });
        return obj;
    };
    _.memoize = function(func, hasher) {
        var memo = {};
        hasher || (hasher = _.identity);
        return function() {
            var key = hasher.apply(this, arguments);
            return _.has(memo, key) ? memo[key] : memo[key] = func.apply(this, arguments);
        };
    };
    _.delay = function(func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function() {
            return func.apply(null, args);
        }, wait);
    };
    _.defer = function(func) {
        return _.delay.apply(_, [ func, 1 ].concat(slice.call(arguments, 1)));
    };
    _.throttle = function(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        options || (options = {});
        var later = function() {
            previous = options.leading === false ? 0 : _.now();
            timeout = null;
            result = func.apply(context, args);
            context = args = null;
        };
        return function() {
            var now = _.now();
            if (!previous && options.leading === false) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
                context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    };
    _.debounce = function(func, wait, immediate) {
        var timeout, args, context, timestamp, result;
        var later = function() {
            var last = _.now() - timestamp;
            if (last < wait) {
                timeout = setTimeout(later, wait - last);
            } else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);
                    context = args = null;
                }
            }
        };
        return function() {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            if (callNow) {
                result = func.apply(context, args);
                context = args = null;
            }
            return result;
        };
    };
    _.once = function(func) {
        var ran = false, memo;
        return function() {
            if (ran) return memo;
            ran = true;
            memo = func.apply(this, arguments);
            func = null;
            return memo;
        };
    };
    _.wrap = function(func, wrapper) {
        return _.partial(wrapper, func);
    };
    _.compose = function() {
        var funcs = arguments;
        return function() {
            var args = arguments;
            for (var i = funcs.length - 1; i >= 0; i--) {
                args = [ funcs[i].apply(this, args) ];
            }
            return args[0];
        };
    };
    _.after = function(times, func) {
        return function() {
            if (--times < 1) {
                return func.apply(this, arguments);
            }
        };
    };
    _.keys = function(obj) {
        if (!_.isObject(obj)) return [];
        if (nativeKeys) return nativeKeys(obj);
        var keys = [];
        for (var key in obj) if (_.has(obj, key)) keys.push(key);
        return keys;
    };
    _.values = function(obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var values = new Array(length);
        for (var i = 0; i < length; i++) {
            values[i] = obj[keys[i]];
        }
        return values;
    };
    _.pairs = function(obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var pairs = new Array(length);
        for (var i = 0; i < length; i++) {
            pairs[i] = [ keys[i], obj[keys[i]] ];
        }
        return pairs;
    };
    _.invert = function(obj) {
        var result = {};
        var keys = _.keys(obj);
        for (var i = 0, length = keys.length; i < length; i++) {
            result[obj[keys[i]]] = keys[i];
        }
        return result;
    };
    _.functions = _.methods = function(obj) {
        var names = [];
        for (var key in obj) {
            if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
    };
    _.extend = function(obj) {
        each(slice.call(arguments, 1), function(source) {
            if (source) {
                for (var prop in source) {
                    obj[prop] = source[prop];
                }
            }
        });
        return obj;
    };
    _.pick = function(obj) {
        var copy = {};
        var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
        each(keys, function(key) {
            if (key in obj) copy[key] = obj[key];
        });
        return copy;
    };
    _.omit = function(obj) {
        var copy = {};
        var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
        for (var key in obj) {
            if (!_.contains(keys, key)) copy[key] = obj[key];
        }
        return copy;
    };
    _.defaults = function(obj) {
        each(slice.call(arguments, 1), function(source) {
            if (source) {
                for (var prop in source) {
                    if (obj[prop] === void 0) obj[prop] = source[prop];
                }
            }
        });
        return obj;
    };
    _.clone = function(obj) {
        if (!_.isObject(obj)) return obj;
        return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
    };
    _.tap = function(obj, interceptor) {
        interceptor(obj);
        return obj;
    };
    var eq = function(a, b, aStack, bStack) {
        if (a === b) return a !== 0 || 1 / a == 1 / b;
        if (a == null || b == null) return a === b;
        if (a instanceof _) a = a._wrapped;
        if (b instanceof _) b = b._wrapped;
        var className = toString.call(a);
        if (className != toString.call(b)) return false;
        switch (className) {
          case "[object String]":
            return a == String(b);

          case "[object Number]":
            return a != +a ? b != +b : a == 0 ? 1 / a == 1 / b : a == +b;

          case "[object Date]":
          case "[object Boolean]":
            return +a == +b;

          case "[object RegExp]":
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
        }
        if (typeof a != "object" || typeof b != "object") return false;
        var length = aStack.length;
        while (length--) {
            if (aStack[length] == a) return bStack[length] == b;
        }
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && ("constructor" in a && "constructor" in b)) {
            return false;
        }
        aStack.push(a);
        bStack.push(b);
        var size = 0, result = true;
        if (className == "[object Array]") {
            size = a.length;
            result = size == b.length;
            if (result) {
                while (size--) {
                    if (!(result = eq(a[size], b[size], aStack, bStack))) break;
                }
            }
        } else {
            for (var key in a) {
                if (_.has(a, key)) {
                    size++;
                    if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
                }
            }
            if (result) {
                for (key in b) {
                    if (_.has(b, key) && !size--) break;
                }
                result = !size;
            }
        }
        aStack.pop();
        bStack.pop();
        return result;
    };
    _.isEqual = function(a, b) {
        return eq(a, b, [], []);
    };
    _.isEmpty = function(obj) {
        if (obj == null) return true;
        if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
        for (var key in obj) if (_.has(obj, key)) return false;
        return true;
    };
    _.isElement = function(obj) {
        return !!(obj && obj.nodeType === 1);
    };
    _.isArray = nativeIsArray || function(obj) {
        return toString.call(obj) == "[object Array]";
    };
    _.isObject = function(obj) {
        return obj === Object(obj);
    };
    each([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(name) {
        _["is" + name] = function(obj) {
            return toString.call(obj) == "[object " + name + "]";
        };
    });
    if (!_.isArguments(arguments)) {
        _.isArguments = function(obj) {
            return !!(obj && _.has(obj, "callee"));
        };
    }
    if (typeof /./ !== "function") {
        _.isFunction = function(obj) {
            return typeof obj === "function";
        };
    }
    _.isFinite = function(obj) {
        return isFinite(obj) && !isNaN(parseFloat(obj));
    };
    _.isNaN = function(obj) {
        return _.isNumber(obj) && obj != +obj;
    };
    _.isBoolean = function(obj) {
        return obj === true || obj === false || toString.call(obj) == "[object Boolean]";
    };
    _.isNull = function(obj) {
        return obj === null;
    };
    _.isUndefined = function(obj) {
        return obj === void 0;
    };
    _.has = function(obj, key) {
        return hasOwnProperty.call(obj, key);
    };
    _.noConflict = function() {
        root._ = previousUnderscore;
        return this;
    };
    _.identity = function(value) {
        return value;
    };
    _.constant = function(value) {
        return function() {
            return value;
        };
    };
    _.property = function(key) {
        return function(obj) {
            return obj[key];
        };
    };
    _.matches = function(attrs) {
        return function(obj) {
            if (obj === attrs) return true;
            for (var key in attrs) {
                if (attrs[key] !== obj[key]) return false;
            }
            return true;
        };
    };
    _.times = function(n, iterator, context) {
        var accum = Array(Math.max(0, n));
        for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
        return accum;
    };
    _.random = function(min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
    };
    _.now = Date.now || function() {
        return new Date().getTime();
    };
    var entityMap = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    entityMap.unescape = _.invert(entityMap.escape);
    var entityRegexes = {
        escape: new RegExp("[" + _.keys(entityMap.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + _.keys(entityMap.unescape).join("|") + ")", "g")
    };
    _.each([ "escape", "unescape" ], function(method) {
        _[method] = function(string) {
            if (string == null) return "";
            return ("" + string).replace(entityRegexes[method], function(match) {
                return entityMap[method][match];
            });
        };
    });
    _.result = function(object, property) {
        if (object == null) return void 0;
        var value = object[property];
        return _.isFunction(value) ? value.call(object) : value;
    };
    _.mixin = function(obj) {
        each(_.functions(obj), function(name) {
            var func = _[name] = obj[name];
            _.prototype[name] = function() {
                var args = [ this._wrapped ];
                push.apply(args, arguments);
                return result.call(this, func.apply(_, args));
            };
        });
    };
    var idCounter = 0;
    _.uniqueId = function(prefix) {
        var id = ++idCounter + "";
        return prefix ? prefix + id : id;
    };
    _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var noMatch = /(.)^/;
    var escapes = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\t": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    };
    var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    _.template = function(text, data, settings) {
        var render;
        settings = _.defaults({}, settings, _.templateSettings);
        var matcher = new RegExp([ (settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source ].join("|") + "|$", "g");
        var index = 0;
        var source = "__p+='";
        text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escaper, function(match) {
                return "\\" + escapes[match];
            });
            if (escape) {
                source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            }
            if (interpolate) {
                source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            }
            if (evaluate) {
                source += "';\n" + evaluate + "\n__p+='";
            }
            index = offset + match.length;
            return match;
        });
        source += "';\n";
        if (!settings.variable) source = "with(obj||{}){\n" + source + "}\n";
        source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
        try {
            render = new Function(settings.variable || "obj", "_", source);
        } catch (e) {
            e.source = source;
            throw e;
        }
        if (data) return render(data, _);
        var template = function(data) {
            return render.call(this, data, _);
        };
        template.source = "function(" + (settings.variable || "obj") + "){\n" + source + "}";
        return template;
    };
    _.chain = function(obj) {
        return _(obj).chain();
    };
    var result = function(obj) {
        return this._chain ? _(obj).chain() : obj;
    };
    _.mixin(_);
    each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            var obj = this._wrapped;
            method.apply(obj, arguments);
            if ((name == "shift" || name == "splice") && obj.length === 0) delete obj[0];
            return result.call(this, obj);
        };
    });
    each([ "concat", "join", "slice" ], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            return result.call(this, method.apply(this._wrapped, arguments));
        };
    });
    _.extend(_.prototype, {
        chain: function() {
            this._chain = true;
            return this;
        },
        value: function() {
            return this._wrapped;
        }
    });
    if (typeof define === "function" && define.amd) {
        define("underscore", [], function() {
            return _;
        });
    }
}).call(this);

!function() {
    var d3 = {
        version: "3.4.8"
    };
    if (!Date.now) Date.now = function() {
        return +new Date();
    };
    var d3_arraySlice = [].slice, d3_array = function(list) {
        return d3_arraySlice.call(list);
    };
    var d3_document = document, d3_documentElement = d3_document.documentElement, d3_window = window;
    try {
        d3_array(d3_documentElement.childNodes)[0].nodeType;
    } catch (e) {
        d3_array = function(list) {
            var i = list.length, array = new Array(i);
            while (i--) array[i] = list[i];
            return array;
        };
    }
    try {
        d3_document.createElement("div").style.setProperty("opacity", 0, "");
    } catch (error) {
        var d3_element_prototype = d3_window.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = d3_window.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
        d3_element_prototype.setAttribute = function(name, value) {
            d3_element_setAttribute.call(this, name, value + "");
        };
        d3_element_prototype.setAttributeNS = function(space, local, value) {
            d3_element_setAttributeNS.call(this, space, local, value + "");
        };
        d3_style_prototype.setProperty = function(name, value, priority) {
            d3_style_setProperty.call(this, name, value + "", priority);
        };
    }
    d3.ascending = d3_ascending;
    function d3_ascending(a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }
    d3.descending = function(a, b) {
        return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
    };
    d3.min = function(array, f) {
        var i = -1, n = array.length, a, b;
        if (arguments.length === 1) {
            while (++i < n && !((a = array[i]) != null && a <= a)) a = undefined;
            while (++i < n) if ((b = array[i]) != null && a > b) a = b;
        } else {
            while (++i < n && !((a = f.call(array, array[i], i)) != null && a <= a)) a = undefined;
            while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
        }
        return a;
    };
    d3.max = function(array, f) {
        var i = -1, n = array.length, a, b;
        if (arguments.length === 1) {
            while (++i < n && !((a = array[i]) != null && a <= a)) a = undefined;
            while (++i < n) if ((b = array[i]) != null && b > a) a = b;
        } else {
            while (++i < n && !((a = f.call(array, array[i], i)) != null && a <= a)) a = undefined;
            while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
        }
        return a;
    };
    d3.extent = function(array, f) {
        var i = -1, n = array.length, a, b, c;
        if (arguments.length === 1) {
            while (++i < n && !((a = c = array[i]) != null && a <= a)) a = c = undefined;
            while (++i < n) if ((b = array[i]) != null) {
                if (a > b) a = b;
                if (c < b) c = b;
            }
        } else {
            while (++i < n && !((a = c = f.call(array, array[i], i)) != null && a <= a)) a = undefined;
            while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
                if (a > b) a = b;
                if (c < b) c = b;
            }
        }
        return [ a, c ];
    };
    d3.sum = function(array, f) {
        var s = 0, n = array.length, a, i = -1;
        if (arguments.length === 1) {
            while (++i < n) if (!isNaN(a = +array[i])) s += a;
        } else {
            while (++i < n) if (!isNaN(a = +f.call(array, array[i], i))) s += a;
        }
        return s;
    };
    function d3_number(x) {
        return x != null && !isNaN(x);
    }
    d3.mean = function(array, f) {
        var s = 0, n = array.length, a, i = -1, j = n;
        if (arguments.length === 1) {
            while (++i < n) if (d3_number(a = array[i])) s += a; else --j;
        } else {
            while (++i < n) if (d3_number(a = f.call(array, array[i], i))) s += a; else --j;
        }
        return j ? s / j : undefined;
    };
    d3.quantile = function(values, p) {
        var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
        return e ? v + e * (values[h] - v) : v;
    };
    d3.median = function(array, f) {
        if (arguments.length > 1) array = array.map(f);
        array = array.filter(d3_number);
        return array.length ? d3.quantile(array.sort(d3_ascending), .5) : undefined;
    };
    function d3_bisector(compare) {
        return {
            left: function(a, x, lo, hi) {
                if (arguments.length < 3) lo = 0;
                if (arguments.length < 4) hi = a.length;
                while (lo < hi) {
                    var mid = lo + hi >>> 1;
                    if (compare(a[mid], x) < 0) lo = mid + 1; else hi = mid;
                }
                return lo;
            },
            right: function(a, x, lo, hi) {
                if (arguments.length < 3) lo = 0;
                if (arguments.length < 4) hi = a.length;
                while (lo < hi) {
                    var mid = lo + hi >>> 1;
                    if (compare(a[mid], x) > 0) hi = mid; else lo = mid + 1;
                }
                return lo;
            }
        };
    }
    var d3_bisect = d3_bisector(d3_ascending);
    d3.bisectLeft = d3_bisect.left;
    d3.bisect = d3.bisectRight = d3_bisect.right;
    d3.bisector = function(f) {
        return d3_bisector(f.length === 1 ? function(d, x) {
            return d3_ascending(f(d), x);
        } : f);
    };
    d3.shuffle = function(array) {
        var m = array.length, t, i;
        while (m) {
            i = Math.random() * m-- | 0;
            t = array[m], array[m] = array[i], array[i] = t;
        }
        return array;
    };
    d3.permute = function(array, indexes) {
        var i = indexes.length, permutes = new Array(i);
        while (i--) permutes[i] = array[indexes[i]];
        return permutes;
    };
    d3.pairs = function(array) {
        var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
        while (i < n) pairs[i] = [ p0 = p1, p1 = array[++i] ];
        return pairs;
    };
    d3.zip = function() {
        if (!(n = arguments.length)) return [];
        for (var i = -1, m = d3.min(arguments, d3_zipLength), zips = new Array(m); ++i < m; ) {
            for (var j = -1, n, zip = zips[i] = new Array(n); ++j < n; ) {
                zip[j] = arguments[j][i];
            }
        }
        return zips;
    };
    function d3_zipLength(d) {
        return d.length;
    }
    d3.transpose = function(matrix) {
        return d3.zip.apply(d3, matrix);
    };
    d3.keys = function(map) {
        var keys = [];
        for (var key in map) keys.push(key);
        return keys;
    };
    d3.values = function(map) {
        var values = [];
        for (var key in map) values.push(map[key]);
        return values;
    };
    d3.entries = function(map) {
        var entries = [];
        for (var key in map) entries.push({
            key: key,
            value: map[key]
        });
        return entries;
    };
    d3.merge = function(arrays) {
        var n = arrays.length, m, i = -1, j = 0, merged, array;
        while (++i < n) j += arrays[i].length;
        merged = new Array(j);
        while (--n >= 0) {
            array = arrays[n];
            m = array.length;
            while (--m >= 0) {
                merged[--j] = array[m];
            }
        }
        return merged;
    };
    var abs = Math.abs;
    d3.range = function(start, stop, step) {
        if (arguments.length < 3) {
            step = 1;
            if (arguments.length < 2) {
                stop = start;
                start = 0;
            }
        }
        if ((stop - start) / step === Infinity) throw new Error("infinite range");
        var range = [], k = d3_range_integerScale(abs(step)), i = -1, j;
        start *= k, stop *= k, step *= k;
        if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
        return range;
    };
    function d3_range_integerScale(x) {
        var k = 1;
        while (x * k % 1) k *= 10;
        return k;
    }
    function d3_class(ctor, properties) {
        try {
            for (var key in properties) {
                Object.defineProperty(ctor.prototype, key, {
                    value: properties[key],
                    enumerable: false
                });
            }
        } catch (e) {
            ctor.prototype = properties;
        }
    }
    d3.map = function(object) {
        var map = new d3_Map();
        if (object instanceof d3_Map) object.forEach(function(key, value) {
            map.set(key, value);
        }); else for (var key in object) map.set(key, object[key]);
        return map;
    };
    function d3_Map() {}
    d3_class(d3_Map, {
        has: d3_map_has,
        get: function(key) {
            return this[d3_map_prefix + key];
        },
        set: function(key, value) {
            return this[d3_map_prefix + key] = value;
        },
        remove: d3_map_remove,
        keys: d3_map_keys,
        values: function() {
            var values = [];
            this.forEach(function(key, value) {
                values.push(value);
            });
            return values;
        },
        entries: function() {
            var entries = [];
            this.forEach(function(key, value) {
                entries.push({
                    key: key,
                    value: value
                });
            });
            return entries;
        },
        size: d3_map_size,
        empty: d3_map_empty,
        forEach: function(f) {
            for (var key in this) if (key.charCodeAt(0) === d3_map_prefixCode) f.call(this, key.substring(1), this[key]);
        }
    });
    var d3_map_prefix = "\0", d3_map_prefixCode = d3_map_prefix.charCodeAt(0);
    function d3_map_has(key) {
        return d3_map_prefix + key in this;
    }
    function d3_map_remove(key) {
        key = d3_map_prefix + key;
        return key in this && delete this[key];
    }
    function d3_map_keys() {
        var keys = [];
        this.forEach(function(key) {
            keys.push(key);
        });
        return keys;
    }
    function d3_map_size() {
        var size = 0;
        for (var key in this) if (key.charCodeAt(0) === d3_map_prefixCode) ++size;
        return size;
    }
    function d3_map_empty() {
        for (var key in this) if (key.charCodeAt(0) === d3_map_prefixCode) return false;
        return true;
    }
    d3.nest = function() {
        var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
        function map(mapType, array, depth) {
            if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
            var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
            while (++i < n) {
                if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
                    values.push(object);
                } else {
                    valuesByKey.set(keyValue, [ object ]);
                }
            }
            if (mapType) {
                object = mapType();
                setter = function(keyValue, values) {
                    object.set(keyValue, map(mapType, values, depth));
                };
            } else {
                object = {};
                setter = function(keyValue, values) {
                    object[keyValue] = map(mapType, values, depth);
                };
            }
            valuesByKey.forEach(setter);
            return object;
        }
        function entries(map, depth) {
            if (depth >= keys.length) return map;
            var array = [], sortKey = sortKeys[depth++];
            map.forEach(function(key, keyMap) {
                array.push({
                    key: key,
                    values: entries(keyMap, depth)
                });
            });
            return sortKey ? array.sort(function(a, b) {
                return sortKey(a.key, b.key);
            }) : array;
        }
        nest.map = function(array, mapType) {
            return map(mapType, array, 0);
        };
        nest.entries = function(array) {
            return entries(map(d3.map, array, 0), 0);
        };
        nest.key = function(d) {
            keys.push(d);
            return nest;
        };
        nest.sortKeys = function(order) {
            sortKeys[keys.length - 1] = order;
            return nest;
        };
        nest.sortValues = function(order) {
            sortValues = order;
            return nest;
        };
        nest.rollup = function(f) {
            rollup = f;
            return nest;
        };
        return nest;
    };
    d3.set = function(array) {
        var set = new d3_Set();
        if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
        return set;
    };
    function d3_Set() {}
    d3_class(d3_Set, {
        has: d3_map_has,
        add: function(value) {
            this[d3_map_prefix + value] = true;
            return value;
        },
        remove: function(value) {
            value = d3_map_prefix + value;
            return value in this && delete this[value];
        },
        values: d3_map_keys,
        size: d3_map_size,
        empty: d3_map_empty,
        forEach: function(f) {
            for (var value in this) if (value.charCodeAt(0) === d3_map_prefixCode) f.call(this, value.substring(1));
        }
    });
    d3.behavior = {};
    d3.rebind = function(target, source) {
        var i = 1, n = arguments.length, method;
        while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
        return target;
    };
    function d3_rebind(target, source, method) {
        return function() {
            var value = method.apply(source, arguments);
            return value === source ? target : value;
        };
    }
    function d3_vendorSymbol(object, name) {
        if (name in object) return name;
        name = name.charAt(0).toUpperCase() + name.substring(1);
        for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
            var prefixName = d3_vendorPrefixes[i] + name;
            if (prefixName in object) return prefixName;
        }
    }
    var d3_vendorPrefixes = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
    function d3_noop() {}
    d3.dispatch = function() {
        var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
        while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
        return dispatch;
    };
    function d3_dispatch() {}
    d3_dispatch.prototype.on = function(type, listener) {
        var i = type.indexOf("."), name = "";
        if (i >= 0) {
            name = type.substring(i + 1);
            type = type.substring(0, i);
        }
        if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
        if (arguments.length === 2) {
            if (listener == null) for (type in this) {
                if (this.hasOwnProperty(type)) this[type].on(name, null);
            }
            return this;
        }
    };
    function d3_dispatch_event(dispatch) {
        var listeners = [], listenerByName = new d3_Map();
        function event() {
            var z = listeners, i = -1, n = z.length, l;
            while (++i < n) if (l = z[i].on) l.apply(this, arguments);
            return dispatch;
        }
        event.on = function(name, listener) {
            var l = listenerByName.get(name), i;
            if (arguments.length < 2) return l && l.on;
            if (l) {
                l.on = null;
                listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
                listenerByName.remove(name);
            }
            if (listener) listeners.push(listenerByName.set(name, {
                on: listener
            }));
            return dispatch;
        };
        return event;
    }
    d3.event = null;
    function d3_eventPreventDefault() {
        d3.event.preventDefault();
    }
    function d3_eventSource() {
        var e = d3.event, s;
        while (s = e.sourceEvent) e = s;
        return e;
    }
    function d3_eventDispatch(target) {
        var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
        while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
        dispatch.of = function(thiz, argumentz) {
            return function(e1) {
                try {
                    var e0 = e1.sourceEvent = d3.event;
                    e1.target = target;
                    d3.event = e1;
                    dispatch[e1.type].apply(thiz, argumentz);
                } finally {
                    d3.event = e0;
                }
            };
        };
        return dispatch;
    }
    d3.requote = function(s) {
        return s.replace(d3_requote_re, "\\$&");
    };
    var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    var d3_subclass = {}.__proto__ ? function(object, prototype) {
        object.__proto__ = prototype;
    } : function(object, prototype) {
        for (var property in prototype) object[property] = prototype[property];
    };
    function d3_selection(groups) {
        d3_subclass(groups, d3_selectionPrototype);
        return groups;
    }
    var d3_select = function(s, n) {
        return n.querySelector(s);
    }, d3_selectAll = function(s, n) {
        return n.querySelectorAll(s);
    }, d3_selectMatcher = d3_documentElement[d3_vendorSymbol(d3_documentElement, "matchesSelector")], d3_selectMatches = function(n, s) {
        return d3_selectMatcher.call(n, s);
    };
    if (typeof Sizzle === "function") {
        d3_select = function(s, n) {
            return Sizzle(s, n)[0] || null;
        };
        d3_selectAll = Sizzle;
        d3_selectMatches = Sizzle.matchesSelector;
    }
    d3.selection = function() {
        return d3_selectionRoot;
    };
    var d3_selectionPrototype = d3.selection.prototype = [];
    d3_selectionPrototype.select = function(selector) {
        var subgroups = [], subgroup, subnode, group, node;
        selector = d3_selection_selector(selector);
        for (var j = -1, m = this.length; ++j < m; ) {
            subgroups.push(subgroup = []);
            subgroup.parentNode = (group = this[j]).parentNode;
            for (var i = -1, n = group.length; ++i < n; ) {
                if (node = group[i]) {
                    subgroup.push(subnode = selector.call(node, node.__data__, i, j));
                    if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
                } else {
                    subgroup.push(null);
                }
            }
        }
        return d3_selection(subgroups);
    };
    function d3_selection_selector(selector) {
        return typeof selector === "function" ? selector : function() {
            return d3_select(selector, this);
        };
    }
    d3_selectionPrototype.selectAll = function(selector) {
        var subgroups = [], subgroup, node;
        selector = d3_selection_selectorAll(selector);
        for (var j = -1, m = this.length; ++j < m; ) {
            for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
                if (node = group[i]) {
                    subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
                    subgroup.parentNode = node;
                }
            }
        }
        return d3_selection(subgroups);
    };
    function d3_selection_selectorAll(selector) {
        return typeof selector === "function" ? selector : function() {
            return d3_selectAll(selector, this);
        };
    }
    var d3_nsPrefix = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    d3.ns = {
        prefix: d3_nsPrefix,
        qualify: function(name) {
            var i = name.indexOf(":"), prefix = name;
            if (i >= 0) {
                prefix = name.substring(0, i);
                name = name.substring(i + 1);
            }
            return d3_nsPrefix.hasOwnProperty(prefix) ? {
                space: d3_nsPrefix[prefix],
                local: name
            } : name;
        }
    };
    d3_selectionPrototype.attr = function(name, value) {
        if (arguments.length < 2) {
            if (typeof name === "string") {
                var node = this.node();
                name = d3.ns.qualify(name);
                return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
            }
            for (value in name) this.each(d3_selection_attr(value, name[value]));
            return this;
        }
        return this.each(d3_selection_attr(name, value));
    };
    function d3_selection_attr(name, value) {
        name = d3.ns.qualify(name);
        function attrNull() {
            this.removeAttribute(name);
        }
        function attrNullNS() {
            this.removeAttributeNS(name.space, name.local);
        }
        function attrConstant() {
            this.setAttribute(name, value);
        }
        function attrConstantNS() {
            this.setAttributeNS(name.space, name.local, value);
        }
        function attrFunction() {
            var x = value.apply(this, arguments);
            if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
        }
        function attrFunctionNS() {
            var x = value.apply(this, arguments);
            if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
        }
        return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
    }
    function d3_collapse(s) {
        return s.trim().replace(/\s+/g, " ");
    }
    d3_selectionPrototype.classed = function(name, value) {
        if (arguments.length < 2) {
            if (typeof name === "string") {
                var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;
                if (value = node.classList) {
                    while (++i < n) if (!value.contains(name[i])) return false;
                } else {
                    value = node.getAttribute("class");
                    while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
                }
                return true;
            }
            for (value in name) this.each(d3_selection_classed(value, name[value]));
            return this;
        }
        return this.each(d3_selection_classed(name, value));
    };
    function d3_selection_classedRe(name) {
        return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
    }
    function d3_selection_classes(name) {
        return name.trim().split(/^|\s+/);
    }
    function d3_selection_classed(name, value) {
        name = d3_selection_classes(name).map(d3_selection_classedName);
        var n = name.length;
        function classedConstant() {
            var i = -1;
            while (++i < n) name[i](this, value);
        }
        function classedFunction() {
            var i = -1, x = value.apply(this, arguments);
            while (++i < n) name[i](this, x);
        }
        return typeof value === "function" ? classedFunction : classedConstant;
    }
    function d3_selection_classedName(name) {
        var re = d3_selection_classedRe(name);
        return function(node, value) {
            if (c = node.classList) return value ? c.add(name) : c.remove(name);
            var c = node.getAttribute("class") || "";
            if (value) {
                re.lastIndex = 0;
                if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
            } else {
                node.setAttribute("class", d3_collapse(c.replace(re, " ")));
            }
        };
    }
    d3_selectionPrototype.style = function(name, value, priority) {
        var n = arguments.length;
        if (n < 3) {
            if (typeof name !== "string") {
                if (n < 2) value = "";
                for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
                return this;
            }
            if (n < 2) return d3_window.getComputedStyle(this.node(), null).getPropertyValue(name);
            priority = "";
        }
        return this.each(d3_selection_style(name, value, priority));
    };
    function d3_selection_style(name, value, priority) {
        function styleNull() {
            this.style.removeProperty(name);
        }
        function styleConstant() {
            this.style.setProperty(name, value, priority);
        }
        function styleFunction() {
            var x = value.apply(this, arguments);
            if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
        }
        return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
    }
    d3_selectionPrototype.property = function(name, value) {
        if (arguments.length < 2) {
            if (typeof name === "string") return this.node()[name];
            for (value in name) this.each(d3_selection_property(value, name[value]));
            return this;
        }
        return this.each(d3_selection_property(name, value));
    };
    function d3_selection_property(name, value) {
        function propertyNull() {
            delete this[name];
        }
        function propertyConstant() {
            this[name] = value;
        }
        function propertyFunction() {
            var x = value.apply(this, arguments);
            if (x == null) delete this[name]; else this[name] = x;
        }
        return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
    }
    d3_selectionPrototype.text = function(value) {
        return arguments.length ? this.each(typeof value === "function" ? function() {
            var v = value.apply(this, arguments);
            this.textContent = v == null ? "" : v;
        } : value == null ? function() {
            this.textContent = "";
        } : function() {
            this.textContent = value;
        }) : this.node().textContent;
    };
    d3_selectionPrototype.html = function(value) {
        return arguments.length ? this.each(typeof value === "function" ? function() {
            var v = value.apply(this, arguments);
            this.innerHTML = v == null ? "" : v;
        } : value == null ? function() {
            this.innerHTML = "";
        } : function() {
            this.innerHTML = value;
        }) : this.node().innerHTML;
    };
    d3_selectionPrototype.append = function(name) {
        name = d3_selection_creator(name);
        return this.select(function() {
            return this.appendChild(name.apply(this, arguments));
        });
    };
    function d3_selection_creator(name) {
        return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? function() {
            return this.ownerDocument.createElementNS(name.space, name.local);
        } : function() {
            return this.ownerDocument.createElementNS(this.namespaceURI, name);
        };
    }
    d3_selectionPrototype.insert = function(name, before) {
        name = d3_selection_creator(name);
        before = d3_selection_selector(before);
        return this.select(function() {
            return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
        });
    };
    d3_selectionPrototype.remove = function() {
        return this.each(function() {
            var parent = this.parentNode;
            if (parent) parent.removeChild(this);
        });
    };
    d3_selectionPrototype.data = function(value, key) {
        var i = -1, n = this.length, group, node;
        if (!arguments.length) {
            value = new Array(n = (group = this[0]).length);
            while (++i < n) {
                if (node = group[i]) {
                    value[i] = node.__data__;
                }
            }
            return value;
        }
        function bind(group, groupData) {
            var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
            if (key) {
                var nodeByKeyValue = new d3_Map(), dataByKeyValue = new d3_Map(), keyValues = [], keyValue;
                for (i = -1; ++i < n; ) {
                    keyValue = key.call(node = group[i], node.__data__, i);
                    if (nodeByKeyValue.has(keyValue)) {
                        exitNodes[i] = node;
                    } else {
                        nodeByKeyValue.set(keyValue, node);
                    }
                    keyValues.push(keyValue);
                }
                for (i = -1; ++i < m; ) {
                    keyValue = key.call(groupData, nodeData = groupData[i], i);
                    if (node = nodeByKeyValue.get(keyValue)) {
                        updateNodes[i] = node;
                        node.__data__ = nodeData;
                    } else if (!dataByKeyValue.has(keyValue)) {
                        enterNodes[i] = d3_selection_dataNode(nodeData);
                    }
                    dataByKeyValue.set(keyValue, nodeData);
                    nodeByKeyValue.remove(keyValue);
                }
                for (i = -1; ++i < n; ) {
                    if (nodeByKeyValue.has(keyValues[i])) {
                        exitNodes[i] = group[i];
                    }
                }
            } else {
                for (i = -1; ++i < n0; ) {
                    node = group[i];
                    nodeData = groupData[i];
                    if (node) {
                        node.__data__ = nodeData;
                        updateNodes[i] = node;
                    } else {
                        enterNodes[i] = d3_selection_dataNode(nodeData);
                    }
                }
                for (;i < m; ++i) {
                    enterNodes[i] = d3_selection_dataNode(groupData[i]);
                }
                for (;i < n; ++i) {
                    exitNodes[i] = group[i];
                }
            }
            enterNodes.update = updateNodes;
            enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
            enter.push(enterNodes);
            update.push(updateNodes);
            exit.push(exitNodes);
        }
        var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
        if (typeof value === "function") {
            while (++i < n) {
                bind(group = this[i], value.call(group, group.parentNode.__data__, i));
            }
        } else {
            while (++i < n) {
                bind(group = this[i], value);
            }
        }
        update.enter = function() {
            return enter;
        };
        update.exit = function() {
            return exit;
        };
        return update;
    };
    function d3_selection_dataNode(data) {
        return {
            __data__: data
        };
    }
    d3_selectionPrototype.datum = function(value) {
        return arguments.length ? this.property("__data__", value) : this.property("__data__");
    };
    d3_selectionPrototype.filter = function(filter) {
        var subgroups = [], subgroup, group, node;
        if (typeof filter !== "function") filter = d3_selection_filter(filter);
        for (var j = 0, m = this.length; j < m; j++) {
            subgroups.push(subgroup = []);
            subgroup.parentNode = (group = this[j]).parentNode;
            for (var i = 0, n = group.length; i < n; i++) {
                if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
                    subgroup.push(node);
                }
            }
        }
        return d3_selection(subgroups);
    };
    function d3_selection_filter(selector) {
        return function() {
            return d3_selectMatches(this, selector);
        };
    }
    d3_selectionPrototype.order = function() {
        for (var j = -1, m = this.length; ++j < m; ) {
            for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
                if (node = group[i]) {
                    if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
                    next = node;
                }
            }
        }
        return this;
    };
    d3_selectionPrototype.sort = function(comparator) {
        comparator = d3_selection_sortComparator.apply(this, arguments);
        for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
        return this.order();
    };
    function d3_selection_sortComparator(comparator) {
        if (!arguments.length) comparator = d3_ascending;
        return function(a, b) {
            return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
        };
    }
    d3_selectionPrototype.each = function(callback) {
        return d3_selection_each(this, function(node, i, j) {
            callback.call(node, node.__data__, i, j);
        });
    };
    function d3_selection_each(groups, callback) {
        for (var j = 0, m = groups.length; j < m; j++) {
            for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
                if (node = group[i]) callback(node, i, j);
            }
        }
        return groups;
    }
    d3_selectionPrototype.call = function(callback) {
        var args = d3_array(arguments);
        callback.apply(args[0] = this, args);
        return this;
    };
    d3_selectionPrototype.empty = function() {
        return !this.node();
    };
    d3_selectionPrototype.node = function() {
        for (var j = 0, m = this.length; j < m; j++) {
            for (var group = this[j], i = 0, n = group.length; i < n; i++) {
                var node = group[i];
                if (node) return node;
            }
        }
        return null;
    };
    d3_selectionPrototype.size = function() {
        var n = 0;
        this.each(function() {
            ++n;
        });
        return n;
    };
    function d3_selection_enter(selection) {
        d3_subclass(selection, d3_selection_enterPrototype);
        return selection;
    }
    var d3_selection_enterPrototype = [];
    d3.selection.enter = d3_selection_enter;
    d3.selection.enter.prototype = d3_selection_enterPrototype;
    d3_selection_enterPrototype.append = d3_selectionPrototype.append;
    d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
    d3_selection_enterPrototype.node = d3_selectionPrototype.node;
    d3_selection_enterPrototype.call = d3_selectionPrototype.call;
    d3_selection_enterPrototype.size = d3_selectionPrototype.size;
    d3_selection_enterPrototype.select = function(selector) {
        var subgroups = [], subgroup, subnode, upgroup, group, node;
        for (var j = -1, m = this.length; ++j < m; ) {
            upgroup = (group = this[j]).update;
            subgroups.push(subgroup = []);
            subgroup.parentNode = group.parentNode;
            for (var i = -1, n = group.length; ++i < n; ) {
                if (node = group[i]) {
                    subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
                    subnode.__data__ = node.__data__;
                } else {
                    subgroup.push(null);
                }
            }
        }
        return d3_selection(subgroups);
    };
    d3_selection_enterPrototype.insert = function(name, before) {
        if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
        return d3_selectionPrototype.insert.call(this, name, before);
    };
    function d3_selection_enterInsertBefore(enter) {
        var i0, j0;
        return function(d, i, j) {
            var group = enter[j].update, n = group.length, node;
            if (j != j0) j0 = j, i0 = 0;
            if (i >= i0) i0 = i + 1;
            while (!(node = group[i0]) && ++i0 < n) ;
            return node;
        };
    }
    d3_selectionPrototype.transition = function() {
        var id = d3_transitionInheritId || ++d3_transitionId, subgroups = [], subgroup, node, transition = d3_transitionInherit || {
            time: Date.now(),
            ease: d3_ease_cubicInOut,
            delay: 0,
            duration: 250
        };
        for (var j = -1, m = this.length; ++j < m; ) {
            subgroups.push(subgroup = []);
            for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
                if (node = group[i]) d3_transitionNode(node, i, id, transition);
                subgroup.push(node);
            }
        }
        return d3_transition(subgroups, id);
    };
    d3_selectionPrototype.interrupt = function() {
        return this.each(d3_selection_interrupt);
    };
    function d3_selection_interrupt() {
        var lock = this.__transition__;
        if (lock) ++lock.active;
    }
    d3.select = function(node) {
        var group = [ typeof node === "string" ? d3_select(node, d3_document) : node ];
        group.parentNode = d3_documentElement;
        return d3_selection([ group ]);
    };
    d3.selectAll = function(nodes) {
        var group = d3_array(typeof nodes === "string" ? d3_selectAll(nodes, d3_document) : nodes);
        group.parentNode = d3_documentElement;
        return d3_selection([ group ]);
    };
    var d3_selectionRoot = d3.select(d3_documentElement);
    d3_selectionPrototype.on = function(type, listener, capture) {
        var n = arguments.length;
        if (n < 3) {
            if (typeof type !== "string") {
                if (n < 2) listener = false;
                for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
                return this;
            }
            if (n < 2) return (n = this.node()["__on" + type]) && n._;
            capture = false;
        }
        return this.each(d3_selection_on(type, listener, capture));
    };
    function d3_selection_on(type, listener, capture) {
        var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
        if (i > 0) type = type.substring(0, i);
        var filter = d3_selection_onFilters.get(type);
        if (filter) type = filter, wrap = d3_selection_onFilter;
        function onRemove() {
            var l = this[name];
            if (l) {
                this.removeEventListener(type, l, l.$);
                delete this[name];
            }
        }
        function onAdd() {
            var l = wrap(listener, d3_array(arguments));
            onRemove.call(this);
            this.addEventListener(type, this[name] = l, l.$ = capture);
            l._ = listener;
        }
        function removeAll() {
            var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"), match;
            for (var name in this) {
                if (match = name.match(re)) {
                    var l = this[name];
                    this.removeEventListener(match[1], l, l.$);
                    delete this[name];
                }
            }
        }
        return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
    }
    var d3_selection_onFilters = d3.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    });
    d3_selection_onFilters.forEach(function(k) {
        if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
    });
    function d3_selection_onListener(listener, argumentz) {
        return function(e) {
            var o = d3.event;
            d3.event = e;
            argumentz[0] = this.__data__;
            try {
                listener.apply(this, argumentz);
            } finally {
                d3.event = o;
            }
        };
    }
    function d3_selection_onFilter(listener, argumentz) {
        var l = d3_selection_onListener(listener, argumentz);
        return function(e) {
            var target = this, related = e.relatedTarget;
            if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
                l.call(target, e);
            }
        };
    }
    var d3_event_dragSelect = "onselectstart" in d3_document ? null : d3_vendorSymbol(d3_documentElement.style, "userSelect"), d3_event_dragId = 0;
    function d3_event_dragSuppress() {
        var name = ".dragsuppress-" + ++d3_event_dragId, click = "click" + name, w = d3.select(d3_window).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
        if (d3_event_dragSelect) {
            var style = d3_documentElement.style, select = style[d3_event_dragSelect];
            style[d3_event_dragSelect] = "none";
        }
        return function(suppressClick) {
            w.on(name, null);
            if (d3_event_dragSelect) style[d3_event_dragSelect] = select;
            if (suppressClick) {
                function off() {
                    w.on(click, null);
                }
                w.on(click, function() {
                    d3_eventPreventDefault();
                    off();
                }, true);
                setTimeout(off, 0);
            }
        };
    }
    d3.mouse = function(container) {
        return d3_mousePoint(container, d3_eventSource());
    };
    function d3_mousePoint(container, e) {
        if (e.changedTouches) e = e.changedTouches[0];
        var svg = container.ownerSVGElement || container;
        if (svg.createSVGPoint) {
            var point = svg.createSVGPoint();
            point.x = e.clientX, point.y = e.clientY;
            point = point.matrixTransform(container.getScreenCTM().inverse());
            return [ point.x, point.y ];
        }
        var rect = container.getBoundingClientRect();
        return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
    }
    d3.touches = function(container, touches) {
        if (arguments.length < 2) touches = d3_eventSource().touches;
        return touches ? d3_array(touches).map(function(touch) {
            var point = d3_mousePoint(container, touch);
            point.identifier = touch.identifier;
            return point;
        }) : [];
    };
    d3.behavior.drag = function() {
        var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d3.mouse, d3_behavior_dragMouseSubject, "mousemove", "mouseup"), touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_behavior_dragTouchSubject, "touchmove", "touchend");
        function drag() {
            this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
        }
        function dragstart(id, position, subject, move, end) {
            return function() {
                var that = this, target = d3.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id(), dragName = ".drag" + (dragId == null ? "" : "-" + dragId), dragOffset, dragSubject = d3.select(subject()).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(), position0 = position(parent, dragId);
                if (origin) {
                    dragOffset = origin.apply(that, arguments);
                    dragOffset = [ dragOffset.x - position0[0], dragOffset.y - position0[1] ];
                } else {
                    dragOffset = [ 0, 0 ];
                }
                dispatch({
                    type: "dragstart"
                });
                function moved() {
                    var position1 = position(parent, dragId), dx, dy;
                    if (!position1) return;
                    dx = position1[0] - position0[0];
                    dy = position1[1] - position0[1];
                    dragged |= dx | dy;
                    position0 = position1;
                    dispatch({
                        type: "drag",
                        x: position1[0] + dragOffset[0],
                        y: position1[1] + dragOffset[1],
                        dx: dx,
                        dy: dy
                    });
                }
                function ended() {
                    if (!position(parent, dragId)) return;
                    dragSubject.on(move + dragName, null).on(end + dragName, null);
                    dragRestore(dragged && d3.event.target === target);
                    dispatch({
                        type: "dragend"
                    });
                }
            };
        }
        drag.origin = function(x) {
            if (!arguments.length) return origin;
            origin = x;
            return drag;
        };
        return d3.rebind(drag, event, "on");
    };
    function d3_behavior_dragTouchId() {
        return d3.event.changedTouches[0].identifier;
    }
    function d3_behavior_dragTouchSubject() {
        return d3.event.target;
    }
    function d3_behavior_dragMouseSubject() {
        return d3_window;
    }
    var π = Math.PI, τ = 2 * π, halfπ = π / 2, ε = 1e-6, ε2 = ε * ε, d3_radians = π / 180, d3_degrees = 180 / π;
    function d3_sgn(x) {
        return x > 0 ? 1 : x < 0 ? -1 : 0;
    }
    function d3_cross2d(a, b, c) {
        return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
    }
    function d3_acos(x) {
        return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
    }
    function d3_asin(x) {
        return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
    }
    function d3_sinh(x) {
        return ((x = Math.exp(x)) - 1 / x) / 2;
    }
    function d3_cosh(x) {
        return ((x = Math.exp(x)) + 1 / x) / 2;
    }
    function d3_tanh(x) {
        return ((x = Math.exp(2 * x)) - 1) / (x + 1);
    }
    function d3_haversin(x) {
        return (x = Math.sin(x / 2)) * x;
    }
    var ρ = Math.SQRT2, ρ2 = 2, ρ4 = 4;
    d3.interpolateZoom = function(p0, p1) {
        var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2];
        var dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1), b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1), dr = r1 - r0, S = (dr || Math.log(w1 / w0)) / ρ;
        function interpolate(t) {
            var s = t * S;
            if (dr) {
                var coshr0 = d3_cosh(r0), u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
                return [ ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0) ];
            }
            return [ ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * s) ];
        }
        interpolate.duration = S * 1e3;
        return interpolate;
    };
    d3.behavior.zoom = function() {
        var view = {
            x: 0,
            y: 0,
            k: 1
        }, translate0, center, size = [ 960, 500 ], scaleExtent = d3_behavior_zoomInfinity, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
        function zoom(g) {
            g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on(mousemove, mousewheelreset).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
        }
        zoom.event = function(g) {
            g.each(function() {
                var dispatch = event.of(this, arguments), view1 = view;
                if (d3_transitionInheritId) {
                    d3.select(this).transition().each("start.zoom", function() {
                        view = this.__chart__ || {
                            x: 0,
                            y: 0,
                            k: 1
                        };
                        zoomstarted(dispatch);
                    }).tween("zoom:zoom", function() {
                        var dx = size[0], dy = size[1], cx = dx / 2, cy = dy / 2, i = d3.interpolateZoom([ (cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k ], [ (cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k ]);
                        return function(t) {
                            var l = i(t), k = dx / l[2];
                            this.__chart__ = view = {
                                x: cx - l[0] * k,
                                y: cy - l[1] * k,
                                k: k
                            };
                            zoomed(dispatch);
                        };
                    }).each("end.zoom", function() {
                        zoomended(dispatch);
                    });
                } else {
                    this.__chart__ = view;
                    zoomstarted(dispatch);
                    zoomed(dispatch);
                    zoomended(dispatch);
                }
            });
        };
        zoom.translate = function(_) {
            if (!arguments.length) return [ view.x, view.y ];
            view = {
                x: +_[0],
                y: +_[1],
                k: view.k
            };
            rescale();
            return zoom;
        };
        zoom.scale = function(_) {
            if (!arguments.length) return view.k;
            view = {
                x: view.x,
                y: view.y,
                k: +_
            };
            rescale();
            return zoom;
        };
        zoom.scaleExtent = function(_) {
            if (!arguments.length) return scaleExtent;
            scaleExtent = _ == null ? d3_behavior_zoomInfinity : [ +_[0], +_[1] ];
            return zoom;
        };
        zoom.center = function(_) {
            if (!arguments.length) return center;
            center = _ && [ +_[0], +_[1] ];
            return zoom;
        };
        zoom.size = function(_) {
            if (!arguments.length) return size;
            size = _ && [ +_[0], +_[1] ];
            return zoom;
        };
        zoom.x = function(z) {
            if (!arguments.length) return x1;
            x1 = z;
            x0 = z.copy();
            view = {
                x: 0,
                y: 0,
                k: 1
            };
            return zoom;
        };
        zoom.y = function(z) {
            if (!arguments.length) return y1;
            y1 = z;
            y0 = z.copy();
            view = {
                x: 0,
                y: 0,
                k: 1
            };
            return zoom;
        };
        function location(p) {
            return [ (p[0] - view.x) / view.k, (p[1] - view.y) / view.k ];
        }
        function point(l) {
            return [ l[0] * view.k + view.x, l[1] * view.k + view.y ];
        }
        function scaleTo(s) {
            view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
        }
        function translateTo(p, l) {
            l = point(l);
            view.x += p[0] - l[0];
            view.y += p[1] - l[1];
        }
        function rescale() {
            if (x1) x1.domain(x0.range().map(function(x) {
                return (x - view.x) / view.k;
            }).map(x0.invert));
            if (y1) y1.domain(y0.range().map(function(y) {
                return (y - view.y) / view.k;
            }).map(y0.invert));
        }
        function zoomstarted(dispatch) {
            dispatch({
                type: "zoomstart"
            });
        }
        function zoomed(dispatch) {
            rescale();
            dispatch({
                type: "zoom",
                scale: view.k,
                translate: [ view.x, view.y ]
            });
        }
        function zoomended(dispatch) {
            dispatch({
                type: "zoomend"
            });
        }
        function mousedowned() {
            var that = this, target = d3.event.target, dispatch = event.of(that, arguments), dragged = 0, subject = d3.select(d3_window).on(mousemove, moved).on(mouseup, ended), location0 = location(d3.mouse(that)), dragRestore = d3_event_dragSuppress();
            d3_selection_interrupt.call(that);
            zoomstarted(dispatch);
            function moved() {
                dragged = 1;
                translateTo(d3.mouse(that), location0);
                zoomed(dispatch);
            }
            function ended() {
                subject.on(mousemove, d3_window === that ? mousewheelreset : null).on(mouseup, null);
                dragRestore(dragged && d3.event.target === target);
                zoomended(dispatch);
            }
        }
        function touchstarted() {
            var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = ".zoom-" + d3.event.changedTouches[0].identifier, touchmove = "touchmove" + zoomName, touchend = "touchend" + zoomName, targets = [], subject = d3.select(that).on(mousedown, null).on(touchstart, started), dragRestore = d3_event_dragSuppress();
            d3_selection_interrupt.call(that);
            started();
            zoomstarted(dispatch);
            function relocate() {
                var touches = d3.touches(that);
                scale0 = view.k;
                touches.forEach(function(t) {
                    if (t.identifier in locations0) locations0[t.identifier] = location(t);
                });
                return touches;
            }
            function started() {
                var target = d3.event.target;
                d3.select(target).on(touchmove, moved).on(touchend, ended);
                targets.push(target);
                var changed = d3.event.changedTouches;
                for (var i = 0, n = changed.length; i < n; ++i) {
                    locations0[changed[i].identifier] = null;
                }
                var touches = relocate(), now = Date.now();
                if (touches.length === 1) {
                    if (now - touchtime < 500) {
                        var p = touches[0], l = locations0[p.identifier];
                        scaleTo(view.k * 2);
                        translateTo(p, l);
                        d3_eventPreventDefault();
                        zoomed(dispatch);
                    }
                    touchtime = now;
                } else if (touches.length > 1) {
                    var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];
                    distance0 = dx * dx + dy * dy;
                }
            }
            function moved() {
                var touches = d3.touches(that), p0, l0, p1, l1;
                for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
                    p1 = touches[i];
                    if (l1 = locations0[p1.identifier]) {
                        if (l0) break;
                        p0 = p1, l0 = l1;
                    }
                }
                if (l1) {
                    var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
                    p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
                    l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
                    scaleTo(scale1 * scale0);
                }
                touchtime = null;
                translateTo(p0, l0);
                zoomed(dispatch);
            }
            function ended() {
                if (d3.event.touches.length) {
                    var changed = d3.event.changedTouches;
                    for (var i = 0, n = changed.length; i < n; ++i) {
                        delete locations0[changed[i].identifier];
                    }
                    for (var identifier in locations0) {
                        return void relocate();
                    }
                }
                d3.selectAll(targets).on(zoomName, null);
                subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
                dragRestore();
                zoomended(dispatch);
            }
        }
        function mousewheeled() {
            var dispatch = event.of(this, arguments);
            if (mousewheelTimer) clearTimeout(mousewheelTimer); else d3_selection_interrupt.call(this), 
            zoomstarted(dispatch);
            mousewheelTimer = setTimeout(function() {
                mousewheelTimer = null;
                zoomended(dispatch);
            }, 50);
            d3_eventPreventDefault();
            var point = center || d3.mouse(this);
            if (!translate0) translate0 = location(point);
            scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
            translateTo(point, translate0);
            zoomed(dispatch);
        }
        function mousewheelreset() {
            translate0 = null;
        }
        function dblclicked() {
            var dispatch = event.of(this, arguments), p = d3.mouse(this), l = location(p), k = Math.log(view.k) / Math.LN2;
            zoomstarted(dispatch);
            scaleTo(Math.pow(2, d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1));
            translateTo(p, l);
            zoomed(dispatch);
            zoomended(dispatch);
        }
        return d3.rebind(zoom, event, "on");
    };
    var d3_behavior_zoomInfinity = [ 0, Infinity ];
    var d3_behavior_zoomDelta, d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
        return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
    }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
        return d3.event.wheelDelta;
    }, "mousewheel") : (d3_behavior_zoomDelta = function() {
        return -d3.event.detail;
    }, "MozMousePixelScroll");
    function d3_Color() {}
    d3_Color.prototype.toString = function() {
        return this.rgb() + "";
    };
    d3.hsl = function(h, s, l) {
        return arguments.length === 1 ? h instanceof d3_Hsl ? d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : d3_hsl(+h, +s, +l);
    };
    function d3_hsl(h, s, l) {
        return new d3_Hsl(h, s, l);
    }
    function d3_Hsl(h, s, l) {
        this.h = h;
        this.s = s;
        this.l = l;
    }
    var d3_hslPrototype = d3_Hsl.prototype = new d3_Color();
    d3_hslPrototype.brighter = function(k) {
        k = Math.pow(.7, arguments.length ? k : 1);
        return d3_hsl(this.h, this.s, this.l / k);
    };
    d3_hslPrototype.darker = function(k) {
        k = Math.pow(.7, arguments.length ? k : 1);
        return d3_hsl(this.h, this.s, k * this.l);
    };
    d3_hslPrototype.rgb = function() {
        return d3_hsl_rgb(this.h, this.s, this.l);
    };
    function d3_hsl_rgb(h, s, l) {
        var m1, m2;
        h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
        s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
        l = l < 0 ? 0 : l > 1 ? 1 : l;
        m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
        m1 = 2 * l - m2;
        function v(h) {
            if (h > 360) h -= 360; else if (h < 0) h += 360;
            if (h < 60) return m1 + (m2 - m1) * h / 60;
            if (h < 180) return m2;
            if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
            return m1;
        }
        function vv(h) {
            return Math.round(v(h) * 255);
        }
        return d3_rgb(vv(h + 120), vv(h), vv(h - 120));
    }
    d3.hcl = function(h, c, l) {
        return arguments.length === 1 ? h instanceof d3_Hcl ? d3_hcl(h.h, h.c, h.l) : h instanceof d3_Lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : d3_hcl(+h, +c, +l);
    };
    function d3_hcl(h, c, l) {
        return new d3_Hcl(h, c, l);
    }
    function d3_Hcl(h, c, l) {
        this.h = h;
        this.c = c;
        this.l = l;
    }
    var d3_hclPrototype = d3_Hcl.prototype = new d3_Color();
    d3_hclPrototype.brighter = function(k) {
        return d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
    };
    d3_hclPrototype.darker = function(k) {
        return d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
    };
    d3_hclPrototype.rgb = function() {
        return d3_hcl_lab(this.h, this.c, this.l).rgb();
    };
    function d3_hcl_lab(h, c, l) {
        if (isNaN(h)) h = 0;
        if (isNaN(c)) c = 0;
        return d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
    }
    d3.lab = function(l, a, b) {
        return arguments.length === 1 ? l instanceof d3_Lab ? d3_lab(l.l, l.a, l.b) : l instanceof d3_Hcl ? d3_hcl_lab(l.l, l.c, l.h) : d3_rgb_lab((l = d3.rgb(l)).r, l.g, l.b) : d3_lab(+l, +a, +b);
    };
    function d3_lab(l, a, b) {
        return new d3_Lab(l, a, b);
    }
    function d3_Lab(l, a, b) {
        this.l = l;
        this.a = a;
        this.b = b;
    }
    var d3_lab_K = 18;
    var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
    var d3_labPrototype = d3_Lab.prototype = new d3_Color();
    d3_labPrototype.brighter = function(k) {
        return d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
    };
    d3_labPrototype.darker = function(k) {
        return d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
    };
    d3_labPrototype.rgb = function() {
        return d3_lab_rgb(this.l, this.a, this.b);
    };
    function d3_lab_rgb(l, a, b) {
        var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
        x = d3_lab_xyz(x) * d3_lab_X;
        y = d3_lab_xyz(y) * d3_lab_Y;
        z = d3_lab_xyz(z) * d3_lab_Z;
        return d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
    }
    function d3_lab_hcl(l, a, b) {
        return l > 0 ? d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : d3_hcl(NaN, NaN, l);
    }
    function d3_lab_xyz(x) {
        return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
    }
    function d3_xyz_lab(x) {
        return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
    }
    function d3_xyz_rgb(r) {
        return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
    }
    d3.rgb = function(r, g, b) {
        return arguments.length === 1 ? r instanceof d3_Rgb ? d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : d3_rgb(~~r, ~~g, ~~b);
    };
    function d3_rgbNumber(value) {
        return d3_rgb(value >> 16, value >> 8 & 255, value & 255);
    }
    function d3_rgbString(value) {
        return d3_rgbNumber(value) + "";
    }
    function d3_rgb(r, g, b) {
        return new d3_Rgb(r, g, b);
    }
    function d3_Rgb(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    var d3_rgbPrototype = d3_Rgb.prototype = new d3_Color();
    d3_rgbPrototype.brighter = function(k) {
        k = Math.pow(.7, arguments.length ? k : 1);
        var r = this.r, g = this.g, b = this.b, i = 30;
        if (!r && !g && !b) return d3_rgb(i, i, i);
        if (r && r < i) r = i;
        if (g && g < i) g = i;
        if (b && b < i) b = i;
        return d3_rgb(Math.min(255, ~~(r / k)), Math.min(255, ~~(g / k)), Math.min(255, ~~(b / k)));
    };
    d3_rgbPrototype.darker = function(k) {
        k = Math.pow(.7, arguments.length ? k : 1);
        return d3_rgb(~~(k * this.r), ~~(k * this.g), ~~(k * this.b));
    };
    d3_rgbPrototype.hsl = function() {
        return d3_rgb_hsl(this.r, this.g, this.b);
    };
    d3_rgbPrototype.toString = function() {
        return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
    };
    function d3_rgb_hex(v) {
        return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
    }
    function d3_rgb_parse(format, rgb, hsl) {
        var r = 0, g = 0, b = 0, m1, m2, color;
        m1 = /([a-z]+)\((.*)\)/i.exec(format);
        if (m1) {
            m2 = m1[2].split(",");
            switch (m1[1]) {
              case "hsl":
                {
                    return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
                }

              case "rgb":
                {
                    return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
                }
            }
        }
        if (color = d3_rgb_names.get(format)) return rgb(color.r, color.g, color.b);
        if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.substring(1), 16))) {
            if (format.length === 4) {
                r = (color & 3840) >> 4;
                r = r >> 4 | r;
                g = color & 240;
                g = g >> 4 | g;
                b = color & 15;
                b = b << 4 | b;
            } else if (format.length === 7) {
                r = (color & 16711680) >> 16;
                g = (color & 65280) >> 8;
                b = color & 255;
            }
        }
        return rgb(r, g, b);
    }
    function d3_rgb_hsl(r, g, b) {
        var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
        if (d) {
            s = l < .5 ? d / (max + min) : d / (2 - max - min);
            if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
            h *= 60;
        } else {
            h = NaN;
            s = l > 0 && l < 1 ? 0 : h;
        }
        return d3_hsl(h, s, l);
    }
    function d3_rgb_lab(r, g, b) {
        r = d3_rgb_xyz(r);
        g = d3_rgb_xyz(g);
        b = d3_rgb_xyz(b);
        var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
        return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
    }
    function d3_rgb_xyz(r) {
        return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
    }
    function d3_rgb_parseNumber(c) {
        var f = parseFloat(c);
        return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
    }
    var d3_rgb_names = d3.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    });
    d3_rgb_names.forEach(function(key, value) {
        d3_rgb_names.set(key, d3_rgbNumber(value));
    });
    function d3_functor(v) {
        return typeof v === "function" ? v : function() {
            return v;
        };
    }
    d3.functor = d3_functor;
    function d3_identity(d) {
        return d;
    }
    d3.xhr = d3_xhrType(d3_identity);
    function d3_xhrType(response) {
        return function(url, mimeType, callback) {
            if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, 
            mimeType = null;
            return d3_xhr(url, mimeType, response, callback);
        };
    }
    function d3_xhr(url, mimeType, response, callback) {
        var xhr = {}, dispatch = d3.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
        if (d3_window.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
        "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
            request.readyState > 3 && respond();
        };
        function respond() {
            var status = request.status, result;
            if (!status && request.responseText || status >= 200 && status < 300 || status === 304) {
                try {
                    result = response.call(xhr, request);
                } catch (e) {
                    dispatch.error.call(xhr, e);
                    return;
                }
                dispatch.load.call(xhr, result);
            } else {
                dispatch.error.call(xhr, request);
            }
        }
        request.onprogress = function(event) {
            var o = d3.event;
            d3.event = event;
            try {
                dispatch.progress.call(xhr, request);
            } finally {
                d3.event = o;
            }
        };
        xhr.header = function(name, value) {
            name = (name + "").toLowerCase();
            if (arguments.length < 2) return headers[name];
            if (value == null) delete headers[name]; else headers[name] = value + "";
            return xhr;
        };
        xhr.mimeType = function(value) {
            if (!arguments.length) return mimeType;
            mimeType = value == null ? null : value + "";
            return xhr;
        };
        xhr.responseType = function(value) {
            if (!arguments.length) return responseType;
            responseType = value;
            return xhr;
        };
        xhr.response = function(value) {
            response = value;
            return xhr;
        };
        [ "get", "post" ].forEach(function(method) {
            xhr[method] = function() {
                return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
            };
        });
        xhr.send = function(method, data, callback) {
            if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
            request.open(method, url, true);
            if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
            if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
            if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
            if (responseType != null) request.responseType = responseType;
            if (callback != null) xhr.on("error", callback).on("load", function(request) {
                callback(null, request);
            });
            dispatch.beforesend.call(xhr, request);
            request.send(data == null ? null : data);
            return xhr;
        };
        xhr.abort = function() {
            request.abort();
            return xhr;
        };
        d3.rebind(xhr, dispatch, "on");
        return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
    }
    function d3_xhr_fixCallback(callback) {
        return callback.length === 1 ? function(error, request) {
            callback(error == null ? request : null);
        } : callback;
    }
    d3.dsv = function(delimiter, mimeType) {
        var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
        function dsv(url, row, callback) {
            if (arguments.length < 3) callback = row, row = null;
            var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
            xhr.row = function(_) {
                return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
            };
            return xhr;
        }
        function response(request) {
            return dsv.parse(request.responseText);
        }
        function typedResponse(f) {
            return function(request) {
                return dsv.parse(request.responseText, f);
            };
        }
        dsv.parse = function(text, f) {
            var o;
            return dsv.parseRows(text, function(row, i) {
                if (o) return o(row, i - 1);
                var a = new Function("d", "return {" + row.map(function(name, i) {
                    return JSON.stringify(name) + ": d[" + i + "]";
                }).join(",") + "}");
                o = f ? function(row, i) {
                    return f(a(row), i);
                } : a;
            });
        };
        dsv.parseRows = function(text, f) {
            var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
            function token() {
                if (I >= N) return EOF;
                if (eol) return eol = false, EOL;
                var j = I;
                if (text.charCodeAt(j) === 34) {
                    var i = j;
                    while (i++ < N) {
                        if (text.charCodeAt(i) === 34) {
                            if (text.charCodeAt(i + 1) !== 34) break;
                            ++i;
                        }
                    }
                    I = i + 2;
                    var c = text.charCodeAt(i + 1);
                    if (c === 13) {
                        eol = true;
                        if (text.charCodeAt(i + 2) === 10) ++I;
                    } else if (c === 10) {
                        eol = true;
                    }
                    return text.substring(j + 1, i).replace(/""/g, '"');
                }
                while (I < N) {
                    var c = text.charCodeAt(I++), k = 1;
                    if (c === 10) eol = true; else if (c === 13) {
                        eol = true;
                        if (text.charCodeAt(I) === 10) ++I, ++k;
                    } else if (c !== delimiterCode) continue;
                    return text.substring(j, I - k);
                }
                return text.substring(j);
            }
            while ((t = token()) !== EOF) {
                var a = [];
                while (t !== EOL && t !== EOF) {
                    a.push(t);
                    t = token();
                }
                if (f && !(a = f(a, n++))) continue;
                rows.push(a);
            }
            return rows;
        };
        dsv.format = function(rows) {
            if (Array.isArray(rows[0])) return dsv.formatRows(rows);
            var fieldSet = new d3_Set(), fields = [];
            rows.forEach(function(row) {
                for (var field in row) {
                    if (!fieldSet.has(field)) {
                        fields.push(fieldSet.add(field));
                    }
                }
            });
            return [ fields.map(formatValue).join(delimiter) ].concat(rows.map(function(row) {
                return fields.map(function(field) {
                    return formatValue(row[field]);
                }).join(delimiter);
            })).join("\n");
        };
        dsv.formatRows = function(rows) {
            return rows.map(formatRow).join("\n");
        };
        function formatRow(row) {
            return row.map(formatValue).join(delimiter);
        }
        function formatValue(text) {
            return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
        }
        return dsv;
    };
    d3.csv = d3.dsv(",", "text/csv");
    d3.tsv = d3.dsv("\t", "text/tab-separated-values");
    d3.touch = function(container, touches, identifier) {
        if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
        if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
            if ((touch = touches[i]).identifier === identifier) {
                return d3_mousePoint(container, touch);
            }
        }
    };
    var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_active, d3_timer_frame = d3_window[d3_vendorSymbol(d3_window, "requestAnimationFrame")] || function(callback) {
        setTimeout(callback, 17);
    };
    d3.timer = function(callback, delay, then) {
        var n = arguments.length;
        if (n < 2) delay = 0;
        if (n < 3) then = Date.now();
        var time = then + delay, timer = {
            c: callback,
            t: time,
            f: false,
            n: null
        };
        if (d3_timer_queueTail) d3_timer_queueTail.n = timer; else d3_timer_queueHead = timer;
        d3_timer_queueTail = timer;
        if (!d3_timer_interval) {
            d3_timer_timeout = clearTimeout(d3_timer_timeout);
            d3_timer_interval = 1;
            d3_timer_frame(d3_timer_step);
        }
    };
    function d3_timer_step() {
        var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
        if (delay > 24) {
            if (isFinite(delay)) {
                clearTimeout(d3_timer_timeout);
                d3_timer_timeout = setTimeout(d3_timer_step, delay);
            }
            d3_timer_interval = 0;
        } else {
            d3_timer_interval = 1;
            d3_timer_frame(d3_timer_step);
        }
    }
    d3.timer.flush = function() {
        d3_timer_mark();
        d3_timer_sweep();
    };
    function d3_timer_mark() {
        var now = Date.now();
        d3_timer_active = d3_timer_queueHead;
        while (d3_timer_active) {
            if (now >= d3_timer_active.t) d3_timer_active.f = d3_timer_active.c(now - d3_timer_active.t);
            d3_timer_active = d3_timer_active.n;
        }
        return now;
    }
    function d3_timer_sweep() {
        var t0, t1 = d3_timer_queueHead, time = Infinity;
        while (t1) {
            if (t1.f) {
                t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
            } else {
                if (t1.t < time) time = t1.t;
                t1 = (t0 = t1).n;
            }
        }
        d3_timer_queueTail = t0;
        return time;
    }
    function d3_format_precision(x, p) {
        return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
    }
    d3.round = function(x, n) {
        return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
    };
    var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
    d3.formatPrefix = function(value, precision) {
        var i = 0;
        if (value) {
            if (value < 0) value *= -1;
            if (precision) value = d3.round(value, d3_format_precision(value, precision));
            i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
            i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
        }
        return d3_formatPrefixes[8 + i / 3];
    };
    function d3_formatPrefix(d, i) {
        var k = Math.pow(10, abs(8 - i) * 3);
        return {
            scale: i > 8 ? function(d) {
                return d / k;
            } : function(d) {
                return d * k;
            },
            symbol: d
        };
    }
    function d3_locale_numberFormat(locale) {
        var locale_decimal = locale.decimal, locale_thousands = locale.thousands, locale_grouping = locale.grouping, locale_currency = locale.currency, formatGroup = locale_grouping ? function(value) {
            var i = value.length, t = [], j = 0, g = locale_grouping[0];
            while (i > 0 && g > 0) {
                t.push(value.substring(i -= g, i + g));
                g = locale_grouping[j = (j + 1) % locale_grouping.length];
            }
            return t.reverse().join(locale_thousands);
        } : d3_identity;
        return function(specifier) {
            var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "", symbol = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, prefix = "", suffix = "", integer = false;
            if (precision) precision = +precision.substring(1);
            if (zfill || fill === "0" && align === "=") {
                zfill = fill = "0";
                align = "=";
                if (comma) width -= Math.floor((width - 1) / 4);
            }
            switch (type) {
              case "n":
                comma = true;
                type = "g";
                break;

              case "%":
                scale = 100;
                suffix = "%";
                type = "f";
                break;

              case "p":
                scale = 100;
                suffix = "%";
                type = "r";
                break;

              case "b":
              case "o":
              case "x":
              case "X":
                if (symbol === "#") prefix = "0" + type.toLowerCase();

              case "c":
              case "d":
                integer = true;
                precision = 0;
                break;

              case "s":
                scale = -1;
                type = "r";
                break;
            }
            if (symbol === "$") prefix = locale_currency[0], suffix = locale_currency[1];
            if (type == "r" && !precision) type = "g";
            if (precision != null) {
                if (type == "g") precision = Math.max(1, Math.min(21, precision)); else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
            }
            type = d3_format_types.get(type) || d3_format_typeDefault;
            var zcomma = zfill && comma;
            return function(value) {
                var fullSuffix = suffix;
                if (integer && value % 1) return "";
                var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign;
                if (scale < 0) {
                    var unit = d3.formatPrefix(value, precision);
                    value = unit.scale(value);
                    fullSuffix = unit.symbol + suffix;
                } else {
                    value *= scale;
                }
                value = type(value, precision);
                var i = value.lastIndexOf("."), before = i < 0 ? value : value.substring(0, i), after = i < 0 ? "" : locale_decimal + value.substring(i + 1);
                if (!zfill && comma) before = formatGroup(before);
                var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
                if (zcomma) before = formatGroup(padding + before);
                negative += prefix;
                value = before + after;
                return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
            };
        };
    }
    var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
    var d3_format_types = d3.map({
        b: function(x) {
            return x.toString(2);
        },
        c: function(x) {
            return String.fromCharCode(x);
        },
        o: function(x) {
            return x.toString(8);
        },
        x: function(x) {
            return x.toString(16);
        },
        X: function(x) {
            return x.toString(16).toUpperCase();
        },
        g: function(x, p) {
            return x.toPrecision(p);
        },
        e: function(x, p) {
            return x.toExponential(p);
        },
        f: function(x, p) {
            return x.toFixed(p);
        },
        r: function(x, p) {
            return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
        }
    });
    function d3_format_typeDefault(x) {
        return x + "";
    }
    var d3_time = d3.time = {}, d3_date = Date;
    function d3_date_utc() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
    }
    d3_date_utc.prototype = {
        getDate: function() {
            return this._.getUTCDate();
        },
        getDay: function() {
            return this._.getUTCDay();
        },
        getFullYear: function() {
            return this._.getUTCFullYear();
        },
        getHours: function() {
            return this._.getUTCHours();
        },
        getMilliseconds: function() {
            return this._.getUTCMilliseconds();
        },
        getMinutes: function() {
            return this._.getUTCMinutes();
        },
        getMonth: function() {
            return this._.getUTCMonth();
        },
        getSeconds: function() {
            return this._.getUTCSeconds();
        },
        getTime: function() {
            return this._.getTime();
        },
        getTimezoneOffset: function() {
            return 0;
        },
        valueOf: function() {
            return this._.valueOf();
        },
        setDate: function() {
            d3_time_prototype.setUTCDate.apply(this._, arguments);
        },
        setDay: function() {
            d3_time_prototype.setUTCDay.apply(this._, arguments);
        },
        setFullYear: function() {
            d3_time_prototype.setUTCFullYear.apply(this._, arguments);
        },
        setHours: function() {
            d3_time_prototype.setUTCHours.apply(this._, arguments);
        },
        setMilliseconds: function() {
            d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
        },
        setMinutes: function() {
            d3_time_prototype.setUTCMinutes.apply(this._, arguments);
        },
        setMonth: function() {
            d3_time_prototype.setUTCMonth.apply(this._, arguments);
        },
        setSeconds: function() {
            d3_time_prototype.setUTCSeconds.apply(this._, arguments);
        },
        setTime: function() {
            d3_time_prototype.setTime.apply(this._, arguments);
        }
    };
    var d3_time_prototype = Date.prototype;
    function d3_time_interval(local, step, number) {
        function round(date) {
            var d0 = local(date), d1 = offset(d0, 1);
            return date - d0 < d1 - date ? d0 : d1;
        }
        function ceil(date) {
            step(date = local(new d3_date(date - 1)), 1);
            return date;
        }
        function offset(date, k) {
            step(date = new d3_date(+date), k);
            return date;
        }
        function range(t0, t1, dt) {
            var time = ceil(t0), times = [];
            if (dt > 1) {
                while (time < t1) {
                    if (!(number(time) % dt)) times.push(new Date(+time));
                    step(time, 1);
                }
            } else {
                while (time < t1) times.push(new Date(+time)), step(time, 1);
            }
            return times;
        }
        function range_utc(t0, t1, dt) {
            try {
                d3_date = d3_date_utc;
                var utc = new d3_date_utc();
                utc._ = t0;
                return range(utc, t1, dt);
            } finally {
                d3_date = Date;
            }
        }
        local.floor = local;
        local.round = round;
        local.ceil = ceil;
        local.offset = offset;
        local.range = range;
        var utc = local.utc = d3_time_interval_utc(local);
        utc.floor = utc;
        utc.round = d3_time_interval_utc(round);
        utc.ceil = d3_time_interval_utc(ceil);
        utc.offset = d3_time_interval_utc(offset);
        utc.range = range_utc;
        return local;
    }
    function d3_time_interval_utc(method) {
        return function(date, k) {
            try {
                d3_date = d3_date_utc;
                var utc = new d3_date_utc();
                utc._ = date;
                return method(utc, k)._;
            } finally {
                d3_date = Date;
            }
        };
    }
    d3_time.year = d3_time_interval(function(date) {
        date = d3_time.day(date);
        date.setMonth(0, 1);
        return date;
    }, function(date, offset) {
        date.setFullYear(date.getFullYear() + offset);
    }, function(date) {
        return date.getFullYear();
    });
    d3_time.years = d3_time.year.range;
    d3_time.years.utc = d3_time.year.utc.range;
    d3_time.day = d3_time_interval(function(date) {
        var day = new d3_date(2e3, 0);
        day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
        return day;
    }, function(date, offset) {
        date.setDate(date.getDate() + offset);
    }, function(date) {
        return date.getDate() - 1;
    });
    d3_time.days = d3_time.day.range;
    d3_time.days.utc = d3_time.day.utc.range;
    d3_time.dayOfYear = function(date) {
        var year = d3_time.year(date);
        return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
    };
    [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ].forEach(function(day, i) {
        i = 7 - i;
        var interval = d3_time[day] = d3_time_interval(function(date) {
            (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
            return date;
        }, function(date, offset) {
            date.setDate(date.getDate() + Math.floor(offset) * 7);
        }, function(date) {
            var day = d3_time.year(date).getDay();
            return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
        });
        d3_time[day + "s"] = interval.range;
        d3_time[day + "s"].utc = interval.utc.range;
        d3_time[day + "OfYear"] = function(date) {
            var day = d3_time.year(date).getDay();
            return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
        };
    });
    d3_time.week = d3_time.sunday;
    d3_time.weeks = d3_time.sunday.range;
    d3_time.weeks.utc = d3_time.sunday.utc.range;
    d3_time.weekOfYear = d3_time.sundayOfYear;
    function d3_locale_timeFormat(locale) {
        var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_days = locale.days, locale_shortDays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
        function d3_time_format(template) {
            var n = template.length;
            function format(date) {
                var string = [], i = -1, j = 0, c, p, f;
                while (++i < n) {
                    if (template.charCodeAt(i) === 37) {
                        string.push(template.substring(j, i));
                        if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
                        if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
                        string.push(c);
                        j = i + 1;
                    }
                }
                string.push(template.substring(j, i));
                return string.join("");
            }
            format.parse = function(string) {
                var d = {
                    y: 1900,
                    m: 0,
                    d: 1,
                    H: 0,
                    M: 0,
                    S: 0,
                    L: 0,
                    Z: null
                }, i = d3_time_parse(d, template, string, 0);
                if (i != string.length) return null;
                if ("p" in d) d.H = d.H % 12 + d.p * 12;
                var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
                if ("j" in d) date.setFullYear(d.y, 0, d.j); else if ("w" in d && ("W" in d || "U" in d)) {
                    date.setFullYear(d.y, 0, 1);
                    date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
                } else date.setFullYear(d.y, d.m, d.d);
                date.setHours(d.H + Math.floor(d.Z / 100), d.M + d.Z % 100, d.S, d.L);
                return localZ ? date._ : date;
            };
            format.toString = function() {
                return template;
            };
            return format;
        }
        function d3_time_parse(date, template, string, j) {
            var c, p, t, i = 0, n = template.length, m = string.length;
            while (i < n) {
                if (j >= m) return -1;
                c = template.charCodeAt(i++);
                if (c === 37) {
                    t = template.charAt(i++);
                    p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
                    if (!p || (j = p(date, string, j)) < 0) return -1;
                } else if (c != string.charCodeAt(j++)) {
                    return -1;
                }
            }
            return j;
        }
        d3_time_format.utc = function(template) {
            var local = d3_time_format(template);
            function format(date) {
                try {
                    d3_date = d3_date_utc;
                    var utc = new d3_date();
                    utc._ = date;
                    return local(utc);
                } finally {
                    d3_date = Date;
                }
            }
            format.parse = function(string) {
                try {
                    d3_date = d3_date_utc;
                    var date = local.parse(string);
                    return date && date._;
                } finally {
                    d3_date = Date;
                }
            };
            format.toString = local.toString;
            return format;
        };
        d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
        var d3_time_periodLookup = d3.map(), d3_time_dayRe = d3_time_formatRe(locale_days), d3_time_dayLookup = d3_time_formatLookup(locale_days), d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays), d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays), d3_time_monthRe = d3_time_formatRe(locale_months), d3_time_monthLookup = d3_time_formatLookup(locale_months), d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths), d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
        locale_periods.forEach(function(p, i) {
            d3_time_periodLookup.set(p.toLowerCase(), i);
        });
        var d3_time_formats = {
            a: function(d) {
                return locale_shortDays[d.getDay()];
            },
            A: function(d) {
                return locale_days[d.getDay()];
            },
            b: function(d) {
                return locale_shortMonths[d.getMonth()];
            },
            B: function(d) {
                return locale_months[d.getMonth()];
            },
            c: d3_time_format(locale_dateTime),
            d: function(d, p) {
                return d3_time_formatPad(d.getDate(), p, 2);
            },
            e: function(d, p) {
                return d3_time_formatPad(d.getDate(), p, 2);
            },
            H: function(d, p) {
                return d3_time_formatPad(d.getHours(), p, 2);
            },
            I: function(d, p) {
                return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
            },
            j: function(d, p) {
                return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
            },
            L: function(d, p) {
                return d3_time_formatPad(d.getMilliseconds(), p, 3);
            },
            m: function(d, p) {
                return d3_time_formatPad(d.getMonth() + 1, p, 2);
            },
            M: function(d, p) {
                return d3_time_formatPad(d.getMinutes(), p, 2);
            },
            p: function(d) {
                return locale_periods[+(d.getHours() >= 12)];
            },
            S: function(d, p) {
                return d3_time_formatPad(d.getSeconds(), p, 2);
            },
            U: function(d, p) {
                return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
            },
            w: function(d) {
                return d.getDay();
            },
            W: function(d, p) {
                return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
            },
            x: d3_time_format(locale_date),
            X: d3_time_format(locale_time),
            y: function(d, p) {
                return d3_time_formatPad(d.getFullYear() % 100, p, 2);
            },
            Y: function(d, p) {
                return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
            },
            Z: d3_time_zone,
            "%": function() {
                return "%";
            }
        };
        var d3_time_parsers = {
            a: d3_time_parseWeekdayAbbrev,
            A: d3_time_parseWeekday,
            b: d3_time_parseMonthAbbrev,
            B: d3_time_parseMonth,
            c: d3_time_parseLocaleFull,
            d: d3_time_parseDay,
            e: d3_time_parseDay,
            H: d3_time_parseHour24,
            I: d3_time_parseHour24,
            j: d3_time_parseDayOfYear,
            L: d3_time_parseMilliseconds,
            m: d3_time_parseMonthNumber,
            M: d3_time_parseMinutes,
            p: d3_time_parseAmPm,
            S: d3_time_parseSeconds,
            U: d3_time_parseWeekNumberSunday,
            w: d3_time_parseWeekdayNumber,
            W: d3_time_parseWeekNumberMonday,
            x: d3_time_parseLocaleDate,
            X: d3_time_parseLocaleTime,
            y: d3_time_parseYear,
            Y: d3_time_parseFullYear,
            Z: d3_time_parseZone,
            "%": d3_time_parseLiteralPercent
        };
        function d3_time_parseWeekdayAbbrev(date, string, i) {
            d3_time_dayAbbrevRe.lastIndex = 0;
            var n = d3_time_dayAbbrevRe.exec(string.substring(i));
            return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
        }
        function d3_time_parseWeekday(date, string, i) {
            d3_time_dayRe.lastIndex = 0;
            var n = d3_time_dayRe.exec(string.substring(i));
            return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
        }
        function d3_time_parseMonthAbbrev(date, string, i) {
            d3_time_monthAbbrevRe.lastIndex = 0;
            var n = d3_time_monthAbbrevRe.exec(string.substring(i));
            return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
        }
        function d3_time_parseMonth(date, string, i) {
            d3_time_monthRe.lastIndex = 0;
            var n = d3_time_monthRe.exec(string.substring(i));
            return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
        }
        function d3_time_parseLocaleFull(date, string, i) {
            return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
        }
        function d3_time_parseLocaleDate(date, string, i) {
            return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
        }
        function d3_time_parseLocaleTime(date, string, i) {
            return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
        }
        function d3_time_parseAmPm(date, string, i) {
            var n = d3_time_periodLookup.get(string.substring(i, i += 2).toLowerCase());
            return n == null ? -1 : (date.p = n, i);
        }
        return d3_time_format;
    }
    var d3_time_formatPads = {
        "-": "",
        _: " ",
        "0": "0"
    }, d3_time_numberRe = /^\s*\d+/, d3_time_percentRe = /^%/;
    function d3_time_formatPad(value, fill, width) {
        var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
        return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
    }
    function d3_time_formatRe(names) {
        return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
    }
    function d3_time_formatLookup(names) {
        var map = new d3_Map(), i = -1, n = names.length;
        while (++i < n) map.set(names[i].toLowerCase(), i);
        return map;
    }
    function d3_time_parseWeekdayNumber(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.substring(i, i + 1));
        return n ? (date.w = +n[0], i + n[0].length) : -1;
    }
    function d3_time_parseWeekNumberSunday(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.substring(i));
        return n ? (date.U = +n[0], i + n[0].length) : -1;
    }
    function d3_time_parseWeekNumberMonday(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.substring(i));
        return n ? (date.W = +n[0], i + n[0].length) : -1;
    }
    function d3_time_parseFullYear(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.substring(i, i + 4));
        return n ? (date.y = +n[0], i + n[0].length) : -1;
    }
    function d3_time_parseYear(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.substring(i, i + 2));
        return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
    }
    function d3_time_parseZone(date, string, i) {
        return /^[+-]\d{4}$/.test(string = string.substring(i, i + 5)) ? (date.Z = -string, 
        i + 5) : -1;
    }
    function d3_time_expandYear(d) {
        return d + (d > 68 ? 1900 : 2e3);
    }
    function d3_time_parseMonthNumber(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.substring(i, i + 2));
        return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
    }
    function d3_time_parseDay(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.substring(i, i + 2));
        return n ? (date.d = +n[0], i + n[0].length) : -1;
    }
    function d3_time_parseDayOfYear(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.substring(i, i + 3));
        return n ? (date.j = +n[0], i + n[0].length) : -1;
    }
    function d3_time_parseHour24(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.substring(i, i + 2));
        return n ? (date.H = +n[0], i + n[0].length) : -1;
    }
    function d3_time_parseMinutes(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.substring(i, i + 2));
        return n ? (date.M = +n[0], i + n[0].length) : -1;
    }
    function d3_time_parseSeconds(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.substring(i, i + 2));
        return n ? (date.S = +n[0], i + n[0].length) : -1;
    }
    function d3_time_parseMilliseconds(date, string, i) {
        d3_time_numberRe.lastIndex = 0;
        var n = d3_time_numberRe.exec(string.substring(i, i + 3));
        return n ? (date.L = +n[0], i + n[0].length) : -1;
    }
    function d3_time_zone(d) {
        var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = ~~(abs(z) / 60), zm = abs(z) % 60;
        return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
    }
    function d3_time_parseLiteralPercent(date, string, i) {
        d3_time_percentRe.lastIndex = 0;
        var n = d3_time_percentRe.exec(string.substring(i, i + 1));
        return n ? i + n[0].length : -1;
    }
    function d3_time_formatMulti(formats) {
        var n = formats.length, i = -1;
        while (++i < n) formats[i][0] = this(formats[i][0]);
        return function(date) {
            var i = 0, f = formats[i];
            while (!f[1](date)) f = formats[++i];
            return f[0](date);
        };
    }
    d3.locale = function(locale) {
        return {
            numberFormat: d3_locale_numberFormat(locale),
            timeFormat: d3_locale_timeFormat(locale)
        };
    };
    var d3_locale_enUS = d3.locale({
        decimal: ".",
        thousands: ",",
        grouping: [ 3 ],
        currency: [ "$", "" ],
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: [ "AM", "PM" ],
        days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
        shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
        months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
        shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
    });
    d3.format = d3_locale_enUS.numberFormat;
    d3.geo = {};
    function d3_adder() {}
    d3_adder.prototype = {
        s: 0,
        t: 0,
        add: function(y) {
            d3_adderSum(y, this.t, d3_adderTemp);
            d3_adderSum(d3_adderTemp.s, this.s, this);
            if (this.s) this.t += d3_adderTemp.t; else this.s = d3_adderTemp.t;
        },
        reset: function() {
            this.s = this.t = 0;
        },
        valueOf: function() {
            return this.s;
        }
    };
    var d3_adderTemp = new d3_adder();
    function d3_adderSum(a, b, o) {
        var x = o.s = a + b, bv = x - a, av = x - bv;
        o.t = a - av + (b - bv);
    }
    d3.geo.stream = function(object, listener) {
        if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
            d3_geo_streamObjectType[object.type](object, listener);
        } else {
            d3_geo_streamGeometry(object, listener);
        }
    };
    function d3_geo_streamGeometry(geometry, listener) {
        if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
            d3_geo_streamGeometryType[geometry.type](geometry, listener);
        }
    }
    var d3_geo_streamObjectType = {
        Feature: function(feature, listener) {
            d3_geo_streamGeometry(feature.geometry, listener);
        },
        FeatureCollection: function(object, listener) {
            var features = object.features, i = -1, n = features.length;
            while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
        }
    };
    var d3_geo_streamGeometryType = {
        Sphere: function(object, listener) {
            listener.sphere();
        },
        Point: function(object, listener) {
            object = object.coordinates;
            listener.point(object[0], object[1], object[2]);
        },
        MultiPoint: function(object, listener) {
            var coordinates = object.coordinates, i = -1, n = coordinates.length;
            while (++i < n) object = coordinates[i], listener.point(object[0], object[1], object[2]);
        },
        LineString: function(object, listener) {
            d3_geo_streamLine(object.coordinates, listener, 0);
        },
        MultiLineString: function(object, listener) {
            var coordinates = object.coordinates, i = -1, n = coordinates.length;
            while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
        },
        Polygon: function(object, listener) {
            d3_geo_streamPolygon(object.coordinates, listener);
        },
        MultiPolygon: function(object, listener) {
            var coordinates = object.coordinates, i = -1, n = coordinates.length;
            while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
        },
        GeometryCollection: function(object, listener) {
            var geometries = object.geometries, i = -1, n = geometries.length;
            while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
        }
    };
    function d3_geo_streamLine(coordinates, listener, closed) {
        var i = -1, n = coordinates.length - closed, coordinate;
        listener.lineStart();
        while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
        listener.lineEnd();
    }
    function d3_geo_streamPolygon(coordinates, listener) {
        var i = -1, n = coordinates.length;
        listener.polygonStart();
        while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
        listener.polygonEnd();
    }
    d3.geo.area = function(object) {
        d3_geo_areaSum = 0;
        d3.geo.stream(object, d3_geo_area);
        return d3_geo_areaSum;
    };
    var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
    var d3_geo_area = {
        sphere: function() {
            d3_geo_areaSum += 4 * π;
        },
        point: d3_noop,
        lineStart: d3_noop,
        lineEnd: d3_noop,
        polygonStart: function() {
            d3_geo_areaRingSum.reset();
            d3_geo_area.lineStart = d3_geo_areaRingStart;
        },
        polygonEnd: function() {
            var area = 2 * d3_geo_areaRingSum;
            d3_geo_areaSum += area < 0 ? 4 * π + area : area;
            d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
        }
    };
    function d3_geo_areaRingStart() {
        var λ00, φ00, λ0, cosφ0, sinφ0;
        d3_geo_area.point = function(λ, φ) {
            d3_geo_area.point = nextPoint;
            λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), 
            sinφ0 = Math.sin(φ);
        };
        function nextPoint(λ, φ) {
            λ *= d3_radians;
            φ = φ * d3_radians / 2 + π / 4;
            var dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(adλ), v = k * sdλ * Math.sin(adλ);
            d3_geo_areaRingSum.add(Math.atan2(v, u));
            λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
        }
        d3_geo_area.lineEnd = function() {
            nextPoint(λ00, φ00);
        };
    }
    function d3_geo_cartesian(spherical) {
        var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
        return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
    }
    function d3_geo_cartesianDot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    }
    function d3_geo_cartesianCross(a, b) {
        return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
    }
    function d3_geo_cartesianAdd(a, b) {
        a[0] += b[0];
        a[1] += b[1];
        a[2] += b[2];
    }
    function d3_geo_cartesianScale(vector, k) {
        return [ vector[0] * k, vector[1] * k, vector[2] * k ];
    }
    function d3_geo_cartesianNormalize(d) {
        var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
        d[0] /= l;
        d[1] /= l;
        d[2] /= l;
    }
    function d3_geo_spherical(cartesian) {
        return [ Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2]) ];
    }
    function d3_geo_sphericalEqual(a, b) {
        return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
    }
    d3.geo.bounds = function() {
        var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
        var bound = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
                bound.point = ringPoint;
                bound.lineStart = ringStart;
                bound.lineEnd = ringEnd;
                dλSum = 0;
                d3_geo_area.polygonStart();
            },
            polygonEnd: function() {
                d3_geo_area.polygonEnd();
                bound.point = point;
                bound.lineStart = lineStart;
                bound.lineEnd = lineEnd;
                if (d3_geo_areaRingSum < 0) λ0 = -(λ1 = 180), φ0 = -(φ1 = 90); else if (dλSum > ε) φ1 = 90; else if (dλSum < -ε) φ0 = -90;
                range[0] = λ0, range[1] = λ1;
            }
        };
        function point(λ, φ) {
            ranges.push(range = [ λ0 = λ, λ1 = λ ]);
            if (φ < φ0) φ0 = φ;
            if (φ > φ1) φ1 = φ;
        }
        function linePoint(λ, φ) {
            var p = d3_geo_cartesian([ λ * d3_radians, φ * d3_radians ]);
            if (p0) {
                var normal = d3_geo_cartesianCross(p0, p), equatorial = [ normal[1], -normal[0], 0 ], inflection = d3_geo_cartesianCross(equatorial, normal);
                d3_geo_cartesianNormalize(inflection);
                inflection = d3_geo_spherical(inflection);
                var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = abs(dλ) > 180;
                if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
                    var φi = inflection[1] * d3_degrees;
                    if (φi > φ1) φ1 = φi;
                } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
                    var φi = -inflection[1] * d3_degrees;
                    if (φi < φ0) φ0 = φi;
                } else {
                    if (φ < φ0) φ0 = φ;
                    if (φ > φ1) φ1 = φ;
                }
                if (antimeridian) {
                    if (λ < λ_) {
                        if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
                    } else {
                        if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
                    }
                } else {
                    if (λ1 >= λ0) {
                        if (λ < λ0) λ0 = λ;
                        if (λ > λ1) λ1 = λ;
                    } else {
                        if (λ > λ_) {
                            if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
                        } else {
                            if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
                        }
                    }
                }
            } else {
                point(λ, φ);
            }
            p0 = p, λ_ = λ;
        }
        function lineStart() {
            bound.point = linePoint;
        }
        function lineEnd() {
            range[0] = λ0, range[1] = λ1;
            bound.point = point;
            p0 = null;
        }
        function ringPoint(λ, φ) {
            if (p0) {
                var dλ = λ - λ_;
                dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
            } else λ__ = λ, φ__ = φ;
            d3_geo_area.point(λ, φ);
            linePoint(λ, φ);
        }
        function ringStart() {
            d3_geo_area.lineStart();
        }
        function ringEnd() {
            ringPoint(λ__, φ__);
            d3_geo_area.lineEnd();
            if (abs(dλSum) > ε) λ0 = -(λ1 = 180);
            range[0] = λ0, range[1] = λ1;
            p0 = null;
        }
        function angle(λ0, λ1) {
            return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
        }
        function compareRanges(a, b) {
            return a[0] - b[0];
        }
        function withinRange(x, range) {
            return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
        }
        return function(feature) {
            φ1 = λ1 = -(λ0 = φ0 = Infinity);
            ranges = [];
            d3.geo.stream(feature, bound);
            var n = ranges.length;
            if (n) {
                ranges.sort(compareRanges);
                for (var i = 1, a = ranges[0], b, merged = [ a ]; i < n; ++i) {
                    b = ranges[i];
                    if (withinRange(b[0], a) || withinRange(b[1], a)) {
                        if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
                        if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
                    } else {
                        merged.push(a = b);
                    }
                }
                var best = -Infinity, dλ;
                for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
                    b = merged[i];
                    if ((dλ = angle(a[1], b[0])) > best) best = dλ, λ0 = b[0], λ1 = a[1];
                }
            }
            ranges = range = null;
            return λ0 === Infinity || φ0 === Infinity ? [ [ NaN, NaN ], [ NaN, NaN ] ] : [ [ λ0, φ0 ], [ λ1, φ1 ] ];
        };
    }();
    d3.geo.centroid = function(object) {
        d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
        d3.geo.stream(object, d3_geo_centroid);
        var x = d3_geo_centroidX2, y = d3_geo_centroidY2, z = d3_geo_centroidZ2, m = x * x + y * y + z * z;
        if (m < ε2) {
            x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
            if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
            m = x * x + y * y + z * z;
            if (m < ε2) return [ NaN, NaN ];
        }
        return [ Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees ];
    };
    var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
    var d3_geo_centroid = {
        sphere: d3_noop,
        point: d3_geo_centroidPoint,
        lineStart: d3_geo_centroidLineStart,
        lineEnd: d3_geo_centroidLineEnd,
        polygonStart: function() {
            d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
        },
        polygonEnd: function() {
            d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
        }
    };
    function d3_geo_centroidPoint(λ, φ) {
        λ *= d3_radians;
        var cosφ = Math.cos(φ *= d3_radians);
        d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
    }
    function d3_geo_centroidPointXYZ(x, y, z) {
        ++d3_geo_centroidW0;
        d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
        d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
        d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
    }
    function d3_geo_centroidLineStart() {
        var x0, y0, z0;
        d3_geo_centroid.point = function(λ, φ) {
            λ *= d3_radians;
            var cosφ = Math.cos(φ *= d3_radians);
            x0 = cosφ * Math.cos(λ);
            y0 = cosφ * Math.sin(λ);
            z0 = Math.sin(φ);
            d3_geo_centroid.point = nextPoint;
            d3_geo_centroidPointXYZ(x0, y0, z0);
        };
        function nextPoint(λ, φ) {
            λ *= d3_radians;
            var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
            d3_geo_centroidW1 += w;
            d3_geo_centroidX1 += w * (x0 + (x0 = x));
            d3_geo_centroidY1 += w * (y0 + (y0 = y));
            d3_geo_centroidZ1 += w * (z0 + (z0 = z));
            d3_geo_centroidPointXYZ(x0, y0, z0);
        }
    }
    function d3_geo_centroidLineEnd() {
        d3_geo_centroid.point = d3_geo_centroidPoint;
    }
    function d3_geo_centroidRingStart() {
        var λ00, φ00, x0, y0, z0;
        d3_geo_centroid.point = function(λ, φ) {
            λ00 = λ, φ00 = φ;
            d3_geo_centroid.point = nextPoint;
            λ *= d3_radians;
            var cosφ = Math.cos(φ *= d3_radians);
            x0 = cosφ * Math.cos(λ);
            y0 = cosφ * Math.sin(λ);
            z0 = Math.sin(φ);
            d3_geo_centroidPointXYZ(x0, y0, z0);
        };
        d3_geo_centroid.lineEnd = function() {
            nextPoint(λ00, φ00);
            d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
            d3_geo_centroid.point = d3_geo_centroidPoint;
        };
        function nextPoint(λ, φ) {
            λ *= d3_radians;
            var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = Math.sqrt(cx * cx + cy * cy + cz * cz), u = x0 * x + y0 * y + z0 * z, v = m && -d3_acos(u) / m, w = Math.atan2(m, u);
            d3_geo_centroidX2 += v * cx;
            d3_geo_centroidY2 += v * cy;
            d3_geo_centroidZ2 += v * cz;
            d3_geo_centroidW1 += w;
            d3_geo_centroidX1 += w * (x0 + (x0 = x));
            d3_geo_centroidY1 += w * (y0 + (y0 = y));
            d3_geo_centroidZ1 += w * (z0 + (z0 = z));
            d3_geo_centroidPointXYZ(x0, y0, z0);
        }
    }
    function d3_true() {
        return true;
    }
    function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
        var subject = [], clip = [];
        segments.forEach(function(segment) {
            if ((n = segment.length - 1) <= 0) return;
            var n, p0 = segment[0], p1 = segment[n];
            if (d3_geo_sphericalEqual(p0, p1)) {
                listener.lineStart();
                for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
                listener.lineEnd();
                return;
            }
            var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true), b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
            a.o = b;
            subject.push(a);
            clip.push(b);
            a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
            b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
            a.o = b;
            subject.push(a);
            clip.push(b);
        });
        clip.sort(compare);
        d3_geo_clipPolygonLinkCircular(subject);
        d3_geo_clipPolygonLinkCircular(clip);
        if (!subject.length) return;
        for (var i = 0, entry = clipStartInside, n = clip.length; i < n; ++i) {
            clip[i].e = entry = !entry;
        }
        var start = subject[0], points, point;
        while (1) {
            var current = start, isSubject = true;
            while (current.v) if ((current = current.n) === start) return;
            points = current.z;
            listener.lineStart();
            do {
                current.v = current.o.v = true;
                if (current.e) {
                    if (isSubject) {
                        for (var i = 0, n = points.length; i < n; ++i) listener.point((point = points[i])[0], point[1]);
                    } else {
                        interpolate(current.x, current.n.x, 1, listener);
                    }
                    current = current.n;
                } else {
                    if (isSubject) {
                        points = current.p.z;
                        for (var i = points.length - 1; i >= 0; --i) listener.point((point = points[i])[0], point[1]);
                    } else {
                        interpolate(current.x, current.p.x, -1, listener);
                    }
                    current = current.p;
                }
                current = current.o;
                points = current.z;
                isSubject = !isSubject;
            } while (!current.v);
            listener.lineEnd();
        }
    }
    function d3_geo_clipPolygonLinkCircular(array) {
        if (!(n = array.length)) return;
        var n, i = 0, a = array[0], b;
        while (++i < n) {
            a.n = b = array[i];
            b.p = a;
            a = b;
        }
        a.n = b = array[0];
        b.p = a;
    }
    function d3_geo_clipPolygonIntersection(point, points, other, entry) {
        this.x = point;
        this.z = points;
        this.o = other;
        this.e = entry;
        this.v = false;
        this.n = this.p = null;
    }
    function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
        return function(rotate, listener) {
            var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
            var clip = {
                point: point,
                lineStart: lineStart,
                lineEnd: lineEnd,
                polygonStart: function() {
                    clip.point = pointRing;
                    clip.lineStart = ringStart;
                    clip.lineEnd = ringEnd;
                    segments = [];
                    polygon = [];
                },
                polygonEnd: function() {
                    clip.point = point;
                    clip.lineStart = lineStart;
                    clip.lineEnd = lineEnd;
                    segments = d3.merge(segments);
                    var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
                    if (segments.length) {
                        if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
                        d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
                    } else if (clipStartInside) {
                        if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
                        listener.lineStart();
                        interpolate(null, null, 1, listener);
                        listener.lineEnd();
                    }
                    if (polygonStarted) listener.polygonEnd(), polygonStarted = false;
                    segments = polygon = null;
                },
                sphere: function() {
                    listener.polygonStart();
                    listener.lineStart();
                    interpolate(null, null, 1, listener);
                    listener.lineEnd();
                    listener.polygonEnd();
                }
            };
            function point(λ, φ) {
                var point = rotate(λ, φ);
                if (pointVisible(λ = point[0], φ = point[1])) listener.point(λ, φ);
            }
            function pointLine(λ, φ) {
                var point = rotate(λ, φ);
                line.point(point[0], point[1]);
            }
            function lineStart() {
                clip.point = pointLine;
                line.lineStart();
            }
            function lineEnd() {
                clip.point = point;
                line.lineEnd();
            }
            var segments;
            var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;
            function pointRing(λ, φ) {
                ring.push([ λ, φ ]);
                var point = rotate(λ, φ);
                ringListener.point(point[0], point[1]);
            }
            function ringStart() {
                ringListener.lineStart();
                ring = [];
            }
            function ringEnd() {
                pointRing(ring[0][0], ring[0][1]);
                ringListener.lineEnd();
                var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
                ring.pop();
                polygon.push(ring);
                ring = null;
                if (!n) return;
                if (clean & 1) {
                    segment = ringSegments[0];
                    var n = segment.length - 1, i = -1, point;
                    if (n > 0) {
                        if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
                        listener.lineStart();
                        while (++i < n) listener.point((point = segment[i])[0], point[1]);
                        listener.lineEnd();
                    }
                    return;
                }
                if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
                segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
            }
            return clip;
        };
    }
    function d3_geo_clipSegmentLength1(segment) {
        return segment.length > 1;
    }
    function d3_geo_clipBufferListener() {
        var lines = [], line;
        return {
            lineStart: function() {
                lines.push(line = []);
            },
            point: function(λ, φ) {
                line.push([ λ, φ ]);
            },
            lineEnd: d3_noop,
            buffer: function() {
                var buffer = lines;
                lines = [];
                line = null;
                return buffer;
            },
            rejoin: function() {
                if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
            }
        };
    }
    function d3_geo_clipSort(a, b) {
        return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
    }
    function d3_geo_pointInPolygon(point, polygon) {
        var meridian = point[0], parallel = point[1], meridianNormal = [ Math.sin(meridian), -Math.cos(meridian), 0 ], polarAngle = 0, winding = 0;
        d3_geo_areaRingSum.reset();
        for (var i = 0, n = polygon.length; i < n; ++i) {
            var ring = polygon[i], m = ring.length;
            if (!m) continue;
            var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;
            while (true) {
                if (j === m) j = 0;
                point = ring[j];
                var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, antimeridian = adλ > π, k = sinφ0 * sinφ;
                d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
                polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
                if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
                    var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
                    d3_geo_cartesianNormalize(arc);
                    var intersection = d3_geo_cartesianCross(meridianNormal, arc);
                    d3_geo_cartesianNormalize(intersection);
                    var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
                    if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
                        winding += antimeridian ^ dλ >= 0 ? 1 : -1;
                    }
                }
                if (!j++) break;
                λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
            }
        }
        return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < 0) ^ winding & 1;
    }
    var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [ -π, -π / 2 ]);
    function d3_geo_clipAntimeridianLine(listener) {
        var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
        return {
            lineStart: function() {
                listener.lineStart();
                clean = 1;
            },
            point: function(λ1, φ1) {
                var sλ1 = λ1 > 0 ? π : -π, dλ = abs(λ1 - λ0);
                if (abs(dλ - π) < ε) {
                    listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
                    listener.point(sλ0, φ0);
                    listener.lineEnd();
                    listener.lineStart();
                    listener.point(sλ1, φ0);
                    listener.point(λ1, φ0);
                    clean = 0;
                } else if (sλ0 !== sλ1 && dλ >= π) {
                    if (abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
                    if (abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
                    φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
                    listener.point(sλ0, φ0);
                    listener.lineEnd();
                    listener.lineStart();
                    listener.point(sλ1, φ0);
                    clean = 0;
                }
                listener.point(λ0 = λ1, φ0 = φ1);
                sλ0 = sλ1;
            },
            lineEnd: function() {
                listener.lineEnd();
                λ0 = φ0 = NaN;
            },
            clean: function() {
                return 2 - clean;
            }
        };
    }
    function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
        var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
        return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
    }
    function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
        var φ;
        if (from == null) {
            φ = direction * halfπ;
            listener.point(-π, φ);
            listener.point(0, φ);
            listener.point(π, φ);
            listener.point(π, 0);
            listener.point(π, -φ);
            listener.point(0, -φ);
            listener.point(-π, -φ);
            listener.point(-π, 0);
            listener.point(-π, φ);
        } else if (abs(from[0] - to[0]) > ε) {
            var s = from[0] < to[0] ? π : -π;
            φ = direction * s / 2;
            listener.point(-s, φ);
            listener.point(0, φ);
            listener.point(s, φ);
        } else {
            listener.point(to[0], to[1]);
        }
    }
    function d3_geo_clipCircle(radius) {
        var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
        return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [ 0, -radius ] : [ -π, radius - π ]);
        function visible(λ, φ) {
            return Math.cos(λ) * Math.cos(φ) > cr;
        }
        function clipLine(listener) {
            var point0, c0, v0, v00, clean;
            return {
                lineStart: function() {
                    v00 = v0 = false;
                    clean = 1;
                },
                point: function(λ, φ) {
                    var point1 = [ λ, φ ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
                    if (!point0 && (v00 = v0 = v)) listener.lineStart();
                    if (v !== v0) {
                        point2 = intersect(point0, point1);
                        if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
                            point1[0] += ε;
                            point1[1] += ε;
                            v = visible(point1[0], point1[1]);
                        }
                    }
                    if (v !== v0) {
                        clean = 0;
                        if (v) {
                            listener.lineStart();
                            point2 = intersect(point1, point0);
                            listener.point(point2[0], point2[1]);
                        } else {
                            point2 = intersect(point0, point1);
                            listener.point(point2[0], point2[1]);
                            listener.lineEnd();
                        }
                        point0 = point2;
                    } else if (notHemisphere && point0 && smallRadius ^ v) {
                        var t;
                        if (!(c & c0) && (t = intersect(point1, point0, true))) {
                            clean = 0;
                            if (smallRadius) {
                                listener.lineStart();
                                listener.point(t[0][0], t[0][1]);
                                listener.point(t[1][0], t[1][1]);
                                listener.lineEnd();
                            } else {
                                listener.point(t[1][0], t[1][1]);
                                listener.lineEnd();
                                listener.lineStart();
                                listener.point(t[0][0], t[0][1]);
                            }
                        }
                    }
                    if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
                        listener.point(point1[0], point1[1]);
                    }
                    point0 = point1, v0 = v, c0 = c;
                },
                lineEnd: function() {
                    if (v0) listener.lineEnd();
                    point0 = null;
                },
                clean: function() {
                    return clean | (v00 && v0) << 1;
                }
            };
        }
        function intersect(a, b, two) {
            var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
            var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
            if (!determinant) return !two && a;
            var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
            d3_geo_cartesianAdd(A, B);
            var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
            if (t2 < 0) return;
            var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
            d3_geo_cartesianAdd(q, A);
            q = d3_geo_spherical(q);
            if (!two) return q;
            var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;
            if (λ1 < λ0) z = λ0, λ0 = λ1, λ1 = z;
            var δλ = λ1 - λ0, polar = abs(δλ - π) < ε, meridian = polar || δλ < ε;
            if (!polar && φ1 < φ0) z = φ0, φ0 = φ1, φ1 = z;
            if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
                var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
                d3_geo_cartesianAdd(q1, A);
                return [ q, d3_geo_spherical(q1) ];
            }
        }
        function code(λ, φ) {
            var r = smallRadius ? radius : π - radius, code = 0;
            if (λ < -r) code |= 1; else if (λ > r) code |= 2;
            if (φ < -r) code |= 4; else if (φ > r) code |= 8;
            return code;
        }
    }
    function d3_geom_clipLine(x0, y0, x1, y1) {
        return function(line) {
            var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
            r = x0 - ax;
            if (!dx && r > 0) return;
            r /= dx;
            if (dx < 0) {
                if (r < t0) return;
                if (r < t1) t1 = r;
            } else if (dx > 0) {
                if (r > t1) return;
                if (r > t0) t0 = r;
            }
            r = x1 - ax;
            if (!dx && r < 0) return;
            r /= dx;
            if (dx < 0) {
                if (r > t1) return;
                if (r > t0) t0 = r;
            } else if (dx > 0) {
                if (r < t0) return;
                if (r < t1) t1 = r;
            }
            r = y0 - ay;
            if (!dy && r > 0) return;
            r /= dy;
            if (dy < 0) {
                if (r < t0) return;
                if (r < t1) t1 = r;
            } else if (dy > 0) {
                if (r > t1) return;
                if (r > t0) t0 = r;
            }
            r = y1 - ay;
            if (!dy && r < 0) return;
            r /= dy;
            if (dy < 0) {
                if (r > t1) return;
                if (r > t0) t0 = r;
            } else if (dy > 0) {
                if (r < t0) return;
                if (r < t1) t1 = r;
            }
            if (t0 > 0) line.a = {
                x: ax + t0 * dx,
                y: ay + t0 * dy
            };
            if (t1 < 1) line.b = {
                x: ax + t1 * dx,
                y: ay + t1 * dy
            };
            return line;
        };
    }
    var d3_geo_clipExtentMAX = 1e9;
    d3.geo.clipExtent = function() {
        var x0, y0, x1, y1, stream, clip, clipExtent = {
            stream: function(output) {
                if (stream) stream.valid = false;
                stream = clip(output);
                stream.valid = true;
                return stream;
            },
            extent: function(_) {
                if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
                clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
                if (stream) stream.valid = false, stream = null;
                return clipExtent;
            }
        };
        return clipExtent.extent([ [ 0, 0 ], [ 960, 500 ] ]);
    };
    function d3_geo_clipExtent(x0, y0, x1, y1) {
        return function(listener) {
            var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;
            var clip = {
                point: point,
                lineStart: lineStart,
                lineEnd: lineEnd,
                polygonStart: function() {
                    listener = bufferListener;
                    segments = [];
                    polygon = [];
                    clean = true;
                },
                polygonEnd: function() {
                    listener = listener_;
                    segments = d3.merge(segments);
                    var clipStartInside = insidePolygon([ x0, y1 ]), inside = clean && clipStartInside, visible = segments.length;
                    if (inside || visible) {
                        listener.polygonStart();
                        if (inside) {
                            listener.lineStart();
                            interpolate(null, null, 1, listener);
                            listener.lineEnd();
                        }
                        if (visible) {
                            d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
                        }
                        listener.polygonEnd();
                    }
                    segments = polygon = ring = null;
                }
            };
            function insidePolygon(p) {
                var wn = 0, n = polygon.length, y = p[1];
                for (var i = 0; i < n; ++i) {
                    for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
                        b = v[j];
                        if (a[1] <= y) {
                            if (b[1] > y && d3_cross2d(a, b, p) > 0) ++wn;
                        } else {
                            if (b[1] <= y && d3_cross2d(a, b, p) < 0) --wn;
                        }
                        a = b;
                    }
                }
                return wn !== 0;
            }
            function interpolate(from, to, direction, listener) {
                var a = 0, a1 = 0;
                if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
                    do {
                        listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
                    } while ((a = (a + direction + 4) % 4) !== a1);
                } else {
                    listener.point(to[0], to[1]);
                }
            }
            function pointVisible(x, y) {
                return x0 <= x && x <= x1 && y0 <= y && y <= y1;
            }
            function point(x, y) {
                if (pointVisible(x, y)) listener.point(x, y);
            }
            var x__, y__, v__, x_, y_, v_, first, clean;
            function lineStart() {
                clip.point = linePoint;
                if (polygon) polygon.push(ring = []);
                first = true;
                v_ = false;
                x_ = y_ = NaN;
            }
            function lineEnd() {
                if (segments) {
                    linePoint(x__, y__);
                    if (v__ && v_) bufferListener.rejoin();
                    segments.push(bufferListener.buffer());
                }
                clip.point = point;
                if (v_) listener.lineEnd();
            }
            function linePoint(x, y) {
                x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
                y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
                var v = pointVisible(x, y);
                if (polygon) ring.push([ x, y ]);
                if (first) {
                    x__ = x, y__ = y, v__ = v;
                    first = false;
                    if (v) {
                        listener.lineStart();
                        listener.point(x, y);
                    }
                } else {
                    if (v && v_) listener.point(x, y); else {
                        var l = {
                            a: {
                                x: x_,
                                y: y_
                            },
                            b: {
                                x: x,
                                y: y
                            }
                        };
                        if (clipLine(l)) {
                            if (!v_) {
                                listener.lineStart();
                                listener.point(l.a.x, l.a.y);
                            }
                            listener.point(l.b.x, l.b.y);
                            if (!v) listener.lineEnd();
                            clean = false;
                        } else if (v) {
                            listener.lineStart();
                            listener.point(x, y);
                            clean = false;
                        }
                    }
                }
                x_ = x, y_ = y, v_ = v;
            }
            return clip;
        };
        function corner(p, direction) {
            return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
        }
        function compare(a, b) {
            return comparePoints(a.x, b.x);
        }
        function comparePoints(a, b) {
            var ca = corner(a, 1), cb = corner(b, 1);
            return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
        }
    }
    function d3_geo_compose(a, b) {
        function compose(x, y) {
            return x = a(x, y), b(x[0], x[1]);
        }
        if (a.invert && b.invert) compose.invert = function(x, y) {
            return x = b.invert(x, y), x && a.invert(x[0], x[1]);
        };
        return compose;
    }
    function d3_geo_conic(projectAt) {
        var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);
        p.parallels = function(_) {
            if (!arguments.length) return [ φ0 / π * 180, φ1 / π * 180 ];
            return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
        };
        return p;
    }
    function d3_geo_conicEqualArea(φ0, φ1) {
        var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
        function forward(λ, φ) {
            var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
            return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
        }
        forward.invert = function(x, y) {
            var ρ0_y = ρ0 - y;
            return [ Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
        };
        return forward;
    }
    (d3.geo.conicEqualArea = function() {
        return d3_geo_conic(d3_geo_conicEqualArea);
    }).raw = d3_geo_conicEqualArea;
    d3.geo.albers = function() {
        return d3.geo.conicEqualArea().rotate([ 96, 0 ]).center([ -.6, 38.7 ]).parallels([ 29.5, 45.5 ]).scale(1070);
    };
    d3.geo.albersUsa = function() {
        var lower48 = d3.geo.albers();
        var alaska = d3.geo.conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]);
        var hawaii = d3.geo.conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]);
        var point, pointStream = {
            point: function(x, y) {
                point = [ x, y ];
            }
        }, lower48Point, alaskaPoint, hawaiiPoint;
        function albersUsa(coordinates) {
            var x = coordinates[0], y = coordinates[1];
            point = null;
            (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
            return point;
        }
        albersUsa.invert = function(coordinates) {
            var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
            return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
        };
        albersUsa.stream = function(stream) {
            var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
            return {
                point: function(x, y) {
                    lower48Stream.point(x, y);
                    alaskaStream.point(x, y);
                    hawaiiStream.point(x, y);
                },
                sphere: function() {
                    lower48Stream.sphere();
                    alaskaStream.sphere();
                    hawaiiStream.sphere();
                },
                lineStart: function() {
                    lower48Stream.lineStart();
                    alaskaStream.lineStart();
                    hawaiiStream.lineStart();
                },
                lineEnd: function() {
                    lower48Stream.lineEnd();
                    alaskaStream.lineEnd();
                    hawaiiStream.lineEnd();
                },
                polygonStart: function() {
                    lower48Stream.polygonStart();
                    alaskaStream.polygonStart();
                    hawaiiStream.polygonStart();
                },
                polygonEnd: function() {
                    lower48Stream.polygonEnd();
                    alaskaStream.polygonEnd();
                    hawaiiStream.polygonEnd();
                }
            };
        };
        albersUsa.precision = function(_) {
            if (!arguments.length) return lower48.precision();
            lower48.precision(_);
            alaska.precision(_);
            hawaii.precision(_);
            return albersUsa;
        };
        albersUsa.scale = function(_) {
            if (!arguments.length) return lower48.scale();
            lower48.scale(_);
            alaska.scale(_ * .35);
            hawaii.scale(_);
            return albersUsa.translate(lower48.translate());
        };
        albersUsa.translate = function(_) {
            if (!arguments.length) return lower48.translate();
            var k = lower48.scale(), x = +_[0], y = +_[1];
            lower48Point = lower48.translate(_).clipExtent([ [ x - .455 * k, y - .238 * k ], [ x + .455 * k, y + .238 * k ] ]).stream(pointStream).point;
            alaskaPoint = alaska.translate([ x - .307 * k, y + .201 * k ]).clipExtent([ [ x - .425 * k + ε, y + .12 * k + ε ], [ x - .214 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
            hawaiiPoint = hawaii.translate([ x - .205 * k, y + .212 * k ]).clipExtent([ [ x - .214 * k + ε, y + .166 * k + ε ], [ x - .115 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
            return albersUsa;
        };
        return albersUsa.scale(1070);
    };
    var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
        point: d3_noop,
        lineStart: d3_noop,
        lineEnd: d3_noop,
        polygonStart: function() {
            d3_geo_pathAreaPolygon = 0;
            d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
        },
        polygonEnd: function() {
            d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
            d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
        }
    };
    function d3_geo_pathAreaRingStart() {
        var x00, y00, x0, y0;
        d3_geo_pathArea.point = function(x, y) {
            d3_geo_pathArea.point = nextPoint;
            x00 = x0 = x, y00 = y0 = y;
        };
        function nextPoint(x, y) {
            d3_geo_pathAreaPolygon += y0 * x - x0 * y;
            x0 = x, y0 = y;
        }
        d3_geo_pathArea.lineEnd = function() {
            nextPoint(x00, y00);
        };
    }
    var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
    var d3_geo_pathBounds = {
        point: d3_geo_pathBoundsPoint,
        lineStart: d3_noop,
        lineEnd: d3_noop,
        polygonStart: d3_noop,
        polygonEnd: d3_noop
    };
    function d3_geo_pathBoundsPoint(x, y) {
        if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
        if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
        if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
        if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
    }
    function d3_geo_pathBuffer() {
        var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
        var stream = {
            point: point,
            lineStart: function() {
                stream.point = pointLineStart;
            },
            lineEnd: lineEnd,
            polygonStart: function() {
                stream.lineEnd = lineEndPolygon;
            },
            polygonEnd: function() {
                stream.lineEnd = lineEnd;
                stream.point = point;
            },
            pointRadius: function(_) {
                pointCircle = d3_geo_pathBufferCircle(_);
                return stream;
            },
            result: function() {
                if (buffer.length) {
                    var result = buffer.join("");
                    buffer = [];
                    return result;
                }
            }
        };
        function point(x, y) {
            buffer.push("M", x, ",", y, pointCircle);
        }
        function pointLineStart(x, y) {
            buffer.push("M", x, ",", y);
            stream.point = pointLine;
        }
        function pointLine(x, y) {
            buffer.push("L", x, ",", y);
        }
        function lineEnd() {
            stream.point = point;
        }
        function lineEndPolygon() {
            buffer.push("Z");
        }
        return stream;
    }
    function d3_geo_pathBufferCircle(radius) {
        return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
    }
    var d3_geo_pathCentroid = {
        point: d3_geo_pathCentroidPoint,
        lineStart: d3_geo_pathCentroidLineStart,
        lineEnd: d3_geo_pathCentroidLineEnd,
        polygonStart: function() {
            d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
        },
        polygonEnd: function() {
            d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
            d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
            d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
        }
    };
    function d3_geo_pathCentroidPoint(x, y) {
        d3_geo_centroidX0 += x;
        d3_geo_centroidY0 += y;
        ++d3_geo_centroidZ0;
    }
    function d3_geo_pathCentroidLineStart() {
        var x0, y0;
        d3_geo_pathCentroid.point = function(x, y) {
            d3_geo_pathCentroid.point = nextPoint;
            d3_geo_pathCentroidPoint(x0 = x, y0 = y);
        };
        function nextPoint(x, y) {
            var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
            d3_geo_centroidX1 += z * (x0 + x) / 2;
            d3_geo_centroidY1 += z * (y0 + y) / 2;
            d3_geo_centroidZ1 += z;
            d3_geo_pathCentroidPoint(x0 = x, y0 = y);
        }
    }
    function d3_geo_pathCentroidLineEnd() {
        d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
    }
    function d3_geo_pathCentroidRingStart() {
        var x00, y00, x0, y0;
        d3_geo_pathCentroid.point = function(x, y) {
            d3_geo_pathCentroid.point = nextPoint;
            d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
        };
        function nextPoint(x, y) {
            var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
            d3_geo_centroidX1 += z * (x0 + x) / 2;
            d3_geo_centroidY1 += z * (y0 + y) / 2;
            d3_geo_centroidZ1 += z;
            z = y0 * x - x0 * y;
            d3_geo_centroidX2 += z * (x0 + x);
            d3_geo_centroidY2 += z * (y0 + y);
            d3_geo_centroidZ2 += z * 3;
            d3_geo_pathCentroidPoint(x0 = x, y0 = y);
        }
        d3_geo_pathCentroid.lineEnd = function() {
            nextPoint(x00, y00);
        };
    }
    function d3_geo_pathContext(context) {
        var pointRadius = 4.5;
        var stream = {
            point: point,
            lineStart: function() {
                stream.point = pointLineStart;
            },
            lineEnd: lineEnd,
            polygonStart: function() {
                stream.lineEnd = lineEndPolygon;
            },
            polygonEnd: function() {
                stream.lineEnd = lineEnd;
                stream.point = point;
            },
            pointRadius: function(_) {
                pointRadius = _;
                return stream;
            },
            result: d3_noop
        };
        function point(x, y) {
            context.moveTo(x, y);
            context.arc(x, y, pointRadius, 0, τ);
        }
        function pointLineStart(x, y) {
            context.moveTo(x, y);
            stream.point = pointLine;
        }
        function pointLine(x, y) {
            context.lineTo(x, y);
        }
        function lineEnd() {
            stream.point = point;
        }
        function lineEndPolygon() {
            context.closePath();
        }
        return stream;
    }
    function d3_geo_resample(project) {
        var δ2 = .5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
        function resample(stream) {
            return (maxDepth ? resampleRecursive : resampleNone)(stream);
        }
        function resampleNone(stream) {
            return d3_geo_transformPoint(stream, function(x, y) {
                x = project(x, y);
                stream.point(x[0], x[1]);
            });
        }
        function resampleRecursive(stream) {
            var λ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
            var resample = {
                point: point,
                lineStart: lineStart,
                lineEnd: lineEnd,
                polygonStart: function() {
                    stream.polygonStart();
                    resample.lineStart = ringStart;
                },
                polygonEnd: function() {
                    stream.polygonEnd();
                    resample.lineStart = lineStart;
                }
            };
            function point(x, y) {
                x = project(x, y);
                stream.point(x[0], x[1]);
            }
            function lineStart() {
                x0 = NaN;
                resample.point = linePoint;
                stream.lineStart();
            }
            function linePoint(λ, φ) {
                var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
                resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
                stream.point(x0, y0);
            }
            function lineEnd() {
                resample.point = point;
                stream.lineEnd();
            }
            function ringStart() {
                lineStart();
                resample.point = ringPoint;
                resample.lineEnd = ringEnd;
            }
            function ringPoint(λ, φ) {
                linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
                resample.point = linePoint;
            }
            function ringEnd() {
                resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
                resample.lineEnd = lineEnd;
                lineEnd();
            }
            return resample;
        }
        function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
            var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
            if (d2 > 4 * δ2 && depth--) {
                var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
                if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
                    resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
                    stream.point(x2, y2);
                    resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
                }
            }
        }
        resample.precision = function(_) {
            if (!arguments.length) return Math.sqrt(δ2);
            maxDepth = (δ2 = _ * _) > 0 && 16;
            return resample;
        };
        return resample;
    }
    d3.geo.path = function() {
        var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
        function path(object) {
            if (object) {
                if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
                if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
                d3.geo.stream(object, cacheStream);
            }
            return contextStream.result();
        }
        path.area = function(object) {
            d3_geo_pathAreaSum = 0;
            d3.geo.stream(object, projectStream(d3_geo_pathArea));
            return d3_geo_pathAreaSum;
        };
        path.centroid = function(object) {
            d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
            d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
            return d3_geo_centroidZ2 ? [ d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2 ] : d3_geo_centroidZ1 ? [ d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1 ] : d3_geo_centroidZ0 ? [ d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0 ] : [ NaN, NaN ];
        };
        path.bounds = function(object) {
            d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
            d3.geo.stream(object, projectStream(d3_geo_pathBounds));
            return [ [ d3_geo_pathBoundsX0, d3_geo_pathBoundsY0 ], [ d3_geo_pathBoundsX1, d3_geo_pathBoundsY1 ] ];
        };
        path.projection = function(_) {
            if (!arguments.length) return projection;
            projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
            return reset();
        };
        path.context = function(_) {
            if (!arguments.length) return context;
            contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
            if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
            return reset();
        };
        path.pointRadius = function(_) {
            if (!arguments.length) return pointRadius;
            pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
            return path;
        };
        function reset() {
            cacheStream = null;
            return path;
        }
        return path.projection(d3.geo.albersUsa()).context(null);
    };
    function d3_geo_pathProjectStream(project) {
        var resample = d3_geo_resample(function(x, y) {
            return project([ x * d3_degrees, y * d3_degrees ]);
        });
        return function(stream) {
            return d3_geo_projectionRadians(resample(stream));
        };
    }
    d3.geo.transform = function(methods) {
        return {
            stream: function(stream) {
                var transform = new d3_geo_transform(stream);
                for (var k in methods) transform[k] = methods[k];
                return transform;
            }
        };
    };
    function d3_geo_transform(stream) {
        this.stream = stream;
    }
    d3_geo_transform.prototype = {
        point: function(x, y) {
            this.stream.point(x, y);
        },
        sphere: function() {
            this.stream.sphere();
        },
        lineStart: function() {
            this.stream.lineStart();
        },
        lineEnd: function() {
            this.stream.lineEnd();
        },
        polygonStart: function() {
            this.stream.polygonStart();
        },
        polygonEnd: function() {
            this.stream.polygonEnd();
        }
    };
    function d3_geo_transformPoint(stream, point) {
        return {
            point: point,
            sphere: function() {
                stream.sphere();
            },
            lineStart: function() {
                stream.lineStart();
            },
            lineEnd: function() {
                stream.lineEnd();
            },
            polygonStart: function() {
                stream.polygonStart();
            },
            polygonEnd: function() {
                stream.polygonEnd();
            }
        };
    }
    d3.geo.projection = d3_geo_projection;
    d3.geo.projectionMutator = d3_geo_projectionMutator;
    function d3_geo_projection(project) {
        return d3_geo_projectionMutator(function() {
            return project;
        })();
    }
    function d3_geo_projectionMutator(projectAt) {
        var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
            x = project(x, y);
            return [ x[0] * k + δx, δy - x[1] * k ];
        }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
        function projection(point) {
            point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
            return [ point[0] * k + δx, δy - point[1] * k ];
        }
        function invert(point) {
            point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
            return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
        }
        projection.stream = function(output) {
            if (stream) stream.valid = false;
            stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
            stream.valid = true;
            return stream;
        };
        projection.clipAngle = function(_) {
            if (!arguments.length) return clipAngle;
            preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
            return invalidate();
        };
        projection.clipExtent = function(_) {
            if (!arguments.length) return clipExtent;
            clipExtent = _;
            postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
            return invalidate();
        };
        projection.scale = function(_) {
            if (!arguments.length) return k;
            k = +_;
            return reset();
        };
        projection.translate = function(_) {
            if (!arguments.length) return [ x, y ];
            x = +_[0];
            y = +_[1];
            return reset();
        };
        projection.center = function(_) {
            if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
            λ = _[0] % 360 * d3_radians;
            φ = _[1] % 360 * d3_radians;
            return reset();
        };
        projection.rotate = function(_) {
            if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
            δλ = _[0] % 360 * d3_radians;
            δφ = _[1] % 360 * d3_radians;
            δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
            return reset();
        };
        d3.rebind(projection, projectResample, "precision");
        function reset() {
            projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
            var center = project(λ, φ);
            δx = x - center[0] * k;
            δy = y + center[1] * k;
            return invalidate();
        }
        function invalidate() {
            if (stream) stream.valid = false, stream = null;
            return projection;
        }
        return function() {
            project = projectAt.apply(this, arguments);
            projection.invert = project.invert && invert;
            return reset();
        };
    }
    function d3_geo_projectionRadians(stream) {
        return d3_geo_transformPoint(stream, function(x, y) {
            stream.point(x * d3_radians, y * d3_radians);
        });
    }
    function d3_geo_equirectangular(λ, φ) {
        return [ λ, φ ];
    }
    (d3.geo.equirectangular = function() {
        return d3_geo_projection(d3_geo_equirectangular);
    }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
    d3.geo.rotation = function(rotate) {
        rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
        function forward(coordinates) {
            coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
            return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
        }
        forward.invert = function(coordinates) {
            coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
            return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
        };
        return forward;
    };
    function d3_geo_identityRotation(λ, φ) {
        return [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
    }
    d3_geo_identityRotation.invert = d3_geo_equirectangular;
    function d3_geo_rotation(δλ, δφ, δγ) {
        return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
    }
    function d3_geo_forwardRotationλ(δλ) {
        return function(λ, φ) {
            return λ += δλ, [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
        };
    }
    function d3_geo_rotationλ(δλ) {
        var rotation = d3_geo_forwardRotationλ(δλ);
        rotation.invert = d3_geo_forwardRotationλ(-δλ);
        return rotation;
    }
    function d3_geo_rotationφγ(δφ, δγ) {
        var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
        function rotation(λ, φ) {
            var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
            return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ) ];
        }
        rotation.invert = function(λ, φ) {
            var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
            return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ) ];
        };
        return rotation;
    }
    d3.geo.circle = function() {
        var origin = [ 0, 0 ], angle, precision = 6, interpolate;
        function circle() {
            var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
            interpolate(null, null, 1, {
                point: function(x, y) {
                    ring.push(x = rotate(x, y));
                    x[0] *= d3_degrees, x[1] *= d3_degrees;
                }
            });
            return {
                type: "Polygon",
                coordinates: [ ring ]
            };
        }
        circle.origin = function(x) {
            if (!arguments.length) return origin;
            origin = x;
            return circle;
        };
        circle.angle = function(x) {
            if (!arguments.length) return angle;
            interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
            return circle;
        };
        circle.precision = function(_) {
            if (!arguments.length) return precision;
            interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
            return circle;
        };
        return circle.angle(90);
    };
    function d3_geo_circleInterpolate(radius, precision) {
        var cr = Math.cos(radius), sr = Math.sin(radius);
        return function(from, to, direction, listener) {
            var step = direction * precision;
            if (from != null) {
                from = d3_geo_circleAngle(cr, from);
                to = d3_geo_circleAngle(cr, to);
                if (direction > 0 ? from < to : from > to) from += direction * τ;
            } else {
                from = radius + direction * τ;
                to = radius - .5 * step;
            }
            for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
                listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
            }
        };
    }
    function d3_geo_circleAngle(cr, point) {
        var a = d3_geo_cartesian(point);
        a[0] -= cr;
        d3_geo_cartesianNormalize(a);
        var angle = d3_acos(-a[1]);
        return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
    }
    d3.geo.distance = function(a, b) {
        var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
        return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
    };
    d3.geo.graticule = function() {
        var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
        function graticule() {
            return {
                type: "MultiLineString",
                coordinates: lines()
            };
        }
        function lines() {
            return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
                return abs(x % DX) > ε;
            }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
                return abs(y % DY) > ε;
            }).map(y));
        }
        graticule.lines = function() {
            return lines().map(function(coordinates) {
                return {
                    type: "LineString",
                    coordinates: coordinates
                };
            });
        };
        graticule.outline = function() {
            return {
                type: "Polygon",
                coordinates: [ X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1)) ]
            };
        };
        graticule.extent = function(_) {
            if (!arguments.length) return graticule.minorExtent();
            return graticule.majorExtent(_).minorExtent(_);
        };
        graticule.majorExtent = function(_) {
            if (!arguments.length) return [ [ X0, Y0 ], [ X1, Y1 ] ];
            X0 = +_[0][0], X1 = +_[1][0];
            Y0 = +_[0][1], Y1 = +_[1][1];
            if (X0 > X1) _ = X0, X0 = X1, X1 = _;
            if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
            return graticule.precision(precision);
        };
        graticule.minorExtent = function(_) {
            if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
            x0 = +_[0][0], x1 = +_[1][0];
            y0 = +_[0][1], y1 = +_[1][1];
            if (x0 > x1) _ = x0, x0 = x1, x1 = _;
            if (y0 > y1) _ = y0, y0 = y1, y1 = _;
            return graticule.precision(precision);
        };
        graticule.step = function(_) {
            if (!arguments.length) return graticule.minorStep();
            return graticule.majorStep(_).minorStep(_);
        };
        graticule.majorStep = function(_) {
            if (!arguments.length) return [ DX, DY ];
            DX = +_[0], DY = +_[1];
            return graticule;
        };
        graticule.minorStep = function(_) {
            if (!arguments.length) return [ dx, dy ];
            dx = +_[0], dy = +_[1];
            return graticule;
        };
        graticule.precision = function(_) {
            if (!arguments.length) return precision;
            precision = +_;
            x = d3_geo_graticuleX(y0, y1, 90);
            y = d3_geo_graticuleY(x0, x1, precision);
            X = d3_geo_graticuleX(Y0, Y1, 90);
            Y = d3_geo_graticuleY(X0, X1, precision);
            return graticule;
        };
        return graticule.majorExtent([ [ -180, -90 + ε ], [ 180, 90 - ε ] ]).minorExtent([ [ -180, -80 - ε ], [ 180, 80 + ε ] ]);
    };
    function d3_geo_graticuleX(y0, y1, dy) {
        var y = d3.range(y0, y1 - ε, dy).concat(y1);
        return function(x) {
            return y.map(function(y) {
                return [ x, y ];
            });
        };
    }
    function d3_geo_graticuleY(x0, x1, dx) {
        var x = d3.range(x0, x1 - ε, dx).concat(x1);
        return function(y) {
            return x.map(function(x) {
                return [ x, y ];
            });
        };
    }
    function d3_source(d) {
        return d.source;
    }
    function d3_target(d) {
        return d.target;
    }
    d3.geo.greatArc = function() {
        var source = d3_source, source_, target = d3_target, target_;
        function greatArc() {
            return {
                type: "LineString",
                coordinates: [ source_ || source.apply(this, arguments), target_ || target.apply(this, arguments) ]
            };
        }
        greatArc.distance = function() {
            return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
        };
        greatArc.source = function(_) {
            if (!arguments.length) return source;
            source = _, source_ = typeof _ === "function" ? null : _;
            return greatArc;
        };
        greatArc.target = function(_) {
            if (!arguments.length) return target;
            target = _, target_ = typeof _ === "function" ? null : _;
            return greatArc;
        };
        greatArc.precision = function() {
            return arguments.length ? greatArc : 0;
        };
        return greatArc;
    };
    d3.geo.interpolate = function(source, target) {
        return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
    };
    function d3_geo_interpolate(x0, y0, x1, y1) {
        var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
        var interpolate = d ? function(t) {
            var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
            return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
        } : function() {
            return [ x0 * d3_degrees, y0 * d3_degrees ];
        };
        interpolate.distance = d;
        return interpolate;
    }
    d3.geo.length = function(object) {
        d3_geo_lengthSum = 0;
        d3.geo.stream(object, d3_geo_length);
        return d3_geo_lengthSum;
    };
    var d3_geo_lengthSum;
    var d3_geo_length = {
        sphere: d3_noop,
        point: d3_noop,
        lineStart: d3_geo_lengthLineStart,
        lineEnd: d3_noop,
        polygonStart: d3_noop,
        polygonEnd: d3_noop
    };
    function d3_geo_lengthLineStart() {
        var λ0, sinφ0, cosφ0;
        d3_geo_length.point = function(λ, φ) {
            λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
            d3_geo_length.point = nextPoint;
        };
        d3_geo_length.lineEnd = function() {
            d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
        };
        function nextPoint(λ, φ) {
            var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);
            d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
            λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
        }
    }
    function d3_geo_azimuthal(scale, angle) {
        function azimuthal(λ, φ) {
            var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
            return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
        }
        azimuthal.invert = function(x, y) {
            var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
            return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
        };
        return azimuthal;
    }
    var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
        return Math.sqrt(2 / (1 + cosλcosφ));
    }, function(ρ) {
        return 2 * Math.asin(ρ / 2);
    });
    (d3.geo.azimuthalEqualArea = function() {
        return d3_geo_projection(d3_geo_azimuthalEqualArea);
    }).raw = d3_geo_azimuthalEqualArea;
    var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
        var c = Math.acos(cosλcosφ);
        return c && c / Math.sin(c);
    }, d3_identity);
    (d3.geo.azimuthalEquidistant = function() {
        return d3_geo_projection(d3_geo_azimuthalEquidistant);
    }).raw = d3_geo_azimuthalEquidistant;
    function d3_geo_conicConformal(φ0, φ1) {
        var cosφ0 = Math.cos(φ0), t = function(φ) {
            return Math.tan(π / 4 + φ / 2);
        }, n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)), F = cosφ0 * Math.pow(t(φ0), n) / n;
        if (!n) return d3_geo_mercator;
        function forward(λ, φ) {
            if (F > 0) {
                if (φ < -halfπ + ε) φ = -halfπ + ε;
            } else {
                if (φ > halfπ - ε) φ = halfπ - ε;
            }
            var ρ = F / Math.pow(t(φ), n);
            return [ ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ) ];
        }
        forward.invert = function(x, y) {
            var ρ0_y = F - y, ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
            return [ Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ ];
        };
        return forward;
    }
    (d3.geo.conicConformal = function() {
        return d3_geo_conic(d3_geo_conicConformal);
    }).raw = d3_geo_conicConformal;
    function d3_geo_conicEquidistant(φ0, φ1) {
        var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;
        if (abs(n) < ε) return d3_geo_equirectangular;
        function forward(λ, φ) {
            var ρ = G - φ;
            return [ ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ) ];
        }
        forward.invert = function(x, y) {
            var ρ0_y = G - y;
            return [ Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y) ];
        };
        return forward;
    }
    (d3.geo.conicEquidistant = function() {
        return d3_geo_conic(d3_geo_conicEquidistant);
    }).raw = d3_geo_conicEquidistant;
    var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
        return 1 / cosλcosφ;
    }, Math.atan);
    (d3.geo.gnomonic = function() {
        return d3_geo_projection(d3_geo_gnomonic);
    }).raw = d3_geo_gnomonic;
    function d3_geo_mercator(λ, φ) {
        return [ λ, Math.log(Math.tan(π / 4 + φ / 2)) ];
    }
    d3_geo_mercator.invert = function(x, y) {
        return [ x, 2 * Math.atan(Math.exp(y)) - halfπ ];
    };
    function d3_geo_mercatorProjection(project) {
        var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
        m.scale = function() {
            var v = scale.apply(m, arguments);
            return v === m ? clipAuto ? m.clipExtent(null) : m : v;
        };
        m.translate = function() {
            var v = translate.apply(m, arguments);
            return v === m ? clipAuto ? m.clipExtent(null) : m : v;
        };
        m.clipExtent = function(_) {
            var v = clipExtent.apply(m, arguments);
            if (v === m) {
                if (clipAuto = _ == null) {
                    var k = π * scale(), t = translate();
                    clipExtent([ [ t[0] - k, t[1] - k ], [ t[0] + k, t[1] + k ] ]);
                }
            } else if (clipAuto) {
                v = null;
            }
            return v;
        };
        return m.clipExtent(null);
    }
    (d3.geo.mercator = function() {
        return d3_geo_mercatorProjection(d3_geo_mercator);
    }).raw = d3_geo_mercator;
    var d3_geo_orthographic = d3_geo_azimuthal(function() {
        return 1;
    }, Math.asin);
    (d3.geo.orthographic = function() {
        return d3_geo_projection(d3_geo_orthographic);
    }).raw = d3_geo_orthographic;
    var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
        return 1 / (1 + cosλcosφ);
    }, function(ρ) {
        return 2 * Math.atan(ρ);
    });
    (d3.geo.stereographic = function() {
        return d3_geo_projection(d3_geo_stereographic);
    }).raw = d3_geo_stereographic;
    function d3_geo_transverseMercator(λ, φ) {
        return [ Math.log(Math.tan(π / 4 + φ / 2)), -λ ];
    }
    d3_geo_transverseMercator.invert = function(x, y) {
        return [ -y, 2 * Math.atan(Math.exp(x)) - halfπ ];
    };
    (d3.geo.transverseMercator = function() {
        var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator), center = projection.center, rotate = projection.rotate;
        projection.center = function(_) {
            return _ ? center([ -_[1], _[0] ]) : (_ = center(), [ -_[1], _[0] ]);
        };
        projection.rotate = function(_) {
            return _ ? rotate([ _[0], _[1], _.length > 2 ? _[2] + 90 : 90 ]) : (_ = rotate(), 
            [ _[0], _[1], _[2] - 90 ]);
        };
        return projection.rotate([ 0, 0 ]);
    }).raw = d3_geo_transverseMercator;
    d3.geom = {};
    function d3_geom_pointX(d) {
        return d[0];
    }
    function d3_geom_pointY(d) {
        return d[1];
    }
    d3.geom.hull = function(vertices) {
        var x = d3_geom_pointX, y = d3_geom_pointY;
        if (arguments.length) return hull(vertices);
        function hull(data) {
            if (data.length < 3) return [];
            var fx = d3_functor(x), fy = d3_functor(y), i, n = data.length, points = [], flippedPoints = [];
            for (i = 0; i < n; i++) {
                points.push([ +fx.call(this, data[i], i), +fy.call(this, data[i], i), i ]);
            }
            points.sort(d3_geom_hullOrder);
            for (i = 0; i < n; i++) flippedPoints.push([ points[i][0], -points[i][1] ]);
            var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);
            var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];
            for (i = upper.length - 1; i >= 0; --i) polygon.push(data[points[upper[i]][2]]);
            for (i = +skipLeft; i < lower.length - skipRight; ++i) polygon.push(data[points[lower[i]][2]]);
            return polygon;
        }
        hull.x = function(_) {
            return arguments.length ? (x = _, hull) : x;
        };
        hull.y = function(_) {
            return arguments.length ? (y = _, hull) : y;
        };
        return hull;
    };
    function d3_geom_hullUpper(points) {
        var n = points.length, hull = [ 0, 1 ], hs = 2;
        for (var i = 2; i < n; i++) {
            while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0) --hs;
            hull[hs++] = i;
        }
        return hull.slice(0, hs);
    }
    function d3_geom_hullOrder(a, b) {
        return a[0] - b[0] || a[1] - b[1];
    }
    d3.geom.polygon = function(coordinates) {
        d3_subclass(coordinates, d3_geom_polygonPrototype);
        return coordinates;
    };
    var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
    d3_geom_polygonPrototype.area = function() {
        var i = -1, n = this.length, a, b = this[n - 1], area = 0;
        while (++i < n) {
            a = b;
            b = this[i];
            area += a[1] * b[0] - a[0] * b[1];
        }
        return area * .5;
    };
    d3_geom_polygonPrototype.centroid = function(k) {
        var i = -1, n = this.length, x = 0, y = 0, a, b = this[n - 1], c;
        if (!arguments.length) k = -1 / (6 * this.area());
        while (++i < n) {
            a = b;
            b = this[i];
            c = a[0] * b[1] - b[0] * a[1];
            x += (a[0] + b[0]) * c;
            y += (a[1] + b[1]) * c;
        }
        return [ x * k, y * k ];
    };
    d3_geom_polygonPrototype.clip = function(subject) {
        var input, closed = d3_geom_polygonClosed(subject), i = -1, n = this.length - d3_geom_polygonClosed(this), j, m, a = this[n - 1], b, c, d;
        while (++i < n) {
            input = subject.slice();
            subject.length = 0;
            b = this[i];
            c = input[(m = input.length - closed) - 1];
            j = -1;
            while (++j < m) {
                d = input[j];
                if (d3_geom_polygonInside(d, a, b)) {
                    if (!d3_geom_polygonInside(c, a, b)) {
                        subject.push(d3_geom_polygonIntersect(c, d, a, b));
                    }
                    subject.push(d);
                } else if (d3_geom_polygonInside(c, a, b)) {
                    subject.push(d3_geom_polygonIntersect(c, d, a, b));
                }
                c = d;
            }
            if (closed) subject.push(subject[0]);
            a = b;
        }
        return subject;
    };
    function d3_geom_polygonInside(p, a, b) {
        return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
    }
    function d3_geom_polygonIntersect(c, d, a, b) {
        var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
        return [ x1 + ua * x21, y1 + ua * y21 ];
    }
    function d3_geom_polygonClosed(coordinates) {
        var a = coordinates[0], b = coordinates[coordinates.length - 1];
        return !(a[0] - b[0] || a[1] - b[1]);
    }
    var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [], d3_geom_voronoiFirstCircle, d3_geom_voronoiCircles, d3_geom_voronoiCirclePool = [];
    function d3_geom_voronoiBeach() {
        d3_geom_voronoiRedBlackNode(this);
        this.edge = this.site = this.circle = null;
    }
    function d3_geom_voronoiCreateBeach(site) {
        var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
        beach.site = site;
        return beach;
    }
    function d3_geom_voronoiDetachBeach(beach) {
        d3_geom_voronoiDetachCircle(beach);
        d3_geom_voronoiBeaches.remove(beach);
        d3_geom_voronoiBeachPool.push(beach);
        d3_geom_voronoiRedBlackNode(beach);
    }
    function d3_geom_voronoiRemoveBeach(beach) {
        var circle = beach.circle, x = circle.x, y = circle.cy, vertex = {
            x: x,
            y: y
        }, previous = beach.P, next = beach.N, disappearing = [ beach ];
        d3_geom_voronoiDetachBeach(beach);
        var lArc = previous;
        while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
            previous = lArc.P;
            disappearing.unshift(lArc);
            d3_geom_voronoiDetachBeach(lArc);
            lArc = previous;
        }
        disappearing.unshift(lArc);
        d3_geom_voronoiDetachCircle(lArc);
        var rArc = next;
        while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
            next = rArc.N;
            disappearing.push(rArc);
            d3_geom_voronoiDetachBeach(rArc);
            rArc = next;
        }
        disappearing.push(rArc);
        d3_geom_voronoiDetachCircle(rArc);
        var nArcs = disappearing.length, iArc;
        for (iArc = 1; iArc < nArcs; ++iArc) {
            rArc = disappearing[iArc];
            lArc = disappearing[iArc - 1];
            d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
        }
        lArc = disappearing[0];
        rArc = disappearing[nArcs - 1];
        rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
        d3_geom_voronoiAttachCircle(lArc);
        d3_geom_voronoiAttachCircle(rArc);
    }
    function d3_geom_voronoiAddBeach(site) {
        var x = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
        while (node) {
            dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
            if (dxl > ε) node = node.L; else {
                dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
                if (dxr > ε) {
                    if (!node.R) {
                        lArc = node;
                        break;
                    }
                    node = node.R;
                } else {
                    if (dxl > -ε) {
                        lArc = node.P;
                        rArc = node;
                    } else if (dxr > -ε) {
                        lArc = node;
                        rArc = node.N;
                    } else {
                        lArc = rArc = node;
                    }
                    break;
                }
            }
        }
        var newArc = d3_geom_voronoiCreateBeach(site);
        d3_geom_voronoiBeaches.insert(lArc, newArc);
        if (!lArc && !rArc) return;
        if (lArc === rArc) {
            d3_geom_voronoiDetachCircle(lArc);
            rArc = d3_geom_voronoiCreateBeach(lArc.site);
            d3_geom_voronoiBeaches.insert(newArc, rArc);
            newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
            d3_geom_voronoiAttachCircle(lArc);
            d3_geom_voronoiAttachCircle(rArc);
            return;
        }
        if (!rArc) {
            newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
            return;
        }
        d3_geom_voronoiDetachCircle(lArc);
        d3_geom_voronoiDetachCircle(rArc);
        var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = {
            x: (cy * hb - by * hc) / d + ax,
            y: (bx * hc - cx * hb) / d + ay
        };
        d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
        newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
        rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
        d3_geom_voronoiAttachCircle(lArc);
        d3_geom_voronoiAttachCircle(rArc);
    }
    function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
        var site = arc.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;
        if (!pby2) return rfocx;
        var lArc = arc.P;
        if (!lArc) return -Infinity;
        site = lArc.site;
        var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;
        if (!plby2) return lfocx;
        var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
        if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
        return (rfocx + lfocx) / 2;
    }
    function d3_geom_voronoiRightBreakPoint(arc, directrix) {
        var rArc = arc.N;
        if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
        var site = arc.site;
        return site.y === directrix ? site.x : Infinity;
    }
    function d3_geom_voronoiCell(site) {
        this.site = site;
        this.edges = [];
    }
    d3_geom_voronoiCell.prototype.prepare = function() {
        var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;
        while (iHalfEdge--) {
            edge = halfEdges[iHalfEdge].edge;
            if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
        }
        halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
        return halfEdges.length;
    };
    function d3_geom_voronoiCloseCells(extent) {
        var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;
        while (iCell--) {
            cell = cells[iCell];
            if (!cell || !cell.prepare()) continue;
            halfEdges = cell.edges;
            nHalfEdges = halfEdges.length;
            iHalfEdge = 0;
            while (iHalfEdge < nHalfEdges) {
                end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
                start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
                if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
                    halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
                        x: x0,
                        y: abs(x2 - x0) < ε ? y2 : y1
                    } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
                        x: abs(y2 - y1) < ε ? x2 : x1,
                        y: y1
                    } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
                        x: x1,
                        y: abs(x2 - x1) < ε ? y2 : y0
                    } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
                        x: abs(y2 - y0) < ε ? x2 : x0,
                        y: y0
                    } : null), cell.site, null));
                    ++nHalfEdges;
                }
            }
        }
    }
    function d3_geom_voronoiHalfEdgeOrder(a, b) {
        return b.angle - a.angle;
    }
    function d3_geom_voronoiCircle() {
        d3_geom_voronoiRedBlackNode(this);
        this.x = this.y = this.arc = this.site = this.cy = null;
    }
    function d3_geom_voronoiAttachCircle(arc) {
        var lArc = arc.P, rArc = arc.N;
        if (!lArc || !rArc) return;
        var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
        if (lSite === rSite) return;
        var bx = cSite.x, by = cSite.y, ax = lSite.x - bx, ay = lSite.y - by, cx = rSite.x - bx, cy = rSite.y - by;
        var d = 2 * (ax * cy - ay * cx);
        if (d >= -ε2) return;
        var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d, cy = y + by;
        var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
        circle.arc = arc;
        circle.site = cSite;
        circle.x = x + bx;
        circle.y = cy + Math.sqrt(x * x + y * y);
        circle.cy = cy;
        arc.circle = circle;
        var before = null, node = d3_geom_voronoiCircles._;
        while (node) {
            if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
                if (node.L) node = node.L; else {
                    before = node.P;
                    break;
                }
            } else {
                if (node.R) node = node.R; else {
                    before = node;
                    break;
                }
            }
        }
        d3_geom_voronoiCircles.insert(before, circle);
        if (!before) d3_geom_voronoiFirstCircle = circle;
    }
    function d3_geom_voronoiDetachCircle(arc) {
        var circle = arc.circle;
        if (circle) {
            if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
            d3_geom_voronoiCircles.remove(circle);
            d3_geom_voronoiCirclePool.push(circle);
            d3_geom_voronoiRedBlackNode(circle);
            arc.circle = null;
        }
    }
    function d3_geom_voronoiClipEdges(extent) {
        var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;
        while (i--) {
            e = edges[i];
            if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
                e.a = e.b = null;
                edges.splice(i, 1);
            }
        }
    }
    function d3_geom_voronoiConnectEdge(edge, extent) {
        var vb = edge.b;
        if (vb) return true;
        var va = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
        if (ry === ly) {
            if (fx < x0 || fx >= x1) return;
            if (lx > rx) {
                if (!va) va = {
                    x: fx,
                    y: y0
                }; else if (va.y >= y1) return;
                vb = {
                    x: fx,
                    y: y1
                };
            } else {
                if (!va) va = {
                    x: fx,
                    y: y1
                }; else if (va.y < y0) return;
                vb = {
                    x: fx,
                    y: y0
                };
            }
        } else {
            fm = (lx - rx) / (ry - ly);
            fb = fy - fm * fx;
            if (fm < -1 || fm > 1) {
                if (lx > rx) {
                    if (!va) va = {
                        x: (y0 - fb) / fm,
                        y: y0
                    }; else if (va.y >= y1) return;
                    vb = {
                        x: (y1 - fb) / fm,
                        y: y1
                    };
                } else {
                    if (!va) va = {
                        x: (y1 - fb) / fm,
                        y: y1
                    }; else if (va.y < y0) return;
                    vb = {
                        x: (y0 - fb) / fm,
                        y: y0
                    };
                }
            } else {
                if (ly < ry) {
                    if (!va) va = {
                        x: x0,
                        y: fm * x0 + fb
                    }; else if (va.x >= x1) return;
                    vb = {
                        x: x1,
                        y: fm * x1 + fb
                    };
                } else {
                    if (!va) va = {
                        x: x1,
                        y: fm * x1 + fb
                    }; else if (va.x < x0) return;
                    vb = {
                        x: x0,
                        y: fm * x0 + fb
                    };
                }
            }
        }
        edge.a = va;
        edge.b = vb;
        return true;
    }
    function d3_geom_voronoiEdge(lSite, rSite) {
        this.l = lSite;
        this.r = rSite;
        this.a = this.b = null;
    }
    function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
        var edge = new d3_geom_voronoiEdge(lSite, rSite);
        d3_geom_voronoiEdges.push(edge);
        if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
        if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
        d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
        d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
        return edge;
    }
    function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
        var edge = new d3_geom_voronoiEdge(lSite, null);
        edge.a = va;
        edge.b = vb;
        d3_geom_voronoiEdges.push(edge);
        return edge;
    }
    function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
        if (!edge.a && !edge.b) {
            edge.a = vertex;
            edge.l = lSite;
            edge.r = rSite;
        } else if (edge.l === rSite) {
            edge.b = vertex;
        } else {
            edge.a = vertex;
        }
    }
    function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
        var va = edge.a, vb = edge.b;
        this.edge = edge;
        this.site = lSite;
        this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
    }
    d3_geom_voronoiHalfEdge.prototype = {
        start: function() {
            return this.edge.l === this.site ? this.edge.a : this.edge.b;
        },
        end: function() {
            return this.edge.l === this.site ? this.edge.b : this.edge.a;
        }
    };
    function d3_geom_voronoiRedBlackTree() {
        this._ = null;
    }
    function d3_geom_voronoiRedBlackNode(node) {
        node.U = node.C = node.L = node.R = node.P = node.N = null;
    }
    d3_geom_voronoiRedBlackTree.prototype = {
        insert: function(after, node) {
            var parent, grandpa, uncle;
            if (after) {
                node.P = after;
                node.N = after.N;
                if (after.N) after.N.P = node;
                after.N = node;
                if (after.R) {
                    after = after.R;
                    while (after.L) after = after.L;
                    after.L = node;
                } else {
                    after.R = node;
                }
                parent = after;
            } else if (this._) {
                after = d3_geom_voronoiRedBlackFirst(this._);
                node.P = null;
                node.N = after;
                after.P = after.L = node;
                parent = after;
            } else {
                node.P = node.N = null;
                this._ = node;
                parent = null;
            }
            node.L = node.R = null;
            node.U = parent;
            node.C = true;
            after = node;
            while (parent && parent.C) {
                grandpa = parent.U;
                if (parent === grandpa.L) {
                    uncle = grandpa.R;
                    if (uncle && uncle.C) {
                        parent.C = uncle.C = false;
                        grandpa.C = true;
                        after = grandpa;
                    } else {
                        if (after === parent.R) {
                            d3_geom_voronoiRedBlackRotateLeft(this, parent);
                            after = parent;
                            parent = after.U;
                        }
                        parent.C = false;
                        grandpa.C = true;
                        d3_geom_voronoiRedBlackRotateRight(this, grandpa);
                    }
                } else {
                    uncle = grandpa.L;
                    if (uncle && uncle.C) {
                        parent.C = uncle.C = false;
                        grandpa.C = true;
                        after = grandpa;
                    } else {
                        if (after === parent.L) {
                            d3_geom_voronoiRedBlackRotateRight(this, parent);
                            after = parent;
                            parent = after.U;
                        }
                        parent.C = false;
                        grandpa.C = true;
                        d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
                    }
                }
                parent = after.U;
            }
            this._.C = false;
        },
        remove: function(node) {
            if (node.N) node.N.P = node.P;
            if (node.P) node.P.N = node.N;
            node.N = node.P = null;
            var parent = node.U, sibling, left = node.L, right = node.R, next, red;
            if (!left) next = right; else if (!right) next = left; else next = d3_geom_voronoiRedBlackFirst(right);
            if (parent) {
                if (parent.L === node) parent.L = next; else parent.R = next;
            } else {
                this._ = next;
            }
            if (left && right) {
                red = next.C;
                next.C = node.C;
                next.L = left;
                left.U = next;
                if (next !== right) {
                    parent = next.U;
                    next.U = node.U;
                    node = next.R;
                    parent.L = node;
                    next.R = right;
                    right.U = next;
                } else {
                    next.U = parent;
                    parent = next;
                    node = next.R;
                }
            } else {
                red = node.C;
                node = next;
            }
            if (node) node.U = parent;
            if (red) return;
            if (node && node.C) {
                node.C = false;
                return;
            }
            do {
                if (node === this._) break;
                if (node === parent.L) {
                    sibling = parent.R;
                    if (sibling.C) {
                        sibling.C = false;
                        parent.C = true;
                        d3_geom_voronoiRedBlackRotateLeft(this, parent);
                        sibling = parent.R;
                    }
                    if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                        if (!sibling.R || !sibling.R.C) {
                            sibling.L.C = false;
                            sibling.C = true;
                            d3_geom_voronoiRedBlackRotateRight(this, sibling);
                            sibling = parent.R;
                        }
                        sibling.C = parent.C;
                        parent.C = sibling.R.C = false;
                        d3_geom_voronoiRedBlackRotateLeft(this, parent);
                        node = this._;
                        break;
                    }
                } else {
                    sibling = parent.L;
                    if (sibling.C) {
                        sibling.C = false;
                        parent.C = true;
                        d3_geom_voronoiRedBlackRotateRight(this, parent);
                        sibling = parent.L;
                    }
                    if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                        if (!sibling.L || !sibling.L.C) {
                            sibling.R.C = false;
                            sibling.C = true;
                            d3_geom_voronoiRedBlackRotateLeft(this, sibling);
                            sibling = parent.L;
                        }
                        sibling.C = parent.C;
                        parent.C = sibling.L.C = false;
                        d3_geom_voronoiRedBlackRotateRight(this, parent);
                        node = this._;
                        break;
                    }
                }
                sibling.C = true;
                node = parent;
                parent = parent.U;
            } while (!node.C);
            if (node) node.C = false;
        }
    };
    function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
        var p = node, q = node.R, parent = p.U;
        if (parent) {
            if (parent.L === p) parent.L = q; else parent.R = q;
        } else {
            tree._ = q;
        }
        q.U = parent;
        p.U = q;
        p.R = q.L;
        if (p.R) p.R.U = p;
        q.L = p;
    }
    function d3_geom_voronoiRedBlackRotateRight(tree, node) {
        var p = node, q = node.L, parent = p.U;
        if (parent) {
            if (parent.L === p) parent.L = q; else parent.R = q;
        } else {
            tree._ = q;
        }
        q.U = parent;
        p.U = q;
        p.L = q.R;
        if (p.L) p.L.U = p;
        q.R = p;
    }
    function d3_geom_voronoiRedBlackFirst(node) {
        while (node.L) node = node.L;
        return node;
    }
    function d3_geom_voronoi(sites, bbox) {
        var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;
        d3_geom_voronoiEdges = [];
        d3_geom_voronoiCells = new Array(sites.length);
        d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
        d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
        while (true) {
            circle = d3_geom_voronoiFirstCircle;
            if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
                if (site.x !== x0 || site.y !== y0) {
                    d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
                    d3_geom_voronoiAddBeach(site);
                    x0 = site.x, y0 = site.y;
                }
                site = sites.pop();
            } else if (circle) {
                d3_geom_voronoiRemoveBeach(circle.arc);
            } else {
                break;
            }
        }
        if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
        var diagram = {
            cells: d3_geom_voronoiCells,
            edges: d3_geom_voronoiEdges
        };
        d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
        return diagram;
    }
    function d3_geom_voronoiVertexOrder(a, b) {
        return b.y - a.y || b.x - a.x;
    }
    d3.geom.voronoi = function(points) {
        var x = d3_geom_pointX, y = d3_geom_pointY, fx = x, fy = y, clipExtent = d3_geom_voronoiClipExtent;
        if (points) return voronoi(points);
        function voronoi(data) {
            var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];
            d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
                var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function(e) {
                    var s = e.start();
                    return [ s.x, s.y ];
                }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [ [ x0, y1 ], [ x1, y1 ], [ x1, y0 ], [ x0, y0 ] ] : [];
                polygon.point = data[i];
            });
            return polygons;
        }
        function sites(data) {
            return data.map(function(d, i) {
                return {
                    x: Math.round(fx(d, i) / ε) * ε,
                    y: Math.round(fy(d, i) / ε) * ε,
                    i: i
                };
            });
        }
        voronoi.links = function(data) {
            return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
                return edge.l && edge.r;
            }).map(function(edge) {
                return {
                    source: data[edge.l.i],
                    target: data[edge.r.i]
                };
            });
        };
        voronoi.triangles = function(data) {
            var triangles = [];
            d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
                var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m = edges.length, e0, s0, e1 = edges[m - 1].edge, s1 = e1.l === site ? e1.r : e1.l;
                while (++j < m) {
                    e0 = e1;
                    s0 = s1;
                    e1 = edges[j].edge;
                    s1 = e1.l === site ? e1.r : e1.l;
                    if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
                        triangles.push([ data[i], data[s0.i], data[s1.i] ]);
                    }
                }
            });
            return triangles;
        };
        voronoi.x = function(_) {
            return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
        };
        voronoi.y = function(_) {
            return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
        };
        voronoi.clipExtent = function(_) {
            if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
            clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
            return voronoi;
        };
        voronoi.size = function(_) {
            if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
            return voronoi.clipExtent(_ && [ [ 0, 0 ], _ ]);
        };
        return voronoi;
    };
    var d3_geom_voronoiClipExtent = [ [ -1e6, -1e6 ], [ 1e6, 1e6 ] ];
    function d3_geom_voronoiTriangleArea(a, b, c) {
        return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
    }
    d3.geom.delaunay = function(vertices) {
        return d3.geom.voronoi().triangles(vertices);
    };
    d3.geom.quadtree = function(points, x1, y1, x2, y2) {
        var x = d3_geom_pointX, y = d3_geom_pointY, compat;
        if (compat = arguments.length) {
            x = d3_geom_quadtreeCompatX;
            y = d3_geom_quadtreeCompatY;
            if (compat === 3) {
                y2 = y1;
                x2 = x1;
                y1 = x1 = 0;
            }
            return quadtree(points);
        }
        function quadtree(data) {
            var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
            if (x1 != null) {
                x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
            } else {
                x2_ = y2_ = -(x1_ = y1_ = Infinity);
                xs = [], ys = [];
                n = data.length;
                if (compat) for (i = 0; i < n; ++i) {
                    d = data[i];
                    if (d.x < x1_) x1_ = d.x;
                    if (d.y < y1_) y1_ = d.y;
                    if (d.x > x2_) x2_ = d.x;
                    if (d.y > y2_) y2_ = d.y;
                    xs.push(d.x);
                    ys.push(d.y);
                } else for (i = 0; i < n; ++i) {
                    var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
                    if (x_ < x1_) x1_ = x_;
                    if (y_ < y1_) y1_ = y_;
                    if (x_ > x2_) x2_ = x_;
                    if (y_ > y2_) y2_ = y_;
                    xs.push(x_);
                    ys.push(y_);
                }
            }
            var dx = x2_ - x1_, dy = y2_ - y1_;
            if (dx > dy) y2_ = y1_ + dx; else x2_ = x1_ + dy;
            function insert(n, d, x, y, x1, y1, x2, y2) {
                if (isNaN(x) || isNaN(y)) return;
                if (n.leaf) {
                    var nx = n.x, ny = n.y;
                    if (nx != null) {
                        if (abs(nx - x) + abs(ny - y) < .01) {
                            insertChild(n, d, x, y, x1, y1, x2, y2);
                        } else {
                            var nPoint = n.point;
                            n.x = n.y = n.point = null;
                            insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
                            insertChild(n, d, x, y, x1, y1, x2, y2);
                        }
                    } else {
                        n.x = x, n.y = y, n.point = d;
                    }
                } else {
                    insertChild(n, d, x, y, x1, y1, x2, y2);
                }
            }
            function insertChild(n, d, x, y, x1, y1, x2, y2) {
                var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, right = x >= sx, bottom = y >= sy, i = (bottom << 1) + right;
                n.leaf = false;
                n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
                if (right) x1 = sx; else x2 = sx;
                if (bottom) y1 = sy; else y2 = sy;
                insert(n, d, x, y, x1, y1, x2, y2);
            }
            var root = d3_geom_quadtreeNode();
            root.add = function(d) {
                insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
            };
            root.visit = function(f) {
                d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
            };
            i = -1;
            if (x1 == null) {
                while (++i < n) {
                    insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
                }
                --i;
            } else data.forEach(root.add);
            xs = ys = data = d = null;
            return root;
        }
        quadtree.x = function(_) {
            return arguments.length ? (x = _, quadtree) : x;
        };
        quadtree.y = function(_) {
            return arguments.length ? (y = _, quadtree) : y;
        };
        quadtree.extent = function(_) {
            if (!arguments.length) return x1 == null ? null : [ [ x1, y1 ], [ x2, y2 ] ];
            if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], 
            y2 = +_[1][1];
            return quadtree;
        };
        quadtree.size = function(_) {
            if (!arguments.length) return x1 == null ? null : [ x2 - x1, y2 - y1 ];
            if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
            return quadtree;
        };
        return quadtree;
    };
    function d3_geom_quadtreeCompatX(d) {
        return d.x;
    }
    function d3_geom_quadtreeCompatY(d) {
        return d.y;
    }
    function d3_geom_quadtreeNode() {
        return {
            leaf: true,
            nodes: [],
            point: null,
            x: null,
            y: null
        };
    }
    function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
        if (!f(node, x1, y1, x2, y2)) {
            var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
            if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
            if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
            if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
            if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
        }
    }
    d3.interpolateRgb = d3_interpolateRgb;
    function d3_interpolateRgb(a, b) {
        a = d3.rgb(a);
        b = d3.rgb(b);
        var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
        return function(t) {
            return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
        };
    }
    d3.interpolateObject = d3_interpolateObject;
    function d3_interpolateObject(a, b) {
        var i = {}, c = {}, k;
        for (k in a) {
            if (k in b) {
                i[k] = d3_interpolate(a[k], b[k]);
            } else {
                c[k] = a[k];
            }
        }
        for (k in b) {
            if (!(k in a)) {
                c[k] = b[k];
            }
        }
        return function(t) {
            for (k in i) c[k] = i[k](t);
            return c;
        };
    }
    d3.interpolateNumber = d3_interpolateNumber;
    function d3_interpolateNumber(a, b) {
        b -= a = +a;
        return function(t) {
            return a + b * t;
        };
    }
    d3.interpolateString = d3_interpolateString;
    function d3_interpolateString(a, b) {
        var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
        a = a + "", b = b + "";
        while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
            if ((bs = bm.index) > bi) {
                bs = b.substring(bi, bs);
                if (s[i]) s[i] += bs; else s[++i] = bs;
            }
            if ((am = am[0]) === (bm = bm[0])) {
                if (s[i]) s[i] += bm; else s[++i] = bm;
            } else {
                s[++i] = null;
                q.push({
                    i: i,
                    x: d3_interpolateNumber(am, bm)
                });
            }
            bi = d3_interpolate_numberB.lastIndex;
        }
        if (bi < b.length) {
            bs = b.substring(bi);
            if (s[i]) s[i] += bs; else s[++i] = bs;
        }
        return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
            return b(t) + "";
        }) : function() {
            return b;
        } : (b = q.length, function(t) {
            for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
            return s.join("");
        });
    }
    var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
    d3.interpolate = d3_interpolate;
    function d3_interpolate(a, b) {
        var i = d3.interpolators.length, f;
        while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
        return f;
    }
    d3.interpolators = [ function(a, b) {
        var t = typeof b;
        return (t === "string" ? d3_rgb_names.has(b) || /^(#|rgb\(|hsl\()/.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_Color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
    } ];
    d3.interpolateArray = d3_interpolateArray;
    function d3_interpolateArray(a, b) {
        var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
        for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
        for (;i < na; ++i) c[i] = a[i];
        for (;i < nb; ++i) c[i] = b[i];
        return function(t) {
            for (i = 0; i < n0; ++i) c[i] = x[i](t);
            return c;
        };
    }
    var d3_ease_default = function() {
        return d3_identity;
    };
    var d3_ease = d3.map({
        linear: d3_ease_default,
        poly: d3_ease_poly,
        quad: function() {
            return d3_ease_quad;
        },
        cubic: function() {
            return d3_ease_cubic;
        },
        sin: function() {
            return d3_ease_sin;
        },
        exp: function() {
            return d3_ease_exp;
        },
        circle: function() {
            return d3_ease_circle;
        },
        elastic: d3_ease_elastic,
        back: d3_ease_back,
        bounce: function() {
            return d3_ease_bounce;
        }
    });
    var d3_ease_mode = d3.map({
        in: d3_identity,
        out: d3_ease_reverse,
        "in-out": d3_ease_reflect,
        "out-in": function(f) {
            return d3_ease_reflect(d3_ease_reverse(f));
        }
    });
    d3.ease = function(name) {
        var i = name.indexOf("-"), t = i >= 0 ? name.substring(0, i) : name, m = i >= 0 ? name.substring(i + 1) : "in";
        t = d3_ease.get(t) || d3_ease_default;
        m = d3_ease_mode.get(m) || d3_identity;
        return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
    };
    function d3_ease_clamp(f) {
        return function(t) {
            return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
        };
    }
    function d3_ease_reverse(f) {
        return function(t) {
            return 1 - f(1 - t);
        };
    }
    function d3_ease_reflect(f) {
        return function(t) {
            return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
        };
    }
    function d3_ease_quad(t) {
        return t * t;
    }
    function d3_ease_cubic(t) {
        return t * t * t;
    }
    function d3_ease_cubicInOut(t) {
        if (t <= 0) return 0;
        if (t >= 1) return 1;
        var t2 = t * t, t3 = t2 * t;
        return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
    }
    function d3_ease_poly(e) {
        return function(t) {
            return Math.pow(t, e);
        };
    }
    function d3_ease_sin(t) {
        return 1 - Math.cos(t * halfπ);
    }
    function d3_ease_exp(t) {
        return Math.pow(2, 10 * (t - 1));
    }
    function d3_ease_circle(t) {
        return 1 - Math.sqrt(1 - t * t);
    }
    function d3_ease_elastic(a, p) {
        var s;
        if (arguments.length < 2) p = .45;
        if (arguments.length) s = p / τ * Math.asin(1 / a); else a = 1, s = p / 4;
        return function(t) {
            return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
        };
    }
    function d3_ease_back(s) {
        if (!s) s = 1.70158;
        return function(t) {
            return t * t * ((s + 1) * t - s);
        };
    }
    function d3_ease_bounce(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    }
    d3.interpolateHcl = d3_interpolateHcl;
    function d3_interpolateHcl(a, b) {
        a = d3.hcl(a);
        b = d3.hcl(b);
        var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
        if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
        if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
        return function(t) {
            return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
        };
    }
    d3.interpolateHsl = d3_interpolateHsl;
    function d3_interpolateHsl(a, b) {
        a = d3.hsl(a);
        b = d3.hsl(b);
        var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
        if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
        if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
        return function(t) {
            return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
        };
    }
    d3.interpolateLab = d3_interpolateLab;
    function d3_interpolateLab(a, b) {
        a = d3.lab(a);
        b = d3.lab(b);
        var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
        return function(t) {
            return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
        };
    }
    d3.interpolateRound = d3_interpolateRound;
    function d3_interpolateRound(a, b) {
        b -= a;
        return function(t) {
            return Math.round(a + b * t);
        };
    }
    d3.transform = function(string) {
        var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
        return (d3.transform = function(string) {
            if (string != null) {
                g.setAttribute("transform", string);
                var t = g.transform.baseVal.consolidate();
            }
            return new d3_transform(t ? t.matrix : d3_transformIdentity);
        })(string);
    };
    function d3_transform(m) {
        var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
        if (r0[0] * r1[1] < r1[0] * r0[1]) {
            r0[0] *= -1;
            r0[1] *= -1;
            kx *= -1;
            kz *= -1;
        }
        this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
        this.translate = [ m.e, m.f ];
        this.scale = [ kx, ky ];
        this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
    }
    d3_transform.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
    };
    function d3_transformDot(a, b) {
        return a[0] * b[0] + a[1] * b[1];
    }
    function d3_transformNormalize(a) {
        var k = Math.sqrt(d3_transformDot(a, a));
        if (k) {
            a[0] /= k;
            a[1] /= k;
        }
        return k;
    }
    function d3_transformCombine(a, b, k) {
        a[0] += k * b[0];
        a[1] += k * b[1];
        return a;
    }
    var d3_transformIdentity = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    d3.interpolateTransform = d3_interpolateTransform;
    function d3_interpolateTransform(a, b) {
        var s = [], q = [], n, A = d3.transform(a), B = d3.transform(b), ta = A.translate, tb = B.translate, ra = A.rotate, rb = B.rotate, wa = A.skew, wb = B.skew, ka = A.scale, kb = B.scale;
        if (ta[0] != tb[0] || ta[1] != tb[1]) {
            s.push("translate(", null, ",", null, ")");
            q.push({
                i: 1,
                x: d3_interpolateNumber(ta[0], tb[0])
            }, {
                i: 3,
                x: d3_interpolateNumber(ta[1], tb[1])
            });
        } else if (tb[0] || tb[1]) {
            s.push("translate(" + tb + ")");
        } else {
            s.push("");
        }
        if (ra != rb) {
            if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
            q.push({
                i: s.push(s.pop() + "rotate(", null, ")") - 2,
                x: d3_interpolateNumber(ra, rb)
            });
        } else if (rb) {
            s.push(s.pop() + "rotate(" + rb + ")");
        }
        if (wa != wb) {
            q.push({
                i: s.push(s.pop() + "skewX(", null, ")") - 2,
                x: d3_interpolateNumber(wa, wb)
            });
        } else if (wb) {
            s.push(s.pop() + "skewX(" + wb + ")");
        }
        if (ka[0] != kb[0] || ka[1] != kb[1]) {
            n = s.push(s.pop() + "scale(", null, ",", null, ")");
            q.push({
                i: n - 4,
                x: d3_interpolateNumber(ka[0], kb[0])
            }, {
                i: n - 2,
                x: d3_interpolateNumber(ka[1], kb[1])
            });
        } else if (kb[0] != 1 || kb[1] != 1) {
            s.push(s.pop() + "scale(" + kb + ")");
        }
        n = q.length;
        return function(t) {
            var i = -1, o;
            while (++i < n) s[(o = q[i]).i] = o.x(t);
            return s.join("");
        };
    }
    function d3_uninterpolateNumber(a, b) {
        b = b - (a = +a) ? 1 / (b - a) : 0;
        return function(x) {
            return (x - a) * b;
        };
    }
    function d3_uninterpolateClamp(a, b) {
        b = b - (a = +a) ? 1 / (b - a) : 0;
        return function(x) {
            return Math.max(0, Math.min(1, (x - a) * b));
        };
    }
    d3.layout = {};
    d3.layout.bundle = function() {
        return function(links) {
            var paths = [], i = -1, n = links.length;
            while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
            return paths;
        };
    };
    function d3_layout_bundlePath(link) {
        var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
        while (start !== lca) {
            start = start.parent;
            points.push(start);
        }
        var k = points.length;
        while (end !== lca) {
            points.splice(k, 0, end);
            end = end.parent;
        }
        return points;
    }
    function d3_layout_bundleAncestors(node) {
        var ancestors = [], parent = node.parent;
        while (parent != null) {
            ancestors.push(node);
            node = parent;
            parent = parent.parent;
        }
        ancestors.push(node);
        return ancestors;
    }
    function d3_layout_bundleLeastCommonAncestor(a, b) {
        if (a === b) return a;
        var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
        while (aNode === bNode) {
            sharedNode = aNode;
            aNode = aNodes.pop();
            bNode = bNodes.pop();
        }
        return sharedNode;
    }
    d3.layout.chord = function() {
        var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
        function relayout() {
            var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
            chords = [];
            groups = [];
            k = 0, i = -1;
            while (++i < n) {
                x = 0, j = -1;
                while (++j < n) {
                    x += matrix[i][j];
                }
                groupSums.push(x);
                subgroupIndex.push(d3.range(n));
                k += x;
            }
            if (sortGroups) {
                groupIndex.sort(function(a, b) {
                    return sortGroups(groupSums[a], groupSums[b]);
                });
            }
            if (sortSubgroups) {
                subgroupIndex.forEach(function(d, i) {
                    d.sort(function(a, b) {
                        return sortSubgroups(matrix[i][a], matrix[i][b]);
                    });
                });
            }
            k = (τ - padding * n) / k;
            x = 0, i = -1;
            while (++i < n) {
                x0 = x, j = -1;
                while (++j < n) {
                    var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
                    subgroups[di + "-" + dj] = {
                        index: di,
                        subindex: dj,
                        startAngle: a0,
                        endAngle: a1,
                        value: v
                    };
                }
                groups[di] = {
                    index: di,
                    startAngle: x0,
                    endAngle: x,
                    value: (x - x0) / k
                };
                x += padding;
            }
            i = -1;
            while (++i < n) {
                j = i - 1;
                while (++j < n) {
                    var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
                    if (source.value || target.value) {
                        chords.push(source.value < target.value ? {
                            source: target,
                            target: source
                        } : {
                            source: source,
                            target: target
                        });
                    }
                }
            }
            if (sortChords) resort();
        }
        function resort() {
            chords.sort(function(a, b) {
                return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
            });
        }
        chord.matrix = function(x) {
            if (!arguments.length) return matrix;
            n = (matrix = x) && matrix.length;
            chords = groups = null;
            return chord;
        };
        chord.padding = function(x) {
            if (!arguments.length) return padding;
            padding = x;
            chords = groups = null;
            return chord;
        };
        chord.sortGroups = function(x) {
            if (!arguments.length) return sortGroups;
            sortGroups = x;
            chords = groups = null;
            return chord;
        };
        chord.sortSubgroups = function(x) {
            if (!arguments.length) return sortSubgroups;
            sortSubgroups = x;
            chords = null;
            return chord;
        };
        chord.sortChords = function(x) {
            if (!arguments.length) return sortChords;
            sortChords = x;
            if (chords) resort();
            return chord;
        };
        chord.chords = function() {
            if (!chords) relayout();
            return chords;
        };
        chord.groups = function() {
            if (!groups) relayout();
            return groups;
        };
        return chord;
    };
    d3.layout.force = function() {
        var force = {}, event = d3.dispatch("start", "tick", "end"), size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, chargeDistance2 = d3_layout_forceChargeDistance2, gravity = .1, theta2 = .64, nodes = [], links = [], distances, strengths, charges;
        function repulse(node) {
            return function(quad, x1, _, x2) {
                if (quad.point !== node) {
                    var dx = quad.cx - node.x, dy = quad.cy - node.y, dw = x2 - x1, dn = dx * dx + dy * dy;
                    if (dw * dw / theta2 < dn) {
                        if (dn < chargeDistance2) {
                            var k = quad.charge / dn;
                            node.px -= dx * k;
                            node.py -= dy * k;
                        }
                        return true;
                    }
                    if (quad.point && dn && dn < chargeDistance2) {
                        var k = quad.pointCharge / dn;
                        node.px -= dx * k;
                        node.py -= dy * k;
                    }
                }
                return !quad.charge;
            };
        }
        force.tick = function() {
            if ((alpha *= .99) < .005) {
                event.end({
                    type: "end",
                    alpha: alpha = 0
                });
                return true;
            }
            var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
            for (i = 0; i < m; ++i) {
                o = links[i];
                s = o.source;
                t = o.target;
                x = t.x - s.x;
                y = t.y - s.y;
                if (l = x * x + y * y) {
                    l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
                    x *= l;
                    y *= l;
                    t.x -= x * (k = s.weight / (t.weight + s.weight));
                    t.y -= y * k;
                    s.x += x * (k = 1 - k);
                    s.y += y * k;
                }
            }
            if (k = alpha * gravity) {
                x = size[0] / 2;
                y = size[1] / 2;
                i = -1;
                if (k) while (++i < n) {
                    o = nodes[i];
                    o.x += (x - o.x) * k;
                    o.y += (y - o.y) * k;
                }
            }
            if (charge) {
                d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
                i = -1;
                while (++i < n) {
                    if (!(o = nodes[i]).fixed) {
                        q.visit(repulse(o));
                    }
                }
            }
            i = -1;
            while (++i < n) {
                o = nodes[i];
                if (o.fixed) {
                    o.x = o.px;
                    o.y = o.py;
                } else {
                    o.x -= (o.px - (o.px = o.x)) * friction;
                    o.y -= (o.py - (o.py = o.y)) * friction;
                }
            }
            event.tick({
                type: "tick",
                alpha: alpha
            });
        };
        force.nodes = function(x) {
            if (!arguments.length) return nodes;
            nodes = x;
            return force;
        };
        force.links = function(x) {
            if (!arguments.length) return links;
            links = x;
            return force;
        };
        force.size = function(x) {
            if (!arguments.length) return size;
            size = x;
            return force;
        };
        force.linkDistance = function(x) {
            if (!arguments.length) return linkDistance;
            linkDistance = typeof x === "function" ? x : +x;
            return force;
        };
        force.distance = force.linkDistance;
        force.linkStrength = function(x) {
            if (!arguments.length) return linkStrength;
            linkStrength = typeof x === "function" ? x : +x;
            return force;
        };
        force.friction = function(x) {
            if (!arguments.length) return friction;
            friction = +x;
            return force;
        };
        force.charge = function(x) {
            if (!arguments.length) return charge;
            charge = typeof x === "function" ? x : +x;
            return force;
        };
        force.chargeDistance = function(x) {
            if (!arguments.length) return Math.sqrt(chargeDistance2);
            chargeDistance2 = x * x;
            return force;
        };
        force.gravity = function(x) {
            if (!arguments.length) return gravity;
            gravity = +x;
            return force;
        };
        force.theta = function(x) {
            if (!arguments.length) return Math.sqrt(theta2);
            theta2 = x * x;
            return force;
        };
        force.alpha = function(x) {
            if (!arguments.length) return alpha;
            x = +x;
            if (alpha) {
                if (x > 0) alpha = x; else alpha = 0;
            } else if (x > 0) {
                event.start({
                    type: "start",
                    alpha: alpha = x
                });
                d3.timer(force.tick);
            }
            return force;
        };
        force.start = function() {
            var i, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
            for (i = 0; i < n; ++i) {
                (o = nodes[i]).index = i;
                o.weight = 0;
            }
            for (i = 0; i < m; ++i) {
                o = links[i];
                if (typeof o.source == "number") o.source = nodes[o.source];
                if (typeof o.target == "number") o.target = nodes[o.target];
                ++o.source.weight;
                ++o.target.weight;
            }
            for (i = 0; i < n; ++i) {
                o = nodes[i];
                if (isNaN(o.x)) o.x = position("x", w);
                if (isNaN(o.y)) o.y = position("y", h);
                if (isNaN(o.px)) o.px = o.x;
                if (isNaN(o.py)) o.py = o.y;
            }
            distances = [];
            if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
            strengths = [];
            if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
            charges = [];
            if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
            function position(dimension, size) {
                if (!neighbors) {
                    neighbors = new Array(n);
                    for (j = 0; j < n; ++j) {
                        neighbors[j] = [];
                    }
                    for (j = 0; j < m; ++j) {
                        var o = links[j];
                        neighbors[o.source.index].push(o.target);
                        neighbors[o.target.index].push(o.source);
                    }
                }
                var candidates = neighbors[i], j = -1, m = candidates.length, x;
                while (++j < m) if (!isNaN(x = candidates[j][dimension])) return x;
                return Math.random() * size;
            }
            return force.resume();
        };
        force.resume = function() {
            return force.alpha(.1);
        };
        force.stop = function() {
            return force.alpha(0);
        };
        force.drag = function() {
            if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
            if (!arguments.length) return drag;
            this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
        };
        function dragmove(d) {
            d.px = d3.event.x, d.py = d3.event.y;
            force.resume();
        }
        return d3.rebind(force, event, "on");
    };
    function d3_layout_forceDragstart(d) {
        d.fixed |= 2;
    }
    function d3_layout_forceDragend(d) {
        d.fixed &= ~6;
    }
    function d3_layout_forceMouseover(d) {
        d.fixed |= 4;
        d.px = d.x, d.py = d.y;
    }
    function d3_layout_forceMouseout(d) {
        d.fixed &= ~4;
    }
    function d3_layout_forceAccumulate(quad, alpha, charges) {
        var cx = 0, cy = 0;
        quad.charge = 0;
        if (!quad.leaf) {
            var nodes = quad.nodes, n = nodes.length, i = -1, c;
            while (++i < n) {
                c = nodes[i];
                if (c == null) continue;
                d3_layout_forceAccumulate(c, alpha, charges);
                quad.charge += c.charge;
                cx += c.charge * c.cx;
                cy += c.charge * c.cy;
            }
        }
        if (quad.point) {
            if (!quad.leaf) {
                quad.point.x += Math.random() - .5;
                quad.point.y += Math.random() - .5;
            }
            var k = alpha * charges[quad.point.index];
            quad.charge += quad.pointCharge = k;
            cx += k * quad.point.x;
            cy += k * quad.point.y;
        }
        quad.cx = cx / quad.charge;
        quad.cy = cy / quad.charge;
    }
    var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1, d3_layout_forceChargeDistance2 = Infinity;
    d3.layout.hierarchy = function() {
        var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
        function hierarchy(root) {
            var stack = [ root ], nodes = [], node;
            root.depth = 0;
            while ((node = stack.pop()) != null) {
                nodes.push(node);
                if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
                    var n, childs, child;
                    while (--n >= 0) {
                        stack.push(child = childs[n]);
                        child.parent = node;
                        child.depth = node.depth + 1;
                    }
                    if (value) node.value = 0;
                    node.children = childs;
                } else {
                    if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
                    delete node.children;
                }
            }
            d3_layout_hierarchyVisitAfter(root, function(node) {
                var childs, parent;
                if (sort && (childs = node.children)) childs.sort(sort);
                if (value && (parent = node.parent)) parent.value += node.value;
            });
            return nodes;
        }
        hierarchy.sort = function(x) {
            if (!arguments.length) return sort;
            sort = x;
            return hierarchy;
        };
        hierarchy.children = function(x) {
            if (!arguments.length) return children;
            children = x;
            return hierarchy;
        };
        hierarchy.value = function(x) {
            if (!arguments.length) return value;
            value = x;
            return hierarchy;
        };
        hierarchy.revalue = function(root) {
            if (value) {
                d3_layout_hierarchyVisitBefore(root, function(node) {
                    if (node.children) node.value = 0;
                });
                d3_layout_hierarchyVisitAfter(root, function(node) {
                    var parent;
                    if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
                    if (parent = node.parent) parent.value += node.value;
                });
            }
            return root;
        };
        return hierarchy;
    };
    function d3_layout_hierarchyRebind(object, hierarchy) {
        d3.rebind(object, hierarchy, "sort", "children", "value");
        object.nodes = object;
        object.links = d3_layout_hierarchyLinks;
        return object;
    }
    function d3_layout_hierarchyVisitBefore(node, callback) {
        var nodes = [ node ];
        while ((node = nodes.pop()) != null) {
            callback(node);
            if ((children = node.children) && (n = children.length)) {
                var n, children;
                while (--n >= 0) nodes.push(children[n]);
            }
        }
    }
    function d3_layout_hierarchyVisitAfter(node, callback) {
        var nodes = [ node ], nodes2 = [];
        while ((node = nodes.pop()) != null) {
            nodes2.push(node);
            if ((children = node.children) && (n = children.length)) {
                var i = -1, n, children;
                while (++i < n) nodes.push(children[i]);
            }
        }
        while ((node = nodes2.pop()) != null) {
            callback(node);
        }
    }
    function d3_layout_hierarchyChildren(d) {
        return d.children;
    }
    function d3_layout_hierarchyValue(d) {
        return d.value;
    }
    function d3_layout_hierarchySort(a, b) {
        return b.value - a.value;
    }
    function d3_layout_hierarchyLinks(nodes) {
        return d3.merge(nodes.map(function(parent) {
            return (parent.children || []).map(function(child) {
                return {
                    source: parent,
                    target: child
                };
            });
        }));
    }
    d3.layout.partition = function() {
        var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
        function position(node, x, dx, dy) {
            var children = node.children;
            node.x = x;
            node.y = node.depth * dy;
            node.dx = dx;
            node.dy = dy;
            if (children && (n = children.length)) {
                var i = -1, n, c, d;
                dx = node.value ? dx / node.value : 0;
                while (++i < n) {
                    position(c = children[i], x, d = c.value * dx, dy);
                    x += d;
                }
            }
        }
        function depth(node) {
            var children = node.children, d = 0;
            if (children && (n = children.length)) {
                var i = -1, n;
                while (++i < n) d = Math.max(d, depth(children[i]));
            }
            return 1 + d;
        }
        function partition(d, i) {
            var nodes = hierarchy.call(this, d, i);
            position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
            return nodes;
        }
        partition.size = function(x) {
            if (!arguments.length) return size;
            size = x;
            return partition;
        };
        return d3_layout_hierarchyRebind(partition, hierarchy);
    };
    d3.layout.pie = function() {
        var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = τ;
        function pie(data) {
            var values = data.map(function(d, i) {
                return +value.call(pie, d, i);
            });
            var a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle);
            var k = ((typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a) / d3.sum(values);
            var index = d3.range(data.length);
            if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
                return values[j] - values[i];
            } : function(i, j) {
                return sort(data[i], data[j]);
            });
            var arcs = [];
            index.forEach(function(i) {
                var d;
                arcs[i] = {
                    data: data[i],
                    value: d = values[i],
                    startAngle: a,
                    endAngle: a += d * k
                };
            });
            return arcs;
        }
        pie.value = function(x) {
            if (!arguments.length) return value;
            value = x;
            return pie;
        };
        pie.sort = function(x) {
            if (!arguments.length) return sort;
            sort = x;
            return pie;
        };
        pie.startAngle = function(x) {
            if (!arguments.length) return startAngle;
            startAngle = x;
            return pie;
        };
        pie.endAngle = function(x) {
            if (!arguments.length) return endAngle;
            endAngle = x;
            return pie;
        };
        return pie;
    };
    var d3_layout_pieSortByValue = {};
    d3.layout.stack = function() {
        var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
        function stack(data, index) {
            var series = data.map(function(d, i) {
                return values.call(stack, d, i);
            });
            var points = series.map(function(d) {
                return d.map(function(v, i) {
                    return [ x.call(stack, v, i), y.call(stack, v, i) ];
                });
            });
            var orders = order.call(stack, points, index);
            series = d3.permute(series, orders);
            points = d3.permute(points, orders);
            var offsets = offset.call(stack, points, index);
            var n = series.length, m = series[0].length, i, j, o;
            for (j = 0; j < m; ++j) {
                out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
                for (i = 1; i < n; ++i) {
                    out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
                }
            }
            return data;
        }
        stack.values = function(x) {
            if (!arguments.length) return values;
            values = x;
            return stack;
        };
        stack.order = function(x) {
            if (!arguments.length) return order;
            order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
            return stack;
        };
        stack.offset = function(x) {
            if (!arguments.length) return offset;
            offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
            return stack;
        };
        stack.x = function(z) {
            if (!arguments.length) return x;
            x = z;
            return stack;
        };
        stack.y = function(z) {
            if (!arguments.length) return y;
            y = z;
            return stack;
        };
        stack.out = function(z) {
            if (!arguments.length) return out;
            out = z;
            return stack;
        };
        return stack;
    };
    function d3_layout_stackX(d) {
        return d.x;
    }
    function d3_layout_stackY(d) {
        return d.y;
    }
    function d3_layout_stackOut(d, y0, y) {
        d.y0 = y0;
        d.y = y;
    }
    var d3_layout_stackOrders = d3.map({
        "inside-out": function(data) {
            var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
                return max[a] - max[b];
            }), top = 0, bottom = 0, tops = [], bottoms = [];
            for (i = 0; i < n; ++i) {
                j = index[i];
                if (top < bottom) {
                    top += sums[j];
                    tops.push(j);
                } else {
                    bottom += sums[j];
                    bottoms.push(j);
                }
            }
            return bottoms.reverse().concat(tops);
        },
        reverse: function(data) {
            return d3.range(data.length).reverse();
        },
        default: d3_layout_stackOrderDefault
    });
    var d3_layout_stackOffsets = d3.map({
        silhouette: function(data) {
            var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
            for (j = 0; j < m; ++j) {
                for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
                if (o > max) max = o;
                sums.push(o);
            }
            for (j = 0; j < m; ++j) {
                y0[j] = (max - sums[j]) / 2;
            }
            return y0;
        },
        wiggle: function(data) {
            var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
            y0[0] = o = o0 = 0;
            for (j = 1; j < m; ++j) {
                for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
                for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
                    for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
                        s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
                    }
                    s2 += s3 * data[i][j][1];
                }
                y0[j] = o -= s1 ? s2 / s1 * dx : 0;
                if (o < o0) o0 = o;
            }
            for (j = 0; j < m; ++j) y0[j] -= o0;
            return y0;
        },
        expand: function(data) {
            var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
            for (j = 0; j < m; ++j) {
                for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
                if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
            }
            for (j = 0; j < m; ++j) y0[j] = 0;
            return y0;
        },
        zero: d3_layout_stackOffsetZero
    });
    function d3_layout_stackOrderDefault(data) {
        return d3.range(data.length);
    }
    function d3_layout_stackOffsetZero(data) {
        var j = -1, m = data[0].length, y0 = [];
        while (++j < m) y0[j] = 0;
        return y0;
    }
    function d3_layout_stackMaxIndex(array) {
        var i = 1, j = 0, v = array[0][1], k, n = array.length;
        for (;i < n; ++i) {
            if ((k = array[i][1]) > v) {
                j = i;
                v = k;
            }
        }
        return j;
    }
    function d3_layout_stackReduceSum(d) {
        return d.reduce(d3_layout_stackSum, 0);
    }
    function d3_layout_stackSum(p, d) {
        return p + d[1];
    }
    d3.layout.histogram = function() {
        var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
        function histogram(data, i) {
            var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
            while (++i < m) {
                bin = bins[i] = [];
                bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
                bin.y = 0;
            }
            if (m > 0) {
                i = -1;
                while (++i < n) {
                    x = values[i];
                    if (x >= range[0] && x <= range[1]) {
                        bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
                        bin.y += k;
                        bin.push(data[i]);
                    }
                }
            }
            return bins;
        }
        histogram.value = function(x) {
            if (!arguments.length) return valuer;
            valuer = x;
            return histogram;
        };
        histogram.range = function(x) {
            if (!arguments.length) return ranger;
            ranger = d3_functor(x);
            return histogram;
        };
        histogram.bins = function(x) {
            if (!arguments.length) return binner;
            binner = typeof x === "number" ? function(range) {
                return d3_layout_histogramBinFixed(range, x);
            } : d3_functor(x);
            return histogram;
        };
        histogram.frequency = function(x) {
            if (!arguments.length) return frequency;
            frequency = !!x;
            return histogram;
        };
        return histogram;
    };
    function d3_layout_histogramBinSturges(range, values) {
        return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
    }
    function d3_layout_histogramBinFixed(range, n) {
        var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
        while (++x <= n) f[x] = m * x + b;
        return f;
    }
    function d3_layout_histogramRange(values) {
        return [ d3.min(values), d3.max(values) ];
    }
    d3.layout.pack = function() {
        var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ], radius;
        function pack(d, i) {
            var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size[0], h = size[1], r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
                return radius;
            };
            root.x = root.y = 0;
            d3_layout_hierarchyVisitAfter(root, function(d) {
                d.r = +r(d.value);
            });
            d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
            if (padding) {
                var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
                d3_layout_hierarchyVisitAfter(root, function(d) {
                    d.r += dr;
                });
                d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
                d3_layout_hierarchyVisitAfter(root, function(d) {
                    d.r -= dr;
                });
            }
            d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
            return nodes;
        }
        pack.size = function(_) {
            if (!arguments.length) return size;
            size = _;
            return pack;
        };
        pack.radius = function(_) {
            if (!arguments.length) return radius;
            radius = _ == null || typeof _ === "function" ? _ : +_;
            return pack;
        };
        pack.padding = function(_) {
            if (!arguments.length) return padding;
            padding = +_;
            return pack;
        };
        return d3_layout_hierarchyRebind(pack, hierarchy);
    };
    function d3_layout_packSort(a, b) {
        return a.value - b.value;
    }
    function d3_layout_packInsert(a, b) {
        var c = a._pack_next;
        a._pack_next = b;
        b._pack_prev = a;
        b._pack_next = c;
        c._pack_prev = b;
    }
    function d3_layout_packSplice(a, b) {
        a._pack_next = b;
        b._pack_prev = a;
    }
    function d3_layout_packIntersects(a, b) {
        var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
        return .999 * dr * dr > dx * dx + dy * dy;
    }
    function d3_layout_packSiblings(node) {
        if (!(nodes = node.children) || !(n = nodes.length)) return;
        var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
        function bound(node) {
            xMin = Math.min(node.x - node.r, xMin);
            xMax = Math.max(node.x + node.r, xMax);
            yMin = Math.min(node.y - node.r, yMin);
            yMax = Math.max(node.y + node.r, yMax);
        }
        nodes.forEach(d3_layout_packLink);
        a = nodes[0];
        a.x = -a.r;
        a.y = 0;
        bound(a);
        if (n > 1) {
            b = nodes[1];
            b.x = b.r;
            b.y = 0;
            bound(b);
            if (n > 2) {
                c = nodes[2];
                d3_layout_packPlace(a, b, c);
                bound(c);
                d3_layout_packInsert(a, c);
                a._pack_prev = c;
                d3_layout_packInsert(c, b);
                b = a._pack_next;
                for (i = 3; i < n; i++) {
                    d3_layout_packPlace(a, b, c = nodes[i]);
                    var isect = 0, s1 = 1, s2 = 1;
                    for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
                        if (d3_layout_packIntersects(j, c)) {
                            isect = 1;
                            break;
                        }
                    }
                    if (isect == 1) {
                        for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
                            if (d3_layout_packIntersects(k, c)) {
                                break;
                            }
                        }
                    }
                    if (isect) {
                        if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
                        i--;
                    } else {
                        d3_layout_packInsert(a, c);
                        b = c;
                        bound(c);
                    }
                }
            }
        }
        var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
        for (i = 0; i < n; i++) {
            c = nodes[i];
            c.x -= cx;
            c.y -= cy;
            cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
        }
        node.r = cr;
        nodes.forEach(d3_layout_packUnlink);
    }
    function d3_layout_packLink(node) {
        node._pack_next = node._pack_prev = node;
    }
    function d3_layout_packUnlink(node) {
        delete node._pack_next;
        delete node._pack_prev;
    }
    function d3_layout_packTransform(node, x, y, k) {
        var children = node.children;
        node.x = x += k * node.x;
        node.y = y += k * node.y;
        node.r *= k;
        if (children) {
            var i = -1, n = children.length;
            while (++i < n) d3_layout_packTransform(children[i], x, y, k);
        }
    }
    function d3_layout_packPlace(a, b, c) {
        var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
        if (db && (dx || dy)) {
            var da = b.r + c.r, dc = dx * dx + dy * dy;
            da *= da;
            db *= db;
            var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
            c.x = a.x + x * dx + y * dy;
            c.y = a.y + x * dy - y * dx;
        } else {
            c.x = a.x + db;
            c.y = a.y;
        }
    }
    d3.layout.tree = function() {
        var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = null;
        function tree(d, i) {
            var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);
            d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
            d3_layout_hierarchyVisitBefore(root1, secondWalk);
            if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode); else {
                var left = root0, right = root0, bottom = root0;
                d3_layout_hierarchyVisitBefore(root0, function(node) {
                    if (node.x < left.x) left = node;
                    if (node.x > right.x) right = node;
                    if (node.depth > bottom.depth) bottom = node;
                });
                var tx = separation(left, right) / 2 - left.x, kx = size[0] / (right.x + separation(right, left) / 2 + tx), ky = size[1] / (bottom.depth || 1);
                d3_layout_hierarchyVisitBefore(root0, function(node) {
                    node.x = (node.x + tx) * kx;
                    node.y = node.depth * ky;
                });
            }
            return nodes;
        }
        function wrapTree(root0) {
            var root1 = {
                A: null,
                children: [ root0 ]
            }, queue = [ root1 ], node1;
            while ((node1 = queue.pop()) != null) {
                for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {
                    queue.push((children[i] = child = {
                        _: children[i],
                        parent: node1,
                        children: (child = children[i].children) && child.slice() || [],
                        A: null,
                        a: null,
                        z: 0,
                        m: 0,
                        c: 0,
                        s: 0,
                        t: null,
                        i: i
                    }).a = child);
                }
            }
            return root1.children[0];
        }
        function firstWalk(v) {
            var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
            if (children.length) {
                d3_layout_treeShift(v);
                var midpoint = (children[0].z + children[children.length - 1].z) / 2;
                if (w) {
                    v.z = w.z + separation(v._, w._);
                    v.m = v.z - midpoint;
                } else {
                    v.z = midpoint;
                }
            } else if (w) {
                v.z = w.z + separation(v._, w._);
            }
            v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
        }
        function secondWalk(v) {
            v._.x = v.z + v.parent.m;
            v.m += v.parent.m;
        }
        function apportion(v, w, ancestor) {
            if (w) {
                var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
                while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
                    vom = d3_layout_treeLeft(vom);
                    vop = d3_layout_treeRight(vop);
                    vop.a = v;
                    shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
                    if (shift > 0) {
                        d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
                        sip += shift;
                        sop += shift;
                    }
                    sim += vim.m;
                    sip += vip.m;
                    som += vom.m;
                    sop += vop.m;
                }
                if (vim && !d3_layout_treeRight(vop)) {
                    vop.t = vim;
                    vop.m += sim - sop;
                }
                if (vip && !d3_layout_treeLeft(vom)) {
                    vom.t = vip;
                    vom.m += sip - som;
                    ancestor = v;
                }
            }
            return ancestor;
        }
        function sizeNode(node) {
            node.x *= size[0];
            node.y = node.depth * size[1];
        }
        tree.separation = function(x) {
            if (!arguments.length) return separation;
            separation = x;
            return tree;
        };
        tree.size = function(x) {
            if (!arguments.length) return nodeSize ? null : size;
            nodeSize = (size = x) == null ? sizeNode : null;
            return tree;
        };
        tree.nodeSize = function(x) {
            if (!arguments.length) return nodeSize ? size : null;
            nodeSize = (size = x) == null ? null : sizeNode;
            return tree;
        };
        return d3_layout_hierarchyRebind(tree, hierarchy);
    };
    function d3_layout_treeSeparation(a, b) {
        return a.parent == b.parent ? 1 : 2;
    }
    function d3_layout_treeLeft(v) {
        var children = v.children;
        return children.length ? children[0] : v.t;
    }
    function d3_layout_treeRight(v) {
        var children = v.children, n;
        return (n = children.length) ? children[n - 1] : v.t;
    }
    function d3_layout_treeMove(wm, wp, shift) {
        var change = shift / (wp.i - wm.i);
        wp.c -= change;
        wp.s += shift;
        wm.c += change;
        wp.z += shift;
        wp.m += shift;
    }
    function d3_layout_treeShift(v) {
        var shift = 0, change = 0, children = v.children, i = children.length, w;
        while (--i >= 0) {
            w = children[i];
            w.z += shift;
            w.m += shift;
            shift += w.s + (change += w.c);
        }
    }
    function d3_layout_treeAncestor(vim, v, ancestor) {
        return vim.a.parent === v.parent ? vim.a : ancestor;
    }
    d3.layout.cluster = function() {
        var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = false;
        function cluster(d, i) {
            var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
            d3_layout_hierarchyVisitAfter(root, function(node) {
                var children = node.children;
                if (children && children.length) {
                    node.x = d3_layout_clusterX(children);
                    node.y = d3_layout_clusterY(children);
                } else {
                    node.x = previousNode ? x += separation(node, previousNode) : 0;
                    node.y = 0;
                    previousNode = node;
                }
            });
            var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
            d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
                node.x = (node.x - root.x) * size[0];
                node.y = (root.y - node.y) * size[1];
            } : function(node) {
                node.x = (node.x - x0) / (x1 - x0) * size[0];
                node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
            });
            return nodes;
        }
        cluster.separation = function(x) {
            if (!arguments.length) return separation;
            separation = x;
            return cluster;
        };
        cluster.size = function(x) {
            if (!arguments.length) return nodeSize ? null : size;
            nodeSize = (size = x) == null;
            return cluster;
        };
        cluster.nodeSize = function(x) {
            if (!arguments.length) return nodeSize ? size : null;
            nodeSize = (size = x) != null;
            return cluster;
        };
        return d3_layout_hierarchyRebind(cluster, hierarchy);
    };
    function d3_layout_clusterY(children) {
        return 1 + d3.max(children, function(child) {
            return child.y;
        });
    }
    function d3_layout_clusterX(children) {
        return children.reduce(function(x, child) {
            return x + child.x;
        }, 0) / children.length;
    }
    function d3_layout_clusterLeft(node) {
        var children = node.children;
        return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
    }
    function d3_layout_clusterRight(node) {
        var children = node.children, n;
        return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
    }
    d3.layout.treemap = function() {
        var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
        function scale(children, k) {
            var i = -1, n = children.length, child, area;
            while (++i < n) {
                area = (child = children[i]).value * (k < 0 ? 0 : k);
                child.area = isNaN(area) || area <= 0 ? 0 : area;
            }
        }
        function squarify(node) {
            var children = node.children;
            if (children && children.length) {
                var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
                scale(remaining, rect.dx * rect.dy / node.value);
                row.area = 0;
                while ((n = remaining.length) > 0) {
                    row.push(child = remaining[n - 1]);
                    row.area += child.area;
                    if (mode !== "squarify" || (score = worst(row, u)) <= best) {
                        remaining.pop();
                        best = score;
                    } else {
                        row.area -= row.pop().area;
                        position(row, u, rect, false);
                        u = Math.min(rect.dx, rect.dy);
                        row.length = row.area = 0;
                        best = Infinity;
                    }
                }
                if (row.length) {
                    position(row, u, rect, true);
                    row.length = row.area = 0;
                }
                children.forEach(squarify);
            }
        }
        function stickify(node) {
            var children = node.children;
            if (children && children.length) {
                var rect = pad(node), remaining = children.slice(), child, row = [];
                scale(remaining, rect.dx * rect.dy / node.value);
                row.area = 0;
                while (child = remaining.pop()) {
                    row.push(child);
                    row.area += child.area;
                    if (child.z != null) {
                        position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
                        row.length = row.area = 0;
                    }
                }
                children.forEach(stickify);
            }
        }
        function worst(row, u) {
            var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
            while (++i < n) {
                if (!(r = row[i].area)) continue;
                if (r < rmin) rmin = r;
                if (r > rmax) rmax = r;
            }
            s *= s;
            u *= u;
            return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
        }
        function position(row, u, rect, flush) {
            var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
            if (u == rect.dx) {
                if (flush || v > rect.dy) v = rect.dy;
                while (++i < n) {
                    o = row[i];
                    o.x = x;
                    o.y = y;
                    o.dy = v;
                    x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
                }
                o.z = true;
                o.dx += rect.x + rect.dx - x;
                rect.y += v;
                rect.dy -= v;
            } else {
                if (flush || v > rect.dx) v = rect.dx;
                while (++i < n) {
                    o = row[i];
                    o.x = x;
                    o.y = y;
                    o.dx = v;
                    y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
                }
                o.z = false;
                o.dy += rect.y + rect.dy - y;
                rect.x += v;
                rect.dx -= v;
            }
        }
        function treemap(d) {
            var nodes = stickies || hierarchy(d), root = nodes[0];
            root.x = 0;
            root.y = 0;
            root.dx = size[0];
            root.dy = size[1];
            if (stickies) hierarchy.revalue(root);
            scale([ root ], root.dx * root.dy / root.value);
            (stickies ? stickify : squarify)(root);
            if (sticky) stickies = nodes;
            return nodes;
        }
        treemap.size = function(x) {
            if (!arguments.length) return size;
            size = x;
            return treemap;
        };
        treemap.padding = function(x) {
            if (!arguments.length) return padding;
            function padFunction(node) {
                var p = x.call(treemap, node, node.depth);
                return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
            }
            function padConstant(node) {
                return d3_layout_treemapPad(node, x);
            }
            var type;
            pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], 
            padConstant) : padConstant;
            return treemap;
        };
        treemap.round = function(x) {
            if (!arguments.length) return round != Number;
            round = x ? Math.round : Number;
            return treemap;
        };
        treemap.sticky = function(x) {
            if (!arguments.length) return sticky;
            sticky = x;
            stickies = null;
            return treemap;
        };
        treemap.ratio = function(x) {
            if (!arguments.length) return ratio;
            ratio = x;
            return treemap;
        };
        treemap.mode = function(x) {
            if (!arguments.length) return mode;
            mode = x + "";
            return treemap;
        };
        return d3_layout_hierarchyRebind(treemap, hierarchy);
    };
    function d3_layout_treemapPadNull(node) {
        return {
            x: node.x,
            y: node.y,
            dx: node.dx,
            dy: node.dy
        };
    }
    function d3_layout_treemapPad(node, padding) {
        var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
        if (dx < 0) {
            x += dx / 2;
            dx = 0;
        }
        if (dy < 0) {
            y += dy / 2;
            dy = 0;
        }
        return {
            x: x,
            y: y,
            dx: dx,
            dy: dy
        };
    }
    d3.random = {
        normal: function(µ, σ) {
            var n = arguments.length;
            if (n < 2) σ = 1;
            if (n < 1) µ = 0;
            return function() {
                var x, y, r;
                do {
                    x = Math.random() * 2 - 1;
                    y = Math.random() * 2 - 1;
                    r = x * x + y * y;
                } while (!r || r > 1);
                return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
            };
        },
        logNormal: function() {
            var random = d3.random.normal.apply(d3, arguments);
            return function() {
                return Math.exp(random());
            };
        },
        bates: function(m) {
            var random = d3.random.irwinHall(m);
            return function() {
                return random() / m;
            };
        },
        irwinHall: function(m) {
            return function() {
                for (var s = 0, j = 0; j < m; j++) s += Math.random();
                return s;
            };
        }
    };
    d3.scale = {};
    function d3_scaleExtent(domain) {
        var start = domain[0], stop = domain[domain.length - 1];
        return start < stop ? [ start, stop ] : [ stop, start ];
    }
    function d3_scaleRange(scale) {
        return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
    }
    function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
        var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
        return function(x) {
            return i(u(x));
        };
    }
    function d3_scale_nice(domain, nice) {
        var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
        if (x1 < x0) {
            dx = i0, i0 = i1, i1 = dx;
            dx = x0, x0 = x1, x1 = dx;
        }
        domain[i0] = nice.floor(x0);
        domain[i1] = nice.ceil(x1);
        return domain;
    }
    function d3_scale_niceStep(step) {
        return step ? {
            floor: function(x) {
                return Math.floor(x / step) * step;
            },
            ceil: function(x) {
                return Math.ceil(x / step) * step;
            }
        } : d3_scale_niceIdentity;
    }
    var d3_scale_niceIdentity = {
        floor: d3_identity,
        ceil: d3_identity
    };
    function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
        var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
        if (domain[k] < domain[0]) {
            domain = domain.slice().reverse();
            range = range.slice().reverse();
        }
        while (++j <= k) {
            u.push(uninterpolate(domain[j - 1], domain[j]));
            i.push(interpolate(range[j - 1], range[j]));
        }
        return function(x) {
            var j = d3.bisect(domain, x, 1, k) - 1;
            return i[j](u[j](x));
        };
    }
    d3.scale.linear = function() {
        return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3_interpolate, false);
    };
    function d3_scale_linear(domain, range, interpolate, clamp) {
        var output, input;
        function rescale() {
            var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
            output = linear(domain, range, uninterpolate, interpolate);
            input = linear(range, domain, uninterpolate, d3_interpolate);
            return scale;
        }
        function scale(x) {
            return output(x);
        }
        scale.invert = function(y) {
            return input(y);
        };
        scale.domain = function(x) {
            if (!arguments.length) return domain;
            domain = x.map(Number);
            return rescale();
        };
        scale.range = function(x) {
            if (!arguments.length) return range;
            range = x;
            return rescale();
        };
        scale.rangeRound = function(x) {
            return scale.range(x).interpolate(d3_interpolateRound);
        };
        scale.clamp = function(x) {
            if (!arguments.length) return clamp;
            clamp = x;
            return rescale();
        };
        scale.interpolate = function(x) {
            if (!arguments.length) return interpolate;
            interpolate = x;
            return rescale();
        };
        scale.ticks = function(m) {
            return d3_scale_linearTicks(domain, m);
        };
        scale.tickFormat = function(m, format) {
            return d3_scale_linearTickFormat(domain, m, format);
        };
        scale.nice = function(m) {
            d3_scale_linearNice(domain, m);
            return rescale();
        };
        scale.copy = function() {
            return d3_scale_linear(domain, range, interpolate, clamp);
        };
        return rescale();
    }
    function d3_scale_linearRebind(scale, linear) {
        return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
    }
    function d3_scale_linearNice(domain, m) {
        return d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
    }
    function d3_scale_linearTickRange(domain, m) {
        if (m == null) m = 10;
        var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
        if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
        extent[0] = Math.ceil(extent[0] / step) * step;
        extent[1] = Math.floor(extent[1] / step) * step + step * .5;
        extent[2] = step;
        return extent;
    }
    function d3_scale_linearTicks(domain, m) {
        return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
    }
    function d3_scale_linearTickFormat(domain, m, format) {
        var range = d3_scale_linearTickRange(domain, m);
        if (format) {
            var match = d3_format_re.exec(format);
            match.shift();
            if (match[8] === "s") {
                var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
                if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
                match[8] = "f";
                format = d3.format(match.join(""));
                return function(d) {
                    return format(prefix.scale(d)) + prefix.symbol;
                };
            }
            if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
            format = match.join("");
        } else {
            format = ",." + d3_scale_linearPrecision(range[2]) + "f";
        }
        return d3.format(format);
    }
    var d3_scale_linearFormatSignificant = {
        s: 1,
        g: 1,
        p: 1,
        r: 1,
        e: 1
    };
    function d3_scale_linearPrecision(value) {
        return -Math.floor(Math.log(value) / Math.LN10 + .01);
    }
    function d3_scale_linearFormatPrecision(type, range) {
        var p = d3_scale_linearPrecision(range[2]);
        return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
    }
    d3.scale.log = function() {
        return d3_scale_log(d3.scale.linear().domain([ 0, 1 ]), 10, true, [ 1, 10 ]);
    };
    function d3_scale_log(linear, base, positive, domain) {
        function log(x) {
            return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
        }
        function pow(x) {
            return positive ? Math.pow(base, x) : -Math.pow(base, -x);
        }
        function scale(x) {
            return linear(log(x));
        }
        scale.invert = function(x) {
            return pow(linear.invert(x));
        };
        scale.domain = function(x) {
            if (!arguments.length) return domain;
            positive = x[0] >= 0;
            linear.domain((domain = x.map(Number)).map(log));
            return scale;
        };
        scale.base = function(_) {
            if (!arguments.length) return base;
            base = +_;
            linear.domain(domain.map(log));
            return scale;
        };
        scale.nice = function() {
            var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
            linear.domain(niced);
            domain = niced.map(pow);
            return scale;
        };
        scale.ticks = function() {
            var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log(u)), j = Math.ceil(log(v)), n = base % 1 ? 2 : base;
            if (isFinite(j - i)) {
                if (positive) {
                    for (;i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow(i) * k);
                    ticks.push(pow(i));
                } else {
                    ticks.push(pow(i));
                    for (;i++ < j; ) for (var k = n - 1; k > 0; k--) ticks.push(pow(i) * k);
                }
                for (i = 0; ticks[i] < u; i++) {}
                for (j = ticks.length; ticks[j - 1] > v; j--) {}
                ticks = ticks.slice(i, j);
            }
            return ticks;
        };
        scale.tickFormat = function(n, format) {
            if (!arguments.length) return d3_scale_logFormat;
            if (arguments.length < 2) format = d3_scale_logFormat; else if (typeof format !== "function") format = d3.format(format);
            var k = Math.max(.1, n / scale.ticks().length), f = positive ? (e = 1e-12, Math.ceil) : (e = -1e-12, 
            Math.floor), e;
            return function(d) {
                return d / pow(f(log(d) + e)) <= k ? format(d) : "";
            };
        };
        scale.copy = function() {
            return d3_scale_log(linear.copy(), base, positive, domain);
        };
        return d3_scale_linearRebind(scale, linear);
    }
    var d3_scale_logFormat = d3.format(".0e"), d3_scale_logNiceNegative = {
        floor: function(x) {
            return -Math.ceil(-x);
        },
        ceil: function(x) {
            return -Math.floor(-x);
        }
    };
    d3.scale.pow = function() {
        return d3_scale_pow(d3.scale.linear(), 1, [ 0, 1 ]);
    };
    function d3_scale_pow(linear, exponent, domain) {
        var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
        function scale(x) {
            return linear(powp(x));
        }
        scale.invert = function(x) {
            return powb(linear.invert(x));
        };
        scale.domain = function(x) {
            if (!arguments.length) return domain;
            linear.domain((domain = x.map(Number)).map(powp));
            return scale;
        };
        scale.ticks = function(m) {
            return d3_scale_linearTicks(domain, m);
        };
        scale.tickFormat = function(m, format) {
            return d3_scale_linearTickFormat(domain, m, format);
        };
        scale.nice = function(m) {
            return scale.domain(d3_scale_linearNice(domain, m));
        };
        scale.exponent = function(x) {
            if (!arguments.length) return exponent;
            powp = d3_scale_powPow(exponent = x);
            powb = d3_scale_powPow(1 / exponent);
            linear.domain(domain.map(powp));
            return scale;
        };
        scale.copy = function() {
            return d3_scale_pow(linear.copy(), exponent, domain);
        };
        return d3_scale_linearRebind(scale, linear);
    }
    function d3_scale_powPow(e) {
        return function(x) {
            return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
        };
    }
    d3.scale.sqrt = function() {
        return d3.scale.pow().exponent(.5);
    };
    d3.scale.ordinal = function() {
        return d3_scale_ordinal([], {
            t: "range",
            a: [ [] ]
        });
    };
    function d3_scale_ordinal(domain, ranger) {
        var index, range, rangeBand;
        function scale(x) {
            return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
        }
        function steps(start, step) {
            return d3.range(domain.length).map(function(i) {
                return start + step * i;
            });
        }
        scale.domain = function(x) {
            if (!arguments.length) return domain;
            domain = [];
            index = new d3_Map();
            var i = -1, n = x.length, xi;
            while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
            return scale[ranger.t].apply(scale, ranger.a);
        };
        scale.range = function(x) {
            if (!arguments.length) return range;
            range = x;
            rangeBand = 0;
            ranger = {
                t: "range",
                a: arguments
            };
            return scale;
        };
        scale.rangePoints = function(x, padding) {
            if (arguments.length < 2) padding = 0;
            var start = x[0], stop = x[1], step = (stop - start) / (Math.max(1, domain.length - 1) + padding);
            range = steps(domain.length < 2 ? (start + stop) / 2 : start + step * padding / 2, step);
            rangeBand = 0;
            ranger = {
                t: "rangePoints",
                a: arguments
            };
            return scale;
        };
        scale.rangeBands = function(x, padding, outerPadding) {
            if (arguments.length < 2) padding = 0;
            if (arguments.length < 3) outerPadding = padding;
            var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
            range = steps(start + step * outerPadding, step);
            if (reverse) range.reverse();
            rangeBand = step * (1 - padding);
            ranger = {
                t: "rangeBands",
                a: arguments
            };
            return scale;
        };
        scale.rangeRoundBands = function(x, padding, outerPadding) {
            if (arguments.length < 2) padding = 0;
            if (arguments.length < 3) outerPadding = padding;
            var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding)), error = stop - start - (domain.length - padding) * step;
            range = steps(start + Math.round(error / 2), step);
            if (reverse) range.reverse();
            rangeBand = Math.round(step * (1 - padding));
            ranger = {
                t: "rangeRoundBands",
                a: arguments
            };
            return scale;
        };
        scale.rangeBand = function() {
            return rangeBand;
        };
        scale.rangeExtent = function() {
            return d3_scaleExtent(ranger.a[0]);
        };
        scale.copy = function() {
            return d3_scale_ordinal(domain, ranger);
        };
        return scale.domain(domain);
    }
    d3.scale.category10 = function() {
        return d3.scale.ordinal().range(d3_category10);
    };
    d3.scale.category20 = function() {
        return d3.scale.ordinal().range(d3_category20);
    };
    d3.scale.category20b = function() {
        return d3.scale.ordinal().range(d3_category20b);
    };
    d3.scale.category20c = function() {
        return d3.scale.ordinal().range(d3_category20c);
    };
    var d3_category10 = [ 2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175 ].map(d3_rgbString);
    var d3_category20 = [ 2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725 ].map(d3_rgbString);
    var d3_category20b = [ 3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654 ].map(d3_rgbString);
    var d3_category20c = [ 3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081 ].map(d3_rgbString);
    d3.scale.quantile = function() {
        return d3_scale_quantile([], []);
    };
    function d3_scale_quantile(domain, range) {
        var thresholds;
        function rescale() {
            var k = 0, q = range.length;
            thresholds = [];
            while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
            return scale;
        }
        function scale(x) {
            if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)];
        }
        scale.domain = function(x) {
            if (!arguments.length) return domain;
            domain = x.filter(d3_number).sort(d3_ascending);
            return rescale();
        };
        scale.range = function(x) {
            if (!arguments.length) return range;
            range = x;
            return rescale();
        };
        scale.quantiles = function() {
            return thresholds;
        };
        scale.invertExtent = function(y) {
            y = range.indexOf(y);
            return y < 0 ? [ NaN, NaN ] : [ y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1] ];
        };
        scale.copy = function() {
            return d3_scale_quantile(domain, range);
        };
        return rescale();
    }
    d3.scale.quantize = function() {
        return d3_scale_quantize(0, 1, [ 0, 1 ]);
    };
    function d3_scale_quantize(x0, x1, range) {
        var kx, i;
        function scale(x) {
            return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
        }
        function rescale() {
            kx = range.length / (x1 - x0);
            i = range.length - 1;
            return scale;
        }
        scale.domain = function(x) {
            if (!arguments.length) return [ x0, x1 ];
            x0 = +x[0];
            x1 = +x[x.length - 1];
            return rescale();
        };
        scale.range = function(x) {
            if (!arguments.length) return range;
            range = x;
            return rescale();
        };
        scale.invertExtent = function(y) {
            y = range.indexOf(y);
            y = y < 0 ? NaN : y / kx + x0;
            return [ y, y + 1 / kx ];
        };
        scale.copy = function() {
            return d3_scale_quantize(x0, x1, range);
        };
        return rescale();
    }
    d3.scale.threshold = function() {
        return d3_scale_threshold([ .5 ], [ 0, 1 ]);
    };
    function d3_scale_threshold(domain, range) {
        function scale(x) {
            if (x <= x) return range[d3.bisect(domain, x)];
        }
        scale.domain = function(_) {
            if (!arguments.length) return domain;
            domain = _;
            return scale;
        };
        scale.range = function(_) {
            if (!arguments.length) return range;
            range = _;
            return scale;
        };
        scale.invertExtent = function(y) {
            y = range.indexOf(y);
            return [ domain[y - 1], domain[y] ];
        };
        scale.copy = function() {
            return d3_scale_threshold(domain, range);
        };
        return scale;
    }
    d3.scale.identity = function() {
        return d3_scale_identity([ 0, 1 ]);
    };
    function d3_scale_identity(domain) {
        function identity(x) {
            return +x;
        }
        identity.invert = identity;
        identity.domain = identity.range = function(x) {
            if (!arguments.length) return domain;
            domain = x.map(identity);
            return identity;
        };
        identity.ticks = function(m) {
            return d3_scale_linearTicks(domain, m);
        };
        identity.tickFormat = function(m, format) {
            return d3_scale_linearTickFormat(domain, m, format);
        };
        identity.copy = function() {
            return d3_scale_identity(domain);
        };
        return identity;
    }
    d3.svg = {};
    d3.svg.arc = function() {
        var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
        function arc() {
            var r0 = innerRadius.apply(this, arguments), r1 = outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) + d3_svg_arcOffset, a1 = endAngle.apply(this, arguments) + d3_svg_arcOffset, da = (a1 < a0 && (da = a0, 
            a0 = a1, a1 = da), a1 - a0), df = da < π ? "0" : "1", c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1);
            return da >= d3_svg_arcMax ? r0 ? "M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "M0," + r0 + "A" + r0 + "," + r0 + " 0 1,0 0," + -r0 + "A" + r0 + "," + r0 + " 0 1,0 0," + r0 + "Z" : "M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "Z" : r0 ? "M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L" + r0 * c1 + "," + r0 * s1 + "A" + r0 + "," + r0 + " 0 " + df + ",0 " + r0 * c0 + "," + r0 * s0 + "Z" : "M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L0,0" + "Z";
        }
        arc.innerRadius = function(v) {
            if (!arguments.length) return innerRadius;
            innerRadius = d3_functor(v);
            return arc;
        };
        arc.outerRadius = function(v) {
            if (!arguments.length) return outerRadius;
            outerRadius = d3_functor(v);
            return arc;
        };
        arc.startAngle = function(v) {
            if (!arguments.length) return startAngle;
            startAngle = d3_functor(v);
            return arc;
        };
        arc.endAngle = function(v) {
            if (!arguments.length) return endAngle;
            endAngle = d3_functor(v);
            return arc;
        };
        arc.centroid = function() {
            var r = (innerRadius.apply(this, arguments) + outerRadius.apply(this, arguments)) / 2, a = (startAngle.apply(this, arguments) + endAngle.apply(this, arguments)) / 2 + d3_svg_arcOffset;
            return [ Math.cos(a) * r, Math.sin(a) * r ];
        };
        return arc;
    };
    var d3_svg_arcOffset = -halfπ, d3_svg_arcMax = τ - ε;
    function d3_svg_arcInnerRadius(d) {
        return d.innerRadius;
    }
    function d3_svg_arcOuterRadius(d) {
        return d.outerRadius;
    }
    function d3_svg_arcStartAngle(d) {
        return d.startAngle;
    }
    function d3_svg_arcEndAngle(d) {
        return d.endAngle;
    }
    function d3_svg_line(projection) {
        var x = d3_geom_pointX, y = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
        function line(data) {
            var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
            function segment() {
                segments.push("M", interpolate(projection(points), tension));
            }
            while (++i < n) {
                if (defined.call(this, d = data[i], i)) {
                    points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
                } else if (points.length) {
                    segment();
                    points = [];
                }
            }
            if (points.length) segment();
            return segments.length ? segments.join("") : null;
        }
        line.x = function(_) {
            if (!arguments.length) return x;
            x = _;
            return line;
        };
        line.y = function(_) {
            if (!arguments.length) return y;
            y = _;
            return line;
        };
        line.defined = function(_) {
            if (!arguments.length) return defined;
            defined = _;
            return line;
        };
        line.interpolate = function(_) {
            if (!arguments.length) return interpolateKey;
            if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
            return line;
        };
        line.tension = function(_) {
            if (!arguments.length) return tension;
            tension = _;
            return line;
        };
        return line;
    }
    d3.svg.line = function() {
        return d3_svg_line(d3_identity);
    };
    var d3_svg_lineInterpolators = d3.map({
        linear: d3_svg_lineLinear,
        "linear-closed": d3_svg_lineLinearClosed,
        step: d3_svg_lineStep,
        "step-before": d3_svg_lineStepBefore,
        "step-after": d3_svg_lineStepAfter,
        basis: d3_svg_lineBasis,
        "basis-open": d3_svg_lineBasisOpen,
        "basis-closed": d3_svg_lineBasisClosed,
        bundle: d3_svg_lineBundle,
        cardinal: d3_svg_lineCardinal,
        "cardinal-open": d3_svg_lineCardinalOpen,
        "cardinal-closed": d3_svg_lineCardinalClosed,
        monotone: d3_svg_lineMonotone
    });
    d3_svg_lineInterpolators.forEach(function(key, value) {
        value.key = key;
        value.closed = /-closed$/.test(key);
    });
    function d3_svg_lineLinear(points) {
        return points.join("L");
    }
    function d3_svg_lineLinearClosed(points) {
        return d3_svg_lineLinear(points) + "Z";
    }
    function d3_svg_lineStep(points) {
        var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
        while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
        if (n > 1) path.push("H", p[0]);
        return path.join("");
    }
    function d3_svg_lineStepBefore(points) {
        var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
        while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
        return path.join("");
    }
    function d3_svg_lineStepAfter(points) {
        var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
        while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
        return path.join("");
    }
    function d3_svg_lineCardinalOpen(points, tension) {
        return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, points.length - 1), d3_svg_lineCardinalTangents(points, tension));
    }
    function d3_svg_lineCardinalClosed(points, tension) {
        return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), 
        points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
    }
    function d3_svg_lineCardinal(points, tension) {
        return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
    }
    function d3_svg_lineHermite(points, tangents) {
        if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
            return d3_svg_lineLinear(points);
        }
        var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
        if (quad) {
            path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
            p0 = points[1];
            pi = 2;
        }
        if (tangents.length > 1) {
            t = tangents[1];
            p = points[pi];
            pi++;
            path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
            for (var i = 2; i < tangents.length; i++, pi++) {
                p = points[pi];
                t = tangents[i];
                path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
            }
        }
        if (quad) {
            var lp = points[pi];
            path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
        }
        return path;
    }
    function d3_svg_lineCardinalTangents(points, tension) {
        var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
        while (++i < n) {
            p0 = p1;
            p1 = p2;
            p2 = points[i];
            tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
        }
        return tangents;
    }
    function d3_svg_lineBasis(points) {
        if (points.length < 3) return d3_svg_lineLinear(points);
        var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
        points.push(points[n - 1]);
        while (++i <= n) {
            pi = points[i];
            px.shift();
            px.push(pi[0]);
            py.shift();
            py.push(pi[1]);
            d3_svg_lineBasisBezier(path, px, py);
        }
        points.pop();
        path.push("L", pi);
        return path.join("");
    }
    function d3_svg_lineBasisOpen(points) {
        if (points.length < 4) return d3_svg_lineLinear(points);
        var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
        while (++i < 3) {
            pi = points[i];
            px.push(pi[0]);
            py.push(pi[1]);
        }
        path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
        --i;
        while (++i < n) {
            pi = points[i];
            px.shift();
            px.push(pi[0]);
            py.shift();
            py.push(pi[1]);
            d3_svg_lineBasisBezier(path, px, py);
        }
        return path.join("");
    }
    function d3_svg_lineBasisClosed(points) {
        var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
        while (++i < 4) {
            pi = points[i % n];
            px.push(pi[0]);
            py.push(pi[1]);
        }
        path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
        --i;
        while (++i < m) {
            pi = points[i % n];
            px.shift();
            px.push(pi[0]);
            py.shift();
            py.push(pi[1]);
            d3_svg_lineBasisBezier(path, px, py);
        }
        return path.join("");
    }
    function d3_svg_lineBundle(points, tension) {
        var n = points.length - 1;
        if (n) {
            var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
            while (++i <= n) {
                p = points[i];
                t = i / n;
                p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
                p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
            }
        }
        return d3_svg_lineBasis(points);
    }
    function d3_svg_lineDot4(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    }
    var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
    function d3_svg_lineBasisBezier(path, x, y) {
        path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
    }
    function d3_svg_lineSlope(p0, p1) {
        return (p1[1] - p0[1]) / (p1[0] - p0[0]);
    }
    function d3_svg_lineFiniteDifferences(points) {
        var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
        while (++i < j) {
            m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
        }
        m[i] = d;
        return m;
    }
    function d3_svg_lineMonotoneTangents(points) {
        var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
        while (++i < j) {
            d = d3_svg_lineSlope(points[i], points[i + 1]);
            if (abs(d) < ε) {
                m[i] = m[i + 1] = 0;
            } else {
                a = m[i] / d;
                b = m[i + 1] / d;
                s = a * a + b * b;
                if (s > 9) {
                    s = d * 3 / Math.sqrt(s);
                    m[i] = s * a;
                    m[i + 1] = s * b;
                }
            }
        }
        i = -1;
        while (++i <= j) {
            s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
            tangents.push([ s || 0, m[i] * s || 0 ]);
        }
        return tangents;
    }
    function d3_svg_lineMonotone(points) {
        return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
    }
    d3.svg.line.radial = function() {
        var line = d3_svg_line(d3_svg_lineRadial);
        line.radius = line.x, delete line.x;
        line.angle = line.y, delete line.y;
        return line;
    };
    function d3_svg_lineRadial(points) {
        var point, i = -1, n = points.length, r, a;
        while (++i < n) {
            point = points[i];
            r = point[0];
            a = point[1] + d3_svg_arcOffset;
            point[0] = r * Math.cos(a);
            point[1] = r * Math.sin(a);
        }
        return points;
    }
    function d3_svg_area(projection) {
        var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
        function area(data) {
            var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
                return x;
            } : d3_functor(x1), fy1 = y0 === y1 ? function() {
                return y;
            } : d3_functor(y1), x, y;
            function segment() {
                segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
            }
            while (++i < n) {
                if (defined.call(this, d = data[i], i)) {
                    points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
                    points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
                } else if (points0.length) {
                    segment();
                    points0 = [];
                    points1 = [];
                }
            }
            if (points0.length) segment();
            return segments.length ? segments.join("") : null;
        }
        area.x = function(_) {
            if (!arguments.length) return x1;
            x0 = x1 = _;
            return area;
        };
        area.x0 = function(_) {
            if (!arguments.length) return x0;
            x0 = _;
            return area;
        };
        area.x1 = function(_) {
            if (!arguments.length) return x1;
            x1 = _;
            return area;
        };
        area.y = function(_) {
            if (!arguments.length) return y1;
            y0 = y1 = _;
            return area;
        };
        area.y0 = function(_) {
            if (!arguments.length) return y0;
            y0 = _;
            return area;
        };
        area.y1 = function(_) {
            if (!arguments.length) return y1;
            y1 = _;
            return area;
        };
        area.defined = function(_) {
            if (!arguments.length) return defined;
            defined = _;
            return area;
        };
        area.interpolate = function(_) {
            if (!arguments.length) return interpolateKey;
            if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
            interpolateReverse = interpolate.reverse || interpolate;
            L = interpolate.closed ? "M" : "L";
            return area;
        };
        area.tension = function(_) {
            if (!arguments.length) return tension;
            tension = _;
            return area;
        };
        return area;
    }
    d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
    d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
    d3.svg.area = function() {
        return d3_svg_area(d3_identity);
    };
    d3.svg.area.radial = function() {
        var area = d3_svg_area(d3_svg_lineRadial);
        area.radius = area.x, delete area.x;
        area.innerRadius = area.x0, delete area.x0;
        area.outerRadius = area.x1, delete area.x1;
        area.angle = area.y, delete area.y;
        area.startAngle = area.y0, delete area.y0;
        area.endAngle = area.y1, delete area.y1;
        return area;
    };
    d3.svg.chord = function() {
        var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
        function chord(d, i) {
            var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
            return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
        }
        function subgroup(self, f, d, i) {
            var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) + d3_svg_arcOffset, a1 = endAngle.call(self, subgroup, i) + d3_svg_arcOffset;
            return {
                r: r,
                a0: a0,
                a1: a1,
                p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
                p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
            };
        }
        function equals(a, b) {
            return a.a0 == b.a0 && a.a1 == b.a1;
        }
        function arc(r, p, a) {
            return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
        }
        function curve(r0, p0, r1, p1) {
            return "Q 0,0 " + p1;
        }
        chord.radius = function(v) {
            if (!arguments.length) return radius;
            radius = d3_functor(v);
            return chord;
        };
        chord.source = function(v) {
            if (!arguments.length) return source;
            source = d3_functor(v);
            return chord;
        };
        chord.target = function(v) {
            if (!arguments.length) return target;
            target = d3_functor(v);
            return chord;
        };
        chord.startAngle = function(v) {
            if (!arguments.length) return startAngle;
            startAngle = d3_functor(v);
            return chord;
        };
        chord.endAngle = function(v) {
            if (!arguments.length) return endAngle;
            endAngle = d3_functor(v);
            return chord;
        };
        return chord;
    };
    function d3_svg_chordRadius(d) {
        return d.radius;
    }
    d3.svg.diagonal = function() {
        var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
        function diagonal(d, i) {
            var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
                x: p0.x,
                y: m
            }, {
                x: p3.x,
                y: m
            }, p3 ];
            p = p.map(projection);
            return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
        }
        diagonal.source = function(x) {
            if (!arguments.length) return source;
            source = d3_functor(x);
            return diagonal;
        };
        diagonal.target = function(x) {
            if (!arguments.length) return target;
            target = d3_functor(x);
            return diagonal;
        };
        diagonal.projection = function(x) {
            if (!arguments.length) return projection;
            projection = x;
            return diagonal;
        };
        return diagonal;
    };
    function d3_svg_diagonalProjection(d) {
        return [ d.x, d.y ];
    }
    d3.svg.diagonal.radial = function() {
        var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
        diagonal.projection = function(x) {
            return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
        };
        return diagonal;
    };
    function d3_svg_diagonalRadialProjection(projection) {
        return function() {
            var d = projection.apply(this, arguments), r = d[0], a = d[1] + d3_svg_arcOffset;
            return [ r * Math.cos(a), r * Math.sin(a) ];
        };
    }
    d3.svg.symbol = function() {
        var type = d3_svg_symbolType, size = d3_svg_symbolSize;
        function symbol(d, i) {
            return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
        }
        symbol.type = function(x) {
            if (!arguments.length) return type;
            type = d3_functor(x);
            return symbol;
        };
        symbol.size = function(x) {
            if (!arguments.length) return size;
            size = d3_functor(x);
            return symbol;
        };
        return symbol;
    };
    function d3_svg_symbolSize() {
        return 64;
    }
    function d3_svg_symbolType() {
        return "circle";
    }
    function d3_svg_symbolCircle(size) {
        var r = Math.sqrt(size / π);
        return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
    }
    var d3_svg_symbols = d3.map({
        circle: d3_svg_symbolCircle,
        cross: function(size) {
            var r = Math.sqrt(size / 5) / 2;
            return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
        },
        diamond: function(size) {
            var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
            return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
        },
        square: function(size) {
            var r = Math.sqrt(size) / 2;
            return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
        },
        "triangle-down": function(size) {
            var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
            return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
        },
        "triangle-up": function(size) {
            var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
            return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
        }
    });
    d3.svg.symbolTypes = d3_svg_symbols.keys();
    var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
    function d3_transition(groups, id) {
        d3_subclass(groups, d3_transitionPrototype);
        groups.id = id;
        return groups;
    }
    var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
    d3_transitionPrototype.call = d3_selectionPrototype.call;
    d3_transitionPrototype.empty = d3_selectionPrototype.empty;
    d3_transitionPrototype.node = d3_selectionPrototype.node;
    d3_transitionPrototype.size = d3_selectionPrototype.size;
    d3.transition = function(selection) {
        return arguments.length ? d3_transitionInheritId ? selection.transition() : selection : d3_selectionRoot.transition();
    };
    d3.transition.prototype = d3_transitionPrototype;
    d3_transitionPrototype.select = function(selector) {
        var id = this.id, subgroups = [], subgroup, subnode, node;
        selector = d3_selection_selector(selector);
        for (var j = -1, m = this.length; ++j < m; ) {
            subgroups.push(subgroup = []);
            for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
                if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
                    if ("__data__" in node) subnode.__data__ = node.__data__;
                    d3_transitionNode(subnode, i, id, node.__transition__[id]);
                    subgroup.push(subnode);
                } else {
                    subgroup.push(null);
                }
            }
        }
        return d3_transition(subgroups, id);
    };
    d3_transitionPrototype.selectAll = function(selector) {
        var id = this.id, subgroups = [], subgroup, subnodes, node, subnode, transition;
        selector = d3_selection_selectorAll(selector);
        for (var j = -1, m = this.length; ++j < m; ) {
            for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
                if (node = group[i]) {
                    transition = node.__transition__[id];
                    subnodes = selector.call(node, node.__data__, i, j);
                    subgroups.push(subgroup = []);
                    for (var k = -1, o = subnodes.length; ++k < o; ) {
                        if (subnode = subnodes[k]) d3_transitionNode(subnode, k, id, transition);
                        subgroup.push(subnode);
                    }
                }
            }
        }
        return d3_transition(subgroups, id);
    };
    d3_transitionPrototype.filter = function(filter) {
        var subgroups = [], subgroup, group, node;
        if (typeof filter !== "function") filter = d3_selection_filter(filter);
        for (var j = 0, m = this.length; j < m; j++) {
            subgroups.push(subgroup = []);
            for (var group = this[j], i = 0, n = group.length; i < n; i++) {
                if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
                    subgroup.push(node);
                }
            }
        }
        return d3_transition(subgroups, this.id);
    };
    d3_transitionPrototype.tween = function(name, tween) {
        var id = this.id;
        if (arguments.length < 2) return this.node().__transition__[id].tween.get(name);
        return d3_selection_each(this, tween == null ? function(node) {
            node.__transition__[id].tween.remove(name);
        } : function(node) {
            node.__transition__[id].tween.set(name, tween);
        });
    };
    function d3_transition_tween(groups, name, value, tween) {
        var id = groups.id;
        return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
            node.__transition__[id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
        } : (value = tween(value), function(node) {
            node.__transition__[id].tween.set(name, value);
        }));
    }
    d3_transitionPrototype.attr = function(nameNS, value) {
        if (arguments.length < 2) {
            for (value in nameNS) this.attr(value, nameNS[value]);
            return this;
        }
        var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d3.ns.qualify(nameNS);
        function attrNull() {
            this.removeAttribute(name);
        }
        function attrNullNS() {
            this.removeAttributeNS(name.space, name.local);
        }
        function attrTween(b) {
            return b == null ? attrNull : (b += "", function() {
                var a = this.getAttribute(name), i;
                return a !== b && (i = interpolate(a, b), function(t) {
                    this.setAttribute(name, i(t));
                });
            });
        }
        function attrTweenNS(b) {
            return b == null ? attrNullNS : (b += "", function() {
                var a = this.getAttributeNS(name.space, name.local), i;
                return a !== b && (i = interpolate(a, b), function(t) {
                    this.setAttributeNS(name.space, name.local, i(t));
                });
            });
        }
        return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
    };
    d3_transitionPrototype.attrTween = function(nameNS, tween) {
        var name = d3.ns.qualify(nameNS);
        function attrTween(d, i) {
            var f = tween.call(this, d, i, this.getAttribute(name));
            return f && function(t) {
                this.setAttribute(name, f(t));
            };
        }
        function attrTweenNS(d, i) {
            var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
            return f && function(t) {
                this.setAttributeNS(name.space, name.local, f(t));
            };
        }
        return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
    };
    d3_transitionPrototype.style = function(name, value, priority) {
        var n = arguments.length;
        if (n < 3) {
            if (typeof name !== "string") {
                if (n < 2) value = "";
                for (priority in name) this.style(priority, name[priority], value);
                return this;
            }
            priority = "";
        }
        function styleNull() {
            this.style.removeProperty(name);
        }
        function styleString(b) {
            return b == null ? styleNull : (b += "", function() {
                var a = d3_window.getComputedStyle(this, null).getPropertyValue(name), i;
                return a !== b && (i = d3_interpolate(a, b), function(t) {
                    this.style.setProperty(name, i(t), priority);
                });
            });
        }
        return d3_transition_tween(this, "style." + name, value, styleString);
    };
    d3_transitionPrototype.styleTween = function(name, tween, priority) {
        if (arguments.length < 3) priority = "";
        function styleTween(d, i) {
            var f = tween.call(this, d, i, d3_window.getComputedStyle(this, null).getPropertyValue(name));
            return f && function(t) {
                this.style.setProperty(name, f(t), priority);
            };
        }
        return this.tween("style." + name, styleTween);
    };
    d3_transitionPrototype.text = function(value) {
        return d3_transition_tween(this, "text", value, d3_transition_text);
    };
    function d3_transition_text(b) {
        if (b == null) b = "";
        return function() {
            this.textContent = b;
        };
    }
    d3_transitionPrototype.remove = function() {
        return this.each("end.transition", function() {
            var p;
            if (this.__transition__.count < 2 && (p = this.parentNode)) p.removeChild(this);
        });
    };
    d3_transitionPrototype.ease = function(value) {
        var id = this.id;
        if (arguments.length < 1) return this.node().__transition__[id].ease;
        if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
        return d3_selection_each(this, function(node) {
            node.__transition__[id].ease = value;
        });
    };
    d3_transitionPrototype.delay = function(value) {
        var id = this.id;
        if (arguments.length < 1) return this.node().__transition__[id].delay;
        return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
            node.__transition__[id].delay = +value.call(node, node.__data__, i, j);
        } : (value = +value, function(node) {
            node.__transition__[id].delay = value;
        }));
    };
    d3_transitionPrototype.duration = function(value) {
        var id = this.id;
        if (arguments.length < 1) return this.node().__transition__[id].duration;
        return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
            node.__transition__[id].duration = Math.max(1, value.call(node, node.__data__, i, j));
        } : (value = Math.max(1, value), function(node) {
            node.__transition__[id].duration = value;
        }));
    };
    d3_transitionPrototype.each = function(type, listener) {
        var id = this.id;
        if (arguments.length < 2) {
            var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
            d3_transitionInheritId = id;
            d3_selection_each(this, function(node, i, j) {
                d3_transitionInherit = node.__transition__[id];
                type.call(node, node.__data__, i, j);
            });
            d3_transitionInherit = inherit;
            d3_transitionInheritId = inheritId;
        } else {
            d3_selection_each(this, function(node) {
                var transition = node.__transition__[id];
                (transition.event || (transition.event = d3.dispatch("start", "end"))).on(type, listener);
            });
        }
        return this;
    };
    d3_transitionPrototype.transition = function() {
        var id0 = this.id, id1 = ++d3_transitionId, subgroups = [], subgroup, group, node, transition;
        for (var j = 0, m = this.length; j < m; j++) {
            subgroups.push(subgroup = []);
            for (var group = this[j], i = 0, n = group.length; i < n; i++) {
                if (node = group[i]) {
                    transition = Object.create(node.__transition__[id0]);
                    transition.delay += transition.duration;
                    d3_transitionNode(node, i, id1, transition);
                }
                subgroup.push(node);
            }
        }
        return d3_transition(subgroups, id1);
    };
    function d3_transitionNode(node, i, id, inherit) {
        var lock = node.__transition__ || (node.__transition__ = {
            active: 0,
            count: 0
        }), transition = lock[id];
        if (!transition) {
            var time = inherit.time;
            transition = lock[id] = {
                tween: new d3_Map(),
                time: time,
                ease: inherit.ease,
                delay: inherit.delay,
                duration: inherit.duration
            };
            ++lock.count;
            d3.timer(function(elapsed) {
                var d = node.__data__, ease = transition.ease, delay = transition.delay, duration = transition.duration, timer = d3_timer_active, tweened = [];
                timer.t = delay + time;
                if (delay <= elapsed) return start(elapsed - delay);
                timer.c = start;
                function start(elapsed) {
                    if (lock.active > id) return stop();
                    lock.active = id;
                    transition.event && transition.event.start.call(node, d, i);
                    transition.tween.forEach(function(key, value) {
                        if (value = value.call(node, d, i)) {
                            tweened.push(value);
                        }
                    });
                    d3.timer(function() {
                        timer.c = tick(elapsed || 1) ? d3_true : tick;
                        return 1;
                    }, 0, time);
                }
                function tick(elapsed) {
                    if (lock.active !== id) return stop();
                    var t = elapsed / duration, e = ease(t), n = tweened.length;
                    while (n > 0) {
                        tweened[--n].call(node, e);
                    }
                    if (t >= 1) {
                        transition.event && transition.event.end.call(node, d, i);
                        return stop();
                    }
                }
                function stop() {
                    if (--lock.count) delete lock[id]; else delete node.__transition__;
                    return 1;
                }
            }, 0, time);
        }
    }
    d3.svg.axis = function() {
        var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_;
        function axis(g) {
            g.each(function() {
                var g = d3.select(this);
                var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = scale.copy();
                var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g.selectAll(".tick").data(ticks, scale1), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε), tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(), tickUpdate = d3.transition(tick.order()).style("opacity", 1), tickTransform;
                var range = d3_scaleRange(scale1), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"), 
                d3.transition(path));
                tickEnter.append("line");
                tickEnter.append("text");
                var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text");
                switch (orient) {
                  case "bottom":
                    {
                        tickTransform = d3_svg_axisX;
                        lineEnter.attr("y2", innerTickSize);
                        textEnter.attr("y", Math.max(innerTickSize, 0) + tickPadding);
                        lineUpdate.attr("x2", 0).attr("y2", innerTickSize);
                        textUpdate.attr("x", 0).attr("y", Math.max(innerTickSize, 0) + tickPadding);
                        text.attr("dy", ".71em").style("text-anchor", "middle");
                        pathUpdate.attr("d", "M" + range[0] + "," + outerTickSize + "V0H" + range[1] + "V" + outerTickSize);
                        break;
                    }

                  case "top":
                    {
                        tickTransform = d3_svg_axisX;
                        lineEnter.attr("y2", -innerTickSize);
                        textEnter.attr("y", -(Math.max(innerTickSize, 0) + tickPadding));
                        lineUpdate.attr("x2", 0).attr("y2", -innerTickSize);
                        textUpdate.attr("x", 0).attr("y", -(Math.max(innerTickSize, 0) + tickPadding));
                        text.attr("dy", "0em").style("text-anchor", "middle");
                        pathUpdate.attr("d", "M" + range[0] + "," + -outerTickSize + "V0H" + range[1] + "V" + -outerTickSize);
                        break;
                    }

                  case "left":
                    {
                        tickTransform = d3_svg_axisY;
                        lineEnter.attr("x2", -innerTickSize);
                        textEnter.attr("x", -(Math.max(innerTickSize, 0) + tickPadding));
                        lineUpdate.attr("x2", -innerTickSize).attr("y2", 0);
                        textUpdate.attr("x", -(Math.max(innerTickSize, 0) + tickPadding)).attr("y", 0);
                        text.attr("dy", ".32em").style("text-anchor", "end");
                        pathUpdate.attr("d", "M" + -outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + -outerTickSize);
                        break;
                    }

                  case "right":
                    {
                        tickTransform = d3_svg_axisY;
                        lineEnter.attr("x2", innerTickSize);
                        textEnter.attr("x", Math.max(innerTickSize, 0) + tickPadding);
                        lineUpdate.attr("x2", innerTickSize).attr("y2", 0);
                        textUpdate.attr("x", Math.max(innerTickSize, 0) + tickPadding).attr("y", 0);
                        text.attr("dy", ".32em").style("text-anchor", "start");
                        pathUpdate.attr("d", "M" + outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + outerTickSize);
                        break;
                    }
                }
                if (scale1.rangeBand) {
                    var x = scale1, dx = x.rangeBand() / 2;
                    scale0 = scale1 = function(d) {
                        return x(d) + dx;
                    };
                } else if (scale0.rangeBand) {
                    scale0 = scale1;
                } else {
                    tickExit.call(tickTransform, scale1);
                }
                tickEnter.call(tickTransform, scale0);
                tickUpdate.call(tickTransform, scale1);
            });
        }
        axis.scale = function(x) {
            if (!arguments.length) return scale;
            scale = x;
            return axis;
        };
        axis.orient = function(x) {
            if (!arguments.length) return orient;
            orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
            return axis;
        };
        axis.ticks = function() {
            if (!arguments.length) return tickArguments_;
            tickArguments_ = arguments;
            return axis;
        };
        axis.tickValues = function(x) {
            if (!arguments.length) return tickValues;
            tickValues = x;
            return axis;
        };
        axis.tickFormat = function(x) {
            if (!arguments.length) return tickFormat_;
            tickFormat_ = x;
            return axis;
        };
        axis.tickSize = function(x) {
            var n = arguments.length;
            if (!n) return innerTickSize;
            innerTickSize = +x;
            outerTickSize = +arguments[n - 1];
            return axis;
        };
        axis.innerTickSize = function(x) {
            if (!arguments.length) return innerTickSize;
            innerTickSize = +x;
            return axis;
        };
        axis.outerTickSize = function(x) {
            if (!arguments.length) return outerTickSize;
            outerTickSize = +x;
            return axis;
        };
        axis.tickPadding = function(x) {
            if (!arguments.length) return tickPadding;
            tickPadding = +x;
            return axis;
        };
        axis.tickSubdivide = function() {
            return arguments.length && axis;
        };
        return axis;
    };
    var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
    };
    function d3_svg_axisX(selection, x) {
        selection.attr("transform", function(d) {
            return "translate(" + x(d) + ",0)";
        });
    }
    function d3_svg_axisY(selection, y) {
        selection.attr("transform", function(d) {
            return "translate(0," + y(d) + ")";
        });
    }
    d3.svg.brush = function() {
        var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, xExtent = [ 0, 0 ], yExtent = [ 0, 0 ], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
        function brush(g) {
            g.each(function() {
                var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
                var background = g.selectAll(".background").data([ 0 ]);
                background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
                g.selectAll(".extent").data([ 0 ]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                var resize = g.selectAll(".resize").data(resizes, d3_identity);
                resize.exit().remove();
                resize.enter().append("g").attr("class", function(d) {
                    return "resize " + d;
                }).style("cursor", function(d) {
                    return d3_svg_brushCursor[d];
                }).append("rect").attr("x", function(d) {
                    return /[ew]$/.test(d) ? -3 : null;
                }).attr("y", function(d) {
                    return /^[ns]/.test(d) ? -3 : null;
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
                resize.style("display", brush.empty() ? "none" : null);
                var gUpdate = d3.transition(g), backgroundUpdate = d3.transition(background), range;
                if (x) {
                    range = d3_scaleRange(x);
                    backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
                    redrawX(gUpdate);
                }
                if (y) {
                    range = d3_scaleRange(y);
                    backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
                    redrawY(gUpdate);
                }
                redraw(gUpdate);
            });
        }
        brush.event = function(g) {
            g.each(function() {
                var event_ = event.of(this, arguments), extent1 = {
                    x: xExtent,
                    y: yExtent,
                    i: xExtentDomain,
                    j: yExtentDomain
                }, extent0 = this.__chart__ || extent1;
                this.__chart__ = extent1;
                if (d3_transitionInheritId) {
                    d3.select(this).transition().each("start.brush", function() {
                        xExtentDomain = extent0.i;
                        yExtentDomain = extent0.j;
                        xExtent = extent0.x;
                        yExtent = extent0.y;
                        event_({
                            type: "brushstart"
                        });
                    }).tween("brush:brush", function() {
                        var xi = d3_interpolateArray(xExtent, extent1.x), yi = d3_interpolateArray(yExtent, extent1.y);
                        xExtentDomain = yExtentDomain = null;
                        return function(t) {
                            xExtent = extent1.x = xi(t);
                            yExtent = extent1.y = yi(t);
                            event_({
                                type: "brush",
                                mode: "resize"
                            });
                        };
                    }).each("end.brush", function() {
                        xExtentDomain = extent1.i;
                        yExtentDomain = extent1.j;
                        event_({
                            type: "brush",
                            mode: "resize"
                        });
                        event_({
                            type: "brushend"
                        });
                    });
                } else {
                    event_({
                        type: "brushstart"
                    });
                    event_({
                        type: "brush",
                        mode: "resize"
                    });
                    event_({
                        type: "brushend"
                    });
                }
            });
        };
        function redraw(g) {
            g.selectAll(".resize").attr("transform", function(d) {
                return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
            });
        }
        function redrawX(g) {
            g.select(".extent").attr("x", xExtent[0]);
            g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
        }
        function redrawY(g) {
            g.select(".extent").attr("y", yExtent[0]);
            g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
        }
        function brushstart() {
            var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(), center, origin = d3.mouse(target), offset;
            var w = d3.select(d3_window).on("keydown.brush", keydown).on("keyup.brush", keyup);
            if (d3.event.changedTouches) {
                w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
            } else {
                w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
            }
            g.interrupt().selectAll("*").interrupt();
            if (dragging) {
                origin[0] = xExtent[0] - origin[0];
                origin[1] = yExtent[0] - origin[1];
            } else if (resizing) {
                var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
                offset = [ xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1] ];
                origin[0] = xExtent[ex];
                origin[1] = yExtent[ey];
            } else if (d3.event.altKey) center = origin.slice();
            g.style("pointer-events", "none").selectAll(".resize").style("display", null);
            d3.select("body").style("cursor", eventTarget.style("cursor"));
            event_({
                type: "brushstart"
            });
            brushmove();
            function keydown() {
                if (d3.event.keyCode == 32) {
                    if (!dragging) {
                        center = null;
                        origin[0] -= xExtent[1];
                        origin[1] -= yExtent[1];
                        dragging = 2;
                    }
                    d3_eventPreventDefault();
                }
            }
            function keyup() {
                if (d3.event.keyCode == 32 && dragging == 2) {
                    origin[0] += xExtent[1];
                    origin[1] += yExtent[1];
                    dragging = 0;
                    d3_eventPreventDefault();
                }
            }
            function brushmove() {
                var point = d3.mouse(target), moved = false;
                if (offset) {
                    point[0] += offset[0];
                    point[1] += offset[1];
                }
                if (!dragging) {
                    if (d3.event.altKey) {
                        if (!center) center = [ (xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2 ];
                        origin[0] = xExtent[+(point[0] < center[0])];
                        origin[1] = yExtent[+(point[1] < center[1])];
                    } else center = null;
                }
                if (resizingX && move1(point, x, 0)) {
                    redrawX(g);
                    moved = true;
                }
                if (resizingY && move1(point, y, 1)) {
                    redrawY(g);
                    moved = true;
                }
                if (moved) {
                    redraw(g);
                    event_({
                        type: "brush",
                        mode: dragging ? "move" : "resize"
                    });
                }
            }
            function move1(point, scale, i) {
                var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], extent = i ? yExtent : xExtent, size = extent[1] - extent[0], min, max;
                if (dragging) {
                    r0 -= position;
                    r1 -= size + position;
                }
                min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
                if (dragging) {
                    max = (min += position) + size;
                } else {
                    if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
                    if (position < min) {
                        max = min;
                        min = position;
                    } else {
                        max = position;
                    }
                }
                if (extent[0] != min || extent[1] != max) {
                    if (i) yExtentDomain = null; else xExtentDomain = null;
                    extent[0] = min;
                    extent[1] = max;
                    return true;
                }
            }
            function brushend() {
                brushmove();
                g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
                d3.select("body").style("cursor", null);
                w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
                dragRestore();
                event_({
                    type: "brushend"
                });
            }
        }
        brush.x = function(z) {
            if (!arguments.length) return x;
            x = z;
            resizes = d3_svg_brushResizes[!x << 1 | !y];
            return brush;
        };
        brush.y = function(z) {
            if (!arguments.length) return y;
            y = z;
            resizes = d3_svg_brushResizes[!x << 1 | !y];
            return brush;
        };
        brush.clamp = function(z) {
            if (!arguments.length) return x && y ? [ xClamp, yClamp ] : x ? xClamp : y ? yClamp : null;
            if (x && y) xClamp = !!z[0], yClamp = !!z[1]; else if (x) xClamp = !!z; else if (y) yClamp = !!z;
            return brush;
        };
        brush.extent = function(z) {
            var x0, x1, y0, y1, t;
            if (!arguments.length) {
                if (x) {
                    if (xExtentDomain) {
                        x0 = xExtentDomain[0], x1 = xExtentDomain[1];
                    } else {
                        x0 = xExtent[0], x1 = xExtent[1];
                        if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
                        if (x1 < x0) t = x0, x0 = x1, x1 = t;
                    }
                }
                if (y) {
                    if (yExtentDomain) {
                        y0 = yExtentDomain[0], y1 = yExtentDomain[1];
                    } else {
                        y0 = yExtent[0], y1 = yExtent[1];
                        if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
                        if (y1 < y0) t = y0, y0 = y1, y1 = t;
                    }
                }
                return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
            }
            if (x) {
                x0 = z[0], x1 = z[1];
                if (y) x0 = x0[0], x1 = x1[0];
                xExtentDomain = [ x0, x1 ];
                if (x.invert) x0 = x(x0), x1 = x(x1);
                if (x1 < x0) t = x0, x0 = x1, x1 = t;
                if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [ x0, x1 ];
            }
            if (y) {
                y0 = z[0], y1 = z[1];
                if (x) y0 = y0[1], y1 = y1[1];
                yExtentDomain = [ y0, y1 ];
                if (y.invert) y0 = y(y0), y1 = y(y1);
                if (y1 < y0) t = y0, y0 = y1, y1 = t;
                if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [ y0, y1 ];
            }
            return brush;
        };
        brush.clear = function() {
            if (!brush.empty()) {
                xExtent = [ 0, 0 ], yExtent = [ 0, 0 ];
                xExtentDomain = yExtentDomain = null;
            }
            return brush;
        };
        brush.empty = function() {
            return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
        };
        return d3.rebind(brush, event, "on");
    };
    var d3_svg_brushCursor = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
    };
    var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
    var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
    var d3_time_formatUtc = d3_time_format.utc;
    var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
    d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
    function d3_time_formatIsoNative(date) {
        return date.toISOString();
    }
    d3_time_formatIsoNative.parse = function(string) {
        var date = new Date(string);
        return isNaN(date) ? null : date;
    };
    d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
    d3_time.second = d3_time_interval(function(date) {
        return new d3_date(Math.floor(date / 1e3) * 1e3);
    }, function(date, offset) {
        date.setTime(date.getTime() + Math.floor(offset) * 1e3);
    }, function(date) {
        return date.getSeconds();
    });
    d3_time.seconds = d3_time.second.range;
    d3_time.seconds.utc = d3_time.second.utc.range;
    d3_time.minute = d3_time_interval(function(date) {
        return new d3_date(Math.floor(date / 6e4) * 6e4);
    }, function(date, offset) {
        date.setTime(date.getTime() + Math.floor(offset) * 6e4);
    }, function(date) {
        return date.getMinutes();
    });
    d3_time.minutes = d3_time.minute.range;
    d3_time.minutes.utc = d3_time.minute.utc.range;
    d3_time.hour = d3_time_interval(function(date) {
        var timezone = date.getTimezoneOffset() / 60;
        return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
    }, function(date, offset) {
        date.setTime(date.getTime() + Math.floor(offset) * 36e5);
    }, function(date) {
        return date.getHours();
    });
    d3_time.hours = d3_time.hour.range;
    d3_time.hours.utc = d3_time.hour.utc.range;
    d3_time.month = d3_time_interval(function(date) {
        date = d3_time.day(date);
        date.setDate(1);
        return date;
    }, function(date, offset) {
        date.setMonth(date.getMonth() + offset);
    }, function(date) {
        return date.getMonth();
    });
    d3_time.months = d3_time.month.range;
    d3_time.months.utc = d3_time.month.utc.range;
    function d3_time_scale(linear, methods, format) {
        function scale(x) {
            return linear(x);
        }
        scale.invert = function(x) {
            return d3_time_scaleDate(linear.invert(x));
        };
        scale.domain = function(x) {
            if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
            linear.domain(x);
            return scale;
        };
        function tickMethod(extent, count) {
            var span = extent[1] - extent[0], target = span / count, i = d3.bisect(d3_time_scaleSteps, target);
            return i == d3_time_scaleSteps.length ? [ methods.year, d3_scale_linearTickRange(extent.map(function(d) {
                return d / 31536e6;
            }), count)[2] ] : !i ? [ d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2] ] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
        }
        scale.nice = function(interval, skip) {
            var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
            if (method) interval = method[0], skip = method[1];
            function skipped(date) {
                return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
            }
            return scale.domain(d3_scale_nice(domain, skip > 1 ? {
                floor: function(date) {
                    while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
                    return date;
                },
                ceil: function(date) {
                    while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate(+date + 1);
                    return date;
                }
            } : interval));
        };
        scale.ticks = function(interval, skip) {
            var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [ {
                range: interval
            }, skip ];
            if (method) interval = method[0], skip = method[1];
            return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
        };
        scale.tickFormat = function() {
            return format;
        };
        scale.copy = function() {
            return d3_time_scale(linear.copy(), methods, format);
        };
        return d3_scale_linearRebind(scale, linear);
    }
    function d3_time_scaleDate(t) {
        return new Date(t);
    }
    var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
    var d3_time_scaleLocalMethods = [ [ d3_time.second, 1 ], [ d3_time.second, 5 ], [ d3_time.second, 15 ], [ d3_time.second, 30 ], [ d3_time.minute, 1 ], [ d3_time.minute, 5 ], [ d3_time.minute, 15 ], [ d3_time.minute, 30 ], [ d3_time.hour, 1 ], [ d3_time.hour, 3 ], [ d3_time.hour, 6 ], [ d3_time.hour, 12 ], [ d3_time.day, 1 ], [ d3_time.day, 2 ], [ d3_time.week, 1 ], [ d3_time.month, 1 ], [ d3_time.month, 3 ], [ d3_time.year, 1 ] ];
    var d3_time_scaleLocalFormat = d3_time_format.multi([ [ ".%L", function(d) {
        return d.getMilliseconds();
    } ], [ ":%S", function(d) {
        return d.getSeconds();
    } ], [ "%I:%M", function(d) {
        return d.getMinutes();
    } ], [ "%I %p", function(d) {
        return d.getHours();
    } ], [ "%a %d", function(d) {
        return d.getDay() && d.getDate() != 1;
    } ], [ "%b %d", function(d) {
        return d.getDate() != 1;
    } ], [ "%B", function(d) {
        return d.getMonth();
    } ], [ "%Y", d3_true ] ]);
    var d3_time_scaleMilliseconds = {
        range: function(start, stop, step) {
            return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
        },
        floor: d3_identity,
        ceil: d3_identity
    };
    d3_time_scaleLocalMethods.year = d3_time.year;
    d3_time.scale = function() {
        return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
    };
    var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
        return [ m[0].utc, m[1] ];
    });
    var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([ [ ".%L", function(d) {
        return d.getUTCMilliseconds();
    } ], [ ":%S", function(d) {
        return d.getUTCSeconds();
    } ], [ "%I:%M", function(d) {
        return d.getUTCMinutes();
    } ], [ "%I %p", function(d) {
        return d.getUTCHours();
    } ], [ "%a %d", function(d) {
        return d.getUTCDay() && d.getUTCDate() != 1;
    } ], [ "%b %d", function(d) {
        return d.getUTCDate() != 1;
    } ], [ "%B", function(d) {
        return d.getUTCMonth();
    } ], [ "%Y", d3_true ] ]);
    d3_time_scaleUtcMethods.year = d3_time.year.utc;
    d3_time.scale.utc = function() {
        return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
    };
    d3.text = d3_xhrType(function(request) {
        return request.responseText;
    });
    d3.json = function(url, callback) {
        return d3_xhr(url, "application/json", d3_json, callback);
    };
    function d3_json(request) {
        return JSON.parse(request.responseText);
    }
    d3.html = function(url, callback) {
        return d3_xhr(url, "text/html", d3_html, callback);
    };
    function d3_html(request) {
        var range = d3_document.createRange();
        range.selectNode(d3_document.body);
        return range.createContextualFragment(request.responseText);
    }
    d3.xml = d3_xhrType(function(request) {
        return request.responseXML;
    });
    if (typeof define === "function" && define.amd) {
        define(d3);
    } else if (typeof module === "object" && module.exports) {
        module.exports = d3;
    } else {
        this.d3 = d3;
    }
}();

function D3Node(pid, id, text, data) {
    this.id = id;
    this.pid = pid;
    this.text = text;
    this.data = data == null ? {} : data;
    this.elements = null;
    this.node_enter = 0;
    this.text_enter = 0;
    this.size = 1;
}

D3Node.prototype.getState = function() {
    var sum = this.node_enter + this.text_enter;
    if (sum > 0) {
        return "hover";
    }
    return "default";
};

D3Node.prototype.setText = function(text) {
    this.text = text;
};

D3Node.prototype.setData = function(data) {
    this.data = data;
};

D3Node.prototype.setParent = function(pid) {
    this.pid = pid;
};

D3Node.prototype.hasChildren = function() {
    if (this.children == undefined) {
        return false;
    }
    if (this.children.length == 0) {
        return false;
    }
    if (this.children.length == 1) {
        return !this.children[0].isDummyNode();
    }
    return true;
};

D3Node.prototype.getCopy = function(deep) {
    var node = new D3Node(this.pid, this.id, this.text, this.data);
    node.elements = this.elements;
    if (this.clist !== undefined) {
        node.clist = this.clist;
    }
    return node;
};

D3Node.prototype.addChild = function(node, atype) {
    var insert_dummy = atype == "circle";
    var replace_first = false;
    if (this.clist == undefined) {
        this.clist = new Array();
        if (insert_dummy) {
            this.clist.push(this.newDummyNode());
        }
    } else {
        if (insert_dummy) {
            replace_first = this.clist[0].isDummyNode();
        }
    }
    if (replace_first) {
        this.clist[0] = node;
    } else {
        this.clist.push(node);
    }
};

D3Node.prototype.removeChild = function(node, atype) {
    var num_elements = this.clist.length == undefined ? 0 : this.clist.length;
    if (num_elements <= 0) {
        console.log("ERROR:: removeChild called on " + this.id + " with no children");
        return;
    }
    var new_clist = new Array();
    for (var ii = 0; ii < num_elements; ii++) {
        var cnode = this.clist[ii];
        if (cnode.isDummyNode()) {
            delete cnode;
        } else if (cnode != node) {
            new_clist.push(cnode);
        }
    }
    if (new_clist.length <= 0) {
        delete this.clist;
    } else if (new_clist.length == 1 && atype == "circle") {
        this.clist = [ this.newDummyNode(), new_clist[0] ];
    } else {
        this.clist = new_clist;
    }
};

D3Node.prototype.isDummyNode = function() {
    return this.id == "dummy_node_identifier";
};

D3Node.prototype.newDummyNode = function() {
    var dummy = new D3Node(this.id, "dummy_node_identifier", "", "");
    return dummy;
};

D3Node.prototype.getId = function() {
    return this.id;
};

D3Node.prototype.getText = function() {
    return this.text;
};

D3Node.prototype.getData = function() {
    return this.data;
};

D3Node.prototype.getParentId = function() {
    return this.pid;
};

function translateCode(x, y) {
    return "translate(" + x + "," + y + ")";
}

(function($) {
    function circleApi(base) {
        console.log("Init again");
        base.radius = Math.min(base.cWidth, base.cHeight);
        base.xAxis = d3.scale.linear().range([ 0, base.radius ]);
        base.yAxis = d3.scale.linear().range([ 0, base.radius ]);
        base.current_node = null;
        base.pack = d3.layout.pack().size([ base.radius, base.radius ]).value(function(d) {
            return d.size;
        }).children(function children(d) {
            return d.clist;
        });
        this.base = base;
        this.zoom_transitions = 0;
        this.propTimers = {};
        this.styling_delay = 100;
    }
    function endall(transition, callback) {
        var n = 0;
        transition.each(function() {
            ++n;
        }).each("end", function() {
            if (!--n) callback.apply(this, arguments);
        });
    }
    circleApi.prototype.clickAction = function(d) {
        var base = this.base;
        var zoom_back = base.current_node == d;
        var target_node = zoom_back ? base.root : d;
        if (target_node) {
            return this.Zoom(target_node, zoom_back);
        }
    };
    circleApi.prototype.Zoom = function(target, zoom_back) {
        var base = this.base;
        var core_api = this;
        var kk = base.radius / target.r / 2;
        var xx = base.xAxis.domain([ target.x - target.r, target.x + target.r ]);
        var yy = base.yAxis.domain([ target.y - target.r, target.y + target.r ]);
        core_api.zoom_transitions += 3;
        var trans = base.vis.transition().duration(base.animationDuration);
        base.current_node = target;
        if (zoom_back) {
            base.current_node = base.root;
        }
        base.vis.selectAll("circle").attr("class", function(d) {
            return base.nodeClass("shape", d);
        });
        base.vis.selectAll("text").style("opacity", function(d) {
            return 0;
        }).attr("class", function(d) {
            return base.nodeClass("text", d);
        });
        trans.selectAll("circle").attr("cx", function(d) {
            return xx(d.x);
        }).attr("cy", function(d) {
            return yy(d.y);
        }).attr("r", function(d) {
            return kk * circleRadius(d);
        }).call(endall, function() {
            core_api.zoom_transitions--;
        });
        trans.selectAll("text").attr("x", function(d) {
            return xx(d.x);
        }).attr("y", function(d) {
            return yy(d.y);
        }).call(endall, function() {
            core_api.zoom_transitions--;
        });
        var current_id = base.current_node.getId();
        trans.selectAll("text").filter(function(d) {
            return d.getParentId() == current_id || d == base.current_node && !d.hasChildren();
        }).text(function(d) {
            return truncatedText(this, d, kk);
        }).style("opacity", function(d) {
            return textOpacity(this, d, kk);
        }).call(endall, function() {
            core_api.zoom_transitions--;
        });
        if (d3.event) {
            d3.event.stopPropagation();
            base.d3focus(d3.event, base.getNode(target.id));
        }
    };
    function fillOpacity(d) {
        return d.isDummyNode() ? 0 : 1;
    }
    function circleRadius(d) {
        return d.isDummyNode() ? 0 : d.r;
    }
    function textOpacity(text, d, kk) {
        if (d.isDummyNode()) {
            return 0;
        }
        return 1;
    }
    function truncatedText(tele, d, kk) {
        if (kk == undefined) {
            kk = 1;
        }
        var dia = 2 * kk * circleRadius(d);
        tele.textContent = d.text;
        var width = tele.getBBox().width;
        dia = .9 * dia;
        if (width > dia) {
            var new_chars = Math.round(d.text.length * (dia / width));
            if (new_chars < 5) {
                return "";
            }
            var num_dots = Math.min(3, new_chars - 4);
            new_chars -= num_dots;
            return d.text.substr(0, new_chars) + Array(num_dots).join(".");
        }
        return d.text;
    }
    circleApi.prototype.applyProperties = function(d) {
        var base = this.base;
        if (d.isDummyNode()) {
            return;
        }
        if (this.zoom_transitions > 0) {
            return;
        }
        var timer_id = d.id;
        this.clearTimer(timer_id);
        var core_api = this;
        this.propTimers[timer_id] = setTimeout(function() {
            core_api.clearTimer(timer_id);
            var shape = base.vis.select("#d3circle__" + d.id);
            shape.attr("class", core_api.base.nodeClass("shape", d));
            var text = base.vis.select("#d3text__" + d.id);
            text.attr("class", core_api.base.nodeClass("text", d));
        }, core_api.styling_delay);
    };
    circleApi.prototype.clearTimer = function(tid) {
        if (tid in this.propTimers) {
            clearTimeout(this.propTimers[tid]);
            delete this.propTimers[tid];
        }
    };
    circleApi.prototype.updateVisualization = function(refresh) {
        var base = this.base;
        var core_api = this;
        if (base.root == null) {
            return;
        }
        base.nodes = base.pack.nodes(base.root);
        if (!base.vis) {
            base.vis = d3.select("#" + base.container_id).insert("svg:svg").attr("id", "svgVis" + base.container_id).attr("width", base.cWidth).attr("height", base.cHeight).insert("svg:g");
        }
        if (base.current_node == null) {
            base.current_node = base.root;
        }
        var ox = (base.cWidth - base.radius) / 2;
        var oy = (base.cHeight - base.radius) / 2;
        base.vis.attr("transform", translateCode(ox, oy));
        d3.select("#" + base.container_id).on("click", function() {
            core_api.Zoom(base.root, true);
        });
        base.vis.append("g").attr("id", "circlenodes");
        base.vis.append("g").attr("id", "textnodes");
        var circles = base.vis.select("#circlenodes").selectAll("circle").data(base.nodes, function(d) {
            return d.id;
        });
        var texts = base.vis.select("#textnodes").selectAll("text").data(base.nodes, function(d) {
            return d.id;
        });
        circles.enter().append("svg:circle").attr("class", function(d) {
            return base.nodeClass("shape", d);
        }).attr("id", function(d) {
            return "d3circle__" + d.id;
        }).attr("r", function(d) {
            return 0;
        }).on("mouseenter", function(d) {
            var ad = base.getActualNode(d);
            ad.node_enter++;
            core_api.applyProperties(ad);
            base.d3mouseenter(d3.event, ad);
        }).on("mouseout", function(d) {
            ad = base.getActualNode(d);
            ad.node_enter--;
            core_api.applyProperties(ad);
            base.d3mouseout(d3.event, ad);
        }).on("click", function(d) {
            ad = base.getActualNode(d);
            core_api.clickAction(ad);
        }).each(function(d) {
            d3.select(this).attr(d.data);
        });
        texts.enter().append("svg:text").attr("class", function(d) {
            return base.nodeClass("text", d);
        }).attr("id", function(d) {
            return "d3text__" + d.id;
        }).attr(this.data).attr("dy", ".35em").attr("text-anchor", "middle").on("mouseenter", function(d) {
            ad = base.getActualNode(d);
            ad.text_enter++;
            core_api.applyProperties(ad);
        }).on("mouseout", function(d) {
            ad = base.getActualNode(d);
            ad.text_enter--;
            core_api.applyProperties(ad);
        }).on("click", function(d) {
            ad = base.getActualNode(d);
            core_api.clickAction(ad);
        }).style("opacity", function(d) {
            return 0;
        }).text(function(d) {
            return d.text;
        }).each(function(d) {
            d3.select(this).attr(d.data);
        });
        circles.transition().duration(base.animationDuration).attr("r", function(d) {
            return circleRadius(d);
        }).attr("cx", function(d) {
            return d.x;
        }).attr("cy", function(d) {
            return d.y;
        });
        var current_id = base.current_node.getId();
        texts.transition().duration(base.animationDuration).filter(function(d) {
            return d.getParentId() == current_id || d == base.current_node && !d.hasChildren();
        }).attr("x", function(d) {
            return d.x;
        }).attr("y", function(d) {
            return d.y;
        }).text(function(d) {
            return truncatedText(this, d);
        }).style("opacity", function(d) {
            return textOpacity(this, d);
        });
        circles.exit().remove();
        texts.exit().remove();
    };
    function treeApi(base) {
        this.base = base;
        this.totalNodes = 0;
        this.maxLabelLength = 0;
        this.selectedNode = null;
        this.draggingNode = null;
        this.panSpeed = 200;
        this.panBoundary = 20;
        this.node_ii = 0;
        this.tree = d3.layout.tree().size([ base.cHeight, base.cWidth ]).children(function children(d) {
            return d.is_collapsed ? new Array() : d.clist;
        });
        this.diagonal = d3.svg.diagonal().projection(function(d) {
            return [ d.y, d.x ];
        });
    }
    treeApi.prototype.centerNode = function(source) {
        var base = this.base;
        scale = this.zoomListener.scale();
        var x = -source.y0;
        var y = -source.x0;
        x = x * scale + base.cWidth / 2;
        y = y * scale + base.cHeight / 2;
        d3.select("#" + base.container_id).select("g").transition().duration(base.animationDuration).attr("transform", translateCode(x, y) + "scale(" + scale + ")");
        this.zoomListener.scale(scale);
        this.zoomListener.translate([ x, y ]);
    };
    treeApi.prototype.toggleChildren = function(d, force_expand) {
        if (force_expand) {
            d.is_collapsed = 0;
        } else {
            d.is_collapsed = !d.is_collapsed;
        }
        return d;
    };
    treeApi.prototype.zoomTree = function() {
        this.base.vis.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    };
    var overCircle = function(d) {
        selectedNode = d;
        updateTempConnector();
    };
    var outCircle = function(d) {
        selectedNode = null;
        updateTempConnector();
    };
    treeApi.prototype.treeNodeClick = function(d, event) {
        var base = this.base;
        if (event.defaultPrevented) return;
        d = this.toggleChildren(d, false);
        this.redrawTreeAt(d);
        this.centerNode(d);
        if (d.is_collapsed) {
            base.d3close(event, d);
        } else {
            base.d3open(event, d);
        }
    };
    var updateTempConnector = function() {
        var data = [];
        if (draggingNode !== null && selectedNode !== null) {
            data = [ {
                source: {
                    x: selectedNode.y0,
                    y: selectedNode.x0
                },
                target: {
                    x: draggingNode.y0,
                    y: draggingNode.x0
                }
            } ];
        }
        var link = vis.selectAll(".templink").data(data);
        link.enter().append("path").attr("class", "templink").attr("d", d3.svg.diagonal()).attr("pointer-events", "none");
        link.attr("d", d3.svg.diagonal());
        link.exit().remove();
    };
    treeApi.prototype.updateVisualization = function(refresh, parent) {
        var base = this.base;
        if (!base.vis) {
            this.initialize(base);
        }
        this.redrawTreeAt(parent);
        this.centerNode(parent);
    };
    function treeNodeClass(d) {
        var nclass = "tree_node";
        if (d.is_collapsed) {
            nclass += " closed";
        } else {
            nclass += " open";
        }
        if (d.clist && d.clist.length > 0) {
            nclass += " parent";
        } else {
            nclass += " child";
        }
        return nclass;
    }
    treeApi.prototype.redrawTreeAt = function(source) {
        var base = this.base;
        var core_api = this;
        var levelWidth = [ 1 ];
        var childCount = function(level, n) {
            if (n.clist && n.clist.length > 0) {
                if (levelWidth.length <= level + 1) {
                    levelWidth.push(0);
                }
                levelWidth[level + 1] += n.clist.length;
                n.clist.forEach(function(d) {
                    childCount(level + 1, d);
                });
            }
        };
        childCount(0, base.root);
        var newHeight = d3.max(levelWidth) * base.line_height;
        core_api.tree = core_api.tree.size([ newHeight, core_api.cWidth ]);
        var nodes = core_api.tree.nodes(base.root).reverse(), links = core_api.tree.links(nodes);
        nodes.forEach(function(d) {
            d.y = d.depth * (core_api.maxLabelLength * 10);
        });
        node = base.vis.selectAll("g.node").data(nodes, function(d) {
            return d.id || (d.id = ++node_ii);
        });
        var nodeEnter = node.enter().append("g").attr("class", "node").attr("id", function(d) {
            return "d3treenode__" + d.id;
        }).attr("transform", function(d) {
            return translateCode(source.y0, source.x0);
        }).each(function(d) {
            d3.select(this).attr(d.data);
        });
        nodeEnter.append("circle").attr("id", function(d) {
            return "d3treecircle__" + d.id;
        }).attr("class", function(d) {
            return treeNodeClass(d);
        }).attr("r", base.tree_circle_radius).on("click", function(d) {
            core_api.treeNodeClick(d, d3.event);
            base.d3click(d3.event, d);
        });
        nodeEnter.append("text").attr("id", function(d) {
            return "d3treetext__" + d.id;
        }).attr("class", function(d) {
            return treeNodeClass(d);
        }).attr("x", function(d) {
            return d.clist ? -10 : 10;
        }).attr("dy", ".35em").attr("text-anchor", function(d) {
            return d.clist ? "end" : "start";
        }).text(function(d) {
            return d.text;
        }).on("click", function(d) {
            core_api.treeNodeClick(d, d3.event);
            base.d3click(d3.event, d);
        });
        nodes.forEach(function(d) {
            d3.select("#d3treetext__" + d.id).attr("class", function(d) {
                var cc = treeNodeClass(d);
                return cc;
            });
            d3.select("#d3treecircle__" + d.id).attr("class", function(d) {
                var cc = treeNodeClass(d);
                return cc;
            });
        });
        nodeEnter.append("circle").attr("class", "ghostCircle").attr("r", base.tree_ghost_radius).attr("pointer-events", "mouseover").on("mouseover", function(node) {
            overCircle(node);
        }).on("mouseout", function(node) {
            outCircle(node);
        });
        node.select("text").attr("x", function(d) {
            return d.clist ? -10 : 10;
        }).attr("text-anchor", function(d) {
            return d.clist ? "end" : "start";
        }).text(function(d) {
            return d.text;
        });
        var nodeUpdate = node.transition().duration(base.animationDuration).attr("transform", function(d) {
            return translateCode(d.y, d.x);
        });
        var nodeExit = node.exit().transition().duration(base.animationDuration).attr("transform", function(d) {
            return translateCode(source.y, source.x);
        }).remove();
        nodeExit.select("circle").attr("r", 0);
        nodeExit.select("text").style("fill-opacity", 0);
        var link = base.vis.selectAll("path.link").data(links, function(d) {
            return d.target.id;
        });
        link.enter().insert("path", "g").attr("class", "link").attr("d", function(d) {
            var o = {
                x: source.x0,
                y: source.y0
            };
            return core_api.diagonal({
                source: o,
                target: o
            });
        });
        link.transition().duration(base.animationDuration).attr("d", core_api.diagonal);
        link.exit().transition().duration(base.animationDuration).attr("d", function(d) {
            var o = {
                x: source.x,
                y: source.y
            };
            return core_api.diagonal({
                source: o,
                target: o
            });
        }).remove();
        nodes.forEach(function(d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    };
    treeApi.prototype.traverseTree = function(current) {
        if (!current) return;
        current.is_collapsed = 0;
        this.maxLabelLength = Math.max(current.text.length, this.maxLabelLength);
        this.totalNodes++;
        var ccount = 0;
        if (current.clist) {
            ccount = current.clist.length;
        }
        for (var ii = 0; ii < ccount; ii++) {
            this.traverseTree(current.clist[ii]);
        }
    };
    treeApi.prototype.initialize = function() {
        var base = this.base;
        var core_api = this;
        this.zoomListener = d3.behavior.zoom().scaleExtent([ .1, 3 ]).on("zoom", function(d) {
            core_api.zoomTree();
        });
        base.vis = d3.select("#" + base.container_id).insert("svg:svg").attr("id", "svgVis" + base.container_id).attr("width", base.cWidth).attr("height", base.cHeight).attr("class", "overlay").call(core_api.zoomListener).insert("svg:g");
        base.root.x0 = base.cHeight / 2;
        base.root.y0 = 0;
        this.traverseTree(base.root);
    };
    function d3Api(type, container, duration, props) {
        this.type = type;
        this.container_id = container.attr("id");
        this.container = container;
        this.cWidth = container.width();
        this.cHeight = container.height();
        this.root = null;
        this.vis = null;
        this.nodes = null;
        this.nmap = {};
        this.animationDuration = duration == undefined ? 500 : duration;
        var states = [ "default", "hover" ];
        this.core_api = null;
        if (type == "circle") {
            this.core_api = new circleApi(this);
            states.push("zoom");
        } else if (type == "tree") {
            this.core_api = new treeApi(this);
            states.push("close");
        }
        this.stateClasses = {
            text: {},
            shape: {}
        };
        for (var ii = 0; ii < states.length; ii++) {
            var state = states[ii];
            for (otype in this.stateClasses) {
                this.stateClasses[otype][state] = otype + "_" + state;
            }
        }
        this.d3focus = function(event, node) {};
        this.d3mouseenter = function(event, node) {};
        this.d3mouseout = function(event, node) {};
        this.d3open = function(event, node) {};
        this.d3click = function(event, node) {};
        this.d3close = function(event, node) {};
        this.tree_circle_radius = 5;
        this.tree_ghost_radius = 30;
        this.line_height = 25;
    }
    d3Api.prototype.treeNodeRadius = function(r) {
        this.tree_circle_radius = r;
    };
    d3Api.prototype.treeNodeOuterRadius = function(r) {
        this.tree_ghost_radius = r;
    };
    d3Api.prototype.treeLineHeight = function(h) {
        this.line_height = h;
    };
    d3Api.prototype.clear = function() {
        if (this.vis) {
            d3.select("#svgVis" + this.container_id).remove();
            this.root = null;
            this.vis = null;
            this.nodes = null;
            this.nmap = {};
            if (this.type == "circle") {
                this.core_api = new circleApi(this);
            } else if (this.type == "tree") {
                this.core_api = new treeApi(this);
            }
        }
    };
    d3Api.prototype.getActualNode = function(d) {
        if (d == null) {
            return null;
        }
        if (!d.isDummyNode()) return d;
        return this.getActualNode(this.getNode(d.pid));
    };
    d3Api.prototype.invalidStateMsg = function(state) {
        console.log("ERROR: d3Api of type ", this.type, " has no state ", state);
    };
    d3Api.prototype.nodeClass = function(type, d) {
        var state = d.getState();
        if (d != this.root && d == this.current_node) {
            state = "zoom";
        }
        var h_class = d.hasChildren() ? "parent" : "child";
        var s_class = this.stateClasses[type][state];
        return h_class + " " + s_class;
    };
    d3Api.prototype.setStateClass = function(type, state, cname) {
        if (type in this.stateClasses) {
            if (state in this.stateClasses[type]) {
                this.stateClasses[state] = cname;
            } else {
                this.invalidStateMsg();
            }
        }
    };
    d3Api.prototype.getStateClass = function(type, state) {
        if (type in this.stateClasses) {
            if (state in this.stateClasses[type]) {
                return this.stateClasses[state];
            } else {
                this.invalidStateMsg();
            }
        }
        return null;
    };
    d3Api.prototype.on = function(eventname, callback) {
        if (this.type == "circle") {
            if (eventname == "d3focus") {
                this.d3focus = callback;
            } else if (eventname == "d3mouseenter") {
                this.d3mouseenter = callback;
            } else if (eventname == "d3mouseout") {
                this.d3mouseout = callback;
            } else {
                console.log("ERROR: Unsupported event " + eventname + " for type=" + this.type);
            }
        } else if (this.type == "tree") {
            if (eventname == "d3open") {
                this.d3open = callback;
            } else if (eventname == "d3close") {
                this.d3close = callback;
            } else if (eventname == "d3click") {
                this.d3click = callback;
            } else {
                console.log("ERROR: Unsupported event " + eventname + " for type=" + this.type);
            }
        }
    };
    d3Api.prototype.focus = function(id) {
        if (id in this.nmap) {
            var node = this.nmap[id];
            if (this.type == "circle") {
                this.core_api.Zoom(node, false);
            } else {
                this.core_api.centerNode(node);
            }
        }
    };
    d3Api.prototype.open = function(id) {
        if (id in this.nmap) {
            var node = this.nmap[id];
            if (this.type == "circle") {
                this.core_api.Zoom(node, false);
            } else {
                this.core_api.toggleChildren(node, true);
                this.core_api.redrawTreeAt(node);
                this.core_api.centerNode(node);
            }
        }
    };
    d3Api.prototype.refreshVisualization = function() {
        this.core_api.updateVisualization(0, this.root);
        for (id in this.nmap) {
            var node = this.nmap[id];
            if (node.elements == null) {
                node.elements = this.createElement(id);
            }
        }
    };
    d3Api.prototype.createElement = function(id) {
        if (this.type == "circle") {
            return {
                node: this.vis.select("#d3circle__" + id),
                text: this.vis.select("#d3text__" + id)
            };
        } else {
            return this.vis.select("#d3treenode__" + id);
        }
    };
    d3Api.prototype.addNode = function(pid, id, text, data) {
        var info = this.addNodeQueue(pid, id, text, data);
        if (info == null) {
            return null;
        }
        var node = info.node;
        var parent = info.parent;
        var refresh = 1;
        if (parent == null) {
            parent = this.root;
            refresh = 0;
        }
        this.core_api.updateVisualization(refresh, parent);
        node.elements = this.createElement(id);
        return node.elements;
    };
    d3Api.prototype.addNodeQueue = function(pid, id, text, data) {
        if (id in this.nmap) {
            console.log("ERROR: Node with id=" + id + " already exists.");
            return null;
        }
        var node;
        var parent = null;
        if (this.root == null) {
            this.root = this.current_node = node = new D3Node(null, id, text, data);
            this.nmap[id] = node;
        } else {
            if (pid == null) {
                parent = this.root;
            } else {
                if (pid in this.nmap) {
                    parent = this.nmap[pid];
                } else {
                    console.log("ERROR: (Parent) node with id=" + pid + " does not exists.");
                    return null;
                }
            }
            node = new D3Node(pid, id, text, data);
            this.nmap[id] = node;
            parent.addChild(node, this.type);
        }
        return {
            node: node,
            parent: parent
        };
    };
    d3Api.prototype.getNode = function(sid) {
        if (sid in this.nmap) {
            var node = this.nmap[sid];
            return node;
        }
        return null;
    };
    d3Api.prototype.getElements = function(id) {
        if (id in this.nmap) {
            var node = this.nmap[id];
            return node.elements;
        }
        return null;
    };
    d3Api.prototype.updateNode = function(id, text, data) {
        if (id in this.nmap) {
            var node = this.nmap[id];
            if (text == null && data == null) {
                return node;
            }
            var copy = node.getCopy();
            if (text != null) {
                node.updateText(text);
            }
            if (data != null) {
                node.updateData(data);
            }
            this.core_api.updateVisualization(1, node);
            return copy;
        }
        return null;
    };
    d3Api.prototype.deleteNode = function(id, level) {
        if (id in this.nmap) {
            if (level == undefined) {
                level = 0;
            }
            var node = this.nmap[id];
            var copy = null;
            var parent = null;
            if (level == 0) {
                copy = node.getCopy();
                delete copy.elements;
                var pid = node.getParentId();
                if (pid in this.nmap) {
                    parent = this.nmap[pid];
                    parent.removeChild(node, this.type);
                }
            }
            if (node.clist !== undefined) {
                for (var ii = 0; ii < node.clist.length; ii++) {
                    var cnode = node.clist[ii];
                    if (!cnode.isDummyNode()) {
                        this.deleteNode(cnode.getId(), level + 1);
                    } else {
                        delete cnode;
                    }
                }
                delete node.clist;
            }
            delete this.nmap[id];
            if (level == 0) {
                this.core_api.updateVisualization(1, parent);
                if (node == this.root) {
                    this.root = null;
                }
            }
            return copy;
        }
        return null;
    };
    $.fn.extend({
        d3Factory: {},
        d3Layout: function(type, duration) {
            var container = $(this);
            var id = container.attr("id");
            var api = new d3Api(type, container, duration);
            this.d3Factory[id] = api;
            return api;
        },
        circleLayout: function(duration) {
            return this.d3Layout("circle", duration);
        },
        treeLayout: function(duration) {
            return this.d3Layout("tree", duration);
        }
    });
})(jQuery);

(function(factory) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], factory);
    } else if (typeof module !== "undefined" && module.exports) {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
})(function($, undefined) {
    "use strict";
    if ($.jstree) {
        return;
    }
    var instance_counter = 0, ccp_node = false, ccp_mode = false, ccp_inst = false, themes_loaded = [], src = $("script:last").attr("src"), document = window.document, _node = document.createElement("LI"), _temp1, _temp2;
    _node.setAttribute("role", "treeitem");
    _temp1 = document.createElement("I");
    _temp1.className = "jstree-icon jstree-ocl";
    _temp1.setAttribute("role", "presentation");
    _node.appendChild(_temp1);
    _temp1 = document.createElement("A");
    _temp1.className = "jstree-anchor";
    _temp1.setAttribute("href", "#");
    _temp1.setAttribute("tabindex", "-1");
    _temp2 = document.createElement("I");
    _temp2.className = "jstree-icon jstree-themeicon";
    _temp2.setAttribute("role", "presentation");
    _temp1.appendChild(_temp2);
    _node.appendChild(_temp1);
    _temp1 = _temp2 = null;
    $.jstree = {
        version: "3.3.1",
        defaults: {
            plugins: []
        },
        plugins: {},
        path: src && src.indexOf("/") !== -1 ? src.replace(/\/[^\/]+$/, "") : "",
        idregex: /[\\:&!^|()\[\]<>@*'+~#";.,=\- \/${}%?`]/g,
        root: "#"
    };
    $.jstree.create = function(el, options) {
        var tmp = new $.jstree.core(++instance_counter), opt = options;
        options = $.extend(true, {}, $.jstree.defaults, options);
        if (opt && opt.plugins) {
            options.plugins = opt.plugins;
        }
        $.each(options.plugins, function(i, k) {
            if (i !== "core") {
                tmp = tmp.plugin(k, options[k]);
            }
        });
        $(el).data("jstree", tmp);
        tmp.init(el, options);
        return tmp;
    };
    $.jstree.destroy = function() {
        $(".jstree:jstree").jstree("destroy");
        $(document).off(".jstree");
    };
    $.jstree.core = function(id) {
        this._id = id;
        this._cnt = 0;
        this._wrk = null;
        this._data = {
            core: {
                themes: {
                    name: false,
                    dots: false,
                    icons: false
                },
                selected: [],
                last_error: {},
                working: false,
                worker_queue: [],
                focused: null
            }
        };
    };
    $.jstree.reference = function(needle) {
        var tmp = null, obj = null;
        if (needle && needle.id && (!needle.tagName || !needle.nodeType)) {
            needle = needle.id;
        }
        if (!obj || !obj.length) {
            try {
                obj = $(needle);
            } catch (ignore) {}
        }
        if (!obj || !obj.length) {
            try {
                obj = $("#" + needle.replace($.jstree.idregex, "\\$&"));
            } catch (ignore) {}
        }
        if (obj && obj.length && (obj = obj.closest(".jstree")).length && (obj = obj.data("jstree"))) {
            tmp = obj;
        } else {
            $(".jstree").each(function() {
                var inst = $(this).data("jstree");
                if (inst && inst._model.data[needle]) {
                    tmp = inst;
                    return false;
                }
            });
        }
        return tmp;
    };
    $.fn.jstree = function(arg) {
        var is_method = typeof arg === "string", args = Array.prototype.slice.call(arguments, 1), result = null;
        if (arg === true && !this.length) {
            return false;
        }
        this.each(function() {
            var instance = $.jstree.reference(this), method = is_method && instance ? instance[arg] : null;
            result = is_method && method ? method.apply(instance, args) : null;
            if (!instance && !is_method && (arg === undefined || $.isPlainObject(arg))) {
                $.jstree.create(this, arg);
            }
            if (instance && !is_method || arg === true) {
                result = instance || false;
            }
            if (result !== null && result !== undefined) {
                return false;
            }
        });
        return result !== null && result !== undefined ? result : this;
    };
    $.expr[":"].jstree = $.expr.createPseudo(function(search) {
        return function(a) {
            return $(a).hasClass("jstree") && $(a).data("jstree") !== undefined;
        };
    });
    $.jstree.defaults.core = {
        data: false,
        strings: false,
        check_callback: false,
        error: $.noop,
        animation: 200,
        multiple: true,
        themes: {
            name: false,
            url: false,
            dir: false,
            dots: true,
            icons: true,
            stripes: false,
            variant: false,
            responsive: false
        },
        expand_selected_onload: true,
        worker: true,
        force_text: false,
        dblclick_toggle: true
    };
    $.jstree.core.prototype = {
        plugin: function(deco, opts) {
            var Child = $.jstree.plugins[deco];
            if (Child) {
                this._data[deco] = {};
                Child.prototype = this;
                return new Child(opts, this);
            }
            return this;
        },
        init: function(el, options) {
            this._model = {
                data: {},
                changed: [],
                force_full_redraw: false,
                redraw_timeout: false,
                default_state: {
                    loaded: true,
                    opened: false,
                    selected: false,
                    disabled: false
                }
            };
            this._model.data[$.jstree.root] = {
                id: $.jstree.root,
                parent: null,
                parents: [],
                children: [],
                children_d: [],
                state: {
                    loaded: false
                }
            };
            this.element = $(el).addClass("jstree jstree-" + this._id);
            this.settings = options;
            this._data.core.ready = false;
            this._data.core.loaded = false;
            this._data.core.rtl = this.element.css("direction") === "rtl";
            this.element[this._data.core.rtl ? "addClass" : "removeClass"]("jstree-rtl");
            this.element.attr("role", "tree");
            if (this.settings.core.multiple) {
                this.element.attr("aria-multiselectable", true);
            }
            if (!this.element.attr("tabindex")) {
                this.element.attr("tabindex", "0");
            }
            this.bind();
            this.trigger("init");
            this._data.core.original_container_html = this.element.find(" > ul > li").clone(true);
            this._data.core.original_container_html.find("li").addBack().contents().filter(function() {
                return this.nodeType === 3 && (!this.nodeValue || /^\s+$/.test(this.nodeValue));
            }).remove();
            this.element.html("<" + "ul class='jstree-container-ul jstree-children' role='group'><" + "li id='j" + this._id + "_loading' class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='tree-item'><i class='jstree-icon jstree-ocl'></i><" + "a class='jstree-anchor' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>" + this.get_string("Loading ...") + "</a></li></ul>");
            this.element.attr("aria-activedescendant", "j" + this._id + "_loading");
            this._data.core.li_height = this.get_container_ul().children("li").first().height() || 24;
            this.trigger("loading");
            this.load_node($.jstree.root);
        },
        destroy: function(keep_html) {
            if (this._wrk) {
                try {
                    window.URL.revokeObjectURL(this._wrk);
                    this._wrk = null;
                } catch (ignore) {}
            }
            if (!keep_html) {
                this.element.empty();
            }
            this.teardown();
        },
        teardown: function() {
            this.unbind();
            this.element.removeClass("jstree").removeData("jstree").find("[class^='jstree']").addBack().attr("class", function() {
                return this.className.replace(/jstree[^ ]*|$/gi, "");
            });
            this.element = null;
        },
        bind: function() {
            var word = "", tout = null, was_click = 0;
            this.element.on("dblclick.jstree", function(e) {
                if (e.target.tagName && e.target.tagName.toLowerCase() === "input") {
                    return true;
                }
                if (document.selection && document.selection.empty) {
                    document.selection.empty();
                } else {
                    if (window.getSelection) {
                        var sel = window.getSelection();
                        try {
                            sel.removeAllRanges();
                            sel.collapse();
                        } catch (ignore) {}
                    }
                }
            }).on("mousedown.jstree", $.proxy(function(e) {
                if (e.target === this.element[0]) {
                    e.preventDefault();
                    was_click = +new Date();
                }
            }, this)).on("mousedown.jstree", ".jstree-ocl", function(e) {
                e.preventDefault();
            }).on("click.jstree", ".jstree-ocl", $.proxy(function(e) {
                this.toggle_node(e.target);
            }, this)).on("dblclick.jstree", ".jstree-anchor", $.proxy(function(e) {
                if (e.target.tagName && e.target.tagName.toLowerCase() === "input") {
                    return true;
                }
                if (this.settings.core.dblclick_toggle) {
                    this.toggle_node(e.target);
                }
            }, this)).on("click.jstree", ".jstree-anchor", $.proxy(function(e) {
                e.preventDefault();
                if (e.currentTarget !== document.activeElement) {
                    $(e.currentTarget).focus();
                }
                this.activate_node(e.currentTarget, e);
            }, this)).on("keydown.jstree", ".jstree-anchor", $.proxy(function(e) {
                if (e.target.tagName && e.target.tagName.toLowerCase() === "input") {
                    return true;
                }
                if (e.which !== 32 && e.which !== 13 && (e.shiftKey || e.ctrlKey || e.altKey || e.metaKey)) {
                    return true;
                }
                var o = null;
                if (this._data.core.rtl) {
                    if (e.which === 37) {
                        e.which = 39;
                    } else if (e.which === 39) {
                        e.which = 37;
                    }
                }
                switch (e.which) {
                  case 32:
                    if (e.ctrlKey) {
                        e.type = "click";
                        $(e.currentTarget).trigger(e);
                    }
                    break;

                  case 13:
                    e.type = "click";
                    $(e.currentTarget).trigger(e);
                    break;

                  case 37:
                    e.preventDefault();
                    if (this.is_open(e.currentTarget)) {
                        this.close_node(e.currentTarget);
                    } else {
                        o = this.get_parent(e.currentTarget);
                        if (o && o.id !== $.jstree.root) {
                            this.get_node(o, true).children(".jstree-anchor").focus();
                        }
                    }
                    break;

                  case 38:
                    e.preventDefault();
                    o = this.get_prev_dom(e.currentTarget);
                    if (o && o.length) {
                        o.children(".jstree-anchor").focus();
                    }
                    break;

                  case 39:
                    e.preventDefault();
                    if (this.is_closed(e.currentTarget)) {
                        this.open_node(e.currentTarget, function(o) {
                            this.get_node(o, true).children(".jstree-anchor").focus();
                        });
                    } else if (this.is_open(e.currentTarget)) {
                        o = this.get_node(e.currentTarget, true).children(".jstree-children")[0];
                        if (o) {
                            $(this._firstChild(o)).children(".jstree-anchor").focus();
                        }
                    }
                    break;

                  case 40:
                    e.preventDefault();
                    o = this.get_next_dom(e.currentTarget);
                    if (o && o.length) {
                        o.children(".jstree-anchor").focus();
                    }
                    break;

                  case 106:
                    this.open_all();
                    break;

                  case 36:
                    e.preventDefault();
                    o = this._firstChild(this.get_container_ul()[0]);
                    if (o) {
                        $(o).children(".jstree-anchor").filter(":visible").focus();
                    }
                    break;

                  case 35:
                    e.preventDefault();
                    this.element.find(".jstree-anchor").filter(":visible").last().focus();
                    break;

                  case 113:
                    e.preventDefault();
                    this.edit(e.currentTarget);
                    break;

                  default:
                    break;
                }
            }, this)).on("load_node.jstree", $.proxy(function(e, data) {
                if (data.status) {
                    if (data.node.id === $.jstree.root && !this._data.core.loaded) {
                        this._data.core.loaded = true;
                        if (this._firstChild(this.get_container_ul()[0])) {
                            this.element.attr("aria-activedescendant", this._firstChild(this.get_container_ul()[0]).id);
                        }
                        this.trigger("loaded");
                    }
                    if (!this._data.core.ready) {
                        setTimeout($.proxy(function() {
                            if (this.element && !this.get_container_ul().find(".jstree-loading").length) {
                                this._data.core.ready = true;
                                if (this._data.core.selected.length) {
                                    if (this.settings.core.expand_selected_onload) {
                                        var tmp = [], i, j;
                                        for (i = 0, j = this._data.core.selected.length; i < j; i++) {
                                            tmp = tmp.concat(this._model.data[this._data.core.selected[i]].parents);
                                        }
                                        tmp = $.vakata.array_unique(tmp);
                                        for (i = 0, j = tmp.length; i < j; i++) {
                                            this.open_node(tmp[i], false, 0);
                                        }
                                    }
                                    this.trigger("changed", {
                                        action: "ready",
                                        selected: this._data.core.selected
                                    });
                                }
                                this.trigger("ready");
                            }
                        }, this), 0);
                    }
                }
            }, this)).on("keypress.jstree", $.proxy(function(e) {
                if (e.target.tagName && e.target.tagName.toLowerCase() === "input") {
                    return true;
                }
                if (tout) {
                    clearTimeout(tout);
                }
                tout = setTimeout(function() {
                    word = "";
                }, 500);
                var chr = String.fromCharCode(e.which).toLowerCase(), col = this.element.find(".jstree-anchor").filter(":visible"), ind = col.index(document.activeElement) || 0, end = false;
                word += chr;
                if (word.length > 1) {
                    col.slice(ind).each($.proxy(function(i, v) {
                        if ($(v).text().toLowerCase().indexOf(word) === 0) {
                            $(v).focus();
                            end = true;
                            return false;
                        }
                    }, this));
                    if (end) {
                        return;
                    }
                    col.slice(0, ind).each($.proxy(function(i, v) {
                        if ($(v).text().toLowerCase().indexOf(word) === 0) {
                            $(v).focus();
                            end = true;
                            return false;
                        }
                    }, this));
                    if (end) {
                        return;
                    }
                }
                if (new RegExp("^" + chr.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "+$").test(word)) {
                    col.slice(ind + 1).each($.proxy(function(i, v) {
                        if ($(v).text().toLowerCase().charAt(0) === chr) {
                            $(v).focus();
                            end = true;
                            return false;
                        }
                    }, this));
                    if (end) {
                        return;
                    }
                    col.slice(0, ind + 1).each($.proxy(function(i, v) {
                        if ($(v).text().toLowerCase().charAt(0) === chr) {
                            $(v).focus();
                            end = true;
                            return false;
                        }
                    }, this));
                    if (end) {
                        return;
                    }
                }
            }, this)).on("init.jstree", $.proxy(function() {
                var s = this.settings.core.themes;
                this._data.core.themes.dots = s.dots;
                this._data.core.themes.stripes = s.stripes;
                this._data.core.themes.icons = s.icons;
                this.set_theme(s.name || "default", s.url);
                this.set_theme_variant(s.variant);
            }, this)).on("loading.jstree", $.proxy(function() {
                this[this._data.core.themes.dots ? "show_dots" : "hide_dots"]();
                this[this._data.core.themes.icons ? "show_icons" : "hide_icons"]();
                this[this._data.core.themes.stripes ? "show_stripes" : "hide_stripes"]();
            }, this)).on("blur.jstree", ".jstree-anchor", $.proxy(function(e) {
                this._data.core.focused = null;
                $(e.currentTarget).filter(".jstree-hovered").mouseleave();
                this.element.attr("tabindex", "0");
            }, this)).on("focus.jstree", ".jstree-anchor", $.proxy(function(e) {
                var tmp = this.get_node(e.currentTarget);
                if (tmp && tmp.id) {
                    this._data.core.focused = tmp.id;
                }
                this.element.find(".jstree-hovered").not(e.currentTarget).mouseleave();
                $(e.currentTarget).mouseenter();
                this.element.attr("tabindex", "-1");
            }, this)).on("focus.jstree", $.proxy(function() {
                if (+new Date() - was_click > 500 && !this._data.core.focused) {
                    was_click = 0;
                    var act = this.get_node(this.element.attr("aria-activedescendant"), true);
                    if (act) {
                        act.find("> .jstree-anchor").focus();
                    }
                }
            }, this)).on("mouseenter.jstree", ".jstree-anchor", $.proxy(function(e) {
                this.hover_node(e.currentTarget);
            }, this)).on("mouseleave.jstree", ".jstree-anchor", $.proxy(function(e) {
                this.dehover_node(e.currentTarget);
            }, this));
        },
        unbind: function() {
            this.element.off(".jstree");
            $(document).off(".jstree-" + this._id);
        },
        trigger: function(ev, data) {
            if (!data) {
                data = {};
            }
            data.instance = this;
            this.element.triggerHandler(ev.replace(".jstree", "") + ".jstree", data);
        },
        get_container: function() {
            return this.element;
        },
        get_container_ul: function() {
            return this.element.children(".jstree-children").first();
        },
        get_string: function(key) {
            var a = this.settings.core.strings;
            if ($.isFunction(a)) {
                return a.call(this, key);
            }
            if (a && a[key]) {
                return a[key];
            }
            return key;
        },
        _firstChild: function(dom) {
            dom = dom ? dom.firstChild : null;
            while (dom !== null && dom.nodeType !== 1) {
                dom = dom.nextSibling;
            }
            return dom;
        },
        _nextSibling: function(dom) {
            dom = dom ? dom.nextSibling : null;
            while (dom !== null && dom.nodeType !== 1) {
                dom = dom.nextSibling;
            }
            return dom;
        },
        _previousSibling: function(dom) {
            dom = dom ? dom.previousSibling : null;
            while (dom !== null && dom.nodeType !== 1) {
                dom = dom.previousSibling;
            }
            return dom;
        },
        get_node: function(obj, as_dom) {
            if (obj && obj.id) {
                obj = obj.id;
            }
            var dom;
            try {
                if (this._model.data[obj]) {
                    obj = this._model.data[obj];
                } else if (typeof obj === "string" && this._model.data[obj.replace(/^#/, "")]) {
                    obj = this._model.data[obj.replace(/^#/, "")];
                } else if (typeof obj === "string" && (dom = $("#" + obj.replace($.jstree.idregex, "\\$&"), this.element)).length && this._model.data[dom.closest(".jstree-node").attr("id")]) {
                    obj = this._model.data[dom.closest(".jstree-node").attr("id")];
                } else if ((dom = $(obj, this.element)).length && this._model.data[dom.closest(".jstree-node").attr("id")]) {
                    obj = this._model.data[dom.closest(".jstree-node").attr("id")];
                } else if ((dom = $(obj, this.element)).length && dom.hasClass("jstree")) {
                    obj = this._model.data[$.jstree.root];
                } else {
                    return false;
                }
                if (as_dom) {
                    obj = obj.id === $.jstree.root ? this.element : $("#" + obj.id.replace($.jstree.idregex, "\\$&"), this.element);
                }
                return obj;
            } catch (ex) {
                return false;
            }
        },
        get_path: function(obj, glue, ids) {
            obj = obj.parents ? obj : this.get_node(obj);
            if (!obj || obj.id === $.jstree.root || !obj.parents) {
                return false;
            }
            var i, j, p = [];
            p.push(ids ? obj.id : obj.text);
            for (i = 0, j = obj.parents.length; i < j; i++) {
                p.push(ids ? obj.parents[i] : this.get_text(obj.parents[i]));
            }
            p = p.reverse().slice(1);
            return glue ? p.join(glue) : p;
        },
        get_next_dom: function(obj, strict) {
            var tmp;
            obj = this.get_node(obj, true);
            if (obj[0] === this.element[0]) {
                tmp = this._firstChild(this.get_container_ul()[0]);
                while (tmp && tmp.offsetHeight === 0) {
                    tmp = this._nextSibling(tmp);
                }
                return tmp ? $(tmp) : false;
            }
            if (!obj || !obj.length) {
                return false;
            }
            if (strict) {
                tmp = obj[0];
                do {
                    tmp = this._nextSibling(tmp);
                } while (tmp && tmp.offsetHeight === 0);
                return tmp ? $(tmp) : false;
            }
            if (obj.hasClass("jstree-open")) {
                tmp = this._firstChild(obj.children(".jstree-children")[0]);
                while (tmp && tmp.offsetHeight === 0) {
                    tmp = this._nextSibling(tmp);
                }
                if (tmp !== null) {
                    return $(tmp);
                }
            }
            tmp = obj[0];
            do {
                tmp = this._nextSibling(tmp);
            } while (tmp && tmp.offsetHeight === 0);
            if (tmp !== null) {
                return $(tmp);
            }
            return obj.parentsUntil(".jstree", ".jstree-node").nextAll(".jstree-node:visible").first();
        },
        get_prev_dom: function(obj, strict) {
            var tmp;
            obj = this.get_node(obj, true);
            if (obj[0] === this.element[0]) {
                tmp = this.get_container_ul()[0].lastChild;
                while (tmp && tmp.offsetHeight === 0) {
                    tmp = this._previousSibling(tmp);
                }
                return tmp ? $(tmp) : false;
            }
            if (!obj || !obj.length) {
                return false;
            }
            if (strict) {
                tmp = obj[0];
                do {
                    tmp = this._previousSibling(tmp);
                } while (tmp && tmp.offsetHeight === 0);
                return tmp ? $(tmp) : false;
            }
            tmp = obj[0];
            do {
                tmp = this._previousSibling(tmp);
            } while (tmp && tmp.offsetHeight === 0);
            if (tmp !== null) {
                obj = $(tmp);
                while (obj.hasClass("jstree-open")) {
                    obj = obj.children(".jstree-children").first().children(".jstree-node:visible:last");
                }
                return obj;
            }
            tmp = obj[0].parentNode.parentNode;
            return tmp && tmp.className && tmp.className.indexOf("jstree-node") !== -1 ? $(tmp) : false;
        },
        get_parent: function(obj) {
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            return obj.parent;
        },
        get_children_dom: function(obj) {
            obj = this.get_node(obj, true);
            if (obj[0] === this.element[0]) {
                return this.get_container_ul().children(".jstree-node");
            }
            if (!obj || !obj.length) {
                return false;
            }
            return obj.children(".jstree-children").children(".jstree-node");
        },
        is_parent: function(obj) {
            obj = this.get_node(obj);
            return obj && (obj.state.loaded === false || obj.children.length > 0);
        },
        is_loaded: function(obj) {
            obj = this.get_node(obj);
            return obj && obj.state.loaded;
        },
        is_loading: function(obj) {
            obj = this.get_node(obj);
            return obj && obj.state && obj.state.loading;
        },
        is_open: function(obj) {
            obj = this.get_node(obj);
            return obj && obj.state.opened;
        },
        is_closed: function(obj) {
            obj = this.get_node(obj);
            return obj && this.is_parent(obj) && !obj.state.opened;
        },
        is_leaf: function(obj) {
            return !this.is_parent(obj);
        },
        load_node: function(obj, callback) {
            var k, l, i, j, c;
            if ($.isArray(obj)) {
                this._load_nodes(obj.slice(), callback);
                return true;
            }
            obj = this.get_node(obj);
            if (!obj) {
                if (callback) {
                    callback.call(this, obj, false);
                }
                return false;
            }
            if (obj.state.loaded) {
                obj.state.loaded = false;
                for (i = 0, j = obj.parents.length; i < j; i++) {
                    this._model.data[obj.parents[i]].children_d = $.vakata.array_filter(this._model.data[obj.parents[i]].children_d, function(v) {
                        return $.inArray(v, obj.children_d) === -1;
                    });
                }
                for (k = 0, l = obj.children_d.length; k < l; k++) {
                    if (this._model.data[obj.children_d[k]].state.selected) {
                        c = true;
                    }
                    delete this._model.data[obj.children_d[k]];
                }
                if (c) {
                    this._data.core.selected = $.vakata.array_filter(this._data.core.selected, function(v) {
                        return $.inArray(v, obj.children_d) === -1;
                    });
                }
                obj.children = [];
                obj.children_d = [];
                if (c) {
                    this.trigger("changed", {
                        action: "load_node",
                        node: obj,
                        selected: this._data.core.selected
                    });
                }
            }
            obj.state.failed = false;
            obj.state.loading = true;
            this.get_node(obj, true).addClass("jstree-loading").attr("aria-busy", true);
            this._load_node(obj, $.proxy(function(status) {
                obj = this._model.data[obj.id];
                obj.state.loading = false;
                obj.state.loaded = status;
                obj.state.failed = !obj.state.loaded;
                var dom = this.get_node(obj, true), i = 0, j = 0, m = this._model.data, has_children = false;
                for (i = 0, j = obj.children.length; i < j; i++) {
                    if (m[obj.children[i]] && !m[obj.children[i]].state.hidden) {
                        has_children = true;
                        break;
                    }
                }
                if (obj.state.loaded && dom && dom.length) {
                    dom.removeClass("jstree-closed jstree-open jstree-leaf");
                    if (!has_children) {
                        dom.addClass("jstree-leaf");
                    } else {
                        if (obj.id !== "#") {
                            dom.addClass(obj.state.opened ? "jstree-open" : "jstree-closed");
                        }
                    }
                }
                dom.removeClass("jstree-loading").attr("aria-busy", false);
                this.trigger("load_node", {
                    node: obj,
                    status: status
                });
                if (callback) {
                    callback.call(this, obj, status);
                }
            }, this));
            return true;
        },
        _load_nodes: function(nodes, callback, is_callback, force_reload) {
            var r = true, c = function() {
                this._load_nodes(nodes, callback, true);
            }, m = this._model.data, i, j, tmp = [];
            for (i = 0, j = nodes.length; i < j; i++) {
                if (m[nodes[i]] && (!m[nodes[i]].state.loaded && !m[nodes[i]].state.failed || !is_callback && force_reload)) {
                    if (!this.is_loading(nodes[i])) {
                        this.load_node(nodes[i], c);
                    }
                    r = false;
                }
            }
            if (r) {
                for (i = 0, j = nodes.length; i < j; i++) {
                    if (m[nodes[i]] && m[nodes[i]].state.loaded) {
                        tmp.push(nodes[i]);
                    }
                }
                if (callback && !callback.done) {
                    callback.call(this, tmp);
                    callback.done = true;
                }
            }
        },
        load_all: function(obj, callback) {
            if (!obj) {
                obj = $.jstree.root;
            }
            obj = this.get_node(obj);
            if (!obj) {
                return false;
            }
            var to_load = [], m = this._model.data, c = m[obj.id].children_d, i, j;
            if (obj.state && !obj.state.loaded) {
                to_load.push(obj.id);
            }
            for (i = 0, j = c.length; i < j; i++) {
                if (m[c[i]] && m[c[i]].state && !m[c[i]].state.loaded) {
                    to_load.push(c[i]);
                }
            }
            if (to_load.length) {
                this._load_nodes(to_load, function() {
                    this.load_all(obj, callback);
                });
            } else {
                if (callback) {
                    callback.call(this, obj);
                }
                this.trigger("load_all", {
                    node: obj
                });
            }
        },
        _load_node: function(obj, callback) {
            var s = this.settings.core.data, t;
            if (!s) {
                if (obj.id === $.jstree.root) {
                    return this._append_html_data(obj, this._data.core.original_container_html.clone(true), function(status) {
                        callback.call(this, status);
                    });
                } else {
                    return callback.call(this, false);
                }
            }
            if ($.isFunction(s)) {
                return s.call(this, obj, $.proxy(function(d) {
                    if (d === false) {
                        callback.call(this, false);
                    } else {
                        this[typeof d === "string" ? "_append_html_data" : "_append_json_data"](obj, typeof d === "string" ? $($.parseHTML(d)).filter(function() {
                            return this.nodeType !== 3;
                        }) : d, function(status) {
                            callback.call(this, status);
                        });
                    }
                }, this));
            }
            if (typeof s === "object") {
                if (s.url) {
                    s = $.extend(true, {}, s);
                    if ($.isFunction(s.url)) {
                        s.url = s.url.call(this, obj);
                    }
                    if ($.isFunction(s.data)) {
                        s.data = s.data.call(this, obj);
                    }
                    return $.ajax(s).done($.proxy(function(d, t, x) {
                        var type = x.getResponseHeader("Content-Type");
                        if (type && type.indexOf("json") !== -1 || typeof d === "object") {
                            return this._append_json_data(obj, d, function(status) {
                                callback.call(this, status);
                            });
                        }
                        if (type && type.indexOf("html") !== -1 || typeof d === "string") {
                            return this._append_html_data(obj, $($.parseHTML(d)).filter(function() {
                                return this.nodeType !== 3;
                            }), function(status) {
                                callback.call(this, status);
                            });
                        }
                        this._data.core.last_error = {
                            error: "ajax",
                            plugin: "core",
                            id: "core_04",
                            reason: "Could not load node",
                            data: JSON.stringify({
                                id: obj.id,
                                xhr: x
                            })
                        };
                        this.settings.core.error.call(this, this._data.core.last_error);
                        return callback.call(this, false);
                    }, this)).fail($.proxy(function(f) {
                        callback.call(this, false);
                        this._data.core.last_error = {
                            error: "ajax",
                            plugin: "core",
                            id: "core_04",
                            reason: "Could not load node",
                            data: JSON.stringify({
                                id: obj.id,
                                xhr: f
                            })
                        };
                        this.settings.core.error.call(this, this._data.core.last_error);
                    }, this));
                }
                t = $.isArray(s) || $.isPlainObject(s) ? JSON.parse(JSON.stringify(s)) : s;
                if (obj.id === $.jstree.root) {
                    return this._append_json_data(obj, t, function(status) {
                        callback.call(this, status);
                    });
                } else {
                    this._data.core.last_error = {
                        error: "nodata",
                        plugin: "core",
                        id: "core_05",
                        reason: "Could not load node",
                        data: JSON.stringify({
                            id: obj.id
                        })
                    };
                    this.settings.core.error.call(this, this._data.core.last_error);
                    return callback.call(this, false);
                }
            }
            if (typeof s === "string") {
                if (obj.id === $.jstree.root) {
                    return this._append_html_data(obj, $($.parseHTML(s)).filter(function() {
                        return this.nodeType !== 3;
                    }), function(status) {
                        callback.call(this, status);
                    });
                } else {
                    this._data.core.last_error = {
                        error: "nodata",
                        plugin: "core",
                        id: "core_06",
                        reason: "Could not load node",
                        data: JSON.stringify({
                            id: obj.id
                        })
                    };
                    this.settings.core.error.call(this, this._data.core.last_error);
                    return callback.call(this, false);
                }
            }
            return callback.call(this, false);
        },
        _node_changed: function(obj) {
            obj = this.get_node(obj);
            if (obj) {
                this._model.changed.push(obj.id);
            }
        },
        _append_html_data: function(dom, data, cb) {
            dom = this.get_node(dom);
            dom.children = [];
            dom.children_d = [];
            var dat = data.is("ul") ? data.children() : data, par = dom.id, chd = [], dpc = [], m = this._model.data, p = m[par], s = this._data.core.selected.length, tmp, i, j;
            dat.each($.proxy(function(i, v) {
                tmp = this._parse_model_from_html($(v), par, p.parents.concat());
                if (tmp) {
                    chd.push(tmp);
                    dpc.push(tmp);
                    if (m[tmp].children_d.length) {
                        dpc = dpc.concat(m[tmp].children_d);
                    }
                }
            }, this));
            p.children = chd;
            p.children_d = dpc;
            for (i = 0, j = p.parents.length; i < j; i++) {
                m[p.parents[i]].children_d = m[p.parents[i]].children_d.concat(dpc);
            }
            this.trigger("model", {
                nodes: dpc,
                parent: par
            });
            if (par !== $.jstree.root) {
                this._node_changed(par);
                this.redraw();
            } else {
                this.get_container_ul().children(".jstree-initial-node").remove();
                this.redraw(true);
            }
            if (this._data.core.selected.length !== s) {
                this.trigger("changed", {
                    action: "model",
                    selected: this._data.core.selected
                });
            }
            cb.call(this, true);
        },
        _append_json_data: function(dom, data, cb, force_processing) {
            if (this.element === null) {
                return;
            }
            dom = this.get_node(dom);
            dom.children = [];
            dom.children_d = [];
            if (data.d) {
                data = data.d;
                if (typeof data === "string") {
                    data = JSON.parse(data);
                }
            }
            if (!$.isArray(data)) {
                data = [ data ];
            }
            var w = null, args = {
                df: this._model.default_state,
                dat: data,
                par: dom.id,
                m: this._model.data,
                t_id: this._id,
                t_cnt: this._cnt,
                sel: this._data.core.selected
            }, func = function(data, undefined) {
                if (data.data) {
                    data = data.data;
                }
                var dat = data.dat, par = data.par, chd = [], dpc = [], add = [], df = data.df, t_id = data.t_id, t_cnt = data.t_cnt, m = data.m, p = m[par], sel = data.sel, tmp, i, j, rslt, parse_flat = function(d, p, ps) {
                    if (!ps) {
                        ps = [];
                    } else {
                        ps = ps.concat();
                    }
                    if (p) {
                        ps.unshift(p);
                    }
                    var tid = d.id.toString(), i, j, c, e, tmp = {
                        id: tid,
                        text: d.text || "",
                        icon: d.icon !== undefined ? d.icon : true,
                        parent: p,
                        parents: ps,
                        children: d.children || [],
                        children_d: d.children_d || [],
                        data: d.data,
                        state: {},
                        li_attr: {
                            id: false
                        },
                        a_attr: {
                            href: "#"
                        },
                        original: false
                    };
                    for (i in df) {
                        if (df.hasOwnProperty(i)) {
                            tmp.state[i] = df[i];
                        }
                    }
                    if (d && d.data && d.data.jstree && d.data.jstree.icon) {
                        tmp.icon = d.data.jstree.icon;
                    }
                    if (tmp.icon === undefined || tmp.icon === null || tmp.icon === "") {
                        tmp.icon = true;
                    }
                    if (d && d.data) {
                        tmp.data = d.data;
                        if (d.data.jstree) {
                            for (i in d.data.jstree) {
                                if (d.data.jstree.hasOwnProperty(i)) {
                                    tmp.state[i] = d.data.jstree[i];
                                }
                            }
                        }
                    }
                    if (d && typeof d.state === "object") {
                        for (i in d.state) {
                            if (d.state.hasOwnProperty(i)) {
                                tmp.state[i] = d.state[i];
                            }
                        }
                    }
                    if (d && typeof d.li_attr === "object") {
                        for (i in d.li_attr) {
                            if (d.li_attr.hasOwnProperty(i)) {
                                tmp.li_attr[i] = d.li_attr[i];
                            }
                        }
                    }
                    if (!tmp.li_attr.id) {
                        tmp.li_attr.id = tid;
                    }
                    if (d && typeof d.a_attr === "object") {
                        for (i in d.a_attr) {
                            if (d.a_attr.hasOwnProperty(i)) {
                                tmp.a_attr[i] = d.a_attr[i];
                            }
                        }
                    }
                    if (d && d.children && d.children === true) {
                        tmp.state.loaded = false;
                        tmp.children = [];
                        tmp.children_d = [];
                    }
                    m[tmp.id] = tmp;
                    for (i = 0, j = tmp.children.length; i < j; i++) {
                        c = parse_flat(m[tmp.children[i]], tmp.id, ps);
                        e = m[c];
                        tmp.children_d.push(c);
                        if (e.children_d.length) {
                            tmp.children_d = tmp.children_d.concat(e.children_d);
                        }
                    }
                    delete d.data;
                    delete d.children;
                    m[tmp.id].original = d;
                    if (tmp.state.selected) {
                        add.push(tmp.id);
                    }
                    return tmp.id;
                }, parse_nest = function(d, p, ps) {
                    if (!ps) {
                        ps = [];
                    } else {
                        ps = ps.concat();
                    }
                    if (p) {
                        ps.unshift(p);
                    }
                    var tid = false, i, j, c, e, tmp;
                    do {
                        tid = "j" + t_id + "_" + ++t_cnt;
                    } while (m[tid]);
                    tmp = {
                        id: false,
                        text: typeof d === "string" ? d : "",
                        icon: typeof d === "object" && d.icon !== undefined ? d.icon : true,
                        parent: p,
                        parents: ps,
                        children: [],
                        children_d: [],
                        data: null,
                        state: {},
                        li_attr: {
                            id: false
                        },
                        a_attr: {
                            href: "#"
                        },
                        original: false
                    };
                    for (i in df) {
                        if (df.hasOwnProperty(i)) {
                            tmp.state[i] = df[i];
                        }
                    }
                    if (d && d.id) {
                        tmp.id = d.id.toString();
                    }
                    if (d && d.text) {
                        tmp.text = d.text;
                    }
                    if (d && d.data && d.data.jstree && d.data.jstree.icon) {
                        tmp.icon = d.data.jstree.icon;
                    }
                    if (tmp.icon === undefined || tmp.icon === null || tmp.icon === "") {
                        tmp.icon = true;
                    }
                    if (d && d.data) {
                        tmp.data = d.data;
                        if (d.data.jstree) {
                            for (i in d.data.jstree) {
                                if (d.data.jstree.hasOwnProperty(i)) {
                                    tmp.state[i] = d.data.jstree[i];
                                }
                            }
                        }
                    }
                    if (d && typeof d.state === "object") {
                        for (i in d.state) {
                            if (d.state.hasOwnProperty(i)) {
                                tmp.state[i] = d.state[i];
                            }
                        }
                    }
                    if (d && typeof d.li_attr === "object") {
                        for (i in d.li_attr) {
                            if (d.li_attr.hasOwnProperty(i)) {
                                tmp.li_attr[i] = d.li_attr[i];
                            }
                        }
                    }
                    if (tmp.li_attr.id && !tmp.id) {
                        tmp.id = tmp.li_attr.id.toString();
                    }
                    if (!tmp.id) {
                        tmp.id = tid;
                    }
                    if (!tmp.li_attr.id) {
                        tmp.li_attr.id = tmp.id;
                    }
                    if (d && typeof d.a_attr === "object") {
                        for (i in d.a_attr) {
                            if (d.a_attr.hasOwnProperty(i)) {
                                tmp.a_attr[i] = d.a_attr[i];
                            }
                        }
                    }
                    if (d && d.children && d.children.length) {
                        for (i = 0, j = d.children.length; i < j; i++) {
                            c = parse_nest(d.children[i], tmp.id, ps);
                            e = m[c];
                            tmp.children.push(c);
                            if (e.children_d.length) {
                                tmp.children_d = tmp.children_d.concat(e.children_d);
                            }
                        }
                        tmp.children_d = tmp.children_d.concat(tmp.children);
                    }
                    if (d && d.children && d.children === true) {
                        tmp.state.loaded = false;
                        tmp.children = [];
                        tmp.children_d = [];
                    }
                    delete d.data;
                    delete d.children;
                    tmp.original = d;
                    m[tmp.id] = tmp;
                    if (tmp.state.selected) {
                        add.push(tmp.id);
                    }
                    return tmp.id;
                };
                if (dat.length && dat[0].id !== undefined && dat[0].parent !== undefined) {
                    for (i = 0, j = dat.length; i < j; i++) {
                        if (!dat[i].children) {
                            dat[i].children = [];
                        }
                        m[dat[i].id.toString()] = dat[i];
                    }
                    for (i = 0, j = dat.length; i < j; i++) {
                        m[dat[i].parent.toString()].children.push(dat[i].id.toString());
                        p.children_d.push(dat[i].id.toString());
                    }
                    for (i = 0, j = p.children.length; i < j; i++) {
                        tmp = parse_flat(m[p.children[i]], par, p.parents.concat());
                        dpc.push(tmp);
                        if (m[tmp].children_d.length) {
                            dpc = dpc.concat(m[tmp].children_d);
                        }
                    }
                    for (i = 0, j = p.parents.length; i < j; i++) {
                        m[p.parents[i]].children_d = m[p.parents[i]].children_d.concat(dpc);
                    }
                    rslt = {
                        cnt: t_cnt,
                        mod: m,
                        sel: sel,
                        par: par,
                        dpc: dpc,
                        add: add
                    };
                } else {
                    for (i = 0, j = dat.length; i < j; i++) {
                        tmp = parse_nest(dat[i], par, p.parents.concat());
                        if (tmp) {
                            chd.push(tmp);
                            dpc.push(tmp);
                            if (m[tmp].children_d.length) {
                                dpc = dpc.concat(m[tmp].children_d);
                            }
                        }
                    }
                    p.children = chd;
                    p.children_d = dpc;
                    for (i = 0, j = p.parents.length; i < j; i++) {
                        m[p.parents[i]].children_d = m[p.parents[i]].children_d.concat(dpc);
                    }
                    rslt = {
                        cnt: t_cnt,
                        mod: m,
                        sel: sel,
                        par: par,
                        dpc: dpc,
                        add: add
                    };
                }
                if (typeof window === "undefined" || typeof window.document === "undefined") {
                    postMessage(rslt);
                } else {
                    return rslt;
                }
            }, rslt = function(rslt, worker) {
                if (this.element === null) {
                    return;
                }
                this._cnt = rslt.cnt;
                var i, m = this._model.data;
                for (i in m) {
                    if (m.hasOwnProperty(i) && m[i].state && m[i].state.loading && rslt.mod[i]) {
                        rslt.mod[i].state.loading = true;
                    }
                }
                this._model.data = rslt.mod;
                if (worker) {
                    var j, a = rslt.add, r = rslt.sel, s = this._data.core.selected.slice();
                    m = this._model.data;
                    if (r.length !== s.length || $.vakata.array_unique(r.concat(s)).length !== r.length) {
                        for (i = 0, j = r.length; i < j; i++) {
                            if ($.inArray(r[i], a) === -1 && $.inArray(r[i], s) === -1) {
                                m[r[i]].state.selected = false;
                            }
                        }
                        for (i = 0, j = s.length; i < j; i++) {
                            if ($.inArray(s[i], r) === -1) {
                                m[s[i]].state.selected = true;
                            }
                        }
                    }
                }
                if (rslt.add.length) {
                    this._data.core.selected = this._data.core.selected.concat(rslt.add);
                }
                this.trigger("model", {
                    nodes: rslt.dpc,
                    parent: rslt.par
                });
                if (rslt.par !== $.jstree.root) {
                    this._node_changed(rslt.par);
                    this.redraw();
                } else {
                    this.redraw(true);
                }
                if (rslt.add.length) {
                    this.trigger("changed", {
                        action: "model",
                        selected: this._data.core.selected
                    });
                }
                cb.call(this, true);
            };
            if (this.settings.core.worker && window.Blob && window.URL && window.Worker) {
                try {
                    if (this._wrk === null) {
                        this._wrk = window.URL.createObjectURL(new window.Blob([ "self.onmessage = " + func.toString() ], {
                            type: "text/javascript"
                        }));
                    }
                    if (!this._data.core.working || force_processing) {
                        this._data.core.working = true;
                        w = new window.Worker(this._wrk);
                        w.onmessage = $.proxy(function(e) {
                            rslt.call(this, e.data, true);
                            try {
                                w.terminate();
                                w = null;
                            } catch (ignore) {}
                            if (this._data.core.worker_queue.length) {
                                this._append_json_data.apply(this, this._data.core.worker_queue.shift());
                            } else {
                                this._data.core.working = false;
                            }
                        }, this);
                        if (!args.par) {
                            if (this._data.core.worker_queue.length) {
                                this._append_json_data.apply(this, this._data.core.worker_queue.shift());
                            } else {
                                this._data.core.working = false;
                            }
                        } else {
                            w.postMessage(args);
                        }
                    } else {
                        this._data.core.worker_queue.push([ dom, data, cb, true ]);
                    }
                } catch (e) {
                    rslt.call(this, func(args), false);
                    if (this._data.core.worker_queue.length) {
                        this._append_json_data.apply(this, this._data.core.worker_queue.shift());
                    } else {
                        this._data.core.working = false;
                    }
                }
            } else {
                rslt.call(this, func(args), false);
            }
        },
        _parse_model_from_html: function(d, p, ps) {
            if (!ps) {
                ps = [];
            } else {
                ps = [].concat(ps);
            }
            if (p) {
                ps.unshift(p);
            }
            var c, e, m = this._model.data, data = {
                id: false,
                text: false,
                icon: true,
                parent: p,
                parents: ps,
                children: [],
                children_d: [],
                data: null,
                state: {},
                li_attr: {
                    id: false
                },
                a_attr: {
                    href: "#"
                },
                original: false
            }, i, tmp, tid;
            for (i in this._model.default_state) {
                if (this._model.default_state.hasOwnProperty(i)) {
                    data.state[i] = this._model.default_state[i];
                }
            }
            tmp = $.vakata.attributes(d, true);
            $.each(tmp, function(i, v) {
                v = $.trim(v);
                if (!v.length) {
                    return true;
                }
                data.li_attr[i] = v;
                if (i === "id") {
                    data.id = v.toString();
                }
            });
            tmp = d.children("a").first();
            if (tmp.length) {
                tmp = $.vakata.attributes(tmp, true);
                $.each(tmp, function(i, v) {
                    v = $.trim(v);
                    if (v.length) {
                        data.a_attr[i] = v;
                    }
                });
            }
            tmp = d.children("a").first().length ? d.children("a").first().clone() : d.clone();
            tmp.children("ins, i, ul").remove();
            tmp = tmp.html();
            tmp = $("<div />").html(tmp);
            data.text = this.settings.core.force_text ? tmp.text() : tmp.html();
            tmp = d.data();
            data.data = tmp ? $.extend(true, {}, tmp) : null;
            data.state.opened = d.hasClass("jstree-open");
            data.state.selected = d.children("a").hasClass("jstree-clicked");
            data.state.disabled = d.children("a").hasClass("jstree-disabled");
            if (data.data && data.data.jstree) {
                for (i in data.data.jstree) {
                    if (data.data.jstree.hasOwnProperty(i)) {
                        data.state[i] = data.data.jstree[i];
                    }
                }
            }
            tmp = d.children("a").children(".jstree-themeicon");
            if (tmp.length) {
                data.icon = tmp.hasClass("jstree-themeicon-hidden") ? false : tmp.attr("rel");
            }
            if (data.state.icon !== undefined) {
                data.icon = data.state.icon;
            }
            if (data.icon === undefined || data.icon === null || data.icon === "") {
                data.icon = true;
            }
            tmp = d.children("ul").children("li");
            do {
                tid = "j" + this._id + "_" + ++this._cnt;
            } while (m[tid]);
            data.id = data.li_attr.id ? data.li_attr.id.toString() : tid;
            if (tmp.length) {
                tmp.each($.proxy(function(i, v) {
                    c = this._parse_model_from_html($(v), data.id, ps);
                    e = this._model.data[c];
                    data.children.push(c);
                    if (e.children_d.length) {
                        data.children_d = data.children_d.concat(e.children_d);
                    }
                }, this));
                data.children_d = data.children_d.concat(data.children);
            } else {
                if (d.hasClass("jstree-closed")) {
                    data.state.loaded = false;
                }
            }
            if (data.li_attr["class"]) {
                data.li_attr["class"] = data.li_attr["class"].replace("jstree-closed", "").replace("jstree-open", "");
            }
            if (data.a_attr["class"]) {
                data.a_attr["class"] = data.a_attr["class"].replace("jstree-clicked", "").replace("jstree-disabled", "");
            }
            m[data.id] = data;
            if (data.state.selected) {
                this._data.core.selected.push(data.id);
            }
            return data.id;
        },
        _parse_model_from_flat_json: function(d, p, ps) {
            if (!ps) {
                ps = [];
            } else {
                ps = ps.concat();
            }
            if (p) {
                ps.unshift(p);
            }
            var tid = d.id.toString(), m = this._model.data, df = this._model.default_state, i, j, c, e, tmp = {
                id: tid,
                text: d.text || "",
                icon: d.icon !== undefined ? d.icon : true,
                parent: p,
                parents: ps,
                children: d.children || [],
                children_d: d.children_d || [],
                data: d.data,
                state: {},
                li_attr: {
                    id: false
                },
                a_attr: {
                    href: "#"
                },
                original: false
            };
            for (i in df) {
                if (df.hasOwnProperty(i)) {
                    tmp.state[i] = df[i];
                }
            }
            if (d && d.data && d.data.jstree && d.data.jstree.icon) {
                tmp.icon = d.data.jstree.icon;
            }
            if (tmp.icon === undefined || tmp.icon === null || tmp.icon === "") {
                tmp.icon = true;
            }
            if (d && d.data) {
                tmp.data = d.data;
                if (d.data.jstree) {
                    for (i in d.data.jstree) {
                        if (d.data.jstree.hasOwnProperty(i)) {
                            tmp.state[i] = d.data.jstree[i];
                        }
                    }
                }
            }
            if (d && typeof d.state === "object") {
                for (i in d.state) {
                    if (d.state.hasOwnProperty(i)) {
                        tmp.state[i] = d.state[i];
                    }
                }
            }
            if (d && typeof d.li_attr === "object") {
                for (i in d.li_attr) {
                    if (d.li_attr.hasOwnProperty(i)) {
                        tmp.li_attr[i] = d.li_attr[i];
                    }
                }
            }
            if (!tmp.li_attr.id) {
                tmp.li_attr.id = tid;
            }
            if (d && typeof d.a_attr === "object") {
                for (i in d.a_attr) {
                    if (d.a_attr.hasOwnProperty(i)) {
                        tmp.a_attr[i] = d.a_attr[i];
                    }
                }
            }
            if (d && d.children && d.children === true) {
                tmp.state.loaded = false;
                tmp.children = [];
                tmp.children_d = [];
            }
            m[tmp.id] = tmp;
            for (i = 0, j = tmp.children.length; i < j; i++) {
                c = this._parse_model_from_flat_json(m[tmp.children[i]], tmp.id, ps);
                e = m[c];
                tmp.children_d.push(c);
                if (e.children_d.length) {
                    tmp.children_d = tmp.children_d.concat(e.children_d);
                }
            }
            delete d.data;
            delete d.children;
            m[tmp.id].original = d;
            if (tmp.state.selected) {
                this._data.core.selected.push(tmp.id);
            }
            return tmp.id;
        },
        _parse_model_from_json: function(d, p, ps) {
            if (!ps) {
                ps = [];
            } else {
                ps = ps.concat();
            }
            if (p) {
                ps.unshift(p);
            }
            var tid = false, i, j, c, e, m = this._model.data, df = this._model.default_state, tmp;
            do {
                tid = "j" + this._id + "_" + ++this._cnt;
            } while (m[tid]);
            tmp = {
                id: false,
                text: typeof d === "string" ? d : "",
                icon: typeof d === "object" && d.icon !== undefined ? d.icon : true,
                parent: p,
                parents: ps,
                children: [],
                children_d: [],
                data: null,
                state: {},
                li_attr: {
                    id: false
                },
                a_attr: {
                    href: "#"
                },
                original: false
            };
            for (i in df) {
                if (df.hasOwnProperty(i)) {
                    tmp.state[i] = df[i];
                }
            }
            if (d && d.id) {
                tmp.id = d.id.toString();
            }
            if (d && d.text) {
                tmp.text = d.text;
            }
            if (d && d.data && d.data.jstree && d.data.jstree.icon) {
                tmp.icon = d.data.jstree.icon;
            }
            if (tmp.icon === undefined || tmp.icon === null || tmp.icon === "") {
                tmp.icon = true;
            }
            if (d && d.data) {
                tmp.data = d.data;
                if (d.data.jstree) {
                    for (i in d.data.jstree) {
                        if (d.data.jstree.hasOwnProperty(i)) {
                            tmp.state[i] = d.data.jstree[i];
                        }
                    }
                }
            }
            if (d && typeof d.state === "object") {
                for (i in d.state) {
                    if (d.state.hasOwnProperty(i)) {
                        tmp.state[i] = d.state[i];
                    }
                }
            }
            if (d && typeof d.li_attr === "object") {
                for (i in d.li_attr) {
                    if (d.li_attr.hasOwnProperty(i)) {
                        tmp.li_attr[i] = d.li_attr[i];
                    }
                }
            }
            if (tmp.li_attr.id && !tmp.id) {
                tmp.id = tmp.li_attr.id.toString();
            }
            if (!tmp.id) {
                tmp.id = tid;
            }
            if (!tmp.li_attr.id) {
                tmp.li_attr.id = tmp.id;
            }
            if (d && typeof d.a_attr === "object") {
                for (i in d.a_attr) {
                    if (d.a_attr.hasOwnProperty(i)) {
                        tmp.a_attr[i] = d.a_attr[i];
                    }
                }
            }
            if (d && d.children && d.children.length) {
                for (i = 0, j = d.children.length; i < j; i++) {
                    c = this._parse_model_from_json(d.children[i], tmp.id, ps);
                    e = m[c];
                    tmp.children.push(c);
                    if (e.children_d.length) {
                        tmp.children_d = tmp.children_d.concat(e.children_d);
                    }
                }
                tmp.children_d = tmp.children_d.concat(tmp.children);
            }
            if (d && d.children && d.children === true) {
                tmp.state.loaded = false;
                tmp.children = [];
                tmp.children_d = [];
            }
            delete d.data;
            delete d.children;
            tmp.original = d;
            m[tmp.id] = tmp;
            if (tmp.state.selected) {
                this._data.core.selected.push(tmp.id);
            }
            return tmp.id;
        },
        _redraw: function() {
            var nodes = this._model.force_full_redraw ? this._model.data[$.jstree.root].children.concat([]) : this._model.changed.concat([]), f = document.createElement("UL"), tmp, i, j, fe = this._data.core.focused;
            for (i = 0, j = nodes.length; i < j; i++) {
                tmp = this.redraw_node(nodes[i], true, this._model.force_full_redraw);
                if (tmp && this._model.force_full_redraw) {
                    f.appendChild(tmp);
                }
            }
            if (this._model.force_full_redraw) {
                f.className = this.get_container_ul()[0].className;
                f.setAttribute("role", "group");
                this.element.empty().append(f);
            }
            if (fe !== null) {
                tmp = this.get_node(fe, true);
                if (tmp && tmp.length && tmp.children(".jstree-anchor")[0] !== document.activeElement) {
                    tmp.children(".jstree-anchor").focus();
                } else {
                    this._data.core.focused = null;
                }
            }
            this._model.force_full_redraw = false;
            this._model.changed = [];
            this.trigger("redraw", {
                nodes: nodes
            });
        },
        redraw: function(full) {
            if (full) {
                this._model.force_full_redraw = true;
            }
            this._redraw();
        },
        draw_children: function(node) {
            var obj = this.get_node(node), i = false, j = false, k = false, d = document;
            if (!obj) {
                return false;
            }
            if (obj.id === $.jstree.root) {
                return this.redraw(true);
            }
            node = this.get_node(node, true);
            if (!node || !node.length) {
                return false;
            }
            node.children(".jstree-children").remove();
            node = node[0];
            if (obj.children.length && obj.state.loaded) {
                k = d.createElement("UL");
                k.setAttribute("role", "group");
                k.className = "jstree-children";
                for (i = 0, j = obj.children.length; i < j; i++) {
                    k.appendChild(this.redraw_node(obj.children[i], true, true));
                }
                node.appendChild(k);
            }
        },
        redraw_node: function(node, deep, is_callback, force_render) {
            var obj = this.get_node(node), par = false, ind = false, old = false, i = false, j = false, k = false, c = "", d = document, m = this._model.data, f = false, s = false, tmp = null, t = 0, l = 0, has_children = false, last_sibling = false;
            if (!obj) {
                return false;
            }
            if (obj.id === $.jstree.root) {
                return this.redraw(true);
            }
            deep = deep || obj.children.length === 0;
            node = !document.querySelector ? document.getElementById(obj.id) : this.element[0].querySelector("#" + ("0123456789".indexOf(obj.id[0]) !== -1 ? "\\3" + obj.id[0] + " " + obj.id.substr(1).replace($.jstree.idregex, "\\$&") : obj.id.replace($.jstree.idregex, "\\$&")));
            if (!node) {
                deep = true;
                if (!is_callback) {
                    par = obj.parent !== $.jstree.root ? $("#" + obj.parent.replace($.jstree.idregex, "\\$&"), this.element)[0] : null;
                    if (par !== null && (!par || !m[obj.parent].state.opened)) {
                        return false;
                    }
                    ind = $.inArray(obj.id, par === null ? m[$.jstree.root].children : m[obj.parent].children);
                }
            } else {
                node = $(node);
                if (!is_callback) {
                    par = node.parent().parent()[0];
                    if (par === this.element[0]) {
                        par = null;
                    }
                    ind = node.index();
                }
                if (!deep && obj.children.length && !node.children(".jstree-children").length) {
                    deep = true;
                }
                if (!deep) {
                    old = node.children(".jstree-children")[0];
                }
                f = node.children(".jstree-anchor")[0] === document.activeElement;
                node.remove();
            }
            node = _node.cloneNode(true);
            c = "jstree-node ";
            for (i in obj.li_attr) {
                if (obj.li_attr.hasOwnProperty(i)) {
                    if (i === "id") {
                        continue;
                    }
                    if (i !== "class") {
                        node.setAttribute(i, obj.li_attr[i]);
                    } else {
                        c += obj.li_attr[i];
                    }
                }
            }
            if (!obj.a_attr.id) {
                obj.a_attr.id = obj.id + "_anchor";
            }
            node.setAttribute("aria-selected", !!obj.state.selected);
            node.setAttribute("aria-level", obj.parents.length);
            node.setAttribute("aria-labelledby", obj.a_attr.id);
            if (obj.state.disabled) {
                node.setAttribute("aria-disabled", true);
            }
            for (i = 0, j = obj.children.length; i < j; i++) {
                if (!m[obj.children[i]].state.hidden) {
                    has_children = true;
                    break;
                }
            }
            if (obj.parent !== null && m[obj.parent] && !obj.state.hidden) {
                i = $.inArray(obj.id, m[obj.parent].children);
                last_sibling = obj.id;
                if (i !== -1) {
                    i++;
                    for (j = m[obj.parent].children.length; i < j; i++) {
                        if (!m[m[obj.parent].children[i]].state.hidden) {
                            last_sibling = m[obj.parent].children[i];
                        }
                        if (last_sibling !== obj.id) {
                            break;
                        }
                    }
                }
            }
            if (obj.state.hidden) {
                c += " jstree-hidden";
            }
            if (obj.state.loaded && !has_children) {
                c += " jstree-leaf";
            } else {
                c += obj.state.opened && obj.state.loaded ? " jstree-open" : " jstree-closed";
                node.setAttribute("aria-expanded", obj.state.opened && obj.state.loaded);
            }
            if (last_sibling === obj.id) {
                c += " jstree-last";
            }
            node.id = obj.id;
            node.className = c;
            c = (obj.state.selected ? " jstree-clicked" : "") + (obj.state.disabled ? " jstree-disabled" : "");
            for (j in obj.a_attr) {
                if (obj.a_attr.hasOwnProperty(j)) {
                    if (j === "href" && obj.a_attr[j] === "#") {
                        continue;
                    }
                    if (j !== "class") {
                        node.childNodes[1].setAttribute(j, obj.a_attr[j]);
                    } else {
                        c += " " + obj.a_attr[j];
                    }
                }
            }
            if (c.length) {
                node.childNodes[1].className = "jstree-anchor " + c;
            }
            if (obj.icon && obj.icon !== true || obj.icon === false) {
                if (obj.icon === false) {
                    node.childNodes[1].childNodes[0].className += " jstree-themeicon-hidden";
                } else if (obj.icon.indexOf("/") === -1 && obj.icon.indexOf(".") === -1) {
                    node.childNodes[1].childNodes[0].className += " " + obj.icon + " jstree-themeicon-custom";
                } else {
                    node.childNodes[1].childNodes[0].style.backgroundImage = 'url("' + obj.icon + '")';
                    node.childNodes[1].childNodes[0].style.backgroundPosition = "center center";
                    node.childNodes[1].childNodes[0].style.backgroundSize = "auto";
                    node.childNodes[1].childNodes[0].className += " jstree-themeicon-custom";
                }
            }
            if (this.settings.core.force_text) {
                node.childNodes[1].appendChild(d.createTextNode(obj.text));
            } else {
                node.childNodes[1].innerHTML += obj.text;
            }
            if (deep && obj.children.length && (obj.state.opened || force_render) && obj.state.loaded) {
                k = d.createElement("UL");
                k.setAttribute("role", "group");
                k.className = "jstree-children";
                for (i = 0, j = obj.children.length; i < j; i++) {
                    k.appendChild(this.redraw_node(obj.children[i], deep, true));
                }
                node.appendChild(k);
            }
            if (old) {
                node.appendChild(old);
            }
            if (!is_callback) {
                if (!par) {
                    par = this.element[0];
                }
                for (i = 0, j = par.childNodes.length; i < j; i++) {
                    if (par.childNodes[i] && par.childNodes[i].className && par.childNodes[i].className.indexOf("jstree-children") !== -1) {
                        tmp = par.childNodes[i];
                        break;
                    }
                }
                if (!tmp) {
                    tmp = d.createElement("UL");
                    tmp.setAttribute("role", "group");
                    tmp.className = "jstree-children";
                    par.appendChild(tmp);
                }
                par = tmp;
                if (ind < par.childNodes.length) {
                    par.insertBefore(node, par.childNodes[ind]);
                } else {
                    par.appendChild(node);
                }
                if (f) {
                    t = this.element[0].scrollTop;
                    l = this.element[0].scrollLeft;
                    node.childNodes[1].focus();
                    this.element[0].scrollTop = t;
                    this.element[0].scrollLeft = l;
                }
            }
            if (obj.state.opened && !obj.state.loaded) {
                obj.state.opened = false;
                setTimeout($.proxy(function() {
                    this.open_node(obj.id, false, 0);
                }, this), 0);
            }
            return node;
        },
        open_node: function(obj, callback, animation) {
            var t1, t2, d, t;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.open_node(obj[t1], callback, animation);
                }
                return true;
            }
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            animation = animation === undefined ? this.settings.core.animation : animation;
            if (!this.is_closed(obj)) {
                if (callback) {
                    callback.call(this, obj, false);
                }
                return false;
            }
            if (!this.is_loaded(obj)) {
                if (this.is_loading(obj)) {
                    return setTimeout($.proxy(function() {
                        this.open_node(obj, callback, animation);
                    }, this), 500);
                }
                this.load_node(obj, function(o, ok) {
                    return ok ? this.open_node(o, callback, animation) : callback ? callback.call(this, o, false) : false;
                });
            } else {
                d = this.get_node(obj, true);
                t = this;
                if (d.length) {
                    if (animation && d.children(".jstree-children").length) {
                        d.children(".jstree-children").stop(true, true);
                    }
                    if (obj.children.length && !this._firstChild(d.children(".jstree-children")[0])) {
                        this.draw_children(obj);
                    }
                    if (!animation) {
                        this.trigger("before_open", {
                            node: obj
                        });
                        d[0].className = d[0].className.replace("jstree-closed", "jstree-open");
                        d[0].setAttribute("aria-expanded", true);
                    } else {
                        this.trigger("before_open", {
                            node: obj
                        });
                        d.children(".jstree-children").css("display", "none").end().removeClass("jstree-closed").addClass("jstree-open").attr("aria-expanded", true).children(".jstree-children").stop(true, true).slideDown(animation, function() {
                            this.style.display = "";
                            if (t.element) {
                                t.trigger("after_open", {
                                    node: obj
                                });
                            }
                        });
                    }
                }
                obj.state.opened = true;
                if (callback) {
                    callback.call(this, obj, true);
                }
                if (!d.length) {
                    this.trigger("before_open", {
                        node: obj
                    });
                }
                this.trigger("open_node", {
                    node: obj
                });
                if (!animation || !d.length) {
                    this.trigger("after_open", {
                        node: obj
                    });
                }
                return true;
            }
        },
        _open_to: function(obj) {
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            var i, j, p = obj.parents;
            for (i = 0, j = p.length; i < j; i += 1) {
                if (i !== $.jstree.root) {
                    this.open_node(p[i], false, 0);
                }
            }
            return $("#" + obj.id.replace($.jstree.idregex, "\\$&"), this.element);
        },
        close_node: function(obj, animation) {
            var t1, t2, t, d;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.close_node(obj[t1], animation);
                }
                return true;
            }
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            if (this.is_closed(obj)) {
                return false;
            }
            animation = animation === undefined ? this.settings.core.animation : animation;
            t = this;
            d = this.get_node(obj, true);
            obj.state.opened = false;
            this.trigger("close_node", {
                node: obj
            });
            if (!d.length) {
                this.trigger("after_close", {
                    node: obj
                });
            } else {
                if (!animation) {
                    d[0].className = d[0].className.replace("jstree-open", "jstree-closed");
                    d.attr("aria-expanded", false).children(".jstree-children").remove();
                    this.trigger("after_close", {
                        node: obj
                    });
                } else {
                    d.children(".jstree-children").attr("style", "display:block !important").end().removeClass("jstree-open").addClass("jstree-closed").attr("aria-expanded", false).children(".jstree-children").stop(true, true).slideUp(animation, function() {
                        this.style.display = "";
                        d.children(".jstree-children").remove();
                        if (t.element) {
                            t.trigger("after_close", {
                                node: obj
                            });
                        }
                    });
                }
            }
        },
        toggle_node: function(obj) {
            var t1, t2;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.toggle_node(obj[t1]);
                }
                return true;
            }
            if (this.is_closed(obj)) {
                return this.open_node(obj);
            }
            if (this.is_open(obj)) {
                return this.close_node(obj);
            }
        },
        open_all: function(obj, animation, original_obj) {
            if (!obj) {
                obj = $.jstree.root;
            }
            obj = this.get_node(obj);
            if (!obj) {
                return false;
            }
            var dom = obj.id === $.jstree.root ? this.get_container_ul() : this.get_node(obj, true), i, j, _this;
            if (!dom.length) {
                for (i = 0, j = obj.children_d.length; i < j; i++) {
                    if (this.is_closed(this._model.data[obj.children_d[i]])) {
                        this._model.data[obj.children_d[i]].state.opened = true;
                    }
                }
                return this.trigger("open_all", {
                    node: obj
                });
            }
            original_obj = original_obj || dom;
            _this = this;
            dom = this.is_closed(obj) ? dom.find(".jstree-closed").addBack() : dom.find(".jstree-closed");
            dom.each(function() {
                _this.open_node(this, function(node, status) {
                    if (status && this.is_parent(node)) {
                        this.open_all(node, animation, original_obj);
                    }
                }, animation || 0);
            });
            if (original_obj.find(".jstree-closed").length === 0) {
                this.trigger("open_all", {
                    node: this.get_node(original_obj)
                });
            }
        },
        close_all: function(obj, animation) {
            if (!obj) {
                obj = $.jstree.root;
            }
            obj = this.get_node(obj);
            if (!obj) {
                return false;
            }
            var dom = obj.id === $.jstree.root ? this.get_container_ul() : this.get_node(obj, true), _this = this, i, j;
            if (dom.length) {
                dom = this.is_open(obj) ? dom.find(".jstree-open").addBack() : dom.find(".jstree-open");
                $(dom.get().reverse()).each(function() {
                    _this.close_node(this, animation || 0);
                });
            }
            for (i = 0, j = obj.children_d.length; i < j; i++) {
                this._model.data[obj.children_d[i]].state.opened = false;
            }
            this.trigger("close_all", {
                node: obj
            });
        },
        is_disabled: function(obj) {
            obj = this.get_node(obj);
            return obj && obj.state && obj.state.disabled;
        },
        enable_node: function(obj) {
            var t1, t2;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.enable_node(obj[t1]);
                }
                return true;
            }
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            obj.state.disabled = false;
            this.get_node(obj, true).children(".jstree-anchor").removeClass("jstree-disabled").attr("aria-disabled", false);
            this.trigger("enable_node", {
                node: obj
            });
        },
        disable_node: function(obj) {
            var t1, t2;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.disable_node(obj[t1]);
                }
                return true;
            }
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            obj.state.disabled = true;
            this.get_node(obj, true).children(".jstree-anchor").addClass("jstree-disabled").attr("aria-disabled", true);
            this.trigger("disable_node", {
                node: obj
            });
        },
        is_hidden: function(obj) {
            obj = this.get_node(obj);
            return obj.state.hidden === true;
        },
        hide_node: function(obj, skip_redraw) {
            var t1, t2;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.hide_node(obj[t1], true);
                }
                if (!skip_redraw) {
                    this.redraw();
                }
                return true;
            }
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            if (!obj.state.hidden) {
                obj.state.hidden = true;
                this._node_changed(obj.parent);
                if (!skip_redraw) {
                    this.redraw();
                }
                this.trigger("hide_node", {
                    node: obj
                });
            }
        },
        show_node: function(obj, skip_redraw) {
            var t1, t2;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.show_node(obj[t1], true);
                }
                if (!skip_redraw) {
                    this.redraw();
                }
                return true;
            }
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            if (obj.state.hidden) {
                obj.state.hidden = false;
                this._node_changed(obj.parent);
                if (!skip_redraw) {
                    this.redraw();
                }
                this.trigger("show_node", {
                    node: obj
                });
            }
        },
        hide_all: function(skip_redraw) {
            var i, m = this._model.data, ids = [];
            for (i in m) {
                if (m.hasOwnProperty(i) && i !== $.jstree.root && !m[i].state.hidden) {
                    m[i].state.hidden = true;
                    ids.push(i);
                }
            }
            this._model.force_full_redraw = true;
            if (!skip_redraw) {
                this.redraw();
            }
            this.trigger("hide_all", {
                nodes: ids
            });
            return ids;
        },
        show_all: function(skip_redraw) {
            var i, m = this._model.data, ids = [];
            for (i in m) {
                if (m.hasOwnProperty(i) && i !== $.jstree.root && m[i].state.hidden) {
                    m[i].state.hidden = false;
                    ids.push(i);
                }
            }
            this._model.force_full_redraw = true;
            if (!skip_redraw) {
                this.redraw();
            }
            this.trigger("show_all", {
                nodes: ids
            });
            return ids;
        },
        activate_node: function(obj, e) {
            if (this.is_disabled(obj)) {
                return false;
            }
            if (!e || typeof e !== "object") {
                e = {};
            }
            this._data.core.last_clicked = this._data.core.last_clicked && this._data.core.last_clicked.id !== undefined ? this.get_node(this._data.core.last_clicked.id) : null;
            if (this._data.core.last_clicked && !this._data.core.last_clicked.state.selected) {
                this._data.core.last_clicked = null;
            }
            if (!this._data.core.last_clicked && this._data.core.selected.length) {
                this._data.core.last_clicked = this.get_node(this._data.core.selected[this._data.core.selected.length - 1]);
            }
            if (!this.settings.core.multiple || !e.metaKey && !e.ctrlKey && !e.shiftKey || e.shiftKey && (!this._data.core.last_clicked || !this.get_parent(obj) || this.get_parent(obj) !== this._data.core.last_clicked.parent)) {
                if (!this.settings.core.multiple && (e.metaKey || e.ctrlKey || e.shiftKey) && this.is_selected(obj)) {
                    this.deselect_node(obj, false, e);
                } else {
                    this.deselect_all(true);
                    this.select_node(obj, false, false, e);
                    this._data.core.last_clicked = this.get_node(obj);
                }
            } else {
                if (e.shiftKey) {
                    var o = this.get_node(obj).id, l = this._data.core.last_clicked.id, p = this.get_node(this._data.core.last_clicked.parent).children, c = false, i, j;
                    for (i = 0, j = p.length; i < j; i += 1) {
                        if (p[i] === o) {
                            c = !c;
                        }
                        if (p[i] === l) {
                            c = !c;
                        }
                        if (!this.is_disabled(p[i]) && (c || p[i] === o || p[i] === l)) {
                            if (!this.is_hidden(p[i])) {
                                this.select_node(p[i], true, false, e);
                            }
                        } else {
                            this.deselect_node(p[i], true, e);
                        }
                    }
                    this.trigger("changed", {
                        action: "select_node",
                        node: this.get_node(obj),
                        selected: this._data.core.selected,
                        event: e
                    });
                } else {
                    if (!this.is_selected(obj)) {
                        this.select_node(obj, false, false, e);
                    } else {
                        this.deselect_node(obj, false, e);
                    }
                }
            }
            this.trigger("activate_node", {
                node: this.get_node(obj),
                event: e
            });
        },
        hover_node: function(obj) {
            obj = this.get_node(obj, true);
            if (!obj || !obj.length || obj.children(".jstree-hovered").length) {
                return false;
            }
            var o = this.element.find(".jstree-hovered"), t = this.element;
            if (o && o.length) {
                this.dehover_node(o);
            }
            obj.children(".jstree-anchor").addClass("jstree-hovered");
            this.trigger("hover_node", {
                node: this.get_node(obj)
            });
            setTimeout(function() {
                t.attr("aria-activedescendant", obj[0].id);
            }, 0);
        },
        dehover_node: function(obj) {
            obj = this.get_node(obj, true);
            if (!obj || !obj.length || !obj.children(".jstree-hovered").length) {
                return false;
            }
            obj.children(".jstree-anchor").removeClass("jstree-hovered");
            this.trigger("dehover_node", {
                node: this.get_node(obj)
            });
        },
        select_node: function(obj, supress_event, prevent_open, e) {
            var dom, t1, t2, th;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.select_node(obj[t1], supress_event, prevent_open, e);
                }
                return true;
            }
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            dom = this.get_node(obj, true);
            if (!obj.state.selected) {
                obj.state.selected = true;
                this._data.core.selected.push(obj.id);
                if (!prevent_open) {
                    dom = this._open_to(obj);
                }
                if (dom && dom.length) {
                    dom.attr("aria-selected", true).children(".jstree-anchor").addClass("jstree-clicked");
                }
                this.trigger("select_node", {
                    node: obj,
                    selected: this._data.core.selected,
                    event: e
                });
                if (!supress_event) {
                    this.trigger("changed", {
                        action: "select_node",
                        node: obj,
                        selected: this._data.core.selected,
                        event: e
                    });
                }
            }
        },
        deselect_node: function(obj, supress_event, e) {
            var t1, t2, dom;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.deselect_node(obj[t1], supress_event, e);
                }
                return true;
            }
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            dom = this.get_node(obj, true);
            if (obj.state.selected) {
                obj.state.selected = false;
                this._data.core.selected = $.vakata.array_remove_item(this._data.core.selected, obj.id);
                if (dom.length) {
                    dom.attr("aria-selected", false).children(".jstree-anchor").removeClass("jstree-clicked");
                }
                this.trigger("deselect_node", {
                    node: obj,
                    selected: this._data.core.selected,
                    event: e
                });
                if (!supress_event) {
                    this.trigger("changed", {
                        action: "deselect_node",
                        node: obj,
                        selected: this._data.core.selected,
                        event: e
                    });
                }
            }
        },
        select_all: function(supress_event) {
            var tmp = this._data.core.selected.concat([]), i, j;
            this._data.core.selected = this._model.data[$.jstree.root].children_d.concat();
            for (i = 0, j = this._data.core.selected.length; i < j; i++) {
                if (this._model.data[this._data.core.selected[i]]) {
                    this._model.data[this._data.core.selected[i]].state.selected = true;
                }
            }
            this.redraw(true);
            this.trigger("select_all", {
                selected: this._data.core.selected
            });
            if (!supress_event) {
                this.trigger("changed", {
                    action: "select_all",
                    selected: this._data.core.selected,
                    old_selection: tmp
                });
            }
        },
        deselect_all: function(supress_event) {
            var tmp = this._data.core.selected.concat([]), i, j;
            for (i = 0, j = this._data.core.selected.length; i < j; i++) {
                if (this._model.data[this._data.core.selected[i]]) {
                    this._model.data[this._data.core.selected[i]].state.selected = false;
                }
            }
            this._data.core.selected = [];
            this.element.find(".jstree-clicked").removeClass("jstree-clicked").parent().attr("aria-selected", false);
            this.trigger("deselect_all", {
                selected: this._data.core.selected,
                node: tmp
            });
            if (!supress_event) {
                this.trigger("changed", {
                    action: "deselect_all",
                    selected: this._data.core.selected,
                    old_selection: tmp
                });
            }
        },
        is_selected: function(obj) {
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            return obj.state.selected;
        },
        get_selected: function(full) {
            return full ? $.map(this._data.core.selected, $.proxy(function(i) {
                return this.get_node(i);
            }, this)) : this._data.core.selected.slice();
        },
        get_top_selected: function(full) {
            var tmp = this.get_selected(true), obj = {}, i, j, k, l;
            for (i = 0, j = tmp.length; i < j; i++) {
                obj[tmp[i].id] = tmp[i];
            }
            for (i = 0, j = tmp.length; i < j; i++) {
                for (k = 0, l = tmp[i].children_d.length; k < l; k++) {
                    if (obj[tmp[i].children_d[k]]) {
                        delete obj[tmp[i].children_d[k]];
                    }
                }
            }
            tmp = [];
            for (i in obj) {
                if (obj.hasOwnProperty(i)) {
                    tmp.push(i);
                }
            }
            return full ? $.map(tmp, $.proxy(function(i) {
                return this.get_node(i);
            }, this)) : tmp;
        },
        get_bottom_selected: function(full) {
            var tmp = this.get_selected(true), obj = [], i, j;
            for (i = 0, j = tmp.length; i < j; i++) {
                if (!tmp[i].children.length) {
                    obj.push(tmp[i].id);
                }
            }
            return full ? $.map(obj, $.proxy(function(i) {
                return this.get_node(i);
            }, this)) : obj;
        },
        get_state: function() {
            var state = {
                core: {
                    open: [],
                    scroll: {
                        left: this.element.scrollLeft(),
                        top: this.element.scrollTop()
                    },
                    selected: []
                }
            }, i;
            for (i in this._model.data) {
                if (this._model.data.hasOwnProperty(i)) {
                    if (i !== $.jstree.root) {
                        if (this._model.data[i].state.opened) {
                            state.core.open.push(i);
                        }
                        if (this._model.data[i].state.selected) {
                            state.core.selected.push(i);
                        }
                    }
                }
            }
            return state;
        },
        set_state: function(state, callback) {
            if (state) {
                if (state.core) {
                    var res, n, t, _this, i;
                    if (state.core.open) {
                        if (!$.isArray(state.core.open) || !state.core.open.length) {
                            delete state.core.open;
                            this.set_state(state, callback);
                        } else {
                            this._load_nodes(state.core.open, function(nodes) {
                                this.open_node(nodes, false, 0);
                                delete state.core.open;
                                this.set_state(state, callback);
                            }, true);
                        }
                        return false;
                    }
                    if (state.core.scroll) {
                        if (state.core.scroll && state.core.scroll.left !== undefined) {
                            this.element.scrollLeft(state.core.scroll.left);
                        }
                        if (state.core.scroll && state.core.scroll.top !== undefined) {
                            this.element.scrollTop(state.core.scroll.top);
                        }
                        delete state.core.scroll;
                        this.set_state(state, callback);
                        return false;
                    }
                    if (state.core.selected) {
                        _this = this;
                        this.deselect_all();
                        $.each(state.core.selected, function(i, v) {
                            _this.select_node(v, false, true);
                        });
                        delete state.core.selected;
                        this.set_state(state, callback);
                        return false;
                    }
                    for (i in state) {
                        if (state.hasOwnProperty(i) && i !== "core" && $.inArray(i, this.settings.plugins) === -1) {
                            delete state[i];
                        }
                    }
                    if ($.isEmptyObject(state.core)) {
                        delete state.core;
                        this.set_state(state, callback);
                        return false;
                    }
                }
                if ($.isEmptyObject(state)) {
                    state = null;
                    if (callback) {
                        callback.call(this);
                    }
                    this.trigger("set_state");
                    return false;
                }
                return true;
            }
            return false;
        },
        refresh: function(skip_loading, forget_state) {
            this._data.core.state = forget_state === true ? {} : this.get_state();
            if (forget_state && $.isFunction(forget_state)) {
                this._data.core.state = forget_state.call(this, this._data.core.state);
            }
            this._cnt = 0;
            this._model.data = {};
            this._model.data[$.jstree.root] = {
                id: $.jstree.root,
                parent: null,
                parents: [],
                children: [],
                children_d: [],
                state: {
                    loaded: false
                }
            };
            this._data.core.selected = [];
            this._data.core.last_clicked = null;
            this._data.core.focused = null;
            var c = this.get_container_ul()[0].className;
            if (!skip_loading) {
                this.element.html("<" + "ul class='" + c + "' role='group'><" + "li class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='treeitem' id='j" + this._id + "_loading'><i class='jstree-icon jstree-ocl'></i><" + "a class='jstree-anchor' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>" + this.get_string("Loading ...") + "</a></li></ul>");
                this.element.attr("aria-activedescendant", "j" + this._id + "_loading");
            }
            this.load_node($.jstree.root, function(o, s) {
                if (s) {
                    this.get_container_ul()[0].className = c;
                    if (this._firstChild(this.get_container_ul()[0])) {
                        this.element.attr("aria-activedescendant", this._firstChild(this.get_container_ul()[0]).id);
                    }
                    this.set_state($.extend(true, {}, this._data.core.state), function() {
                        this.trigger("refresh");
                    });
                }
                this._data.core.state = null;
            });
        },
        refresh_node: function(obj) {
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            var opened = [], to_load = [], s = this._data.core.selected.concat([]);
            to_load.push(obj.id);
            if (obj.state.opened === true) {
                opened.push(obj.id);
            }
            this.get_node(obj, true).find(".jstree-open").each(function() {
                to_load.push(this.id);
                opened.push(this.id);
            });
            this._load_nodes(to_load, $.proxy(function(nodes) {
                this.open_node(opened, false, 0);
                this.select_node(s);
                this.trigger("refresh_node", {
                    node: obj,
                    nodes: nodes
                });
            }, this), false, true);
        },
        set_id: function(obj, id) {
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            var i, j, m = this._model.data, old = obj.id;
            id = id.toString();
            m[obj.parent].children[$.inArray(obj.id, m[obj.parent].children)] = id;
            for (i = 0, j = obj.parents.length; i < j; i++) {
                m[obj.parents[i]].children_d[$.inArray(obj.id, m[obj.parents[i]].children_d)] = id;
            }
            for (i = 0, j = obj.children.length; i < j; i++) {
                m[obj.children[i]].parent = id;
            }
            for (i = 0, j = obj.children_d.length; i < j; i++) {
                m[obj.children_d[i]].parents[$.inArray(obj.id, m[obj.children_d[i]].parents)] = id;
            }
            i = $.inArray(obj.id, this._data.core.selected);
            if (i !== -1) {
                this._data.core.selected[i] = id;
            }
            i = this.get_node(obj.id, true);
            if (i) {
                i.attr("id", id);
                if (this.element.attr("aria-activedescendant") === obj.id) {
                    this.element.attr("aria-activedescendant", id);
                }
            }
            delete m[obj.id];
            obj.id = id;
            obj.li_attr.id = id;
            m[id] = obj;
            this.trigger("set_id", {
                node: obj,
                new: obj.id,
                old: old
            });
            return true;
        },
        get_text: function(obj) {
            obj = this.get_node(obj);
            return !obj || obj.id === $.jstree.root ? false : obj.text;
        },
        set_text: function(obj, val) {
            var t1, t2;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.set_text(obj[t1], val);
                }
                return true;
            }
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            obj.text = val;
            if (this.get_node(obj, true).length) {
                this.redraw_node(obj.id);
            }
            this.trigger("set_text", {
                obj: obj,
                text: val
            });
            return true;
        },
        get_json: function(obj, options, flat) {
            obj = this.get_node(obj || $.jstree.root);
            if (!obj) {
                return false;
            }
            if (options && options.flat && !flat) {
                flat = [];
            }
            var tmp = {
                id: obj.id,
                text: obj.text,
                icon: this.get_icon(obj),
                li_attr: $.extend(true, {}, obj.li_attr),
                a_attr: $.extend(true, {}, obj.a_attr),
                state: {},
                data: options && options.no_data ? false : $.extend(true, {}, obj.data)
            }, i, j;
            if (options && options.flat) {
                tmp.parent = obj.parent;
            } else {
                tmp.children = [];
            }
            if (!options || !options.no_state) {
                for (i in obj.state) {
                    if (obj.state.hasOwnProperty(i)) {
                        tmp.state[i] = obj.state[i];
                    }
                }
            }
            if (options && options.no_id) {
                delete tmp.id;
                if (tmp.li_attr && tmp.li_attr.id) {
                    delete tmp.li_attr.id;
                }
                if (tmp.a_attr && tmp.a_attr.id) {
                    delete tmp.a_attr.id;
                }
            }
            if (options && options.flat && obj.id !== $.jstree.root) {
                flat.push(tmp);
            }
            if (!options || !options.no_children) {
                for (i = 0, j = obj.children.length; i < j; i++) {
                    if (options && options.flat) {
                        this.get_json(obj.children[i], options, flat);
                    } else {
                        tmp.children.push(this.get_json(obj.children[i], options));
                    }
                }
            }
            return options && options.flat ? flat : obj.id === $.jstree.root ? tmp.children : tmp;
        },
        create_node: function(par, node, pos, callback, is_loaded) {
            if (par === null) {
                par = $.jstree.root;
            }
            par = this.get_node(par);
            if (!par) {
                return false;
            }
            pos = pos === undefined ? "last" : pos;
            if (!pos.toString().match(/^(before|after)$/) && !is_loaded && !this.is_loaded(par)) {
                return this.load_node(par, function() {
                    this.create_node(par, node, pos, callback, true);
                });
            }
            if (!node) {
                node = {
                    text: this.get_string("New node")
                };
            }
            if (typeof node === "string") {
                node = {
                    text: node
                };
            }
            if (node.text === undefined) {
                node.text = this.get_string("New node");
            }
            var tmp, dpc, i, j;
            if (par.id === $.jstree.root) {
                if (pos === "before") {
                    pos = "first";
                }
                if (pos === "after") {
                    pos = "last";
                }
            }
            switch (pos) {
              case "before":
                tmp = this.get_node(par.parent);
                pos = $.inArray(par.id, tmp.children);
                par = tmp;
                break;

              case "after":
                tmp = this.get_node(par.parent);
                pos = $.inArray(par.id, tmp.children) + 1;
                par = tmp;
                break;

              case "inside":
              case "first":
                pos = 0;
                break;

              case "last":
                pos = par.children.length;
                break;

              default:
                if (!pos) {
                    pos = 0;
                }
                break;
            }
            if (pos > par.children.length) {
                pos = par.children.length;
            }
            if (!node.id) {
                node.id = true;
            }
            if (!this.check("create_node", node, par, pos)) {
                this.settings.core.error.call(this, this._data.core.last_error);
                return false;
            }
            if (node.id === true) {
                delete node.id;
            }
            node = this._parse_model_from_json(node, par.id, par.parents.concat());
            if (!node) {
                return false;
            }
            tmp = this.get_node(node);
            dpc = [];
            dpc.push(node);
            dpc = dpc.concat(tmp.children_d);
            this.trigger("model", {
                nodes: dpc,
                parent: par.id
            });
            par.children_d = par.children_d.concat(dpc);
            for (i = 0, j = par.parents.length; i < j; i++) {
                this._model.data[par.parents[i]].children_d = this._model.data[par.parents[i]].children_d.concat(dpc);
            }
            node = tmp;
            tmp = [];
            for (i = 0, j = par.children.length; i < j; i++) {
                tmp[i >= pos ? i + 1 : i] = par.children[i];
            }
            tmp[pos] = node.id;
            par.children = tmp;
            this.redraw_node(par, true);
            if (callback) {
                callback.call(this, this.get_node(node));
            }
            this.trigger("create_node", {
                node: this.get_node(node),
                parent: par.id,
                position: pos
            });
            return node.id;
        },
        rename_node: function(obj, val) {
            var t1, t2, old;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.rename_node(obj[t1], val);
                }
                return true;
            }
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            old = obj.text;
            if (!this.check("rename_node", obj, this.get_parent(obj), val)) {
                this.settings.core.error.call(this, this._data.core.last_error);
                return false;
            }
            this.set_text(obj, val);
            this.trigger("rename_node", {
                node: obj,
                text: val,
                old: old
            });
            return true;
        },
        delete_node: function(obj) {
            var t1, t2, par, pos, tmp, i, j, k, l, c, top, lft;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.delete_node(obj[t1]);
                }
                return true;
            }
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            par = this.get_node(obj.parent);
            pos = $.inArray(obj.id, par.children);
            c = false;
            if (!this.check("delete_node", obj, par, pos)) {
                this.settings.core.error.call(this, this._data.core.last_error);
                return false;
            }
            if (pos !== -1) {
                par.children = $.vakata.array_remove(par.children, pos);
            }
            tmp = obj.children_d.concat([]);
            tmp.push(obj.id);
            for (i = 0, j = obj.parents.length; i < j; i++) {
                this._model.data[obj.parents[i]].children_d = $.vakata.array_filter(this._model.data[obj.parents[i]].children_d, function(v) {
                    return $.inArray(v, tmp) === -1;
                });
            }
            for (k = 0, l = tmp.length; k < l; k++) {
                if (this._model.data[tmp[k]].state.selected) {
                    c = true;
                    break;
                }
            }
            if (c) {
                this._data.core.selected = $.vakata.array_filter(this._data.core.selected, function(v) {
                    return $.inArray(v, tmp) === -1;
                });
            }
            this.trigger("delete_node", {
                node: obj,
                parent: par.id
            });
            if (c) {
                this.trigger("changed", {
                    action: "delete_node",
                    node: obj,
                    selected: this._data.core.selected,
                    parent: par.id
                });
            }
            for (k = 0, l = tmp.length; k < l; k++) {
                delete this._model.data[tmp[k]];
            }
            if ($.inArray(this._data.core.focused, tmp) !== -1) {
                this._data.core.focused = null;
                top = this.element[0].scrollTop;
                lft = this.element[0].scrollLeft;
                if (par.id === $.jstree.root) {
                    if (this._model.data[$.jstree.root].children[0]) {
                        this.get_node(this._model.data[$.jstree.root].children[0], true).children(".jstree-anchor").focus();
                    }
                } else {
                    this.get_node(par, true).children(".jstree-anchor").focus();
                }
                this.element[0].scrollTop = top;
                this.element[0].scrollLeft = lft;
            }
            this.redraw_node(par, true);
            return true;
        },
        check: function(chk, obj, par, pos, more) {
            obj = obj && obj.id ? obj : this.get_node(obj);
            par = par && par.id ? par : this.get_node(par);
            var tmp = chk.match(/^move_node|copy_node|create_node$/i) ? par : obj, chc = this.settings.core.check_callback;
            if (chk === "move_node" || chk === "copy_node") {
                if ((!more || !more.is_multi) && (obj.id === par.id || chk === "move_node" && $.inArray(obj.id, par.children) === pos || $.inArray(par.id, obj.children_d) !== -1)) {
                    this._data.core.last_error = {
                        error: "check",
                        plugin: "core",
                        id: "core_01",
                        reason: "Moving parent inside child",
                        data: JSON.stringify({
                            chk: chk,
                            pos: pos,
                            obj: obj && obj.id ? obj.id : false,
                            par: par && par.id ? par.id : false
                        })
                    };
                    return false;
                }
            }
            if (tmp && tmp.data) {
                tmp = tmp.data;
            }
            if (tmp && tmp.functions && (tmp.functions[chk] === false || tmp.functions[chk] === true)) {
                if (tmp.functions[chk] === false) {
                    this._data.core.last_error = {
                        error: "check",
                        plugin: "core",
                        id: "core_02",
                        reason: "Node data prevents function: " + chk,
                        data: JSON.stringify({
                            chk: chk,
                            pos: pos,
                            obj: obj && obj.id ? obj.id : false,
                            par: par && par.id ? par.id : false
                        })
                    };
                }
                return tmp.functions[chk];
            }
            if (chc === false || $.isFunction(chc) && chc.call(this, chk, obj, par, pos, more) === false || chc && chc[chk] === false) {
                this._data.core.last_error = {
                    error: "check",
                    plugin: "core",
                    id: "core_03",
                    reason: "User config for core.check_callback prevents function: " + chk,
                    data: JSON.stringify({
                        chk: chk,
                        pos: pos,
                        obj: obj && obj.id ? obj.id : false,
                        par: par && par.id ? par.id : false
                    })
                };
                return false;
            }
            return true;
        },
        last_error: function() {
            return this._data.core.last_error;
        },
        move_node: function(obj, par, pos, callback, is_loaded, skip_redraw, origin) {
            var t1, t2, old_par, old_pos, new_par, old_ins, is_multi, dpc, tmp, i, j, k, l, p;
            par = this.get_node(par);
            pos = pos === undefined ? 0 : pos;
            if (!par) {
                return false;
            }
            if (!pos.toString().match(/^(before|after)$/) && !is_loaded && !this.is_loaded(par)) {
                return this.load_node(par, function() {
                    this.move_node(obj, par, pos, callback, true, false, origin);
                });
            }
            if ($.isArray(obj)) {
                if (obj.length === 1) {
                    obj = obj[0];
                } else {
                    for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                        if (tmp = this.move_node(obj[t1], par, pos, callback, is_loaded, false, origin)) {
                            par = tmp;
                            pos = "after";
                        }
                    }
                    this.redraw();
                    return true;
                }
            }
            obj = obj && obj.id ? obj : this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            old_par = (obj.parent || $.jstree.root).toString();
            new_par = !pos.toString().match(/^(before|after)$/) || par.id === $.jstree.root ? par : this.get_node(par.parent);
            old_ins = origin ? origin : this._model.data[obj.id] ? this : $.jstree.reference(obj.id);
            is_multi = !old_ins || !old_ins._id || this._id !== old_ins._id;
            old_pos = old_ins && old_ins._id && old_par && old_ins._model.data[old_par] && old_ins._model.data[old_par].children ? $.inArray(obj.id, old_ins._model.data[old_par].children) : -1;
            if (old_ins && old_ins._id) {
                obj = old_ins._model.data[obj.id];
            }
            if (is_multi) {
                if (tmp = this.copy_node(obj, par, pos, callback, is_loaded, false, origin)) {
                    if (old_ins) {
                        old_ins.delete_node(obj);
                    }
                    return tmp;
                }
                return false;
            }
            if (par.id === $.jstree.root) {
                if (pos === "before") {
                    pos = "first";
                }
                if (pos === "after") {
                    pos = "last";
                }
            }
            switch (pos) {
              case "before":
                pos = $.inArray(par.id, new_par.children);
                break;

              case "after":
                pos = $.inArray(par.id, new_par.children) + 1;
                break;

              case "inside":
              case "first":
                pos = 0;
                break;

              case "last":
                pos = new_par.children.length;
                break;

              default:
                if (!pos) {
                    pos = 0;
                }
                break;
            }
            if (pos > new_par.children.length) {
                pos = new_par.children.length;
            }
            if (!this.check("move_node", obj, new_par, pos, {
                core: true,
                origin: origin,
                is_multi: old_ins && old_ins._id && old_ins._id !== this._id,
                is_foreign: !old_ins || !old_ins._id
            })) {
                this.settings.core.error.call(this, this._data.core.last_error);
                return false;
            }
            if (obj.parent === new_par.id) {
                dpc = new_par.children.concat();
                tmp = $.inArray(obj.id, dpc);
                if (tmp !== -1) {
                    dpc = $.vakata.array_remove(dpc, tmp);
                    if (pos > tmp) {
                        pos--;
                    }
                }
                tmp = [];
                for (i = 0, j = dpc.length; i < j; i++) {
                    tmp[i >= pos ? i + 1 : i] = dpc[i];
                }
                tmp[pos] = obj.id;
                new_par.children = tmp;
                this._node_changed(new_par.id);
                this.redraw(new_par.id === $.jstree.root);
            } else {
                tmp = obj.children_d.concat();
                tmp.push(obj.id);
                for (i = 0, j = obj.parents.length; i < j; i++) {
                    dpc = [];
                    p = old_ins._model.data[obj.parents[i]].children_d;
                    for (k = 0, l = p.length; k < l; k++) {
                        if ($.inArray(p[k], tmp) === -1) {
                            dpc.push(p[k]);
                        }
                    }
                    old_ins._model.data[obj.parents[i]].children_d = dpc;
                }
                old_ins._model.data[old_par].children = $.vakata.array_remove_item(old_ins._model.data[old_par].children, obj.id);
                for (i = 0, j = new_par.parents.length; i < j; i++) {
                    this._model.data[new_par.parents[i]].children_d = this._model.data[new_par.parents[i]].children_d.concat(tmp);
                }
                dpc = [];
                for (i = 0, j = new_par.children.length; i < j; i++) {
                    dpc[i >= pos ? i + 1 : i] = new_par.children[i];
                }
                dpc[pos] = obj.id;
                new_par.children = dpc;
                new_par.children_d.push(obj.id);
                new_par.children_d = new_par.children_d.concat(obj.children_d);
                obj.parent = new_par.id;
                tmp = new_par.parents.concat();
                tmp.unshift(new_par.id);
                p = obj.parents.length;
                obj.parents = tmp;
                tmp = tmp.concat();
                for (i = 0, j = obj.children_d.length; i < j; i++) {
                    this._model.data[obj.children_d[i]].parents = this._model.data[obj.children_d[i]].parents.slice(0, p * -1);
                    Array.prototype.push.apply(this._model.data[obj.children_d[i]].parents, tmp);
                }
                if (old_par === $.jstree.root || new_par.id === $.jstree.root) {
                    this._model.force_full_redraw = true;
                }
                if (!this._model.force_full_redraw) {
                    this._node_changed(old_par);
                    this._node_changed(new_par.id);
                }
                if (!skip_redraw) {
                    this.redraw();
                }
            }
            if (callback) {
                callback.call(this, obj, new_par, pos);
            }
            this.trigger("move_node", {
                node: obj,
                parent: new_par.id,
                position: pos,
                old_parent: old_par,
                old_position: old_pos,
                is_multi: old_ins && old_ins._id && old_ins._id !== this._id,
                is_foreign: !old_ins || !old_ins._id,
                old_instance: old_ins,
                new_instance: this
            });
            return obj.id;
        },
        copy_node: function(obj, par, pos, callback, is_loaded, skip_redraw, origin) {
            var t1, t2, dpc, tmp, i, j, node, old_par, new_par, old_ins, is_multi;
            par = this.get_node(par);
            pos = pos === undefined ? 0 : pos;
            if (!par) {
                return false;
            }
            if (!pos.toString().match(/^(before|after)$/) && !is_loaded && !this.is_loaded(par)) {
                return this.load_node(par, function() {
                    this.copy_node(obj, par, pos, callback, true, false, origin);
                });
            }
            if ($.isArray(obj)) {
                if (obj.length === 1) {
                    obj = obj[0];
                } else {
                    for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                        if (tmp = this.copy_node(obj[t1], par, pos, callback, is_loaded, true, origin)) {
                            par = tmp;
                            pos = "after";
                        }
                    }
                    this.redraw();
                    return true;
                }
            }
            obj = obj && obj.id ? obj : this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            old_par = (obj.parent || $.jstree.root).toString();
            new_par = !pos.toString().match(/^(before|after)$/) || par.id === $.jstree.root ? par : this.get_node(par.parent);
            old_ins = origin ? origin : this._model.data[obj.id] ? this : $.jstree.reference(obj.id);
            is_multi = !old_ins || !old_ins._id || this._id !== old_ins._id;
            if (old_ins && old_ins._id) {
                obj = old_ins._model.data[obj.id];
            }
            if (par.id === $.jstree.root) {
                if (pos === "before") {
                    pos = "first";
                }
                if (pos === "after") {
                    pos = "last";
                }
            }
            switch (pos) {
              case "before":
                pos = $.inArray(par.id, new_par.children);
                break;

              case "after":
                pos = $.inArray(par.id, new_par.children) + 1;
                break;

              case "inside":
              case "first":
                pos = 0;
                break;

              case "last":
                pos = new_par.children.length;
                break;

              default:
                if (!pos) {
                    pos = 0;
                }
                break;
            }
            if (pos > new_par.children.length) {
                pos = new_par.children.length;
            }
            if (!this.check("copy_node", obj, new_par, pos, {
                core: true,
                origin: origin,
                is_multi: old_ins && old_ins._id && old_ins._id !== this._id,
                is_foreign: !old_ins || !old_ins._id
            })) {
                this.settings.core.error.call(this, this._data.core.last_error);
                return false;
            }
            node = old_ins ? old_ins.get_json(obj, {
                no_id: true,
                no_data: true,
                no_state: true
            }) : obj;
            if (!node) {
                return false;
            }
            if (node.id === true) {
                delete node.id;
            }
            node = this._parse_model_from_json(node, new_par.id, new_par.parents.concat());
            if (!node) {
                return false;
            }
            tmp = this.get_node(node);
            if (obj && obj.state && obj.state.loaded === false) {
                tmp.state.loaded = false;
            }
            dpc = [];
            dpc.push(node);
            dpc = dpc.concat(tmp.children_d);
            this.trigger("model", {
                nodes: dpc,
                parent: new_par.id
            });
            for (i = 0, j = new_par.parents.length; i < j; i++) {
                this._model.data[new_par.parents[i]].children_d = this._model.data[new_par.parents[i]].children_d.concat(dpc);
            }
            dpc = [];
            for (i = 0, j = new_par.children.length; i < j; i++) {
                dpc[i >= pos ? i + 1 : i] = new_par.children[i];
            }
            dpc[pos] = tmp.id;
            new_par.children = dpc;
            new_par.children_d.push(tmp.id);
            new_par.children_d = new_par.children_d.concat(tmp.children_d);
            if (new_par.id === $.jstree.root) {
                this._model.force_full_redraw = true;
            }
            if (!this._model.force_full_redraw) {
                this._node_changed(new_par.id);
            }
            if (!skip_redraw) {
                this.redraw(new_par.id === $.jstree.root);
            }
            if (callback) {
                callback.call(this, tmp, new_par, pos);
            }
            this.trigger("copy_node", {
                node: tmp,
                original: obj,
                parent: new_par.id,
                position: pos,
                old_parent: old_par,
                old_position: old_ins && old_ins._id && old_par && old_ins._model.data[old_par] && old_ins._model.data[old_par].children ? $.inArray(obj.id, old_ins._model.data[old_par].children) : -1,
                is_multi: old_ins && old_ins._id && old_ins._id !== this._id,
                is_foreign: !old_ins || !old_ins._id,
                old_instance: old_ins,
                new_instance: this
            });
            return tmp.id;
        },
        cut: function(obj) {
            if (!obj) {
                obj = this._data.core.selected.concat();
            }
            if (!$.isArray(obj)) {
                obj = [ obj ];
            }
            if (!obj.length) {
                return false;
            }
            var tmp = [], o, t1, t2;
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                o = this.get_node(obj[t1]);
                if (o && o.id && o.id !== $.jstree.root) {
                    tmp.push(o);
                }
            }
            if (!tmp.length) {
                return false;
            }
            ccp_node = tmp;
            ccp_inst = this;
            ccp_mode = "move_node";
            this.trigger("cut", {
                node: obj
            });
        },
        copy: function(obj) {
            if (!obj) {
                obj = this._data.core.selected.concat();
            }
            if (!$.isArray(obj)) {
                obj = [ obj ];
            }
            if (!obj.length) {
                return false;
            }
            var tmp = [], o, t1, t2;
            for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                o = this.get_node(obj[t1]);
                if (o && o.id && o.id !== $.jstree.root) {
                    tmp.push(o);
                }
            }
            if (!tmp.length) {
                return false;
            }
            ccp_node = tmp;
            ccp_inst = this;
            ccp_mode = "copy_node";
            this.trigger("copy", {
                node: obj
            });
        },
        get_buffer: function() {
            return {
                mode: ccp_mode,
                node: ccp_node,
                inst: ccp_inst
            };
        },
        can_paste: function() {
            return ccp_mode !== false && ccp_node !== false;
        },
        paste: function(obj, pos) {
            obj = this.get_node(obj);
            if (!obj || !ccp_mode || !ccp_mode.match(/^(copy_node|move_node)$/) || !ccp_node) {
                return false;
            }
            if (this[ccp_mode](ccp_node, obj, pos, false, false, false, ccp_inst)) {
                this.trigger("paste", {
                    parent: obj.id,
                    node: ccp_node,
                    mode: ccp_mode
                });
            }
            ccp_node = false;
            ccp_mode = false;
            ccp_inst = false;
        },
        clear_buffer: function() {
            ccp_node = false;
            ccp_mode = false;
            ccp_inst = false;
            this.trigger("clear_buffer");
        },
        edit: function(obj, default_text, callback) {
            var rtl, w, a, s, t, h1, h2, fn, tmp, cancel = false;
            obj = this.get_node(obj);
            if (!obj) {
                return false;
            }
            if (this.settings.core.check_callback === false) {
                this._data.core.last_error = {
                    error: "check",
                    plugin: "core",
                    id: "core_07",
                    reason: "Could not edit node because of check_callback"
                };
                this.settings.core.error.call(this, this._data.core.last_error);
                return false;
            }
            tmp = obj;
            default_text = typeof default_text === "string" ? default_text : obj.text;
            this.set_text(obj, "");
            obj = this._open_to(obj);
            tmp.text = default_text;
            rtl = this._data.core.rtl;
            w = this.element.width();
            this._data.core.focused = tmp.id;
            a = obj.children(".jstree-anchor").focus();
            s = $("<span>");
            t = default_text;
            h1 = $("<" + "div />", {
                css: {
                    position: "absolute",
                    top: "-200px",
                    left: rtl ? "0px" : "-1000px",
                    visibility: "hidden"
                }
            }).appendTo("body");
            h2 = $("<" + "input />", {
                value: t,
                class: "jstree-rename-input",
                css: {
                    padding: "0",
                    border: "1px solid silver",
                    "box-sizing": "border-box",
                    display: "inline-block",
                    height: this._data.core.li_height + "px",
                    lineHeight: this._data.core.li_height + "px",
                    width: "150px"
                },
                blur: $.proxy(function(e) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    var i = s.children(".jstree-rename-input"), v = i.val(), f = this.settings.core.force_text, nv;
                    if (v === "") {
                        v = t;
                    }
                    h1.remove();
                    s.replaceWith(a);
                    s.remove();
                    t = f ? t : $("<div></div>").append($.parseHTML(t)).html();
                    this.set_text(obj, t);
                    nv = !!this.rename_node(obj, f ? $("<div></div>").text(v).text() : $("<div></div>").append($.parseHTML(v)).html());
                    if (!nv) {
                        this.set_text(obj, t);
                    }
                    this._data.core.focused = tmp.id;
                    setTimeout($.proxy(function() {
                        var node = this.get_node(tmp.id, true);
                        if (node.length) {
                            this._data.core.focused = tmp.id;
                            node.children(".jstree-anchor").focus();
                        }
                    }, this), 0);
                    if (callback) {
                        callback.call(this, tmp, nv, cancel);
                    }
                    h2 = null;
                }, this),
                keydown: function(e) {
                    var key = e.which;
                    if (key === 27) {
                        cancel = true;
                        this.value = t;
                    }
                    if (key === 27 || key === 13 || key === 37 || key === 38 || key === 39 || key === 40 || key === 32) {
                        e.stopImmediatePropagation();
                    }
                    if (key === 27 || key === 13) {
                        e.preventDefault();
                        this.blur();
                    }
                },
                click: function(e) {
                    e.stopImmediatePropagation();
                },
                mousedown: function(e) {
                    e.stopImmediatePropagation();
                },
                keyup: function(e) {
                    h2.width(Math.min(h1.text("pW" + this.value).width(), w));
                },
                keypress: function(e) {
                    if (e.which === 13) {
                        return false;
                    }
                }
            });
            fn = {
                fontFamily: a.css("fontFamily") || "",
                fontSize: a.css("fontSize") || "",
                fontWeight: a.css("fontWeight") || "",
                fontStyle: a.css("fontStyle") || "",
                fontStretch: a.css("fontStretch") || "",
                fontVariant: a.css("fontVariant") || "",
                letterSpacing: a.css("letterSpacing") || "",
                wordSpacing: a.css("wordSpacing") || ""
            };
            s.attr("class", a.attr("class")).append(a.contents().clone()).append(h2);
            a.replaceWith(s);
            h1.css(fn);
            h2.css(fn).width(Math.min(h1.text("pW" + h2[0].value).width(), w))[0].select();
            $(document).one("mousedown.jstree touchstart.jstree dnd_start.vakata", function(e) {
                if (h2 && e.target !== h2) {
                    $(h2).blur();
                }
            });
        },
        set_theme: function(theme_name, theme_url) {
            if (!theme_name) {
                return false;
            }
            if (theme_url === true) {
                var dir = this.settings.core.themes.dir;
                if (!dir) {
                    dir = $.jstree.path + "/themes";
                }
                theme_url = dir + "/" + theme_name + "/style.css";
            }
            if (theme_url && $.inArray(theme_url, themes_loaded) === -1) {
                $("head").append("<" + 'link rel="stylesheet" href="' + theme_url + '" type="text/css" />');
                themes_loaded.push(theme_url);
            }
            if (this._data.core.themes.name) {
                this.element.removeClass("jstree-" + this._data.core.themes.name);
            }
            this._data.core.themes.name = theme_name;
            this.element.addClass("jstree-" + theme_name);
            this.element[this.settings.core.themes.responsive ? "addClass" : "removeClass"]("jstree-" + theme_name + "-responsive");
            this.trigger("set_theme", {
                theme: theme_name
            });
        },
        get_theme: function() {
            return this._data.core.themes.name;
        },
        set_theme_variant: function(variant_name) {
            if (this._data.core.themes.variant) {
                this.element.removeClass("jstree-" + this._data.core.themes.name + "-" + this._data.core.themes.variant);
            }
            this._data.core.themes.variant = variant_name;
            if (variant_name) {
                this.element.addClass("jstree-" + this._data.core.themes.name + "-" + this._data.core.themes.variant);
            }
        },
        get_theme_variant: function() {
            return this._data.core.themes.variant;
        },
        show_stripes: function() {
            this._data.core.themes.stripes = true;
            this.get_container_ul().addClass("jstree-striped");
        },
        hide_stripes: function() {
            this._data.core.themes.stripes = false;
            this.get_container_ul().removeClass("jstree-striped");
        },
        toggle_stripes: function() {
            if (this._data.core.themes.stripes) {
                this.hide_stripes();
            } else {
                this.show_stripes();
            }
        },
        show_dots: function() {
            this._data.core.themes.dots = true;
            this.get_container_ul().removeClass("jstree-no-dots");
        },
        hide_dots: function() {
            this._data.core.themes.dots = false;
            this.get_container_ul().addClass("jstree-no-dots");
        },
        toggle_dots: function() {
            if (this._data.core.themes.dots) {
                this.hide_dots();
            } else {
                this.show_dots();
            }
        },
        show_icons: function() {
            this._data.core.themes.icons = true;
            this.get_container_ul().removeClass("jstree-no-icons");
        },
        hide_icons: function() {
            this._data.core.themes.icons = false;
            this.get_container_ul().addClass("jstree-no-icons");
        },
        toggle_icons: function() {
            if (this._data.core.themes.icons) {
                this.hide_icons();
            } else {
                this.show_icons();
            }
        },
        set_icon: function(obj, icon) {
            var t1, t2, dom, old;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.set_icon(obj[t1], icon);
                }
                return true;
            }
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            old = obj.icon;
            obj.icon = icon === true || icon === null || icon === undefined || icon === "" ? true : icon;
            dom = this.get_node(obj, true).children(".jstree-anchor").children(".jstree-themeicon");
            if (icon === false) {
                this.hide_icon(obj);
            } else if (icon === true || icon === null || icon === undefined || icon === "") {
                dom.removeClass("jstree-themeicon-custom " + old).css("background", "").removeAttr("rel");
                if (old === false) {
                    this.show_icon(obj);
                }
            } else if (icon.indexOf("/") === -1 && icon.indexOf(".") === -1) {
                dom.removeClass(old).css("background", "");
                dom.addClass(icon + " jstree-themeicon-custom").attr("rel", icon);
                if (old === false) {
                    this.show_icon(obj);
                }
            } else {
                dom.removeClass(old).css("background", "");
                dom.addClass("jstree-themeicon-custom").css("background", "url('" + icon + "') center center no-repeat").attr("rel", icon);
                if (old === false) {
                    this.show_icon(obj);
                }
            }
            return true;
        },
        get_icon: function(obj) {
            obj = this.get_node(obj);
            return !obj || obj.id === $.jstree.root ? false : obj.icon;
        },
        hide_icon: function(obj) {
            var t1, t2;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.hide_icon(obj[t1]);
                }
                return true;
            }
            obj = this.get_node(obj);
            if (!obj || obj === $.jstree.root) {
                return false;
            }
            obj.icon = false;
            this.get_node(obj, true).children(".jstree-anchor").children(".jstree-themeicon").addClass("jstree-themeicon-hidden");
            return true;
        },
        show_icon: function(obj) {
            var t1, t2, dom;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.show_icon(obj[t1]);
                }
                return true;
            }
            obj = this.get_node(obj);
            if (!obj || obj === $.jstree.root) {
                return false;
            }
            dom = this.get_node(obj, true);
            obj.icon = dom.length ? dom.children(".jstree-anchor").children(".jstree-themeicon").attr("rel") : true;
            if (!obj.icon) {
                obj.icon = true;
            }
            dom.children(".jstree-anchor").children(".jstree-themeicon").removeClass("jstree-themeicon-hidden");
            return true;
        }
    };
    $.vakata = {};
    $.vakata.attributes = function(node, with_values) {
        node = $(node)[0];
        var attr = with_values ? {} : [];
        if (node && node.attributes) {
            $.each(node.attributes, function(i, v) {
                if ($.inArray(v.name.toLowerCase(), [ "style", "contenteditable", "hasfocus", "tabindex" ]) !== -1) {
                    return;
                }
                if (v.value !== null && $.trim(v.value) !== "") {
                    if (with_values) {
                        attr[v.name] = v.value;
                    } else {
                        attr.push(v.name);
                    }
                }
            });
        }
        return attr;
    };
    $.vakata.array_unique = function(array) {
        var a = [], i, j, l, o = {};
        for (i = 0, l = array.length; i < l; i++) {
            if (o[array[i]] === undefined) {
                a.push(array[i]);
                o[array[i]] = true;
            }
        }
        return a;
    };
    $.vakata.array_remove = function(array, from) {
        array.splice(from, 1);
        return array;
    };
    $.vakata.array_remove_item = function(array, item) {
        var tmp = $.inArray(item, array);
        return tmp !== -1 ? $.vakata.array_remove(array, tmp) : array;
    };
    $.vakata.array_filter = function(c, a, b, d, e) {
        if (c.filter) {
            return c.filter(a, b);
        }
        d = [];
        for (e in c) {
            if (~~e + "" === e + "" && e >= 0 && a.call(b, c[e], +e, c)) {
                d.push(c[e]);
            }
        }
        return d;
    };
    $.jstree.plugins.changed = function(options, parent) {
        var last = [];
        this.trigger = function(ev, data) {
            var i, j;
            if (!data) {
                data = {};
            }
            if (ev.replace(".jstree", "") === "changed") {
                data.changed = {
                    selected: [],
                    deselected: []
                };
                var tmp = {};
                for (i = 0, j = last.length; i < j; i++) {
                    tmp[last[i]] = 1;
                }
                for (i = 0, j = data.selected.length; i < j; i++) {
                    if (!tmp[data.selected[i]]) {
                        data.changed.selected.push(data.selected[i]);
                    } else {
                        tmp[data.selected[i]] = 2;
                    }
                }
                for (i = 0, j = last.length; i < j; i++) {
                    if (tmp[last[i]] === 1) {
                        data.changed.deselected.push(last[i]);
                    }
                }
                last = data.selected.slice();
            }
            parent.trigger.call(this, ev, data);
        };
        this.refresh = function(skip_loading, forget_state) {
            last = [];
            return parent.refresh.apply(this, arguments);
        };
    };
    var _i = document.createElement("I");
    _i.className = "jstree-icon jstree-checkbox";
    _i.setAttribute("role", "presentation");
    $.jstree.defaults.checkbox = {
        visible: true,
        three_state: true,
        whole_node: true,
        keep_selected_style: true,
        cascade: "",
        tie_selection: true
    };
    $.jstree.plugins.checkbox = function(options, parent) {
        this.bind = function() {
            parent.bind.call(this);
            this._data.checkbox.uto = false;
            this._data.checkbox.selected = [];
            if (this.settings.checkbox.three_state) {
                this.settings.checkbox.cascade = "up+down+undetermined";
            }
            this.element.on("init.jstree", $.proxy(function() {
                this._data.checkbox.visible = this.settings.checkbox.visible;
                if (!this.settings.checkbox.keep_selected_style) {
                    this.element.addClass("jstree-checkbox-no-clicked");
                }
                if (this.settings.checkbox.tie_selection) {
                    this.element.addClass("jstree-checkbox-selection");
                }
            }, this)).on("loading.jstree", $.proxy(function() {
                this[this._data.checkbox.visible ? "show_checkboxes" : "hide_checkboxes"]();
            }, this));
            if (this.settings.checkbox.cascade.indexOf("undetermined") !== -1) {
                this.element.on("changed.jstree uncheck_node.jstree check_node.jstree uncheck_all.jstree check_all.jstree move_node.jstree copy_node.jstree redraw.jstree open_node.jstree", $.proxy(function() {
                    if (this._data.checkbox.uto) {
                        clearTimeout(this._data.checkbox.uto);
                    }
                    this._data.checkbox.uto = setTimeout($.proxy(this._undetermined, this), 50);
                }, this));
            }
            if (!this.settings.checkbox.tie_selection) {
                this.element.on("model.jstree", $.proxy(function(e, data) {
                    var m = this._model.data, p = m[data.parent], dpc = data.nodes, i, j;
                    for (i = 0, j = dpc.length; i < j; i++) {
                        m[dpc[i]].state.checked = m[dpc[i]].state.checked || m[dpc[i]].original && m[dpc[i]].original.state && m[dpc[i]].original.state.checked;
                        if (m[dpc[i]].state.checked) {
                            this._data.checkbox.selected.push(dpc[i]);
                        }
                    }
                }, this));
            }
            if (this.settings.checkbox.cascade.indexOf("up") !== -1 || this.settings.checkbox.cascade.indexOf("down") !== -1) {
                this.element.on("model.jstree", $.proxy(function(e, data) {
                    var m = this._model.data, p = m[data.parent], dpc = data.nodes, chd = [], c, i, j, k, l, tmp, s = this.settings.checkbox.cascade, t = this.settings.checkbox.tie_selection;
                    if (s.indexOf("down") !== -1) {
                        if (p.state[t ? "selected" : "checked"]) {
                            for (i = 0, j = dpc.length; i < j; i++) {
                                m[dpc[i]].state[t ? "selected" : "checked"] = true;
                            }
                            this._data[t ? "core" : "checkbox"].selected = this._data[t ? "core" : "checkbox"].selected.concat(dpc);
                        } else {
                            for (i = 0, j = dpc.length; i < j; i++) {
                                if (m[dpc[i]].state[t ? "selected" : "checked"]) {
                                    for (k = 0, l = m[dpc[i]].children_d.length; k < l; k++) {
                                        m[m[dpc[i]].children_d[k]].state[t ? "selected" : "checked"] = true;
                                    }
                                    this._data[t ? "core" : "checkbox"].selected = this._data[t ? "core" : "checkbox"].selected.concat(m[dpc[i]].children_d);
                                }
                            }
                        }
                    }
                    if (s.indexOf("up") !== -1) {
                        for (i = 0, j = p.children_d.length; i < j; i++) {
                            if (!m[p.children_d[i]].children.length) {
                                chd.push(m[p.children_d[i]].parent);
                            }
                        }
                        chd = $.vakata.array_unique(chd);
                        for (k = 0, l = chd.length; k < l; k++) {
                            p = m[chd[k]];
                            while (p && p.id !== $.jstree.root) {
                                c = 0;
                                for (i = 0, j = p.children.length; i < j; i++) {
                                    c += m[p.children[i]].state[t ? "selected" : "checked"];
                                }
                                if (c === j) {
                                    p.state[t ? "selected" : "checked"] = true;
                                    this._data[t ? "core" : "checkbox"].selected.push(p.id);
                                    tmp = this.get_node(p, true);
                                    if (tmp && tmp.length) {
                                        tmp.attr("aria-selected", true).children(".jstree-anchor").addClass(t ? "jstree-clicked" : "jstree-checked");
                                    }
                                } else {
                                    break;
                                }
                                p = this.get_node(p.parent);
                            }
                        }
                    }
                    this._data[t ? "core" : "checkbox"].selected = $.vakata.array_unique(this._data[t ? "core" : "checkbox"].selected);
                }, this)).on(this.settings.checkbox.tie_selection ? "select_node.jstree" : "check_node.jstree", $.proxy(function(e, data) {
                    var obj = data.node, m = this._model.data, par = this.get_node(obj.parent), dom = this.get_node(obj, true), i, j, c, tmp, s = this.settings.checkbox.cascade, t = this.settings.checkbox.tie_selection, sel = {}, cur = this._data[t ? "core" : "checkbox"].selected;
                    for (i = 0, j = cur.length; i < j; i++) {
                        sel[cur[i]] = true;
                    }
                    if (s.indexOf("down") !== -1) {
                        for (i = 0, j = obj.children_d.length; i < j; i++) {
                            sel[obj.children_d[i]] = true;
                            tmp = m[obj.children_d[i]];
                            tmp.state[t ? "selected" : "checked"] = true;
                            if (tmp && tmp.original && tmp.original.state && tmp.original.state.undetermined) {
                                tmp.original.state.undetermined = false;
                            }
                        }
                    }
                    if (s.indexOf("up") !== -1) {
                        while (par && par.id !== $.jstree.root) {
                            c = 0;
                            for (i = 0, j = par.children.length; i < j; i++) {
                                c += m[par.children[i]].state[t ? "selected" : "checked"];
                            }
                            if (c === j) {
                                par.state[t ? "selected" : "checked"] = true;
                                sel[par.id] = true;
                                tmp = this.get_node(par, true);
                                if (tmp && tmp.length) {
                                    tmp.attr("aria-selected", true).children(".jstree-anchor").addClass(t ? "jstree-clicked" : "jstree-checked");
                                }
                            } else {
                                break;
                            }
                            par = this.get_node(par.parent);
                        }
                    }
                    cur = [];
                    for (i in sel) {
                        if (sel.hasOwnProperty(i)) {
                            cur.push(i);
                        }
                    }
                    this._data[t ? "core" : "checkbox"].selected = cur;
                    if (s.indexOf("down") !== -1 && dom.length) {
                        dom.find(".jstree-anchor").addClass(t ? "jstree-clicked" : "jstree-checked").parent().attr("aria-selected", true);
                    }
                }, this)).on(this.settings.checkbox.tie_selection ? "deselect_all.jstree" : "uncheck_all.jstree", $.proxy(function(e, data) {
                    var obj = this.get_node($.jstree.root), m = this._model.data, i, j, tmp;
                    for (i = 0, j = obj.children_d.length; i < j; i++) {
                        tmp = m[obj.children_d[i]];
                        if (tmp && tmp.original && tmp.original.state && tmp.original.state.undetermined) {
                            tmp.original.state.undetermined = false;
                        }
                    }
                }, this)).on(this.settings.checkbox.tie_selection ? "deselect_node.jstree" : "uncheck_node.jstree", $.proxy(function(e, data) {
                    var obj = data.node, dom = this.get_node(obj, true), i, j, tmp, s = this.settings.checkbox.cascade, t = this.settings.checkbox.tie_selection, cur = this._data[t ? "core" : "checkbox"].selected, sel = {};
                    if (obj && obj.original && obj.original.state && obj.original.state.undetermined) {
                        obj.original.state.undetermined = false;
                    }
                    if (s.indexOf("down") !== -1) {
                        for (i = 0, j = obj.children_d.length; i < j; i++) {
                            tmp = this._model.data[obj.children_d[i]];
                            tmp.state[t ? "selected" : "checked"] = false;
                            if (tmp && tmp.original && tmp.original.state && tmp.original.state.undetermined) {
                                tmp.original.state.undetermined = false;
                            }
                        }
                    }
                    if (s.indexOf("up") !== -1) {
                        for (i = 0, j = obj.parents.length; i < j; i++) {
                            tmp = this._model.data[obj.parents[i]];
                            tmp.state[t ? "selected" : "checked"] = false;
                            if (tmp && tmp.original && tmp.original.state && tmp.original.state.undetermined) {
                                tmp.original.state.undetermined = false;
                            }
                            tmp = this.get_node(obj.parents[i], true);
                            if (tmp && tmp.length) {
                                tmp.attr("aria-selected", false).children(".jstree-anchor").removeClass(t ? "jstree-clicked" : "jstree-checked");
                            }
                        }
                    }
                    sel = {};
                    for (i = 0, j = cur.length; i < j; i++) {
                        if ((s.indexOf("down") === -1 || $.inArray(cur[i], obj.children_d) === -1) && (s.indexOf("up") === -1 || $.inArray(cur[i], obj.parents) === -1)) {
                            sel[cur[i]] = true;
                        }
                    }
                    cur = [];
                    for (i in sel) {
                        if (sel.hasOwnProperty(i)) {
                            cur.push(i);
                        }
                    }
                    this._data[t ? "core" : "checkbox"].selected = cur;
                    if (s.indexOf("down") !== -1 && dom.length) {
                        dom.find(".jstree-anchor").removeClass(t ? "jstree-clicked" : "jstree-checked").parent().attr("aria-selected", false);
                    }
                }, this));
            }
            if (this.settings.checkbox.cascade.indexOf("up") !== -1) {
                this.element.on("delete_node.jstree", $.proxy(function(e, data) {
                    var p = this.get_node(data.parent), m = this._model.data, i, j, c, tmp, t = this.settings.checkbox.tie_selection;
                    while (p && p.id !== $.jstree.root && !p.state[t ? "selected" : "checked"]) {
                        c = 0;
                        for (i = 0, j = p.children.length; i < j; i++) {
                            c += m[p.children[i]].state[t ? "selected" : "checked"];
                        }
                        if (j > 0 && c === j) {
                            p.state[t ? "selected" : "checked"] = true;
                            this._data[t ? "core" : "checkbox"].selected.push(p.id);
                            tmp = this.get_node(p, true);
                            if (tmp && tmp.length) {
                                tmp.attr("aria-selected", true).children(".jstree-anchor").addClass(t ? "jstree-clicked" : "jstree-checked");
                            }
                        } else {
                            break;
                        }
                        p = this.get_node(p.parent);
                    }
                }, this)).on("move_node.jstree", $.proxy(function(e, data) {
                    var is_multi = data.is_multi, old_par = data.old_parent, new_par = this.get_node(data.parent), m = this._model.data, p, c, i, j, tmp, t = this.settings.checkbox.tie_selection;
                    if (!is_multi) {
                        p = this.get_node(old_par);
                        while (p && p.id !== $.jstree.root && !p.state[t ? "selected" : "checked"]) {
                            c = 0;
                            for (i = 0, j = p.children.length; i < j; i++) {
                                c += m[p.children[i]].state[t ? "selected" : "checked"];
                            }
                            if (j > 0 && c === j) {
                                p.state[t ? "selected" : "checked"] = true;
                                this._data[t ? "core" : "checkbox"].selected.push(p.id);
                                tmp = this.get_node(p, true);
                                if (tmp && tmp.length) {
                                    tmp.attr("aria-selected", true).children(".jstree-anchor").addClass(t ? "jstree-clicked" : "jstree-checked");
                                }
                            } else {
                                break;
                            }
                            p = this.get_node(p.parent);
                        }
                    }
                    p = new_par;
                    while (p && p.id !== $.jstree.root) {
                        c = 0;
                        for (i = 0, j = p.children.length; i < j; i++) {
                            c += m[p.children[i]].state[t ? "selected" : "checked"];
                        }
                        if (c === j) {
                            if (!p.state[t ? "selected" : "checked"]) {
                                p.state[t ? "selected" : "checked"] = true;
                                this._data[t ? "core" : "checkbox"].selected.push(p.id);
                                tmp = this.get_node(p, true);
                                if (tmp && tmp.length) {
                                    tmp.attr("aria-selected", true).children(".jstree-anchor").addClass(t ? "jstree-clicked" : "jstree-checked");
                                }
                            }
                        } else {
                            if (p.state[t ? "selected" : "checked"]) {
                                p.state[t ? "selected" : "checked"] = false;
                                this._data[t ? "core" : "checkbox"].selected = $.vakata.array_remove_item(this._data[t ? "core" : "checkbox"].selected, p.id);
                                tmp = this.get_node(p, true);
                                if (tmp && tmp.length) {
                                    tmp.attr("aria-selected", false).children(".jstree-anchor").removeClass(t ? "jstree-clicked" : "jstree-checked");
                                }
                            } else {
                                break;
                            }
                        }
                        p = this.get_node(p.parent);
                    }
                }, this));
            }
        };
        this._undetermined = function() {
            if (this.element === null) {
                return;
            }
            var i, j, k, l, o = {}, m = this._model.data, t = this.settings.checkbox.tie_selection, s = this._data[t ? "core" : "checkbox"].selected, p = [], tt = this;
            for (i = 0, j = s.length; i < j; i++) {
                if (m[s[i]] && m[s[i]].parents) {
                    for (k = 0, l = m[s[i]].parents.length; k < l; k++) {
                        if (o[m[s[i]].parents[k]] !== undefined) {
                            break;
                        }
                        if (m[s[i]].parents[k] !== $.jstree.root) {
                            o[m[s[i]].parents[k]] = true;
                            p.push(m[s[i]].parents[k]);
                        }
                    }
                }
            }
            this.element.find(".jstree-closed").not(":has(.jstree-children)").each(function() {
                var tmp = tt.get_node(this), tmp2;
                if (!tmp.state.loaded) {
                    if (tmp.original && tmp.original.state && tmp.original.state.undetermined && tmp.original.state.undetermined === true) {
                        if (o[tmp.id] === undefined && tmp.id !== $.jstree.root) {
                            o[tmp.id] = true;
                            p.push(tmp.id);
                        }
                        for (k = 0, l = tmp.parents.length; k < l; k++) {
                            if (o[tmp.parents[k]] === undefined && tmp.parents[k] !== $.jstree.root) {
                                o[tmp.parents[k]] = true;
                                p.push(tmp.parents[k]);
                            }
                        }
                    }
                } else {
                    for (i = 0, j = tmp.children_d.length; i < j; i++) {
                        tmp2 = m[tmp.children_d[i]];
                        if (!tmp2.state.loaded && tmp2.original && tmp2.original.state && tmp2.original.state.undetermined && tmp2.original.state.undetermined === true) {
                            if (o[tmp2.id] === undefined && tmp2.id !== $.jstree.root) {
                                o[tmp2.id] = true;
                                p.push(tmp2.id);
                            }
                            for (k = 0, l = tmp2.parents.length; k < l; k++) {
                                if (o[tmp2.parents[k]] === undefined && tmp2.parents[k] !== $.jstree.root) {
                                    o[tmp2.parents[k]] = true;
                                    p.push(tmp2.parents[k]);
                                }
                            }
                        }
                    }
                }
            });
            this.element.find(".jstree-undetermined").removeClass("jstree-undetermined");
            for (i = 0, j = p.length; i < j; i++) {
                if (!m[p[i]].state[t ? "selected" : "checked"]) {
                    s = this.get_node(p[i], true);
                    if (s && s.length) {
                        s.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-undetermined");
                    }
                }
            }
        };
        this.redraw_node = function(obj, deep, is_callback, force_render) {
            obj = parent.redraw_node.apply(this, arguments);
            if (obj) {
                var i, j, tmp = null, icon = null;
                for (i = 0, j = obj.childNodes.length; i < j; i++) {
                    if (obj.childNodes[i] && obj.childNodes[i].className && obj.childNodes[i].className.indexOf("jstree-anchor") !== -1) {
                        tmp = obj.childNodes[i];
                        break;
                    }
                }
                if (tmp) {
                    if (!this.settings.checkbox.tie_selection && this._model.data[obj.id].state.checked) {
                        tmp.className += " jstree-checked";
                    }
                    icon = _i.cloneNode(false);
                    if (this._model.data[obj.id].state.checkbox_disabled) {
                        icon.className += " jstree-checkbox-disabled";
                    }
                    tmp.insertBefore(icon, tmp.childNodes[0]);
                }
            }
            if (!is_callback && this.settings.checkbox.cascade.indexOf("undetermined") !== -1) {
                if (this._data.checkbox.uto) {
                    clearTimeout(this._data.checkbox.uto);
                }
                this._data.checkbox.uto = setTimeout($.proxy(this._undetermined, this), 50);
            }
            return obj;
        };
        this.show_checkboxes = function() {
            this._data.core.themes.checkboxes = true;
            this.get_container_ul().removeClass("jstree-no-checkboxes");
        };
        this.hide_checkboxes = function() {
            this._data.core.themes.checkboxes = false;
            this.get_container_ul().addClass("jstree-no-checkboxes");
        };
        this.toggle_checkboxes = function() {
            if (this._data.core.themes.checkboxes) {
                this.hide_checkboxes();
            } else {
                this.show_checkboxes();
            }
        };
        this.is_undetermined = function(obj) {
            obj = this.get_node(obj);
            var s = this.settings.checkbox.cascade, i, j, t = this.settings.checkbox.tie_selection, d = this._data[t ? "core" : "checkbox"].selected, m = this._model.data;
            if (!obj || obj.state[t ? "selected" : "checked"] === true || s.indexOf("undetermined") === -1 || s.indexOf("down") === -1 && s.indexOf("up") === -1) {
                return false;
            }
            if (!obj.state.loaded && obj.original.state.undetermined === true) {
                return true;
            }
            for (i = 0, j = obj.children_d.length; i < j; i++) {
                if ($.inArray(obj.children_d[i], d) !== -1 || !m[obj.children_d[i]].state.loaded && m[obj.children_d[i]].original.state.undetermined) {
                    return true;
                }
            }
            return false;
        };
        this.disable_checkbox = function(obj) {
            var t1, t2, dom;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.disable_checkbox(obj[t1]);
                }
                return true;
            }
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            dom = this.get_node(obj, true);
            if (!obj.state.checkbox_disabled) {
                obj.state.checkbox_disabled = true;
                if (dom && dom.length) {
                    dom.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-checkbox-disabled");
                }
                this.trigger("disable_checkbox", {
                    node: obj
                });
            }
        };
        this.enable_checkbox = function(obj) {
            var t1, t2, dom;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.enable_checkbox(obj[t1]);
                }
                return true;
            }
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            dom = this.get_node(obj, true);
            if (obj.state.checkbox_disabled) {
                obj.state.checkbox_disabled = false;
                if (dom && dom.length) {
                    dom.children(".jstree-anchor").children(".jstree-checkbox").removeClass("jstree-checkbox-disabled");
                }
                this.trigger("enable_checkbox", {
                    node: obj
                });
            }
        };
        this.activate_node = function(obj, e) {
            if ($(e.target).hasClass("jstree-checkbox-disabled")) {
                return false;
            }
            if (this.settings.checkbox.tie_selection && (this.settings.checkbox.whole_node || $(e.target).hasClass("jstree-checkbox"))) {
                e.ctrlKey = true;
            }
            if (this.settings.checkbox.tie_selection || !this.settings.checkbox.whole_node && !$(e.target).hasClass("jstree-checkbox")) {
                return parent.activate_node.call(this, obj, e);
            }
            if (this.is_disabled(obj)) {
                return false;
            }
            if (this.is_checked(obj)) {
                this.uncheck_node(obj, e);
            } else {
                this.check_node(obj, e);
            }
            this.trigger("activate_node", {
                node: this.get_node(obj)
            });
        };
        this.check_node = function(obj, e) {
            if (this.settings.checkbox.tie_selection) {
                return this.select_node(obj, false, true, e);
            }
            var dom, t1, t2, th;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.check_node(obj[t1], e);
                }
                return true;
            }
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            dom = this.get_node(obj, true);
            if (!obj.state.checked) {
                obj.state.checked = true;
                this._data.checkbox.selected.push(obj.id);
                if (dom && dom.length) {
                    dom.children(".jstree-anchor").addClass("jstree-checked");
                }
                this.trigger("check_node", {
                    node: obj,
                    selected: this._data.checkbox.selected,
                    event: e
                });
            }
        };
        this.uncheck_node = function(obj, e) {
            if (this.settings.checkbox.tie_selection) {
                return this.deselect_node(obj, false, e);
            }
            var t1, t2, dom;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.uncheck_node(obj[t1], e);
                }
                return true;
            }
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            dom = this.get_node(obj, true);
            if (obj.state.checked) {
                obj.state.checked = false;
                this._data.checkbox.selected = $.vakata.array_remove_item(this._data.checkbox.selected, obj.id);
                if (dom.length) {
                    dom.children(".jstree-anchor").removeClass("jstree-checked");
                }
                this.trigger("uncheck_node", {
                    node: obj,
                    selected: this._data.checkbox.selected,
                    event: e
                });
            }
        };
        this.check_all = function() {
            if (this.settings.checkbox.tie_selection) {
                return this.select_all();
            }
            var tmp = this._data.checkbox.selected.concat([]), i, j;
            this._data.checkbox.selected = this._model.data[$.jstree.root].children_d.concat();
            for (i = 0, j = this._data.checkbox.selected.length; i < j; i++) {
                if (this._model.data[this._data.checkbox.selected[i]]) {
                    this._model.data[this._data.checkbox.selected[i]].state.checked = true;
                }
            }
            this.redraw(true);
            this.trigger("check_all", {
                selected: this._data.checkbox.selected
            });
        };
        this.uncheck_all = function() {
            if (this.settings.checkbox.tie_selection) {
                return this.deselect_all();
            }
            var tmp = this._data.checkbox.selected.concat([]), i, j;
            for (i = 0, j = this._data.checkbox.selected.length; i < j; i++) {
                if (this._model.data[this._data.checkbox.selected[i]]) {
                    this._model.data[this._data.checkbox.selected[i]].state.checked = false;
                }
            }
            this._data.checkbox.selected = [];
            this.element.find(".jstree-checked").removeClass("jstree-checked");
            this.trigger("uncheck_all", {
                selected: this._data.checkbox.selected,
                node: tmp
            });
        };
        this.is_checked = function(obj) {
            if (this.settings.checkbox.tie_selection) {
                return this.is_selected(obj);
            }
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            return obj.state.checked;
        };
        this.get_checked = function(full) {
            if (this.settings.checkbox.tie_selection) {
                return this.get_selected(full);
            }
            return full ? $.map(this._data.checkbox.selected, $.proxy(function(i) {
                return this.get_node(i);
            }, this)) : this._data.checkbox.selected;
        };
        this.get_top_checked = function(full) {
            if (this.settings.checkbox.tie_selection) {
                return this.get_top_selected(full);
            }
            var tmp = this.get_checked(true), obj = {}, i, j, k, l;
            for (i = 0, j = tmp.length; i < j; i++) {
                obj[tmp[i].id] = tmp[i];
            }
            for (i = 0, j = tmp.length; i < j; i++) {
                for (k = 0, l = tmp[i].children_d.length; k < l; k++) {
                    if (obj[tmp[i].children_d[k]]) {
                        delete obj[tmp[i].children_d[k]];
                    }
                }
            }
            tmp = [];
            for (i in obj) {
                if (obj.hasOwnProperty(i)) {
                    tmp.push(i);
                }
            }
            return full ? $.map(tmp, $.proxy(function(i) {
                return this.get_node(i);
            }, this)) : tmp;
        };
        this.get_bottom_checked = function(full) {
            if (this.settings.checkbox.tie_selection) {
                return this.get_bottom_selected(full);
            }
            var tmp = this.get_checked(true), obj = [], i, j;
            for (i = 0, j = tmp.length; i < j; i++) {
                if (!tmp[i].children.length) {
                    obj.push(tmp[i].id);
                }
            }
            return full ? $.map(obj, $.proxy(function(i) {
                return this.get_node(i);
            }, this)) : obj;
        };
        this.load_node = function(obj, callback) {
            var k, l, i, j, c, tmp;
            if (!$.isArray(obj) && !this.settings.checkbox.tie_selection) {
                tmp = this.get_node(obj);
                if (tmp && tmp.state.loaded) {
                    for (k = 0, l = tmp.children_d.length; k < l; k++) {
                        if (this._model.data[tmp.children_d[k]].state.checked) {
                            c = true;
                            this._data.checkbox.selected = $.vakata.array_remove_item(this._data.checkbox.selected, tmp.children_d[k]);
                        }
                    }
                }
            }
            return parent.load_node.apply(this, arguments);
        };
        this.get_state = function() {
            var state = parent.get_state.apply(this, arguments);
            if (this.settings.checkbox.tie_selection) {
                return state;
            }
            state.checkbox = this._data.checkbox.selected.slice();
            return state;
        };
        this.set_state = function(state, callback) {
            var res = parent.set_state.apply(this, arguments);
            if (res && state.checkbox) {
                if (!this.settings.checkbox.tie_selection) {
                    this.uncheck_all();
                    var _this = this;
                    $.each(state.checkbox, function(i, v) {
                        _this.check_node(v);
                    });
                }
                delete state.checkbox;
                this.set_state(state, callback);
                return false;
            }
            return res;
        };
        this.refresh = function(skip_loading, forget_state) {
            if (!this.settings.checkbox.tie_selection) {
                this._data.checkbox.selected = [];
            }
            return parent.refresh.apply(this, arguments);
        };
    };
    $.jstree.defaults.conditionalselect = function() {
        return true;
    };
    $.jstree.plugins.conditionalselect = function(options, parent) {
        this.activate_node = function(obj, e) {
            if (this.settings.conditionalselect.call(this, this.get_node(obj), e)) {
                parent.activate_node.call(this, obj, e);
            }
        };
    };
    $.jstree.defaults.contextmenu = {
        select_node: true,
        show_at_node: true,
        items: function(o, cb) {
            return {
                create: {
                    separator_before: false,
                    separator_after: true,
                    _disabled: false,
                    label: "Create",
                    action: function(data) {
                        var inst = $.jstree.reference(data.reference), obj = inst.get_node(data.reference);
                        inst.create_node(obj, {}, "last", function(new_node) {
                            setTimeout(function() {
                                inst.edit(new_node);
                            }, 0);
                        });
                    }
                },
                rename: {
                    separator_before: false,
                    separator_after: false,
                    _disabled: false,
                    label: "Rename",
                    action: function(data) {
                        var inst = $.jstree.reference(data.reference), obj = inst.get_node(data.reference);
                        inst.edit(obj);
                    }
                },
                remove: {
                    separator_before: false,
                    icon: false,
                    separator_after: false,
                    _disabled: false,
                    label: "Delete",
                    action: function(data) {
                        var inst = $.jstree.reference(data.reference), obj = inst.get_node(data.reference);
                        if (inst.is_selected(obj)) {
                            inst.delete_node(inst.get_selected());
                        } else {
                            inst.delete_node(obj);
                        }
                    }
                },
                ccp: {
                    separator_before: true,
                    icon: false,
                    separator_after: false,
                    label: "Edit",
                    action: false,
                    submenu: {
                        cut: {
                            separator_before: false,
                            separator_after: false,
                            label: "Cut",
                            action: function(data) {
                                var inst = $.jstree.reference(data.reference), obj = inst.get_node(data.reference);
                                if (inst.is_selected(obj)) {
                                    inst.cut(inst.get_top_selected());
                                } else {
                                    inst.cut(obj);
                                }
                            }
                        },
                        copy: {
                            separator_before: false,
                            icon: false,
                            separator_after: false,
                            label: "Copy",
                            action: function(data) {
                                var inst = $.jstree.reference(data.reference), obj = inst.get_node(data.reference);
                                if (inst.is_selected(obj)) {
                                    inst.copy(inst.get_top_selected());
                                } else {
                                    inst.copy(obj);
                                }
                            }
                        },
                        paste: {
                            separator_before: false,
                            icon: false,
                            _disabled: function(data) {
                                return !$.jstree.reference(data.reference).can_paste();
                            },
                            separator_after: false,
                            label: "Paste",
                            action: function(data) {
                                var inst = $.jstree.reference(data.reference), obj = inst.get_node(data.reference);
                                inst.paste(obj);
                            }
                        }
                    }
                }
            };
        }
    };
    $.jstree.plugins.contextmenu = function(options, parent) {
        this.bind = function() {
            parent.bind.call(this);
            var last_ts = 0, cto = null, ex, ey;
            this.element.on("contextmenu.jstree", ".jstree-anchor", $.proxy(function(e, data) {
                if (e.target.tagName.toLowerCase() === "input") {
                    return;
                }
                e.preventDefault();
                last_ts = e.ctrlKey ? +new Date() : 0;
                if (data || cto) {
                    last_ts = +new Date() + 1e4;
                }
                if (cto) {
                    clearTimeout(cto);
                }
                if (!this.is_loading(e.currentTarget)) {
                    this.show_contextmenu(e.currentTarget, e.pageX, e.pageY, e);
                }
            }, this)).on("click.jstree", ".jstree-anchor", $.proxy(function(e) {
                if (this._data.contextmenu.visible && (!last_ts || +new Date() - last_ts > 250)) {
                    $.vakata.context.hide();
                }
                last_ts = 0;
            }, this)).on("touchstart.jstree", ".jstree-anchor", function(e) {
                if (!e.originalEvent || !e.originalEvent.changedTouches || !e.originalEvent.changedTouches[0]) {
                    return;
                }
                ex = e.pageX;
                ey = e.pageY;
                cto = setTimeout(function() {
                    $(e.currentTarget).trigger("contextmenu", true);
                }, 750);
            }).on("touchmove.vakata.jstree", function(e) {
                if (cto && e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0] && (Math.abs(ex - e.pageX) > 50 || Math.abs(ey - e.pageY) > 50)) {
                    clearTimeout(cto);
                }
            }).on("touchend.vakata.jstree", function(e) {
                if (cto) {
                    clearTimeout(cto);
                }
            });
            $(document).on("context_hide.vakata.jstree", $.proxy(function(e, data) {
                this._data.contextmenu.visible = false;
                data.reference.removeClass("jstree-context");
            }, this));
        };
        this.teardown = function() {
            if (this._data.contextmenu.visible) {
                $.vakata.context.hide();
            }
            parent.teardown.call(this);
        };
        this.show_contextmenu = function(obj, x, y, e) {
            obj = this.get_node(obj);
            if (!obj || obj.id === $.jstree.root) {
                return false;
            }
            var s = this.settings.contextmenu, d = this.get_node(obj, true), a = d.children(".jstree-anchor"), o = false, i = false;
            if (s.show_at_node || x === undefined || y === undefined) {
                o = a.offset();
                x = o.left;
                y = o.top + this._data.core.li_height;
            }
            if (this.settings.contextmenu.select_node && !this.is_selected(obj)) {
                this.activate_node(obj, e);
            }
            i = s.items;
            if ($.isFunction(i)) {
                i = i.call(this, obj, $.proxy(function(i) {
                    this._show_contextmenu(obj, x, y, i);
                }, this));
            }
            if ($.isPlainObject(i)) {
                this._show_contextmenu(obj, x, y, i);
            }
        };
        this._show_contextmenu = function(obj, x, y, i) {
            var d = this.get_node(obj, true), a = d.children(".jstree-anchor");
            $(document).one("context_show.vakata.jstree", $.proxy(function(e, data) {
                var cls = "jstree-contextmenu jstree-" + this.get_theme() + "-contextmenu";
                $(data.element).addClass(cls);
                a.addClass("jstree-context");
            }, this));
            this._data.contextmenu.visible = true;
            $.vakata.context.show(a, {
                x: x,
                y: y
            }, i);
            this.trigger("show_contextmenu", {
                node: obj,
                x: x,
                y: y
            });
        };
    };
    (function($) {
        var right_to_left = false, vakata_context = {
            element: false,
            reference: false,
            position_x: 0,
            position_y: 0,
            items: [],
            html: "",
            is_visible: false
        };
        $.vakata.context = {
            settings: {
                hide_onmouseleave: 0,
                icons: true
            },
            _trigger: function(event_name) {
                $(document).triggerHandler("context_" + event_name + ".vakata", {
                    reference: vakata_context.reference,
                    element: vakata_context.element,
                    position: {
                        x: vakata_context.position_x,
                        y: vakata_context.position_y
                    }
                });
            },
            _execute: function(i) {
                i = vakata_context.items[i];
                return i && (!i._disabled || $.isFunction(i._disabled) && !i._disabled({
                    item: i,
                    reference: vakata_context.reference,
                    element: vakata_context.element
                })) && i.action ? i.action.call(null, {
                    item: i,
                    reference: vakata_context.reference,
                    element: vakata_context.element,
                    position: {
                        x: vakata_context.position_x,
                        y: vakata_context.position_y
                    }
                }) : false;
            },
            _parse: function(o, is_callback) {
                if (!o) {
                    return false;
                }
                if (!is_callback) {
                    vakata_context.html = "";
                    vakata_context.items = [];
                }
                var str = "", sep = false, tmp;
                if (is_callback) {
                    str += "<" + "ul>";
                }
                $.each(o, function(i, val) {
                    if (!val) {
                        return true;
                    }
                    vakata_context.items.push(val);
                    if (!sep && val.separator_before) {
                        str += "<" + "li class='vakata-context-separator'><" + "a href='#' " + ($.vakata.context.settings.icons ? "" : 'style="margin-left:0px;"') + ">&#160;<" + "/a><" + "/li>";
                    }
                    sep = false;
                    str += "<" + "li class='" + (val._class || "") + (val._disabled === true || $.isFunction(val._disabled) && val._disabled({
                        item: val,
                        reference: vakata_context.reference,
                        element: vakata_context.element
                    }) ? " vakata-contextmenu-disabled " : "") + "' " + (val.shortcut ? " data-shortcut='" + val.shortcut + "' " : "") + ">";
                    str += "<" + "a href='#' rel='" + (vakata_context.items.length - 1) + "'>";
                    if ($.vakata.context.settings.icons) {
                        str += "<" + "i ";
                        if (val.icon) {
                            if (val.icon.indexOf("/") !== -1 || val.icon.indexOf(".") !== -1) {
                                str += " style='background:url(\"" + val.icon + "\") center center no-repeat' ";
                            } else {
                                str += " class='" + val.icon + "' ";
                            }
                        }
                        str += "><" + "/i><" + "span class='vakata-contextmenu-sep'>&#160;<" + "/span>";
                    }
                    str += ($.isFunction(val.label) ? val.label({
                        item: i,
                        reference: vakata_context.reference,
                        element: vakata_context.element
                    }) : val.label) + (val.shortcut ? ' <span class="vakata-contextmenu-shortcut vakata-contextmenu-shortcut-' + val.shortcut + '">' + (val.shortcut_label || "") + "</span>" : "") + "<" + "/a>";
                    if (val.submenu) {
                        tmp = $.vakata.context._parse(val.submenu, true);
                        if (tmp) {
                            str += tmp;
                        }
                    }
                    str += "<" + "/li>";
                    if (val.separator_after) {
                        str += "<" + "li class='vakata-context-separator'><" + "a href='#' " + ($.vakata.context.settings.icons ? "" : 'style="margin-left:0px;"') + ">&#160;<" + "/a><" + "/li>";
                        sep = true;
                    }
                });
                str = str.replace(/<li class\='vakata-context-separator'\><\/li\>$/, "");
                if (is_callback) {
                    str += "</ul>";
                }
                if (!is_callback) {
                    vakata_context.html = str;
                    $.vakata.context._trigger("parse");
                }
                return str.length > 10 ? str : false;
            },
            _show_submenu: function(o) {
                o = $(o);
                if (!o.length || !o.children("ul").length) {
                    return;
                }
                var e = o.children("ul"), xl = o.offset().left, x = xl + o.outerWidth(), y = o.offset().top, w = e.width(), h = e.height(), dw = $(window).width() + $(window).scrollLeft(), dh = $(window).height() + $(window).scrollTop();
                if (right_to_left) {
                    o[x - (w + 10 + o.outerWidth()) < 0 ? "addClass" : "removeClass"]("vakata-context-left");
                } else {
                    o[x + w > dw && xl > dw - x ? "addClass" : "removeClass"]("vakata-context-right");
                }
                if (y + h + 10 > dh) {
                    e.css("bottom", "-1px");
                }
                if (o.hasClass("vakata-context-right")) {
                    if (xl < w) {
                        e.css("margin-right", xl - w);
                    }
                } else {
                    if (dw - x < w) {
                        e.css("margin-left", dw - x - w);
                    }
                }
                e.show();
            },
            show: function(reference, position, data) {
                var o, e, x, y, w, h, dw, dh, cond = true;
                if (vakata_context.element && vakata_context.element.length) {
                    vakata_context.element.width("");
                }
                switch (cond) {
                  case !position && !reference:
                    return false;

                  case !!position && !!reference:
                    vakata_context.reference = reference;
                    vakata_context.position_x = position.x;
                    vakata_context.position_y = position.y;
                    break;

                  case !position && !!reference:
                    vakata_context.reference = reference;
                    o = reference.offset();
                    vakata_context.position_x = o.left + reference.outerHeight();
                    vakata_context.position_y = o.top;
                    break;

                  case !!position && !reference:
                    vakata_context.position_x = position.x;
                    vakata_context.position_y = position.y;
                    break;
                }
                if (!!reference && !data && $(reference).data("vakata_contextmenu")) {
                    data = $(reference).data("vakata_contextmenu");
                }
                if ($.vakata.context._parse(data)) {
                    vakata_context.element.html(vakata_context.html);
                }
                if (vakata_context.items.length) {
                    vakata_context.element.appendTo("body");
                    e = vakata_context.element;
                    x = vakata_context.position_x;
                    y = vakata_context.position_y;
                    w = e.width();
                    h = e.height();
                    dw = $(window).width() + $(window).scrollLeft();
                    dh = $(window).height() + $(window).scrollTop();
                    if (right_to_left) {
                        x -= e.outerWidth() - $(reference).outerWidth();
                        if (x < $(window).scrollLeft() + 20) {
                            x = $(window).scrollLeft() + 20;
                        }
                    }
                    if (x + w + 20 > dw) {
                        x = dw - (w + 20);
                    }
                    if (y + h + 20 > dh) {
                        y = dh - (h + 20);
                    }
                    vakata_context.element.css({
                        left: x,
                        top: y
                    }).show().find("a").first().focus().parent().addClass("vakata-context-hover");
                    vakata_context.is_visible = true;
                    $.vakata.context._trigger("show");
                }
            },
            hide: function() {
                if (vakata_context.is_visible) {
                    vakata_context.element.hide().find("ul").hide().end().find(":focus").blur().end().detach();
                    vakata_context.is_visible = false;
                    $.vakata.context._trigger("hide");
                }
            }
        };
        $(function() {
            right_to_left = $("body").css("direction") === "rtl";
            var to = false;
            vakata_context.element = $("<ul class='vakata-context'></ul>");
            vakata_context.element.on("mouseenter", "li", function(e) {
                e.stopImmediatePropagation();
                if ($.contains(this, e.relatedTarget)) {
                    return;
                }
                if (to) {
                    clearTimeout(to);
                }
                vakata_context.element.find(".vakata-context-hover").removeClass("vakata-context-hover").end();
                $(this).siblings().find("ul").hide().end().end().parentsUntil(".vakata-context", "li").addBack().addClass("vakata-context-hover");
                $.vakata.context._show_submenu(this);
            }).on("mouseleave", "li", function(e) {
                if ($.contains(this, e.relatedTarget)) {
                    return;
                }
                $(this).find(".vakata-context-hover").addBack().removeClass("vakata-context-hover");
            }).on("mouseleave", function(e) {
                $(this).find(".vakata-context-hover").removeClass("vakata-context-hover");
                if ($.vakata.context.settings.hide_onmouseleave) {
                    to = setTimeout(function(t) {
                        return function() {
                            $.vakata.context.hide();
                        };
                    }(this), $.vakata.context.settings.hide_onmouseleave);
                }
            }).on("click", "a", function(e) {
                e.preventDefault();
                if (!$(this).blur().parent().hasClass("vakata-context-disabled") && $.vakata.context._execute($(this).attr("rel")) !== false) {
                    $.vakata.context.hide();
                }
            }).on("keydown", "a", function(e) {
                var o = null;
                switch (e.which) {
                  case 13:
                  case 32:
                    e.type = "mouseup";
                    e.preventDefault();
                    $(e.currentTarget).trigger(e);
                    break;

                  case 37:
                    if (vakata_context.is_visible) {
                        vakata_context.element.find(".vakata-context-hover").last().closest("li").first().find("ul").hide().find(".vakata-context-hover").removeClass("vakata-context-hover").end().end().children("a").focus();
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                    break;

                  case 38:
                    if (vakata_context.is_visible) {
                        o = vakata_context.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").prevAll("li:not(.vakata-context-separator)").first();
                        if (!o.length) {
                            o = vakata_context.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").last();
                        }
                        o.addClass("vakata-context-hover").children("a").focus();
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                    break;

                  case 39:
                    if (vakata_context.is_visible) {
                        vakata_context.element.find(".vakata-context-hover").last().children("ul").show().children("li:not(.vakata-context-separator)").removeClass("vakata-context-hover").first().addClass("vakata-context-hover").children("a").focus();
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                    break;

                  case 40:
                    if (vakata_context.is_visible) {
                        o = vakata_context.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").nextAll("li:not(.vakata-context-separator)").first();
                        if (!o.length) {
                            o = vakata_context.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").first();
                        }
                        o.addClass("vakata-context-hover").children("a").focus();
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                    break;

                  case 27:
                    $.vakata.context.hide();
                    e.preventDefault();
                    break;

                  default:
                    break;
                }
            }).on("keydown", function(e) {
                e.preventDefault();
                var a = vakata_context.element.find(".vakata-contextmenu-shortcut-" + e.which).parent();
                if (a.parent().not(".vakata-context-disabled")) {
                    a.click();
                }
            });
            $(document).on("mousedown.vakata.jstree", function(e) {
                if (vakata_context.is_visible && !$.contains(vakata_context.element[0], e.target)) {
                    $.vakata.context.hide();
                }
            }).on("context_show.vakata.jstree", function(e, data) {
                vakata_context.element.find("li:has(ul)").children("a").addClass("vakata-context-parent");
                if (right_to_left) {
                    vakata_context.element.addClass("vakata-context-rtl").css("direction", "rtl");
                }
                vakata_context.element.find("ul").hide().end();
            });
        });
    })($);
    $.jstree.defaults.dnd = {
        copy: true,
        open_timeout: 500,
        is_draggable: true,
        check_while_dragging: true,
        always_copy: false,
        inside_pos: 0,
        drag_selection: true,
        touch: true,
        large_drop_target: false,
        large_drag_target: false,
        use_html5: false
    };
    var drg, elm;
    $.jstree.plugins.dnd = function(options, parent) {
        this.init = function(el, options) {
            parent.init.call(this, el, options);
            this.settings.dnd.use_html5 = this.settings.dnd.use_html5 && "draggable" in document.createElement("span");
        };
        this.bind = function() {
            parent.bind.call(this);
            this.element.on(this.settings.dnd.use_html5 ? "dragstart.jstree" : "mousedown.jstree touchstart.jstree", this.settings.dnd.large_drag_target ? ".jstree-node" : ".jstree-anchor", $.proxy(function(e) {
                if (this.settings.dnd.large_drag_target && $(e.target).closest(".jstree-node")[0] !== e.currentTarget) {
                    return true;
                }
                if (e.type === "touchstart" && (!this.settings.dnd.touch || this.settings.dnd.touch === "selected" && !$(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").hasClass("jstree-clicked"))) {
                    return true;
                }
                var obj = this.get_node(e.target), mlt = this.is_selected(obj) && this.settings.dnd.drag_selection ? this.get_top_selected().length : 1, txt = mlt > 1 ? mlt + " " + this.get_string("nodes") : this.get_text(e.currentTarget);
                if (this.settings.core.force_text) {
                    txt = $.vakata.html.escape(txt);
                }
                if (obj && obj.id && obj.id !== $.jstree.root && (e.which === 1 || e.type === "touchstart" || e.type === "dragstart") && (this.settings.dnd.is_draggable === true || $.isFunction(this.settings.dnd.is_draggable) && this.settings.dnd.is_draggable.call(this, mlt > 1 ? this.get_top_selected(true) : [ obj ], e))) {
                    drg = {
                        jstree: true,
                        origin: this,
                        obj: this.get_node(obj, true),
                        nodes: mlt > 1 ? this.get_top_selected() : [ obj.id ]
                    };
                    elm = e.currentTarget;
                    if (this.settings.dnd.use_html5) {
                        $.vakata.dnd._trigger("start", e, {
                            helper: $(),
                            element: elm,
                            data: drg
                        });
                    } else {
                        this.element.trigger("mousedown.jstree");
                        return $.vakata.dnd.start(e, drg, '<div id="jstree-dnd" class="jstree-' + this.get_theme() + " jstree-" + this.get_theme() + "-" + this.get_theme_variant() + " " + (this.settings.core.themes.responsive ? " jstree-dnd-responsive" : "") + '"><i class="jstree-icon jstree-er"></i>' + txt + '<ins class="jstree-copy" style="display:none;">+</ins></div>');
                    }
                }
            }, this));
            if (this.settings.dnd.use_html5) {
                this.element.on("dragover.jstree", function(e) {
                    e.preventDefault();
                    $.vakata.dnd._trigger("move", e, {
                        helper: $(),
                        element: elm,
                        data: drg
                    });
                    return false;
                }).on("drop.jstree", $.proxy(function(e) {
                    e.preventDefault();
                    $.vakata.dnd._trigger("stop", e, {
                        helper: $(),
                        element: elm,
                        data: drg
                    });
                    return false;
                }, this));
            }
        };
        this.redraw_node = function(obj, deep, callback, force_render) {
            obj = parent.redraw_node.apply(this, arguments);
            if (obj && this.settings.dnd.use_html5) {
                if (this.settings.dnd.large_drag_target) {
                    obj.setAttribute("draggable", true);
                } else {
                    var i, j, tmp = null;
                    for (i = 0, j = obj.childNodes.length; i < j; i++) {
                        if (obj.childNodes[i] && obj.childNodes[i].className && obj.childNodes[i].className.indexOf("jstree-anchor") !== -1) {
                            tmp = obj.childNodes[i];
                            break;
                        }
                    }
                    if (tmp) {
                        tmp.setAttribute("draggable", true);
                    }
                }
            }
            return obj;
        };
    };
    $(function() {
        var lastmv = false, laster = false, lastev = false, opento = false, marker = $('<div id="jstree-marker">&#160;</div>').hide();
        $(document).on("dnd_start.vakata.jstree", function(e, data) {
            lastmv = false;
            lastev = false;
            if (!data || !data.data || !data.data.jstree) {
                return;
            }
            marker.appendTo("body");
        }).on("dnd_move.vakata.jstree", function(e, data) {
            if (opento) {
                if (!data.event || data.event.type !== "dragover" || data.event.target !== lastev.target) {
                    clearTimeout(opento);
                }
            }
            if (!data || !data.data || !data.data.jstree) {
                return;
            }
            if (data.event.target.id && data.event.target.id === "jstree-marker") {
                return;
            }
            lastev = data.event;
            var ins = $.jstree.reference(data.event.target), ref = false, off = false, rel = false, tmp, l, t, h, p, i, o, ok, t1, t2, op, ps, pr, ip, tm, is_copy;
            if (ins && ins._data && ins._data.dnd) {
                marker.attr("class", "jstree-" + ins.get_theme() + (ins.settings.core.themes.responsive ? " jstree-dnd-responsive" : ""));
                is_copy = data.data.origin && (data.data.origin.settings.dnd.always_copy || data.data.origin.settings.dnd.copy && (data.event.metaKey || data.event.ctrlKey));
                data.helper.children().attr("class", "jstree-" + ins.get_theme() + " jstree-" + ins.get_theme() + "-" + ins.get_theme_variant() + " " + (ins.settings.core.themes.responsive ? " jstree-dnd-responsive" : "")).find(".jstree-copy").first()[is_copy ? "show" : "hide"]();
                if ((data.event.target === ins.element[0] || data.event.target === ins.get_container_ul()[0]) && ins.get_container_ul().children().length === 0) {
                    ok = true;
                    for (t1 = 0, t2 = data.data.nodes.length; t1 < t2; t1++) {
                        ok = ok && ins.check(data.data.origin && (data.data.origin.settings.dnd.always_copy || data.data.origin.settings.dnd.copy && (data.event.metaKey || data.event.ctrlKey)) ? "copy_node" : "move_node", data.data.origin && data.data.origin !== ins ? data.data.origin.get_node(data.data.nodes[t1]) : data.data.nodes[t1], $.jstree.root, "last", {
                            dnd: true,
                            ref: ins.get_node($.jstree.root),
                            pos: "i",
                            origin: data.data.origin,
                            is_multi: data.data.origin && data.data.origin !== ins,
                            is_foreign: !data.data.origin
                        });
                        if (!ok) {
                            break;
                        }
                    }
                    if (ok) {
                        lastmv = {
                            ins: ins,
                            par: $.jstree.root,
                            pos: "last"
                        };
                        marker.hide();
                        data.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok");
                        if (data.event.originalEvent && data.event.originalEvent.dataTransfer) {
                            data.event.originalEvent.dataTransfer.dropEffect = is_copy ? "copy" : "move";
                        }
                        return;
                    }
                } else {
                    ref = ins.settings.dnd.large_drop_target ? $(data.event.target).closest(".jstree-node").children(".jstree-anchor") : $(data.event.target).closest(".jstree-anchor");
                    if (ref && ref.length && ref.parent().is(".jstree-closed, .jstree-open, .jstree-leaf")) {
                        off = ref.offset();
                        rel = (data.event.pageY !== undefined ? data.event.pageY : data.event.originalEvent.pageY) - off.top;
                        h = ref.outerHeight();
                        if (rel < h / 3) {
                            o = [ "b", "i", "a" ];
                        } else if (rel > h - h / 3) {
                            o = [ "a", "i", "b" ];
                        } else {
                            o = rel > h / 2 ? [ "i", "a", "b" ] : [ "i", "b", "a" ];
                        }
                        $.each(o, function(j, v) {
                            switch (v) {
                              case "b":
                                l = off.left - 6;
                                t = off.top;
                                p = ins.get_parent(ref);
                                i = ref.parent().index();
                                break;

                              case "i":
                                ip = ins.settings.dnd.inside_pos;
                                tm = ins.get_node(ref.parent());
                                l = off.left - 2;
                                t = off.top + h / 2 + 1;
                                p = tm.id;
                                i = ip === "first" ? 0 : ip === "last" ? tm.children.length : Math.min(ip, tm.children.length);
                                break;

                              case "a":
                                l = off.left - 6;
                                t = off.top + h;
                                p = ins.get_parent(ref);
                                i = ref.parent().index() + 1;
                                break;
                            }
                            ok = true;
                            for (t1 = 0, t2 = data.data.nodes.length; t1 < t2; t1++) {
                                op = data.data.origin && (data.data.origin.settings.dnd.always_copy || data.data.origin.settings.dnd.copy && (data.event.metaKey || data.event.ctrlKey)) ? "copy_node" : "move_node";
                                ps = i;
                                if (op === "move_node" && v === "a" && (data.data.origin && data.data.origin === ins) && p === ins.get_parent(data.data.nodes[t1])) {
                                    pr = ins.get_node(p);
                                    if (ps > $.inArray(data.data.nodes[t1], pr.children)) {
                                        ps -= 1;
                                    }
                                }
                                ok = ok && (ins && ins.settings && ins.settings.dnd && ins.settings.dnd.check_while_dragging === false || ins.check(op, data.data.origin && data.data.origin !== ins ? data.data.origin.get_node(data.data.nodes[t1]) : data.data.nodes[t1], p, ps, {
                                    dnd: true,
                                    ref: ins.get_node(ref.parent()),
                                    pos: v,
                                    origin: data.data.origin,
                                    is_multi: data.data.origin && data.data.origin !== ins,
                                    is_foreign: !data.data.origin
                                }));
                                if (!ok) {
                                    if (ins && ins.last_error) {
                                        laster = ins.last_error();
                                    }
                                    break;
                                }
                            }
                            if (v === "i" && ref.parent().is(".jstree-closed") && ins.settings.dnd.open_timeout) {
                                opento = setTimeout(function(x, z) {
                                    return function() {
                                        x.open_node(z);
                                    };
                                }(ins, ref), ins.settings.dnd.open_timeout);
                            }
                            if (ok) {
                                lastmv = {
                                    ins: ins,
                                    par: p,
                                    pos: v === "i" && ip === "last" && i === 0 && !ins.is_loaded(tm) ? "last" : i
                                };
                                marker.css({
                                    left: l + "px",
                                    top: t + "px"
                                }).show();
                                data.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok");
                                if (data.event.originalEvent && data.event.originalEvent.dataTransfer) {
                                    data.event.originalEvent.dataTransfer.dropEffect = is_copy ? "copy" : "move";
                                }
                                laster = {};
                                o = true;
                                return false;
                            }
                        });
                        if (o === true) {
                            return;
                        }
                    }
                }
            }
            lastmv = false;
            data.helper.find(".jstree-icon").removeClass("jstree-ok").addClass("jstree-er");
            if (data.event.originalEvent && data.event.originalEvent.dataTransfer) {
                data.event.originalEvent.dataTransfer.dropEffect = "none";
            }
            marker.hide();
        }).on("dnd_scroll.vakata.jstree", function(e, data) {
            if (!data || !data.data || !data.data.jstree) {
                return;
            }
            marker.hide();
            lastmv = false;
            lastev = false;
            data.helper.find(".jstree-icon").first().removeClass("jstree-ok").addClass("jstree-er");
        }).on("dnd_stop.vakata.jstree", function(e, data) {
            if (opento) {
                clearTimeout(opento);
            }
            if (!data || !data.data || !data.data.jstree) {
                return;
            }
            marker.hide().detach();
            var i, j, nodes = [];
            if (lastmv) {
                for (i = 0, j = data.data.nodes.length; i < j; i++) {
                    nodes[i] = data.data.origin ? data.data.origin.get_node(data.data.nodes[i]) : data.data.nodes[i];
                }
                lastmv.ins[data.data.origin && (data.data.origin.settings.dnd.always_copy || data.data.origin.settings.dnd.copy && (data.event.metaKey || data.event.ctrlKey)) ? "copy_node" : "move_node"](nodes, lastmv.par, lastmv.pos, false, false, false, data.data.origin);
            } else {
                i = $(data.event.target).closest(".jstree");
                if (i.length && laster && laster.error && laster.error === "check") {
                    i = i.jstree(true);
                    if (i) {
                        i.settings.core.error.call(this, laster);
                    }
                }
            }
            lastev = false;
            lastmv = false;
        }).on("keyup.jstree keydown.jstree", function(e, data) {
            data = $.vakata.dnd._get();
            if (data && data.data && data.data.jstree) {
                if (e.type === "keyup" && e.which === 27) {
                    if (opento) {
                        clearTimeout(opento);
                    }
                    lastmv = false;
                    laster = false;
                    lastev = false;
                    opento = false;
                    marker.hide().detach();
                    $.vakata.dnd._clean();
                } else {
                    data.helper.find(".jstree-copy").first()[data.data.origin && (data.data.origin.settings.dnd.always_copy || data.data.origin.settings.dnd.copy && (e.metaKey || e.ctrlKey)) ? "show" : "hide"]();
                    if (lastev) {
                        lastev.metaKey = e.metaKey;
                        lastev.ctrlKey = e.ctrlKey;
                        $.vakata.dnd._trigger("move", lastev);
                    }
                }
            }
        });
    });
    (function($) {
        $.vakata.html = {
            div: $("<div />"),
            escape: function(str) {
                return $.vakata.html.div.text(str).html();
            },
            strip: function(str) {
                return $.vakata.html.div.empty().append($.parseHTML(str)).text();
            }
        };
        var vakata_dnd = {
            element: false,
            target: false,
            is_down: false,
            is_drag: false,
            helper: false,
            helper_w: 0,
            data: false,
            init_x: 0,
            init_y: 0,
            scroll_l: 0,
            scroll_t: 0,
            scroll_e: false,
            scroll_i: false,
            is_touch: false
        };
        $.vakata.dnd = {
            settings: {
                scroll_speed: 10,
                scroll_proximity: 20,
                helper_left: 5,
                helper_top: 10,
                threshold: 5,
                threshold_touch: 50
            },
            _trigger: function(event_name, e, data) {
                if (data === undefined) {
                    data = $.vakata.dnd._get();
                }
                data.event = e;
                $(document).triggerHandler("dnd_" + event_name + ".vakata", data);
            },
            _get: function() {
                return {
                    data: vakata_dnd.data,
                    element: vakata_dnd.element,
                    helper: vakata_dnd.helper
                };
            },
            _clean: function() {
                if (vakata_dnd.helper) {
                    vakata_dnd.helper.remove();
                }
                if (vakata_dnd.scroll_i) {
                    clearInterval(vakata_dnd.scroll_i);
                    vakata_dnd.scroll_i = false;
                }
                vakata_dnd = {
                    element: false,
                    target: false,
                    is_down: false,
                    is_drag: false,
                    helper: false,
                    helper_w: 0,
                    data: false,
                    init_x: 0,
                    init_y: 0,
                    scroll_l: 0,
                    scroll_t: 0,
                    scroll_e: false,
                    scroll_i: false,
                    is_touch: false
                };
                $(document).off("mousemove.vakata.jstree touchmove.vakata.jstree", $.vakata.dnd.drag);
                $(document).off("mouseup.vakata.jstree touchend.vakata.jstree", $.vakata.dnd.stop);
            },
            _scroll: function(init_only) {
                if (!vakata_dnd.scroll_e || !vakata_dnd.scroll_l && !vakata_dnd.scroll_t) {
                    if (vakata_dnd.scroll_i) {
                        clearInterval(vakata_dnd.scroll_i);
                        vakata_dnd.scroll_i = false;
                    }
                    return false;
                }
                if (!vakata_dnd.scroll_i) {
                    vakata_dnd.scroll_i = setInterval($.vakata.dnd._scroll, 100);
                    return false;
                }
                if (init_only === true) {
                    return false;
                }
                var i = vakata_dnd.scroll_e.scrollTop(), j = vakata_dnd.scroll_e.scrollLeft();
                vakata_dnd.scroll_e.scrollTop(i + vakata_dnd.scroll_t * $.vakata.dnd.settings.scroll_speed);
                vakata_dnd.scroll_e.scrollLeft(j + vakata_dnd.scroll_l * $.vakata.dnd.settings.scroll_speed);
                if (i !== vakata_dnd.scroll_e.scrollTop() || j !== vakata_dnd.scroll_e.scrollLeft()) {
                    $.vakata.dnd._trigger("scroll", vakata_dnd.scroll_e);
                }
            },
            start: function(e, data, html) {
                if (e.type === "touchstart" && e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0]) {
                    e.pageX = e.originalEvent.changedTouches[0].pageX;
                    e.pageY = e.originalEvent.changedTouches[0].pageY;
                    e.target = document.elementFromPoint(e.originalEvent.changedTouches[0].pageX - window.pageXOffset, e.originalEvent.changedTouches[0].pageY - window.pageYOffset);
                }
                if (vakata_dnd.is_drag) {
                    $.vakata.dnd.stop({});
                }
                try {
                    e.currentTarget.unselectable = "on";
                    e.currentTarget.onselectstart = function() {
                        return false;
                    };
                    if (e.currentTarget.style) {
                        e.currentTarget.style.touchAction = "none";
                        e.currentTarget.style.msTouchAction = "none";
                        e.currentTarget.style.MozUserSelect = "none";
                    }
                } catch (ignore) {}
                vakata_dnd.init_x = e.pageX;
                vakata_dnd.init_y = e.pageY;
                vakata_dnd.data = data;
                vakata_dnd.is_down = true;
                vakata_dnd.element = e.currentTarget;
                vakata_dnd.target = e.target;
                vakata_dnd.is_touch = e.type === "touchstart";
                if (html !== false) {
                    vakata_dnd.helper = $("<div id='vakata-dnd'></div>").html(html).css({
                        display: "block",
                        margin: "0",
                        padding: "0",
                        position: "absolute",
                        top: "-2000px",
                        lineHeight: "16px",
                        zIndex: "10000"
                    });
                }
                $(document).on("mousemove.vakata.jstree touchmove.vakata.jstree", $.vakata.dnd.drag);
                $(document).on("mouseup.vakata.jstree touchend.vakata.jstree", $.vakata.dnd.stop);
                return false;
            },
            drag: function(e) {
                if (e.type === "touchmove" && e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0]) {
                    e.pageX = e.originalEvent.changedTouches[0].pageX;
                    e.pageY = e.originalEvent.changedTouches[0].pageY;
                    e.target = document.elementFromPoint(e.originalEvent.changedTouches[0].pageX - window.pageXOffset, e.originalEvent.changedTouches[0].pageY - window.pageYOffset);
                }
                if (!vakata_dnd.is_down) {
                    return;
                }
                if (!vakata_dnd.is_drag) {
                    if (Math.abs(e.pageX - vakata_dnd.init_x) > (vakata_dnd.is_touch ? $.vakata.dnd.settings.threshold_touch : $.vakata.dnd.settings.threshold) || Math.abs(e.pageY - vakata_dnd.init_y) > (vakata_dnd.is_touch ? $.vakata.dnd.settings.threshold_touch : $.vakata.dnd.settings.threshold)) {
                        if (vakata_dnd.helper) {
                            vakata_dnd.helper.appendTo("body");
                            vakata_dnd.helper_w = vakata_dnd.helper.outerWidth();
                        }
                        vakata_dnd.is_drag = true;
                        $.vakata.dnd._trigger("start", e);
                    } else {
                        return;
                    }
                }
                var d = false, w = false, dh = false, wh = false, dw = false, ww = false, dt = false, dl = false, ht = false, hl = false;
                vakata_dnd.scroll_t = 0;
                vakata_dnd.scroll_l = 0;
                vakata_dnd.scroll_e = false;
                $($(e.target).parentsUntil("body").addBack().get().reverse()).filter(function() {
                    return /^auto|scroll$/.test($(this).css("overflow")) && (this.scrollHeight > this.offsetHeight || this.scrollWidth > this.offsetWidth);
                }).each(function() {
                    var t = $(this), o = t.offset();
                    if (this.scrollHeight > this.offsetHeight) {
                        if (o.top + t.height() - e.pageY < $.vakata.dnd.settings.scroll_proximity) {
                            vakata_dnd.scroll_t = 1;
                        }
                        if (e.pageY - o.top < $.vakata.dnd.settings.scroll_proximity) {
                            vakata_dnd.scroll_t = -1;
                        }
                    }
                    if (this.scrollWidth > this.offsetWidth) {
                        if (o.left + t.width() - e.pageX < $.vakata.dnd.settings.scroll_proximity) {
                            vakata_dnd.scroll_l = 1;
                        }
                        if (e.pageX - o.left < $.vakata.dnd.settings.scroll_proximity) {
                            vakata_dnd.scroll_l = -1;
                        }
                    }
                    if (vakata_dnd.scroll_t || vakata_dnd.scroll_l) {
                        vakata_dnd.scroll_e = $(this);
                        return false;
                    }
                });
                if (!vakata_dnd.scroll_e) {
                    d = $(document);
                    w = $(window);
                    dh = d.height();
                    wh = w.height();
                    dw = d.width();
                    ww = w.width();
                    dt = d.scrollTop();
                    dl = d.scrollLeft();
                    if (dh > wh && e.pageY - dt < $.vakata.dnd.settings.scroll_proximity) {
                        vakata_dnd.scroll_t = -1;
                    }
                    if (dh > wh && wh - (e.pageY - dt) < $.vakata.dnd.settings.scroll_proximity) {
                        vakata_dnd.scroll_t = 1;
                    }
                    if (dw > ww && e.pageX - dl < $.vakata.dnd.settings.scroll_proximity) {
                        vakata_dnd.scroll_l = -1;
                    }
                    if (dw > ww && ww - (e.pageX - dl) < $.vakata.dnd.settings.scroll_proximity) {
                        vakata_dnd.scroll_l = 1;
                    }
                    if (vakata_dnd.scroll_t || vakata_dnd.scroll_l) {
                        vakata_dnd.scroll_e = d;
                    }
                }
                if (vakata_dnd.scroll_e) {
                    $.vakata.dnd._scroll(true);
                }
                if (vakata_dnd.helper) {
                    ht = parseInt(e.pageY + $.vakata.dnd.settings.helper_top, 10);
                    hl = parseInt(e.pageX + $.vakata.dnd.settings.helper_left, 10);
                    if (dh && ht + 25 > dh) {
                        ht = dh - 50;
                    }
                    if (dw && hl + vakata_dnd.helper_w > dw) {
                        hl = dw - (vakata_dnd.helper_w + 2);
                    }
                    vakata_dnd.helper.css({
                        left: hl + "px",
                        top: ht + "px"
                    });
                }
                $.vakata.dnd._trigger("move", e);
                return false;
            },
            stop: function(e) {
                if (e.type === "touchend" && e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0]) {
                    e.pageX = e.originalEvent.changedTouches[0].pageX;
                    e.pageY = e.originalEvent.changedTouches[0].pageY;
                    e.target = document.elementFromPoint(e.originalEvent.changedTouches[0].pageX - window.pageXOffset, e.originalEvent.changedTouches[0].pageY - window.pageYOffset);
                }
                if (vakata_dnd.is_drag) {
                    $.vakata.dnd._trigger("stop", e);
                } else {
                    if (e.type === "touchend" && e.target === vakata_dnd.target) {
                        var to = setTimeout(function() {
                            $(e.target).click();
                        }, 100);
                        $(e.target).one("click", function() {
                            if (to) {
                                clearTimeout(to);
                            }
                        });
                    }
                }
                $.vakata.dnd._clean();
                return false;
            }
        };
    })($);
    $.jstree.defaults.massload = null;
    $.jstree.plugins.massload = function(options, parent) {
        this.init = function(el, options) {
            this._data.massload = {};
            parent.init.call(this, el, options);
        };
        this._load_nodes = function(nodes, callback, is_callback, force_reload) {
            var s = this.settings.massload, nodesString = JSON.stringify(nodes), toLoad = [], m = this._model.data, i, j, dom;
            if (!is_callback) {
                for (i = 0, j = nodes.length; i < j; i++) {
                    if (!m[nodes[i]] || (!m[nodes[i]].state.loaded && !m[nodes[i]].state.failed || force_reload)) {
                        toLoad.push(nodes[i]);
                        dom = this.get_node(nodes[i], true);
                        if (dom && dom.length) {
                            dom.addClass("jstree-loading").attr("aria-busy", true);
                        }
                    }
                }
                this._data.massload = {};
                if (toLoad.length) {
                    if ($.isFunction(s)) {
                        return s.call(this, toLoad, $.proxy(function(data) {
                            var i, j;
                            if (data) {
                                for (i in data) {
                                    if (data.hasOwnProperty(i)) {
                                        this._data.massload[i] = data[i];
                                    }
                                }
                            }
                            for (i = 0, j = nodes.length; i < j; i++) {
                                dom = this.get_node(nodes[i], true);
                                if (dom && dom.length) {
                                    dom.removeClass("jstree-loading").attr("aria-busy", false);
                                }
                            }
                            parent._load_nodes.call(this, nodes, callback, is_callback, force_reload);
                        }, this));
                    }
                    if (typeof s === "object" && s && s.url) {
                        s = $.extend(true, {}, s);
                        if ($.isFunction(s.url)) {
                            s.url = s.url.call(this, toLoad);
                        }
                        if ($.isFunction(s.data)) {
                            s.data = s.data.call(this, toLoad);
                        }
                        return $.ajax(s).done($.proxy(function(data, t, x) {
                            var i, j;
                            if (data) {
                                for (i in data) {
                                    if (data.hasOwnProperty(i)) {
                                        this._data.massload[i] = data[i];
                                    }
                                }
                            }
                            for (i = 0, j = nodes.length; i < j; i++) {
                                dom = this.get_node(nodes[i], true);
                                if (dom && dom.length) {
                                    dom.removeClass("jstree-loading").attr("aria-busy", false);
                                }
                            }
                            parent._load_nodes.call(this, nodes, callback, is_callback, force_reload);
                        }, this)).fail($.proxy(function(f) {
                            parent._load_nodes.call(this, nodes, callback, is_callback, force_reload);
                        }, this));
                    }
                }
            }
            return parent._load_nodes.call(this, nodes, callback, is_callback, force_reload);
        };
        this._load_node = function(obj, callback) {
            var data = this._data.massload[obj.id], rslt = null, dom;
            if (data) {
                rslt = this[typeof data === "string" ? "_append_html_data" : "_append_json_data"](obj, typeof data === "string" ? $($.parseHTML(data)).filter(function() {
                    return this.nodeType !== 3;
                }) : data, function(status) {
                    callback.call(this, status);
                });
                dom = this.get_node(obj.id, true);
                if (dom && dom.length) {
                    dom.removeClass("jstree-loading").attr("aria-busy", false);
                }
                delete this._data.massload[obj.id];
                return rslt;
            }
            return parent._load_node.call(this, obj, callback);
        };
    };
    $.jstree.defaults.search = {
        ajax: false,
        fuzzy: false,
        case_sensitive: false,
        show_only_matches: false,
        show_only_matches_children: false,
        close_opened_onclear: true,
        search_leaves_only: false,
        search_callback: false
    };
    $.jstree.plugins.search = function(options, parent) {
        this.bind = function() {
            parent.bind.call(this);
            this._data.search.str = "";
            this._data.search.dom = $();
            this._data.search.res = [];
            this._data.search.opn = [];
            this._data.search.som = false;
            this._data.search.smc = false;
            this._data.search.hdn = [];
            this.element.on("search.jstree", $.proxy(function(e, data) {
                if (this._data.search.som && data.res.length) {
                    var m = this._model.data, i, j, p = [], k, l;
                    for (i = 0, j = data.res.length; i < j; i++) {
                        if (m[data.res[i]] && !m[data.res[i]].state.hidden) {
                            p.push(data.res[i]);
                            p = p.concat(m[data.res[i]].parents);
                            if (this._data.search.smc) {
                                for (k = 0, l = m[data.res[i]].children_d.length; k < l; k++) {
                                    if (m[m[data.res[i]].children_d[k]] && !m[m[data.res[i]].children_d[k]].state.hidden) {
                                        p.push(m[data.res[i]].children_d[k]);
                                    }
                                }
                            }
                        }
                    }
                    p = $.vakata.array_remove_item($.vakata.array_unique(p), $.jstree.root);
                    this._data.search.hdn = this.hide_all(true);
                    this.show_node(p, true);
                    this.redraw(true);
                }
            }, this)).on("clear_search.jstree", $.proxy(function(e, data) {
                if (this._data.search.som && data.res.length) {
                    this.show_node(this._data.search.hdn, true);
                    this.redraw(true);
                }
            }, this));
        };
        this.search = function(str, skip_async, show_only_matches, inside, append, show_only_matches_children) {
            if (str === false || $.trim(str.toString()) === "") {
                return this.clear_search();
            }
            inside = this.get_node(inside);
            inside = inside && inside.id ? inside.id : null;
            str = str.toString();
            var s = this.settings.search, a = s.ajax ? s.ajax : false, m = this._model.data, f = null, r = [], p = [], i, j;
            if (this._data.search.res.length && !append) {
                this.clear_search();
            }
            if (show_only_matches === undefined) {
                show_only_matches = s.show_only_matches;
            }
            if (show_only_matches_children === undefined) {
                show_only_matches_children = s.show_only_matches_children;
            }
            if (!skip_async && a !== false) {
                if ($.isFunction(a)) {
                    return a.call(this, str, $.proxy(function(d) {
                        if (d && d.d) {
                            d = d.d;
                        }
                        this._load_nodes(!$.isArray(d) ? [] : $.vakata.array_unique(d), function() {
                            this.search(str, true, show_only_matches, inside, append);
                        });
                    }, this), inside);
                } else {
                    a = $.extend({}, a);
                    if (!a.data) {
                        a.data = {};
                    }
                    a.data.str = str;
                    if (inside) {
                        a.data.inside = inside;
                    }
                    return $.ajax(a).fail($.proxy(function() {
                        this._data.core.last_error = {
                            error: "ajax",
                            plugin: "search",
                            id: "search_01",
                            reason: "Could not load search parents",
                            data: JSON.stringify(a)
                        };
                        this.settings.core.error.call(this, this._data.core.last_error);
                    }, this)).done($.proxy(function(d) {
                        if (d && d.d) {
                            d = d.d;
                        }
                        this._load_nodes(!$.isArray(d) ? [] : $.vakata.array_unique(d), function() {
                            this.search(str, true, show_only_matches, inside, append);
                        });
                    }, this));
                }
            }
            if (!append) {
                this._data.search.str = str;
                this._data.search.dom = $();
                this._data.search.res = [];
                this._data.search.opn = [];
                this._data.search.som = show_only_matches;
                this._data.search.smc = show_only_matches_children;
            }
            f = new $.vakata.search(str, true, {
                caseSensitive: s.case_sensitive,
                fuzzy: s.fuzzy
            });
            $.each(m[inside ? inside : $.jstree.root].children_d, function(ii, i) {
                var v = m[i];
                if (v.text && !v.state.hidden && (!s.search_leaves_only || v.state.loaded && v.children.length === 0) && (s.search_callback && s.search_callback.call(this, str, v) || !s.search_callback && f.search(v.text).isMatch)) {
                    r.push(i);
                    p = p.concat(v.parents);
                }
            });
            if (r.length) {
                p = $.vakata.array_unique(p);
                for (i = 0, j = p.length; i < j; i++) {
                    if (p[i] !== $.jstree.root && m[p[i]] && this.open_node(p[i], null, 0) === true) {
                        this._data.search.opn.push(p[i]);
                    }
                }
                if (!append) {
                    this._data.search.dom = $(this.element[0].querySelectorAll("#" + $.map(r, function(v) {
                        return "0123456789".indexOf(v[0]) !== -1 ? "\\3" + v[0] + " " + v.substr(1).replace($.jstree.idregex, "\\$&") : v.replace($.jstree.idregex, "\\$&");
                    }).join(", #")));
                    this._data.search.res = r;
                } else {
                    this._data.search.dom = this._data.search.dom.add($(this.element[0].querySelectorAll("#" + $.map(r, function(v) {
                        return "0123456789".indexOf(v[0]) !== -1 ? "\\3" + v[0] + " " + v.substr(1).replace($.jstree.idregex, "\\$&") : v.replace($.jstree.idregex, "\\$&");
                    }).join(", #"))));
                    this._data.search.res = $.vakata.array_unique(this._data.search.res.concat(r));
                }
                this._data.search.dom.children(".jstree-anchor").addClass("jstree-search");
            }
            this.trigger("search", {
                nodes: this._data.search.dom,
                str: str,
                res: this._data.search.res,
                show_only_matches: show_only_matches
            });
        };
        this.clear_search = function() {
            if (this.settings.search.close_opened_onclear) {
                this.close_node(this._data.search.opn, 0);
            }
            this.trigger("clear_search", {
                nodes: this._data.search.dom,
                str: this._data.search.str,
                res: this._data.search.res
            });
            if (this._data.search.res.length) {
                this._data.search.dom = $(this.element[0].querySelectorAll("#" + $.map(this._data.search.res, function(v) {
                    return "0123456789".indexOf(v[0]) !== -1 ? "\\3" + v[0] + " " + v.substr(1).replace($.jstree.idregex, "\\$&") : v.replace($.jstree.idregex, "\\$&");
                }).join(", #")));
                this._data.search.dom.children(".jstree-anchor").removeClass("jstree-search");
            }
            this._data.search.str = "";
            this._data.search.res = [];
            this._data.search.opn = [];
            this._data.search.dom = $();
        };
        this.redraw_node = function(obj, deep, callback, force_render) {
            obj = parent.redraw_node.apply(this, arguments);
            if (obj) {
                if ($.inArray(obj.id, this._data.search.res) !== -1) {
                    var i, j, tmp = null;
                    for (i = 0, j = obj.childNodes.length; i < j; i++) {
                        if (obj.childNodes[i] && obj.childNodes[i].className && obj.childNodes[i].className.indexOf("jstree-anchor") !== -1) {
                            tmp = obj.childNodes[i];
                            break;
                        }
                    }
                    if (tmp) {
                        tmp.className += " jstree-search";
                    }
                }
            }
            return obj;
        };
    };
    (function($) {
        $.vakata.search = function(pattern, txt, options) {
            options = options || {};
            options = $.extend({}, $.vakata.search.defaults, options);
            if (options.fuzzy !== false) {
                options.fuzzy = true;
            }
            pattern = options.caseSensitive ? pattern : pattern.toLowerCase();
            var MATCH_LOCATION = options.location, MATCH_DISTANCE = options.distance, MATCH_THRESHOLD = options.threshold, patternLen = pattern.length, matchmask, pattern_alphabet, match_bitapScore, search;
            if (patternLen > 32) {
                options.fuzzy = false;
            }
            if (options.fuzzy) {
                matchmask = 1 << patternLen - 1;
                pattern_alphabet = function() {
                    var mask = {}, i = 0;
                    for (i = 0; i < patternLen; i++) {
                        mask[pattern.charAt(i)] = 0;
                    }
                    for (i = 0; i < patternLen; i++) {
                        mask[pattern.charAt(i)] |= 1 << patternLen - i - 1;
                    }
                    return mask;
                }();
                match_bitapScore = function(e, x) {
                    var accuracy = e / patternLen, proximity = Math.abs(MATCH_LOCATION - x);
                    if (!MATCH_DISTANCE) {
                        return proximity ? 1 : accuracy;
                    }
                    return accuracy + proximity / MATCH_DISTANCE;
                };
            }
            search = function(text) {
                text = options.caseSensitive ? text : text.toLowerCase();
                if (pattern === text || text.indexOf(pattern) !== -1) {
                    return {
                        isMatch: true,
                        score: 0
                    };
                }
                if (!options.fuzzy) {
                    return {
                        isMatch: false,
                        score: 1
                    };
                }
                var i, j, textLen = text.length, scoreThreshold = MATCH_THRESHOLD, bestLoc = text.indexOf(pattern, MATCH_LOCATION), binMin, binMid, binMax = patternLen + textLen, lastRd, start, finish, rd, charMatch, score = 1, locations = [];
                if (bestLoc !== -1) {
                    scoreThreshold = Math.min(match_bitapScore(0, bestLoc), scoreThreshold);
                    bestLoc = text.lastIndexOf(pattern, MATCH_LOCATION + patternLen);
                    if (bestLoc !== -1) {
                        scoreThreshold = Math.min(match_bitapScore(0, bestLoc), scoreThreshold);
                    }
                }
                bestLoc = -1;
                for (i = 0; i < patternLen; i++) {
                    binMin = 0;
                    binMid = binMax;
                    while (binMin < binMid) {
                        if (match_bitapScore(i, MATCH_LOCATION + binMid) <= scoreThreshold) {
                            binMin = binMid;
                        } else {
                            binMax = binMid;
                        }
                        binMid = Math.floor((binMax - binMin) / 2 + binMin);
                    }
                    binMax = binMid;
                    start = Math.max(1, MATCH_LOCATION - binMid + 1);
                    finish = Math.min(MATCH_LOCATION + binMid, textLen) + patternLen;
                    rd = new Array(finish + 2);
                    rd[finish + 1] = (1 << i) - 1;
                    for (j = finish; j >= start; j--) {
                        charMatch = pattern_alphabet[text.charAt(j - 1)];
                        if (i === 0) {
                            rd[j] = (rd[j + 1] << 1 | 1) & charMatch;
                        } else {
                            rd[j] = (rd[j + 1] << 1 | 1) & charMatch | ((lastRd[j + 1] | lastRd[j]) << 1 | 1) | lastRd[j + 1];
                        }
                        if (rd[j] & matchmask) {
                            score = match_bitapScore(i, j - 1);
                            if (score <= scoreThreshold) {
                                scoreThreshold = score;
                                bestLoc = j - 1;
                                locations.push(bestLoc);
                                if (bestLoc > MATCH_LOCATION) {
                                    start = Math.max(1, 2 * MATCH_LOCATION - bestLoc);
                                } else {
                                    break;
                                }
                            }
                        }
                    }
                    if (match_bitapScore(i + 1, MATCH_LOCATION) > scoreThreshold) {
                        break;
                    }
                    lastRd = rd;
                }
                return {
                    isMatch: bestLoc >= 0,
                    score: score
                };
            };
            return txt === true ? {
                search: search
            } : search(txt);
        };
        $.vakata.search.defaults = {
            location: 0,
            distance: 100,
            threshold: .6,
            fuzzy: false,
            caseSensitive: false
        };
    })($);
    $.jstree.defaults.sort = function(a, b) {
        return this.get_text(a) > this.get_text(b) ? 1 : -1;
    };
    $.jstree.plugins.sort = function(options, parent) {
        this.bind = function() {
            parent.bind.call(this);
            this.element.on("model.jstree", $.proxy(function(e, data) {
                this.sort(data.parent, true);
            }, this)).on("rename_node.jstree create_node.jstree", $.proxy(function(e, data) {
                this.sort(data.parent || data.node.parent, false);
                this.redraw_node(data.parent || data.node.parent, true);
            }, this)).on("move_node.jstree copy_node.jstree", $.proxy(function(e, data) {
                this.sort(data.parent, false);
                this.redraw_node(data.parent, true);
            }, this));
        };
        this.sort = function(obj, deep) {
            var i, j;
            obj = this.get_node(obj);
            if (obj && obj.children && obj.children.length) {
                obj.children.sort($.proxy(this.settings.sort, this));
                if (deep) {
                    for (i = 0, j = obj.children_d.length; i < j; i++) {
                        this.sort(obj.children_d[i], false);
                    }
                }
            }
        };
    };
    var to = false;
    $.jstree.defaults.state = {
        key: "jstree",
        events: "changed.jstree open_node.jstree close_node.jstree check_node.jstree uncheck_node.jstree",
        ttl: false,
        filter: false
    };
    $.jstree.plugins.state = function(options, parent) {
        this.bind = function() {
            parent.bind.call(this);
            var bind = $.proxy(function() {
                this.element.on(this.settings.state.events, $.proxy(function() {
                    if (to) {
                        clearTimeout(to);
                    }
                    to = setTimeout($.proxy(function() {
                        this.save_state();
                    }, this), 100);
                }, this));
                this.trigger("state_ready");
            }, this);
            this.element.on("ready.jstree", $.proxy(function(e, data) {
                this.element.one("restore_state.jstree", bind);
                if (!this.restore_state()) {
                    bind();
                }
            }, this));
        };
        this.save_state = function() {
            var st = {
                state: this.get_state(),
                ttl: this.settings.state.ttl,
                sec: +new Date()
            };
            $.vakata.storage.set(this.settings.state.key, JSON.stringify(st));
        };
        this.restore_state = function() {
            var k = $.vakata.storage.get(this.settings.state.key);
            if (!!k) {
                try {
                    k = JSON.parse(k);
                } catch (ex) {
                    return false;
                }
            }
            if (!!k && k.ttl && k.sec && +new Date() - k.sec > k.ttl) {
                return false;
            }
            if (!!k && k.state) {
                k = k.state;
            }
            if (!!k && $.isFunction(this.settings.state.filter)) {
                k = this.settings.state.filter.call(this, k);
            }
            if (!!k) {
                this.element.one("set_state.jstree", function(e, data) {
                    data.instance.trigger("restore_state", {
                        state: $.extend(true, {}, k)
                    });
                });
                this.set_state(k);
                return true;
            }
            return false;
        };
        this.clear_state = function() {
            return $.vakata.storage.del(this.settings.state.key);
        };
    };
    (function($, undefined) {
        $.vakata.storage = {
            set: function(key, val) {
                return window.localStorage.setItem(key, val);
            },
            get: function(key) {
                return window.localStorage.getItem(key);
            },
            del: function(key) {
                return window.localStorage.removeItem(key);
            }
        };
    })($);
    $.jstree.defaults.types = {
        default: {}
    };
    $.jstree.defaults.types[$.jstree.root] = {};
    $.jstree.plugins.types = function(options, parent) {
        this.init = function(el, options) {
            var i, j;
            if (options && options.types && options.types["default"]) {
                for (i in options.types) {
                    if (i !== "default" && i !== $.jstree.root && options.types.hasOwnProperty(i)) {
                        for (j in options.types["default"]) {
                            if (options.types["default"].hasOwnProperty(j) && options.types[i][j] === undefined) {
                                options.types[i][j] = options.types["default"][j];
                            }
                        }
                    }
                }
            }
            parent.init.call(this, el, options);
            this._model.data[$.jstree.root].type = $.jstree.root;
        };
        this.refresh = function(skip_loading, forget_state) {
            parent.refresh.call(this, skip_loading, forget_state);
            this._model.data[$.jstree.root].type = $.jstree.root;
        };
        this.bind = function() {
            this.element.on("model.jstree", $.proxy(function(e, data) {
                var m = this._model.data, dpc = data.nodes, t = this.settings.types, i, j, c = "default", k;
                for (i = 0, j = dpc.length; i < j; i++) {
                    c = "default";
                    if (m[dpc[i]].original && m[dpc[i]].original.type && t[m[dpc[i]].original.type]) {
                        c = m[dpc[i]].original.type;
                    }
                    if (m[dpc[i]].data && m[dpc[i]].data.jstree && m[dpc[i]].data.jstree.type && t[m[dpc[i]].data.jstree.type]) {
                        c = m[dpc[i]].data.jstree.type;
                    }
                    m[dpc[i]].type = c;
                    if (m[dpc[i]].icon === true && t[c].icon !== undefined) {
                        m[dpc[i]].icon = t[c].icon;
                    }
                    if (t[c].li_attr !== undefined && typeof t[c].li_attr === "object") {
                        for (k in t[c].li_attr) {
                            if (t[c].li_attr.hasOwnProperty(k)) {
                                if (k === "id") {
                                    continue;
                                } else if (m[dpc[i]].li_attr[k] === undefined) {
                                    m[dpc[i]].li_attr[k] = t[c].li_attr[k];
                                } else if (k === "class") {
                                    m[dpc[i]].li_attr["class"] = t[c].li_attr["class"] + " " + m[dpc[i]].li_attr["class"];
                                }
                            }
                        }
                    }
                    if (t[c].a_attr !== undefined && typeof t[c].a_attr === "object") {
                        for (k in t[c].a_attr) {
                            if (t[c].a_attr.hasOwnProperty(k)) {
                                if (k === "id") {
                                    continue;
                                } else if (m[dpc[i]].a_attr[k] === undefined) {
                                    m[dpc[i]].a_attr[k] = t[c].a_attr[k];
                                } else if (k === "href" && m[dpc[i]].a_attr[k] === "#") {
                                    m[dpc[i]].a_attr["href"] = t[c].a_attr["href"];
                                } else if (k === "class") {
                                    m[dpc[i]].a_attr["class"] = t[c].a_attr["class"] + " " + m[dpc[i]].a_attr["class"];
                                }
                            }
                        }
                    }
                }
                m[$.jstree.root].type = $.jstree.root;
            }, this));
            parent.bind.call(this);
        };
        this.get_json = function(obj, options, flat) {
            var i, j, m = this._model.data, opt = options ? $.extend(true, {}, options, {
                no_id: false
            }) : {}, tmp = parent.get_json.call(this, obj, opt, flat);
            if (tmp === false) {
                return false;
            }
            if ($.isArray(tmp)) {
                for (i = 0, j = tmp.length; i < j; i++) {
                    tmp[i].type = tmp[i].id && m[tmp[i].id] && m[tmp[i].id].type ? m[tmp[i].id].type : "default";
                    if (options && options.no_id) {
                        delete tmp[i].id;
                        if (tmp[i].li_attr && tmp[i].li_attr.id) {
                            delete tmp[i].li_attr.id;
                        }
                        if (tmp[i].a_attr && tmp[i].a_attr.id) {
                            delete tmp[i].a_attr.id;
                        }
                    }
                }
            } else {
                tmp.type = tmp.id && m[tmp.id] && m[tmp.id].type ? m[tmp.id].type : "default";
                if (options && options.no_id) {
                    tmp = this._delete_ids(tmp);
                }
            }
            return tmp;
        };
        this._delete_ids = function(tmp) {
            if ($.isArray(tmp)) {
                for (var i = 0, j = tmp.length; i < j; i++) {
                    tmp[i] = this._delete_ids(tmp[i]);
                }
                return tmp;
            }
            delete tmp.id;
            if (tmp.li_attr && tmp.li_attr.id) {
                delete tmp.li_attr.id;
            }
            if (tmp.a_attr && tmp.a_attr.id) {
                delete tmp.a_attr.id;
            }
            if (tmp.children && $.isArray(tmp.children)) {
                tmp.children = this._delete_ids(tmp.children);
            }
            return tmp;
        };
        this.check = function(chk, obj, par, pos, more) {
            if (parent.check.call(this, chk, obj, par, pos, more) === false) {
                return false;
            }
            obj = obj && obj.id ? obj : this.get_node(obj);
            par = par && par.id ? par : this.get_node(par);
            var m = obj && obj.id ? more && more.origin ? more.origin : $.jstree.reference(obj.id) : null, tmp, d, i, j;
            m = m && m._model && m._model.data ? m._model.data : null;
            switch (chk) {
              case "create_node":
              case "move_node":
              case "copy_node":
                if (chk !== "move_node" || $.inArray(obj.id, par.children) === -1) {
                    tmp = this.get_rules(par);
                    if (tmp.max_children !== undefined && tmp.max_children !== -1 && tmp.max_children === par.children.length) {
                        this._data.core.last_error = {
                            error: "check",
                            plugin: "types",
                            id: "types_01",
                            reason: "max_children prevents function: " + chk,
                            data: JSON.stringify({
                                chk: chk,
                                pos: pos,
                                obj: obj && obj.id ? obj.id : false,
                                par: par && par.id ? par.id : false
                            })
                        };
                        return false;
                    }
                    if (tmp.valid_children !== undefined && tmp.valid_children !== -1 && $.inArray(obj.type || "default", tmp.valid_children) === -1) {
                        this._data.core.last_error = {
                            error: "check",
                            plugin: "types",
                            id: "types_02",
                            reason: "valid_children prevents function: " + chk,
                            data: JSON.stringify({
                                chk: chk,
                                pos: pos,
                                obj: obj && obj.id ? obj.id : false,
                                par: par && par.id ? par.id : false
                            })
                        };
                        return false;
                    }
                    if (m && obj.children_d && obj.parents) {
                        d = 0;
                        for (i = 0, j = obj.children_d.length; i < j; i++) {
                            d = Math.max(d, m[obj.children_d[i]].parents.length);
                        }
                        d = d - obj.parents.length + 1;
                    }
                    if (d <= 0 || d === undefined) {
                        d = 1;
                    }
                    do {
                        if (tmp.max_depth !== undefined && tmp.max_depth !== -1 && tmp.max_depth < d) {
                            this._data.core.last_error = {
                                error: "check",
                                plugin: "types",
                                id: "types_03",
                                reason: "max_depth prevents function: " + chk,
                                data: JSON.stringify({
                                    chk: chk,
                                    pos: pos,
                                    obj: obj && obj.id ? obj.id : false,
                                    par: par && par.id ? par.id : false
                                })
                            };
                            return false;
                        }
                        par = this.get_node(par.parent);
                        tmp = this.get_rules(par);
                        d++;
                    } while (par);
                }
                break;
            }
            return true;
        };
        this.get_rules = function(obj) {
            obj = this.get_node(obj);
            if (!obj) {
                return false;
            }
            var tmp = this.get_type(obj, true);
            if (tmp.max_depth === undefined) {
                tmp.max_depth = -1;
            }
            if (tmp.max_children === undefined) {
                tmp.max_children = -1;
            }
            if (tmp.valid_children === undefined) {
                tmp.valid_children = -1;
            }
            return tmp;
        };
        this.get_type = function(obj, rules) {
            obj = this.get_node(obj);
            return !obj ? false : rules ? $.extend({
                type: obj.type
            }, this.settings.types[obj.type]) : obj.type;
        };
        this.set_type = function(obj, type) {
            var m = this._model.data, t, t1, t2, old_type, old_icon, k, d, a;
            if ($.isArray(obj)) {
                obj = obj.slice();
                for (t1 = 0, t2 = obj.length; t1 < t2; t1++) {
                    this.set_type(obj[t1], type);
                }
                return true;
            }
            t = this.settings.types;
            obj = this.get_node(obj);
            if (!t[type] || !obj) {
                return false;
            }
            d = this.get_node(obj, true);
            if (d && d.length) {
                a = d.children(".jstree-anchor");
            }
            old_type = obj.type;
            old_icon = this.get_icon(obj);
            obj.type = type;
            if (old_icon === true || t[old_type] && t[old_type].icon !== undefined && old_icon === t[old_type].icon) {
                this.set_icon(obj, t[type].icon !== undefined ? t[type].icon : true);
            }
            if (t[old_type].li_attr !== undefined && typeof t[old_type].li_attr === "object") {
                for (k in t[old_type].li_attr) {
                    if (t[old_type].li_attr.hasOwnProperty(k)) {
                        if (k === "id") {
                            continue;
                        } else if (k === "class") {
                            m[obj.id].li_attr["class"] = (m[obj.id].li_attr["class"] || "").replace(t[old_type].li_attr[k], "");
                            if (d) {
                                d.removeClass(t[old_type].li_attr[k]);
                            }
                        } else if (m[obj.id].li_attr[k] === t[old_type].li_attr[k]) {
                            m[obj.id].li_attr[k] = null;
                            if (d) {
                                d.removeAttr(k);
                            }
                        }
                    }
                }
            }
            if (t[old_type].a_attr !== undefined && typeof t[old_type].a_attr === "object") {
                for (k in t[old_type].a_attr) {
                    if (t[old_type].a_attr.hasOwnProperty(k)) {
                        if (k === "id") {
                            continue;
                        } else if (k === "class") {
                            m[obj.id].a_attr["class"] = (m[obj.id].a_attr["class"] || "").replace(t[old_type].a_attr[k], "");
                            if (a) {
                                a.removeClass(t[old_type].a_attr[k]);
                            }
                        } else if (m[obj.id].a_attr[k] === t[old_type].a_attr[k]) {
                            if (k === "href") {
                                m[obj.id].a_attr[k] = "#";
                                if (a) {
                                    a.attr("href", "#");
                                }
                            } else {
                                delete m[obj.id].a_attr[k];
                                if (a) {
                                    a.removeAttr(k);
                                }
                            }
                        }
                    }
                }
            }
            if (t[type].li_attr !== undefined && typeof t[type].li_attr === "object") {
                for (k in t[type].li_attr) {
                    if (t[type].li_attr.hasOwnProperty(k)) {
                        if (k === "id") {
                            continue;
                        } else if (m[obj.id].li_attr[k] === undefined) {
                            m[obj.id].li_attr[k] = t[type].li_attr[k];
                            if (d) {
                                if (k === "class") {
                                    d.addClass(t[type].li_attr[k]);
                                } else {
                                    d.attr(k, t[type].li_attr[k]);
                                }
                            }
                        } else if (k === "class") {
                            m[obj.id].li_attr["class"] = t[type].li_attr[k] + " " + m[obj.id].li_attr["class"];
                            if (d) {
                                d.addClass(t[type].li_attr[k]);
                            }
                        }
                    }
                }
            }
            if (t[type].a_attr !== undefined && typeof t[type].a_attr === "object") {
                for (k in t[type].a_attr) {
                    if (t[type].a_attr.hasOwnProperty(k)) {
                        if (k === "id") {
                            continue;
                        } else if (m[obj.id].a_attr[k] === undefined) {
                            m[obj.id].a_attr[k] = t[type].a_attr[k];
                            if (a) {
                                if (k === "class") {
                                    a.addClass(t[type].a_attr[k]);
                                } else {
                                    a.attr(k, t[type].a_attr[k]);
                                }
                            }
                        } else if (k === "href" && m[obj.id].a_attr[k] === "#") {
                            m[obj.id].a_attr["href"] = t[type].a_attr["href"];
                            if (a) {
                                a.attr("href", t[type].a_attr["href"]);
                            }
                        } else if (k === "class") {
                            m[obj.id].a_attr["class"] = t[type].a_attr["class"] + " " + m[obj.id].a_attr["class"];
                            if (a) {
                                a.addClass(t[type].a_attr[k]);
                            }
                        }
                    }
                }
            }
            return true;
        };
    };
    $.jstree.defaults.unique = {
        case_sensitive: false,
        duplicate: function(name, counter) {
            return name + " (" + counter + ")";
        }
    };
    $.jstree.plugins.unique = function(options, parent) {
        this.check = function(chk, obj, par, pos, more) {
            if (parent.check.call(this, chk, obj, par, pos, more) === false) {
                return false;
            }
            obj = obj && obj.id ? obj : this.get_node(obj);
            par = par && par.id ? par : this.get_node(par);
            if (!par || !par.children) {
                return true;
            }
            var n = chk === "rename_node" ? pos : obj.text, c = [], s = this.settings.unique.case_sensitive, m = this._model.data, i, j;
            for (i = 0, j = par.children.length; i < j; i++) {
                c.push(s ? m[par.children[i]].text : m[par.children[i]].text.toLowerCase());
            }
            if (!s) {
                n = n.toLowerCase();
            }
            switch (chk) {
              case "delete_node":
                return true;

              case "rename_node":
                i = $.inArray(n, c) === -1 || obj.text && obj.text[s ? "toString" : "toLowerCase"]() === n;
                if (!i) {
                    this._data.core.last_error = {
                        error: "check",
                        plugin: "unique",
                        id: "unique_01",
                        reason: "Child with name " + n + " already exists. Preventing: " + chk,
                        data: JSON.stringify({
                            chk: chk,
                            pos: pos,
                            obj: obj && obj.id ? obj.id : false,
                            par: par && par.id ? par.id : false
                        })
                    };
                }
                return i;

              case "create_node":
                i = $.inArray(n, c) === -1;
                if (!i) {
                    this._data.core.last_error = {
                        error: "check",
                        plugin: "unique",
                        id: "unique_04",
                        reason: "Child with name " + n + " already exists. Preventing: " + chk,
                        data: JSON.stringify({
                            chk: chk,
                            pos: pos,
                            obj: obj && obj.id ? obj.id : false,
                            par: par && par.id ? par.id : false
                        })
                    };
                }
                return i;

              case "copy_node":
                i = $.inArray(n, c) === -1;
                if (!i) {
                    this._data.core.last_error = {
                        error: "check",
                        plugin: "unique",
                        id: "unique_02",
                        reason: "Child with name " + n + " already exists. Preventing: " + chk,
                        data: JSON.stringify({
                            chk: chk,
                            pos: pos,
                            obj: obj && obj.id ? obj.id : false,
                            par: par && par.id ? par.id : false
                        })
                    };
                }
                return i;

              case "move_node":
                i = obj.parent === par.id && (!more || !more.is_multi) || $.inArray(n, c) === -1;
                if (!i) {
                    this._data.core.last_error = {
                        error: "check",
                        plugin: "unique",
                        id: "unique_03",
                        reason: "Child with name " + n + " already exists. Preventing: " + chk,
                        data: JSON.stringify({
                            chk: chk,
                            pos: pos,
                            obj: obj && obj.id ? obj.id : false,
                            par: par && par.id ? par.id : false
                        })
                    };
                }
                return i;
            }
            return true;
        };
        this.create_node = function(par, node, pos, callback, is_loaded) {
            if (!node || node.text === undefined) {
                if (par === null) {
                    par = $.jstree.root;
                }
                par = this.get_node(par);
                if (!par) {
                    return parent.create_node.call(this, par, node, pos, callback, is_loaded);
                }
                pos = pos === undefined ? "last" : pos;
                if (!pos.toString().match(/^(before|after)$/) && !is_loaded && !this.is_loaded(par)) {
                    return parent.create_node.call(this, par, node, pos, callback, is_loaded);
                }
                if (!node) {
                    node = {};
                }
                var tmp, n, dpc, i, j, m = this._model.data, s = this.settings.unique.case_sensitive, cb = this.settings.unique.duplicate;
                n = tmp = this.get_string("New node");
                dpc = [];
                for (i = 0, j = par.children.length; i < j; i++) {
                    dpc.push(s ? m[par.children[i]].text : m[par.children[i]].text.toLowerCase());
                }
                i = 1;
                while ($.inArray(s ? n : n.toLowerCase(), dpc) !== -1) {
                    n = cb.call(this, tmp, ++i).toString();
                }
                node.text = n;
            }
            return parent.create_node.call(this, par, node, pos, callback, is_loaded);
        };
    };
    var div = document.createElement("DIV");
    div.setAttribute("unselectable", "on");
    div.setAttribute("role", "presentation");
    div.className = "jstree-wholerow";
    div.innerHTML = "&#160;";
    $.jstree.plugins.wholerow = function(options, parent) {
        this.bind = function() {
            parent.bind.call(this);
            this.element.on("ready.jstree set_state.jstree", $.proxy(function() {
                this.hide_dots();
            }, this)).on("init.jstree loading.jstree ready.jstree", $.proxy(function() {
                this.get_container_ul().addClass("jstree-wholerow-ul");
            }, this)).on("deselect_all.jstree", $.proxy(function(e, data) {
                this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");
            }, this)).on("changed.jstree", $.proxy(function(e, data) {
                this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");
                var tmp = false, i, j;
                for (i = 0, j = data.selected.length; i < j; i++) {
                    tmp = this.get_node(data.selected[i], true);
                    if (tmp && tmp.length) {
                        tmp.children(".jstree-wholerow").addClass("jstree-wholerow-clicked");
                    }
                }
            }, this)).on("open_node.jstree", $.proxy(function(e, data) {
                this.get_node(data.node, true).find(".jstree-clicked").parent().children(".jstree-wholerow").addClass("jstree-wholerow-clicked");
            }, this)).on("hover_node.jstree dehover_node.jstree", $.proxy(function(e, data) {
                if (e.type === "hover_node" && this.is_disabled(data.node)) {
                    return;
                }
                this.get_node(data.node, true).children(".jstree-wholerow")[e.type === "hover_node" ? "addClass" : "removeClass"]("jstree-wholerow-hovered");
            }, this)).on("contextmenu.jstree", ".jstree-wholerow", $.proxy(function(e) {
                if (this._data.contextmenu) {
                    e.preventDefault();
                    var tmp = $.Event("contextmenu", {
                        metaKey: e.metaKey,
                        ctrlKey: e.ctrlKey,
                        altKey: e.altKey,
                        shiftKey: e.shiftKey,
                        pageX: e.pageX,
                        pageY: e.pageY
                    });
                    $(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(tmp);
                }
            }, this)).on("click.jstree", ".jstree-wholerow", function(e) {
                e.stopImmediatePropagation();
                var tmp = $.Event("click", {
                    metaKey: e.metaKey,
                    ctrlKey: e.ctrlKey,
                    altKey: e.altKey,
                    shiftKey: e.shiftKey
                });
                $(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(tmp).focus();
            }).on("click.jstree", ".jstree-leaf > .jstree-ocl", $.proxy(function(e) {
                e.stopImmediatePropagation();
                var tmp = $.Event("click", {
                    metaKey: e.metaKey,
                    ctrlKey: e.ctrlKey,
                    altKey: e.altKey,
                    shiftKey: e.shiftKey
                });
                $(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(tmp).focus();
            }, this)).on("mouseover.jstree", ".jstree-wholerow, .jstree-icon", $.proxy(function(e) {
                e.stopImmediatePropagation();
                if (!this.is_disabled(e.currentTarget)) {
                    this.hover_node(e.currentTarget);
                }
                return false;
            }, this)).on("mouseleave.jstree", ".jstree-node", $.proxy(function(e) {
                this.dehover_node(e.currentTarget);
            }, this));
        };
        this.teardown = function() {
            if (this.settings.wholerow) {
                this.element.find(".jstree-wholerow").remove();
            }
            parent.teardown.call(this);
        };
        this.redraw_node = function(obj, deep, callback, force_render) {
            obj = parent.redraw_node.apply(this, arguments);
            if (obj) {
                var tmp = div.cloneNode(true);
                if ($.inArray(obj.id, this._data.core.selected) !== -1) {
                    tmp.className += " jstree-wholerow-clicked";
                }
                if (this._data.core.focused && this._data.core.focused === obj.id) {
                    tmp.className += " jstree-wholerow-hovered";
                }
                obj.insertBefore(tmp, obj.childNodes[0]);
            }
            return obj;
        };
    };
    if (document.registerElement && Object && Object.create) {
        var proto = Object.create(HTMLElement.prototype);
        proto.createdCallback = function() {
            var c = {
                core: {},
                plugins: []
            }, i;
            for (i in $.jstree.plugins) {
                if ($.jstree.plugins.hasOwnProperty(i) && this.attributes[i]) {
                    c.plugins.push(i);
                    if (this.getAttribute(i) && JSON.parse(this.getAttribute(i))) {
                        c[i] = JSON.parse(this.getAttribute(i));
                    }
                }
            }
            for (i in $.jstree.defaults.core) {
                if ($.jstree.defaults.core.hasOwnProperty(i) && this.attributes[i]) {
                    c.core[i] = JSON.parse(this.getAttribute(i)) || this.getAttribute(i);
                }
            }
            $(this).jstree(c);
        };
        try {
            document.registerElement("vakata-jstree", {
                prototype: proto
            });
        } catch (ignore) {}
    }
});