! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("xysslider3", [], e) : "object" == typeof exports ? exports.xysslider3 = e() : t.xysslider3 = e() }(this, function() {
    return function(t) {
        function e(s) { if (o[s]) return o[s].exports; var r = o[s] = { i: s, l: !1, exports: {} }; return t[s].call(r.exports, r, r.exports, e), r.l = !0, r.exports }
        var o = {};
        return e.m = t, e.c = o, e.i = function(t) { return t }, e.d = function(t, o, s) { e.o(t, o) || Object.defineProperty(t, o, { configurable: !1, enumerable: !0, get: s }) }, e.n = function(t) { var o = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(o, "a", o), o }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "/public/", e(e.s = 16)
    }([function(t, e, o) {
        function s(t) { o(7), o(6) }
        var r = o(13)(o(1), o(14), s, "data-v-53c50bb0", null);
        t.exports = r.exports
    }, function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = o(5),
            r = o(12),
            n = o.n(r),
            i = o(8),
            a = o.n(i),
            l = o(10),
            c = o.n(l),
            u = o(9),
            d = o.n(u),
            p = o(11),
            h = o.n(p);
        e.default = {
            name: "slider3",
            mixins: [Texteditable, Animate, mlangTrans],
            data: function() { return { iseditor: iseditor, swiperid: "", swiper_pagid: "", slider3scroll: "", curidx: 0, scrlstate: "scroll", defpic1: n.a, curlang: window.lang, ishopping: "0", shopcarts: 0, scan_view_cart: "", options: { aclor: "Jso-Assistance-Col4", "text1-show": "1", "text2-show": "1", "morebtn-show": "1", morebtn_center: "0", morebtn_right: "0", autoplay: "0", interval: 3e3, resource: [{ pic: n.a, title: "", desc: "", btntxt: "" }, { pic: n.a, title: "", desc: "", btntxt: "" }], dotcolor: "#fff", dotcolor_active: "#ccc", logo: "", toplogo: "", showlang: "0", snap: "0", istop: "0", picattr: { alt: "", linkattr: {}, title: "" }, picattr2: { alt: "", linkattr: {}, title: "" }, scroll_hide_set: "0", showshopcart: "1", showucenter: "1" }, styles: { jso_L_Title: "Jso-L-Title", jso_M_Title: "Jso-M-Title", jso_Btn: "Jso-Btn", "img-height": 70, "button-bgcolor": "transparent", "button-bcolor": "#fff", "button-bwidth": 1, "button-bradius": 0, "fbackground-color": "#fff", "active-bgcolor": "transparent", color: "#fff", "active-color": "#fff", "hover-color": "#fff", fcolor: "#000", "factive-color": "#000", "fhover-color": "#000", "top-margin": 35, "margin-top": 0, "margin-bottom": 0, ccolor: "#000", cbgcolor: "#fff", "chover-color": "#000", "chover-bgcolor": "#f5f5f5" }, _one_per_page: !0, nlogo: "en-us" != window.uilang ? a.a : d.a, tlogo: "en-us" != window.uilang ? c.a : h.a, curpageid: curpageid, langs: [], menues: [], loaded_menu: !1, collapse: "", screenWidth: document.body.clientWidth, winHeight: window.innerHeight, nav_hide: !1, scroll_now_i: 0 } },
            beforeCreate: function() {
                try {
                    var t = window.uilang || "zh-cn",
                        e = this.$options._componentTag,
                        s = o(15)("./" + t + ".js");
                    window["mlan_" + e] = s(), ebus.$emit("getpluginlang", e)
                } catch (t) { console.error(t) }
            },
            created: function() {
                var t = this;
                this.ReverseBgcolor("options.aclor"), ebus.$on("refresh_reversebgcolor", function(e) { t.ReverseBgcolor("options.aclor", e || "") });
                var e = this,
                    o = +new Date;
                this.$watch(function() { return t.attr.styles["img-height"] }, function(e) { t.$nextTick(function() { $("img", t.$refs.imglogo.$el).height(e) }) }, { immediate: !0 }), iseditor && (e.winHeight -= 60), e.swiperid = "swiper-" + o, e.swiperpagid = "swiperpag-" + o, e.slider3scroll = "slider3scroll-" + o;
                var s = "swiper_js-" + o,
                    r = "swiper_css-" + o,
                    n = "";
                if (0 == $("#" + s).length) {
                    var i = document.createElement("script");
                    n = function() { e.setSwiper() }, i.id = s, i.type = "text/javascript", i.readyState ? i.onreadystatechange = function() { "loaded" != i.readyState && "complete" != i.readyState || (i.onreadystatechange = null, n()) } : i.onload = n, i.src = statichost + "/swiper/swiper.min.js", document.body.appendChild(i)
                } else setTimeout(function() { e.setSwiper() }, 1e3);
                0 == $("#" + r).length && $("<link>", { id: r, rel: "stylesheet", type: "text/css", href: statichost + "/swiper/swiper.min.css" }).prependTo("body"), e.$watch("attr.options.morebtn_center", function(t) { if (e.asynchoose) return !1; var o = e.attr.options.morebtn_right; "1" == t && "1" == o ? (e.asynchoose = !0, e.attr.options.morebtn_right = "0", setTimeout(function() { e.asynchoose = !1 }, 300)) : e.asynchoose = !1 }, { deep: !0 }), e.$watch("attr.options.morebtn_right", function(t) { if (e.asynchoose) return !1; var o = e.attr.options.morebtn_center; "1" == t && "1" == o ? (e.asynchoose = !0, e.attr.options.morebtn_center = "0", setTimeout(function() { e.asynchoose = !1 }, 300)) : e.asynchoose = !1 }, { deep: !0 }), e.$watch("attr.options.dotcolor", function(t) { e.setSwiper() }), e.$watch("attr.options.dotcolor_active", function(t) { e.setSwiper() }), e.$watch("attr.options.resource", function(t) { e.setSwiper() });
                if (0 == $("#submenu_js").length) {
                    var a = document.createElement("script"),
                        l = function() { setTimeout(function() { $(".dropdown-submenu > a").submenupicker() }, 1e3) };
                    a.id = "submenu_js", a.type = "text/javascript", a.readyState ? a.onreadystatechange = function() { "loaded" != a.readyState && "complete" != a.readyState || (a.onreadystatechange = null, l()) } : a.onload = l, a.src = statichost + "/submenu/bootstrap-submenu.min.js", document.body.appendChild(a)
                } else setTimeout(function() { $(".dropdown-submenu > a").submenupicker() }, 1e3);
                0 == $("#submenu_css").length && $("<link>", { id: "submenu_css", rel: "stylesheet", type: "text/css", href: statichost + "/submenu/bootstrap-submenu.min.css" }).prependTo("body"), this.collapse = "nav3-collapse-" + o, jGlobal.xhrPost("plugin/navbar", null, function(e) {
                    t.loaded_menu = !0;
                    var o = e.errcode,
                        s = e.errmsg;
                    0 == o && "ok" == s ? (t.langs = e.langs || [], t.menues = e.menues || [], t.ishopping = e.ishopping || "0", t.shopcarts = parseInt(e.shopcarts || 0)) : alert(s + "(" + o + ")")
                }, function(t) { return console.error(t) }), this.$watch("curlang", function(t) { /\b_v=preview\b/i.test(location.search) ? top.location.search = "?s_locale=" + t : location.search = "?s_locale=" + t }), this.$watch(function() { return { loaded_menu: t.loaded_menu, styles: t.attr.styles, morebtnshow: t.attr.options["morebtn-show"], screenWidth: t.screenWidth } }, function(o) {
                    t.$nextTick(function() {
                        var t = $(".slider3_btn", this.$el);
                        this.renderBtnDefaultStyle(t), this.renderBtnHover(t);
                        var o = this.attr.styles,
                            s = $("ul.nav > li:not(.sitelang)", this.$el);
                        return 0 == s.length || (this.screenWidth <= 768 || void s.on("touchstart mouseenter", function(t) {
                            if ($(this).hasClass("active")) return !0;
                            var s = $("> a,> .newshowcenter", this),
                                r = o["fhover-color"];
                            "scroll" == e.scrlstate && (r = o["hover-color"]), e.screenWidth <= 768 && (r = o["fhover-color"]), s.hasClass("newshowcenter") ? s.find("span").css("color", r) : s.css("color", r), s.css("border-bottom", "1px solid " + r)
                        }).on("touchend mouseleave", function(t) {
                            if (t.stopPropagation(), $(this).hasClass("active")) return !0;
                            var s = $("> a,> .newshowcenter", this),
                                r = o.fcolor;
                            "scroll" == e.scrlstate && (r = o.color), e.screenWidth <= 768 && (r = o.fcolor), s.hasClass("newshowcenter") ? s.find("span").css("color", r) : s.css("color", r), s.css("border-bottom", "1px solid transparent")
                        }))
                    })
                }, { immediate: !0, deep: !0 }), this.$nextTick(function() {
                    $(".scroll_wrap,.ihpone_c11").on("scroll", function() {
                        var t = $("#" + e.slider3scroll).offset().top,
                            o = e.attr.styles["top-margin"],
                            s = 59 - parseFloat(o);
                        e.iseditor || (t = parseFloat(t) + 60);
                        var r = e.attr.options.scroll_hide_set;
                        e.nav_hide;
                        if (t < s) {
                            if ("1" == r) {
                                var n = this.scrollTop,
                                    i = n - this.scroll_now_i;
                                this.scroll_now_i = n, e.nav_hide = i >= 0
                            }
                            e.scrlstate = "fixed"
                        } else "1" == r && (e.nav_hide = !1), e.scrlstate = "scroll"
                    })
                }), window.iseditor && ebus.$on("slider3_shopping", function(e) { $.isFunction(e) && e(t.ishopping) }), this.$watch("ishopping", function(e) {
                    if ("1" != e) return !1;
                    var o = window.mlan_xysslider3 || {};
                    t.scan_view_cart = o.scan_view_cart
                })
            },
            filters: {
                parseVurl: function(t) {
                    if (!window.iseditor) {
                        var e = location.search;
                        if (window.ispreview) {
                            if (new RegExp("http:|https:|mailto:|tel:", "g").test(t)) return t;
                            var o = new RegExp("#layer\\w+", "i").exec(t);
                            null != o && (t = t.substr(0, o.index));
                            var s = window.domain + t,
                                r = "/webquick/" + s + "?_v=preview";
                            return null != o && (r += o[0]), r
                        }
                        return t + e
                    }
                },
                cstVurl: function(t) { if (/\/([^\/]+?)(#layer[A-Z0-9]{32})$/.test((t || "").replace(/\?[^#]+/, "")) && RegExp.$1 == window.curpageid) return "javascript: jGlobal.linkAnchor('" + RegExp.$2 + "');"; return t }
            },
            mounted: function() {
                var t = this.attr.styles,
                    e = this,
                    o = $(".slider3_btn", this.$el);
                window.addEventListener("resize", function() { return e.screenWidth = window.innerWidth }, !1), "" == t["button-hover-bgcolor"] && (this.attr.styles["button-hover-bgcolor"] = o.css("background")), "" == t["button-hover-bcolor"] && (this.attr.styles["button-hover-bcolor"] = o.css("border-color"))
            },
            beforeDestroy: function() { $(".scroll_wrap,.ihpone_c11").off("scroll") },
            computed: {
                navStyle: function() {
                    var t = this.attr.styles,
                        e = "fixed",
                        o = 0,
                        s = t["fbackground-color"];
                    return "scroll" == this.scrlstate && (e = "absolute", o = t["top-margin"], s = "transparent"), this.iseditor && "fixed" == this.scrlstate && (o = 60), { position: e, "margin-top": o + "px", "background-color": s }
                },
                mbnavBtn: function() { var t = this.attr.styles.color; return "fixed" == this.scrlstate && (t = this.attr.styles.fcolor), { "background-color": t } },
                mbnavcarcenter: function() { var t = this.attr.styles.color; return "fixed" == this.scrlstate && (t = this.attr.styles.fcolor), { color: t } },
                navucshop: function() { var t = this.attr.options || {}; return "1" == this.ishopping && ("1" == t.showshopcart || "1" == t.showucenter) }
            },
            methods: {
                ucshopAct: function(t) { o.i(s.a)(t, this.scan_view_cart) },
                setSwiper: function() {
                    var t = this;
                    this.$nextTick(function() {
                        if (0 == $("#swiper_animate_js").length) {
                            var e = document.createElement("script"),
                                o = function() { t.instantSwiper() };
                            e.id = "swiper_animate_js", e.type = "text/javascript", e.readyState ? e.onreadystatechange = function() { "loaded" != e.readyState && "complete" != e.readyState || (e.onreadystatechange = null, o()) } : e.onload = o, e.src = statichost + "/swiper/swiper.animate1.0.3.min.js", document.body.appendChild(e)
                        } else setTimeout(function() { t.instantSwiper() }, 100)
                    })
                },
                instantSwiper: function() {
                    var t = this,
                        e = t.attr.options,
                        o = iseditor || "0" == e.autoplay,
                        s = { delay: e.interval, stopOnLastSlide: !1, disableOnInteraction: !0 },
                        r = !o && s;
                    t.attr.options.resource.length;
                    t.swiper = new Swiper("#" + t.swiperid, { pagination: { el: "#" + t.swiperpagid, type: "custom", autoplayDisableOnInteraction: !1, clickable: !0, renderCustom: function(e, o, s) { for (var r = " ", n = 0; n < s; n++) r += n === o - 1 ? '<span class="swiper-pagination-bullet swiper-pagination-bullet-active" role="button" style="background-color:' + t.attr.options.dotcolor + '"></span>' : '<span class="swiper-pagination-bullet" role="button" style="background-color:' + t.attr.options.dotcolor_active + '"></span>'; return r } }, on: { init: function() { swiperAnimateCache(this), swiperAnimate(this) }, slideChangeTransitionEnd: function() { swiperAnimate(this) } }, grabCursor: !iseditor, allowTouchMove: !iseditor, autoplay: r, loop: !0, observer: !0, observeParents: !0, observeSlideChildren: !0 })
                },
                isActive: function(t) { return this.curpageid == t ? "active" : "dropdown" },
                isActiveSubmenu: function(t) { return t.nodes.length ? "dropdown-submenu" : "" },
                activeStyle: function(t) {
                    var e = this.attr.styles,
                        o = this.curpageid == t,
                        s = e.color,
                        r = e["active-color"],
                        n = "";
                    return ("fixed" == this.scrlstate || this.screenWidth <= 768) && (s = e.fcolor, r = e["factive-color"]), o && this.screenWidth <= 768 && (n = "#fff"), n ? { color: o ? n : s } : { color: o ? r : s, "border-bottom": o ? "1px solid " + r : "" }
                },
                mbClick: function() {
                    var t = this.attr.styles,
                        e = t.fcolor,
                        o = this.$refs.slider3btn || [],
                        s = $(".icon-bar", o),
                        r = this.scrlstate;
                    setTimeout(function() { "false" == $(o).attr("aria-expanded") && "fixed" != r && (e = t.color), s.css("background-color", e) }, 100)
                },
                renderBtnHover: function(t) {
                    var e = this,
                        o = this.attr.styles,
                        s = t.css("color"),
                        r = t.css("background-color");
                    t.on("mouseenter", function() {
                        var t = "background-color:" + o["button-hover-bgcolor"] + "!important;border-radius:" + o["button-bradius"] + "px;";
                        t += o["button-hover-bcolor"] ? "border:" + o["button-bwidth"] + "px solid " + o["button-hover-bcolor"] + "!important;" : "border:" + $(this).css("border") + ";", "" != o["button-hover-tcolor"] ? (t += "color:" + o["button-hover-tcolor"], $(this).find("a").css("cssText", "color:" + o["button-hover-tcolor"] + "!important")) : t += "color:" + $(this).css("color"), $(this).css("cssText", t)
                    }).on("mouseleave", function() { e.renderBtnDefaultStyle(t, s, r) })
                },
                renderBtnDefaultStyle: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        s = this.attr.styles,
                        r = { border: s["button-bwidth"] + "px solid " + s["button-bcolor"], "border-radius": s["button-bradius"], visibility: "1" == this.attr.options["morebtn-show"] ? "" : "hidden" };
                    "" != e && (r.color = e), "" != o && (r["background-color"] = o), "" != s["button-tcolor"] ? (r.color = s["button-tcolor"], t.find("a").css("cssText", "color:" + s["button-tcolor"] + "!important")) : (r.color = "", t.find("a").css("cssText", "")), t.css(r)
                }
            },
            props: ["attr"]
        }
    }, function(t, e) { t.exports = function() { return { block_title: "Slideshow 3", delconfirm: "Are you sure to delete it?", property: "Property", style: "Style", browsertip: "Valid only in browse mode", autoplay: "Auto Play", interval: "Interval", pictures: "Pictures", choose: "Choose", remove: "Delete", dots: "Switch Button", btnbar: "Show Button", btnbgcolor: "Background", btnbcolor: "Frame Colour", btnbwidth: "Frame Width", btnradius: "Border radius", btnbradius: "Border radius", dotbgcolor: "Dots Background color", dotbcolor: "Border Color", dotactivebgcolor: "Dots Actived B.G. color", dotactivebcolor: "Actived border color", morebtnshow: "Show Button", titleSize: "Title Size", navs: "Navigate", sliders: "Rotation", fbgcolor: "Navigation Background", activedbgcolor: "Onshow Slide Background", fontcolor: "Font Colour", activedfcolor: "Text Selected", hoverfcolor: "Hover text color", navPadding: "Upper Margin", ffontcolor: "Font Colour", factivedfcolor: "Text Selected", fhoverfcolor: "Hover text color", Top_style: "Navigation Style", Floating_style: "Pinned Navigation Style", toplogo: "Top Logo", floatinglogo: "Floating Logo", showlang: "Multi-languages", showtext1: "Title", showtext2: "Description", scrollhide: "Hide when Scroll Down", scrollhidetip: "Hide floating navigation when scrolling down and show when scrolling up", Logo_size: "Logo Size", titles1: "<strong>Brand Promotion slogan1</strong>", titles2: "Brand Promotion slogan2", desc: "Title length is appropriate to make the page more accessible", btntxt: "Learn More", imgsize: " Suggested image size 1920*800px", Button_position: "Btn position", Left_pos: "Left", Center_pos: "Center", Right_pos: "Right", bg_color: "Background Colour", hover_bg_color: "Hover Background", hover_border_color: "Hover Frame", text_color_tips: "This setting overrides the button text link color", text_color_tips2: "This setting overrides the button text hover color", scan_view_cart: "Scan the code on your phone to view the shopping cart", shoppingcart: "Shopping Cart", usercenter: "User Center" } } }, function(t, e) { t.exports = function() { return { block_title: "è½®æ’­ 3", delconfirm: "ç¡®å®šè¦åˆ é™¤å—ï¼Ÿ", property: "å±žæ€§", style: "æ ·å¼", browsertip: "ä»…åœ¨æµè§ˆæ¨¡å¼ä¸‹æœ‰æ•ˆ", autoplay: "è‡ªåŠ¨åˆ‡æ¢", interval: "åˆ‡æ¢æ—¶é•¿", pictures: "å›¾ç‰‡é›†", choose: "é€‰æ‹©", remove: "åˆ é™¤", dots: "åˆ‡æ¢æŒ‰é’®", btnbar: "æ˜¾ç¤ºæŒ‰é’®", btnbgcolor: "èƒŒæ™¯", btnbcolor: "è¾¹æ¡†é¢œè‰²", btnbwidth: "è¾¹æ¡†å®½åº¦", btnbradius: "è¾¹æ¡†åœ†è§’", dotbgcolor: "æŒ‡ç¤ºå™¨èƒŒæ™¯é¢œè‰²", dotbcolor: "è¾¹æ¡†é¢œè‰²", dotactivebgcolor: "æŒ‡ç¤ºå™¨é€‰ä¸­èƒŒæ™¯é¢œè‰²", dotactivebcolor: "é€‰ä¸­è¾¹æ¡†é¢œè‰²", morebtnshow: "æ˜¾ç¤ºæŒ‰é’®", titleSize: "æ ‡é¢˜å¤§å°", navs: "å¯¼èˆª", sliders: "è½®æ’­", fbgcolor: "å¯¼èˆªèƒŒæ™¯", activedbgcolor: "é€‰ä¸­èƒŒæ™¯", fontcolor: "æ–‡å­—é¢œè‰²", activedfcolor: "é€‰ä¸­æ–‡å­—", hoverfcolor: "æ‚¬åœæ–‡å­—", navPadding: "ä¸Šè¾¹è·", ffontcolor: "æ–‡å­—é¢œè‰²", factivedfcolor: "é€‰ä¸­æ–‡å­—", fhoverfcolor: "æ‚¬åœæ–‡å­—", toplogo: "ç½®é¡¶Logo", floatinglogo: "æµ®åŠ¨Logo", showlang: "å¤šè¯­è¨€", showtext1: "æ ‡é¢˜", showtext2: "æè¿°", Top_style: "å¯¼èˆªæ ·å¼", Floating_style: "å¯¼èˆªç½®é¡¶æ ·å¼", scrollhide: "ä¸‹æ»šåŠ¨éšè—", scrollhidetip: "å‘ä¸‹æ»šåŠ¨æ—¶éšè—æµ®åŠ¨å¯¼èˆªï¼Œå‘ä¸Šæ»šåŠ¨æ—¶æ˜¾ç¤º", Logo_size: "Logoå¤§å°", titles1: "<strong>å“ç‰ŒæŽ¨å¹¿å£å·1</strong>", titles2: "å“ç‰ŒæŽ¨å¹¿å£å·2", desc: "æ ‡é¢˜é•¿åº¦é€‚å½“å¯è®©é¡µé¢æ›´åè°ƒ", btntxt: "äº†è§£æ›´å¤š", imgsize: "å»ºè®®å›¾ç‰‡å°ºå¯¸ï¼š1920*800px", Button_position: "æŒ‰é’®ä½ç½®", Left_pos: "å±…å·¦", Center_pos: "å±…ä¸­", Right_pos: "å±…å³", bg_color: "èƒŒæ™¯é¢œè‰²", hover_bg_color: "æ‚¬åœèƒŒæ™¯", hover_border_color: "æ‚¬åœè¾¹æ¡†", text_color_tips: "è¯¥è®¾ç½®ä¼šè¦†ç›–æŒ‰é’®æ–‡å­—é“¾æŽ¥é¢œè‰²", text_color_tips2: "è¯¥è®¾ç½®ä¼šè¦†ç›–æŒ‰é’®æ–‡å­—æ‚¬åœé¢œè‰²", scan_view_cart: "æ‰‹æœºæ‰«ç æŸ¥çœ‹è´­ç‰©è½¦", shoppingcart: "è´­ç‰©è½¦", usercenter: "ä¼šå‘˜ä¸­å¿ƒ" } } }, function(t, e) { t.exports = function() { return { block_title: "è¼ªæ’­ 3", delconfirm: "ç¢ºå®šè¦åˆªé™¤å—Žï¼Ÿ", property: "å±¬æ€§", style: "æ¨£å¼", browsertip: "åƒ…åœ¨ç€è¦½æ¨¡å¼ä¸‹æœ‰æ•ˆ", autoplay: "è‡ªå‹•åˆ‡æ›", interval: "åˆ‡æ›æ™‚é•·", pictures: "åœ–ç‰‡é›†", choose: "é¸æ“‡", remove: "åˆªé™¤", dots: "åˆ‡æ›æŒ‰éˆ•", btnbar: "é¡¯ç¤ºæŒ‰éˆ•", btnbgcolor: "èƒŒæ™¯", btnbcolor: "é‚Šæ¡†é¡è‰²", btnbwidth: "é‚Šæ¡†å¯¬åº¦", btnbradius: "é‚Šæ¡†åœ“è§’", dotbgcolor: "æŒ‡ç¤ºå™¨èƒŒæ™¯é¡è‰²", dotbcolor: "é‚Šæ¡†é¡è‰²", dotactivebgcolor: "æŒ‡ç¤ºå™¨é¸ä¸­èƒŒæ™¯é¡è‰²", dotactivebcolor: "é¸ä¸­é‚Šæ¡†é¡è‰²", morebtnshow: "é¡¯ç¤ºæŒ‰éˆ•", titleSize: "æ¨™é¡Œå¤§å°", navs: "å°Žèˆª", sliders: "è¼ªæ’­", fbgcolor: "å°ŽèˆªèƒŒæ™¯", activedbgcolor: "é¸ä¸­èƒŒæ™¯", fontcolor: "æ–‡å­—é¡è‰²", activedfcolor: "é¸ä¸­æ–‡å­—", hoverfcolor: "æ‡¸åœæ–‡å­—", navPadding: "ä¸Šé‚Šè·", ffontcolor: "æ–‡å­—é¡è‰²", factivedfcolor: "é¸ä¸­æ–‡å­—", fhoverfcolor: "æ‡¸åœæ–‡å­—", Top_style: "å°Žèˆªæ¨£å¼", Floating_style: "å°Žèˆªç½®é ‚æ¨£å¼", toplogo: "ç½®é ‚Logo", floatinglogo: "æµ®å‹•Logo", showlang: "å¤šèªžè¨€", showtext1: "æ¨™é¡Œ", showtext2: "æè¿°", scrollhide: "ä¸‹æ»¾å‹•éš±è—", scrollhidetip: "å‘ä¸‹æ»¾å‹•æ™‚éš±è—æµ®å‹•å°Žèˆªï¼Œå‘ä¸Šæ»¾å‹•æ™‚é¡¯ç¤º", Logo_size: "Logoå¤§å°", titles1: "<strong>å“ç‰ŒæŽ¨å»£å£è™Ÿ1</strong>", titles2: "å“ç‰ŒæŽ¨å»£å£è™Ÿ2", desc: "æ¨™é¡Œé•·åº¦é©ç•¶å¯è®“é é¢æ›´å”èª¿", btntxt: "äº†è§£æ›´å¤š", imgsize: "å»ºè­°åœ–ç‰‡å°ºå¯¸ï¼š1920*800px", Button_position: "æŒ‰éˆ•ä½ç½®", Left_pos: "å±…å·¦", Center_pos: "å±…ä¸­", Right_pos: "å±…å³", bg_color: "èƒŒæ™¯é¡è‰²", hover_bg_color: "æ‡¸åœèƒŒæ™¯", hover_border_color: "æ‚¬åœè¾¹æ¡†", text_color_tips: "è¯¥è®¾ç½®ä¼šè¦†ç›–æŒ‰é’®æ–‡å­—é“¾æŽ¥é¢œè‰²", text_color_tips2: "è¯¥è®¾ç½®ä¼šè¦†ç›–æŒ‰é’®æ–‡å­—æ‚¬åœé¢œè‰²", scan_view_cart: "æ‰‹æ©ŸæŽƒç¢¼æŸ¥çœ‹è³¼ç‰©è»Š", shoppingcart: "è³¼ç‰©è»Š", usercenter: "æœƒå“¡ä¸­å¿ƒ" } } }, function(t, e, o) {
        "use strict";
        e.a = function(t) {
            var e = (arguments.length > 1 && void 0 !== arguments[1] && arguments[1], "");
            switch (t) {
                case "shopcart":
                    window.ispreview && (e = "/webquick/" + window.domain), location.href = e + "/ucenter/cart";
                    break;
                case "ucenter":
                    window.ispreview && (e = "/webquick/" + window.domain), location.href = e + "/ucenter"
            }
        }
    }, function(t, e) {}, function(t, e) {}, function(t, e, o) { t.exports = o.p + "vplugin/slider3/assets/bbfbaa26a56e96d69f2fb0bdf649d569.png" }, function(t, e, o) { t.exports = o.p + "vplugin/slider3/assets/6bfac2b3bc8eaa8131258f8d77d49064.png" }, function(t, e, o) { t.exports = o.p + "vplugin/slider3/assets/108e230610555779c3aa4d6bb2f489f8.png" }, function(t, e, o) { t.exports = o.p + "vplugin/slider3/assets/f53d2784495a364c9ee48615638b57b1.png" }, function(t, e, o) { t.exports = o.p + "vplugin/slider3/assets/d22c8f5afdbfee85a04bee0b2a514bdb.jpg" }, function(t, e) {
        t.exports = function(t, e, o, s, r) {
            var n, i = t = t || {},
                a = typeof t.default;
            "object" !== a && "function" !== a || (n = t, i = t.default);
            var l = "function" == typeof i ? i.options : i;
            e && (l.render = e.render, l.staticRenderFns = e.staticRenderFns), s && (l._scopeId = s);
            var c;
            if (r ? (c = function(t) { t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(r) }, l._ssrRegister = c) : o && (c = o), c) {
                var u = l.functional,
                    d = u ? l.render : l.beforeCreate;
                u ? l.render = function(t, e) { return c.call(e), d(t, e) } : l.beforeCreate = d ? [].concat(d, c) : [c]
            }
            return { esModule: n, exports: i, options: l }
        }
    }, function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    o = t._self._c || e;
                return o("div", { staticClass: "slider3-div", style: { padding: t.attr.styles["margin-top"] + "px 0 " + t.attr.styles["margin-bottom"] + "px" }, attrs: { id: t.slider3scroll } }, [o("section", { class: ["speebHead", { scroll: "fixed" == t.scrlstate }] }, [o("nav", { class: ["navbar", "navbar-default", "navbar-fixed-top", "time03", "newslider3z2", { nav_hide: 1 == t.nav_hide }], style: [t.navStyle] }, [o("div", { staticClass: "container containerM PC_FLEX" }, [o("div", { staticClass: "navbar-header" }, [o("a", { staticClass: "navbar-brand", style: { "--img-height": t.attr.styles["img-height"] + "px" }, attrs: { href: t._f("parseVurl")("/") } }, ["fixed" == t.scrlstate ? o("img-picker", { ref: "imglogo", attrs: { defaultval: t.nlogo, iclass: "w100slider3", attr: t.attr.options.picattr }, model: { value: t.attr.options.logo, callback: function(e) { t.$set(t.attr.options, "logo", e) }, expression: "attr.options.logo" } }) : o("img-picker", { ref: "imglogo", attrs: { defaultval: t.tlogo, iclass: "w100slider3", attr: t.attr.options.picattr2 }, model: { value: t.attr.options.toplogo, callback: function(e) { t.$set(t.attr.options, "toplogo", e) }, expression: "attr.options.toplogo" } })], 1), t._v(" "), t.navucshop ? [o("div", { staticClass: "slider3flexcenter  iponeshow" }, ["1" == t.attr.options.showshopcart ? o("li", [o("div", { staticClass: "Jso-Navigation-Menu newshowcenter", staticStyle: { margin: "0 auto!important" } }, [o("div", { staticClass: "flex_center ucshop", staticStyle: { height: "100%" }, on: { click: function(e) { return e.stopPropagation(), t.ucshopAct("shopcart") } } }, [o("div", { staticClass: "navicons mr20" }, [o("span", { staticClass: "iconfont icon-a-zu4106", style: t.mbnavcarcenter }, [t.shopcarts ? o("p", { staticClass: "cartnum" }, [t._v(t._s(t.shopcarts))]) : t._e()])])])])]) : t._e(), t._v(" "), "1" == t.attr.options.showucenter ? o("li", [o("div", { staticClass: "Jso-Navigation-Menu newshowcenter", staticStyle: { margin: "0 auto!important" } }, [o("div", { staticClass: "flex_center ucshop", staticStyle: { height: "100%" }, on: { click: function(e) { return e.stopPropagation(), t.ucshopAct("ucenter") } } }, [o("div", { staticClass: "navicons mr20" }, [o("span", { staticClass: "iconfont icon-a-lujing5393", style: t.mbnavcarcenter })])])])]) : t._e()])] : t._e(), t._v(" "), o("button", { ref: "slider3btn", staticClass: "navbar-toggle collapsed time03 slider3btn", attrs: { type: "button", "data-toggle": "collapse", "data-target": "#" + t.collapse, "aria-expanded": "false" }, on: { click: function(e) { return t.mbClick() } } }, [o("span", { staticClass: "icon-bar time03", style: t.mbnavBtn }), t._v(" "), o("span", { staticClass: "icon-bar time03", style: t.mbnavBtn })])], 2), t._v(" "), o("div", { staticClass: "collapse navbar-collapse PC_right", style: { "background-color": t.screenWidth <= 768 ? t.attr.styles["fbackground-color"] : "" }, attrs: { id: t.collapse } }, [o("ul", { staticClass: "nav navbar-nav navbar-right PC_FLEXED" }, [t._l(t.menues, function(e) { return o("li", { key: e.menu.id, staticClass: "Jso-Navigation-Menu newhover_show", class: [t.isActive(e.menu.s_query_hash)] }, [0 == e.nodes.length ? [e.menu.customlink && null != e.menu.customlink.href ? o("a", { style: [t.activeStyle(e.menu.s_query_hash)], attrs: { href: t._f("cstVurl")(t._f("parseVurl")(e.menu.customlink.href)), target: "1" == e.menu.customlink.target ? "_blank" : "_self", title: e.menu.customlink.title } }, [t._v(t._s(e.menu.title))]) : o("a", { style: [t.activeStyle(e.menu.s_query_hash)], attrs: { href: t._f("parseVurl")("/" + e.menu.s_query_hash), target: "1" == e.menu.target ? "_blank" : "_self" } }, [t._v(t._s(e.menu.title))])] : [e.menu.customlink && null != e.menu.customlink.href ? o("a", { staticClass: "dropdown-toggle", style: [t.activeStyle(e.menu.s_query_hash)], attrs: { href: t._f("cstVurl")(t._f("parseVurl")(e.menu.customlink.href)), target: "1" == e.menu.customlink.target ? "_blank" : "_self", title: e.menu.customlink.title, "data-toggle": "dropdown" } }, [t._v(t._s(e.menu.title)), o("span", { staticClass: "caret" })]) : o("a", { staticClass: "dropdown-toggle", style: [t.activeStyle(e.menu.s_query_hash)], attrs: { href: t._f("parseVurl")("/" + e.menu.s_query_hash), target: "1" == e.menu.target ? "_blank" : "_self", "data-toggle": "dropdown" } }, [t._v(t._s(e.menu.title)), o("span", { staticClass: "caret" })]), t._v(" "), o("ul", { staticClass: "dropdown-menu", style: { "--ccolor": t.attr.styles.ccolor, "--cbgcolor": t.attr.styles.cbgcolor, "--chover-color": t.attr.styles["chover-color"], "--chover-bgcolor": t.attr.styles["chover-bgcolor"] } }, t._l(e.nodes, function(e) { return o("li", { key: e.menu.id, staticClass: "smenu Jso-Navigation-Menu", class: [t.isActiveSubmenu(e)] }, [e.menu.customlink && null != e.menu.customlink.href ? o("a", { attrs: { href: t._f("cstVurl")(t._f("parseVurl")(e.menu.customlink.href)), target: "1" == e.menu.customlink.target ? "_blank" : "_self", title: e.menu.customlink.title, tabindex: "0" } }, [t._v(t._s(e.menu.title))]) : o("a", { attrs: { href: t._f("parseVurl")("/" + e.menu.s_query_hash), target: "1" == e.menu.target ? "_blank" : "_self", tabindex: "0" } }, [t._v(t._s(e.menu.title))]), t._v(" "), e.nodes.length > 0 ? o("ul", { staticClass: "dropdown-menu slider3chmenu" }, t._l(e.nodes, function(e) { return o("li", { key: e.menu.id, staticClass: "Jso-Navigation-Menu" }, [e.menu.customlink && null != e.menu.customlink.href ? o("a", { attrs: { href: t._f("cstVurl")(t._f("parseVurl")(e.menu.customlink.href)), target: "1" == e.menu.customlink.target ? "_blank" : "_self", title: e.menu.customlink.title, tabindex: "0" } }, [t._v(t._s(e.menu.title))]) : o("a", { attrs: { href: t._f("parseVurl")("/" + e.menu.s_query_hash), target: "1" == e.menu.target ? "_blank" : "_self", tabindex: "0" } }, [t._v(t._s(e.menu.title))])]) }), 0) : t._e()]) }), 0)]], 2) }), t._v(" "), t.langs.length && "1" == t.attr.options.showlang ? o("li", { staticClass: "sitelang" }, [o("select", {
                    directives: [{ name: "model", rawName: "v-model", value: t.curlang, expression: "curlang" }],
                    staticClass: "form-control",
                    staticStyle: { "padding-right": "30px" },
                    on: {
                        change: function(e) {
                            var o = Array.prototype.filter.call(e.target.options, function(t) { return t.selected }).map(function(t) { return "_value" in t ? t._value : t.value });
                            t.curlang = e.target.multiple ? o : o[0]
                        }
                    }
                }, t._l(t.langs, function(e) { return o("option", { key: e.id, domProps: { value: e.key } }, [t._v(t._s(e.title) + "\n                ")]) }), 0)]) : t._e(), t._v(" "), t.navucshop ? [o("div", { staticClass: "slider3flexcenter iponehide" }, ["1" == t.attr.options.showshopcart ? o("li", [o("div", { staticClass: "Jso-Navigation-Menu newshowcenter", staticStyle: { margin: "0 auto!important" } }, [o("div", { staticClass: "flex_center ucshop", staticStyle: { height: "100%" }, on: { click: function(e) { return e.stopPropagation(), t.ucshopAct("shopcart") } } }, [o("div", { staticClass: "navicons mr20" }, [o("span", { staticClass: "iconfont icon-a-zu4106", style: [t.activeStyle("shopcart")] }, [t.shopcarts ? o("p", { staticClass: "cartnum" }, [t._v(t._s(t.shopcarts))]) : t._e()])])])])]) : t._e(), t._v(" "), "1" == t.attr.options.showucenter ? o("li", [o("div", { staticClass: "Jso-Navigation-Menu newshowcenter", staticStyle: { margin: "0 auto!important" } }, [o("div", { staticClass: "flex_center ucshop", staticStyle: { height: "100%" }, on: { click: function(e) { return e.stopPropagation(), t.ucshopAct("ucenter") } } }, [o("div", { staticClass: "navicons mr20" }, [o("span", { staticClass: "iconfont icon-a-lujing5393", style: [t.activeStyle("ucenter")] })])])])]) : t._e()])] : t._e()], 2)])])])]), t._v(" "), o("section", { staticClass: "speebBanner time03 slider3-div-banner", style: { height: t.winHeight + "px" } }, [o("div", { staticClass: "swiper-container speebBanner-swiper norelative", attrs: { id: t.swiperid } }, [o("div", { staticClass: "swiper-wrapper norelative" }, t._l(t.attr.options.resource, function(e, s) { return o("div", { key: s, staticClass: "swiper-slide", style: { "background-image": "url(" + t.attr.options.resource[s].pic + ")" } }, [o("div", { staticClass: "container containerM hei100" }, [o("div", { staticClass: "row" }, [o("div", { staticClass: "col-md-12" }, ["1" == t.attr.options["text1-show"] || "1" == t.attr.options["text2-show"] ? o("div", { staticClass: "text ani", attrs: { "swiper-animate-effect": "fadeInUp", "swiper-animate-duration": "1.8s", "swiper-animate-delay": "0.5s" } }, ["1" == t.attr.options["text1-show"] ? o("div", { directives: [{ name: "texteditable", rawName: "v-texteditable:[idx].resource.jso_L_Title", value: e.title || t.$default("titles" + (s + 1)), expression: "val.title||$default('titles'+(idx+1))", arg: s, modifiers: { resource: !0, jso_L_Title: !0 } }], staticClass: "h1-div", class: t.attr.styles.jso_L_Title }) : t._e(), t._v(" "), "1" == t.attr.options["text2-show"] ? o("div", { directives: [{ name: "texteditable", rawName: "v-texteditable:[idx].resource.jso_M_Title", value: e.desc || t.$default("desc"), expression: "val.desc||$default('desc')", arg: s, modifiers: { resource: !0, jso_M_Title: !0 } }], staticClass: "h2-div", class: t.attr.styles.jso_M_Title }) : t._e()]) : t._e(), t._v(" "), o("div", { staticClass: "speebBtn a ani slider3Btna", class: "1" == t.attr.options.morebtn_center ? "slider3_btn_center" : "1" == t.attr.options.morebtn_right ? "slider3_btn_right" : "slider3_btn_left", attrs: { "swiper-animate-effect": "fadeInUp", "swiper-animate-duration": "3s", "swiper-animate-delay": "0.5s" } }, [o("div", { directives: [{ name: "texteditable", rawName: "v-texteditable:[idx].resource.jso_Btn", value: e.btntxt || t.$default("btntxt"), expression: "val.btntxt||$default('btntxt')", arg: s, modifiers: { resource: !0, jso_Btn: !0 } }], staticClass: "slider3_btn Jso-Btn-Rounded", class: [t.attr.styles.jso_Btn, t.attr.options.aclor], attrs: { nocolor: "true" } })])])])])]) }), 0), t._v(" "), o("div", { staticClass: "swiper-pagination", attrs: { id: t.swiperpagid } })])])])
            },
            staticRenderFns: []
        }
    }, function(t, e, o) {
        function s(t) { return o(r(t)) }

        function r(t) { var e = n[t]; if (!(e + 1)) throw new Error("Cannot find module '" + t + "'."); return e }
        var n = { "./en-us.js": 2, "./zh-cn.js": 3, "./zh-tw.js": 4 };
        s.keys = function() { return Object.keys(n) }, s.resolve = r, t.exports = s, s.id = 15
    }, function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = o(0),
            r = o.n(s);
        "undefined" != typeof window && window.Vue && Vue.component("xys" + r.a.name, r.a), r.a.install = function(t) { t.component("xys" + r.a.name, r.a) }, e.default = r.a
    }])
});