! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("xyshtml", [], e) : "object" == typeof exports ? exports.xyshtml = e() : t.xyshtml = e() }(this, function() {
    return function(t) {
        function e(n) { if (o[n]) return o[n].exports; var r = o[n] = { i: n, l: !1, exports: {} }; return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports }
        var o = {};
        return e.m = t, e.c = o, e.i = function(t) { return t }, e.d = function(t, o, n) { e.o(t, o) || Object.defineProperty(t, o, { configurable: !1, enumerable: !0, get: n }) }, e.n = function(t) { var o = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(o, "a", o), o }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "/public/", e(e.s = 66)
    }([function(t, e, o) {
        var n = o(22)("wks"),
            r = o(26),
            i = o(1).Symbol,
            s = "function" == typeof i;
        (t.exports = function(t) { return n[t] || (n[t] = s && i[t] || (s ? i : r)("Symbol." + t)) }).store = n
    }, function(t, e) { var o = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = o) }, function(t, e, o) {
        var n = o(9);
        t.exports = function(t) { if (!n(t)) throw TypeError(t + " is not an object!"); return t }
    }, function(t, e) { var o = t.exports = { version: "2.6.12" }; "number" == typeof __e && (__e = o) }, function(t, e, o) { t.exports = !o(19)(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) }, function(t, e) {
        var o = {}.hasOwnProperty;
        t.exports = function(t, e) { return o.call(t, e) }
    }, function(t, e, o) {
        var n = o(7),
            r = o(11);
        t.exports = o(4) ? function(t, e, o) { return n.f(t, e, r(1, o)) } : function(t, e, o) { return t[e] = o, t }
    }, function(t, e, o) {
        var n = o(2),
            r = o(40),
            i = o(55),
            s = Object.defineProperty;
        e.f = o(4) ? Object.defineProperty : function(t, e, o) {
            if (n(t), e = i(e, !0), n(o), r) try { return s(t, e, o) } catch (t) {}
            if ("get" in o || "set" in o) throw TypeError("Accessors not supported!");
            return "value" in o && (t[e] = o.value), t
        }
    }, function(t, e) { t.exports = function(t) { if (void 0 == t) throw TypeError("Can't call method on  " + t); return t } }, function(t, e) { t.exports = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function(t, e) { t.exports = {} }, function(t, e) { t.exports = function(t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } } }, function(t, e, o) {
        var n = o(22)("keys"),
            r = o(26);
        t.exports = function(t) { return n[t] || (n[t] = r(t)) }
    }, function(t, e) {
        var o = Math.ceil,
            n = Math.floor;
        t.exports = function(t) { return isNaN(t = +t) ? 0 : (t > 0 ? n : o)(t) }
    }, function(t, e) {
        var o = {}.toString;
        t.exports = function(t) { return o.call(t).slice(8, -1) }
    }, function(t, e, o) {
        var n = o(35);
        t.exports = function(t, e, o) {
            if (n(t), void 0 === e) return t;
            switch (o) {
                case 1:
                    return function(o) { return t.call(e, o) };
                case 2:
                    return function(o, n) { return t.call(e, o, n) };
                case 3:
                    return function(o, n, r) { return t.call(e, o, n, r) }
            }
            return function() { return t.apply(e, arguments) }
        }
    }, function(t, e, o) {
        var n = o(9),
            r = o(1).document,
            i = n(r) && n(r.createElement);
        t.exports = function(t) { return i ? r.createElement(t) : {} }
    }, function(t, e) { t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(t, e, o) {
        var n = o(1),
            r = o(3),
            i = o(15),
            s = o(6),
            a = o(5),
            c = function(t, e, o) {
                var u, d, l, f = t & c.F,
                    p = t & c.G,
                    h = t & c.S,
                    v = t & c.P,
                    m = t & c.B,
                    y = t & c.W,
                    g = p ? r : r[e] || (r[e] = {}),
                    w = g.prototype,
                    b = p ? n : h ? n[e] : (n[e] || {}).prototype;
                p && (o = e);
                for (u in o)(d = !f && b && void 0 !== b[u]) && a(g, u) || (l = d ? b[u] : o[u], g[u] = p && "function" != typeof b[u] ? o[u] : m && d ? i(l, n) : y && b[u] == l ? function(t) {
                    var e = function(e, o, n) {
                        if (this instanceof t) {
                            switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e);
                                case 2:
                                    return new t(e, o)
                            }
                            return new t(e, o, n)
                        }
                        return t.apply(this, arguments)
                    };
                    return e.prototype = t.prototype, e
                }(l) : v && "function" == typeof l ? i(Function.call, l) : l, v && ((g.virtual || (g.virtual = {}))[u] = l, t & c.R && w && !w[u] && s(w, u, l)))
            };
        c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
    }, function(t, e) { t.exports = function(t) { try { return !!t() } catch (t) { return !0 } } }, function(t, e) { t.exports = !0 }, function(t, e, o) {
        var n = o(7).f,
            r = o(5),
            i = o(0)("toStringTag");
        t.exports = function(t, e, o) { t && !r(t = o ? t : t.prototype, i) && n(t, i, { configurable: !0, value: e }) }
    }, function(t, e, o) {
        var n = o(3),
            r = o(1),
            i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        (t.exports = function(t, e) { return i[t] || (i[t] = void 0 !== e ? e : {}) })("versions", []).push({ version: n.version, mode: o(20) ? "pure" : "global", copyright: "Â© 2020 Denis Pushkarev (zloirock.ru)" })
    }, function(t, e, o) {
        var n = o(41),
            r = o(8);
        t.exports = function(t) { return n(r(t)) }
    }, function(t, e, o) {
        var n = o(13),
            r = Math.min;
        t.exports = function(t) { return t > 0 ? r(n(t), 9007199254740991) : 0 }
    }, function(t, e, o) {
        var n = o(8);
        t.exports = function(t) { return Object(n(t)) }
    }, function(t, e) {
        var o = 0,
            n = Math.random();
        t.exports = function(t) { return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++o + n).toString(36)) }
    }, function(t, e, o) {
        function n(t) { o(59), o(60) }
        var r = o(63)(o(28), o(64), n, "data-v-b8a7f1bc", null);
        t.exports = r.exports
    }, function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = o(33),
            r = o.n(n),
            i = o(61),
            s = o.n(i),
            a = o(62),
            c = o.n(a);
        e.default = {
            name: "html",
            mixins: [Animate],
            data: function() { return { iseditor: iseditor, defbg: s.a, deficon: c.a, isexec: !1, ishow: !1, ishover: !1, showcode: !1, showmsg: !0, mwidth: 0, theight: 0, mstyles: {}, mlang: {}, iurl: "about:blank", frameH: "100%", frameShow: "hidden", hintmessage: "", options: { animation: {}, highcode: { dtype: "all", locate: "at_module", source: "" } }, styles: { "margin-top": 0, "margin-bottom": 0, layerbg: { color: "transparent", image: "", iscovered: "0", overlay: "#000", opacity: "0.5", video: "", showbgcolor: "1", showbgimage: "1", showbgvideo: "0" } } } },
            beforeCreate: function() {
                try {
                    var t = window.uilang || "zh-cn",
                        e = this.$options._componentTag,
                        n = o(65)("./" + t + ".js");
                    window["mlan_" + e] = n(), ebus.$emit("getpluginlang", e)
                } catch (t) { console.error(t) }
            },
            created: function() {
                var t = this;
                this.isinited = !0;
                var e = this.attr.options.highcode || {};
                if (1 == this.iseditor) this.isexec = !0, this.ishow = !0, this.mlang = window.mlan_xyshtml || {}, this.updateHindMessage();
                else {
                    var o = e.dtype,
                        n = "at_module" == e.locate;
                    if ("all" == o) this.isexec = !0, this.ishow = n;
                    else {
                        var i = this,
                            s = i.ismob ? "mb" : "pc";
                        i.isexec = o == s, i.ishow = !!i.isexec && n, i.ispreview && $(window).on("resize", function() {
                            var t = $(this).width() > 768 ? "pc" : "mb";
                            i.isexec = o == t, i.ishow = !!i.isexec && n
                        })
                    }
                }
                this.$watch(function() { return { ismatch: this.isexec, highcode: this.attr.options.highcode } }, function(e) {
                    if (t.updateHindMessage(), !t.iseditor || t.ispreview) {
                        if (!e.ismatch) return !1;
                        setTimeout(function() { t.isinited = !1 }, 500);
                        var o = e.highcode || {},
                            n = o.locate,
                            i = t.iseditor && "mb" == o.dtype ? "0" : "1";
                        if ("at_module" == n) {
                            if (t.$nextTick(function() {
                                    var e = t;
                                    $(e.$refs.atiframe || []).on("load", function() {
                                        var t = this;
                                        e.frameH = "auto", setTimeout(function() {
                                            var o = t.contentWindow.document || t.contentDocument;
                                            if (o.body) {
                                                var n = o.body.scrollHeight,
                                                    r = "0" == i ? 108 : Math.ceil(n);
                                                e.frameH = e.iseditor ? Math.max(r, 108) : r
                                            }
                                            e.frameShow = "visible"
                                        }, 0)
                                    })
                                }), t.iseditor) {
                                var s = o.source,
                                    a = !t.isinited,
                                    c = t.isinited && !s.length;
                                if (a || c) return t.$nextTick(function() { $(t.$refs.atiframe || []).attr("srcdoc", s) }), !1
                            }
                            t.iurl = t.getIurl(i)
                        } else {
                            var u;
                            if (t.iseditor || "0" == i) return !1;
                            var d = o.source || "";
                            if (!d.length) return !1;
                            var l = d.match(new RegExp("<(script|style)[^>]*>(.|\\n)*?(?=<\\/\\1>)<\\/\\1>", "ig")) || [],
                                f = (u = d.match(new RegExp("<(meta|link)[^>]+\\/?>", "ig")) || []).concat.apply(u, r()(l)).join("");
                            if (/_body$/.test(n)) { f = (d.match(/<[^>]+>/gi) || []).join("").replace(new RegExp("<(script|style|meta|link)[^>]*>(<\\/\\1>)?", "ig"), "") + f }
                            if (!f.length) return !1;
                            switch (f = f.replace(new RegExp("<(script)[^>]*jquery.*\\.js(?:\\'|\")[^>]*>\\s*<\\/\\1>", "ig"), ""), n) {
                                case "after_head":
                                    $("head").prepend(f);
                                    break;
                                case "after_body":
                                    $("body").prepend(f);
                                    break;
                                case "before_head":
                                    $("head").append(f);
                                    break;
                                case "before_body":
                                    $("body").append(f)
                            }
                        }
                    }
                }, { deep: !0, immediate: !0 })
            },
            computed: { ismob: function() { return "ontouchstart" in document.documentElement }, ispreview: function() { return location.search.indexOf("_v=preview") >= 0 }, myanimate: function() { return !!(this.attr.options.animation || {}).animation } },
            methods: {
                onSaved: function() {
                    var t = this;
                    $(".html-div .vmodal-wrap").animate({ height: "0%" }), setTimeout(function() { $(".html-div .vmodal-wrap").css({ opacity: "0" }) }, 100);
                    var e = this.cmeditor.getValue(),
                        o = this.attr.options.highcode || {},
                        n = function() { o.source = e, t.ishover = !1, setTimeout(function() { t.showcode = !1 }, 500) };
                    if ("at_module" != o.locate) {
                        for (var r = !1, i = ["(?<!\\S)(alert|confirm|prompt|eval)\\s*\\((?!-)", "(?<!-)\\.(?=appendChild|insertBefore|innerHTML|outerHTML|insertAdjacentHTML)(?!-)", "(?<=window|document)\\.(localStorage|sessionStorage|write|writeln|cookie|createElement)(?!-)"], s = 0, a = i.length; s < a; s++) {
                            if (new RegExp(i[s], "i").test(e)) { r = !0; break }
                            r = !1
                        }
                        r ? this.$wpalert.show({
                            showCancel: !0,
                            content: this.mlang.saved_tips,
                            callBack: function(t) {
                                if (!t) return !1;
                                n()
                            }
                        }) : n()
                    } else n()
                },
                showModal: function() {
                    var t = this,
                        e = $(window);
                    t.mwidth = Math.ceil(.8 * e.width()), t.theight = Math.max(300, e.height() - 90), t.mstyles.height = t.theight + "px", t.showcode = !0, this.$nextTick(function() { $(".html-div .vmodal-wrap").css({ height: "100%", opacity: "1" }) }), t.showmsg = !0, jGlobal.asyncOuterCss(["codemirror/lib/codemirror.css", "codemirror/addon/hint/show-hint.css"]), jGlobal.asyncOuterJs("codemirror/lib/codemirror.js").then(function() {
                        jGlobal.asyncOuterJs(["codemirror/mode/css/css.js", "codemirror/mode/javascript/javascript.js", "codemirror/mode/xml/xml.js", "codemirror/mode/htmlmixed/htmlmixed.js", "codemirror/addon/hint/css-hint.js", "codemirror/addon/hint/xml-hint.js", "codemirror/addon/hint/html-hint.js", "codemirror/addon/hint/javascript-hint.js", "codemirror/addon/hint/show-hint.js", "codemirror/addon/fold/xml-fold.js", "codemirror/addon/edit/matchbrackets.js", "codemirror/addon/edit/closebrackets.js", "codemirror/addon/edit/matchtags.js", "codemirror/addon/edit/closetag.js"]).then(function() {
                            t.showmsg = !1;
                            var e = t.$refs.cmeditor;
                            t.cmeditor = CodeMirror.fromTextArea(e, { mode: "htmlmixed", tabSize: 4, lineNumbers: !0, line: !0, styleActiveLine: !0, spellcheck: !0, autocorrect: !0, matchTags: { bothTags: !0 }, autoCloseTags: !0, matchBrackets: !0, autoCloseBrackets: !0, hintOptions: { completeSingle: !1 }, extraKeys: { Ctrl: "autocomplete" } }), t.cmeditor.setValue((t.attr.options.highcode || {}).source)
                        })
                    })
                },
                onCancel: function() {
                    var t = this;
                    $(".html-div .vmodal-wrap").animate({ height: "0%" }), setTimeout(function() { $(".html-div .vmodal-wrap").css({ opacity: "0" }) }, 100), setTimeout(function() { t.showcode = !1 }, 500)
                },
                onClear: function() { this.cmeditor.setValue("") },
                onPreview: function() {
                    var t = this.iseditor && "mb" == this.attr.options.highcode.dtype ? "0" : "1";
                    window.open(this.getIurl(t))
                },
                updateHindMessage: function() {
                    if (!this.iseditor || !this.ispreview) {
                        var t = this.attr.options.highcode.dtype;
                        if ("" == this.attr.options.highcode.source) return void(this.hintmessage = "mb" == t ? this.mlang.mobileonly : "pc" == t ? this.mlang.pconly : this.mlang.nocode);
                        this.hintmessage = "mb" == t ? this.mlang.mobileonlytopreiew : "pc" == t ? this.mlang.pconlytopreview : this.mlang.savetopreview
                    }
                },
                getIurl: function(t) {
                    var e = "",
                        o = window.domain,
                        n = this.attr.id.substr(5).toLocaleLowerCase(),
                        r = this.iseditor || this.ispreview ? o + "/" : "";
                    return e += "?domain=" + o, e += "&id=" + n.split("").reverse().join(""), e += "&_r=" + t, e += "&_t=" + (new Date).getTime(), window.apihost + r + "gsohicode.html" + e
                }
            },
            props: ["attr"]
        }
    }, function(t, e) { t.exports = function() { return { block_title: "HTML", code_location: "Code location", code_device: "Operating Terminal", code_edit: "Edit the code", code_edit_tips: "Click here to edit the code", total: "All", mobile: "mobile", at_module: "Current module", after_head: "After <head>", before_head: "Before </head>", after_body: "After <body>", before_body: "Before </body>", before_html: "Before </html>", loading_tips: "Loading source-code editor...", ctrltips: "Note: press the Ctrl key to display code hints.", uninner_tips: "Please check the effect in non edit-mode", location_tips: 'The currently selected "code location" does not support HTML layout', saved: "Save", saved_tips: "The code contains scripts that may change the layout of the web page. Please use it carefully!", empty: "Empty", cancel: "Cancel", advancedcode: "Advanced&nbsp Code", nocode: "No code has been added to the plugin and is not visible in preview mode", mobileonly: "Mobileonly", "mobileonlytopreiew ": " This code only works on mobile sites, please view it in preview mode ", pconly: "only for PC sites ", "pconlytopreview ": " This code only works on PC sites, please view it in preview mode ", preview: "Preview", savetopreview: "This code has been added, please view it in preview mode after saving" } } }, function(t, e) { t.exports = function() { return { block_title: "HTML", code_location: "ä»£ç ä½ç½®", code_device: "ç”Ÿæ•ˆç»ˆç«¯", code_edit: "ç¼–å†™", code_edit_tips: "å•å‡»è¿™é‡Œç¼–è¾‘æºç ", total: "å…¨éƒ¨", mobile: "æ‰‹æœº", at_module: "å½“å‰æ¨¡å—", after_head: "<head>æ ‡ç­¾ä¹‹åŽ", before_head: "</head>æ ‡ç­¾ä¹‹å‰", after_body: "<body>æ ‡ç­¾ä¹‹åŽ", before_body: "</body>æ ‡ç­¾ä¹‹å‰", before_html: "</html>æ ‡ç­¾ä¹‹å‰", loading_tips: "æ­£åœ¨è½½å…¥æºç ç¼–è¾‘å™¨...", ctrltips: "æç¤ºï¼šæŒ‰ Ctrl é”®å¯æ˜¾ç¤ºä»£ç æç¤º", uninner_tips: "è¯·åœ¨éžç¼–è¾‘æ¨¡å¼ä¸‹æŸ¥çœ‹æ•ˆæžœ", location_tips: "å½“å‰æ‰€é€‰ã€Œä»£ç ä½ç½®ã€ä¸æ”¯æŒHTMLå¸ƒå±€", saved: "ä¿å­˜", saved_tips: "å½“å‰æºç ä¸­åŒ…å«å¯èƒ½æ”¹å˜ç½‘é¡µå¸ƒå±€çš„è„šæœ¬ï¼Œè¯·è°¨æ…Žä½¿ç”¨ï¼", empty: "æ¸…ç©º", cancel: "å–æ¶ˆ", advancedcode: "é«˜&nbsp çº§&nbsp ä»£&nbsp ç ", nocode: "å½“å‰æ’ä»¶è¿˜æœªæ·»åŠ ä»£ç ï¼Œé¢„è§ˆæ¨¡å¼ä¸­æš‚ä¸å¯è§", mobileonly: "åªå¯¹æ‰‹æœºç«¯ç”Ÿæ•ˆ", mobileonlytopreiew: "æ­¤ä»£ç åªå¯¹æ‰‹æœºç«™ç‚¹ç”Ÿæ•ˆï¼Œè¯·åˆ°é¢„è§ˆæ¨¡å¼ä¸­æŸ¥çœ‹", pconly: "åªå¯¹PCç«™ç‚¹ç”Ÿæ•ˆ", pconlytopreview: "æ­¤ä»£ç åªå¯¹PCç«™ç‚¹ç”Ÿæ•ˆï¼Œè¯·åˆ°é¢„è§ˆæ¨¡å¼ä¸­æŸ¥çœ‹", preview: "é¢„è§ˆ", savetopreview: "æ­¤ä»£ç å·²ç»æ·»åŠ ï¼Œä¿å­˜åŽè¯·åˆ°é¢„è§ˆæ¨¡å¼ä¸­æŸ¥çœ‹" } } }, function(t, e) { t.exports = function() { return { block_title: "HTML", code_location: "ä»£ç¢¼ä½ç½®", code_device: "ç”Ÿæ•ˆçµ‚ç«¯", code_edit: "ç·¨å¯«", code_edit_tips: "å–®æ“Šé€™è£ç·¨è¼¯æºç¢¼", total: "å…¨éƒ¨", mobile: "æ‰‹æ©Ÿ", at_module: "ç•¶å‰æ¨¡å¡Š", after_head: "<head>æ¨™ç°½ä¹‹å¾Œ", before_head: "</head>æ¨™ç°½ä¹‹å‰", after_body: "<body>æ¨™ç°½ä¹‹å¾Œ", before_body: "</body>æ¨™ç°½ä¹‹å‰", before_html: "</html>æ¨™ç°½ä¹‹å‰", loading_tips: "æ­£åœ¨è¼‰å…¥æºç¢¼ç·¨è¼¯å™¨...", ctrltips: "æç¤ºï¼šæŒ‰ Ctrl éµå¯é¡¯ç¤ºä»£ç¢¼æç¤º", uninner_tips: "è«‹åœ¨éžç·¨è¼¯æ¨¡å¼ä¸‹æŸ¥çœ‹æ•ˆæžœ", location_tips: "ç•¶å‰æ‰€é¸ã€Œä»£ç¢¼ä½ç½®ã€ä¸æ”¯æŒHTMLå¸ƒå±€", saved: "ä¿å­˜", saved_tips: "ç•¶å‰æºç¢¼ä¸­åŒ…å«å¯èƒ½æ”¹è®Šç¶²é å¸ƒå±€çš„è…³æœ¬ï¼Œè«‹è¬¹æ…Žä½¿ç”¨ï¼", empty: "æ¸…ç©º", cancel: "å–æ¶ˆ", advancedcode: "é«˜&nbsp ç´š&nbsp ä»£&nbsp ç¢¼", nocode: "ç•¶å‰æ’ä»¶é‚„æœªæ·»åŠ ä»£ç¢¼ï¼Œé è¦½æ¨¡å¼ä¸­æš«ä¸å¯è¦‹", mobileonly: "åªå°æ‰‹æ©Ÿç«¯ç”Ÿæ•ˆ", mobileonlytopreiew: "æ­¤ä»£ç¢¼åªå°æ‰‹æ©Ÿç«™é»žç”Ÿæ•ˆï¼Œè«‹åˆ°é è¦½æ¨¡å¼ä¸­æŸ¥çœ‹", pconly: "åªå°PCç«™é»žç”Ÿæ•ˆ", pconlytopreview: "æ­¤ä»£ç¢¼åªå°PCç«™é»žç”Ÿæ•ˆï¼Œè«‹åˆ°é è¦½æ¨¡å¼ä¸­æŸ¥çœ‹", preview: "é è¦½", savetopreview: "æ­¤ä»£ç¢¼å·²ç¶“æ·»åŠ ï¼Œä¿å­˜å¾Œè«‹åˆ°é è¦½æ¨¡å¼ä¸­æŸ¥çœ‹" } } }, function(t, e, o) { t.exports = { default: o(34), __esModule: !0 } }, function(t, e, o) {
        "use strict";
        e.__esModule = !0;
        var n = o(32),
            r = function(t) { return t && t.__esModule ? t : { default: t } }(n);
        e.default = function(t) { if (Array.isArray(t)) { for (var e = 0, o = Array(t.length); e < t.length; e++) o[e] = t[e]; return o } return (0, r.default)(t) }
    }, function(t, e, o) { o(58), o(57), t.exports = o(3).Array.from }, function(t, e) { t.exports = function(t) { if ("function" != typeof t) throw TypeError(t + " is not a function!"); return t } }, function(t, e, o) {
        var n = o(23),
            r = o(24),
            i = o(54);
        t.exports = function(t) {
            return function(e, o, s) {
                var a, c = n(e),
                    u = r(c.length),
                    d = i(s, u);
                if (t && o != o) {
                    for (; u > d;)
                        if ((a = c[d++]) != a) return !0
                } else
                    for (; u > d; d++)
                        if ((t || d in c) && c[d] === o) return t || d || 0; return !t && -1
            }
        }
    }, function(t, e, o) {
        var n = o(14),
            r = o(0)("toStringTag"),
            i = "Arguments" == n(function() { return arguments }()),
            s = function(t, e) { try { return t[e] } catch (t) {} };
        t.exports = function(t) { var e, o, a; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(o = s(e = Object(t), r)) ? o : i ? n(e) : "Object" == (a = n(e)) && "function" == typeof e.callee ? "Arguments" : a }
    }, function(t, e, o) {
        "use strict";
        var n = o(7),
            r = o(11);
        t.exports = function(t, e, o) { e in t ? n.f(t, e, r(0, o)) : t[e] = o }
    }, function(t, e, o) {
        var n = o(1).document;
        t.exports = n && n.documentElement
    }, function(t, e, o) { t.exports = !o(4) && !o(19)(function() { return 7 != Object.defineProperty(o(16)("div"), "a", { get: function() { return 7 } }).a }) }, function(t, e, o) {
        var n = o(14);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) { return "String" == n(t) ? t.split("") : Object(t) }
    }, function(t, e, o) {
        var n = o(10),
            r = o(0)("iterator"),
            i = Array.prototype;
        t.exports = function(t) { return void 0 !== t && (n.Array === t || i[r] === t) }
    }, function(t, e, o) {
        var n = o(2);
        t.exports = function(t, e, o, r) { try { return r ? e(n(o)[0], o[1]) : e(o) } catch (e) { var i = t.return; throw void 0 !== i && n(i.call(t)), e } }
    }, function(t, e, o) {
        "use strict";
        var n = o(47),
            r = o(11),
            i = o(21),
            s = {};
        o(6)(s, o(0)("iterator"), function() { return this }), t.exports = function(t, e, o) { t.prototype = n(s, { next: r(1, o) }), i(t, e + " Iterator") }
    }, function(t, e, o) {
        "use strict";
        var n = o(20),
            r = o(18),
            i = o(52),
            s = o(6),
            a = o(10),
            c = o(44),
            u = o(21),
            d = o(49),
            l = o(0)("iterator"),
            f = !([].keys && "next" in [].keys()),
            p = function() { return this };
        t.exports = function(t, e, o, h, v, m, y) {
            c(o, e, h);
            var g, w, b, _ = function(t) {
                    if (!f && t in j) return j[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function() { return new o(this, t) }
                    }
                    return function() { return new o(this, t) }
                },
                x = e + " Iterator",
                A = "values" == v,
                C = !1,
                j = t.prototype,
                M = j[l] || j["@@iterator"] || v && j[v],
                O = M || _(v),
                T = v ? A ? _("entries") : O : void 0,
                k = "Array" == e ? j.entries || M : M;
            if (k && (b = d(k.call(new t))) !== Object.prototype && b.next && (u(b, x, !0), n || "function" == typeof b[l] || s(b, l, p)), A && M && "values" !== M.name && (C = !0, O = function() { return M.call(this) }), n && !y || !f && !C && j[l] || s(j, l, O), a[e] = O, a[x] = p, v)
                if (g = { values: A ? O : _("values"), keys: m ? O : _("keys"), entries: T }, y)
                    for (w in g) w in j || i(j, w, g[w]);
                else r(r.P + r.F * (f || C), e, g);
            return g
        }
    }, function(t, e, o) {
        var n = o(0)("iterator"),
            r = !1;
        try {
            var i = [7][n]();
            i.return = function() { r = !0 }, Array.from(i, function() { throw 2 })
        } catch (t) {}
        t.exports = function(t, e) {
            if (!e && !r) return !1;
            var o = !1;
            try {
                var i = [7],
                    s = i[n]();
                s.next = function() { return { done: o = !0 } }, i[n] = function() { return s }, t(i)
            } catch (t) {}
            return o
        }
    }, function(t, e, o) {
        var n = o(2),
            r = o(48),
            i = o(17),
            s = o(12)("IE_PROTO"),
            a = function() {},
            c = function() {
                var t, e = o(16)("iframe"),
                    n = i.length;
                for (e.style.display = "none", o(39).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; n--;) delete c.prototype[i[n]];
                return c()
            };
        t.exports = Object.create || function(t, e) { var o; return null !== t ? (a.prototype = n(t), o = new a, a.prototype = null, o[s] = t) : o = c(), void 0 === e ? o : r(o, e) }
    }, function(t, e, o) {
        var n = o(7),
            r = o(2),
            i = o(51);
        t.exports = o(4) ? Object.defineProperties : function(t, e) { r(t); for (var o, s = i(e), a = s.length, c = 0; a > c;) n.f(t, o = s[c++], e[o]); return t }
    }, function(t, e, o) {
        var n = o(5),
            r = o(25),
            i = o(12)("IE_PROTO"),
            s = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) { return t = r(t), n(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null }
    }, function(t, e, o) {
        var n = o(5),
            r = o(23),
            i = o(36)(!1),
            s = o(12)("IE_PROTO");
        t.exports = function(t, e) {
            var o, a = r(t),
                c = 0,
                u = [];
            for (o in a) o != s && n(a, o) && u.push(o);
            for (; e.length > c;) n(a, o = e[c++]) && (~i(u, o) || u.push(o));
            return u
        }
    }, function(t, e, o) {
        var n = o(50),
            r = o(17);
        t.exports = Object.keys || function(t) { return n(t, r) }
    }, function(t, e, o) { t.exports = o(6) }, function(t, e, o) {
        var n = o(13),
            r = o(8);
        t.exports = function(t) {
            return function(e, o) {
                var i, s, a = String(r(e)),
                    c = n(o),
                    u = a.length;
                return c < 0 || c >= u ? t ? "" : void 0 : (i = a.charCodeAt(c), i < 55296 || i > 56319 || c + 1 === u || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343 ? t ? a.charAt(c) : i : t ? a.slice(c, c + 2) : s - 56320 + (i - 55296 << 10) + 65536)
            }
        }
    }, function(t, e, o) {
        var n = o(13),
            r = Math.max,
            i = Math.min;
        t.exports = function(t, e) { return t = n(t), t < 0 ? r(t + e, 0) : i(t, e) }
    }, function(t, e, o) {
        var n = o(9);
        t.exports = function(t, e) { if (!n(t)) return t; var o, r; if (e && "function" == typeof(o = t.toString) && !n(r = o.call(t))) return r; if ("function" == typeof(o = t.valueOf) && !n(r = o.call(t))) return r; if (!e && "function" == typeof(o = t.toString) && !n(r = o.call(t))) return r; throw TypeError("Can't convert object to primitive value") }
    }, function(t, e, o) {
        var n = o(37),
            r = o(0)("iterator"),
            i = o(10);
        t.exports = o(3).getIteratorMethod = function(t) { if (void 0 != t) return t[r] || t["@@iterator"] || i[n(t)] }
    }, function(t, e, o) {
        "use strict";
        var n = o(15),
            r = o(18),
            i = o(25),
            s = o(43),
            a = o(42),
            c = o(24),
            u = o(38),
            d = o(56);
        r(r.S + r.F * !o(46)(function(t) { Array.from(t) }), "Array", {
            from: function(t) {
                var e, o, r, l, f = i(t),
                    p = "function" == typeof this ? this : Array,
                    h = arguments.length,
                    v = h > 1 ? arguments[1] : void 0,
                    m = void 0 !== v,
                    y = 0,
                    g = d(f);
                if (m && (v = n(v, h > 2 ? arguments[2] : void 0, 2)), void 0 == g || p == Array && a(g))
                    for (e = c(f.length), o = new p(e); e > y; y++) u(o, y, m ? v(f[y], y) : f[y]);
                else
                    for (l = g.call(f), o = new p; !(r = l.next()).done; y++) u(o, y, m ? s(l, v, [r.value, y], !0) : r.value);
                return o.length = y, o
            }
        })
    }, function(t, e, o) {
        "use strict";
        var n = o(53)(!0);
        o(45)(String, "String", function(t) { this._t = String(t), this._i = 0 }, function() {
            var t, e = this._t,
                o = this._i;
            return o >= e.length ? { value: void 0, done: !0 } : (t = n(e, o), this._i += t.length, { value: t, done: !1 })
        })
    }, function(t, e) {}, function(t, e) {}, function(t, e, o) { t.exports = o.p + "vplugin/html/assets/28d03c3b293f605320ee5c4e3f4ef579.jpg" }, function(t, e) { t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAABYBAMAAAAaQ/SyAAAALVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACttl6nAAAADnRSTlMAgEDAEJhb8DDg0LAgcKu8tiIAAAKMSURBVFjD7Zi9TuNAEMcXkxgDyQloDyKeIEJ3RxulQyCBOOkaGuQnSEVBgax03AkJ3RNEJx11RHHVFcgNJYgnQOIjWAHdPgMz+23JXu9SoVOmSGxrf7H9n93/zIYQiKu/1C1+LxMZl9Q9PgmmmXhA9A+H9n0Y+pwiU6d+cYDQrSf0AEwj8YTogni60aJb7Inn28E7psQxWjD6H3+lX64MCWH0Cxfc+UaEdGA4IUOQ3p0hPYD6BD7uPCCUYBWhJw/og4TuJ9AEem9Q8AYoTO78oWtKY2foO1HWu0tIre8C/aBf+MGAQa0sroZqAzpiBxHFxwvydlACzTG/ESbfxc+sXwmBH2bsYJZZ3BQMOKuCAmVPp8xyGujaVdAGXFiT4j0KJ44rILDQrCvFO4eveRhxaIem1Hkk7lBDD+5aoTYvQEo8iGPK8lUO1RJe6pR4olI82aBpOD0ihnhCEZWqImhfSyXEg9gyUlUAhUZShHgoSaKvFkCzuixGRnp6uvAVQNdSMUM88aY3pdCMElyLxzWh/VJIp9YQDxcLHVvU05NIi8cm0r0F0tNVi8e6htgCqYVhiBeZi6Nw7rXYxZx4m2Z7UgjNi3lkiHcB75laIVTqOSdeM9c0FC/CU74QtHhtc2WUQOKHEymevLXdjS4wk4ESr6kXiwVCsdjUSNUcjCuhANfutHqmMOdgpV7eA/Opa8WGshW3QtFKiu2wzGe45FyfTta7k5ZgAv1HkM8Ghe9qOn5bobaEXjygW1Z1Wrr2uMSQdU69fMNUEXW+kcTiMl51ZBodrhvbHI/XnfbGH4c4+CfvUfwiFvXeJ0ay4fCJM9VaePyzwP0wGHgwmWhCyLY7lX3T7r342S2+8oS+AgTuXOwNYygdAAAAAElFTkSuQmCC" }, function(t, e) {
        t.exports = function(t, e, o, n, r) {
            var i, s = t = t || {},
                a = typeof t.default;
            "object" !== a && "function" !== a || (i = t, s = t.default);
            var c = "function" == typeof s ? s.options : s;
            e && (c.render = e.render, c.staticRenderFns = e.staticRenderFns), n && (c._scopeId = n);
            var u;
            if (r ? (u = function(t) { t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(r) }, c._ssrRegister = u) : o && (u = o), u) {
                var d = c.functional,
                    l = d ? c.render : c.beforeCreate;
                d ? c.render = function(t, e) { return u.call(e), l(t, e) } : c.beforeCreate = l ? [].concat(l, u) : [u]
            }
            return { esModule: i, exports: s, options: c }
        }
    }, function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("section", { directives: [{ name: "gso-animate", rawName: "v-gso-animate", value: t.attr.options.animation, expression: "attr.options.animation" }, { name: "show", rawName: "v-show", value: t.ishow, expression: "ishow" }], staticClass: "html-div", style: { padding: t.attr.styles["margin-top"] + "px 0 " + t.attr.styles["margin-bottom"] + "px" } }, [t.iseditor && !t.ispreview ? o("div", [o("div", { staticClass: "Advanced_Code", style: { backgroundImage: "url(" + t.defbg + ")" } }, [o("div", { staticStyle: { display: "flex" } }, [o("div", { staticClass: "Advanced_img" }, [o("img", { attrs: { src: t.deficon } })]), t._v(" "), o("div", { staticClass: "Advanced_txt" }, [o("div", { staticClass: "Advanced_txt1", domProps: { innerHTML: t._s(t.mlang.advancedcode) } }), t._v(" "), o("div", { staticClass: "Advanced_txt2" }, [t._v("Custom HTML Block")])])]), t._v(" "), o("div", { staticStyle: { display: "flex" } }, [o("div", { staticClass: "edit_new", on: { click: t.showModal } }, [t._v(t._s(t.mlang.code_edit))])]), t._v(" "), o("div", { staticClass: "text_new", domProps: { innerHTML: t._s(t.hintmessage) } })])]) : [t.ishow && "at_module" == t.attr.options.highcode.locate ? [o("iframe", { ref: "atiframe", style: { position: "relative", visibility: t.frameShow }, attrs: { sandbox: "allow-scripts allow-same-origin allow-popups-to-escape-sandbox allow-popups", src: t.iurl, frameborder: "0", scrolling: "no", width: "100%", height: t.frameH, allowtransparency: "true" } })] : t._e()], t._v(" "), t.iseditor && t.showcode ? o("Modal", { attrs: { headerHide: !1, closable: !0, title: t.mlang.code_edit, width: t.mwidth, styles: t.mstyles }, model: { value: t.showcode, callback: function(e) { t.showcode = e }, expression: "showcode" } }, [o("div", { staticClass: "code-wrapper", style: { height: t.theight - 120 + "px" } }, [o("textarea", { ref: "cmeditor" }), t._v(" "), t.showmsg ? o("div", { staticClass: "masktips", staticStyle: { "background-color": "#fff", color: "#aaa" } }, [t._v(t._s(t.mlang.loading_tips))]) : t._e()]), t._v(" "), o("div", { staticClass: "editor_bmbtns" }, [o("div", { staticClass: "editor_left_z" }), t._v(" "), o("p", { directives: [{ name: "show", rawName: "v-show", value: !t.showmsg, expression: "!showmsg" }], staticStyle: { color: "#aaa", "font-size": "12px", "padding-left": "20px" } }, [t._v(t._s(t.mlang.ctrltips))]), t._v(" "), o("div", { staticClass: "editor_btsn" }, [o("div", { staticClass: "btnsave1", on: { click: t.onClear } }, [t._v(t._s(t.mlang.empty))]), t._v(" "), o("div", { staticClass: "btnsave2", on: { click: t.onCancel } }, [t._v(t._s(t.mlang.cancel))]), t._v(" "), o("div", { staticClass: "btnsave3", on: { click: t.onSaved } }, [t._v(t._s(t.mlang.saved))])])])]) : t._e()], 2)
            },
            staticRenderFns: []
        }
    }, function(t, e, o) {
        function n(t) { return o(r(t)) }

        function r(t) { var e = i[t]; if (!(e + 1)) throw new Error("Cannot find module '" + t + "'."); return e }
        var i = { "./en-us.js": 29, "./zh-cn.js": 30, "./zh-tw.js": 31 };
        n.keys = function() { return Object.keys(i) }, n.resolve = r, t.exports = n, n.id = 65
    }, function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = o(27),
            r = o.n(n);
        "undefined" != typeof window && window.Vue && Vue.component("xys" + r.a.name, r.a), r.a.install = function(t) { t.component("xys" + r.a.name, r.a) }, e.default = r.a
    }])
});