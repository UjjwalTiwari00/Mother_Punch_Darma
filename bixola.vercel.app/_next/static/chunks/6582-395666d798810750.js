"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6582], {
        7062: function(e, t, i) {
            i.d(t, {
                pt: function() {
                    return d
                },
                W_: function() {
                    return l
                },
                tl: function() {
                    return o
                }
            });
            var s = i(9280),
                r = i(1439);

            function a(e, t, i, s) {
                return e.params.createElements && Object.keys(s).forEach(a => {
                    if (!i[a] && !0 === i.auto) {
                        let l = (0, r.e)(e.el, `.${s[a]}`)[0];
                        l || ((l = (0, r.c)("div", s[a])).className = s[a], e.el.append(l)), i[a] = l, t[a] = l
                    }
                }), i
            }

            function l(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    on: s,
                    emit: r
                } = e;
                i({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), t.navigation = {
                    nextEl: null,
                    prevEl: null
                };
                let l = e => (Array.isArray(e) ? e : [e]).filter(e => !!e);

                function n(e) {
                    let i;
                    return e && "string" == typeof e && t.isElement && (i = t.el.querySelector(e)) ? i : (e && ("string" == typeof e && (i = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && i.length > 1 && 1 === t.el.querySelectorAll(e).length && (i = t.el.querySelector(e))), e && !i) ? e : i
                }

                function o(e, i) {
                    let s = t.params.navigation;
                    (e = l(e)).forEach(e => {
                        e && (e.classList[i ? "add" : "remove"](...s.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = i), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass))
                    })
                }

                function d() {
                    let {
                        nextEl: e,
                        prevEl: i
                    } = t.navigation;
                    if (t.params.loop) {
                        o(i, !1), o(e, !1);
                        return
                    }
                    o(i, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind)
                }

                function p(e) {
                    e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), r("navigationPrev"))
                }

                function c(e) {
                    e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), r("navigationNext"))
                }

                function u() {
                    let e = t.params.navigation;
                    if (t.params.navigation = a(t, t.originalParams.navigation, t.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }), !(e.nextEl || e.prevEl)) return;
                    let i = n(e.nextEl),
                        s = n(e.prevEl);
                    Object.assign(t.navigation, {
                        nextEl: i,
                        prevEl: s
                    }), i = l(i), s = l(s);
                    let r = (i, s) => {
                        i && i.addEventListener("click", "next" === s ? c : p), !t.enabled && i && i.classList.add(...e.lockClass.split(" "))
                    };
                    i.forEach(e => r(e, "next")), s.forEach(e => r(e, "prev"))
                }

                function h() {
                    let {
                        nextEl: e,
                        prevEl: i
                    } = t.navigation;
                    e = l(e), i = l(i);
                    let s = (e, i) => {
                        e.removeEventListener("click", "next" === i ? c : p), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
                    };
                    e.forEach(e => s(e, "next")), i.forEach(e => s(e, "prev"))
                }
                s("init", () => {
                    !1 === t.params.navigation.enabled ? f() : (u(), d())
                }), s("toEdge fromEdge lock unlock", () => {
                    d()
                }), s("destroy", () => {
                    h()
                }), s("enable disable", () => {
                    let {
                        nextEl: e,
                        prevEl: i
                    } = t.navigation;
                    if (e = l(e), i = l(i), t.enabled) {
                        d();
                        return
                    }[...e, ...i].filter(e => !!e).forEach(e => e.classList.add(t.params.navigation.lockClass))
                }), s("click", (e, i) => {
                    let {
                        nextEl: s,
                        prevEl: a
                    } = t.navigation;
                    s = l(s), a = l(a);
                    let n = i.target;
                    if (t.params.navigation.hideOnClick && !a.includes(n) && !s.includes(n)) {
                        let e;
                        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
                        s.length ? e = s[0].classList.contains(t.params.navigation.hiddenClass) : a.length && (e = a[0].classList.contains(t.params.navigation.hiddenClass)), !0 === e ? r("navigationShow") : r("navigationHide"), [...s, ...a].filter(e => !!e).forEach(e => e.classList.toggle(t.params.navigation.hiddenClass))
                    }
                });
                let f = () => {
                    t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), h()
                };
                Object.assign(t.navigation, {
                    enable: () => {
                        t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), u(), d()
                    },
                    disable: f,
                    update: d,
                    init: u,
                    destroy: h
                })
            }

            function n(e) {
                return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
            }

            function o(e) {
                let t, {
                        swiper: i,
                        extendParams: s,
                        on: l,
                        emit: o
                    } = e,
                    d = "swiper-pagination";
                s({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${d}-bullet`,
                        bulletActiveClass: `${d}-bullet-active`,
                        modifierClass: `${d}-`,
                        currentClass: `${d}-current`,
                        totalClass: `${d}-total`,
                        hiddenClass: `${d}-hidden`,
                        progressbarFillClass: `${d}-progressbar-fill`,
                        progressbarOppositeClass: `${d}-progressbar-opposite`,
                        clickableClass: `${d}-clickable`,
                        lockClass: `${d}-lock`,
                        horizontalClass: `${d}-horizontal`,
                        verticalClass: `${d}-vertical`,
                        paginationDisabledClass: `${d}-disabled`
                    }
                }), i.pagination = {
                    el: null,
                    bullets: []
                };
                let p = 0,
                    c = e => (Array.isArray(e) ? e : [e]).filter(e => !!e);

                function u() {
                    return !i.params.pagination.el || !i.pagination.el || Array.isArray(i.pagination.el) && 0 === i.pagination.el.length
                }

                function h(e, t) {
                    let {
                        bulletActiveClass: s
                    } = i.params.pagination;
                    e && (e = e[`${"prev"===t?"previous":"next"}ElementSibling`]) && (e.classList.add(`${s}-${t}`), (e = e[`${"prev"===t?"previous":"next"}ElementSibling`]) && e.classList.add(`${s}-${t}-${t}`))
                }

                function f(e) {
                    let t = e.target.closest(n(i.params.pagination.bulletClass));
                    if (!t) return;
                    e.preventDefault();
                    let s = (0, r.g)(t) * i.params.slidesPerGroup;
                    if (i.params.loop) {
                        if (i.realIndex === s) return;
                        let e = i.realIndex,
                            t = i.getSlideIndexByData(s),
                            r = i.getSlideIndexByData(i.realIndex),
                            a = s => {
                                let r = i.activeIndex;
                                i.loopFix({
                                    direction: s,
                                    activeSlideIndex: t,
                                    slideTo: !1
                                });
                                let a = i.activeIndex;
                                r === a && i.slideToLoop(e, 0, !1, !0)
                            };
                        if (t > i.slides.length - i.loopedSlides) a(t > r ? "next" : "prev");
                        else if (i.params.centeredSlides) {
                            let e = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(i.params.slidesPerView, 10));
                            t < Math.floor(e / 2) && a("prev")
                        }
                        i.slideToLoop(s)
                    } else i.slideTo(s)
                }

                function m() {
                    let e, s;
                    let a = i.rtl,
                        l = i.params.pagination;
                    if (u()) return;
                    let d = i.pagination.el;
                    d = c(d);
                    let f = i.virtual && i.params.virtual.enabled ? i.virtual.slides.length : i.slides.length,
                        m = i.params.loop ? Math.ceil(f / i.params.slidesPerGroup) : i.snapGrid.length;
                    if (i.params.loop ? (s = i.previousRealIndex || 0, e = i.params.slidesPerGroup > 1 ? Math.floor(i.realIndex / i.params.slidesPerGroup) : i.realIndex) : void 0 !== i.snapIndex ? (e = i.snapIndex, s = i.previousSnapIndex) : (s = i.previousIndex || 0, e = i.activeIndex || 0), "bullets" === l.type && i.pagination.bullets && i.pagination.bullets.length > 0) {
                        let n, o, c;
                        let u = i.pagination.bullets;
                        if (l.dynamicBullets && (t = (0, r.f)(u[0], i.isHorizontal() ? "width" : "height", !0), d.forEach(e => {
                                e.style[i.isHorizontal() ? "width" : "height"] = `${t*(l.dynamicMainBullets+4)}px`
                            }), l.dynamicMainBullets > 1 && void 0 !== s && ((p += e - (s || 0)) > l.dynamicMainBullets - 1 ? p = l.dynamicMainBullets - 1 : p < 0 && (p = 0)), c = ((o = (n = Math.max(e - p, 0)) + (Math.min(u.length, l.dynamicMainBullets) - 1)) + n) / 2), u.forEach(e => {
                                let t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${l.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                                e.classList.remove(...t)
                            }), d.length > 1) u.forEach(t => {
                            let s = (0, r.g)(t);
                            s === e ? t.classList.add(...l.bulletActiveClass.split(" ")) : i.isElement && t.setAttribute("part", "bullet"), l.dynamicBullets && (s >= n && s <= o && t.classList.add(...`${l.bulletActiveClass}-main`.split(" ")), s === n && h(t, "prev"), s === o && h(t, "next"))
                        });
                        else {
                            let t = u[e];
                            if (t && t.classList.add(...l.bulletActiveClass.split(" ")), i.isElement && u.forEach((t, i) => {
                                    t.setAttribute("part", i === e ? "bullet-active" : "bullet")
                                }), l.dynamicBullets) {
                                let e = u[n],
                                    t = u[o];
                                for (let e = n; e <= o; e += 1) u[e] && u[e].classList.add(...`${l.bulletActiveClass}-main`.split(" "));
                                h(e, "prev"), h(t, "next")
                            }
                        }
                        if (l.dynamicBullets) {
                            let e = Math.min(u.length, l.dynamicMainBullets + 4),
                                s = (t * e - t) / 2 - c * t,
                                r = a ? "right" : "left";
                            u.forEach(e => {
                                e.style[i.isHorizontal() ? r : "top"] = `${s}px`
                            })
                        }
                    }
                    d.forEach((t, s) => {
                        if ("fraction" === l.type && (t.querySelectorAll(n(l.currentClass)).forEach(t => {
                                t.textContent = l.formatFractionCurrent(e + 1)
                            }), t.querySelectorAll(n(l.totalClass)).forEach(e => {
                                e.textContent = l.formatFractionTotal(m)
                            })), "progressbar" === l.type) {
                            let s;
                            s = l.progressbarOpposite ? i.isHorizontal() ? "vertical" : "horizontal" : i.isHorizontal() ? "horizontal" : "vertical";
                            let r = (e + 1) / m,
                                a = 1,
                                o = 1;
                            "horizontal" === s ? a = r : o = r, t.querySelectorAll(n(l.progressbarFillClass)).forEach(e => {
                                e.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${o})`, e.style.transitionDuration = `${i.params.speed}ms`
                            })
                        }
                        "custom" === l.type && l.renderCustom ? (t.innerHTML = l.renderCustom(i, e + 1, m), 0 === s && o("paginationRender", t)) : (0 === s && o("paginationRender", t), o("paginationUpdate", t)), i.params.watchOverflow && i.enabled && t.classList[i.isLocked ? "add" : "remove"](l.lockClass)
                    })
                }

                function v() {
                    let e = i.params.pagination;
                    if (u()) return;
                    let t = i.virtual && i.params.virtual.enabled ? i.virtual.slides.length : i.slides.length,
                        s = i.pagination.el;
                    s = c(s);
                    let r = "";
                    if ("bullets" === e.type) {
                        let s = i.params.loop ? Math.ceil(t / i.params.slidesPerGroup) : i.snapGrid.length;
                        i.params.freeMode && i.params.freeMode.enabled && s > t && (s = t);
                        for (let t = 0; t < s; t += 1) e.renderBullet ? r += e.renderBullet.call(i, t, e.bulletClass) : r += `<${e.bulletElement} ${i.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
                    }
                    "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(i, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(i, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), i.pagination.bullets = [], s.forEach(t => {
                        "custom" !== e.type && (t.innerHTML = r || ""), "bullets" === e.type && i.pagination.bullets.push(...t.querySelectorAll(n(e.bulletClass)))
                    }), "custom" !== e.type && o("paginationRender", s[0])
                }

                function g() {
                    let e;
                    i.params.pagination = a(i, i.originalParams.pagination, i.params.pagination, {
                        el: "swiper-pagination"
                    });
                    let t = i.params.pagination;
                    t.el && ("string" == typeof t.el && i.isElement && (e = i.el.querySelector(t.el)), e || "string" != typeof t.el || (e = [...document.querySelectorAll(t.el)]), e || (e = t.el), e && 0 !== e.length && (i.params.uniqueNavElements && "string" == typeof t.el && Array.isArray(e) && e.length > 1 && (e = [...i.el.querySelectorAll(t.el)]).length > 1 && (e = e.filter(e => (0, r.a)(e, ".swiper")[0] === i.el)[0]), Array.isArray(e) && 1 === e.length && (e = e[0]), Object.assign(i.pagination, {
                        el: e
                    }), (e = c(e)).forEach(e => {
                        "bullets" === t.type && t.clickable && e.classList.add(...(t.clickableClass || "").split(" ")), e.classList.add(t.modifierClass + t.type), e.classList.add(i.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (e.classList.add(`${t.modifierClass}${t.type}-dynamic`), p = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && e.classList.add(t.progressbarOppositeClass), t.clickable && e.addEventListener("click", f), i.enabled || e.classList.add(t.lockClass)
                    })))
                }

                function w() {
                    let e = i.params.pagination;
                    if (u()) return;
                    let t = i.pagination.el;
                    t && (t = c(t)).forEach(t => {
                        t.classList.remove(e.hiddenClass), t.classList.remove(e.modifierClass + e.type), t.classList.remove(i.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (t.classList.remove(...(e.clickableClass || "").split(" ")), t.removeEventListener("click", f))
                    }), i.pagination.bullets && i.pagination.bullets.forEach(t => t.classList.remove(...e.bulletActiveClass.split(" ")))
                }
                l("changeDirection", () => {
                    if (!i.pagination || !i.pagination.el) return;
                    let e = i.params.pagination,
                        {
                            el: t
                        } = i.pagination;
                    (t = c(t)).forEach(t => {
                        t.classList.remove(e.horizontalClass, e.verticalClass), t.classList.add(i.isHorizontal() ? e.horizontalClass : e.verticalClass)
                    })
                }), l("init", () => {
                    !1 === i.params.pagination.enabled ? b() : (g(), v(), m())
                }), l("activeIndexChange", () => {
                    void 0 === i.snapIndex && m()
                }), l("snapIndexChange", () => {
                    m()
                }), l("snapGridLengthChange", () => {
                    v(), m()
                }), l("destroy", () => {
                    w()
                }), l("enable disable", () => {
                    let {
                        el: e
                    } = i.pagination;
                    e && (e = c(e)).forEach(e => e.classList[i.enabled ? "remove" : "add"](i.params.pagination.lockClass))
                }), l("lock unlock", () => {
                    m()
                }), l("click", (e, t) => {
                    let s = t.target,
                        r = c(i.pagination.el);
                    if (i.params.pagination.el && i.params.pagination.hideOnClick && r && r.length > 0 && !s.classList.contains(i.params.pagination.bulletClass)) {
                        if (i.navigation && (i.navigation.nextEl && s === i.navigation.nextEl || i.navigation.prevEl && s === i.navigation.prevEl)) return;
                        let e = r[0].classList.contains(i.params.pagination.hiddenClass);
                        !0 === e ? o("paginationShow") : o("paginationHide"), r.forEach(e => e.classList.toggle(i.params.pagination.hiddenClass))
                    }
                });
                let b = () => {
                    i.el.classList.add(i.params.pagination.paginationDisabledClass);
                    let {
                        el: e
                    } = i.pagination;
                    e && (e = c(e)).forEach(e => e.classList.add(i.params.pagination.paginationDisabledClass)), w()
                };
                Object.assign(i.pagination, {
                    enable: () => {
                        i.el.classList.remove(i.params.pagination.paginationDisabledClass);
                        let {
                            el: e
                        } = i.pagination;
                        e && (e = c(e)).forEach(e => e.classList.remove(i.params.pagination.paginationDisabledClass)), g(), v(), m()
                    },
                    disable: b,
                    render: v,
                    update: m,
                    init: g,
                    destroy: w
                })
            }

            function d(e) {
                let t, i, r, a, l, n, o, d, p, {
                    swiper: c,
                    extendParams: u,
                    on: h,
                    emit: f,
                    params: m
                } = e;
                c.autoplay = {
                    running: !1,
                    paused: !1,
                    timeLeft: 0
                }, u({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                });
                let v = m && m.autoplay ? m.autoplay.delay : 3e3,
                    g = m && m.autoplay ? m.autoplay.delay : 3e3,
                    w = new Date().getTime;

                function b(e) {
                    c && !c.destroyed && c.wrapperEl && e.target === c.wrapperEl && (c.wrapperEl.removeEventListener("transitionend", b), M())
                }
                let y = () => {
                        if (c.destroyed || !c.autoplay.running) return;
                        c.autoplay.paused ? a = !0 : a && (g = r, a = !1);
                        let e = c.autoplay.paused ? r : w + g - new Date().getTime();
                        c.autoplay.timeLeft = e, f("autoplayTimeLeft", e, e / v), i = requestAnimationFrame(() => {
                            y()
                        })
                    },
                    S = () => {
                        let e;
                        if (!(e = c.virtual && c.params.virtual.enabled ? c.slides.filter(e => e.classList.contains("swiper-slide-active"))[0] : c.slides[c.activeIndex])) return;
                        let t = parseInt(e.getAttribute("data-swiper-autoplay"), 10);
                        return t
                    },
                    E = e => {
                        if (c.destroyed || !c.autoplay.running) return;
                        cancelAnimationFrame(i), y();
                        let s = void 0 === e ? c.params.autoplay.delay : e;
                        v = c.params.autoplay.delay, g = c.params.autoplay.delay;
                        let a = S();
                        !Number.isNaN(a) && a > 0 && void 0 === e && (s = a, v = a, g = a), r = s;
                        let l = c.params.speed,
                            n = () => {
                                c && !c.destroyed && (c.params.autoplay.reverseDirection ? !c.isBeginning || c.params.loop || c.params.rewind ? (c.slidePrev(l, !0, !0), f("autoplay")) : c.params.autoplay.stopOnLastSlide || (c.slideTo(c.slides.length - 1, l, !0, !0), f("autoplay")) : !c.isEnd || c.params.loop || c.params.rewind ? (c.slideNext(l, !0, !0), f("autoplay")) : c.params.autoplay.stopOnLastSlide || (c.slideTo(0, l, !0, !0), f("autoplay")), c.params.cssMode && (w = new Date().getTime(), requestAnimationFrame(() => {
                                    E()
                                })))
                            };
                        return s > 0 ? (clearTimeout(t), t = setTimeout(() => {
                            n()
                        }, s)) : requestAnimationFrame(() => {
                            n()
                        }), s
                    },
                    T = () => {
                        c.autoplay.running = !0, E(), f("autoplayStart")
                    },
                    x = () => {
                        c.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(i), f("autoplayStop")
                    },
                    C = (e, i) => {
                        if (c.destroyed || !c.autoplay.running) return;
                        clearTimeout(t), e || (p = !0);
                        let s = () => {
                            f("autoplayPause"), c.params.autoplay.waitForTransition ? c.wrapperEl.addEventListener("transitionend", b) : M()
                        };
                        if (c.autoplay.paused = !0, i) {
                            d && (r = c.params.autoplay.delay), d = !1, s();
                            return
                        }
                        let a = r || c.params.autoplay.delay;
                        r = a - (new Date().getTime() - w), c.isEnd && r < 0 && !c.params.loop || (r < 0 && (r = 0), s())
                    },
                    M = () => {
                        c.isEnd && r < 0 && !c.params.loop || c.destroyed || !c.autoplay.running || (w = new Date().getTime(), p ? (p = !1, E(r)) : E(), c.autoplay.paused = !1, f("autoplayResume"))
                    },
                    P = () => {
                        if (c.destroyed || !c.autoplay.running) return;
                        let e = (0, s.g)();
                        "hidden" === e.visibilityState && (p = !0, C(!0)), "visible" === e.visibilityState && M()
                    },
                    L = e => {
                        "mouse" === e.pointerType && (p = !0, c.animating || c.autoplay.paused || C(!0))
                    },
                    k = e => {
                        "mouse" === e.pointerType && c.autoplay.paused && M()
                    },
                    O = () => {
                        c.params.autoplay.pauseOnMouseEnter && (c.el.addEventListener("pointerenter", L), c.el.addEventListener("pointerleave", k))
                    },
                    A = () => {
                        c.el.removeEventListener("pointerenter", L), c.el.removeEventListener("pointerleave", k)
                    },
                    _ = () => {
                        let e = (0, s.g)();
                        e.addEventListener("visibilitychange", P)
                    },
                    z = () => {
                        let e = (0, s.g)();
                        e.removeEventListener("visibilitychange", P)
                    };
                h("init", () => {
                    c.params.autoplay.enabled && (O(), _(), w = new Date().getTime(), T())
                }), h("destroy", () => {
                    A(), z(), c.autoplay.running && x()
                }), h("beforeTransitionStart", (e, t, i) => {
                    !c.destroyed && c.autoplay.running && (i || !c.params.autoplay.disableOnInteraction ? C(!0, !0) : x())
                }), h("sliderFirstMove", () => {
                    if (!c.destroyed && c.autoplay.running) {
                        if (c.params.autoplay.disableOnInteraction) {
                            x();
                            return
                        }
                        l = !0, n = !1, p = !1, o = setTimeout(() => {
                            p = !0, n = !0, C(!0)
                        }, 200)
                    }
                }), h("touchEnd", () => {
                    if (!c.destroyed && c.autoplay.running && l) {
                        if (clearTimeout(o), clearTimeout(t), c.params.autoplay.disableOnInteraction) {
                            n = !1, l = !1;
                            return
                        }
                        n && c.params.cssMode && M(), n = !1, l = !1
                    }
                }), h("slideChange", () => {
                    !c.destroyed && c.autoplay.running && (d = !0)
                }), Object.assign(c.autoplay, {
                    start: T,
                    stop: x,
                    pause: C,
                    resume: M
                })
            }
        },
        9280: function(e, t, i) {
            function s(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function r(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : s(t[i]) && s(e[i]) && Object.keys(t[i]).length > 0 && r(e[i], t[i])
                })
            }
            i.d(t, {
                a: function() {
                    return o
                },
                g: function() {
                    return l
                }
            });
            let a = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function l() {
                let e = "undefined" != typeof document ? document : {};
                return r(e, a), e
            }
            let n = {
                document: a,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function o() {
                let e = "undefined" != typeof window ? window : {};
                return r(e, n), e
            }
        },
        1439: function(e, t, i) {
            i.d(t, {
                a: function() {
                    return g
                },
                c: function() {
                    return u
                },
                d: function() {
                    return l
                },
                e: function() {
                    return c
                },
                f: function() {
                    return w
                },
                g: function() {
                    return v
                },
                h: function() {
                    return n
                },
                l: function() {
                    return m
                },
                m: function() {
                    return f
                },
                n: function() {
                    return a
                },
                o: function() {
                    return h
                },
                p: function() {
                    return p
                },
                q: function() {
                    return function e() {
                        let t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                            i = ["__proto__", "constructor", "prototype"];
                        for (let s = 1; s < arguments.length; s += 1) {
                            let r = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                            if (null != r && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(r instanceof HTMLElement) : !r || 1 !== r.nodeType && 11 !== r.nodeType)) {
                                let s = Object.keys(Object(r)).filter(e => 0 > i.indexOf(e));
                                for (let i = 0, a = s.length; i < a; i += 1) {
                                    let a = s[i],
                                        l = Object.getOwnPropertyDescriptor(r, a);
                                    void 0 !== l && l.enumerable && (o(t[a]) && o(r[a]) ? r[a].__swiper__ ? t[a] = r[a] : e(t[a], r[a]) : !o(t[a]) && o(r[a]) ? (t[a] = {}, r[a].__swiper__ ? t[a] = r[a] : e(t[a], r[a])) : t[a] = r[a])
                                }
                            }
                        }
                        return t
                    }
                },
                r: function() {
                    return r
                },
                s: function() {
                    return d
                }
            });
            var s = i(9280);

            function r(e) {
                Object.keys(e).forEach(t => {
                    try {
                        e[t] = null
                    } catch (e) {}
                    try {
                        delete e[t]
                    } catch (e) {}
                })
            }

            function a(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function l() {
                return Date.now()
            }

            function n(e, t) {
                let i, r, a;
                void 0 === t && (t = "x");
                let l = (0, s.a)(),
                    n = function(e) {
                        let t;
                        let i = (0, s.a)();
                        return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                    }(e);
                return l.WebKitCSSMatrix ? ((r = n.transform || n.webkitTransform).split(",").length > 6 && (r = r.split(", ").map(e => e.replace(",", ".")).join(", ")), a = new l.WebKitCSSMatrix("none" === r ? "" : r)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (r = l.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (r = l.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0
            }

            function o(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function d(e, t, i) {
                e.style.setProperty(t, i)
            }

            function p(e) {
                let t, {
                        swiper: i,
                        targetPosition: r,
                        side: a
                    } = e,
                    l = (0, s.a)(),
                    n = -i.translate,
                    o = null,
                    d = i.params.speed;
                i.wrapperEl.style.scrollSnapType = "none", l.cancelAnimationFrame(i.cssModeFrameID);
                let p = r > n ? "next" : "prev",
                    c = (e, t) => "next" === p && e >= t || "prev" === p && e <= t,
                    u = () => {
                        t = new Date().getTime(), null === o && (o = t);
                        let e = Math.max(Math.min((t - o) / d, 1), 0),
                            s = n + (.5 - Math.cos(e * Math.PI) / 2) * (r - n);
                        if (c(s, r) && (s = r), i.wrapperEl.scrollTo({
                                [a]: s
                            }), c(s, r)) {
                            i.wrapperEl.style.overflow = "hidden", i.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                i.wrapperEl.style.overflow = "", i.wrapperEl.scrollTo({
                                    [a]: s
                                })
                            }), l.cancelAnimationFrame(i.cssModeFrameID);
                            return
                        }
                        i.cssModeFrameID = l.requestAnimationFrame(u)
                    };
                u()
            }

            function c(e, t) {
                return void 0 === t && (t = ""), [...e.children].filter(e => e.matches(t))
            }

            function u(e, t) {
                void 0 === t && (t = []);
                let i = document.createElement(e);
                return i.classList.add(...Array.isArray(t) ? t : [t]), i
            }

            function h(e, t) {
                let i = [];
                for (; e.previousElementSibling;) {
                    let s = e.previousElementSibling;
                    t ? s.matches(t) && i.push(s) : i.push(s), e = s
                }
                return i
            }

            function f(e, t) {
                let i = [];
                for (; e.nextElementSibling;) {
                    let s = e.nextElementSibling;
                    t ? s.matches(t) && i.push(s) : i.push(s), e = s
                }
                return i
            }

            function m(e, t) {
                let i = (0, s.a)();
                return i.getComputedStyle(e, null).getPropertyValue(t)
            }

            function v(e) {
                let t, i = e;
                if (i) {
                    for (t = 0; null !== (i = i.previousSibling);) 1 === i.nodeType && (t += 1);
                    return t
                }
            }

            function g(e, t) {
                let i = [],
                    s = e.parentElement;
                for (; s;) t ? s.matches(t) && i.push(s) : i.push(s), s = s.parentElement;
                return i
            }

            function w(e, t, i) {
                let r = (0, s.a)();
                return i ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }
        },
        8278: function(e, t, i) {
            let s, r, a;
            i.d(t, {
                tq: function() {
                    return V
                },
                o5: function() {
                    return H
                }
            });
            var l = i(2265),
                n = i(9280),
                o = i(1439);

            function d() {
                return s || (s = function() {
                    let e = (0, n.a)(),
                        t = (0, n.g)();
                    return {
                        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                    }
                }()), s
            }
            let p = (e, t) => {
                    if (!e || e.destroyed || !e.params) return;
                    let i = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                    if (i) {
                        let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
                        !t && e.isElement && (i.shadowRoot ? t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
                            i.shadowRoot && (t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)) && t.remove()
                        })), t && t.remove()
                    }
                },
                c = (e, t) => {
                    if (!e.slides[t]) return;
                    let i = e.slides[t].querySelector('[loading="lazy"]');
                    i && i.removeAttribute("loading")
                },
                u = e => {
                    if (!e || e.destroyed || !e.params) return;
                    let t = e.params.lazyPreloadPrevNext,
                        i = e.slides.length;
                    if (!i || !t || t < 0) return;
                    t = Math.min(t, i);
                    let s = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                        r = e.activeIndex;
                    if (e.params.grid && e.params.grid.rows > 1) {
                        let i = [r - t];
                        i.push(...Array.from({
                            length: t
                        }).map((e, t) => r + s + t)), e.slides.forEach((t, s) => {
                            i.includes(t.column) && c(e, s)
                        });
                        return
                    }
                    let a = r + s - 1;
                    if (e.params.rewind || e.params.loop)
                        for (let s = r - t; s <= a + t; s += 1) {
                            let t = (s % i + i) % i;
                            (t < r || t > a) && c(e, t)
                        } else
                            for (let s = Math.max(r - t, 0); s <= Math.min(a + t, i - 1); s += 1) s !== r && (s > a || s < r) && c(e, s)
                };

            function h(e) {
                let {
                    swiper: t,
                    runCallbacks: i,
                    direction: s,
                    step: r
                } = e, {
                    activeIndex: a,
                    previousIndex: l
                } = t, n = s;
                if (n || (n = a > l ? "next" : a < l ? "prev" : "reset"), t.emit(`transition${r}`), i && a !== l) {
                    if ("reset" === n) {
                        t.emit(`slideResetTransition${r}`);
                        return
                    }
                    t.emit(`slideChangeTransition${r}`), "next" === n ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`)
                }
            }

            function f(e) {
                let t = (0, n.g)(),
                    i = (0, n.a)(),
                    s = this.touchEventsData;
                s.evCache.push(e);
                let {
                    params: r,
                    touches: a,
                    enabled: l
                } = this;
                if (!l || !r.simulateTouch && "mouse" === e.pointerType || this.animating && r.preventInteractionOnTransition) return;
                !this.animating && r.cssMode && r.loop && this.loopFix();
                let d = e;
                d.originalEvent && (d = d.originalEvent);
                let p = d.target;
                if ("wrapper" === r.touchEventsTarget && !this.wrapperEl.contains(p) || "which" in d && 3 === d.which || "button" in d && d.button > 0 || s.isTouched && s.isMoved) return;
                let c = !!r.noSwipingClass && "" !== r.noSwipingClass,
                    u = e.composedPath ? e.composedPath() : e.path;
                c && d.target && d.target.shadowRoot && u && (p = u[0]);
                let h = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
                    f = !!(d.target && d.target.shadowRoot);
                if (r.noSwiping && (f ? function(e, t) {
                        return void 0 === t && (t = this),
                            function t(i) {
                                if (!i || i === (0, n.g)() || i === (0, n.a)()) return null;
                                i.assignedSlot && (i = i.assignedSlot);
                                let s = i.closest(e);
                                return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                            }(t)
                    }(h, p) : p.closest(h))) {
                    this.allowClick = !0;
                    return
                }
                if (r.swipeHandler && !p.closest(r.swipeHandler)) return;
                a.currentX = d.pageX, a.currentY = d.pageY;
                let m = a.currentX,
                    v = a.currentY,
                    g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                    w = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                if (g && (m <= w || m >= i.innerWidth - w)) {
                    if ("prevent" !== g) return;
                    e.preventDefault()
                }
                Object.assign(s, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), a.startX = m, a.startY = v, s.touchStartTime = (0, o.d)(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (s.allowThresholdMove = !1);
                let b = !0;
                p.matches(s.focusableElements) && (b = !1, "SELECT" === p.nodeName && (s.isTouched = !1)), t.activeElement && t.activeElement.matches(s.focusableElements) && t.activeElement !== p && t.activeElement.blur();
                let y = b && this.allowTouchMove && r.touchStartPreventDefault;
                (r.touchStartForcePreventDefault || y) && !p.isContentEditable && d.preventDefault(), r.freeMode && r.freeMode.enabled && this.freeMode && this.animating && !r.cssMode && this.freeMode.onTouchStart(), this.emit("touchStart", d)
            }

            function m(e) {
                let t;
                let i = (0, n.g)(),
                    s = this.touchEventsData,
                    {
                        params: r,
                        touches: a,
                        rtlTranslate: l,
                        enabled: d
                    } = this;
                if (!d || !r.simulateTouch && "mouse" === e.pointerType) return;
                let p = e;
                if (p.originalEvent && (p = p.originalEvent), !s.isTouched) {
                    s.startMoving && s.isScrolling && this.emit("touchMoveOpposite", p);
                    return
                }
                let c = s.evCache.findIndex(e => e.pointerId === p.pointerId);
                c >= 0 && (s.evCache[c] = p);
                let u = s.evCache.length > 1 ? s.evCache[0] : p,
                    h = u.pageX,
                    f = u.pageY;
                if (p.preventedByNestedSwiper) {
                    a.startX = h, a.startY = f;
                    return
                }
                if (!this.allowTouchMove) {
                    p.target.matches(s.focusableElements) || (this.allowClick = !1), s.isTouched && (Object.assign(a, {
                        startX: h,
                        startY: f,
                        prevX: this.touches.currentX,
                        prevY: this.touches.currentY,
                        currentX: h,
                        currentY: f
                    }), s.touchStartTime = (0, o.d)());
                    return
                }
                if (r.touchReleaseOnEdges && !r.loop) {
                    if (this.isVertical()) {
                        if (f < a.startY && this.translate <= this.maxTranslate() || f > a.startY && this.translate >= this.minTranslate()) {
                            s.isTouched = !1, s.isMoved = !1;
                            return
                        }
                    } else if (h < a.startX && this.translate <= this.maxTranslate() || h > a.startX && this.translate >= this.minTranslate()) return
                }
                if (i.activeElement && p.target === i.activeElement && p.target.matches(s.focusableElements)) {
                    s.isMoved = !0, this.allowClick = !1;
                    return
                }
                if (s.allowTouchCallbacks && this.emit("touchMove", p), p.targetTouches && p.targetTouches.length > 1) return;
                a.currentX = h, a.currentY = f;
                let m = a.currentX - a.startX,
                    v = a.currentY - a.startY;
                if (this.params.threshold && Math.sqrt(m ** 2 + v ** 2) < this.params.threshold) return;
                if (void 0 === s.isScrolling) {
                    let e;
                    this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? s.isScrolling = !1 : m * m + v * v >= 25 && (e = 180 * Math.atan2(Math.abs(v), Math.abs(m)) / Math.PI, s.isScrolling = this.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
                }
                if (s.isScrolling && this.emit("touchMoveOpposite", p), void 0 === s.startMoving && (a.currentX !== a.startX || a.currentY !== a.startY) && (s.startMoving = !0), s.isScrolling || this.zoom && this.params.zoom && this.params.zoom.enabled && s.evCache.length > 1) {
                    s.isTouched = !1;
                    return
                }
                if (!s.startMoving) return;
                this.allowClick = !1, !r.cssMode && p.cancelable && p.preventDefault(), r.touchMoveStopPropagation && !r.nested && p.stopPropagation();
                let g = this.isHorizontal() ? m : v,
                    w = this.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
                r.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1), w = Math.abs(w) * (l ? 1 : -1)), a.diff = g, g *= r.touchRatio, l && (g = -g, w = -w);
                let b = this.touchesDirection;
                this.swipeDirection = g > 0 ? "prev" : "next", this.touchesDirection = w > 0 ? "prev" : "next";
                let y = this.params.loop && !r.cssMode,
                    S = "next" === this.swipeDirection && this.allowSlideNext || "prev" === this.swipeDirection && this.allowSlidePrev;
                if (!s.isMoved) {
                    if (y && S && this.loopFix({
                            direction: this.swipeDirection
                        }), s.startTranslate = this.getTranslate(), this.setTransition(0), this.animating) {
                        let e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        this.wrapperEl.dispatchEvent(e)
                    }
                    s.allowMomentumBounce = !1, r.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0), this.emit("sliderFirstMove", p)
                }
                s.isMoved && b !== this.touchesDirection && y && S && Math.abs(g) >= 1 && (this.loopFix({
                    direction: this.swipeDirection,
                    setTranslate: !0
                }), t = !0), this.emit("sliderMove", p), s.isMoved = !0, s.currentTranslate = g + s.startTranslate;
                let E = !0,
                    T = r.resistanceRatio;
                if (r.touchReleaseOnEdges && (T = 0), g > 0 ? (y && S && !t && s.currentTranslate > (r.centeredSlides ? this.minTranslate() - this.size / 2 : this.minTranslate()) && this.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0
                    }), s.currentTranslate > this.minTranslate() && (E = !1, r.resistance && (s.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + s.startTranslate + g) ** T))) : g < 0 && (y && S && !t && s.currentTranslate < (r.centeredSlides ? this.maxTranslate() + this.size / 2 : this.maxTranslate()) && this.loopFix({
                        direction: "next",
                        setTranslate: !0,
                        activeSlideIndex: this.slides.length - ("auto" === r.slidesPerView ? this.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
                    }), s.currentTranslate < this.maxTranslate() && (E = !1, r.resistance && (s.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - s.startTranslate - g) ** T))), E && (p.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), this.allowSlidePrev || this.allowSlideNext || (s.currentTranslate = s.startTranslate), r.threshold > 0) {
                    if (Math.abs(g) > r.threshold || s.allowThresholdMove) {
                        if (!s.allowThresholdMove) {
                            s.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, s.currentTranslate = s.startTranslate, a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY;
                            return
                        }
                    } else {
                        s.currentTranslate = s.startTranslate;
                        return
                    }
                }
                r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && this.freeMode || r.watchSlidesProgress) && (this.updateActiveIndex(), this.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(), this.updateProgress(s.currentTranslate), this.setTranslate(s.currentTranslate))
            }

            function v(e) {
                let t;
                let i = this,
                    s = i.touchEventsData,
                    r = s.evCache.findIndex(t => t.pointerId === e.pointerId);
                if (r >= 0 && s.evCache.splice(r, 1), ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
                    let t = ["pointercancel", "contextmenu"].includes(e.type) && (i.browser.isSafari || i.browser.isWebView);
                    if (!t) return
                }
                let {
                    params: a,
                    touches: l,
                    rtlTranslate: n,
                    slidesGrid: d,
                    enabled: p
                } = i;
                if (!p || !a.simulateTouch && "mouse" === e.pointerType) return;
                let c = e;
                if (c.originalEvent && (c = c.originalEvent), s.allowTouchCallbacks && i.emit("touchEnd", c), s.allowTouchCallbacks = !1, !s.isTouched) {
                    s.isMoved && a.grabCursor && i.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
                    return
                }
                a.grabCursor && s.isMoved && s.isTouched && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!1);
                let u = (0, o.d)(),
                    h = u - s.touchStartTime;
                if (i.allowClick) {
                    let e = c.path || c.composedPath && c.composedPath();
                    i.updateClickedSlide(e && e[0] || c.target, e), i.emit("tap click", c), h < 300 && u - s.lastClickTime < 300 && i.emit("doubleTap doubleClick", c)
                }
                if (s.lastClickTime = (0, o.d)(), (0, o.n)(() => {
                        i.destroyed || (i.allowClick = !0)
                    }), !s.isTouched || !s.isMoved || !i.swipeDirection || 0 === l.diff || s.currentTranslate === s.startTranslate) {
                    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
                    return
                }
                if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, t = a.followFinger ? n ? i.translate : -i.translate : -s.currentTranslate, a.cssMode) return;
                if (a.freeMode && a.freeMode.enabled) {
                    i.freeMode.onTouchEnd({
                        currentPos: t
                    });
                    return
                }
                let f = 0,
                    m = i.slidesSizesGrid[0];
                for (let e = 0; e < d.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
                    let i = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                    void 0 !== d[e + i] ? t >= d[e] && t < d[e + i] && (f = e, m = d[e + i] - d[e]) : t >= d[e] && (f = e, m = d[d.length - 1] - d[d.length - 2])
                }
                let v = null,
                    g = null;
                a.rewind && (i.isBeginning ? g = a.virtual && a.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1 : i.isEnd && (v = 0));
                let w = (t - d[f]) / m,
                    b = f < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                if (h > a.longSwipesMs) {
                    if (!a.longSwipes) {
                        i.slideTo(i.activeIndex);
                        return
                    }
                    "next" === i.swipeDirection && (w >= a.longSwipesRatio ? i.slideTo(a.rewind && i.isEnd ? v : f + b) : i.slideTo(f)), "prev" === i.swipeDirection && (w > 1 - a.longSwipesRatio ? i.slideTo(f + b) : null !== g && w < 0 && Math.abs(w) > a.longSwipesRatio ? i.slideTo(g) : i.slideTo(f))
                } else {
                    if (!a.shortSwipes) {
                        i.slideTo(i.activeIndex);
                        return
                    }
                    let e = i.navigation && (c.target === i.navigation.nextEl || c.target === i.navigation.prevEl);
                    e ? c.target === i.navigation.nextEl ? i.slideTo(f + b) : i.slideTo(f) : ("next" === i.swipeDirection && i.slideTo(null !== v ? v : f + b), "prev" === i.swipeDirection && i.slideTo(null !== g ? g : f))
                }
            }

            function g() {
                let e = this,
                    {
                        params: t,
                        el: i
                    } = e;
                if (i && 0 === i.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                let {
                    allowSlideNext: s,
                    allowSlidePrev: r,
                    snapGrid: a
                } = e, l = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                let n = l && t.loop;
                "auto" !== t.slidesPerView && !(t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || n ? e.params.loop && !l ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                }, 500)), e.allowSlidePrev = r, e.allowSlideNext = s, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
            }

            function w(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function b() {
                let {
                    wrapperEl: e,
                    rtlTranslate: t,
                    enabled: i
                } = this;
                if (!i) return;
                this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = -e.scrollLeft : this.translate = -e.scrollTop, 0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
                let s = this.maxTranslate() - this.minTranslate();
                (0 === s ? 0 : (this.translate - this.minTranslate()) / s) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
            }

            function y(e) {
                p(this, e.target), !this.params.cssMode && ("auto" === this.params.slidesPerView || this.params.autoHeight) && this.update()
            }
            let S = !1;

            function E() {}
            let T = (e, t) => {
                    let i = (0, n.g)(),
                        {
                            params: s,
                            el: r,
                            wrapperEl: a,
                            device: l
                        } = e,
                        o = !!s.nested,
                        d = "on" === t ? "addEventListener" : "removeEventListener";
                    r[d]("pointerdown", e.onTouchStart, {
                        passive: !1
                    }), i[d]("pointermove", e.onTouchMove, {
                        passive: !1,
                        capture: o
                    }), i[d]("pointerup", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointercancel", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointerout", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointerleave", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("contextmenu", e.onTouchEnd, {
                        passive: !0
                    }), (s.preventClicks || s.preventClicksPropagation) && r[d]("click", e.onClick, !0), s.cssMode && a[d]("scroll", e.onScroll), s.updateOnWindowResize ? e[t](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g, !0) : e[t]("observerUpdate", g, !0), r[d]("load", e.onLoad, {
                        capture: !0
                    })
                },
                x = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var C = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopedSlides: null,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };
            let M = {
                    eventsEmitter: {
                        on(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;
                            let r = i ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][r](t)
                            }), s
                        },
                        once(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;

                            function r() {
                                s.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                                for (var i = arguments.length, a = Array(i), l = 0; l < i; l++) a[l] = arguments[l];
                                t.apply(s, a)
                            }
                            return r.__emitterProxy = t, s.on(e, r, i)
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                        },
                        off(e, t) {
                            let i = this;
                            return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
                                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((s, r) => {
                                    (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1)
                                })
                            }), i
                        },
                        emit() {
                            let e, t, i;
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s;
                            for (var r = arguments.length, a = Array(r), l = 0; l < r; l++) a[l] = arguments[l];
                            "string" == typeof a[0] || Array.isArray(a[0]) ? (e = a[0], t = a.slice(1, a.length), i = s) : (e = a[0].events, t = a[0].data, i = a[0].context || s), t.unshift(i);
                            let n = Array.isArray(e) ? e : e.split(" ");
                            return n.forEach(e => {
                                s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(s => {
                                    s.apply(i, [e, ...t])
                                }), s.eventsListeners && s.eventsListeners[e] && s.eventsListeners[e].forEach(e => {
                                    e.apply(i, t)
                                })
                            }), s
                        }
                    },
                    update: {
                        updateSize: function() {
                            let e, t;
                            let i = this.el;
                            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i.clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i.clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt((0, o.l)(i, "padding-left") || 0, 10) - parseInt((0, o.l)(i, "padding-right") || 0, 10), t = t - parseInt((0, o.l)(i, "padding-top") || 0, 10) - parseInt((0, o.l)(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e;
                            let t = this;

                            function i(e) {
                                return t.isHorizontal() ? e : ({
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom"
                                })[e]
                            }

                            function s(e, t) {
                                return parseFloat(e.getPropertyValue(i(t)) || 0)
                            }
                            let r = t.params,
                                {
                                    wrapperEl: a,
                                    slidesEl: l,
                                    size: n,
                                    rtlTranslate: d,
                                    wrongRTL: p
                                } = t,
                                c = t.virtual && r.virtual.enabled,
                                u = c ? t.virtual.slides.length : t.slides.length,
                                h = (0, o.e)(l, `.${t.params.slideClass}, swiper-slide`),
                                f = c ? t.virtual.slides.length : h.length,
                                m = [],
                                v = [],
                                g = [],
                                w = r.slidesOffsetBefore;
                            "function" == typeof w && (w = r.slidesOffsetBefore.call(t));
                            let b = r.slidesOffsetAfter;
                            "function" == typeof b && (b = r.slidesOffsetAfter.call(t));
                            let y = t.snapGrid.length,
                                S = t.slidesGrid.length,
                                E = r.spaceBetween,
                                T = -w,
                                x = 0,
                                C = 0;
                            if (void 0 === n) return;
                            "string" == typeof E && E.indexOf("%") >= 0 ? E = parseFloat(E.replace("%", "")) / 100 * n : "string" == typeof E && (E = parseFloat(E)), t.virtualSize = -E, h.forEach(e => {
                                d ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                            }), r.centeredSlides && r.cssMode && ((0, o.s)(a, "--swiper-centered-offset-before", ""), (0, o.s)(a, "--swiper-centered-offset-after", ""));
                            let M = r.grid && r.grid.rows > 1 && t.grid;
                            M && t.grid.initSlides(f);
                            let P = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter(e => void 0 !== r.breakpoints[e].slidesPerView).length > 0;
                            for (let a = 0; a < f; a += 1) {
                                let l;
                                if (e = 0, h[a] && (l = h[a]), M && t.grid.updateSlide(a, l, f, i), !h[a] || "none" !== (0, o.l)(l, "display")) {
                                    if ("auto" === r.slidesPerView) {
                                        P && (h[a].style[i("width")] = "");
                                        let n = getComputedStyle(l),
                                            d = l.style.transform,
                                            p = l.style.webkitTransform;
                                        if (d && (l.style.transform = "none"), p && (l.style.webkitTransform = "none"), r.roundLengths) e = t.isHorizontal() ? (0, o.f)(l, "width", !0) : (0, o.f)(l, "height", !0);
                                        else {
                                            let t = s(n, "width"),
                                                i = s(n, "padding-left"),
                                                r = s(n, "padding-right"),
                                                a = s(n, "margin-left"),
                                                o = s(n, "margin-right"),
                                                d = n.getPropertyValue("box-sizing");
                                            if (d && "border-box" === d) e = t + a + o;
                                            else {
                                                let {
                                                    clientWidth: s,
                                                    offsetWidth: n
                                                } = l;
                                                e = t + i + r + a + o + (n - s)
                                            }
                                        }
                                        d && (l.style.transform = d), p && (l.style.webkitTransform = p), r.roundLengths && (e = Math.floor(e))
                                    } else e = (n - (r.slidesPerView - 1) * E) / r.slidesPerView, r.roundLengths && (e = Math.floor(e)), h[a] && (h[a].style[i("width")] = `${e}px`);
                                    h[a] && (h[a].swiperSlideSize = e), g.push(e), r.centeredSlides ? (T = T + e / 2 + x / 2 + E, 0 === x && 0 !== a && (T = T - n / 2 - E), 0 === a && (T = T - n / 2 - E), .001 > Math.abs(T) && (T = 0), r.roundLengths && (T = Math.floor(T)), C % r.slidesPerGroup == 0 && m.push(T), v.push(T)) : (r.roundLengths && (T = Math.floor(T)), (C - Math.min(t.params.slidesPerGroupSkip, C)) % t.params.slidesPerGroup == 0 && m.push(T), v.push(T), T = T + e + E), t.virtualSize += e + E, x = e, C += 1
                                }
                            }
                            if (t.virtualSize = Math.max(t.virtualSize, n) + b, d && p && ("slide" === r.effect || "coverflow" === r.effect) && (a.style.width = `${t.virtualSize+E}px`), r.setWrapperSize && (a.style[i("width")] = `${t.virtualSize+E}px`), M && t.grid.updateWrapperSize(e, m, i), !r.centeredSlides) {
                                let e = [];
                                for (let i = 0; i < m.length; i += 1) {
                                    let s = m[i];
                                    r.roundLengths && (s = Math.floor(s)), m[i] <= t.virtualSize - n && e.push(s)
                                }
                                m = e, Math.floor(t.virtualSize - n) - Math.floor(m[m.length - 1]) > 1 && m.push(t.virtualSize - n)
                            }
                            if (c && r.loop) {
                                let e = g[0] + E;
                                if (r.slidesPerGroup > 1) {
                                    let i = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / r.slidesPerGroup),
                                        s = e * r.slidesPerGroup;
                                    for (let e = 0; e < i; e += 1) m.push(m[m.length - 1] + s)
                                }
                                for (let i = 0; i < t.virtual.slidesBefore + t.virtual.slidesAfter; i += 1) 1 === r.slidesPerGroup && m.push(m[m.length - 1] + e), v.push(v[v.length - 1] + e), t.virtualSize += e
                            }
                            if (0 === m.length && (m = [0]), 0 !== E) {
                                let e = t.isHorizontal() && d ? "marginLeft" : i("marginRight");
                                h.filter((e, t) => !r.cssMode || !!r.loop || t !== h.length - 1).forEach(t => {
                                    t.style[e] = `${E}px`
                                })
                            }
                            if (r.centeredSlides && r.centeredSlidesBounds) {
                                let e = 0;
                                g.forEach(t => {
                                    e += t + (E || 0)
                                }), e -= E;
                                let t = e - n;
                                m = m.map(e => e <= 0 ? -w : e > t ? t + b : e)
                            }
                            if (r.centerInsufficientSlides) {
                                let e = 0;
                                if (g.forEach(t => {
                                        e += t + (E || 0)
                                    }), (e -= E) < n) {
                                    let t = (n - e) / 2;
                                    m.forEach((e, i) => {
                                        m[i] = e - t
                                    }), v.forEach((e, i) => {
                                        v[i] = e + t
                                    })
                                }
                            }
                            if (Object.assign(t, {
                                    slides: h,
                                    snapGrid: m,
                                    slidesGrid: v,
                                    slidesSizesGrid: g
                                }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
                                (0, o.s)(a, "--swiper-centered-offset-before", `${-m[0]}px`), (0, o.s)(a, "--swiper-centered-offset-after", `${t.size/2-g[g.length-1]/2}px`);
                                let e = -t.snapGrid[0],
                                    i = -t.slidesGrid[0];
                                t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(e => e + i)
                            }
                            if (f !== u && t.emit("slidesLengthChange"), m.length !== y && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), v.length !== S && t.emit("slidesGridLengthChange"), r.watchSlidesProgress && t.updateSlidesOffset(), !c && !r.cssMode && ("slide" === r.effect || "fade" === r.effect)) {
                                let e = `${r.containerModifierClass}backface-hidden`,
                                    i = t.el.classList.contains(e);
                                f <= r.maxBackfaceHiddenSlides ? i || t.el.classList.add(e) : i && t.el.classList.remove(e)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let t;
                            let i = this,
                                s = [],
                                r = i.virtual && i.params.virtual.enabled,
                                a = 0;
                            "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                            let l = e => r ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
                            if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                                if (i.params.centeredSlides)(i.visibleSlides || []).forEach(e => {
                                    s.push(e)
                                });
                                else
                                    for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                        let e = i.activeIndex + t;
                                        if (e > i.slides.length && !r) break;
                                        s.push(l(e))
                                    }
                            } else s.push(l(i.activeIndex));
                            for (t = 0; t < s.length; t += 1)
                                if (void 0 !== s[t]) {
                                    let e = s[t].offsetHeight;
                                    a = e > a ? e : a
                                }(a || 0 === a) && (i.wrapperEl.style.height = `${a}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides,
                                t = this.isElement ? this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop : 0;
                            for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - this.cssOverflowAdjustment()
                        },
                        updateSlidesProgress: function(e) {
                            void 0 === e && (e = this && this.translate || 0);
                            let t = this.params,
                                {
                                    slides: i,
                                    rtlTranslate: s,
                                    snapGrid: r
                                } = this;
                            if (0 === i.length) return;
                            void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                            let a = -e;
                            s && (a = e), i.forEach(e => {
                                e.classList.remove(t.slideVisibleClass)
                            }), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                            let l = t.spaceBetween;
                            "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * this.size : "string" == typeof l && (l = parseFloat(l));
                            for (let e = 0; e < i.length; e += 1) {
                                let n = i[e],
                                    o = n.swiperSlideOffset;
                                t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                                let d = (a + (t.centeredSlides ? this.minTranslate() : 0) - o) / (n.swiperSlideSize + l),
                                    p = (a - r[0] + (t.centeredSlides ? this.minTranslate() : 0) - o) / (n.swiperSlideSize + l),
                                    c = -(a - o),
                                    u = c + this.slidesSizesGrid[e],
                                    h = c >= 0 && c < this.size - 1 || u > 1 && u <= this.size || c <= 0 && u >= this.size;
                                h && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(e), i[e].classList.add(t.slideVisibleClass)), n.progress = s ? -d : d, n.originalProgress = s ? -p : p
                            }
                        },
                        updateProgress: function(e) {
                            if (void 0 === e) {
                                let t = this.rtlTranslate ? -1 : 1;
                                e = this && this.translate && this.translate * t || 0
                            }
                            let t = this.params,
                                i = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: s,
                                    isBeginning: r,
                                    isEnd: a,
                                    progressLoop: l
                                } = this,
                                n = r,
                                o = a;
                            if (0 === i) s = 0, r = !0, a = !0;
                            else {
                                s = (e - this.minTranslate()) / i;
                                let t = 1 > Math.abs(e - this.minTranslate()),
                                    l = 1 > Math.abs(e - this.maxTranslate());
                                r = t || s <= 0, a = l || s >= 1, t && (s = 0), l && (s = 1)
                            }
                            if (t.loop) {
                                let t = this.getSlideIndexByData(0),
                                    i = this.getSlideIndexByData(this.slides.length - 1),
                                    s = this.slidesGrid[t],
                                    r = this.slidesGrid[i],
                                    a = this.slidesGrid[this.slidesGrid.length - 1],
                                    n = Math.abs(e);
                                (l = n >= s ? (n - s) / a : (n + a - r) / a) > 1 && (l -= 1)
                            }
                            Object.assign(this, {
                                progress: s,
                                progressLoop: l,
                                isBeginning: r,
                                isEnd: a
                            }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e), r && !n && this.emit("reachBeginning toEdge"), a && !o && this.emit("reachEnd toEdge"), (n && !r || o && !a) && this.emit("fromEdge"), this.emit("progress", s)
                        },
                        updateSlidesClasses: function() {
                            let e;
                            let {
                                slides: t,
                                params: i,
                                slidesEl: s,
                                activeIndex: r
                            } = this, a = this.virtual && i.virtual.enabled, l = e => (0, o.e)(s, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
                            if (t.forEach(e => {
                                    e.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass)
                                }), a) {
                                if (i.loop) {
                                    let t = r - this.virtual.slidesBefore;
                                    t < 0 && (t = this.virtual.slides.length + t), t >= this.virtual.slides.length && (t -= this.virtual.slides.length), e = l(`[data-swiper-slide-index="${t}"]`)
                                } else e = l(`[data-swiper-slide-index="${r}"]`)
                            } else e = t[r];
                            if (e) {
                                e.classList.add(i.slideActiveClass);
                                let s = (0, o.m)(e, `.${i.slideClass}, swiper-slide`)[0];
                                i.loop && !s && (s = t[0]), s && s.classList.add(i.slideNextClass);
                                let r = (0, o.o)(e, `.${i.slideClass}, swiper-slide`)[0];
                                i.loop, r && r.classList.add(i.slidePrevClass)
                            }
                            this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            let t, i;
                            let s = this,
                                r = s.rtlTranslate ? s.translate : -s.translate,
                                {
                                    snapGrid: a,
                                    params: l,
                                    activeIndex: n,
                                    realIndex: o,
                                    snapIndex: d
                                } = s,
                                p = e,
                                c = e => {
                                    let t = e - s.virtual.slidesBefore;
                                    return t < 0 && (t = s.virtual.slides.length + t), t >= s.virtual.slides.length && (t -= s.virtual.slides.length), t
                                };
                            if (void 0 === p && (p = function(e) {
                                    let t;
                                    let {
                                        slidesGrid: i,
                                        params: s
                                    } = e, r = e.rtlTranslate ? e.translate : -e.translate;
                                    for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? r >= i[e] && r < i[e + 1] - (i[e + 1] - i[e]) / 2 ? t = e : r >= i[e] && r < i[e + 1] && (t = e + 1) : r >= i[e] && (t = e);
                                    return s.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), t
                                }(s)), a.indexOf(r) >= 0) t = a.indexOf(r);
                            else {
                                let e = Math.min(l.slidesPerGroupSkip, p);
                                t = e + Math.floor((p - e) / l.slidesPerGroup)
                            }
                            if (t >= a.length && (t = a.length - 1), p === n) {
                                t !== d && (s.snapIndex = t, s.emit("snapIndexChange")), s.params.loop && s.virtual && s.params.virtual.enabled && (s.realIndex = c(p));
                                return
                            }
                            i = s.virtual && l.virtual.enabled && l.loop ? c(p) : s.slides[p] ? parseInt(s.slides[p].getAttribute("data-swiper-slide-index") || p, 10) : p, Object.assign(s, {
                                previousSnapIndex: d,
                                snapIndex: t,
                                previousRealIndex: o,
                                realIndex: i,
                                previousIndex: n,
                                activeIndex: p
                            }), s.initialized && u(s), s.emit("activeIndexChange"), s.emit("snapIndexChange"), (s.initialized || s.params.runCallbacksOnInit) && (o !== i && s.emit("realIndexChange"), s.emit("slideChange"))
                        },
                        updateClickedSlide: function(e, t) {
                            let i;
                            let s = this.params,
                                r = e.closest(`.${s.slideClass}, swiper-slide`);
                            !r && this.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
                                !r && e.matches && e.matches(`.${s.slideClass}, swiper-slide`) && (r = e)
                            });
                            let a = !1;
                            if (r) {
                                for (let e = 0; e < this.slides.length; e += 1)
                                    if (this.slides[e] === r) {
                                        a = !0, i = e;
                                        break
                                    }
                            }
                            if (r && a) this.clickedSlide = r, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : this.clickedIndex = i;
                            else {
                                this.clickedSlide = void 0, this.clickedIndex = void 0;
                                return
                            }
                            s.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e) {
                            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                            let {
                                params: t,
                                rtlTranslate: i,
                                translate: s,
                                wrapperEl: r
                            } = this;
                            if (t.virtualTranslate) return i ? -s : s;
                            if (t.cssMode) return s;
                            let a = (0, o.h)(r, e);
                            return a += this.cssOverflowAdjustment(), i && (a = -a), a || 0
                        },
                        setTranslate: function(e, t) {
                            let {
                                rtlTranslate: i,
                                params: s,
                                wrapperEl: r,
                                progress: a
                            } = this, l = 0, n = 0;
                            this.isHorizontal() ? l = i ? -e : e : n = e, s.roundLengths && (l = Math.floor(l), n = Math.floor(n)), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? l : n, s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -l : -n : s.virtualTranslate || (this.isHorizontal() ? l -= this.cssOverflowAdjustment() : n -= this.cssOverflowAdjustment(), r.style.transform = `translate3d(${l}px, ${n}px, 0px)`);
                            let o = this.maxTranslate() - this.minTranslate();
                            (0 === o ? 0 : (e - this.minTranslate()) / o) !== a && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e, t, i, s, r) {
                            let a;
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                            let l = this,
                                {
                                    params: n,
                                    wrapperEl: d
                                } = l;
                            if (l.animating && n.preventInteractionOnTransition) return !1;
                            let p = l.minTranslate(),
                                c = l.maxTranslate();
                            if (a = s && e > p ? p : s && e < c ? c : e, l.updateProgress(a), n.cssMode) {
                                let e = l.isHorizontal();
                                if (0 === t) d[e ? "scrollLeft" : "scrollTop"] = -a;
                                else {
                                    if (!l.support.smoothScroll) return (0, o.p)({
                                        swiper: l,
                                        targetPosition: -a,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    d.scrollTo({
                                        [e ? "left" : "top"]: -a,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (l.setTransition(0), l.setTranslate(a), i && (l.emit("beforeTransitionStart", t, r), l.emit("transitionEnd"))) : (l.setTransition(t), l.setTranslate(a), i && (l.emit("beforeTransitionStart", t, r), l.emit("transitionStart")), l.animating || (l.animating = !0, l.onTranslateToWrapperTransitionEnd || (l.onTranslateToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.onTranslateToWrapperTransitionEnd = null, delete l.onTranslateToWrapperTransitionEnd, i && l.emit("transitionEnd"))
                            }), l.wrapperEl.addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            this.params.cssMode || (this.wrapperEl.style.transitionDuration = `${e}ms`, this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), this.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            let {
                                params: i
                            } = this;
                            i.cssMode || (i.autoHeight && this.updateAutoHeight(), h({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            let {
                                params: i
                            } = this;
                            this.animating = !1, i.cssMode || (this.setTransition(0), h({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e, t, i, s, r) {
                            let a;
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "string" == typeof e && (e = parseInt(e, 10));
                            let l = this,
                                n = e;
                            n < 0 && (n = 0);
                            let {
                                params: d,
                                snapGrid: p,
                                slidesGrid: c,
                                previousIndex: u,
                                activeIndex: h,
                                rtlTranslate: f,
                                wrapperEl: m,
                                enabled: v
                            } = l;
                            if (l.animating && d.preventInteractionOnTransition || !v && !s && !r) return !1;
                            let g = Math.min(l.params.slidesPerGroupSkip, n),
                                w = g + Math.floor((n - g) / l.params.slidesPerGroup);
                            w >= p.length && (w = p.length - 1);
                            let b = -p[w];
                            if (d.normalizeSlideIndex)
                                for (let e = 0; e < c.length; e += 1) {
                                    let t = -Math.floor(100 * b),
                                        i = Math.floor(100 * c[e]),
                                        s = Math.floor(100 * c[e + 1]);
                                    void 0 !== c[e + 1] ? t >= i && t < s - (s - i) / 2 ? n = e : t >= i && t < s && (n = e + 1) : t >= i && (n = e)
                                }
                            if (l.initialized && n !== h && (!l.allowSlideNext && (f ? b > l.translate && b > l.minTranslate() : b < l.translate && b < l.minTranslate()) || !l.allowSlidePrev && b > l.translate && b > l.maxTranslate() && (h || 0) !== n)) return !1;
                            if (n !== (u || 0) && i && l.emit("beforeSlideChangeStart"), l.updateProgress(b), a = n > h ? "next" : n < h ? "prev" : "reset", f && -b === l.translate || !f && b === l.translate) return l.updateActiveIndex(n), d.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), "slide" !== d.effect && l.setTranslate(b), "reset" !== a && (l.transitionStart(i, a), l.transitionEnd(i, a)), !1;
                            if (d.cssMode) {
                                let e = l.isHorizontal(),
                                    i = f ? b : -b;
                                if (0 === t) {
                                    let t = l.virtual && l.params.virtual.enabled;
                                    t && (l.wrapperEl.style.scrollSnapType = "none", l._immediateVirtual = !0), t && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0 ? (l._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                                        m[e ? "scrollLeft" : "scrollTop"] = i
                                    })) : m[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame(() => {
                                        l.wrapperEl.style.scrollSnapType = "", l._immediateVirtual = !1
                                    })
                                } else {
                                    if (!l.support.smoothScroll) return (0, o.p)({
                                        swiper: l,
                                        targetPosition: i,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    m.scrollTo({
                                        [e ? "left" : "top"]: i,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return l.setTransition(t), l.setTranslate(b), l.updateActiveIndex(n), l.updateSlidesClasses(), l.emit("beforeTransitionStart", t, s), l.transitionStart(i, a), 0 === t ? l.transitionEnd(i, a) : l.animating || (l.animating = !0, l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function(e) {
                                l && !l.destroyed && e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.onSlideToWrapperTransitionEnd = null, delete l.onSlideToWrapperTransitionEnd, l.transitionEnd(i, a))
                            }), l.wrapperEl.addEventListener("transitionend", l.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e, t, i, s) {
                            if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "string" == typeof e) {
                                let t = parseInt(e, 10);
                                e = t
                            }
                            let r = e;
                            return this.params.loop && (this.virtual && this.params.virtual.enabled ? r += this.virtual.slidesBefore : r = this.getSlideIndexByData(r)), this.slideTo(r, t, i, s)
                        },
                        slideNext: function(e, t, i) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                            let s = this,
                                {
                                    enabled: r,
                                    params: a,
                                    animating: l
                                } = s;
                            if (!r) return s;
                            let n = a.slidesPerGroup;
                            "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (n = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                            let o = s.activeIndex < a.slidesPerGroupSkip ? 1 : n,
                                d = s.virtual && a.virtual.enabled;
                            if (a.loop) {
                                if (l && !d && a.loopPreventsSliding) return !1;
                                if (s.loopFix({
                                        direction: "next"
                                    }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && a.cssMode) return requestAnimationFrame(() => {
                                    s.slideTo(s.activeIndex + o, e, t, i)
                                }), !0
                            }
                            return a.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i)
                        },
                        slidePrev: function(e, t, i) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                            let s = this,
                                {
                                    params: r,
                                    snapGrid: a,
                                    slidesGrid: l,
                                    rtlTranslate: n,
                                    enabled: o,
                                    animating: d
                                } = s;
                            if (!o) return s;
                            let p = s.virtual && r.virtual.enabled;
                            if (r.loop) {
                                if (d && !p && r.loopPreventsSliding) return !1;
                                s.loopFix({
                                    direction: "prev"
                                }), s._clientLeft = s.wrapperEl.clientLeft
                            }
                            let c = n ? s.translate : -s.translate;

                            function u(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let h = u(c),
                                f = a.map(e => u(e)),
                                m = a[f.indexOf(h) - 1];
                            if (void 0 === m && r.cssMode) {
                                let e;
                                a.forEach((t, i) => {
                                    h >= t && (e = i)
                                }), void 0 !== e && (m = a[e > 0 ? e - 1 : e])
                            }
                            let v = 0;
                            if (void 0 !== m && ((v = l.indexOf(m)) < 0 && (v = s.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (v = Math.max(v = v - s.slidesPerViewDynamic("previous", !0) + 1, 0))), r.rewind && s.isBeginning) {
                                let r = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                                return s.slideTo(r, e, t, i)
                            }
                            return r.loop && 0 === s.activeIndex && r.cssMode ? (requestAnimationFrame(() => {
                                s.slideTo(v, e, t, i)
                            }), !0) : s.slideTo(v, e, t, i)
                        },
                        slideReset: function(e, t, i) {
                            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
                        },
                        slideToClosest: function(e, t, i, s) {
                            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
                            let r = this.activeIndex,
                                a = Math.min(this.params.slidesPerGroupSkip, r),
                                l = a + Math.floor((r - a) / this.params.slidesPerGroup),
                                n = this.rtlTranslate ? this.translate : -this.translate;
                            if (n >= this.snapGrid[l]) {
                                let e = this.snapGrid[l],
                                    t = this.snapGrid[l + 1];
                                n - e > (t - e) * s && (r += this.params.slidesPerGroup)
                            } else {
                                let e = this.snapGrid[l - 1],
                                    t = this.snapGrid[l];
                                n - e <= (t - e) * s && (r -= this.params.slidesPerGroup)
                            }
                            return r = Math.min(r = Math.max(r, 0), this.slidesGrid.length - 1), this.slideTo(r, e, t, i)
                        },
                        slideToClickedSlide: function() {
                            let e;
                            let t = this,
                                {
                                    params: i,
                                    slidesEl: s
                                } = t,
                                r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                                a = t.clickedIndex,
                                l = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
                            if (i.loop) {
                                if (t.animating) return;
                                e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), i.centeredSlides ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), a = t.getSlideIndex((0, o.e)(s, `${l}[data-swiper-slide-index="${e}"]`)[0]), (0, o.n)(() => {
                                    t.slideTo(a)
                                })) : t.slideTo(a) : a > t.slides.length - r ? (t.loopFix(), a = t.getSlideIndex((0, o.e)(s, `${l}[data-swiper-slide-index="${e}"]`)[0]), (0, o.n)(() => {
                                    t.slideTo(a)
                                })) : t.slideTo(a)
                            } else t.slideTo(a)
                        }
                    },
                    loop: {
                        loopCreate: function(e) {
                            let {
                                params: t,
                                slidesEl: i
                            } = this;
                            if (!t.loop || this.virtual && this.params.virtual.enabled) return;
                            let s = (0, o.e)(i, `.${t.slideClass}, swiper-slide`);
                            s.forEach((e, t) => {
                                e.setAttribute("data-swiper-slide-index", t)
                            }), this.loopFix({
                                slideRealIndex: e,
                                direction: t.centeredSlides ? void 0 : "next"
                            })
                        },
                        loopFix: function(e) {
                            let {
                                slideRealIndex: t,
                                slideTo: i = !0,
                                direction: s,
                                setTranslate: r,
                                activeSlideIndex: a,
                                byController: l,
                                byMousewheel: n
                            } = void 0 === e ? {} : e, o = this;
                            if (!o.params.loop) return;
                            o.emit("beforeLoopFix");
                            let {
                                slides: d,
                                allowSlidePrev: p,
                                allowSlideNext: c,
                                slidesEl: u,
                                params: h
                            } = o;
                            if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && h.virtual.enabled) {
                                i && (h.centeredSlides || 0 !== o.snapIndex ? h.centeredSlides && o.snapIndex < h.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = p, o.allowSlideNext = c, o.emit("loopFix");
                                return
                            }
                            let f = "auto" === h.slidesPerView ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(h.slidesPerView, 10)),
                                m = h.loopedSlides || f;
                            m % h.slidesPerGroup != 0 && (m += h.slidesPerGroup - m % h.slidesPerGroup), o.loopedSlides = m;
                            let v = [],
                                g = [],
                                w = o.activeIndex;
                            void 0 === a ? a = o.getSlideIndex(o.slides.filter(e => e.classList.contains(h.slideActiveClass))[0]) : w = a;
                            let b = "next" === s || !s,
                                y = "prev" === s || !s,
                                S = 0,
                                E = 0;
                            if (a < m) {
                                S = Math.max(m - a, h.slidesPerGroup);
                                for (let e = 0; e < m - a; e += 1) {
                                    let t = e - Math.floor(e / d.length) * d.length;
                                    v.push(d.length - t - 1)
                                }
                            } else if (a > o.slides.length - 2 * m) {
                                E = Math.max(a - (o.slides.length - 2 * m), h.slidesPerGroup);
                                for (let e = 0; e < E; e += 1) {
                                    let t = e - Math.floor(e / d.length) * d.length;
                                    g.push(t)
                                }
                            }
                            if (y && v.forEach(e => {
                                    o.slides[e].swiperLoopMoveDOM = !0, u.prepend(o.slides[e]), o.slides[e].swiperLoopMoveDOM = !1
                                }), b && g.forEach(e => {
                                    o.slides[e].swiperLoopMoveDOM = !0, u.append(o.slides[e]), o.slides[e].swiperLoopMoveDOM = !1
                                }), o.recalcSlides(), "auto" === h.slidesPerView && o.updateSlides(), h.watchSlidesProgress && o.updateSlidesOffset(), i) {
                                if (v.length > 0 && y) {
                                    if (void 0 === t) {
                                        let e = o.slidesGrid[w],
                                            t = o.slidesGrid[w + S],
                                            i = t - e;
                                        n ? o.setTranslate(o.translate - i) : (o.slideTo(w + S, 0, !1, !0), r && (o.touches[o.isHorizontal() ? "startX" : "startY"] += i, o.touchEventsData.currentTranslate = o.translate))
                                    } else r && (o.slideToLoop(t, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate)
                                } else if (g.length > 0 && b) {
                                    if (void 0 === t) {
                                        let e = o.slidesGrid[w],
                                            t = o.slidesGrid[w - E],
                                            i = t - e;
                                        n ? o.setTranslate(o.translate - i) : (o.slideTo(w - E, 0, !1, !0), r && (o.touches[o.isHorizontal() ? "startX" : "startY"] += i, o.touchEventsData.currentTranslate = o.translate))
                                    } else o.slideToLoop(t, 0, !1, !0)
                                }
                            }
                            if (o.allowSlidePrev = p, o.allowSlideNext = c, o.controller && o.controller.control && !l) {
                                let e = {
                                    slideRealIndex: t,
                                    direction: s,
                                    setTranslate: r,
                                    activeSlideIndex: a,
                                    byController: !0
                                };
                                Array.isArray(o.controller.control) ? o.controller.control.forEach(t => {
                                    !t.destroyed && t.params.loop && t.loopFix({ ...e,
                                        slideTo: t.params.slidesPerView === h.slidesPerView && i
                                    })
                                }) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({ ...e,
                                    slideTo: o.controller.control.params.slidesPerView === h.slidesPerView && i
                                })
                            }
                            o.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                params: e,
                                slidesEl: t
                            } = this;
                            if (!e.loop || this.virtual && this.params.virtual.enabled) return;
                            this.recalcSlides();
                            let i = [];
                            this.slides.forEach(e => {
                                let t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                                i[t] = e
                            }), this.slides.forEach(e => {
                                e.removeAttribute("data-swiper-slide-index")
                            }), i.forEach(e => {
                                t.append(e)
                            }), this.recalcSlides(), this.slideTo(this.realIndex, 0)
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            let t = this;
                            if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            let i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            t.isElement && (t.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                                t.__preventObserver__ = !1
                            })
                        },
                        unsetGrabCursor: function() {
                            let e = this;
                            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                                e.__preventObserver__ = !1
                            }))
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let e = (0, n.g)(),
                                {
                                    params: t
                                } = this;
                            this.onTouchStart = f.bind(this), this.onTouchMove = m.bind(this), this.onTouchEnd = v.bind(this), t.cssMode && (this.onScroll = b.bind(this)), this.onClick = w.bind(this), this.onLoad = y.bind(this), S || (e.addEventListener("touchstart", E), S = !0), T(this, "on")
                        },
                        detachEvents: function() {
                            T(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    realIndex: t,
                                    initialized: i,
                                    params: s,
                                    el: r
                                } = e,
                                a = s.breakpoints;
                            if (!a || a && 0 === Object.keys(a).length) return;
                            let l = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                            if (!l || e.currentBreakpoint === l) return;
                            let n = l in a ? a[l] : void 0,
                                d = n || e.originalParams,
                                p = x(e, s),
                                c = x(e, d),
                                u = s.enabled;
                            p && !c ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !p && c && (r.classList.add(`${s.containerModifierClass}grid`), (d.grid.fill && "column" === d.grid.fill || !d.grid.fill && "column" === s.grid.fill) && r.classList.add(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
                                if (void 0 === d[t]) return;
                                let i = s[t] && s[t].enabled,
                                    r = d[t] && d[t].enabled;
                                i && !r && e[t].disable(), !i && r && e[t].enable()
                            });
                            let h = d.direction && d.direction !== s.direction,
                                f = s.loop && (d.slidesPerView !== s.slidesPerView || h),
                                m = s.loop;
                            h && i && e.changeDirection(), (0, o.q)(e.params, d);
                            let v = e.params.enabled,
                                g = e.params.loop;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), u && !v ? e.disable() : !u && v && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", d), i && (f ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !m && g ? (e.loopCreate(t), e.updateSlides()) : m && !g && e.loopDestroy()), e.emit("breakpoint", d)
                        },
                        getBreakpoint: function(e, t, i) {
                            if (void 0 === t && (t = "window"), !e || "container" === t && !i) return;
                            let s = !1,
                                r = (0, n.a)(),
                                a = "window" === t ? r.innerHeight : i.clientHeight,
                                l = Object.keys(e).map(e => {
                                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                                        let t = parseFloat(e.substr(1));
                                        return {
                                            value: a * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                });
                            l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let e = 0; e < l.length; e += 1) {
                                let {
                                    point: a,
                                    value: n
                                } = l[e];
                                "window" === t ? r.matchMedia(`(min-width: ${n}px)`).matches && (s = a) : n <= i.clientWidth && (s = a)
                            }
                            return s || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let {
                                isLocked: e,
                                params: t
                            } = this, {
                                slidesOffsetBefore: i
                            } = t;
                            if (i) {
                                let e = this.slides.length - 1,
                                    t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                                this.isLocked = this.size > t
                            } else this.isLocked = 1 === this.snapGrid.length;
                            !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked), !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked), e && e !== this.isLocked && (this.isEnd = !1), e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: e,
                                params: t,
                                rtl: i,
                                el: s,
                                device: r
                            } = this, a = function(e, t) {
                                let i = [];
                                return e.forEach(e => {
                                    "object" == typeof e ? Object.keys(e).forEach(s => {
                                        e[s] && i.push(t + s)
                                    }) : "string" == typeof e && i.push(t + e)
                                }), i
                            }(["initialized", t.direction, {
                                "free-mode": this.params.freeMode && t.freeMode.enabled
                            }, {
                                autoheight: t.autoHeight
                            }, {
                                rtl: i
                            }, {
                                grid: t.grid && t.grid.rows > 1
                            }, {
                                "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                            }, {
                                android: r.android
                            }, {
                                ios: r.ios
                            }, {
                                "css-mode": t.cssMode
                            }, {
                                centered: t.cssMode && t.centeredSlides
                            }, {
                                "watch-progress": t.watchSlidesProgress
                            }], t.containerModifierClass);
                            e.push(...a), s.classList.add(...e), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                el: e,
                                classNames: t
                            } = this;
                            e.classList.remove(...t), this.emitContainerClasses()
                        }
                    }
                },
                P = {};
            class L {
                constructor() {
                    let e, t;
                    for (var i, s = arguments.length, l = Array(s), p = 0; p < s; p++) l[p] = arguments[p];
                    1 === l.length && l[0].constructor && "Object" === Object.prototype.toString.call(l[0]).slice(8, -1) ? t = l[0] : [e, t] = l, t || (t = {}), t = (0, o.q)({}, t), e && !t.el && (t.el = e);
                    let c = (0, n.g)();
                    if (t.el && "string" == typeof t.el && c.querySelectorAll(t.el).length > 1) {
                        let e = [];
                        return c.querySelectorAll(t.el).forEach(i => {
                            let s = (0, o.q)({}, t, {
                                el: i
                            });
                            e.push(new L(s))
                        }), e
                    }
                    let u = this;
                    u.__swiper__ = !0, u.support = d(), u.device = (i = {
                        userAgent: t.userAgent
                    }, r || (r = function(e) {
                        let {
                            userAgent: t
                        } = void 0 === e ? {} : e, i = d(), s = (0, n.a)(), r = s.navigator.platform, a = t || s.navigator.userAgent, l = {
                            ios: !1,
                            android: !1
                        }, o = s.screen.width, p = s.screen.height, c = a.match(/(Android);?[\s\/]+([\d.]+)?/), u = a.match(/(iPad).*OS\s([\d_]+)/), h = a.match(/(iPod)(.*OS\s([\d_]+))?/), f = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/), m = "MacIntel" === r;
                        return !u && m && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${p}`) >= 0 && ((u = a.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]), m = !1), c && "Win32" !== r && (l.os = "android", l.android = !0), (u || f || h) && (l.os = "ios", l.ios = !0), l
                    }(i)), r), u.browser = (a || (a = function() {
                        let e = (0, n.a)(),
                            t = !1;

                        function i() {
                            let t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                        }
                        if (i()) {
                            let i = String(e.navigator.userAgent);
                            if (i.includes("Version/")) {
                                let [e, s] = i.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                                t = e < 16 || 16 === e && s < 2
                            }
                        }
                        return {
                            isSafari: t || i(),
                            needPerspectiveFix: t,
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                        }
                    }()), a), u.eventsListeners = {}, u.eventsAnyListeners = [], u.modules = [...u.__modules__], t.modules && Array.isArray(t.modules) && u.modules.push(...t.modules);
                    let h = {};
                    u.modules.forEach(e => {
                        var i;
                        e({
                            params: t,
                            swiper: u,
                            extendParams: (i = t, function(e) {
                                void 0 === e && (e = {});
                                let t = Object.keys(e)[0],
                                    s = e[t];
                                if ("object" != typeof s || null === s || (!0 === i[t] && (i[t] = {
                                        enabled: !0
                                    }), "navigation" === t && i[t] && i[t].enabled && !i[t].prevEl && !i[t].nextEl && (i[t].auto = !0), ["pagination", "scrollbar"].indexOf(t) >= 0 && i[t] && i[t].enabled && !i[t].el && (i[t].auto = !0), !(t in i && "enabled" in s))) {
                                    (0, o.q)(h, e);
                                    return
                                }
                                "object" != typeof i[t] || "enabled" in i[t] || (i[t].enabled = !0), i[t] || (i[t] = {
                                    enabled: !1
                                }), (0, o.q)(h, e)
                            }),
                            on: u.on.bind(u),
                            once: u.once.bind(u),
                            off: u.off.bind(u),
                            emit: u.emit.bind(u)
                        })
                    });
                    let f = (0, o.q)({}, C, h);
                    return u.params = (0, o.q)({}, f, P, t), u.originalParams = (0, o.q)({}, u.params), u.passedParams = (0, o.q)({}, t), u.params && u.params.on && Object.keys(u.params.on).forEach(e => {
                        u.on(e, u.params.on[e])
                    }), u.params && u.params.onAny && u.onAny(u.params.onAny), Object.assign(u, {
                        enabled: u.params.enabled,
                        el: e,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === u.params.direction,
                        isVertical: () => "vertical" === u.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        cssOverflowAdjustment() {
                            return 8388608 * Math.trunc(this.translate / 8388608)
                        },
                        allowSlideNext: u.params.allowSlideNext,
                        allowSlidePrev: u.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: u.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            evCache: []
                        },
                        allowClick: !0,
                        allowTouchMove: u.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), u.emit("_swiper"), u.params.init && u.init(), u
                }
                getSlideIndex(e) {
                    let {
                        slidesEl: t,
                        params: i
                    } = this, s = (0, o.e)(t, `.${i.slideClass}, swiper-slide`), r = (0, o.g)(s[0]);
                    return (0, o.g)(e) - r
                }
                getSlideIndexByData(e) {
                    return this.getSlideIndex(this.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0])
                }
                recalcSlides() {
                    let {
                        slidesEl: e,
                        params: t
                    } = this;
                    this.slides = (0, o.e)(e, `.${t.slideClass}, swiper-slide`)
                }
                enable() {
                    this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"))
                }
                disable() {
                    this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"))
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let i = this.minTranslate(),
                        s = this.maxTranslate(),
                        r = (s - i) * e + i;
                    this.translateTo(r, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.forEach(i => {
                        let s = e.getSlideClasses(i);
                        t.push({
                            slideEl: i,
                            classNames: s
                        }), e.emit("_slideClass", i, s)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    let {
                        params: i,
                        slides: s,
                        slidesGrid: r,
                        slidesSizesGrid: a,
                        size: l,
                        activeIndex: n
                    } = this, o = 1;
                    if ("number" == typeof i.slidesPerView) return i.slidesPerView;
                    if (i.centeredSlides) {
                        let e, t = s[n] ? s[n].swiperSlideSize : 0;
                        for (let i = n + 1; i < s.length; i += 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > l && (e = !0));
                        for (let i = n - 1; i >= 0; i -= 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > l && (e = !0))
                    } else if ("current" === e)
                        for (let e = n + 1; e < s.length; e += 1) {
                            let i = t ? r[e] + a[e] - r[n] < l : r[e] - r[n] < l;
                            i && (o += 1)
                        } else
                            for (let e = n - 1; e >= 0; e -= 1) {
                                let t = r[n] - r[e] < l;
                                t && (o += 1)
                            }
                    return o
                }
                update() {
                    let e;
                    let t = this;
                    if (!t || t.destroyed) return;
                    let {
                        snapGrid: i,
                        params: s
                    } = t;

                    function r() {
                        let e = t.rtlTranslate ? -1 * t.translate : t.translate,
                            i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    if (s.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                            e.complete && p(t, e)
                        }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) r(), s.autoHeight && t.updateAutoHeight();
                    else {
                        if (("auto" === s.slidesPerView || s.slidesPerView > 1) && t.isEnd && !s.centeredSlides) {
                            let i = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
                            e = t.slideTo(i.length - 1, 0, !1, !0)
                        } else e = t.slideTo(t.activeIndex, 0, !1, !0);
                        e || r()
                    }
                    s.watchOverflow && i !== t.snapGrid && t.checkOverflow(), t.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    let i = this.params.direction;
                    return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.el.classList.remove(`${this.params.containerModifierClass}${i}`), this.el.classList.add(`${this.params.containerModifierClass}${e}`), this.emitContainerClasses(), this.params.direction = e, this.slides.forEach(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), this.emit("changeDirection"), t && this.update()), this
                }
                changeLanguageDirection(e) {
                    (!this.rtl || "rtl" !== e) && (this.rtl || "ltr" !== e) && (this.rtl = "rtl" === e, this.rtlTranslate = "horizontal" === this.params.direction && this.rtl, this.rtl ? (this.el.classList.add(`${this.params.containerModifierClass}rtl`), this.el.dir = "rtl") : (this.el.classList.remove(`${this.params.containerModifierClass}rtl`), this.el.dir = "ltr"), this.update())
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let i = e || t.params.el;
                    if ("string" == typeof i && (i = document.querySelector(i)), !i) return !1;
                    i.swiper = t, i.parentNode && i.parentNode.host && "SWIPER-CONTAINER" === i.parentNode.host.nodeName && (t.isElement = !0);
                    let s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        r = (() => {
                            if (i && i.shadowRoot && i.shadowRoot.querySelector) {
                                let e = i.shadowRoot.querySelector(s());
                                return e
                            }
                            return (0, o.e)(i, s())[0]
                        })();
                    return !r && t.params.createElements && (r = (0, o.c)("div", t.params.wrapperClass), i.append(r), (0, o.e)(i, `.${t.params.slideClass}`).forEach(e => {
                        r.append(e)
                    })), Object.assign(t, {
                        el: i,
                        wrapperEl: r,
                        slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : r,
                        hostEl: t.isElement ? i.parentNode.host : i,
                        mounted: !0,
                        rtl: "rtl" === i.dir.toLowerCase() || "rtl" === (0, o.l)(i, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === (0, o.l)(i, "direction")),
                        wrongRTL: "-webkit-box" === (0, o.l)(r, "display")
                    }), !0
                }
                init(e) {
                    let t = this;
                    if (t.initialized) return t;
                    let i = t.mount(e);
                    if (!1 === i) return t;
                    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                    let s = [...t.el.querySelectorAll('[loading="lazy"]')];
                    return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach(e => {
                        e.complete ? p(t, e) : e.addEventListener("load", e => {
                            p(t, e.target)
                        })
                    }), u(t), t.initialized = !0, u(t), t.emit("init"), t.emit("afterInit"), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    let i = this,
                        {
                            params: s,
                            el: r,
                            wrapperEl: a,
                            slides: l
                        } = i;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttribute("style"), a.removeAttribute("style"), l && l.length && l.forEach(e => {
                        e.classList.remove(s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                        i.off(e)
                    }), !1 !== e && (i.el.swiper = null, (0, o.r)(i)), i.destroyed = !0), null
                }
                static extendDefaults(e) {
                    (0, o.q)(P, e)
                }
                static get extendedDefaults() {
                    return P
                }
                static get defaults() {
                    return C
                }
                static installModule(e) {
                    L.prototype.__modules__ || (L.prototype.__modules__ = []);
                    let t = L.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? e.forEach(e => L.installModule(e)) : L.installModule(e), L
                }
            }
            Object.keys(M).forEach(e => {
                Object.keys(M[e]).forEach(t => {
                    L.prototype[t] = M[e][t]
                })
            }), L.use([function(e) {
                let {
                    swiper: t,
                    on: i,
                    emit: s
                } = e, r = (0, n.a)(), a = null, l = null, o = () => {
                    t && !t.destroyed && t.initialized && (s("beforeResize"), s("resize"))
                }, d = () => {
                    t && !t.destroyed && t.initialized && (a = new ResizeObserver(e => {
                        l = r.requestAnimationFrame(() => {
                            let {
                                width: i,
                                height: s
                            } = t, r = i, a = s;
                            e.forEach(e => {
                                let {
                                    contentBoxSize: i,
                                    contentRect: s,
                                    target: l
                                } = e;
                                l && l !== t.el || (r = s ? s.width : (i[0] || i).inlineSize, a = s ? s.height : (i[0] || i).blockSize)
                            }), (r !== i || a !== s) && o()
                        })
                    })).observe(t.el)
                }, p = () => {
                    l && r.cancelAnimationFrame(l), a && a.unobserve && t.el && (a.unobserve(t.el), a = null)
                }, c = () => {
                    t && !t.destroyed && t.initialized && s("orientationchange")
                };
                i("init", () => {
                    if (t.params.resizeObserver && void 0 !== r.ResizeObserver) {
                        d();
                        return
                    }
                    r.addEventListener("resize", o), r.addEventListener("orientationchange", c)
                }), i("destroy", () => {
                    p(), r.removeEventListener("resize", o), r.removeEventListener("orientationchange", c)
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    on: s,
                    emit: r
                } = e, a = [], l = (0, n.a)(), d = function(e, i) {
                    void 0 === i && (i = {});
                    let s = l.MutationObserver || l.WebkitMutationObserver,
                        n = new s(e => {
                            if (t.__preventObserver__) return;
                            if (1 === e.length) {
                                r("observerUpdate", e[0]);
                                return
                            }
                            let i = function() {
                                r("observerUpdate", e[0])
                            };
                            l.requestAnimationFrame ? l.requestAnimationFrame(i) : l.setTimeout(i, 0)
                        });
                    n.observe(e, {
                        attributes: void 0 === i.attributes || i.attributes,
                        childList: void 0 === i.childList || i.childList,
                        characterData: void 0 === i.characterData || i.characterData
                    }), a.push(n)
                };
                i({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), s("init", () => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            let e = (0, o.a)(t.hostEl);
                            for (let t = 0; t < e.length; t += 1) d(e[t])
                        }
                        d(t.hostEl, {
                            childList: t.params.observeSlideChildren
                        }), d(t.wrapperEl, {
                            attributes: !1
                        })
                    }
                }), s("destroy", () => {
                    a.forEach(e => {
                        e.disconnect()
                    }), a.splice(0, a.length)
                })
            }]);
            let k = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopedSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideNextClass", "slidePrevClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

            function O(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
            }

            function A(e, t) {
                let i = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : O(t[i]) && O(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : A(e[i], t[i]) : e[i] = t[i]
                })
            }

            function _(e) {
                return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
            }

            function z(e) {
                return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
            }

            function I(e) {
                return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
            }

            function $(e) {
                void 0 === e && (e = "");
                let t = e.split(" ").map(e => e.trim()).filter(e => !!e),
                    i = [];
                return t.forEach(e => {
                    0 > i.indexOf(e) && i.push(e)
                }), i.join(" ")
            }
            let D = e => {
                e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
            };

            function G() {
                return (G = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function N(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }

            function B(e, t) {
                return "undefined" == typeof window ? (0, l.useEffect)(e, t) : (0, l.useLayoutEffect)(e, t)
            }
            let F = (0, l.createContext)(null),
                j = (0, l.createContext)(null),
                V = (0, l.forwardRef)(function(e, t) {
                    var i;
                    let {
                        className: s,
                        tag: r = "div",
                        wrapperTag: a = "div",
                        children: n,
                        onSwiper: o,
                        ...d
                    } = void 0 === e ? {} : e, p = !1, [c, u] = (0, l.useState)("swiper"), [h, f] = (0, l.useState)(null), [m, v] = (0, l.useState)(!1), g = (0, l.useRef)(!1), w = (0, l.useRef)(null), b = (0, l.useRef)(null), y = (0, l.useRef)(null), S = (0, l.useRef)(null), E = (0, l.useRef)(null), T = (0, l.useRef)(null), x = (0, l.useRef)(null), M = (0, l.useRef)(null), {
                        params: P,
                        passedParams: F,
                        rest: V,
                        events: H
                    } = function(e, t) {
                        void 0 === e && (e = {}), void 0 === t && (t = !0);
                        let i = {
                                on: {}
                            },
                            s = {},
                            r = {};
                        A(i, C), i._emitClasses = !0, i.init = !1;
                        let a = {},
                            l = k.map(e => e.replace(/_/, "")),
                            n = Object.assign({}, e);
                        return Object.keys(n).forEach(n => {
                            void 0 !== e[n] && (l.indexOf(n) >= 0 ? O(e[n]) ? (i[n] = {}, r[n] = {}, A(i[n], e[n]), A(r[n], e[n])) : (i[n] = e[n], r[n] = e[n]) : 0 === n.search(/on[A-Z]/) && "function" == typeof e[n] ? t ? s[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n] : i.on[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n] : a[n] = e[n])
                        }), ["navigation", "pagination", "scrollbar"].forEach(e => {
                            !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e]
                        }), {
                            params: i,
                            passedParams: r,
                            rest: a,
                            events: s
                        }
                    }(d), {
                        slides: q,
                        slots: R
                    } = function(e) {
                        let t = [],
                            i = {
                                "container-start": [],
                                "container-end": [],
                                "wrapper-start": [],
                                "wrapper-end": []
                            };
                        return l.Children.toArray(e).forEach(e => {
                            if (N(e)) t.push(e);
                            else if (e.props && e.props.slot && i[e.props.slot]) i[e.props.slot].push(e);
                            else if (e.props && e.props.children) {
                                let s = function e(t) {
                                    let i = [];
                                    return l.Children.toArray(t).forEach(t => {
                                        N(t) ? i.push(t) : t.props && t.props.children && e(t.props.children).forEach(e => i.push(e))
                                    }), i
                                }(e.props.children);
                                s.length > 0 ? s.forEach(e => t.push(e)) : i["container-end"].push(e)
                            } else i["container-end"].push(e)
                        }), {
                            slides: t,
                            slots: i
                        }
                    }(n), W = () => {
                        v(!m)
                    };
                    Object.assign(P.on, {
                        _containerClasses(e, t) {
                            u(t)
                        }
                    });
                    let X = () => {
                        Object.assign(P.on, H), p = !0;
                        let e = { ...P
                        };
                        if (delete e.wrapperClass, b.current = new L(e), b.current.virtual && b.current.params.virtual.enabled) {
                            b.current.virtual.slides = q;
                            let e = {
                                cache: !1,
                                slides: q,
                                renderExternal: f,
                                renderExternalUpdate: !1
                            };
                            A(b.current.params.virtual, e), A(b.current.originalParams.virtual, e)
                        }
                    };
                    w.current || X(), b.current && b.current.on("_beforeBreakpoint", W);
                    let Y = () => {
                            !p && H && b.current && Object.keys(H).forEach(e => {
                                b.current.on(e, H[e])
                            })
                        },
                        U = () => {
                            H && b.current && Object.keys(H).forEach(e => {
                                b.current.off(e, H[e])
                            })
                        };
                    return (0, l.useEffect)(() => () => {
                        b.current && b.current.off("_beforeBreakpoint", W)
                    }), (0, l.useEffect)(() => {
                        !g.current && b.current && (b.current.emitSlidesClasses(), g.current = !0)
                    }), B(() => {
                        if (t && (t.current = w.current), w.current) return b.current.destroyed && X(),
                            function(e, t) {
                                let {
                                    el: i,
                                    nextEl: s,
                                    prevEl: r,
                                    paginationEl: a,
                                    scrollbarEl: l,
                                    swiper: n
                                } = e;
                                _(t) && s && r && (n.params.navigation.nextEl = s, n.originalParams.navigation.nextEl = s, n.params.navigation.prevEl = r, n.originalParams.navigation.prevEl = r), z(t) && a && (n.params.pagination.el = a, n.originalParams.pagination.el = a), I(t) && l && (n.params.scrollbar.el = l, n.originalParams.scrollbar.el = l), n.init(i)
                            }({
                                el: w.current,
                                nextEl: E.current,
                                prevEl: T.current,
                                paginationEl: x.current,
                                scrollbarEl: M.current,
                                swiper: b.current
                            }, P), o && o(b.current), () => {
                                b.current && !b.current.destroyed && b.current.destroy(!0, !1)
                            }
                    }, []), B(() => {
                        Y();
                        let e = function(e, t, i, s, r) {
                            let a = [];
                            if (!t) return a;
                            let l = e => {
                                0 > a.indexOf(e) && a.push(e)
                            };
                            if (i && s) {
                                let e = s.map(r),
                                    t = i.map(r);
                                e.join("") !== t.join("") && l("children"), s.length !== i.length && l("children")
                            }
                            let n = k.filter(e => "_" === e[0]).map(e => e.replace(/_/, ""));
                            return n.forEach(i => {
                                if (i in e && i in t) {
                                    if (O(e[i]) && O(t[i])) {
                                        let s = Object.keys(e[i]),
                                            r = Object.keys(t[i]);
                                        s.length !== r.length ? l(i) : (s.forEach(s => {
                                            e[i][s] !== t[i][s] && l(i)
                                        }), r.forEach(s => {
                                            e[i][s] !== t[i][s] && l(i)
                                        }))
                                    } else e[i] !== t[i] && l(i)
                                }
                            }), a
                        }(F, y.current, q, S.current, e => e.key);
                        return y.current = F, S.current = q, e.length && b.current && !b.current.destroyed && function(e) {
                            let t, i, s, r, a, l, n, o, {
                                    swiper: d,
                                    slides: p,
                                    passedParams: c,
                                    changedParams: u,
                                    nextEl: h,
                                    prevEl: f,
                                    scrollbarEl: m,
                                    paginationEl: v
                                } = e,
                                g = u.filter(e => "children" !== e && "direction" !== e && "wrapperClass" !== e),
                                {
                                    params: w,
                                    pagination: b,
                                    navigation: y,
                                    scrollbar: S,
                                    virtual: E,
                                    thumbs: T
                                } = d;
                            u.includes("thumbs") && c.thumbs && c.thumbs.swiper && w.thumbs && !w.thumbs.swiper && (t = !0), u.includes("controller") && c.controller && c.controller.control && w.controller && !w.controller.control && (i = !0), u.includes("pagination") && c.pagination && (c.pagination.el || v) && (w.pagination || !1 === w.pagination) && b && !b.el && (s = !0), u.includes("scrollbar") && c.scrollbar && (c.scrollbar.el || m) && (w.scrollbar || !1 === w.scrollbar) && S && !S.el && (r = !0), u.includes("navigation") && c.navigation && (c.navigation.prevEl || f) && (c.navigation.nextEl || h) && (w.navigation || !1 === w.navigation) && y && !y.prevEl && !y.nextEl && (a = !0);
                            let x = e => {
                                d[e] && (d[e].destroy(), "navigation" === e ? (d.isElement && (d[e].prevEl.remove(), d[e].nextEl.remove()), w[e].prevEl = void 0, w[e].nextEl = void 0, d[e].prevEl = void 0, d[e].nextEl = void 0) : (d.isElement && d[e].el.remove(), w[e].el = void 0, d[e].el = void 0))
                            };
                            if (u.includes("loop") && d.isElement && (w.loop && !c.loop ? l = !0 : !w.loop && c.loop ? n = !0 : o = !0), g.forEach(e => {
                                    if (O(w[e]) && O(c[e])) A(w[e], c[e]), ("navigation" === e || "pagination" === e || "scrollbar" === e) && "enabled" in c[e] && !c[e].enabled && x(e);
                                    else {
                                        let t = c[e];
                                        (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && x(e): w[e] = c[e]
                                    }
                                }), g.includes("controller") && !i && d.controller && d.controller.control && w.controller && w.controller.control && (d.controller.control = w.controller.control), u.includes("children") && p && E && w.virtual.enabled && (E.slides = p, E.update(!0)), u.includes("children") && p && w.loop && (o = !0), t) {
                                let e = T.init();
                                e && T.update(!0)
                            }
                            i && (d.controller.control = w.controller.control), s && (d.isElement && (!v || "string" == typeof v) && ((v = document.createElement("div")).classList.add("swiper-pagination"), v.part.add("pagination"), d.el.appendChild(v)), v && (w.pagination.el = v), b.init(), b.render(), b.update()), r && (d.isElement && (!m || "string" == typeof m) && ((m = document.createElement("div")).classList.add("swiper-scrollbar"), m.part.add("scrollbar"), d.el.appendChild(m)), m && (w.scrollbar.el = m), S.init(), S.updateSize(), S.setTranslate()), a && (d.isElement && (h && "string" != typeof h || ((h = document.createElement("div")).classList.add("swiper-button-next"), h.innerHTML = d.hostEl.constructor.nextButtonSvg, h.part.add("button-next"), d.el.appendChild(h)), f && "string" != typeof f || ((f = document.createElement("div")).classList.add("swiper-button-prev"), f.innerHTML = d.hostEl.constructor.prevButtonSvg, f.part.add("button-prev"), d.el.appendChild(f))), h && (w.navigation.nextEl = h), f && (w.navigation.prevEl = f), y.init(), y.update()), u.includes("allowSlideNext") && (d.allowSlideNext = c.allowSlideNext), u.includes("allowSlidePrev") && (d.allowSlidePrev = c.allowSlidePrev), u.includes("direction") && d.changeDirection(c.direction, !1), (l || o) && d.loopDestroy(), (n || o) && d.loopCreate(), d.update()
                        }({
                            swiper: b.current,
                            slides: q,
                            passedParams: F,
                            changedParams: e,
                            nextEl: E.current,
                            prevEl: T.current,
                            scrollbarEl: M.current,
                            paginationEl: x.current
                        }), () => {
                            U()
                        }
                    }), B(() => {
                        D(b.current)
                    }, [h]), l.createElement(r, G({
                        ref: w,
                        className: $(`${c}${s?` ${s}`:""}`)
                    }, V), l.createElement(j.Provider, {
                        value: b.current
                    }, R["container-start"], l.createElement(a, {
                        className: (void 0 === (i = P.wrapperClass) && (i = ""), i) ? i.includes("swiper-wrapper") ? i : `swiper-wrapper ${i}` : "swiper-wrapper"
                    }, R["wrapper-start"], P.virtual ? function(e, t, i) {
                        if (!i) return null;
                        let s = e => {
                                let i = e;
                                return e < 0 ? i = t.length + e : i >= t.length && (i -= t.length), i
                            },
                            r = e.isHorizontal() ? {
                                [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
                            } : {
                                top: `${i.offset}px`
                            },
                            {
                                from: a,
                                to: n
                            } = i,
                            o = e.params.loop ? -t.length : 0,
                            d = e.params.loop ? 2 * t.length : t.length,
                            p = [];
                        for (let e = o; e < d; e += 1) e >= a && e <= n && p.push(t[s(e)]);
                        return p.map((t, i) => l.cloneElement(t, {
                            swiper: e,
                            style: r,
                            key: `slide-${i}`
                        }))
                    }(b.current, q, h) : q.map((e, t) => l.cloneElement(e, {
                        swiper: b.current,
                        swiperSlideIndex: t
                    })), R["wrapper-end"]), _(P) && l.createElement(l.Fragment, null, l.createElement("div", {
                        ref: T,
                        className: "swiper-button-prev"
                    }), l.createElement("div", {
                        ref: E,
                        className: "swiper-button-next"
                    })), I(P) && l.createElement("div", {
                        ref: M,
                        className: "swiper-scrollbar"
                    }), z(P) && l.createElement("div", {
                        ref: x,
                        className: "swiper-pagination"
                    }), R["container-end"]))
                });
            V.displayName = "Swiper";
            let H = (0, l.forwardRef)(function(e, t) {
                let {
                    tag: i = "div",
                    children: s,
                    className: r = "",
                    swiper: a,
                    zoom: n,
                    lazy: o,
                    virtualIndex: d,
                    swiperSlideIndex: p,
                    ...c
                } = void 0 === e ? {} : e, u = (0, l.useRef)(null), [h, f] = (0, l.useState)("swiper-slide"), [m, v] = (0, l.useState)(!1);

                function g(e, t, i) {
                    t === u.current && f(i)
                }
                B(() => {
                    if (void 0 !== p && (u.current.swiperSlideIndex = p), t && (t.current = u.current), u.current && a) {
                        if (a.destroyed) {
                            "swiper-slide" !== h && f("swiper-slide");
                            return
                        }
                        return a.on("_slideClass", g), () => {
                            a && a.off("_slideClass", g)
                        }
                    }
                }), B(() => {
                    a && u.current && !a.destroyed && f(a.getSlideClasses(u.current))
                }, [a]);
                let w = {
                        isActive: h.indexOf("swiper-slide-active") >= 0,
                        isVisible: h.indexOf("swiper-slide-visible") >= 0,
                        isPrev: h.indexOf("swiper-slide-prev") >= 0,
                        isNext: h.indexOf("swiper-slide-next") >= 0
                    },
                    b = () => "function" == typeof s ? s(w) : s;
                return l.createElement(i, G({
                    ref: u,
                    className: $(`${h}${r?` ${r}`:""}`),
                    "data-swiper-slide-index": d,
                    onLoad: () => {
                        v(!0)
                    }
                }, c), n && l.createElement(F.Provider, {
                    value: w
                }, l.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof n ? n : void 0
                }, b(), o && !m && l.createElement("div", {
                    className: "swiper-lazy-preloader"
                }))), !n && l.createElement(F.Provider, {
                    value: w
                }, b(), o && !m && l.createElement("div", {
                    className: "swiper-lazy-preloader"
                })))
            });
            H.displayName = "SwiperSlide"
        }
    }
]);