! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("xysaboutus4", [], e) : "object" == typeof exports ? exports.xysaboutus4 = e() : t.xysaboutus4 = e() }(this, function() {
    return function(t) {
        function e(i) { if (s[i]) return s[i].exports; var o = s[i] = { i: i, l: !1, exports: {} }; return t[i].call(o.exports, o, o.exports, e), o.l = !0, o.exports }
        var s = {};
        return e.m = t, e.c = s, e.i = function(t) { return t }, e.d = function(t, s, i) { e.o(t, s) || Object.defineProperty(t, s, { configurable: !1, enumerable: !0, get: i }) }, e.n = function(t) { var s = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(s, "a", s), s }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "/public/", e(e.s = 13)
    }([function(t, e, s) {
        function i(t) { s(5) }
        var o = s(10)(s(1), s(11), i, null, null);
        t.exports = o.exports
    }, function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = s(6),
            o = s.n(i),
            n = s(7),
            a = s.n(n),
            r = s(8),
            l = s.n(r),
            c = s(9),
            u = s.n(c);
        e.default = {
            name: "aboutus4",
            mixins: [Texteditable, Animate, mlangTrans],
            data: function() { return { iseditor: iseditor, defpics: [o.a, a.a, l.a, u.a], options: { animation: {}, "loop-animation": {}, "title-animation": {}, "desc-animation": {}, title: "", subtitle: "ADVANTAGE", title_desc: "", showtitle: "1", showsubtitle: "1", items: [{ pic: o.a, name: "", desc: "", picattr: { alt: "", linkattr: {}, title: "" } }, { pic: a.a, name: "", desc: "", picattr: { alt: "", linkattr: {}, title: "" } }, { pic: l.a, name: "", desc: "", picattr: { alt: "", linkattr: {}, title: "" } }, { pic: u.a, name: "", desc: "", picattr: { alt: "", linkattr: {}, title: "" } }] }, styles: { jso_M_Title: "Jso-M-Title", jso_M_Title1: "Jso-M-Title", jso_S_Title: "Jso-S-Title", jso_Text: "Jso-Text", jso_Text1: "Jso-Text", "margin-top": 60, "margin-bottom": 60, item_background: "#F8F9FA", "uptitle-margin": 28, "subtitle-margin": 100, layerbg: { color: "#3e37bd", image: "", iscovered: "0", overlay: "#000", opacity: "0.5", video: "", showbgcolor: "1", showbgimage: "1", showbgvideo: "0" } } } },
            beforeCreate: function() {
                try {
                    var t = window.uilang || "zh-cn",
                        e = this.$options._componentTag,
                        i = s(12)("./" + t + ".js");
                    window["mlan_" + e] = i(), ebus.$emit("getpluginlang", e)
                } catch (t) { console.error(t) }
            },
            computed: { myanimate: function() { return !!(this.attr.options.animation || {}).animation } },
            props: ["attr"]
        }
    }, function(t, e) { t.exports = function() { return { block_title: "About Us 4", delconfirm: "Are you sure to delete it?", property: "Property", style: "Style", thumbnail: "Thumbnail", choose: "Choose", remove: "Delete", titlespace: "Title Lower Margin", subtitlespace: "Subtitle Lower Margin", bgcolor: "Background Colour", titleSize: "Title size", animated: "Animated", itembgcolor: "Column background", ourstrengths: "Our Advantage", desc: "All the words here are for demonstration purposes. Please enter your own business content asset.", strengths1: "Advantage 1", strengths2: "Advantage 2", strengths3: "Advantage 3", strengths4: "Advantage 4", strengthsN: "Advantage N", imgsize: " Suggested image size 100*110px" } } }, function(t, e) { t.exports = function() { return { block_title: "å…³äºŽæˆ‘ä»¬ 4", delconfirm: "ç¡®å®šè¦åˆ é™¤å—ï¼Ÿ", property: "å±žæ€§", style: "æ ·å¼", thumbnail: "ç¼©ç•¥å›¾", choose: "é€‰æ‹©", remove: "åˆ é™¤", titlespace: "æ ‡é¢˜ä¸‹è¾¹è·", subtitlespace: "å‰¯æ ‡é¢˜ä¸‹è¾¹è·", bgcolor: "èƒŒæ™¯é¢œè‰²", animated: "åŠ¨ç”»", titleSize: "æ ‡é¢˜å¤§å°", itembgcolor: "æ ç›®èƒŒæ™¯é¢œè‰²", ourstrengths: "æˆ‘ä»¬çš„ä¼˜åŠ¿", desc: "è¿™é‡Œçš„æ‰€æœ‰æ–‡å­—éƒ½æ˜¯å‡ºäºŽç¤ºèŒƒç›®çš„ã€‚è¾“å…¥æ‚¨è‡ªå·±çš„ä¸šåŠ¡å†…å®¹èµ„äº§ç­‰ç›¸å…³ä¿¡æ¯å³å¯ã€‚", strengths1: "ç¬¬1ä¼˜åŠ¿", strengths2: "ç¬¬2ä¼˜åŠ¿", strengths3: "ç¬¬3ä¼˜åŠ¿", strengths4: "ç¬¬4ä¼˜åŠ¿", strengthsN: "ç¬¬Nä¼˜åŠ¿", imgsize: "å»ºè®®å›¾ç‰‡å°ºå¯¸ï¼š100*110px" } } }, function(t, e) { t.exports = function() { return { block_title: "é—œæ–¼æˆ‘å€‘ 4", delconfirm: "ç¢ºå®šè¦åˆªé™¤å—Žï¼Ÿ", property: "å±¬æ€§", style: "æ¨£å¼", thumbnail: "ç¸®ç•¥åœ–", choose: "é¸æ“‡", remove: "åˆªé™¤", titlespace: "æ¨™é¡Œä¸‹é‚Šè·", subtitlespace: "å‰¯æ¨™é¡Œä¸‹é‚Šè·", bgcolor: "èƒŒæ™¯/é‚Šæ¡†", titleSize: "æ¨™é¡Œå¤§å°", animated: "å‹•ç•«", itembgcolor: "æ¬„ç›®èƒŒæ™¯é¡è‰²", ourstrengths: "æˆ‘å€‘çš„å„ªå‹¢", desc: "é€™è£çš„æ‰€æœ‰æ–‡å­—éƒ½æ˜¯å‡ºæ–¼ç¤ºç¯„ç›®çš„ã€‚è¼¸å…¥æ‚¨è‡ªå·±çš„æ¥­å‹™å…§å®¹è³‡ç”¢ç­‰ç›¸é—œä¿¡æ¯å³å¯ã€‚", strengths1: "ç¬¬1å„ªå‹¢", strengths2: "ç¬¬2å„ªå‹¢", strengths3: "ç¬¬3å„ªå‹¢", strengths4: "ç¬¬4å„ªå‹¢", strengthsN: "ç¬¬Nå„ªå‹¢", imgsize: "å»ºè­°åœ–ç‰‡å°ºå¯¸ï¼š100*110px" } } }, function(t, e) {}, function(t, e, s) { t.exports = s.p + "vplugin/aboutus4/assets/0d5085b2db51af9e0e02a820d99bad15.png" }, function(t, e, s) { t.exports = s.p + "vplugin/aboutus4/assets/c5ba52fdf7cca54138cdc16dfc07ea55.png" }, function(t, e) { t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABjBAMAAACBAIhsAAAAMFBMVEVHcEwkAJ8kAJ8jAJ8kAJ4hAJ8eAKEjAJ8gAJ8iAJ8gAJ8jAJ8iAJ8jAJ8jAJ4kAJ+0kWItAAAAD3RSTlMAgEDrwE4O0CBfMLJxj6DUmjTUAAADP0lEQVRYw+2Yz2sTQRTHp7WJbWo1IgieLHrwpA0iYhVMxKB4Sv0HzKpHwXrKwUsCPXizghBBBJX8AYniPR5ERYQKgoKXFA96KVSzlRhjfc6bH7szm92dnZwU+k6T2f3s7M68933vhZCAXToLMXbsEwmx9B4w2HwIdRCMdnIImjJD4C4EqYcJKPgRgFJJIHAf6dRVnFs7EGMX2/SWnE516NQHEmuTJYC+PkOh38RgO+nraBM7KNUyUaQKoO3idkrVjNQcwKr6exdAzwjhswvq7ybAdzM1BvAtsPYWtUX991TmrVSUx2/EYHxfzUS1YZMPrgFkuSiX5LVIagbkzW2pJBMgAz+SokHNr6D+uDJiRQhHUnQAP9nHoGqyqbJ8kEJdeVBXqUV5S8ZbCx90Q6deUZlxFGrCex0qY388WX6nUYfwPZ4r1GQeXL7PDYAK3/i81C9BzTDNb6k7f724V8jx1zMOH90uZlUqXR2mzL4xzfPLgh21gkzvgp0fsoN8beu9NLPACWufpycqdtmGop/VtY+vkp9YLKgqcwtbKg9wx54CP83++1RzJIrKxcBMTWNJpFBYbzhGahGjSqHGvCiPs/14VAqF7t83QbTwdB2VIuvgO0qUUb+luqxSSxif9TgmfY/eclynosreway44aMUC5XCLw21TW/TgZ+pRkXW2OfY5WU2Xg1SkfU8r5DnvDZAp0hU79CX1KAWQpHDxXDsC6dO8yQapMK2u4QnUmOUkO0EFM8ER20pcpdnHUsqgxlk4FhSWAsA3LSlmNe4nQTUkSdKiNJcycxETcn0ze1WMmqbHqLp9UTUsufqqmcLSlHsoS5Gb6saClWNUpiVoIgwx8p6WpGL6rN+DTuWoMoR/V1quIFEx6r5HehsCNXwH+y/44t5RTpDRDCVj238WGnzNDg73obAxgesyaqUz2x8+VmR2XnmP5UYKuVVRFirqQoT25ny5j8ntDfuz4WhkMOz0ZfqGZrgzHtgpYq2lPvSGHMdpLSlTtUTRWqXZ5Td3O6TZPHdZUtViIUhxZZyLKl+3ksdFhTahjMKZbeUoCyXElSBjEBtkFGowiiU9VKMallT5UQ1XkjNZ78UzTprVrf/BeLz4v//qlBdAAAAAElFTkSuQmCC" }, function(t, e, s) { t.exports = s.p + "vplugin/aboutus4/assets/2089b22c2b2c13324bf0792274a96664.png" }, function(t, e) {
        t.exports = function(t, e, s, i, o) {
            var n, a = t = t || {},
                r = typeof t.default;
            "object" !== r && "function" !== r || (n = t, a = t.default);
            var l = "function" == typeof a ? a.options : a;
            e && (l.render = e.render, l.staticRenderFns = e.staticRenderFns), i && (l._scopeId = i);
            var c;
            if (o ? (c = function(t) { t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), s && s.call(this, t), t && t._registeredComponents && t._registeredComponents.add(o) }, l._ssrRegister = c) : s && (c = s), c) {
                var u = l.functional,
                    d = u ? l.render : l.beforeCreate;
                u ? l.render = function(t, e) { return c.call(e), d(t, e) } : l.beforeCreate = d ? [].concat(d, c) : [c]
            }
            return { esModule: n, exports: a, options: l }
        }
    }, function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("section", { directives: [{ name: "gso-animate", rawName: "v-gso-animate", value: t.attr.options.animation, expression: "attr.options.animation" }], staticClass: "time05 padA about4 plug-padding-tb", style: { padding: t.attr.styles["margin-top"] + "px 0 " + t.attr.styles["margin-bottom"] + "px" } }, [s("div", { staticClass: "container containerM" }, ["1" == t.attr.options.showtitle || "1" == t.attr.options.showsubtitle ? s("div", { staticClass: "about4-container-row" }, [s("div", { staticClass: "col-12 about4-centert" }, ["1" == t.attr.options.showtitle ? s("div", { directives: [{ name: "gso-animate", rawName: "v-gso-animate.showbtn", value: t.attr.options["title-animation"], expression: "attr.options['title-animation']", modifiers: { showbtn: !0 } }, { name: "texteditable", rawName: "v-texteditable.jso_M_Title", value: t.attr.options.title || t.$default("ourstrengths"), expression: "attr.options.title||$default('ourstrengths')", modifiers: { jso_M_Title: !0 } }], staticClass: "about4title1", class: t.attr.styles.jso_M_Title }) : t._e(), t._v(" "), "1" == t.attr.options.showtitle ? s("div", { directives: [{ name: "gso-animate", rawName: "v-gso-animate.showbtn", value: t.attr.options["title-animation"], expression: "attr.options['title-animation']", modifiers: { showbtn: !0 } }, { name: "texteditable", rawName: "v-texteditable.jso_S_Title", value: t.attr.options.subtitle, expression: "attr.options.subtitle", modifiers: { jso_S_Title: !0 } }], staticClass: "about4title2 M-Title-padding-b", class: t.attr.styles.jso_S_Title, style: { "margin-bottom": t.attr.styles["uptitle-margin"] + "px" } }) : t._e(), t._v(" "), "1" == t.attr.options.showsubtitle ? s("div", { directives: [{ name: "gso-animate", rawName: "v-gso-animate.showbtn", value: t.attr.options["desc-animation"], expression: "attr.options['desc-animation']", modifiers: { showbtn: !0 } }, { name: "texteditable", rawName: "v-texteditable.jso_Text", value: t.attr.options.title_desc || t.$default("desc"), expression: "attr.options.title_desc||$default('desc')", modifiers: { jso_Text: !0 } }], staticClass: "about4title3 M-text-padding-b", class: t.attr.styles.jso_Text, style: { "margin-bottom": t.attr.styles["subtitle-margin"] + "px" } }) : t._e()])]) : t._e(), t._v(" "), s("div", { directives: [{ name: "gso-animate", rawName: "v-gso-animate.showbtn", value: t.attr.options["loop-animation"], expression: "attr.options['loop-animation']", modifiers: { showbtn: !0 } }], staticClass: "about4-center" }, t._l(t.attr.options.items, function(e, i) { return s("div", { key: i, staticClass: "col-sm-12 col-md-6 col-lg-6 about4sbottom newabout4" }, [s("div", { staticClass: "about4item" }, [s("div", { staticClass: "about4-img", style: { background: t.attr.styles.item_background } }, [s("img-picker", { attrs: { iclass: "about4-img-div", attr: e.picattr }, model: { value: e.pic, callback: function(s) { t.$set(e, "pic", s) }, expression: "item.pic" } })], 1), t._v(" "), s("div", { staticClass: "about4-box" }, [s("div", { directives: [{ name: "texteditable", rawName: "v-texteditable:[idx].items.jso_M_Title1", value: e.name || t.$default("strengths" + (i + 1)), expression: "item.name||$default('strengths'+(idx + 1))", arg: i, modifiers: { items: !0, jso_M_Title1: !0 } }], staticClass: "about4-box1", class: t.attr.styles.jso_M_Title1 }), t._v(" "), s("div", { directives: [{ name: "texteditable", rawName: "v-texteditable:[idx].items.jso_Text1", value: e.desc || t.$default("desc"), expression: "item.desc||$default('desc')", arg: i, modifiers: { items: !0, jso_Text1: !0 } }], staticClass: "about4-box2", class: t.attr.styles.jso_Text1 })])])]) }), 0)])])
            },
            staticRenderFns: []
        }
    }, function(t, e, s) {
        function i(t) { return s(o(t)) }

        function o(t) { var e = n[t]; if (!(e + 1)) throw new Error("Cannot find module '" + t + "'."); return e }
        var n = { "./en-us.js": 2, "./zh-cn.js": 3, "./zh-tw.js": 4 };
        i.keys = function() { return Object.keys(n) }, i.resolve = o, t.exports = i, i.id = 12
    }, function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = s(0),
            o = s.n(i);
        "undefined" != typeof window && window.Vue && Vue.component("xys" + o.a.name, o.a), o.a.install = function(t) { t.component("xys" + o.a.name, o.a) }, e.default = o.a
    }])
});