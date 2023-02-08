! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("xysvideo5", [], e) : "object" == typeof exports ? exports.xysvideo5 = e() : t.xysvideo5 = e() }(this, function() {
    return function(t) {
        function e(i) { if (o[i]) return o[i].exports; var s = o[i] = { i: i, l: !1, exports: {} }; return t[i].call(s.exports, s, s.exports, e), s.l = !0, s.exports }
        var o = {};
        return e.m = t, e.c = o, e.i = function(t) { return t }, e.d = function(t, o, i) { e.o(t, o) || Object.defineProperty(t, o, { configurable: !1, enumerable: !0, get: i }) }, e.n = function(t) { var o = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(o, "a", o), o }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "/public/", e(e.s = 18)
    }([function(t, e) {
        t.exports = function(t, e, o, i, s) {
            var a, r = t = t || {},
                n = typeof t.default;
            "object" !== n && "function" !== n || (a = t, r = t.default);
            var l = "function" == typeof r ? r.options : r;
            e && (l.render = e.render, l.staticRenderFns = e.staticRenderFns), i && (l._scopeId = i);
            var c;
            if (s ? (c = function(t) { t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(s) }, l._ssrRegister = c) : o && (c = o), c) {
                var d = l.functional,
                    p = d ? l.render : l.beforeCreate;
                d ? l.render = function(t, e) { return c.call(e), p(t, e) } : l.beforeCreate = p ? [].concat(p, c) : [c]
            }
            return { esModule: a, exports: r, options: l }
        }
    }, function(t, e, o) {
        function i(t) { o(9), o(8) }
        var s = o(0)(o(3), o(15), i, "data-v-434c247c", null);
        t.exports = s.exports
    }, function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = {
            name: "third-part-video",
            mixins: [appLang],
            props: { vsrc: { type: String, default: "" }, vtype: { type: String, default: "" }, iwidth: { type: String, default: "100%" }, iheight: { type: String, default: "100%" }, vshow: { type: Boolean, default: !0 }, autoplay: { type: String, default: "1" } },
            data: function() { return { videocontent: "" } },
            created: function() {
                var t = this;
                this.$watch("vshow", function(e) { t.videocontent = e ? t.getVideoContent() : "" }, { immediate: !0 })
            },
            methods: {
                getVideoContent: function() {
                    var t = "",
                        e = this.vsrc,
                        o = this.autoplay,
                        i = "",
                        s = "",
                        a = "";
                    switch (this.vtype) {
                        case "youku":
                            if (s = "^https?:\\/\\/v.youku.com\\/v_show\\/id_([-a-zA-Z0-9=]+)?.html(?:\\?.+)?$", a = new RegExp(s, "i").exec(e)) t = a[1], e = "http://player.youku.com/embed/" + t;
                            else { a = new RegExp("^http:\\/\\/player\\.youku\\.com\\/player\\.php\\/(?:.+?\\/)?sid\\/(.+?)\\/v\\.swf$", "i").exec(e), a && (t = a[1], e = "https://player.youku.com/embed/" + t) }
                            break;
                        case "56":
                            s = "^https?://player\\.56\\.com/[-a-zA-Z0-9]+_([-a-zA-Z0-9]+)\\.swf$", a = new RegExp(s, "i").exec(e), a ? t = a[1] : (s = "^https?://www\\.56\\.com/\\w+/v_([-a-zA-Z0-9]+)\\.html(?:\\?.+)?$", a = new RegExp(s, "i").exec(e), a ? t = a[1] : (s = "^https?://www\\.56\\.com/\\w+/play_album-aid.+?vid-([a-zA-Z0-9]+)\\.html(?:\\?.+)?$", a = new RegExp(s, "i").exec(e), a ? t = a[1] : (s = "^https?://m\\.56\\.com/view/id-([a-zA-Z0-9]+)\\.html(?:\\?.+)?$", (a = new RegExp(s, "i").exec(e)) && (t = a[1])))), e = "http://www.56.com/iframe/" + t;
                            break;
                        case "qq":
                            s = "^https?://v\\.qq\\.com/boke|x/page/(?:\\w+/)*([-a-zA-Z0-9_]+)\\.html(?:\\?.+)?$", a = new RegExp(s, "i").exec(e), a ? t = a[1] : (s = "^https?://v\\.qq\\.com/cover/\\w/[-a-zA-Z0-9_]+\\.html\\?vid=([-a-zA-Z0-9_]+)$", a = new RegExp(s, "i").exec(e), a ? t = a[1] : (s = "^https?://static\\.video\\.qq\\.com/TPout\\.swf\\?vid=(\\w+)(?:&auto=[01])?$", a = new RegExp(s, "i").exec(e), a ? t = a[1] : (s = "^https?:\\/\\/v\\.qq\\.com\\/cover\\/\\w\\/[-a-zA-Z0-9_]+\\/([-a-zA-Z0-9_]+)\\.html$", a = new RegExp(s, "i").exec(e), a ? t = a[1] : (s = "/^https?:\\/\\/v\\.qq\\.com\\/page\\/(?:\\w+\\/)+(.*?)\\.html$/i", a = new RegExp(s, "i").exec(e), a ? t = a[1] : (s = "^https?://imgcache\\.qq\\.com/(?:\\w+/)*TPout\\.swf\\?.+?vid=(\\w+)(?:&auto=[01])?$", a = new RegExp(s, "i").exec(e), a ? t = a[1] : (s = "^https?:\\/\\/v\\.qq\\.com\\/x\\/cover\\/[-a-zA-Z0-9_]+\\/([-a-zA-Z0-9_]+)\\.html$", (a = new RegExp(s, "i").exec(e)) && (t = a[1]))))))), t && (e = "http://v.qq.com/txp/iframe/player.html?vid=" + t + "&tiny=0&auto=0");
                            break;
                        case "sohu":
                            if (o ? "autoplay=true" : "autoplay=false", jGlobal.isHttps() && (e = e.replace(new RegExp("^http:", "g"), "")), s = "https://tv.sohu.com/s/sohuplayer/iplay.html\\?bid=([-a-zA-Z0-9_\\.]+)", a = new RegExp(s, "i").exec(e)) {
                                var r = "false";
                                o && (r = "true"), e = "https://tv.sohu.com/s/sohuplayer/iplay.html?bid=" + a[1] + "&autoplay=" + r + "&disablePlaylist=true", i = '<iframe src="' + e + '" frameborder="0" allowfullscreen="true" width="100%" height="100%" scrolling="no"></iframe>'
                            } else if (s = "https?://tv.sohu.com/v/([^\\./]+)\\.html(\\?)?", a = new RegExp(s, "i").exec(e)) {
                                var n = a[1],
                                    l = decodeURIComponent(atob(n));
                                if (l) {
                                    if (a = new RegExp("/([a-zA-Z0-9]+)\\.s?html$", "i").exec(l)) {
                                        var c = "false";
                                        o && (c = "true"), e = "https://tv.sohu.com/s/sohuplayer/iplay.html?bid=" + a[1] + "&autoplay=" + c + "&disablePlaylist=true", i = '<iframe src="' + e + '" frameborder="0" allowfullscreen="true" width="100%" height="100%" scrolling="no"></iframe>'
                                    }
                                }
                            }
                            break;
                        case "bilibili":
                            var d = "",
                                p = "";
                            s = "^https?:\\/\\/player\\.bilibili\\.com/player\\.html\\?aid=([0-9]+)(?:\\?.+)?", a = new RegExp(s, "i").exec(e), a ? d = a[1] : (s = "^https?:\\/\\/www\\.bilibili\\.com/video\\/av([0-9]+)(?:\\?.+)?", a = new RegExp(s, "i").exec(e), a ? d = a[1] : (s = "^https?:\\/\\/b23\\.tv/av([0-9]+)(?:\\?.+)?", a = new RegExp(s, "i").exec(e), a ? d = a[1] : (s = "^https?://www\\.bilibili\\.com/video\\/BV([a-zA-Z0-9]+)(?:\\?.+)?", (a = new RegExp(s, "i").exec(e)) && (p = a[1])))), d ? e = "https://player.bilibili.com/player.html?aid=" + d : p && (e = "https://player.bilibili.com/player.html?bvid=" + p), i = '<iframe height="100%" width="100%" src="' + e + '" scrolling="no" frameborder=0 allowfullscreen allowtransparency="true"></iframe>';
                            break;
                        case "youtube":
                            if (s = "^https?://youtu\\.be/([-a-zA-Z0-9_]+)(?:\\?.+)?$", a = new RegExp(s, "i").exec(e), a ? (t = a[1], e = "http://www.youtube.com/v/" + t) : (s = "^https?://www\\.youtube\\.com/watch\\?v=([-a-zA-Z0-9_]+)", (a = new RegExp(s, "i").exec(e)) && (t = a[1], e = "http://www.youtube.com/v/" + t)), t) {
                                var u = o ? "autoplay=1" : "autoplay=0";
                                jGlobal.isHttps() && (e = e.replace(new RegExp("^http:", "g"), "")), i = '<embed height="100%" width="100%" src="' + e + '" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" flashvars="' + u + '"></embed>'
                            }
                    }
                    return "" == i && (jGlobal.isHttps() && (e = e.replace(new RegExp("^http:", "g"), "")), i = '<iframe height="100%" width="100%" src="' + e + '" scrolling="no" frameborder=0 allowfullscreen allowtransparency="true"></iframe>'), i
                }
            }
        }
    }, function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = o(7),
            s = o.n(i),
            a = o(11),
            r = o.n(a),
            n = o(12),
            l = o.n(n),
            c = o(14),
            d = o.n(c);
        e.default = {
            name: "video5",
            mixins: [Texteditable, Animate, mlangTrans],
            data: function() { return { mlang: {}, ismobile: !1, isfadehide: !0, ismobstr: "position_fade_fixed", iseditor: iseditor, coverimg: r.a, defimg: l.a, videolang: s.a, statichost: statichost, videoid: "", vshow: !1, options: { aclor: "Jso-Assistance-Col4", animation: {}, "title-animation": {}, "subtitle-animation": {}, "desc-animation": {}, "morebtn-animation": {}, vsrc: "", vtype: "originvideo", autoplay: "0", coverimg: r.a, defimg: "", align: "1", showtitle: "1", showsubtitle: "1", showdesc: "1", showspliter: "1", morebtncenter: "0", morebtnright: "0", "morebtn-show": "1", btntxt: "", defpicattr: { animation: {}, alt: "", linkattr: {}, title: "" } }, styles: { jso_M_Title: "Jso-M-Title", jso_S_Title: "Jso-S-Title", jso_Text: "Jso-Text", jso_Btn: "Jso-Btn", "button-bgcolor": "transparent", "button-bghcolor": "#008AFF", "button-bcolor": "#008AFF", "button-hcolor": "#fff", "button-bwidth": 1, "button-bradius": 5, "margin-top": 90, "margin-bottom": 90, "title-bcolor": "#008AFF", "uptitle-margin": 20, "subtitle-margin": 10, layerbg: { color: "#fff", image: "", iscovered: "0", overlay: "#000", opacity: "0.5", video: "", showbgcolor: "1", showbgimage: "1", showbgvideo: "0" } } } },
            computed: {
                coverbg: function() { return 'url("' + (this.attr.options.coverimg || this.coverimg).replace(/ /g, "%20") + '") no-repeat' },
                btnStyles: function() {
                    var t = this.attr.styles,
                        e = t["button-bcolor"],
                        o = t["button-bwidth"],
                        i = t["button-bradius"];
                    return { background: t["button-bgcolor"], color: e, border: o + "px solid " + e, "border-radius": i + "px", "-webkit-border-radius": i + "px", "-moz-border-radius": i + "px", "-ms-border-radius": i + "px" }
                },
                btnJustify: function() { var t = "left"; return "1" == this.attr.options.morebtncenter ? t = "center" : "1" == this.attr.options.morebtnright && (t = "right"), { display: "flex", justifyContent: t } },
                myanimate: function() { return !!(this.attr.options.animation || {}).animation }
            },
            beforeCreate: function() {
                try {
                    var t = window.uilang || "zh-cn",
                        e = this.$options._componentTag,
                        i = o(17)("./" + t + ".js");
                    window["mlan_" + e] = i(), ebus.$emit("getpluginlang", e)
                } catch (t) { console.error(t) }
            },
            created: function() {
                var t = this;
                this.ReverseBgcolor("options.aclor"), ebus.$on("refresh_reversebgcolor", function(e) { t.ReverseBgcolor("options.aclor", e || "") }), this.mlang = window.mlan_xysvideo5 || {};
                var e = this,
                    o = +new Date;
                e.videoid = "videojs-" + o, ebus.$on("devicestate", function(e) { t.ismobile = e, e ? ($(".modal", t.$el).css("position", "absolute"), $(".modal-dialog", t.$el).css("width", "100%"), t.ismobstr = "position_fade_absolute") : ($(".modal", t.$el).css("position", "fixed"), $(".modal-dialog", t.$el).css("width", "50%"), t.ismobstr = "position_fade_fixed") }), this.$watch("attr.options.morebtncenter", function(e) { "1" == e && (t.attr.options.morebtnright = "0") }), this.$watch("attr.options.morebtnright", function(e) { "1" == e && (t.attr.options.morebtncenter = "0") })
            },
            methods: {
                playvideo: function() {
                    var t = this,
                        e = document.getElementById(this.videoid);
                    if ($(".video5control", this.$el).addClass("video5_play_style"), $(".video5_bgopacity", this.$el).addClass("video5_play_opacity100"), $(".video5close", this.$el).show(400), $(".video5close", this.$el).addClass("video5close_width"), "originvideo" == this.attr.options.vtype) "1" == this.attr.options.autoplay && e.play();
                    else {
                        var o = $(window).width() <= 767 ? 600 : 100;
                        setTimeout(function() { t.vshow = !0 }, o)
                    }
                },
                playPause: function() {
                    var t = document.getElementById(this.videoid);
                    $(".video5control", this.$el).removeClass("video5_play_style"), $(".video5_bgopacity", this.$el).removeClass("video5_play_opacity100"), $(".video5close", this.$el).removeClass("video5close_width"), $(".video5close", this.$el).hide(400), "originvideo" == this.attr.options ? t.pause() : this.vshow = !1
                }
            },
            components: { ThirdPartVideo: d.a },
            props: ["attr"]
        }
    }, function(t, e) { t.exports = function() { return { block_title: "Video 5", property: "Property", style: "Style", vsource: "Video Source URL", choose: "Choose", cover: "Cover", vwidth: "Video Width(%)", vheight: "Video Height", focusbgcolor: "Core Zone B.G. Colour", bgcolor: "Background/Frame", titleSize: "Title Size", warmingtxt: "MP4(H264) Only", animated: "Animated", btnbgcolor: "Background", btnbcolor: "Button Color", btnbwidth: "Frame Width", btnbradius: "Rounded Frame", morebtnshow: "Show Button", hbgcolor: "Hover Background", textonright: "Swag Left & Right", showdesc: "Show Description", noscript: "To view this video please enable JavaScript, and consider upgrading to a web browser.", subtitle: "Video Show", title: "All the words here are for demonstration purposes.", desc: "All the words here are for demonstration purposes. Please enter your own business content asset.All the words here are for demonstration purposes. Please enter your own business content asset.", btntext: "More", imgsize: " Suggested image size 950*650", hcolor: "Hover", htxtcolor: "Hover Text", linecolor: "Line Color", title_space_under: "Title Lower Margin", subtitle_space_under: "Subtitle Lower Margin", split_space_under: "Separator under subtitle", buttonposition: "Button Location", centerpos: "Center", rightpos: "Right", showspliter: "Show Line", splitercolor: "Line Colour", autoplay: "Autoplay", notice: "Video URL ( support mp4, webm, ogg, Youku, 56, Tencent Video, Sohu Video, Bilibili )", tip: "Some video websites do not support video autoplay" } } }, function(t, e) { t.exports = function() { return { block_title: "è§†é¢‘ 5", property: "å±žæ€§", style: "æ ·å¼", vsource: "è§†é¢‘æºåœ°å€", choose: "é€‰æ‹©", cover: "å°é¢", vwidth: "è§†é¢‘å®½åº¦(%)", vheight: "è§†é¢‘é«˜åº¦", focusbgcolor: "ç„¦ç‚¹èƒŒæ™¯é¢œè‰²", bgcolor: "èƒŒæ™¯/è¾¹æ¡†", titleSize: "æ ‡é¢˜å¤§å°", warmingtxt: "ä»…æ”¯æŒMP4(H264ç¼–ç )", animated: "åŠ¨ç”»", btnbgcolor: "èƒŒæ™¯", btnbcolor: "æŒ‰é’®é¢œè‰²", btnbwidth: "è¾¹æ¡†å®½åº¦", btnbradius: "è¾¹æ¡†åœ†è§’", morebtnshow: "æ˜¾ç¤ºæŒ‰é’®", textonright: "å·¦å³å¯¹æ¢", showdesc: "æ˜¾ç¤ºæè¿°", noscript: "è‹¥è¦æŸ¥çœ‹æ­¤è§†é¢‘ï¼Œè¯·å¯ç”¨JavaScriptï¼Œå¹¶è€ƒè™‘å‡çº§åˆ°webæµè§ˆå™¨", subtitle: "è§†é¢‘å±•ç¤º", title: "è¿™é‡Œçš„æ‰€æœ‰æ–‡å­—éƒ½æ˜¯å‡ºäºŽç¤ºèŒƒç›®çš„ã€‚", desc: "è¿™é‡Œçš„æ‰€æœ‰æ–‡å­—éƒ½æ˜¯å‡ºäºŽç¤ºèŒƒç›®çš„ã€‚è¯·è¾“å…¥æ‚¨è‡ªå·±çš„ä¸šåŠ¡å†…å®¹èµ„äº§ã€‚è¿™é‡Œçš„æ‰€æœ‰æ–‡å­—éƒ½æ˜¯å‡ºäºŽç¤ºèŒƒç›®çš„ã€‚è¯·è¾“å…¥æ‚¨è‡ªå·±çš„ä¸šåŠ¡å†…å®¹èµ„äº§ã€‚", btntext: "æŸ¥çœ‹è¯¦æƒ…", imgsize: "å»ºè®®å›¾ç‰‡å°ºå¯¸ï¼š950*650px", hbgcolor: "æ‚¬åœèƒŒæ™¯", hcolor: "æ‚¬åœæ–‡æœ¬", linecolor: "çº¿æ¡é¢œè‰²", title_space_under: "æ ‡é¢˜ä¸‹è¾¹è·", subtitle_space_under: "å‰¯æ ‡é¢˜ä¸‹è¾¹è·", buttonposition: "æŒ‰é’®ä½ç½®", centerpos: "å±…ä¸­", rightpos: "å±…å³", showspliter: "æ˜¾ç¤ºåˆ†å‰²çº¿", splitercolor: "åˆ†å‰²çº¿é¢œè‰²", autoplay: "è‡ªåŠ¨æ’­æ”¾", notice: "è§†é¢‘ç½‘å€( æ”¯æŒ mp4ã€webmã€oggã€ä¼˜é…·ã€56ã€è…¾è®¯è§†é¢‘ã€æœç‹è§†é¢‘ã€å“”å“©å“”å“© )", tip: "éƒ¨åˆ†è§†é¢‘ç½‘ç«™ä¸æ”¯æŒè§†é¢‘è‡ªåŠ¨æ’­æ”¾åŠŸèƒ½" } } }, function(t, e) { t.exports = function() { return { block_title: "è¦–é » 5", property: "å±¬æ€§", style: "æ¨£å¼", vsource: "è¦–é »æºåœ°å€", choose: "é¸æ“‡", cover: "å°é¢", vwidth: "è¦–é »å¯¬åº¦(%)", vheight: "è¦–é »é«˜åº¦", focusbgcolor: "ç„¦é»žèƒŒæ™¯é¡è‰²", bgcolor: "èƒŒæ™¯/é‚Šæ¡†", titleSize: "æ¨™é¡Œå¤§å°", warmingtxt: "åƒ…æ”¯æŒ MP4ï¼ˆH264ç·¨ç¢¼ï¼‰è¦–é »æ ¼å¼", animated: "å‹•ç•«", btnbgcolor: "èƒŒæ™¯", btnbcolor: "æŒ‰éˆ•é¡è‰²", btnbwidth: "é‚Šæ¡†å¯¬åº¦", btnbradius: "é‚Šæ¡†åœ“è§’", morebtnshow: "é¡¯ç¤ºæŒ‰éˆ•", textonright: "å·¦å³å°æ›", showdesc: "é¡¯ç¤ºæè¿°", noscript: "è‹¥è¦æŸ¥çœ‹æ­¤è¦–é »ï¼Œè«‹å•Ÿç”¨JavaScriptï¼Œä¸¦è€ƒæ…®å‡ç´šåˆ°webç€è¦½å™¨", subtitle: "è¦–é »å±•ç¤º", title: "é€™è£çš„æ‰€æœ‰æ–‡å­—éƒ½æ˜¯å‡ºæ–¼ç¤ºç¯„ç›®çš„ã€‚", desc: "é€™è£çš„æ‰€æœ‰æ–‡å­—éƒ½æ˜¯å‡ºæ–¼ç¤ºç¯„ç›®çš„ã€‚è«‹è¼¸å…¥æ‚¨è‡ªå·±çš„æ¥­å‹™å…§å®¹è³‡ç”¢ã€‚é€™è£çš„æ‰€æœ‰æ–‡å­—éƒ½æ˜¯å‡ºæ–¼ç¤ºç¯„ç›®çš„ã€‚è«‹è¼¸å…¥æ‚¨è‡ªå·±çš„æ¥­å‹™å…§å®¹è³‡ç”¢ã€‚", btntext: "æŸ¥çœ‹è©³æƒ…", imgsize: "å»ºè­°åœ–ç‰‡å°ºå¯¸ï¼š950*650px", hbgcolor: "æ‡¸åœèƒŒæ™¯", hcolor: "æ–‡æœ¬", linecolor: "ç·šæ¢é¡è‰²", title_space_under: "æ¨™é¡Œä¸‹é‚Šè·", subtitle_space_under: "å‰¯æ¨™é¡Œä¸‹é‚Šè·", buttonposition: "æŒ‰éˆ•ä½ç½®", centerpos: "å±…ä¸­", rightpos: "å±…å³", showspliter: "é¡¯ç¤ºåˆ†å‰²ç·š", splitercolor: "åˆ†å‰²ç·šé¡è‰²", autoplay: "è‡ªå‹•æ’­æ”¾", notice: "è¦–é »ç¶²å€( æ”¯æŒ mp4ã€webmã€oggã€å„ªé…·ã€56ã€é¨°è¨Šè¦–é »ã€æœç‹è¦–é »ã€å—¶å“©å—¶å“© )", tip: "éƒ¨åˆ†è¦–é »ç¶²ç«™ä¸æ”¯æŒè¦–é »è‡ªå‹•æ’­æ”¾åŠŸèƒ½" } } }, function(t, e) { t.exports = function() { return { Play: "æ’­æ”¾", Pause: "æš‚åœ", "Current Time": "å½“å‰æ—¶é—´", Duration: "æ—¶é•¿", "Remaining Time": "å‰©ä½™æ—¶é—´", "Stream Type": "åª’ä½“æµç±»åž‹", LIVE: "ç›´æ’­", Loaded: "åŠ è½½å®Œæ¯•", Progress: "è¿›åº¦", Fullscreen: "å…¨å±", "Non-Fullscreen": "é€€å‡ºå…¨å±", Mute: "é™éŸ³", Unmute: "å–æ¶ˆé™éŸ³", "Playback Rate": "æ’­æ”¾é€Ÿåº¦", Subtitles: "å­—å¹•", "subtitles off": "å…³é—­å­—å¹•", Captions: "å†…åµŒå­—å¹•", "captions off": "å…³é—­å†…åµŒå­—å¹•", Chapters: "èŠ‚ç›®æ®µè½", "Close Modal Dialog": "å…³é—­å¼¹çª—", Descriptions: "æè¿°", "descriptions off": "å…³é—­æè¿°", "Audio Track": "éŸ³è½¨", "You aborted the media playback": "è§†é¢‘æ’­æ”¾è¢«ç»ˆæ­¢", "A network error caused the media download to fail part-way.": "ç½‘ç»œé”™è¯¯å¯¼è‡´è§†é¢‘ä¸‹è½½ä¸­é€”å¤±è´¥ã€‚", "The media could not be loaded, either because the server or network failed or because the format is not supported.": "è§†é¢‘å› æ ¼å¼ä¸æ”¯æŒæˆ–è€…æœåŠ¡å™¨æˆ–ç½‘ç»œçš„é—®é¢˜æ— æ³•åŠ è½½ã€‚", "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "ç”±äºŽè§†é¢‘æ–‡ä»¶æŸåæˆ–æ˜¯è¯¥è§†é¢‘ä½¿ç”¨äº†ä½ çš„æµè§ˆå™¨ä¸æ”¯æŒçš„åŠŸèƒ½ï¼Œæ’­æ”¾ç»ˆæ­¢ã€‚", "No compatible source was found for this media.": "æ— æ³•æ‰¾åˆ°æ­¤è§†é¢‘å…¼å®¹çš„æºã€‚", "The media is encrypted and we do not have the keys to decrypt it.": "è§†é¢‘å·²åŠ å¯†ï¼Œæ— æ³•è§£å¯†ã€‚", "Play Video": "æ’­æ”¾è§†é¢‘", Close: "å…³é—­", "Modal Window": "å¼¹çª—", "This is a modal window": "è¿™æ˜¯ä¸€ä¸ªå¼¹çª—", "This modal can be closed by pressing the Escape key or activating the close button.": "å¯ä»¥æŒ‰ESCæŒ‰é”®æˆ–å¯ç”¨å…³é—­æŒ‰é’®æ¥å…³é—­æ­¤å¼¹çª—ã€‚", ", opens captions settings dialog": ", å¼€å¯æ ‡é¢˜è®¾ç½®å¼¹çª—", ", opens subtitles settings dialog": ", å¼€å¯å­—å¹•è®¾ç½®å¼¹çª—", ", opens descriptions settings dialog": ", å¼€å¯æè¿°è®¾ç½®å¼¹çª—", ", selected": ", é€‰æ‹©", "captions settings": "å­—å¹•è®¾å®š", "Audio Player": "éŸ³é¢‘æ’­æ”¾å™¨", "Video Player": "è§†é¢‘æ’­æ”¾å™¨", Replay: "é‡æ’­", "Progress Bar": "è¿›åº¦å°èŠ‚", "Volume Level": "éŸ³é‡", "subtitles settings": "å­—å¹•è®¾å®š", "descriptions settings": "æè¿°è®¾å®š", Text: "æ–‡å­—", White: "ç™½", Black: "é»‘", Red: "çº¢", Green: "ç»¿", Blue: "è“", Yellow: "é»„", Magenta: "ç´«çº¢", Cyan: "é’", Background: "èƒŒæ™¯", Window: "è§†çª—", Transparent: "é€æ˜Ž", "Semi-Transparent": "åŠé€æ˜Ž", Opaque: "ä¸é€æ˜Ž", "Font Size": "å­—ä½“å°ºå¯¸", "Text Edge Style": "å­—ä½“è¾¹ç¼˜æ ·å¼", None: "æ— ", Raised: "æµ®é›•", Depressed: "åŽ‹ä½Ž", Uniform: "å‡åŒ€", Dropshadow: "ä¸‹é˜´å½±", "Font Family": "å­—ä½“åº“", "Proportional Sans-Serif": "æ¯”ä¾‹æ— ç»†ä½“", "Monospace Sans-Serif": "å•é—´éš”æ— ç»†ä½“", "Proportional Serif": "æ¯”ä¾‹ç»†ä½“", "Monospace Serif": "å•é—´éš”ç»†ä½“", Casual: "èˆ’é€‚", Script: "æ‰‹å†™ä½“", "Small Caps": "å°åž‹å¤§å†™å­—ä½“", Reset: "é‡å¯", "restore all settings to the default values": "æ¢å¤å…¨éƒ¨è®¾å®šè‡³é¢„è®¾å€¼", Done: "å®Œæˆ", "Caption Settings Dialog": "å­—å¹•è®¾å®šè§†çª—", "Beginning of dialog window. Escape will cancel and close the window.": "å¼€å§‹å¯¹è¯è§†çª—ã€‚ç¦»å¼€ä¼šå–æ¶ˆåŠå…³é—­è§†çª—", "End of dialog window.": "ç»“æŸå¯¹è¯è§†çª—" } } }, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e, o) { t.exports = o.p + "vplugin/video5/assets/5b05e9618213654effd235344825e4b4.jpg" }, function(t, e, o) { t.exports = o.p + "vplugin/video5/assets/deae8ae94b41a1f796ba0a937100330b.jpg" }, function(t, e) { t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAJFBMVEVHcEwgKjYhLDchKzUgKzYgKjYhKzYhKzYfKzYhKzYhKzUhKzaa4IbhAAAAC3RSTlMAgBxsvJqN3UTmTQsX4qIAAABXSURBVCjPY2CgDmBSQBOQ3oYmIr27GF1gtwe6wO4kdIHtBmgCu7c0oAns3qqAJrB7MrrAbi90gd0B6AIbCQoEEDB0MgGHoTsdw3NJBAKomEAgY0QDpQAAX/NUw9QOmSsAAAAASUVORK5CYII=" }, function(t, e, o) {
        function i(t) { o(10) }
        var s = o(0)(o(2), o(16), i, "data-v-4eea2a3c", null);
        t.exports = s.exports
    }, function(t, e, o) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", { directives: [{ name: "gso-animate", rawName: "v-gso-animate", value: t.attr.options.animation, expression: "attr.options.animation" }], staticClass: "Video5 Video5_padding_t_b", style: { padding: t.attr.styles["margin-top"] + "px 0 " + t.attr.styles["margin-bottom"] + "px" } }, [i("div", { staticClass: "container containerM", style: { "--btnbghcolor": t.attr.styles["button-bghcolor"], "--btnhcolor": t.attr.styles["button-hcolor"], "--showspliter": "1" == t.attr.options.showspliter ? "4px" : "0", "--titlebcolor": t.attr.styles["title-bcolor"] } }, [i("div", { staticClass: "Video5_content-wrapper" }, [i("div", { staticClass: "row align-items-center", class: { video5_reverse: "0" == t.attr.options.align } }, [i("div", { staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6" }, [i("div", { staticClass: "at__left mb-30" }, [i("div", { staticClass: "at__big-img" }, [i("img-picker", { attrs: { defaultval: t.defimg, iclass: "at__big-img_size2", attr: t.attr.options.defpicattr }, model: { value: t.attr.options.defimg, callback: function(e) { t.$set(t.attr.options, "defimg", e) }, expression: "attr.options.defimg" } })], 1), t._v(" "), i("div", { staticClass: "at__smll-img" }, [i("img", { staticClass: "at__big-img_size1", attrs: { src: t.attr.options.coverimg, alt: "" } }), t._v(" "), i("a", { staticClass: "video__icon", on: { click: function(e) { return t.playvideo() } } }, [i("img", { staticClass: "video5_play", attrs: { src: o(13) } })])])])]), t._v(" "), i("div", { staticClass: "col-xs-12 col-sm-12 col-md-6 col-lg-6" }, [i("div", { staticClass: "mt-25" }, [i("div", { staticClass: "sec__title" }, ["1" == t.attr.options.showsubtitle ? i("span", { directives: [{ name: "texteditable", rawName: "v-texteditable.jso_S_Title", value: t.attr.options.subtitle || t.$default("subtitle"), expression: "attr.options.subtitle||$default('subtitle')", modifiers: { jso_S_Title: !0 } }], class: [t.attr.styles.jso_S_Title], style: { "margin-bottom": t.attr.styles["subtitle-margin"] + "px" } }) : t._e(), t._v(" "), "1" == t.attr.options.showtitle ? i("div", { directives: [{ name: "texteditable", rawName: "v-texteditable.jso_M_Title", value: t.attr.options.title || t.$default("title"), expression: "attr.options.title||$default('title')", modifiers: { jso_M_Title: !0 } }], staticClass: "video5_bigtile", class: [t.attr.styles.jso_M_Title], style: { "margin-bottom": t.attr.styles["uptitle-margin"] + "px" } }) : t._e(), t._v(" "), "1" == t.attr.options.showdesc ? i("div", { directives: [{ name: "texteditable", rawName: "v-texteditable.jso_Text", value: t.attr.options.desc || t.$default("desc"), expression: "attr.options.desc||$default('desc')", modifiers: { jso_Text: !0 } }], class: ["divp", t.attr.styles.jso_Text] }) : t._e()]), t._v(" "), i("div", { style: t.btnJustify }, ["1" == t.attr.options["morebtn-show"] ? i("div", { directives: [{ name: "texteditable", rawName: "v-texteditable.jso_Btn", value: t.attr.options.btntxt || t.$default("btntext"), expression: "attr.options.btntxt||$default('btntext')", modifiers: { jso_Btn: !0 } }], class: ["thm-btn", t.attr.styles.jso_Btn, t.attr.options.aclor], style: t.btnStyles }) : t._e()])])])])]), t._v(" "), i("div", { staticClass: "video5_bgopacity", on: { click: function(e) { return e.stopPropagation(), t.playPause() } } }), t._v(" "), i("div", { staticClass: "video5close", on: { click: function(e) { return e.stopPropagation(), t.playPause() } } }), t._v(" "), "originvideo" == t.attr.options.vtype ? i("video", { staticClass: "video5control", attrs: { id: t.videoid, controls: "", controlsList: "nodownload", preload: "auto" } }, [/\.mp4$/i.test(t.attr.options.vsrc) ? [i("source", { attrs: { src: t.attr.options.vsrc, type: "video/mp4" } })] : /\.webm$/i.test(t.attr.options.vsrc) ? [i("source", { attrs: { src: t.attr.options.vsrc, type: "video/webm" } })] : /\.ogg|.ogv$/i.test(t.attr.options.vsrc) ? [i("source", { attrs: { src: t.attr.options.vsrc || t.statichost + "/videojs/m.ogv", type: "video/ogg" } })] : [i("source", { attrs: { src: t.statichost + "/videojs/def.mp4", type: "video/mp4" } })], t._v(" "), i("p", { staticClass: "vjs-no-js", domProps: { innerHTML: t._s(t.mlang.noscript) } })], 2) : i("div", { staticClass: "video5control third-part-video", attrs: { id: t.videoid } }, [i("third-part-video", { attrs: { vsrc: t.attr.options.vsrc, vtype: t.attr.options.vtype, vshow: t.vshow, autoplay: t.attr.options.autoplay } })], 1)])])
            },
            staticRenderFns: []
        }
    }, function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("div", { style: { width: t.iwidth, height: t.iheight, position: "absolute" }, domProps: { innerHTML: t._s(t.videocontent) } })
            },
            staticRenderFns: []
        }
    }, function(t, e, o) {
        function i(t) { return o(s(t)) }

        function s(t) { var e = a[t]; if (!(e + 1)) throw new Error("Cannot find module '" + t + "'."); return e }
        var a = { "./en-us.js": 4, "./zh-cn.js": 5, "./zh-tw.js": 6 };
        i.keys = function() { return Object.keys(a) }, i.resolve = s, t.exports = i, i.id = 17
    }, function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = o(1),
            s = o.n(i);
        "undefined" != typeof window && window.Vue && Vue.component("xys" + s.a.name, s.a), s.a.install = function(t) { t.component("xys" + s.a.name, s.a) }, e.default = s.a
    }])
});