(function () { var l = document.domain + "", n = document.URL + ""; if (l == "dantri.com.vn") try { window._ADM_Channel = "/" + /dantri.com.vn\/([a-zA-Z\+\-]+)/.exec(n)[1] + "/" } catch (p) { } window.admTrackTimeonSite = !0; if (l.indexOf("vietnamairlines.com") != -1 || l.indexOf("googlesyndication") != -1 || l.indexOf("tiki.vn") != -1) window.admTrackTimeonSite = !1 })();
window.checkAdmdomainAds = function (l) { var n = navigator.userAgent + ""; if (n.indexOf("Firefox") != -1 || n.indexOf("coc_coc") != -1) l = l.replace("lg1.logging.admicro.vn", "contineljs.com"); return l }; function admguidWechoice() { try { var l = ADM_AdsTracking.getCookie("UserSession64"); if (l != "") try { return JSON.parse(window.atob(l)) } catch (n) { } else if (window.eventSettings) return window.eventSettings } catch (n) { } return null }
typeof AMCDNCheckSend == "undefined" && (window.AMCDNCheckSend = "send", function () {
    function l(c) { return 0 < document.cookie.length && (c_start = document.cookie.indexOf(c + "="), -1 != c_start) ? (c_start = c_start + c.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : "" } function n(c, d, e, g, k, f) {
        (new Date).getTime(); g = "" == g ? "/" : g; e = 0 == e || "" == e ? (new Date(+new Date + 864E5)).toGMTString() : (new Date(+new Date + 6E4 * e)).toGMTString();
        c = [c + "=" + escape(d)]; for (var h in e = { expires: e, path: g, domain: k }) e[h] && c.push(h + "=" + e[h]); return f && c.push("secure"), document.cookie = c.join(";"), !0
    } function p(c) {
        var d = !1, e = document.createElement("script"); document.getElementsByTagName("head")[0].appendChild(e); var g = function () {
            if (!d) {
                (new Image).src = (document.location.protocol == "https:" ? "https:" : "http:") + "//amcdn.vn/blc?lsn=" + window.__admloadPageId + "&url=" + encodeURIComponent(document.URL) + "&dg=" + window.__admloadPageIdc + "&ui=" + q; var k = !1, f = function () {
                    typeof ADM_TrackingSend ===
                    "undefined" || k ? window.setTimeout(function () { f() }, 500) : (k = !0, (new Image).src = (document.location.protocol == "https:" ? "https:" : "http:") + "//amcdn.vn/blc?dg=" + window.__admloadPageIdc + "&ui=" + q + "&url=" + encodeURIComponent("http://blockpartern" + a + document.location.pathname) + "&rd=" + Math.random())
                }; f(); d = !0
            }
        }; try { e.onerror = function (k) { d || g() }, e.onabort = function (k) { d || g() }, e.oncancel = function (k) { d || g() } } catch (k) { } try { e.src = c } catch (k) { }
    } typeof window.__admloadPageId == "undefined" && (window.__admloadPageId = function () {
        function c() {
            return Math.floor((1 +
                Math.random()) * 65536).toString(16).substring(1)
        } return c() + c() + c() + c() + c() + c() + c() + c()
    }()); window._admislocalStorage = function () { try { if (!("localStorage" in window && null !== window.localStorage)) return !1; try { localStorage.setItem("_admstorage", ""), localStorage.removeItem("_admstorage") } catch (c) { return !1 } return !0 } catch (c) { return !1 } }(); window._admislocalStorage ? (window.__admloadPageIdc = localStorage.__uidac, window.__admloadPageIdc || (localStorage.__uidac = __admloadPageId, window.__admloadPageIdc = __admloadPageId)) :
        (window.__admloadPageIdc = l("__uidac"), window.__admloadPageIdc == "" && n("__uidac", __admloadPageId, 5E6, "/", "." + document.domain)); var r = l("__uif"); r = /__uid:([0-9]+)/.exec(r); var q = ""; r && r.length >= 2 && (q = encodeURIComponent(r[1])); r = new Image; var a = document.location.hostname + ""; if (window.admTrackTimeonSite) {
            var b = "https://amcdn.vn/ftest?lsn=" + window.__admloadPageId + "&dg=" + window.__admloadPageIdc + "&ui=" + q + "&url=" + encodeURIComponent("http://1" + a + document.location.pathname) + "&rd=" + Math.random(); r.src = b; r = new Image;
            r.onerror = function () { (new Image).src = "https://amcdn.vn/blc?lsn=" + window.__admloadPageId + "&dg=" + window.__admloadPageIdc + "&ui=" + q + "&url=" + encodeURIComponent("http://errorlg1" + a + document.location.pathname) + "&rd=" + Math.random() }; r.src = "https://" + checkAdmdomainAds("lg1.logging.admicro.vn") + "/ftest?lsn=" + window.__admloadPageId + "&dg=" + window.__admloadPageIdc + "&ui=" + q + "&url=" + encodeURIComponent("http://2" + a + document.location.pathname) + "&rd=" + Math.random()
        } window.admTrackTimeonSite && p("https://media1.admicro.vn/ads_codes/ads_code_1.ads")
}());
try {
    if (typeof logposurlview == "undefined") var logposurlview = ""; if (typeof chkadmTrackingt == "undefined") var chkadmTrackingt; if (typeof __admPageloadid == "undefined") var __admPageloadid = (new Date).getTime(); (function () {
        var a = !1, b = []; if (!window.AdmonDomReady || "function" != typeof window.AdmonDomReady) {
            var c = function () { if (!document.body) return setTimeout(c, 13); for (var d = 0; d < b.length; d++)b[d](); b = [] }; window.AdmonDomReady = function (d) {
                b.push(d); if ("complete" == document.readyState) c(); else if (!a) {
                    if (document.addEventListener) {
                        var e =
                            function () { document.removeEventListener("DOMContentLoaded", e, !1); c() }; document.addEventListener("DOMContentLoaded", e, !1); window.addEventListener("load", c, !1)
                    } else if (document.attachEvent) {
                        var g = function () { "complete" === document.readyState && (document.detachEvent("onreadystatechange", g), c()) }; document.attachEvent("onreadystatechange", g); window.attachEvent("onload", c); d = !1; try { d = null == window.frameElement } catch (f) { } if (document.documentElement.doScroll && d) {
                            var k = function () {
                                if (0 != b.length) {
                                    try { document.documentElement.doScroll("left") } catch (f) {
                                        setTimeout(k,
                                            1); return
                                    } c()
                                }
                            }; k()
                        }
                    } a = !0
                }
            }
        }
    })(); function l(a, b, c) { "addEventListener" in a ? a.addEventListener(b, c) : "attachEvent" in a && a.attachEvent("on" + b, c) } if (void 0 === ADM_AdsTracking) var ADM_AdsTracking = {
        version: "1.0.0", paramFlash: {}, getFlashMovie: function (a) { return -1 != navigator.appName.indexOf("Microsoft") ? document.getElementById(a) : document[a] }, checkBrowser: function () {
            var a = !1; var b = navigator.appName; var c = navigator.userAgent + "", d, e = c.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i); null == e &&
                -1 == c.indexOf("MSIE") && -1 != c.indexOf("Trident/") ? (b = -1, null != /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(c) && (b = RegExp.$1), e = ["MSIE", b + ""]) : (e && null != (d = c.match(/version\/([\.\d]+)/i)) && (e[2] = d[1]), e = e ? [e[1], e[2]] : [b, navigator.appVersion, "-?"]); b = e; "undefined" != typeof b && null != b && 1 <= b.length && (c = (b[0] + "").toLowerCase(), b = b[1].split("."), b = parseInt(b[0]), ("firefox" == c && 22 <= b || "msie" == c && 10 <= b || "safari" == c && 5 <= b || "chrome" == c) && _admislocalStorage && (a = !0)); return a
        }, fonts: "", getFont: function (a) {
            ADM_AdsTracking.fonts =
            a
        }, lcStorage: {
            timestamp: "timestamp_", get_exprises: function (a, b, c, d) { a += ""; b = a.indexOf(b, c); c = a.length - 1; return -1 != b ? (d = a.indexOf(d, b), -1 == d && (d = c), a.substring(b, d)) : "" }, set_item: function (a, b, c) { var d = (new Date).getTime(), e = this.timestamp; d = 0 == c || "" == c ? d + 63072E7 : d + 864E5 * c; var g = "_azs" == a ? ";" : ","; c = this.get_exprises(b, e, 0, g); b = "" == c ? b + (e + d.toString() + g) : b.replace(c, e + d.toString()); localStorage.setItem(a, b) }, get_item: function (a, b) {
                b = localStorage.getItem(a); var c = (new Date).getTime(), d = this.timestamp;
                if ("" == b || null == b) return ""; endchar = "_azs" == a ? ";" : ","; a = this.get_exprises(b, d, 0, endchar); a = a.replace(d, ""); return "" == a || isNaN(parseInt(a)) || parseInt(a) < c ? "" : b.replace(d + a + endchar, "")
            }, remove_item: function (a) { localStorage.removeItem(a) }, flush: function () { localStorage.clear() }
        }, setCookie: function (a, b, c, d, e, g) {
            (new Date).getTime(); d = "/"; c = 0 == c || "" == c ? (new Date(+new Date + 63072E7)).toGMTString() : (new Date(+new Date + 864E5 * c)).toGMTString(); a = [a + "=" + escape(b)]; for (var k in c = { expires: c, path: d, domain: e }) c[k] &&
                a.push(k + "=" + c[k]); return g && a.push("secure"), document.cookie = a.join(";"), !0
        }, getCookie: function (a) { return 0 < document.cookie.length && (c_start = document.cookie.indexOf(a + "="), -1 != c_start) ? (c_start = c_start + a.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : "" }, get: function (a) {
            var b = "", c = ""; if ("__ui" == a || "__uid" == a || "__create" == a) c = a, a = "__uif"; if (_admislocalStorage) {
                if ("__R" == a || "__RC" == a || "__uif" == a) b = ADM_AdsTracking.getCookie(a);
                if (null == b || "" == b) b = ADM_AdsTracking.lcStorage.get_item(a), null != b && "" != b && ADM_AdsTracking.setCookie(a, b, "")
            } else b = ADM_AdsTracking.getCookie(a); if ("" != c && "" != b) { a = b.split("|"); for (var d = 0, e = a.length; d < e; d++)if (-1 != a[d].indexOf(c + ":")) { b = a[d].replace(c + ":", ""); break } } return b
        }, set: function (a, b, c) {
            if (_admislocalStorage) {
                if (ADM_AdsTracking.lcStorage.set_item(a, b, c), "__R" == a || "__RC" == a || "__uif" == a) "__R" == a && "undefined" != typeof ADS_Location && ADS_Location != b && "" != b && "0" != b && (ADS_Location = parseInt(b)), "__RC" ==
                    a && "undefined" != typeof ADS_City && ADS_City != b && "" != b && "0" != b && (ADS_City = parseInt(b)), ADM_AdsTracking.setCookie(a, b, c)
            } else ADM_AdsTracking.setCookie(a, b, c)
        }, getParam: function () {
            if (ADM_AdsTracking.checkBrowser()) {
                var a = ADM_AdsTracking.get("__create") + "", b = ADM_AdsTracking.get("__uid") + ""; 30 < b.length && (b = ""); "" == b && (a = ""); 11 < a.length && "" != b && (a = Math.floor((new Date).getTime() / 1E3)); var c = ""; window.__admloadPageIdc && (c = "&dg=" + window.__admloadPageIdc); return "&ce=1&lc=" + ADM_AdsTracking.get("__RC") + "&cr=" +
                    a + "&ui=" + b + c
            } return ""
        }, getInfoParam: function () { if (ADM_AdsTracking.checkBrowser()) return ""; var a = ADM_AdsTracking.get("__uid"), b = ADM_AdsTracking.get("__create"); return "&ce=1&guie=1&__uid=" + a + "&__create=" + b }, flashcheck: function (a) { for (var b in a) ADM_AdsTracking.check(b, a[b], !0) }, expireAllCookies: function (a, b) { var c = (new Date(0)).toUTCString(); document.cookie = a + "=; expires=" + c; for (var d = 0, e = b.length; d < e; d++)document.cookie = a + "=; path=" + b[d] + "; expires=" + c }, expireActiveCookies: function (a) {
            for (var b = location.pathname.replace(/\/$/,
                "").split("/"), c = [], d = 0, e = b.length, g; d < e; d++)g = b.slice(0, d + 1).join("/"), g = g.replace(/\.([\w]+)/gi, ""), "" != g && (c.push(g), c.push(g + "/")); 0 < c.length && ADM_AdsTracking.expireAllCookies(a, c)
        }, check: function (a, b) {
            switch (a) {
                case "__ui": case "__uid": case "__create": if (2 == arguments.length && "__uid" == a || "__create" == a && "" != b) { ADM_AdsTracking.paramFlash[a] = b; var c = ADM_AdsTracking.getFlashMovie("_admFlck"); c && c.setck && c.setck(ADM_AdsTracking.paramFlash) } var d = ADM_AdsTracking.get("__uif") + ""; if ("" == d) d = a + ":" + b; else {
                    c =
                    a + ":" + b; d = d.split("|"); for (var e = [], g = 0, k = d.length; g < k; g++)-1 == d[g].indexOf(a + ":") && e.push(d[g]); e.push(c); d = e.join("|")
                } ADM_AdsTracking.set("__uif", d, 10); break; default: d = ADM_AdsTracking.get(a), 2 == arguments.length && "" != b && "0" != b && "-1" != b && (ADM_AdsTracking.paramFlash[a] = b, (c = ADM_AdsTracking.getFlashMovie("_admFlck")) && c.setck && c.setck(ADM_AdsTracking.paramFlash)), d != b && ADM_AdsTracking.set(a, b, "")
            }
        }
    }; if (typeof wPrototype == "undefined") var wPrototype = {
        wdHeight: function () {
            var a, b = document; "number" == typeof window.innerWidth ?
                a = window.innerHeight : b.documentElement && b.documentElement.clientHeight ? a = b.documentElement.clientHeight : b.body && b.body.clientHeight && (a = b.body.clientHeight); return a
        }, wdWidth: function () { var a, b = document; "number" == typeof window.innerWidth ? a = window.innerWidth : b.documentElement && b.documentElement.clientWidth ? a = b.documentElement.clientWidth : b.body && b.body.clientWidth && (a = b.body.clientWidth); return a }, getElementTop: function (a) {
            var b = document; if (b.getElementById) var c = b.getElementById(a); else b.all && (c =
                b.all[a]); if (null != c) { yPos = c.offsetTop; for (tempEl = c.offsetParent; null != tempEl;)yPos += tempEl.offsetTop, tempEl = tempEl.offsetParent; return yPos } return 150
        }, getElementWidth: function (a) { return document.getElementById(a).clientWidth }, getElementLeft: function (a) { var b, c = document; c.getElementById ? b = c.getElementById(a) : c.all && (b = c.all[a]); a = b.offsetLeft; for (b = b.offsetParent; null != b;)a += b.offsetLeft, b = b.offsetParent; return a }, scrollTop: function () {
            var a = document, b = a.body.scrollTop; 0 == b && (b = window.pageYOffset ?
                window.pageYOffset : a.body.parentElement ? a.body.parentElement.scrollTop : 0); return b
        }, scrollLeft: function () { var a = document, b = window.pageXOffset ? window.pageXOffset : 0, c = a.documentElement ? a.documentElement.scrollLeft : 0; a = a.body ? a.body.scrollLeft : 0; b = b ? b : 0; c && (!b || b > c) && (b = c); return a && (!b || b > a) ? a : b }, bdWidth: function () {
            var a = document; return bodyWidth = Math.max(Math.max(a.body.scrollWidth, a.documentElement.scrollWidth), Math.max(a.body.offsetWidth, a.documentElement.offsetWidth), Math.max(a.body.clientWidth,
                a.documentElement.clientWidth))
        }, bdHeight: function () { var a = document; return Math.max(Math.max(a.body.scrollHeight, a.documentElement.scrollHeight), Math.max(a.body.offsetHeight, a.documentElement.offsetHeight), Math.max(a.body.clientHeight, a.documentElement.clientHeight)) }
    }; var _ADMFlashDetect = new function () {
        var a = this; a.installed = !1; a.raw = ""; a.major = -1; a.minor = -1; a.revision = -1; a.revisionStr = ""; var b = [{ name: "ShockwaveFlash.ShockwaveFlash.7", version: function (d) { return c(d) } }, {
            name: "ShockwaveFlash.ShockwaveFlash.6",
            version: function (d) { var e = "6.0.r21"; try { d.AllowScriptAccess = "always", e = c(d) } catch (g) { } return e }
        }, { name: "ShockwaveFlash.ShockwaveFlash", version: function (d) { return c(d) } }], c = function (d) { var e = -1; try { e = d.GetVariable("$version") } catch (g) { } return e }; a.majorAtLeast = function (d) { return a.major >= d }; a.minorAtLeast = function (d) { return a.minor >= d }; a.revisionAtLeast = function (d) { return a.revision >= d }; a.versionAtLeast = function (d) {
            var e = [a.major, a.minor, a.revision], g = Math.min(e.length, arguments.length); for (i = 0; i <
                g; i++)if (e[i] >= arguments[i]) { if (!(i + 1 < g && e[i] == arguments[i])) return !0 } else return !1
        }; a._ADMFlashDetect = function () {
            if (navigator.plugins && navigator.plugins.length > 0) {
                var d = navigator.mimeTypes; if (d && d["application/x-shockwave-flash"] && d["application/x-shockwave-flash"].enabledPlugin && d["application/x-shockwave-flash"].enabledPlugin.description) {
                    var e = d = d["application/x-shockwave-flash"].enabledPlugin.description; d = e.split(/ +/); var g = d[2].split(/\./); d = d[3]; var k = parseInt(g[0], 10); var f = parseInt(g[1],
                        10); var h = d; var t = parseInt(d.replace(/[a-zA-Z]/g, ""), 10) || a.revision; a.raw = e; a.major = k; a.minor = f; a.revisionStr = h; a.revision = t; a.installed = !0
                }
            } else if (navigator.appVersion.indexOf("Mac") == -1 && window.execScript) for (d = -1, g = 0; g < b.length && d == -1; g++) {
                e = -1; try { e = new ActiveXObject(b[g].name) } catch (m) { e = { activeXError: !0 } } e.activeXError || (a.installed = !0, d = b[g].version(e), d != -1 && (e = d, h = e.split(","), k = parseInt(h[0].split(" ")[1], 10), f = parseInt(h[1], 10), t = parseInt(h[2], 10), h = h[2], a.raw = e.replace("Shockwave Flash ",
                    ""), a.major = k, a.minor = f, a.revision = t, a.revisionStr = h))
            }
        }()
    }, paramBrowser = {
        screen_Resolution: screen.width + "x" + screen.height, screen_Color: screen.colorDepth, hostname: document.domain.replace("www.", ""), cookieEnabled: navigator.cookieEnabled ? 1 : 0, javaEnabled: navigator.javaEnabled() ? 1 : 0, referrer: document.referrer, urlLocation: document.URL, url: function () { var a = window.location != window.parent.location ? document.referrer : document.location + "", b = this.hostname; return b == "" ? a : a.substring(a.indexOf(b) + b.length, a.length) },
        flashVersion: function () { return _ADMFlashDetect.major + "." + _ADMFlashDetect.minor + "." + _ADMFlashDetect.revisionStr }, zenURL: { encode: function (a) { return encodeURIComponent(a) }, decode: function (a) { return decodeURIComponent(a.replace(/\+/g, " ")) } }
    }, _ADMBrowser = {
        Version: function () {
            var a = 999; try {
                var b = navigator.userAgent + ""; navigator.appVersion.indexOf("MSIE") != -1 && (a = parseFloat(navigator.appVersion.split("MSIE")[1])); if (b.indexOf("Trident") != -1) {
                    var c = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(b); c && c.length >=
                        2 && (a = parseFloat(c[1]))
                }
            } catch (d) { } return a
        }
    }, _admBrV = _ADMBrowser.Version(); function n() { __ADMisActive = __ADMwdVis() ? 1 : 0; var a = Math.floor((new Date).getTime() / 1E3); if (__ADMisActive == 1 || a - __ADMTimeTk >= 120) __ADMTimeTk = a, p("p"); chkadmTrackingt = _admBrV < 999 ? window.setTimeout(function () { window.admTrackTimeonSite && n() }, 2E4) : window.setTimeout(function () { window.admTrackTimeonSite && n() }, 6E4) } var __ADMwdVis = function () {
        var a, b = {
            hidden: "visibilitychange", webkitHidden: "webkitvisibilitychange", mozHidden: "mozvisibilitychange",
            msHidden: "msvisibilitychange"
        }; for (a in b) if (a in document) { var c = b[a]; break } return function (d) { d && document.addEventListener(c, d); return !document[a] }
    }(); function p(a) {
        try { if ((document.domain + "").indexOf("vib.com.vn") != -1 && a == "p") return !1 } catch (f) { } window._AdmGetGa = function () {
            var f = ""; try {
                var h = window.performance || window.webkitPerformance; if (h = h && h.timing) {
                    var t = h.navigationStart; f = ";" + [h.loadEventStart - t, h.domainLookupEnd - h.domainLookupStart, h.connectEnd - h.connectStart, h.responseStart - h.requestStart,
                    h.responseEnd - h.responseStart, h.fetchStart - t, h.domInteractive - t, h.domContentLoadedEventStart - t].join(";")
                } return ";" + ADM_AdsTracking.getCookie("_ga") + f
            } catch (m) { } return ""
        }; var b = "", c = function () {
            var f = "", h = {}, t = ""; try { f = window.decodeURIComponent(window._ADM_Channel || "") } catch (v) { } try { var m = ADM_AdsTracking.getCookie("__adm_upl"); if (m && m != "") { var w = JSON.parse(window.atob(m)); h.prfng = w } } catch (v) { } try { var u = ADM_AdsTracking.getCookie("dtdz"); u && u != "" && (h.profileid = u) } catch (v) { } try {
                var x = admguidWechoice();
                x && (h.wuid = x)
            } catch (v) { } try { var y = ADM_AdsTracking.getCookie("_ck_user"); m = {}; if (y && y.indexOf("{") != -1) { try { m = JSON.parse(y) } catch (v) { } f != "" && (h.channel = f); f = 0; if (typeof m.expiredate != "undefined") try { f = (new Date(m.expiredate)).getTime() - (new Date).getTime() > 0 ? 1 : 0 } catch (v) { } h.isvip = f; typeof m.id != "undefined" && (h.uid = m.id, t = window.btoa(JSON.stringify(h))) } else typeof h.prfng != "undefined" && (t = window.btoa(JSON.stringify(h))) } catch (v) { } return t
        }() || ""; b = "https://" + checkAdmdomainAds("lg1.logging.admicro.vn") +
            "/_tracking1.gif?dg=" + __admloadPageIdc; b += "&fl=" + paramBrowser.flashVersion(); b += "&je=" + paramBrowser.javaEnabled; b += "&sr=" + paramBrowser.screen_Resolution; b += "&sc=" + paramBrowser.screen_Color; b += "&hn=" + paramBrowser.hostname; if (c != "") b += "&xtr=" + encodeURIComponent(c); else if (c = admguidWechoice()) try { b += "&xtr=" + encodeURIComponent(window.btoa(JSON.stringify({ wuid: c }))) } catch (f) { } b = "undefined" != typeof _Analytics_Channel && "" != _Analytics_Channel ? b + ("&cat=" + encodeURIComponent(decodeURIComponent(_Analytics_Channel))) :
                "undefined" != typeof _ADM_Channel && "" != _ADM_Channel ? b + ("&cat=" + encodeURIComponent(decodeURIComponent(_ADM_Channel))) : b + "&cat="; window.__ADMTrackingSendUrl = b + "&g=0"; b = window.__ADMTrackingSendUrl + logposurlview + "&i=" + encodeURIComponent(a + ";" + __admPageloadid + ";" + window.__ADMScrollcounter + ";" + window.__ADMScrollEnd + ";" + __ADMisActive + ";" + __ADMMouse + ";" + __ADMTouch + ";" + (wPrototype.wdWidth() + "x" + wPrototype.wdHeight()) + ";" + window.__ifr + ";" + (typeof ADS_CHECKER == "undefined" ? 0 : 1) + ";" + __admloadPageId + ";" + __admloadPageIdc +
                    _AdmGetGa()) + "&rdm=" + Math.random(); b += "&p=" + paramBrowser.zenURL.encode(paramBrowser.url()); b += "&r=" + (paramBrowser.referrer == "" ? "" : paramBrowser.zenURL.encode(paramBrowser.referrer)); c = navigator.userAgent + ""; var d = !1; if (a == "s") {
                        try { if (c.indexOf("Macintosh") != -1 || c.indexOf("Windows") != -1 || c.indexOf("Firefox") != -1) d = !0 } catch (f) { } if (d === !0) {
                            var e = document.createElement("iframe"); e.src = b + ADM_AdsTracking.getParam(); e.style.width = "12px"; e.style.height = "12px"; e.style.visibility = "hidden"; e.style.position = "absolute";
                            e.style.left = "0px"; e.style.bottom = "0px"; e.style.border = "none"; try { window.__ADMPolyNonce && (e.setAttribute("script-src", "self"), e.setAttribute("nonce", "sclotusinnline")) } catch (f) { } e.target = "admTrackmain"; e.name = "admIframeTracking"; e.id = "admIframeTracking"; AdmonDomReady(function () {
                                try {
                                    var f = document.createElement("div"); f.style.position = "absolute"; f.style.bottom = "0"; f.style.left = "0"; f.style.width = "1px"; f.style.height = "1px"; f.style.overflow = "hidden"; f.style.visibility = "hidden"; document.body.appendChild(f);
                                    f.appendChild(e)
                                } catch (h) { }
                            }); a = function (f) { if (f.origin.indexOf("logging.admicro.vn") != -1 && (f = f.data, typeof f == "object")) try { f[0] == "__CRT" && (f[0] = "__create"), f[0] == "__UF" && (f[0] = "__ui"), f[0] != "__C" && ADM_AdsTracking.check(f[0], f[1], "", "/") } catch (h) { } }; window.addEventListener ? window.addEventListener("message", a, !1) : window.attachEvent("onmessage", a, !1)
                        } else e = document.createElement("script"), e.type = "text/javascript", e.async = !0, e.src = b, a = document.getElementsByTagName("script")[0], a.parentNode.insertBefore(e,
                            a)
                    } else { var g = new Image; g.src = b + ADM_AdsTracking.getParam(); if (a == "v" && (g.onerror = function () { try { (new Image).src = (g.src + "").replace("lg1.logging.admicro.vn", "amcdn.vn") } catch (f) { } }, (document.domain + "").indexOf("wechoice.vn") != -1)) { var k = b + ADM_AdsTracking.getParam(); if (k.indexOf("&xtr=") == -1 && (c = admguidWechoice())) try { k += "&xtr=" + encodeURIComponent(window.btoa(JSON.stringify({ wuid: c }))), k = k.replace("v;", "p;"), setTimeout(function () { (new Image).src = k }, 1E3) } catch (f) { } } }
    } typeof window.admcheckPushstate ==
        "undefined" && (window.admcheckPushstate = function () { window.setTimeout(function () { try { if (document.domain + "" == "tiki.vn") { var a = document.URL, b = document.location.pathname, c = function () { var d = location.pathname; if (b != d) { paramBrowser.referrer = a; a = document.URL; b = d; try { p("v") } catch (e) { } } setTimeout(function () { c() }, 1E3) }; c() } } catch (d) { } }, 1E3) }, window.admcheckPushstate()); function r() {
            try { window.admTrackingParam.url = window.admTrackingParam.url || document.URL } catch (b) { } if (typeof __ADM_TrackingSend != "undefined" && __ADM_TrackingSend ===
                !0) return !1; ADM_AdsTracking.checkBrowser(); window._AdmGetGa = function () { return "" }; window._AdmGetGa = function () { var b = ""; try { var c = window.performance || window.webkitPerformance; if (c = c && c.timing) { var d = c.navigationStart; b = ";" + [c.loadEventStart - d, c.domainLookupEnd - c.domainLookupStart, c.connectEnd - c.connectStart, c.responseStart - c.requestStart, c.responseEnd - c.responseStart, c.fetchStart - d, c.domInteractive - d, c.domContentLoadedEventStart - d].join(";") } return ";" + ADM_AdsTracking.getCookie("_ga") + b } catch (e) { } return "" };
            try { var a = window.self !== window.top } catch (b) { a = !0 } window.__ifr = a ? 1 : 0; window.__ADM_TrackingSend = !0; window.__ADMScrollcounter = 0; window.__ADMScrollEnd = 0; window.__ADMTouch = 0; window.__ADMMouse = 0; window.__ADMisActive = 0; window.__ADMTimeTk = Math.floor((new Date).getTime() / 1E3); try { __ADMwdVis() && (window.__ADMisActive = 1) } catch (b) { } p("s"); p("v"); typeof window.admTrackingParam.ispopup == "undefined" && (l(window, "scroll", function () {
                window.__ADMScrollcounter += 1; wPrototype.bdHeight() - (wPrototype.scrollTop() + wPrototype.wdHeight() +
                    100) < 0 && (window.__ADMScrollEnd = 1)
            }), l(window, "blur", function () { __ADMisActive = 0 }), l(window, "focus", function () { __ADMisActive = 1 }), "ontouchstart" in window && l(document, "touchmove", function (b) { __ADMTouch++ }), l(document, "mousemove", function (b) { __ADMMouse++ }), window.setTimeout(function () {
                var b, c = "", d = { hidden: "visibilitychange", webkitHidden: "webkitvisibilitychange", mozHidden: "mozvisibilitychange", msHidden: "msvisibilitychange" }; for (b in d) if (b in document) { var e = d[b]; c = b; break } document.addEventListener(e, function () {
                    __ADMisActive =
                    document[c] ? 0 : 1; p("p")
                })
            }, 5E3), chkadmTrackingt = window.setTimeout(function () { window.admTrackTimeonSite && n() }, 2E4), "beforeunload" in window || "onbeforeunload" in window) && (navigator.userAgent.indexOf("Firefox") != -1 ? l(window, "unload", function () { p("e") }) : l(window, "beforeunload", function () { p("e") }))
        } var ADM_PPTKSend = ADM_PPTKSend || {}; window.admTrackingParam = window.admTrackingParam || {}; ADM_PPTKSend.trackingClosePopup = function () {
            try {
                paramBrowser.referrer = paramBrowser.urlLocation, paramBrowser.urlLocation = document.URL,
                __admPageloadid = window.admTrackingParam.pageloadid, __admloadPageId = window.admTrackingParam.__admloadPageId, __AdmsendRandom = window.admTrackingParam.__AdmsendRandom
            } catch (a) { } try { AdmanlaticPopup.close() } catch (a) { }
        }; ADM_PPTKSend.trackingPopup = function () {
            try {
                paramBrowser.referrer = paramBrowser.urlLocation, paramBrowser.urlLocation = document.URL, window.admTrackingParam.pageloadid = window.admTrackingParam.pageloadid || __admPageloadid, window.admTrackingParam.__admloadPageId = window.admTrackingParam.__admloadPageId ||
                    __admloadPageId, typeof window.admTrackingParam.__AdmsendRandom == "undefined" && (window.admTrackingParam.__AdmsendRandom = "&lsn=" + window.admTrackingParam.pageloadid + ADM_AdsTracking.getParam()), window.admTrackingParam.ispopup = !0, window.__ADM_TrackingSend = !1, window.__admloadPageId = function () { function a() { return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1) } return a() + a() + a() + a() + a() + a() + a() + a() }(), __admPageloadid = (new Date).getTime(), window.__AdmsendRandom = "&lsn=" + __admPageloadid + ADM_AdsTracking.getParam(),
                (new Image).src = "https://" + checkAdmdomainAds("lg1.logging.admicro.vn") + "/ftest?dg=" + __admloadPageIdc + ADM_AdsTracking.getParam() + "&url=" + encodeURIComponent("http://popup" + document.location.hostname + document.location.pathname) + "&rd=" + Math.random(), r()
            } catch (a) { } try { AdmanlaticPopup.open() } catch (a) { }
        }; r(); function q(a, b) {
            var c = document.createElement("script"); c.type = "text/javascript"; c.src = a; 2 <= arguments.length && (c.onload = b, c.onreadystatechange = function () { 4 != c.readyState && "complete" != c.readyState || b() });
            document.getElementsByTagName("head")[0].appendChild(c)
        } if ("undefined" == typeof logposurlviewsend) {
            try { var ptc = document.location.protocol == "https:" ? "https:" : "http:", dmnnews = document.domain; if (dmnnews.indexOf("googlesyndication") == -1) try { var ele = document.querySelector('[src*="/cpa/core/tp2_core.min.js"]'); ele || q(ptc + "//static.contineljs.com/core/lgnews.js") } catch (a) { } } catch (a) { } window.logposurlviewsend = "sendnews"; AdmonDomReady(function () {
                try {
                    var a = 0, b = window.innerHeight, c = -1, d = 0, e = []; e = document.querySelectorAll("[data-check-position]");
                    d = e.length; for (var g = [], k = 0; k < d; k++)g.push(e[k].offsetTop); window.addEventListener("scroll", f); function f() { c != -1 && clearTimeout(c); c = window.setTimeout(function () { t() }, 1E3) } function h() { var m = document.body.scrollTop; 0 == m && (m = window.pageYOffset ? window.pageYOffset : document.body.parentElement ? document.body.parentElement.scrollTop : 0); return m } function t() {
                        he = h() + b; if (he > a) {
                            a = he; for (var m = [], w = [], u = 0; u < d; u++)a > g[u] && m.push(u); for (u = 0; u < m.length; u++) {
                                var x = e[u].getAttributeNode("data-check-position").value;
                                w.push(x + ":" + g[u])
                            } w = encodeURIComponent(w); logposurlview = "&sl=" + a + "&si=" + w; if (m.length == d) {
                                if (typeof window.__ADMTrackingSendUrl != "undefined" && window.__ADMTrackingSendUrl != "") {
                                    img = new Image; m = window.__ADMTrackingSendUrl; if (m.indexOf("&xtr=") == -1 && window.eventSettings) try { m += "&xtr=" + encodeURIComponent(window.btoa(JSON.stringify({ wuid: window.eventSettings }))) } catch (y) { } m += "&p=" + paramBrowser.zenURL.encode(paramBrowser.url()); m += "&r=" + (paramBrowser.referrer == "" ? "" : paramBrowser.zenURL.encode(paramBrowser.referrer));
                                    img.src = m + logposurlview + "&i=" + encodeURIComponent("p;" + __admPageloadid + ";" + window.__ADMScrollcounter + ";" + window.__ADMScrollEnd + ";" + __ADMisActive + ";" + __ADMMouse + ";" + __ADMTouch + ";" + (wPrototype.wdWidth() + "x" + wPrototype.wdHeight()) + ";" + window.__ifr + ";" + (typeof ADS_CHECKER == "undefined" ? 0 : 1) + ";" + __admloadPageId + ";" + __admloadPageIdc) + "&rdm=" + Math.random() + ADM_AdsTracking.getParam()
                                } chkadmTrackingt || clearTimeout(chkadmTrackingt); chkadmTrackingt = window.setTimeout(function () { n() }, 2E4)
                            }
                        }
                    }
                } catch (f) { }
            })
        }
} catch (l) {
    (function () {
        var n =
            0 < document.cookie.length && (c_start = document.cookie.indexOf("__uif="), -1 != c_start) ? (c_start = c_start + 5 + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""; var p = /__uid:([0-9]+)/.exec(n); n = ""; p && p.length >= 2 && (n = encodeURIComponent(p[1])); p = document.location.protocol == "https:" ? "https:" : "http:"; (new Image).src = p + "//amcdn.vn/blc?lsn=" + window.__admloadPageId + "&dg=" + window.__admloadPageIdc + "&ui=" + n + "&url=" + encodeURIComponent("http://error3rdcdn" +
                document.domain + document.location.pathname) + "&rd=" + Math.random()
    })()
}
(function () {
    if (document.domain + "" == "tiki.vn") try { var l = ADM_AdsTracking.getCookie("tiki_client_id"), n = ADM_AdsTracking.get("__uid"), p = ADM_AdsTracking.getCookie("__utm"), r = localStorage.__uidac || "", q = localStorage.productRecentlyListId || "", a = [], b = []; if (q) { a = JSON.parse(q); q = 0; for (var c = a.length; q < c; q++)b.push(a[q].id); var d = b.join(","); d != "" && ((new Image).src = "https://lio.aiservice.vn/lg/QfiEiGq269?g=" + n + "&t=100&ls=" + d + "&tui=&u=" + encodeURIComponent(p) + "&ts=" + l + "&dmg=" + r) } } catch (e) { } if (!window.sendnandatk) try {
        window.sendnandatk =
        !0, window.admTrackTimeonSite && ((new Image).src = "//lg.nanda.vn/mapid?src=admicro&dguid=" + __admloadPageIdc + "&3guid=" + ADM_AdsTracking.get("__uid"))
    } catch (e) { }
})();