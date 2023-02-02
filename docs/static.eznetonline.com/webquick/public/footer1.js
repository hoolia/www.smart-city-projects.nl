! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("xysfooter1", [], e) : "object" == typeof exports ? exports.xysfooter1 = e() : t.xysfooter1 = e() }(this, function() {
    return function(t) {
        function e(s) { if (o[s]) return o[s].exports; var i = o[s] = { i: s, l: !1, exports: {} }; return t[s].call(i.exports, i, i.exports, e), i.l = !0, i.exports }
        var o = {};
        return e.m = t, e.c = o, e.i = function(t) { return t }, e.d = function(t, o, s) { e.o(t, o) || Object.defineProperty(t, o, { configurable: !1, enumerable: !0, get: s }) }, e.n = function(t) { var o = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(o, "a", o), o }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "/public/", e(e.s = 16)
    }([function(t, e, o) {
        function s(t) { o(5), o(6) }
        var i = o(13)(o(1), o(14), s, "data-v-170fa730", null);
        t.exports = i.exports
    }, function(t, e, o) {
        "use strict";

        function s() { return (new Date).getFullYear() }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = o(9),
            n = o.n(i),
            a = o(10),
            r = o.n(a),
            l = o(8),
            c = o.n(l),
            p = o(11),
            d = (o.n(p), o(12));
        o.n(d);
        e.default = {
            name: "footer1",
            mixins: [Texteditable, Animate, mlangTrans, Innerstyle],
            data: function() { return { iseditor: iseditor, defpic: "en-us" != window.uilang ? n.a : r.a, defewm: c.a, icp_src: location.protocol + "//beian.miit.gov.cn", mlang: {}, options: { "Logo-show": "1", "Ba-show": "1", "ICP-show": "1", "Copy-show": "1", "Links-show": "0", "title-animation": {}, "desc-animation": {}, logo: "", text1: "", phone: "138-1234-XXXX", text2: "Â©Copyright " + s() + " - All Rights Reserved", text3: "ç²¤å…¬ç½‘å®‰å¤‡ 00000000000å·", text4: "ç²¤ICPå¤‡0000000å·", linktext: "", icons: void 0, picattr: { animation: {}, alt: "", linkattr: {}, title: "" }, links: [] }, styles: { jso_F_Text: "Jso-F-Text", jso_F_Text2: "Jso-F-Text", jso_Text: "Jso-Text", "img-height": 60, "margin-top": 20, "margin-bottom": 20, artdel3: { cssText: {}, fontsizeCname: "Jso-Text" }, linksstyle: { cssText: {}, fontsizeCname: "Jso-Text" }, layerbg: { color: "#000", image: "", iscovered: "0", overlay: "#000", opacity: "0.5", video: "", showbgcolor: "1", showbgimage: "1", showbgvideo: "0" } }, screenWidth: document.body.clientWidth, _one_per_page: !0, iswopop: window.iswopop } },
            beforeCreate: function() {
                try {
                    var t = window.uilang || "zh-cn",
                        e = this.$options._componentTag,
                        s = o(15)("./" + t + ".js");
                    window["mlan_" + e] = s(), ebus.$emit("getpluginlang", e)
                } catch (t) { console.error(t) }
            },
            created: function() { this.mlang = window.mlan_xysfooter1 || {}, void 0 === this.attr.options.icons && (window.iswopop ? this.attr.options.icons = [{ src: statichost + "/assets/facebook.png", href: "", target: "_self", title: this.mlang.icontitle1, type: "link", pic: c.a }, { src: statichost + "/assets/twitter.png", href: "", target: "_self", title: this.mlang.icontitle1, type: "link", pic: c.a }] : this.attr.options.icons = [{ src: statichost + "/assets/wechat.png", href: "", target: "_self", title: "", type: "link", pic: c.a }, { src: statichost + "/assets/sina.png", href: "", target: "_self", title: "", type: "link", pic: c.a }]) },
            methods: {
                mouseEnter: function(t) { t = t || window.event, $(t.target).prev(".ewm_wind").show() },
                mouseLeave: function(t) { t = t || window.event, $(t.target).prev(".ewm_wind").hide() },
                itemopen: function(t) {
                    if (this.iseditor) return !1;
                    t = t || window.event, $(t.target).parents(".item_div").children(".ewm_wind,.ewm_hoverclose,.ewm_wind_bg").show()
                },
                itemclose: function(t) {
                    if (this.iseditor) return !1;
                    t = t || window.event, $(t.target).parents(".item_div").children(".ewm_wind,.ewm_hoverclose,.ewm_wind_bg").hide()
                }
            },
            mounted: function() {
                var t = this;
                window.addEventListener("resize", function() { return t.screenWidth = window.innerWidth }, !1)
            },
            props: ["attr"]
        }
    }, function(t, e) { t.exports = function() { return { block_title: "Page Footer 1", appbtn: "Social Icon", choose: "Choose", remove: "Delete", setlink: "Hyperlink +", bgcolor: "Background/Frame", delconfirm: "Are you sure to delete it?", Logoshow: "Show Logo", Logo_size: "Logo Size", Bashow: "Show Public Security Filing", ICPshow: "Show ICP filing", Copyrightshow: "Show Copyright", showBu: "Upload icon, best size not less than 32 x 32px icon transparent bottom PNG format", Link: "Hyperlink", Tips: "Tips", tips_str: "Setting only supports 1 state", set: "Setting", pictips: "The following pictures and words are optional items. If there is no content, they will not be displayed", upload: "Upload", clear: "Clear", sure: "Sure", cancel: "Cancel", linktips: "Please set link", textips: "Please input the content here. The default is center!", text1: "Email: 1234***@XXXX.com      Addr: 123, XX street, XX District, XX City", icontitle0: "Scan QR code\r\nWeChat official account", icontitle1: "Here is the default prompt text", imgsize: " Suggested image size 40*40px", links_text: "Links: ", show_links: "Show Links" } } }, function(t, e) { t.exports = function() { return { block_title: "é¡µè„š 1", appbtn: "ç¤¾äº¤å›¾æ ‡", choose: "é€‰æ‹©", remove: "åˆ é™¤", setlink: "é“¾æŽ¥ +", bgcolor: "èƒŒæ™¯/è¾¹æ¡†", delconfirm: "ç¡®å®šè¦åˆ é™¤å—ï¼Ÿ", Logoshow: "æ˜¾ç¤ºLogo", Logo_size: "Logoå¤§å°", Bhow: "å…¬å®‰å¤‡æ¡ˆ", Bashow: "æ˜¾ç¤ºå…¬å®‰å¤‡æ¡ˆ", ICPshow: "æ˜¾ç¤ºICPå¤‡æ¡ˆ", Copyrightshow: "æ˜¾ç¤ºç‰ˆæƒ", showBu: "ä¸Šä¼ å›¾æ ‡ï¼Œæœ€ä½³å°ºå¯¸ä¸ä½ŽäºŽ 32 x 32px çš„å›¾æ ‡é€æ˜Žåº•PNGæ ¼å¼", Link: "é“¾æŽ¥", Tips: "æç¤º", tips_str: "è®¾ç½®ä»…æ”¯æŒ1ç§çŠ¶æ€", set: "è®¾ç½®", pictips: "ä»¥ä¸‹å›¾ç‰‡å’Œæ–‡å­—å‡ä¸ºé€‰å¡«é¡¹ç›®ï¼Œæ— å†…å®¹åˆ™ä¸æ˜¾ç¤º", upload: "ä¸Šä¼ ", clear: "æ¸…ç©º", sure: "ç¡®å®š", cancel: "å–æ¶ˆ", linktips: "è¯·è®¾ç½®é“¾æŽ¥", textips: "è¯·åœ¨è¿™é‡Œè¾“å…¥å†…å®¹ï¼Œé»˜è®¤å±…ä¸­æ˜¾ç¤ºï¼", text1: "Email: 1234***@XXXX.com      åœ°å€:æŸæŸå¸‚ æŸæŸåŒº æŸæŸè¡—é“123å·", icontitle0: "æ‰«æäºŒç»´ç \r\nå…³æ³¨å¾®ä¿¡å…¬ä¼—å·", icontitle1: "è¿™é‡Œæ˜¯é»˜è®¤æç¤ºæ–‡å­—", imgsize: "å»ºè®®å›¾ç‰‡å°ºå¯¸ï¼š40*40px", show_links: "æ˜¾ç¤ºå‹æƒ…é“¾æŽ¥", links_text: "å‹æƒ…é“¾æŽ¥ï¼š" } } }, function(t, e) { t.exports = function() { return { block_title: "é è…³ 1", appbtn: "ç¤¾äº¤åœ–æ¨™", choose: "é¸æ“‡", remove: "åˆªé™¤", setlink: "éˆæŽ¥ +", bgcolor: "èƒŒæ™¯/é‚Šæ¡†", delconfirm: "ç¢ºå®šè¦åˆªé™¤å—Žï¼Ÿ", Logoshow: "é¡¯ç¤ºLogo", Logo_size: "Logoå¤§å°", Bashow: "é¡¯ç¤ºå…¬å®‰å‚™æ¡ˆ", ICPshow: "é¡¯ç¤ºICPå‚™æ¡ˆ", Copyrightshow: "é¡¯ç¤ºç‰ˆæ¬Š", showBu: "ä¸Šå‚³åœ–æ¨™ï¼Œæœ€ä½³å°ºå¯¸ä¸ä½Žæ–¼ 32 x 32px çš„åœ–æ¨™é€æ˜Žåº•PNGæ ¼å¼", Link: "é€£çµ", Tips: "æç¤º", tips_str: "è¨­å®šåƒ…æ”¯æŒ1ç¨®ç‹€æ…‹", set: "è¨­å®š", pictips: "ä»¥ä¸‹åœ–ç‰‡å’Œæ–‡å­—å‡ç‚ºé¸å¡«é …ç›®ï¼Œç„¡å…§å®¹å‰‡ä¸é¡¯ç¤º", upload: "ä¸Šå‚³", clear: "æ¸…ç©º", sure: "ç¢ºå®š", cancel: "å–æ¶ˆ", linktips: "è«‹è¨­å®šé€£çµ", textips: "è«‹åœ¨é€™è£¡è¼¸å…¥å…§å®¹ï¼Œé»˜èªå±…ä¸­é¡¯ç¤ºï¼", text1: "Email: 1234***@XXXX.com      åœ°å€:æŸæŸå¸‚ æŸæŸå€ æŸæŸè¡—é“123è™Ÿ", icontitle0: "æŽƒæäºŒç¶­ç¢¼\r\né—œè¨»å¾®ä¿¡å…¬çœ¾è™Ÿ", icontitle1: "é€™è£æ˜¯é»˜èªæç¤ºæ–‡å­—", imgsize: "å»ºè­°åœ–ç‰‡å°ºå¯¸ï¼š40*40px", links_text: "å‹æƒ…éˆæŽ¥ï¼š", show_links: "é¡¯ç¤ºå‹æƒ…éˆæŽ¥" } } }, function(t, e) {}, function(t, e) {}, function(t, e, o) { t.exports = o.p + "vplugin/footer1/assets/2f2633fe38847b50b680bd95467c6741.png" }, function(t, e, o) { t.exports = o.p + "vplugin/footer1/assets/6a0c9be24108b5093fb80ff5cdaa0293.png" }, function(t, e, o) { t.exports = o.p + "vplugin/footer1/assets/b2afaab014033a5ba9c3248ed76d63d8.png" }, function(t, e, o) { t.exports = o.p + "vplugin/footer1/assets/9816f77748b1ce24879801861a2874b3.png" }, function(t, e, o) { t.exports = o.p + "vplugin/footer1/assets/b2afaab014033a5ba9c3248ed76d63d8.png" }, function(t, e, o) { t.exports = o.p + "vplugin/footer1/assets/9816f77748b1ce24879801861a2874b3.png" }, function(t, e) {
        t.exports = function(t, e, o, s, i) {
            var n, a = t = t || {},
                r = typeof t.default;
            "object" !== r && "function" !== r || (n = t, a = t.default);
            var l = "function" == typeof a ? a.options : a;
            e && (l.render = e.render, l.staticRenderFns = e.staticRenderFns), s && (l._scopeId = s);
            var c;
            if (i ? (c = function(t) { t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(i) }, l._ssrRegister = c) : o && (c = o), c) {
                var p = l.functional,
                    d = p ? l.render : l.beforeCreate;
                p ? l.render = function(t, e) { return c.call(e), d(t, e) } : l.beforeCreate = d ? [].concat(d, c) : [c]
            }
            return { esModule: n, exports: a, options: l }
        }
    }, function(t, e, o) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", { staticClass: "footer_style1 footer1_div", style: { padding: t.attr.styles["margin-top"] + "px 0 " + t.attr.styles["margin-bottom"] + "px" } }, ["1" == t.attr.options["Logo-show"] ? s("div", { staticClass: "footer_style11", style: { "--img-height": t.attr.styles["img-height"] + "px" } }, [s("a", [s("img-picker", { directives: [{ name: "gso-animate", rawName: "v-gso-animate.image", value: t.attr.options.picattr.animation, expression: "attr.options.picattr.animation", modifiers: { image: !0 } }], ref: "imglogo", style: { "max-height": t.attr.styles["img-height"] + "px" }, attrs: { attr: t.attr.options.picattr, iclass: "imgscalef1", defaultval: t.defpic }, model: { value: t.attr.options.logo, callback: function(e) { t.$set(t.attr.options, "logo", e) }, expression: "attr.options.logo" } })], 1)]) : t._e(), t._v(" "), s("div", { directives: [{ name: "texteditable", rawName: "v-texteditable.jso_F_Text", value: t.attr.options.text1 || t.$default("text1"), expression: "attr.options.text1||$default('text1')", modifiers: { jso_F_Text: !0 } }, { name: "gso-animate", rawName: "v-gso-animate.showbtn", value: t.attr.options["title-animation"], expression: "attr.options['title-animation']", modifiers: { showbtn: !0 } }], staticClass: "footer_style12", class: t.attr.styles.jso_F_Text }), t._v(" "), s("div", { directives: [{ name: "texteditable", rawName: "v-texteditable.jso_Text", value: t.attr.options.phone, expression: "attr.options.phone", modifiers: { jso_Text: !0 } }, { name: "gso-animate", rawName: "v-gso-animate.showbtn", value: t.attr.options["desc-animation"], expression: "attr.options['desc-animation']", modifiers: { showbtn: !0 } }], staticClass: "footer_style13", class: t.attr.styles.jso_Text }), t._v(" "), s("div", { staticClass: "footer_style14" }, t._l(t.attr.options.icons, function(e, o) { return s("div", { key: o, staticClass: "item_div", staticStyle: { position: "relative" } }, ["pic" == e.type ? [s("div", { staticClass: "ewm_wind_bg", on: { click: function(e) { return e.stopPropagation(), t.itemclose(e) } } }), t._v(" "), s("span", { staticClass: "ewm_hoverclose iconfont icon-jiahao", on: { click: function(e) { return e.stopPropagation(), t.itemclose(e) } } }), t._v(" "), s("div", { staticClass: "ewm_wind" }, [s("div", { staticClass: "ewm_hoverstyle" }, [s("img", { attrs: { src: e.pic } }), t._v(" "), s("div", { staticClass: "ewm_text" }, [t._v(t._s(e.title || t.$default("icontitle" + o)))]), t._v(" "), s("div", { staticClass: "ewm_trig" })])]), t._v(" "), t.screenWidth > 768 ? [s("a", { style: { cursor: t.iseditor ? "pointer" : "default" }, on: { mouseenter: function(e) { return e.stopPropagation(), t.mouseEnter(e) }, mouseleave: function(e) { return e.stopPropagation(), t.mouseLeave(e) } } }, [s("img-picker", { attrs: { needhover: !1, iclass: "imgscale" }, model: { value: e.src, callback: function(o) { t.$set(e, "src", o) }, expression: "icon.src" } })], 1)] : [s("a", { style: { cursor: t.iseditor ? "pointer" : "default" }, on: { click: function(e) { return e.stopPropagation(), t.itemopen(e) } } }, [s("img-picker", { attrs: { needhover: !1, iclass: "imgscale" }, model: { value: e.src, callback: function(o) { t.$set(e, "src", o) }, expression: "icon.src" } })], 1)]] : [s("a", { style: { cursor: t.iseditor || e.href ? "pointer" : "default" }, attrs: { href: e.href ? e.href : "javascript:;", target: e.target, title: e.title } }, [s("img-picker", { attrs: { needhover: !1, iclass: "imgscale" }, model: { value: e.src, callback: function(o) { t.$set(e, "src", o) }, expression: "icon.src" } })], 1)]], 2) }), 0), t._v(" "), "1" == t.attr.options["Links-show"] ? s("div", { staticClass: "links" }, [s("span", { directives: [{ name: "texteditable", rawName: "v-texteditable.jso_F_Text2", value: t.attr.options.linktext || t.$default("links_text"), expression: "attr.options.linktext||$default('links_text')", modifiers: { jso_F_Text2: !0 } }], staticClass: "links-span-text footer_style12", class: t.attr.styles.jso_F_Text2 }), t._v(" "), s("div", { staticClass: "links-list" }, t._l(t.attr.options.links, function(e, o) { return s("span", { key: o, staticClass: "link-item" }, [s("a", { directives: [{ name: "innerstyle", rawName: "v-innerstyle", value: t.attr.styles.linksstyle, expression: "attr.styles.linksstyle" }], class: [t.attr.styles.linksstyle.fontsizeCname], attrs: { href: e.href, target: e.target, rel: "1" == e.nofollow ? "nofollow" : "" } }, [t._v(t._s(e.name))])]) }), 0)]) : t._e(), t._v(" "), s("div", { staticClass: "footer1_div_b" }, [1 != t.iswopop ? ["1" == t.attr.options["Ba-show"] ? s("a", { staticClass: "footer1_ab" }, [s("img", { attrs: { src: o(7) } }), t._v(" "), s("div", { directives: [{ name: "texteditable", rawName: "v-texteditable.jso_F_Text", value: t.attr.options.text3, expression: "attr.options.text3", modifiers: { jso_F_Text: !0 } }], class: t.attr.styles.jso_F_Text })]) : t._e(), t._v(" "), "1" == t.attr.options["ICP-show"] ? s("a", { staticClass: "footer1_aicp", attrs: { href: t.icp_src, target: "_blank" } }, [s("div", { directives: [{ name: "texteditable", rawName: "v-texteditable:nolink.jso_F_Text", value: t.attr.options.text4, expression: "attr.options.text4", arg: "nolink", modifiers: { jso_F_Text: !0 } }], staticClass: "footer1_icp", class: t.attr.styles.jso_F_Text })]) : t._e()] : t._e(), t._v(" "), "1" == t.attr.options["Copy-show"] ? s("div", { directives: [{ name: "texteditable", rawName: "v-texteditable.jso_F_Text", value: t.attr.options.text2, expression: "attr.options.text2", modifiers: { jso_F_Text: !0 } }], staticClass: "footer_style12", class: t.attr.styles.jso_F_Text }) : t._e()], 2)])
            },
            staticRenderFns: []
        }
    }, function(t, e, o) {
        function s(t) { return o(i(t)) }

        function i(t) { var e = n[t]; if (!(e + 1)) throw new Error("Cannot find module '" + t + "'."); return e }
        var n = { "./en-us.js": 2, "./zh-cn.js": 3, "./zh-tw.js": 4 };
        s.keys = function() { return Object.keys(n) }, s.resolve = i, t.exports = s, s.id = 15
    }, function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = o(0),
            i = o.n(s);
        "undefined" != typeof window && window.Vue && Vue.component("xys" + i.a.name, i.a), i.a.install = function(t) { t.component("xys" + i.a.name, i.a) }, e.default = i.a
    }])
});