! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("xyspictures1", [], e) : "object" == typeof exports ? exports.xyspictures1 = e() : t.xyspictures1 = e() }(this, function() {
    return function(t) {
        function e(s) { if (i[s]) return i[s].exports; var n = i[s] = { i: s, l: !1, exports: {} }; return t[s].call(n.exports, n, n.exports, e), n.l = !0, n.exports }
        var i = {};
        return e.m = t, e.c = i, e.i = function(t) { return t }, e.d = function(t, i, s) { e.o(t, i) || Object.defineProperty(t, i, { configurable: !1, enumerable: !0, get: s }) }, e.n = function(t) { var i = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(i, "a", i), i }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "/public/", e(e.s = 14)
    }([function(t, e, i) {
        function s(t) { i(5) }
        var n = i(11)(i(1), i(12), s, "data-v-325f81bc", null);
        t.exports = n.exports
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = i(6),
            n = i.n(s),
            o = i(7),
            r = i.n(o),
            a = i(8),
            l = i.n(a),
            c = i(9),
            p = i.n(c),
            u = i(10),
            d = i.n(u);
        e.default = {
            name: "pictures1",
            mixins: [Texteditable, Animate, mlangTrans],
            data: function() { return { iseditor: iseditor, swiper: "", options: { showtitle: "1", showsubtitle: "1", animation: {}, "title-animation": {}, "subtitle-animation": {}, "desc-animation": {}, title: "", subtitle: "PHOTO", title_desc: "", autoplay: "0", interval: 3e3, resource: [{ pic: n.a, picattr: { alt: "", linkattr: {}, title: "" } }, { pic: r.a, picattr: { alt: "", linkattr: {}, title: "" } }, { pic: l.a, picattr: { alt: "", linkattr: {}, title: "" } }, { pic: p.a, picattr: { alt: "", linkattr: {}, title: "" } }, { pic: d.a, picattr: { alt: "", linkattr: {}, title: "" } }] }, styles: { jso_M_Title: "Jso-M-Title", jso_S_Title: "Jso-S-Title", jso_Text: "Jso-Text", "margin-top": 50, "margin-bottom": 50, "uptitle-margin": 28, "subtitle-margin": 50, "btn-color": "#000", layerbg: { color: "#fff", image: "", iscovered: "0", overlay: "#000", opacity: "0.5", video: "", showbgcolor: "1", showbgimage: "1", showbgvideo: "0" } } } },
            beforeCreate: function() {
                try {
                    var t = window.uilang || "zh-cn",
                        e = this.$options._componentTag,
                        s = i(13)("./" + t + ".js");
                    window["mlan_" + e] = s(), ebus.$emit("getpluginlang", e)
                } catch (t) { console.error(t) }
            },
            created: function() {
                var t = this,
                    e = this,
                    i = +new Date;
                e.swiperid = "swiper-" + i, e.swiperpagid = "swiperpag-" + i;
                var s = "swiper_js-" + i,
                    n = "swiper_css-" + i,
                    o = "";
                if (0 == $("#" + s).length) {
                    var r = document.createElement("script");
                    o = function() { e.setSwiper() }, r.id = s, r.type = "text/javascript", r.readyState ? r.onreadystatechange = function() { "loaded" != r.readyState && "complete" != r.readyState || (r.onreadystatechange = null, o()) } : r.onload = o, r.src = statichost + "/swiper/swiper.min.js", document.body.appendChild(r)
                } else setTimeout(function() { e.setSwiper() }, 100);
                0 == $("#" + n).length && $("<link>", { id: n, rel: "stylesheet", type: "text/css", href: statichost + "/swiper/swiper.min.css" }).prependTo("head"), e.$watch("attr.options.resource", function(e) {
                    var i = t;
                    i.$nextTick(function() { i.swiper.destroy(), i.setSwiper() })
                }), ebus.$on("imgpicker_onSure", function(e) { e && (t.swiper.destroy(), t.setSwiper()) })
            },
            methods: {
                setSwiper: function() { this.$nextTick(function() { this.instantSwiper() }) },
                instantSwiper: function() {
                    var t = this,
                        e = t.attr.options,
                        i = iseditor || "0" == e.autoplay,
                        s = { delay: e.interval, stopOnLastSlide: !1, disableOnInteraction: !0 },
                        n = !i && s;
                    t.swiper = new Swiper("#" + t.swiperid, { autoplay: n, speed: 1e3, loop: !0, centeredSlides: !0, grabCursor: !0, allowTouchMove: !iseditor, slidesPerView: 2, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, observer: !0, observeParents: !0, observeSlideChildren: !0, breakpoints: { 668: { slidesPerView: 1 } } })
                }
            },
            computed: { myanimate: function() { return !!(this.attr.options.animation || {}).animation } },
            props: ["attr"]
        }
    }, function(t, e) { t.exports = function() { return { block_title: "Pictures 1", delconfirm: "Are you sure to delete it?", property: "Property", style: "Style", thumbnail: "Thumbnail", choose: "Choose", remove: "Delete", titlespace: "Title Lower Margin", subtitlespace: "Subtitle Lower Margin", bgcolor: "Background/Frame", animated: "Animated", browsertip: "Valid only in browse mode", autoplay: "Auto Play", interval: "Interval", pictures: "Pictures", btncolor: "Button Background", desc: "AllÂ theÂ wordsÂ hereÂ areÂ forÂ demonstrationÂ purposes.Â pleaseÂ enterÂ yourÂ ownÂ businessÂ contentÂ asset.", imgsize: " Suggested image size 690*390" } } }, function(t, e) { t.exports = function() { return { block_title: "å›¾ç‰‡é›† 1", delconfirm: "ç¡®å®šè¦åˆ é™¤å—ï¼Ÿ", property: "å±žæ€§", style: "æ ·å¼", thumbnail: "ç¼©ç•¥å›¾", choose: "é€‰æ‹©", remove: "åˆ é™¤", titlespace: "æ ‡é¢˜ä¸‹è¾¹è·", subtitlespace: "å‰¯æ ‡é¢˜ä¸‹è¾¹è·", bgcolor: "èƒŒæ™¯/è¾¹æ¡†", animated: "åŠ¨ç”»", browsertip: "ä»…åœ¨æµè§ˆæ¨¡å¼ä¸‹æœ‰æ•ˆ", autoplay: "è‡ªåŠ¨åˆ‡æ¢", interval: "åˆ‡æ¢æ—¶é•¿", pictures: "å›¾ç‰‡é›†", btncolor: "åˆ‡æ¢æŒ‰é’®èƒŒæ™¯", desc: "è¿™é‡Œçš„æ‰€æœ‰æ–‡å­—éƒ½æ˜¯å‡ºäºŽç¤ºèŒƒç›®çš„ã€‚è¯·è¾“å…¥æ‚¨è‡ªå·±çš„ä¸šåŠ¡å†…å®¹èµ„äº§ã€‚", imgsize: "å»ºè®®å›¾ç‰‡å°ºå¯¸ï¼š690*390px" } } }, function(t, e) { t.exports = function() { return { block_title: "åœ–ç‰‡é›† 1", delconfirm: "ç¢ºå®šè¦åˆªé™¤å—Žï¼Ÿ", property: "å±¬æ€§", style: "æ¨£å¼", thumbnail: "ç¸®ç•¥åœ–", choose: "é¸æ“‡", remove: "åˆªé™¤", titlespace: "æ¨™é¡Œä¸‹é‚Šè·", subtitlespace: "å‰¯æ¨™é¡Œä¸‹é‚Šè·", bgcolor: "èƒŒæ™¯/é‚Šæ¡†", animated: "å‹•ç•«", browsertip: "åƒ…åœ¨ç€è¦½æ¨¡å¼ä¸‹æœ‰æ•ˆ", autoplay: "è‡ªå‹•åˆ‡æ›", interval: "åˆ‡æ›æ™‚é•·", pictures: "åœ–ç‰‡é›†", btncolor: "åˆ‡æ›æŒ‰éˆ•èƒŒæ™¯", desc: "é€™è£çš„æ‰€æœ‰æ–‡å­—éƒ½æ˜¯å‡ºæ–¼ç¤ºç¯„ç›®çš„ã€‚è«‹è¼¸å…¥æ‚¨è‡ªå·±çš„æ¥­å‹™å…§å®¹è³‡ç”¢ã€‚", imgsize: "å»ºè­°åœ–ç‰‡å°ºå¯¸ï¼š690*390px" } } }, function(t, e) {}, function(t, e, i) { t.exports = i.p + "vplugin/pictures1/assets/d4db87bdc795857b707b8ed30f404ff3.jpg" }, function(t, e, i) { t.exports = i.p + "vplugin/pictures1/assets/438a4e257090fc8baf343af80b909343.jpg" }, function(t, e, i) { t.exports = i.p + "vplugin/pictures1/assets/80652eeb374ab8aaf46f124f67029ea3.jpg" }, function(t, e, i) { t.exports = i.p + "vplugin/pictures1/assets/cf506f361688e8b7bbe4f513b9c5d9d3.jpg" }, function(t, e, i) { t.exports = i.p + "vplugin/pictures1/assets/fed0cd0fe2bc530e468eca7d1afd98d0.jpg" }, function(t, e) {
        t.exports = function(t, e, i, s, n) {
            var o, r = t = t || {},
                a = typeof t.default;
            "object" !== a && "function" !== a || (o = t, r = t.default);
            var l = "function" == typeof r ? r.options : r;
            e && (l.render = e.render, l.staticRenderFns = e.staticRenderFns), s && (l._scopeId = s);
            var c;
            if (n ? (c = function(t) { t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(n) }, l._ssrRegister = c) : i && (c = i), c) {
                var p = l.functional,
                    u = p ? l.render : l.beforeCreate;
                p ? l.render = function(t, e) { return c.call(e), u(t, e) } : l.beforeCreate = u ? [].concat(u, c) : [c]
            }
            return { esModule: o, exports: r, options: l }
        }
    }, function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("section", { directives: [{ name: "gso-animate", rawName: "v-gso-animate", value: t.attr.options.animation, expression: "attr.options.animation" }], staticClass: "time05 padA about4 plug-padding-tb", style: { padding: t.attr.styles["margin-top"] + "px 0 " + t.attr.styles["margin-bottom"] + "px" } }, [i("div", { staticClass: "container containerM scontainer" }, ["1" == t.attr.options.showtitle || "1" == t.attr.options.showsubtitle ? i("div", { staticClass: "about4-container-row" }, [i("div", { staticClass: "col-12 about4-centert" }, ["1" == t.attr.options.showtitle ? i("div", { directives: [{ name: "texteditable", rawName: "v-texteditable.jso_M_Title", value: t.attr.options.title || t.$default("pictures"), expression: "attr.options.title||$default('pictures')", modifiers: { jso_M_Title: !0 } }, { name: "gso-animate", rawName: "v-gso-animate.showbtn", value: t.attr.options["title-animation"], expression: "attr.options['title-animation']", modifiers: { showbtn: !0 } }], staticClass: "about4title1", class: t.attr.styles.jso_M_Title }) : t._e(), t._v(" "), "1" == t.attr.options.showtitle ? i("div", { directives: [{ name: "texteditable", rawName: "v-texteditable.jso_S_Title", value: t.attr.options.subtitle, expression: "attr.options.subtitle", modifiers: { jso_S_Title: !0 } }, { name: "gso-animate", rawName: "v-gso-animate.showbtn", value: t.attr.options["subtitle-animation"], expression: "attr.options['subtitle-animation']", modifiers: { showbtn: !0 } }], staticClass: "about4title2 M-Title-padding-b", class: t.attr.styles.jso_S_Title, style: { "margin-bottom": t.attr.styles["uptitle-margin"] + "px" } }) : t._e(), t._v(" "), "1" == t.attr.options.showsubtitle ? i("div", { directives: [{ name: "texteditable", rawName: "v-texteditable.jso_Text", value: t.attr.options.title_desc || t.$default("desc"), expression: "attr.options.title_desc||$default('desc')", modifiers: { jso_Text: !0 } }, { name: "gso-animate", rawName: "v-gso-animate.showbtn", value: t.attr.options["desc-animation"], expression: "attr.options['desc-animation']", modifiers: { showbtn: !0 } }], staticClass: "about4title3 M-text-padding-b", class: t.attr.styles.jso_Text, style: { "margin-bottom": t.attr.styles["subtitle-margin"] + "px" } }) : t._e()])]) : t._e(), t._v(" "), i("div", { staticClass: "pc-banner" }, [i("div", { staticClass: "swiper-container swiperma0", attrs: { id: t.swiperid } }, [i("div", { staticClass: "swiper-wrapper swiper-slidemar0" }, t._l(t.attr.options.resource, function(e, s) { return i("div", { key: s, staticClass: "swiper-slide" }, [i("img", { attrs: { src: e.pic } }), t._v(" "), i("div", { staticClass: "layer-mask" })]) }), 0), t._v(" "), i("div", { staticClass: "button" }, [i("div", { staticClass: "swiper-button-prev", style: { "background-color": t.attr.styles["btn-color"] } }), t._v(" "), i("div", { staticClass: "swiper-button-next", style: { "background-color": t.attr.styles["btn-color"] } })])])])])])
            },
            staticRenderFns: []
        }
    }, function(t, e, i) {
        function s(t) { return i(n(t)) }

        function n(t) { var e = o[t]; if (!(e + 1)) throw new Error("Cannot find module '" + t + "'."); return e }
        var o = { "./en-us.js": 2, "./zh-cn.js": 3, "./zh-tw.js": 4 };
        s.keys = function() { return Object.keys(o) }, s.resolve = n, t.exports = s, s.id = 13
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = i(0),
            n = i.n(s);
        "undefined" != typeof window && window.Vue && Vue.component("xys" + n.a.name, n.a), n.a.install = function(t) { t.component("xys" + n.a.name, n.a) }, e.default = n.a
    }])
});