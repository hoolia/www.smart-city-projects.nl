! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("xysgraphic5", [], e) : "object" == typeof exports ? exports.xysgraphic5 = e() : t.xysgraphic5 = e() }(this, function() {
    return function(t) {
        function e(n) { if (i[n]) return i[n].exports; var a = i[n] = { i: n, l: !1, exports: {} }; return t[n].call(a.exports, a, a.exports, e), a.l = !0, a.exports }
        var i = {};
        return e.m = t, e.c = i, e.i = function(t) { return t }, e.d = function(t, i, n) { e.o(t, i) || Object.defineProperty(t, i, { configurable: !1, enumerable: !0, get: n }) }, e.n = function(t) { var i = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(i, "a", i), i }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "/public/", e(e.s = 15)
    }([function(t, e, i) {
        function n(t) { i(5) }
        var a = i(12)(i(1), i(13), n, "data-v-3a588062", null);
        t.exports = a.exports
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = i(6),
            a = i.n(n),
            o = i(7),
            s = i.n(o),
            r = i(8),
            l = i.n(r),
            c = i(9),
            p = i.n(c),
            d = i(10),
            m = i.n(d),
            u = i(11),
            g = i.n(u);
        e.default = {
            name: "graphic5",
            mixins: [Texteditable, Animate, mlangTrans],
            data: function() { return { iseditor: iseditor, defpics: [a.a, s.a, l.a, p.a, m.a], options: { showtitle: "1", showsubtitle: "1", showitemtitle: "1", animation: {}, "title-animation": {}, "subtitle-animation": {}, "desc-animation": {}, "loop-animation": {}, title: "", subtitle: "Graphic display", title_desc: "", items: [{ pic: a.a, desc: "", picattr: { alt: "", linkattr: {}, title: "" } }, { pic: s.a, desc: "", picattr: { alt: "", linkattr: {}, title: "" } }, { pic: l.a, desc: "", picattr: { alt: "", linkattr: {}, title: "" } }, { pic: p.a, desc: "", picattr: { alt: "", linkattr: {}, title: "" } }, { pic: m.a, desc: "", picattr: { alt: "", linkattr: {}, title: "" } }, { pic: g.a, desc: "", picattr: { alt: "", linkattr: {}, title: "" } }] }, styles: { jso_M_Title: "Jso-M-Title", jso_S_Title: "Jso-S-Title", jso_S_Title1: "Jso-S-Title", jso_Text: "Jso-Text", "margin-top": 60, "margin-bottom": 60, item_background: "#F2F3F9", "uptitle-margin": 30, "subtitle-margin": 80, layerbg: { color: "#fff", image: "", iscovered: "0", overlay: "#000", opacity: "0.5", video: "", showbgcolor: "1", showbgimage: "1", showbgvideo: "0" } } } },
            beforeCreate: function() {
                try {
                    var t = window.uilang || "zh-cn",
                        e = this.$options._componentTag,
                        n = i(14)("./" + t + ".js");
                    window["mlan_" + e] = n(), ebus.$emit("getpluginlang", e)
                } catch (t) { console.error(t) }
            },
            computed: { myanimate: function() { return !!(this.attr.options.animation || {}).animation } },
            props: ["attr"]
        }
    }, function(t, e) { t.exports = function() { return { block_title: "Graphic 5", delconfirm: "Are you sure to delete it?", property: "Property", style: "Style", thumbnail: "Thumbnail", choose: "Choose", animated: "Animated", remove: "Delete", titlespace: "Title Lower Margin", subtitlespace: "Subtitle Lower Margin", bgcolor: "Background/Frame", itembgcolor: "Column background", h1title: "Graphand text", title_desc: "All the words here are for demonstration purposes. Please enter your own business content asset.", itemdesc: "Title Name", imgsize: " Suggested image size 90*90", showitemtitle: "Column Title" } } }, function(t, e) { t.exports = function() { return { block_title: "å›¾æ–‡ 5", delconfirm: "ç¡®å®šè¦åˆ é™¤å—ï¼Ÿ", property: "å±žæ€§", style: "æ ·å¼", thumbnail: "ç¼©ç•¥å›¾", choose: "é€‰æ‹©", remove: "åˆ é™¤", animated: "åŠ¨ç”»", titlespace: "æ ‡é¢˜ä¸‹è¾¹è·", subtitlespace: "å‰¯æ ‡é¢˜ä¸‹è¾¹è·", bgcolor: "èƒŒæ™¯/è¾¹æ¡†", itembgcolor: "æ ç›®èƒŒæ™¯", h1title: "å›¾æ–‡å±•ç¤º", title_desc: "è¿™é‡Œçš„æ‰€æœ‰æ–‡å­—éƒ½æ˜¯å‡ºäºŽç¤ºèŒƒç›®çš„ã€‚è¾“å…¥æ‚¨è‡ªå·±çš„ä¸šåŠ¡å†…å®¹èµ„äº§ç­‰ç›¸å…³ä¿¡æ¯å³å¯ã€‚", itemdesc: "æ ‡é¢˜åç§°", imgsize: "å»ºè®®å›¾ç‰‡å°ºå¯¸ï¼š90*90px", showitemtitle: "æ ç›®æ ‡é¢˜" } } }, function(t, e) { t.exports = function() { return { block_title: "åœ–æ–‡ 5", delconfirm: "ç¢ºå®šè¦åˆªé™¤å—Žï¼Ÿ", property: "å±¬æ€§", style: "æ¨£å¼", thumbnail: "ç¸®ç•¥åœ–", choose: "é¸æ“‡", remove: "åˆªé™¤", titlespace: "æ¨™é¡Œä¸‹é‚Šè·", subtitlespace: "å‰¯æ¨™é¡Œä¸‹é‚Šè·", bgcolor: "èƒŒæ™¯/é‚Šæ¡†", animated: "å‹•ç•«", itembgcolor: "æ¬„ç›®èƒŒæ™¯", h1title: "åœ–æ–‡å±•ç¤º", title_desc: "é€™è£çš„æ‰€æœ‰æ–‡å­—éƒ½æ˜¯å‡ºæ–¼ç¤ºç¯„ç›®çš„ã€‚è¼¸å…¥æ‚¨è‡ªå·±çš„æ¥­å‹™å…§å®¹è³‡ç”¢ç­‰ç›¸é—œä¿¡æ¯å³å¯ã€‚", itemdesc: "æ¨™é¡Œåç¨±", imgsize: "å»ºè­°åœ–ç‰‡å°ºå¯¸ï¼š90*90px", showitemtitle: "æ¬„ç›®æ¨™é¡Œ" } } }, function(t, e) {}, function(t, e) { t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABACAMAAACHi2FiAAAAllBMVEVHcEz/qWP/3oD/0Hb/3H7/zHL/34D/tWj/03b/oWH/4IL/2Xj/k1v/vGr/zXT/jFn/r2r/jFn/qWP/zHL/u2z/rWX/23z/zHL/1nn/jFn/1Hj/4IH/q2T/w3D/jln/nl//jFr/2nv/pGD/j1r/1Hf/wm7/jFn/jlv/4YH/i1n/znT/mF7/jFr/rGb/4YL/qmT/zXP/jFqnwg4sAAAALnRSTlMA99/TwvftwcHA+SvABRfsD9jq4cLQQO1Y94XR3MTGyz5x3X+Y0mgnqZm1qlKE2d01EwAAAq9JREFUWMOtVul6gjAQDIdikUNRxANrtd76tdv3f7kiKCbZTQi28xPNkNmd3YExEdtvCt7ii0B3zbSYQ05wpZDZBJkLEx3XFMDDXHkG4PiYzIGsr+bqdwBGiCsZQYEe4rKLp85AxRWVp1KZbAklXKyywFlF1isPjeXiV1zQkZtQvhrmquKXyCyp+A9kXaTyhomi+BUEnUlWk0lNcB/v6NPFB6TT2gEHF6skmxCNnnI4nWMABdvi+VRuQtjjjnio+ICb4HKPpSZs+SO1zrQjkcHo0QQ/4x9PyeJXsHDx6wJhlbcb96ni8zrF4ktl60nvGBDFr7Cjii+w+XIBzlTxq1snRPHrH22p/EITtvhAoTPvKMjKJmCyqglr4v+7+6qg4WCV9yZMyBvkO9DAdckbR+zyRuHiaXHuUVizw+yHwPBbh8SnIsEu7HGlyH42OjKPjJfSuHuKLNCROQSXf99rp5Y6E+pij/EMg3Y6KZXPxTEYttJJqDzyqzFGZLGSKyfiOOR30Ac2yEpFNsamiMTteDXXadOm4PGJdFqGKn0i7E6GOscqUwiZ8i6RvZuppCNdNsiM1JlqTMHjEBvoXIpci1D15SIZhNTZ1ZqCx75RZ9pgCrVB3ppUaj9DWXjR67QElQ0fyKJBZolW5ZY1YRDrRmqpnO5mgww1KheDZi4WfnBXS5RrsRsxI+yVOpfa6aZxUui06ojzp8wYAR0FnrEp6JkPyOV/ZG1Qh8KQCnITU5Azv8Eq7Yi1xBXrdEymWzvzQznIzU1BGGQjqZy+wvX4aghElXP2GiqDxELEHdmrqGZ+xUVcW1MggwTPiGtvCnnmq2jPXzSFbJDVXeVrpuBxuUeB3W66laFwi7zUZOUbGWR1W4su+w8c4kJn12jlm4RCbKV/M4VgkNWyz/4Nn2bT/QuvL+p7QG5SEgAAAABJRU5ErkJggg==" }, function(t, e, i) { t.exports = i.p + "vplugin/graphic5/assets/4c00f62e2feadcc934e6f54b893d01dd.png" }, function(t, e, i) { t.exports = i.p + "vplugin/graphic5/assets/b6c57b11385d5701a097691ad8d9c8d1.png" }, function(t, e, i) { t.exports = i.p + "vplugin/graphic5/assets/0c9cb524a7a62c0003bca909da2e2592.png" }, function(t, e) { t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABCCAMAAAAyozueAAAAbFBMVEVHcExTanlUaHhUanjtcGDvcGBUaXjtcGDvcGDtcWH///////////9UanntcWH///9Pum7vxBr97etRinTueWpPqHDVb2TxjoH61tJVgHOil0mhbWz0o5jSsyv2tq3cuSX4x8DvgnSgbWyhl0npwzgHAAAADXRSTlMA70CAXRLAlTjQwECA4FpsiAAAAUdJREFUWMPt1ttygyAQBuDVqGhT8SyOGnN6/3esQNKgrUwW7PSG/2rx4pt1QUYA8CMvxceLfFjkkJrmoDJ+ah61o8jCiRTHs3A8xZFPbi1tb7K8n4rzXVRVk+dNpYPWzkB5Bl72BU/PmVykQjitcFpenoVzmqtGOg3CoTK8LGTmKn/kH/rZaz5ivwZZ9vN+9Yb7ZRrnvO1kNnGOc5zjHOc450+dbmLjpfxekYQEId7pruL/pp7EqmTy74tgnQt9ZuRo/VwlIcrp6CtTVtavFUE5V8WhHVNXMcJR25lntFgQhDNSTRAO0znx+w7dydmrH+18QjA4hT+TIOZc1ttOgDmHk64dzPfFNO1gnK03Ex/8B+beqDcZOGaWHZHHhfiJgthvs5E5Yl6tHNcH2TRE3XBzBiCgiwvVHiJgmXgfBiBM1I2ygchqwl90p9rdCpK0GAAAAABJRU5ErkJggg==" }, function(t, e, i) { t.exports = i.p + "vplugin/graphic5/assets/fa0551f3739cbefdfbd1e7915a3afe50.png" }, function(t, e) {
        t.exports = function(t, e, i, n, a) {
            var o, s = t = t || {},
                r = typeof t.default;
            "object" !== r && "function" !== r || (o = t, s = t.default);
            var l = "function" == typeof s ? s.options : s;
            e && (l.render = e.render, l.staticRenderFns = e.staticRenderFns), n && (l._scopeId = n);
            var c;
            if (a ? (c = function(t) { t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a) }, l._ssrRegister = c) : i && (c = i), c) {
                var p = l.functional,
                    d = p ? l.render : l.beforeCreate;
                p ? l.render = function(t, e) { return c.call(e), d(t, e) } : l.beforeCreate = d ? [].concat(d, c) : [c]
            }
            return { esModule: o, exports: s, options: l }
        }
    }, function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("section", { directives: [{ name: "gso-animate", rawName: "v-gso-animate", value: t.attr.options.animation, expression: "attr.options.animation" }], staticClass: "time05 padA plug-padding-tb", style: { padding: t.attr.styles["margin-top"] + "px 0 " + t.attr.styles["margin-bottom"] + "px" } }, [i("div", { staticClass: "container containerM" }, [i("div", { staticClass: "text-center" }, ["1" == t.attr.options.showtitle ? i("div", { directives: [{ name: "texteditable", rawName: "v-texteditable.jso_M_Title", value: t.attr.options.title || t.$default("h1title"), expression: "attr.options.title||$default('h1title')", modifiers: { jso_M_Title: !0 } }, { name: "gso-animate", rawName: "v-gso-animate.showbtn", value: t.attr.options["title-animation"], expression: "attr.options['title-animation']", modifiers: { showbtn: !0 } }], staticClass: "gp5tl1", class: t.attr.styles.jso_M_Title }) : t._e(), t._v(" "), "1" == t.attr.options.showtitle ? i("div", { directives: [{ name: "texteditable", rawName: "v-texteditable.jso_S_Title", value: t.attr.options.subtitle, expression: "attr.options.subtitle", modifiers: { jso_S_Title: !0 } }, { name: "gso-animate", rawName: "v-gso-animate.showbtn", value: t.attr.options["subtitle-animation"], expression: "attr.options['subtitle-animation']", modifiers: { showbtn: !0 } }], staticClass: "gp5tl2 M-Title-padding-b", class: t.attr.styles.jso_S_Title, style: { "margin-bottom": t.attr.styles["uptitle-margin"] + "px" } }) : t._e(), t._v(" "), "1" == t.attr.options.showsubtitle ? i("div", { directives: [{ name: "texteditable", rawName: "v-texteditable.jso_Text", value: t.attr.options.title_desc || t.$default("title_desc"), expression: "attr.options.title_desc||$default('title_desc')", modifiers: { jso_Text: !0 } }, { name: "gso-animate", rawName: "v-gso-animate.showbtn", value: t.attr.options["desc-animation"], expression: "attr.options['desc-animation']", modifiers: { showbtn: !0 } }], staticClass: "gp5tl3 M-text-padding-b", class: t.attr.styles.jso_Text, style: { "margin-bottom": t.attr.styles["subtitle-margin"] + "px" } }) : t._e()]), t._v(" "), i("div", { staticClass: "speebPro-con" }, [i("ul", { directives: [{ name: "gso-animate", rawName: "v-gso-animate.showbtn", value: t.attr.options["loop-animation"], expression: "attr.options['loop-animation']", modifiers: { showbtn: !0 } }], staticClass: "row grapic5item" }, t._l(t.attr.options.items, function(e, n) { return i("li", { key: n, staticClass: "col-xs-6 ipadcol-xs-6 col-sm-4 col-md-2 ipadcol-md-2 time03" }, [i("div", { staticClass: "flex_colmn" }, [i("div", { staticClass: "pic", style: { background: t.attr.styles.item_background } }, [i("img-picker", { attrs: { defaultval: t.defpics[n], needhover: !1, iclass: "w100 img-scale time05", attr: e.picattr }, model: { value: e.pic, callback: function(i) { t.$set(e, "pic", i) }, expression: "item.pic" } })], 1), t._v(" "), "1" == t.attr.options.showitemtitle ? i("div", { directives: [{ name: "texteditable", rawName: "v-texteditable:[idx].items.jso_S_Title1", value: e.desc || t.$default("itemdesc"), expression: "item.desc||$default('itemdesc')", arg: n, modifiers: { items: !0, jso_S_Title1: !0 } }], staticClass: "dhjiezi", class: t.attr.styles.jso_S_Title1 }) : t._e()])]) }), 0)])])])
            },
            staticRenderFns: []
        }
    }, function(t, e, i) {
        function n(t) { return i(a(t)) }

        function a(t) { var e = o[t]; if (!(e + 1)) throw new Error("Cannot find module '" + t + "'."); return e }
        var o = { "./en-us.js": 2, "./zh-cn.js": 3, "./zh-tw.js": 4 };
        n.keys = function() { return Object.keys(o) }, n.resolve = a, t.exports = n, n.id = 14
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = i(0),
            a = i.n(n);
        "undefined" != typeof window && window.Vue && Vue.component("xys" + a.a.name, a.a), a.a.install = function(t) { t.component("xys" + a.a.name, a.a) }, e.default = a.a
    }])
});