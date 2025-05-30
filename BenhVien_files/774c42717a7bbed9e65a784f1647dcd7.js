/**
 * Swipebox - A touchable jQuery lightbox
 *
 * @author Constantin Saguin - @brutaldesign
 * @author Arno Welzel
 * @link  http://csag.co
 * @github http://github.com/brutaldesign/swipebox
 * @github https://github.com/arnowelzel/swipebox
 * @version 1.2.4
 * @license MIT License
*/
(function(e, t, n, r) {
    n.swipebox = function(i, s) {
        var o = {
                useCSS: true,
                initialIndexOnArray: 0,
                hideBarsDelay: 3e3,
                videoMaxWidth: 1140,
                vimeoColor: "CCCCCC",
                beforeOpen: null,
                afterClose: null
            },
            u = this,
            a = [],
            i = i,
            f = i.selector,
            l = n(f),
            c = t.createTouch !== r || "ontouchstart" in e || "onmsgesturechange" in e || navigator.msMaxTouchPoints,
            h = !!e.SVGSVGElement,
            p = e.innerWidth ? e.innerWidth : n(e).width(),
            d = e.innerHeight ? e.innerHeight : n(e).height(),
            v = '<div id="swipebox-overlay">				<div id="swipebox-slider"></div>				<div id="swipebox-caption"></div>				<div id="swipebox-action">					<a id="swipebox-close"></a>					<a id="swipebox-prev"></a>					<a id="swipebox-next"></a>				</div>		</div>',
            m = 0,
            g = 0;
        u.settings = {};
        u.init = function() {
            u.settings = n.extend({}, o, s);
            if (n.isArray(i)) {
                a = i;
                y.target = n(e);
                y.init(u.settings.initialIndexOnArray)
            } else {
                l.click(function(e) {
                    u.refresh();
                    a = [];
                    var t, r, i;
                    if (!i) {
                        r = "rel";
                        i = n(this).attr(r)
                    }
                    if (i && i !== "" && i !== "nofollow") {
                        $elem = l.filter("[" + r + '="' + i + '"]')
                    } else {
                        $elem = n(f)
                    }
                    $elem.each(function() {
                        var e = null,
                            t = null;
                        if (n(this).attr("title")) e = n(this).attr("title");
                        else if (n(this).parents().eq(1).children("img").attr("alt")) e = n(this).parents().eq(1).children("img").attr("alt");
                        if (n(this).attr("href")) t = n(this).attr("href");
                        a.push({
                            href: t,
                            title: e
                        })
                    });
                    t = $elem.index(n(this));
                    e.preventDefault();
                    e.stopPropagation();
                    y.target = n(e.target);
                    y.init(t)
                })
            }
        };
        u.refresh = function() {
            if (!n.isArray(i)) {
                y.destroy();
                $elem = n(f);
                y.actions()
            }
        };
        var y = {
            init: function(e) {
                if (u.settings.beforeOpen) u.settings.beforeOpen();
                this.target.trigger("swipebox-start");
                n.swipebox.isOpen = true;
                this.build();
                this.openSlide(e);
                this.openMedia(e);
                this.preloadMedia(e + 1);
                this.preloadMedia(e - 1)
            },
            build: function() {
                var e = this;
                n("body").append(v);
                if (e.doCssTrans()) {
                    n("#swipebox-slider").css({
                        "-webkit-transition": "left 0.4s ease",
                        "-moz-transition": "left 0.4s ease",
                        "-o-transition": "left 0.4s ease",
                        "-khtml-transition": "left 0.4s ease",
                        transition: "left 0.4s ease"
                    });
                    n("#swipebox-overlay").css({
                        "-webkit-transition": "opacity 1s ease",
                        "-moz-transition": "opacity 1s ease",
                        "-o-transition": "opacity 1s ease",
                        "-khtml-transition": "opacity 1s ease",
                        transition: "opacity 1s ease"
                    });
                    n("#swipebox-action, #swipebox-caption").css({
                        "-webkit-transition": "0.5s",
                        "-moz-transition": "0.5s",
                        "-o-transition": "0.5s",
                        "-khtml-transition": "0.5s",
                        transition: "0.5s"
                    })
                }
                if (h) {
                    var t = n("#swipebox-action #swipebox-close").css("background-image");
                    t = t.replace("png", "svg");
                    n("#swipebox-action #swipebox-prev,#swipebox-action #swipebox-next,#swipebox-action #swipebox-close").css({
                        "background-image": t
                    })
                }
                n.each(a, function() {
                    n("#swipebox-slider").append('<div class="slide"></div>')
                });
                e.setDim();
                e.actions();
                e.keyboard();
                e.gesture();
                e.animBars();
                e.resize()
            },
            setDim: function() {
                var t, r, i = {};
                if ("onorientationchange" in e) {
                    e.addEventListener("orientationchange", function() {
                        if (e.orientation == 0) {
                            t = p;
                            r = d
                        } else if (e.orientation == 90 || e.orientation == -90) {
                            t = d;
                            r = p
                        }
                    }, false)
                } else {
                    t = e.innerWidth ? e.innerWidth : n(e).width();
                    r = e.innerHeight ? e.innerHeight : n(e).height()
                }
                i = {
                    width: t,
                    height: r
                };
                n("#swipebox-overlay").css(i)
            },
            resize: function() {
                var t = this;
                n(e).resize(function() {
                    t.setDim()
                }).resize()
            },
            supportTransition: function() {
                var e = "transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");
                for (var n = 0; n < e.length; n++) {
                    if (t.createElement("div").style[e[n]] !== r) {
                        return e[n]
                    }
                }
                return false
            },
            doCssTrans: function() {
                if (u.settings.useCSS && this.supportTransition()) {
                    return true
                }
            },
            gesture: function() {
                if (c) {
                    var e = this,
                        t = null,
                        r = 10,
                        i = {},
                        s = {};
                    var o = n("#swipebox-caption, #swipebox-action");
                    o.addClass("visible-bars");
                    e.setTimeout();
                    n("#swipebox-slider").bind("touchstart", function(e) {
                        n(this).addClass("touching");
                        s = e.originalEvent.targetTouches[0];
                        i.pageX = e.originalEvent.targetTouches[0].pageX;
                        n(".touching").bind("touchmove", function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            s = e.originalEvent.targetTouches[0]
                        });
                        return false
                    }).bind("touchend", function(u) {
                        u.preventDefault();
                        u.stopPropagation();
                        t = s.pageX - i.pageX;
                        if (t >= r) {
                            e.getPrev()
                        } else if (t <= -r) {
                            e.getNext()
                        } else {
                            if (!o.hasClass("visible-bars")) {
                                e.showBars();
                                e.setTimeout()
                            } else {
                                e.clearTimeout();
                                e.hideBars()
                            }
                        }
                        n(".touching").off("touchmove").removeClass("touching")
                    })
                }
            },
            setTimeout: function() {
                if (u.settings.hideBarsDelay > 0) {
                    var t = this;
                    t.clearTimeout();
                    t.timeout = e.setTimeout(function() {
                        t.hideBars()
                    }, u.settings.hideBarsDelay)
                }
            },
            clearTimeout: function() {
                e.clearTimeout(this.timeout);
                this.timeout = null
            },
            showBars: function() {
                var e = n("#swipebox-caption, #swipebox-action");
                if (this.doCssTrans()) {
                    e.addClass("visible-bars")
                } else {
                    n("#swipebox-caption").animate({
                        top: 0
                    }, 500);
                    n("#swipebox-action").animate({
                        bottom: 0
                    }, 500);
                    setTimeout(function() {
                        e.addClass("visible-bars")
                    }, 1e3)
                }
            },
            hideBars: function() {
                var e = n("#swipebox-caption, #swipebox-action");
                if (this.doCssTrans()) {
                    e.removeClass("visible-bars")
                } else {
                    n("#swipebox-caption").animate({
                        top: "-50px"
                    }, 500);
                    n("#swipebox-action").animate({
                        bottom: "-50px"
                    }, 500);
                    setTimeout(function() {
                        e.removeClass("visible-bars")
                    }, 1e3)
                }
            },
            animBars: function() {
                var e = this;
                var t = n("#swipebox-caption, #swipebox-action");
                t.addClass("visible-bars");
                e.setTimeout();
                if (!c) {
                    n("#swipebox-slider").click(function(n) {
                        if (!t.hasClass("visible-bars")) {
                            e.showBars();
                            e.setTimeout()
                        } else {
                            e.clearTimeout();
                            e.hideBars()
                        }
                    })
                }
                n("#swipebox-action").hover(function() {
                    e.showBars();
                    t.addClass("force-visible-bars");
                    e.clearTimeout()
                }, function() {
                    t.removeClass("force-visible-bars");
                    e.setTimeout()
                })
            },
            keyboard: function() {
                var t = this;
                n(e).bind("keyup", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (e.keyCode == 37) {
                        t.getPrev()
                    } else if (e.keyCode == 39) {
                        t.getNext()
                    } else if (e.keyCode == 27) {
                        t.closeSlide()
                    }
                })
            },
            actions: function() {
                var e = this;
                if (a.length < 2) {
                    n("#swipebox-prev, #swipebox-next").hide()
                } else {
                    n("#swipebox-prev").bind("click", function(t) {
                        t.preventDefault();
                        t.stopPropagation();
                        e.getPrev();
                        e.setTimeout()
                    });
                    n("#swipebox-next").bind("click", function(t) {
                        t.preventDefault();
                        t.stopPropagation();
                        e.getNext();
                        e.setTimeout()
                    })
                }
                n("#swipebox-close").bind("click", function(t) {
                    e.closeSlide()
                })
            },
            setSlide: function(e, t) {
                t = t || false;
                var r = n("#swipebox-slider");
                if (this.doCssTrans()) {
                    r.css({
                        left: -e * 100 + "%"
                    })
                } else {
                    r.animate({
                        left: -e * 100 + "%"
                    })
                }
                n("#swipebox-slider .slide").removeClass("current");
                n("#swipebox-slider .slide").eq(e).addClass("current");
                this.setTitle(e);
                if (t) {
                    r.fadeIn()
                }
                n("#swipebox-prev, #swipebox-next").removeClass("disabled");
                if (e == 0) {
                    n("#swipebox-prev").addClass("disabled")
                } else if (e == a.length - 1) {
                    n("#swipebox-next").addClass("disabled")
                }
            },
            openSlide: function(t) {
                if (m == 0 && g == 0) {
                    m = n(e).scrollLeft();
                    g = n(e).scrollTop()
                }
                n(e).scrollLeft(0);
                n(e).scrollTop(0);
                n("html").addClass("swipebox");
                n(e).trigger("resize");
                this.setSlide(t, true)
            },
            preloadMedia: function(e) {
                var t = this,
                    n = null;
                if (a[e] !== r) n = a[e].href;
                if (!t.isVideo(n)) {
                    setTimeout(function() {
                        t.openMedia(e)
                    }, 1e3)
                } else {
                    t.openMedia(e)
                }
            },
            openMedia: function(e) {
                var t = this,
                    i = null;
                if (a[e] !== r) i = a[e].href;
                if (e < 0 || e >= a.length) {
                    return false
                }
                if (!t.isVideo(i)) {
                    t.loadMedia(i,a[e].title, function() {
                        n("#swipebox-slider .slide").eq(e).html(this)
                    })
                } else {
                    n("#swipebox-slider .slide").eq(e).html(t.getVideo(i))
                }
            },
            setTitle: function(e, t) {
                var i = null;
                n("#swipebox-caption").empty();
                if (a[e] !== r) i = a[e].title;
                if (i) {
                    n("#swipebox-caption").append(i)
                }
            },
            isVideo: function(e) {
                if (e) {
                    if (e.match(/youtube\.com\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/vimeo\.com\/([0-9]*)/)) {
                        return true
                    }
                }
            },
            getVideo: function(e) {
                var t = "";
                var n = "";
                var r = e.match(/watch\?v=([a-zA-Z0-9\-_]+)/);
                var i = e.match(/vimeo\.com\/([0-9]*)/);
                if (r) {
                    t = '<iframe width="560" height="315" src="//www.youtube.com/embed/' + r[1] + '" frameborder="0" allowfullscreen></iframe>'
                } else if (i) {
                    t = '<iframe width="560" height="315"  src="http://player.vimeo.com/video/' + i[1] + "?byline=0&portrait=0&color=" + u.settings.vimeoColor + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
                }
                return '<div class="swipebox-video-container" style="max-width:' + u.settings.videoMaxWidth + 'px"><div class="swipebox-video">' + t + "</div></div>"
            },
            loadMedia: function(e, title,  t) {
                if (!this.isVideo(e)) {
                    var r = n("<img>").on("load", function() {
                        t.call(r)
                    });
                    r.attr("src", e),
					r.attr("alt", title)
                }
            },
            getNext: function() {
                var e = this;
                index = n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current"));
                if (index + 1 < a.length) {
                    index++;
                    e.setSlide(index);
                    e.preloadMedia(index + 1)
                } else {
                    n("#swipebox-slider").addClass("rightSpring");
                    setTimeout(function() {
                        n("#swipebox-slider").removeClass("rightSpring")
                    }, 500)
                }
            },
            getPrev: function() {
                index = n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current"));
                if (index > 0) {
                    index--;
                    this.setSlide(index);
                    this.preloadMedia(index - 1)
                } else {
                    n("#swipebox-slider").addClass("leftSpring");
                    setTimeout(function() {
                        n("#swipebox-slider").removeClass("leftSpring")
                    }, 500)
                }
            },
            closeSlide: function() {
                n("html").removeClass("swipebox");
                n(e).trigger("resize");
                this.destroy();
                if (m != 0 || g != 0) {
                    n(e).scrollLeft(m);
                    n(e).scrollTop(g);
                    m = 0;
                    g = 0
                }
            },
            destroy: function() {
                n(e).unbind("keyup");
                n("#swipebox-slider").unbind("touchstart");
                n("#swipebox-slider").unbind("touchmove");
                n("#swipebox-slider").unbind("touchend");
                n("#swipebox-slider").unbind();
                n("#swipebox-overlay").remove();
                if (!n.isArray(i)) i.removeData("_swipebox");
                if (this.target) this.target.trigger("swipebox-destroy");
                n.swipebox.isOpen = false;
                if (u.settings.afterClose) u.settings.afterClose()
            }
        };
        u.init()
    };
    n.fn.swipebox = function(e) {
        if (!n.data(this, "_swipebox")) {
            var t = new n.swipebox(this, e);
            this.data("_swipebox", t)
        }
        return this.data("_swipebox")
    }
})(window, document, jQuery)
;