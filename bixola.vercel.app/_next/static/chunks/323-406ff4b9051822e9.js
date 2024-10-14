"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [323], {
        323: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return eu
                }
            });
            var n = r(2265);

            function i() {
                return (i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            let s = {
                    origin: [0, 0, 0],
                    round: 4
                },
                a = {
                    a: 7,
                    c: 6,
                    h: 1,
                    l: 2,
                    m: 2,
                    r: 4,
                    q: 4,
                    s: 4,
                    t: 2,
                    v: 1,
                    z: 0
                };

            function m(e) {
                let t = e.pathValue[e.segmentStart],
                    r = t.toLowerCase(),
                    {
                        data: n
                    } = e;
                for (; n.length >= a[r] && ("m" === r && n.length > 2 ? (e.segments.push([t, ...n.splice(0, 2)]), r = "l", t = "m" === t ? "l" : "L") : e.segments.push([t, ...n.splice(0, a[r])]), a[r]););
            }
            let l = "SVGPathCommander error";

            function o(e) {
                return e >= 48 && e <= 57
            }
            let h = "Invalid path value";

            function u(e) {
                var t;
                let {
                    pathValue: r,
                    max: n
                } = e;
                for (; e.index < n && (10 === (t = r.charCodeAt(e.index)) || 13 === t || 8232 === t || 8233 === t || 32 === t || 9 === t || 11 === t || 12 === t || 160 === t || t >= 5760 && [5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].includes(t));) e.index += 1
            }

            function c(e) {
                let {
                    max: t,
                    pathValue: r,
                    index: n
                } = e, i = r.charCodeAt(n), s = a[r[n].toLowerCase()];
                if (e.segmentStart = n, function(e) {
                        switch (32 | e) {
                            case 109:
                            case 122:
                            case 108:
                            case 104:
                            case 118:
                            case 99:
                            case 115:
                            case 113:
                            case 116:
                            case 97:
                                return !0;
                            default:
                                return !1
                        }
                    }(i)) {
                    if (e.index += 1, u(e), e.data = [], s) {
                        for (;;) {
                            var c;
                            for (let n = s; n > 0; n -= 1) {
                                if (97 != (32 | i) || 3 !== n && 4 !== n ? function(e) {
                                        let {
                                            max: t,
                                            pathValue: r,
                                            index: n
                                        } = e, i, s = n, a = !1, m = !1, u = !1, c = !1;
                                        if (s >= t) e.err = `${l}: ${h} at index ${s}, "pathValue" is missing param`;
                                        else if (43 !== (i = r.charCodeAt(s)) && 45 !== i || (s += 1, i = r.charCodeAt(s)), o(i) || 46 === i) {
                                            if (46 !== i) {
                                                if (a = 48 === i, s += 1, i = r.charCodeAt(s), a && s < t && i && o(i)) return void(e.err = `${l}: ${h} at index ${n}, "${r[n]}" illegal number`);
                                                for (; s < t && o(r.charCodeAt(s));) s += 1, m = !0;
                                                i = r.charCodeAt(s)
                                            }
                                            if (46 === i) {
                                                for (c = !0, s += 1; o(r.charCodeAt(s));) s += 1, u = !0;
                                                i = r.charCodeAt(s)
                                            }
                                            if (101 === i || 69 === i) {
                                                if (c && !m && !u) return void(e.err = `${l}: ${h} at index ${s}, "${r[s]}" invalid float exponent`);
                                                if (s += 1, 43 !== (i = r.charCodeAt(s)) && 45 !== i || (s += 1), !(s < t && o(r.charCodeAt(s)))) return void(e.err = `${l}: ${h} at index ${s}, "${r[s]}" invalid integer exponent`);
                                                for (; s < t && o(r.charCodeAt(s));) s += 1
                                            }
                                            e.index = s, e.param = +e.pathValue.slice(n, s)
                                        } else e.err = `${l}: ${h} at index ${s}, "${r[s]}" is not a number`
                                    }(e) : function(e) {
                                        let {
                                            index: t,
                                            pathValue: r
                                        } = e, n = r.charCodeAt(t);
                                        return 48 === n ? (e.param = 0, void(e.index += 1)) : 49 === n ? (e.param = 1, void(e.index += 1)) : void(e.err = `${l}: invalid Arc flag "${r[t]}", expecting 0 or 1 at index ${t}`)
                                    }(e), e.err.length) return;
                                e.data.push(e.param), u(e), e.index < t && 44 === r.charCodeAt(e.index) && (e.index += 1, u(e))
                            }
                            if (e.index >= e.max || !((c = r.charCodeAt(e.index)) >= 48 && c <= 57 || 43 === c || 45 === c || 46 === c)) break
                        }
                        m(e)
                    } else m(e)
                } else e.err = `${l}: ${h} "${r[n]}" is not a path command`
            }

            function f(e) {
                return e.map(e => Array.isArray(e) ? [...e] : e)
            }

            function y(e) {
                this.segments = [], this.pathValue = e, this.max = e.length, this.index = 0, this.param = 0, this.segmentStart = 0, this.data = [], this.err = ""
            }

            function x(e) {
                return Array.isArray(e) && e.every(e => {
                    let t = e[0].toLowerCase();
                    return a[t] === e.length - 1 && "achlmqstvz".includes(t)
                })
            }

            function p(e) {
                if (x(e)) return f(e);
                let t = new y(e);
                for (u(t); t.index < t.max && !t.err.length;) c(t);
                return t.err ? t.err : t.segments
            }

            function g(e) {
                return x(e) && e.every(([e]) => e === e.toUpperCase())
            }

            function d(e) {
                if (g(e)) return f(e);
                let t = p(e),
                    r = 0,
                    n = 0,
                    i = 0,
                    s = 0;
                return t.map(e => {
                    let t = e.slice(1).map(Number),
                        [a] = e,
                        m = a.toUpperCase();
                    if ("M" === a) return [r, n] = t, i = r, s = n, ["M", r, n];
                    let l = [];
                    if (a !== m) switch (m) {
                        case "A":
                            l = [m, t[0], t[1], t[2], t[3], t[4], t[5] + r, t[6] + n];
                            break;
                        case "V":
                            l = [m, t[0] + n];
                            break;
                        case "H":
                            l = [m, t[0] + r];
                            break;
                        default:
                            l = [m, ...t.map((e, t) => e + (t % 2 ? n : r))]
                    } else l = [m, ...t];
                    let o = l.length;
                    switch (m) {
                        case "Z":
                            r = i, n = s;
                            break;
                        case "H":
                            [, r] = l;
                            break;
                        case "V":
                            [, n] = l;
                            break;
                        default:
                            r = l[o - 2], n = l[o - 1], "M" === m && (i = r, s = n)
                    }
                    return l
                })
            }

            function b(e) {
                return x(e) && e.slice(1).every(([e]) => e === e.toLowerCase())
            }

            function M(e) {
                if (b(e)) return f(e);
                let t = p(e),
                    r = 0,
                    n = 0,
                    i = 0,
                    s = 0;
                return t.map(e => {
                    let t = e.slice(1).map(Number),
                        [a] = e,
                        m = a.toLowerCase();
                    if ("M" === a) return [r, n] = t, i = r, s = n, ["M", r, n];
                    let l = [];
                    if (a !== m) switch (m) {
                        case "a":
                            l = [m, t[0], t[1], t[2], t[3], t[4], t[5] - r, t[6] - n];
                            break;
                        case "v":
                            l = [m, t[0] - n];
                            break;
                        case "h":
                            l = [m, t[0] - r];
                            break;
                        default:
                            l = [m, ...t.map((e, t) => e - (t % 2 ? n : r))]
                    } else "m" === a && (i = t[0] + r, s = t[1] + n), l = [m, ...t];
                    let o = l.length;
                    switch (m) {
                        case "z":
                            r = i, n = s;
                            break;
                        case "h":
                            r += l[1];
                            break;
                        case "v":
                            n += l[1];
                            break;
                        default:
                            r += l[o - 2], n += l[o - 1]
                    }
                    return l
                })
            }

            function v(e, t, r) {
                if (e[r].length > 7) {
                    e[r].shift();
                    let n = e[r],
                        i = r;
                    for (; n.length;) t[r] = "A", e.splice(i += 1, 0, ["C", ...n.splice(0, 6)]);
                    e.splice(r, 1)
                }
            }

            function N(e) {
                return g(e) && e.every(([e]) => "ACLMQZ".includes(e))
            }

            function A(e) {
                return N(e) && e.every(([e]) => "MC".includes(e))
            }
            let w = {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                x: 0,
                y: 0,
                qx: null,
                qy: null
            };

            function C(e) {
                if (N(e)) return f(e);
                let t = d(e),
                    r = { ...w
                    },
                    n = t.length;
                for (let e = 0; e < n; e += 1) {
                    t[e], t[e] = function(e, t) {
                        let [r] = e, {
                            x1: n,
                            y1: i,
                            x2: s,
                            y2: a
                        } = t, m = e.slice(1).map(Number), l = e;
                        if ("TQ".includes(r) || (t.qx = null, t.qy = null), "H" === r) l = ["L", e[1], i];
                        else if ("V" === r) l = ["L", n, e[1]];
                        else if ("S" === r) {
                            let e = 2 * n - s,
                                r = 2 * i - a;
                            t.x1 = e, t.y1 = r, l = ["C", e, r, ...m]
                        } else if ("T" === r) {
                            let e = 2 * n - t.qx,
                                r = 2 * i - t.qy;
                            t.qx = e, t.qy = r, l = ["Q", e, r, ...m]
                        } else if ("Q" === r) {
                            let [e, r] = m;
                            t.qx = e, t.qy = r
                        }
                        return l
                    }(t[e], r);
                    let n = t[e],
                        i = n.length;
                    r.x1 = +n[i - 2], r.y1 = +n[i - 1], r.x2 = +n[i - 4] || r.x1, r.y2 = +n[i - 3] || r.y1
                }
                return t
            }

            function P(e, t, r) {
                return {
                    x: e * Math.cos(r) - t * Math.sin(r),
                    y: e * Math.sin(r) + t * Math.cos(r)
                }
            }

            function S(e, t, r) {
                let [n, i] = e, [s, a] = t;
                return [n + (s - n) * r, i + (a - i) * r]
            }

            function k(e, t) {
                return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]))
            }

            function E(e, t, r, n, i) {
                let s = k([e, t], [r, n]),
                    a = {
                        x: 0,
                        y: 0
                    };
                if ("number" == typeof i) {
                    if (i <= 0) a = {
                        x: e,
                        y: t
                    };
                    else if (i >= s) a = {
                        x: r,
                        y: n
                    };
                    else {
                        let [m, l] = S([e, t], [r, n], i / s);
                        a = {
                            x: m,
                            y: l
                        }
                    }
                }
                return {
                    length: s,
                    point: a,
                    min: {
                        x: Math.min(e, r),
                        y: Math.min(t, n)
                    },
                    max: {
                        x: Math.max(e, r),
                        y: Math.max(t, n)
                    }
                }
            }

            function T(e, t, r, n) {
                let i = [e, t],
                    s = [r, n],
                    a = S(i, s, .5),
                    m = S(s, a, .5),
                    l = S(a, m, .5),
                    o = S(m, l, .5),
                    h = S(l, o, .5),
                    u = E(...[...i, ...a, ...l, ...h, .5]).point,
                    c = E(...[...h, ...o, ...m, ...s, 0]).point;
                return [u.x, u.y, c.x, c.y, r, n]
            }

            function $(e, t) {
                let [r] = e, n = e.slice(1).map(Number), [i, s] = n, {
                    x1: a,
                    y1: m,
                    x: l,
                    y: o
                } = t;
                switch ("TQ".includes(r) || (t.qx = null, t.qy = null), r) {
                    case "M":
                        return t.x = i, t.y = s, e;
                    case "A":
                        return ["C", ... function e(t, r, n, i, s, a, m, l, o, h) {
                            let u = t,
                                c = r,
                                f = n,
                                y = i,
                                x = l,
                                p = o,
                                g = 120 * Math.PI / 180,
                                d = Math.PI / 180 * (+s || 0),
                                b, M, v, N, A, w = [];
                            if (h)[M, v, N, A] = h;
                            else {
                                u = (b = P(u, c, -d)).x, c = b.y, x = (b = P(x, p, -d)).x, p = b.y;
                                let e = (u - x) / 2,
                                    t = (c - p) / 2,
                                    r = e * e / (f * f) + t * t / (y * y);
                                r > 1 && (f *= r = Math.sqrt(r), y *= r);
                                let n = f * f,
                                    i = y * y,
                                    s = (a === m ? -1 : 1) * Math.sqrt(Math.abs((n * i - n * t * t - i * e * e) / (n * t * t + i * e * e)));
                                N = s * f * t / y + (u + x) / 2, A = -(s * y) * e / f + (c + p) / 2, M = Math.asin(((c - A) / y * 1e9 >> 0) / 1e9), v = Math.asin(((p - A) / y * 1e9 >> 0) / 1e9), M = u < N ? Math.PI - M : M, v = x < N ? Math.PI - v : v, M < 0 && (M = 2 * Math.PI + M), v < 0 && (v = 2 * Math.PI + v), m && M > v && (M -= 2 * Math.PI), !m && v > M && (v -= 2 * Math.PI)
                            }
                            let C = v - M;
                            if (Math.abs(C) > g) {
                                let t = v,
                                    r = x,
                                    n = p;
                                w = e(x = N + f * Math.cos(v = M + g * (m && v > M ? 1 : -1)), p = A + y * Math.sin(v), f, y, s, 0, m, r, n, [v, t, N, A])
                            }
                            C = v - M;
                            let S = Math.cos(M),
                                k = Math.sin(M),
                                E = Math.cos(v),
                                T = Math.sin(v),
                                $ = Math.tan(C / 4),
                                q = 4 / 3 * f * $,
                                O = 4 / 3 * y * $,
                                V = [u, c],
                                j = [u + q * k, c - O * S],
                                L = [x + q * T, p - O * E],
                                I = [x, p];
                            if (j[0] = 2 * V[0] - j[0], j[1] = 2 * V[1] - j[1], h) return [...j, ...L, ...I, ...w];
                            w = [...j, ...L, ...I, ...w];
                            let z = [];
                            for (let e = 0, t = w.length; e < t; e += 1) z[e] = e % 2 ? P(w[e - 1], w[e], d).y : P(w[e], w[e + 1], d).x;
                            return z
                        }(...[a, m, ...n])];
                    case "Q":
                        return t.qx = i, t.qy = s, ["C", ... function(e, t, r, n, i, s) {
                            let a = 1 / 3,
                                m = 2 / 3;
                            return [a * e + m * r, a * t + m * n, a * i + m * r, a * s + m * n, i, s]
                        }(...[a, m, ...n])];
                    case "L":
                        return ["C", ...T(a, m, i, s)];
                    case "Z":
                        return ["C", ...T(a, m, l, o)]
                }
                return e
            }

            function q(e) {
                if (A(e)) return f(e);
                let t = C(e),
                    r = { ...w
                    },
                    n = [],
                    i = "",
                    s = t.length;
                for (let e = 0; e < s; e += 1) {
                    [i] = t[e], n[e] = i, t[e] = $(t[e], r), v(t, n, e), s = t.length;
                    let a = t[e],
                        m = a.length;
                    r.x1 = +a[m - 2], r.y1 = +a[m - 1], r.x2 = +a[m - 4] || r.x1, r.y2 = +a[m - 3] || r.y1
                }
                return t
            }

            function O(e, t) {
                let {
                    round: r
                } = s;
                if ("off" === t || "off" === r) return f(e);
                r = t >= 0 ? t : r;
                let n = "number" == typeof r && r >= 1 ? 10 ** r : 1;
                return e.map(e => {
                    let t = e.slice(1).map(Number).map(e => r ? Math.round(e * n) / n : Math.round(e));
                    return [e[0], ...t]
                })
            }

            function V(e, t) {
                return O(e, t).map(e => e[0] + e.slice(1).join(" ")).join("")
            }

            function j(e) {
                let t = d(e),
                    r = "Z" === t.slice(-1)[0][0],
                    n = C(t).map((e, r) => {
                        let [n, i] = e.slice(-2).map(Number);
                        return {
                            seg: t[r],
                            n: e,
                            c: t[r][0],
                            x: n,
                            y: i
                        }
                    }).map((e, t, n) => {
                        let i = e.seg,
                            s = e.n,
                            a = t && n[t - 1],
                            m = n[t + 1],
                            l = e.c,
                            o = n.length,
                            h = t ? n[t - 1].x : n[o - 1].x,
                            u = t ? n[t - 1].y : n[o - 1].y,
                            c = [];
                        switch (l) {
                            case "M":
                                c = r ? ["Z"] : [l, h, u];
                                break;
                            case "A":
                                c = [l, ...i.slice(1, -3), 1 === i[5] ? 0 : 1, h, u];
                                break;
                            case "C":
                                c = m && "S" === m.c ? ["S", i[1], i[2], h, u] : [l, i[3], i[4], i[1], i[2], h, u];
                                break;
                            case "S":
                                c = a && "CS".includes(a.c) && (!m || "S" !== m.c) ? ["C", s[3], s[4], s[1], s[2], h, u] : [l, s[1], s[2], h, u];
                                break;
                            case "Q":
                                c = m && "T" === m.c ? ["T", h, u] : [l, ...i.slice(1, -2), h, u];
                                break;
                            case "T":
                                c = a && "QT".includes(a.c) && (!m || "T" !== m.c) ? ["Q", s[1], s[2], h, u] : [l, h, u];
                                break;
                            case "Z":
                                c = ["M", h, u];
                                break;
                            case "H":
                                c = [l, h];
                                break;
                            case "V":
                                c = [l, u];
                                break;
                            default:
                                c = [l, ...i.slice(1, -2), h, u]
                        }
                        return c
                    });
                return r ? n.reverse() : [n[0], ...n.slice(1).reverse()]
            }

            function L(e) {
                let t = [],
                    r, n = -1;
                return e.forEach(e => {
                    "M" === e[0] ? (r = [e], n += 1) : r = [...r, e], t[n] = r
                }), t
            }

            function I(e, t) {
                let r = d(e),
                    n = C(r),
                    i = { ...w
                    },
                    s = [],
                    a = r.length,
                    m = "",
                    l = "",
                    o = 0,
                    h = 0,
                    u = 0,
                    c = 0;
                for (let e = 0; e < a; e += 1) {
                    [m] = r[e], s[e] = m, e && (l = s[e - 1]), r[e] = function(e, t, r, n) {
                        let [i] = e, s = e => Math.round(1e4 * e) / 1e4, a = e.slice(1).map(e => +e), m = t.slice(1).map(e => +e), {
                            x1: l,
                            y1: o,
                            x2: h,
                            y2: u,
                            x: c,
                            y: f
                        } = r, y = e, [x, p] = m.slice(-2);
                        if ("TQ".includes(i) || (r.qx = null, r.qy = null), ["V", "H", "S", "T", "Z"].includes(i)) y = [i, ...a];
                        else if ("L" === i) s(c) === s(x) ? y = ["V", p] : s(f) === s(p) && (y = ["H", x]);
                        else if ("C" === i) {
                            let [e, t] = m;
                            "CS".includes(n) && (s(e) === s(2 * l - h) && s(t) === s(2 * o - u) || s(l) === s(2 * h - c) && s(o) === s(2 * u - f)) && (y = ["S", ...m.slice(-4)]), r.x1 = e, r.y1 = t
                        } else if ("Q" === i) {
                            let [e, t] = m;
                            r.qx = e, r.qy = t, "QT".includes(n) && (s(e) === s(2 * l - h) && s(t) === s(2 * o - u) || s(l) === s(2 * h - c) && s(o) === s(2 * u - f)) && (y = ["T", ...m.slice(-2)])
                        }
                        return y
                    }(r[e], n[e], i, l);
                    let t = r[e],
                        a = t.length;
                    switch (i.x1 = +t[a - 2], i.y1 = +t[a - 1], i.x2 = +t[a - 4] || i.x1, i.y2 = +t[a - 3] || i.y1, m) {
                        case "Z":
                            o = u, h = c;
                            break;
                        case "H":
                            [, o] = t;
                            break;
                        case "V":
                            [, h] = t;
                            break;
                        default:
                            [o, h] = t.slice(-2).map(Number), "M" === m && (u = o, c = h)
                    }
                    i.x = o, i.y = h
                }
                let f = O(r, t),
                    y = O(M(r), t);
                return f.map((e, t) => t ? e.join("").length < y[t].join("").length ? e : y[t] : e)
            }

            function z(e) {
                let t = new G,
                    r = Array.from(e);
                if (!r.every(e => !Number.isNaN(e))) throw TypeError(`CSSMatrix: "${e}" must only have numbers.`);
                if (16 === r.length) {
                    let [e, n, i, s, a, m, l, o, h, u, c, f, y, x, p, g] = r;
                    t.m11 = e, t.a = e, t.m21 = a, t.c = a, t.m31 = h, t.m41 = y, t.e = y, t.m12 = n, t.b = n, t.m22 = m, t.d = m, t.m32 = u, t.m42 = x, t.f = x, t.m13 = i, t.m23 = l, t.m33 = c, t.m43 = p, t.m14 = s, t.m24 = o, t.m34 = f, t.m44 = g
                } else {
                    if (6 !== r.length) throw TypeError("CSSMatrix: expecting an Array of 6/16 values."); {
                        let [e, n, i, s, a, m] = r;
                        t.m11 = e, t.a = e, t.m12 = n, t.b = n, t.m21 = i, t.c = i, t.m22 = s, t.d = s, t.m41 = a, t.e = a, t.m42 = m, t.f = m
                    }
                }
                return t
            }

            function Z(e) {
                let t = Object.keys(new G);
                if ("object" == typeof e && t.every(t => t in e)) return z([e.m11, e.m12, e.m13, e.m14, e.m21, e.m22, e.m23, e.m24, e.m31, e.m32, e.m33, e.m34, e.m41, e.m42, e.m43, e.m44]);
                throw TypeError(`CSSMatrix: "${JSON.stringify(e)}" is not a DOMMatrix / CSSMatrix / JSON compatible object.`)
            }
            /**
             * Creates a new mutable `CSSMatrix` given any valid CSS transform string,
             * or what we call `TransformList`:
             *
             * * `matrix(a, b, c, d, e, f)` - valid matrix() transform function
             * * `matrix3d(m11, m12, m13, ...m44)` - valid matrix3d() transform function
             * * `translate(tx, ty) rotateX(alpha)` - any valid transform function(s)
             *
             * @copyright thednp © 2021
             *
             * @param {string} source valid CSS transform string syntax.
             * @return {CSSMatrix} the resulted matrix.
             */
            function Q(e) {
                if ("string" != typeof e) throw TypeError(`CSSMatrix: "${e}" is not a string.`);
                let t = String(e).replace(/\s/g, ""),
                    r = new G,
                    n = `CSSMatrix: invalid transform string "${e}"`;
                return t.split(")").filter(e => e).forEach(e => {
                    let [t, i] = e.split("(");
                    if (!i) throw TypeError(n);
                    let s = i.split(",").map(e => e.includes("rad") ? parseFloat(e) * (180 / Math.PI) : parseFloat(e)),
                        [a, m, l, o] = s,
                        h = [a, m, l],
                        u = [a, m, l, o];
                    if ("perspective" === t && a && [m, l].every(e => void 0 === e)) r.m34 = -1 / a;
                    else if (t.includes("matrix") && [6, 16].includes(s.length) && s.every(e => !Number.isNaN(+e))) {
                        let e = s.map(e => 1e-6 > Math.abs(e) ? 0 : e);
                        r = r.multiply(z(e))
                    } else if ("translate3d" === t && h.every(e => !Number.isNaN(+e))) r = r.translate(a, m, l);
                    else if ("translate" === t && a && void 0 === l) r = r.translate(a, m || 0, 0);
                    else if ("rotate3d" === t && u.every(e => !Number.isNaN(+e)) && o) r = r.rotateAxisAngle(a, m, l, o);
                    else if ("rotate" === t && a && [m, l].every(e => void 0 === e)) r = r.rotate(0, 0, a);
                    else if ("scale3d" === t && h.every(e => !Number.isNaN(+e)) && h.some(e => 1 !== e)) r = r.scale(a, m, l);
                    else if ("scale" !== t || Number.isNaN(a) || 1 === a || void 0 !== l) {
                        if ("skew" === t && (a || !Number.isNaN(a) && m) && void 0 === l) r = r.skew(a, m || 0);
                        else {
                            if (!(/[XYZ]/.test(t) && a && [m, l].every(e => void 0 === e) && ["translate", "rotate", "scale", "skew"].some(e => t.includes(e)))) throw TypeError(n);
                            if (["skewX", "skewY"].includes(t)) r = r[t](a);
                            else {
                                let e = t.replace(/[XYZ]/, ""),
                                    n = t.replace(e, ""),
                                    i = ["X", "Y", "Z"].indexOf(n),
                                    s = "scale" === e ? 1 : 0,
                                    m = [0 === i ? a : s, 1 === i ? a : s, 2 === i ? a : s];
                                r = r[e](...m)
                            }
                        }
                    } else {
                        let e = Number.isNaN(+m) ? a : m;
                        r = r.scale(a, e, 1)
                    }
                }), r
            }

            function R(e, t) {
                return t ? [e.a, e.b, e.c, e.d, e.e, e.f] : [e.m11, e.m12, e.m13, e.m14, e.m21, e.m22, e.m23, e.m24, e.m31, e.m32, e.m33, e.m34, e.m41, e.m42, e.m43, e.m44]
            }

            function F(e, t, r) {
                let n = new G;
                return n.m41 = e, n.e = e, n.m42 = t, n.f = t, n.m43 = r, n
            }

            function H(e, t, r) {
                let n = new G,
                    i = Math.PI / 180,
                    s = e * i,
                    a = t * i,
                    m = r * i,
                    l = Math.cos(s),
                    o = -Math.sin(s),
                    h = Math.cos(a),
                    u = -Math.sin(a),
                    c = Math.cos(m),
                    f = -Math.sin(m),
                    y = h * c,
                    x = -h * f;
                n.m11 = y, n.a = y, n.m12 = x, n.b = x, n.m13 = u;
                let p = o * u * c + l * f;
                n.m21 = p, n.c = p;
                let g = l * c - o * u * f;
                return n.m22 = g, n.d = g, n.m23 = -o * h, n.m31 = o * f - l * u * c, n.m32 = o * c + l * u * f, n.m33 = l * h, n
            }

            function D(e, t, r, n) {
                let i = new G,
                    s = Math.sqrt(e * e + t * t + r * r);
                if (0 === s) return i;
                let a = e / s,
                    m = t / s,
                    l = r / s,
                    o = n * (Math.PI / 360),
                    h = Math.sin(o),
                    u = Math.cos(o),
                    c = h * h,
                    f = a * a,
                    y = m * m,
                    x = l * l,
                    p = 1 - 2 * (y + x) * c;
                i.m11 = p, i.a = p;
                let g = 2 * (a * m * c + l * h * u);
                i.m12 = g, i.b = g, i.m13 = 2 * (a * l * c - m * h * u);
                let d = 2 * (m * a * c - l * h * u);
                i.m21 = d, i.c = d;
                let b = 1 - 2 * (x + f) * c;
                return i.m22 = b, i.d = b, i.m23 = 2 * (m * l * c + a * h * u), i.m31 = 2 * (l * a * c + m * h * u), i.m32 = 2 * (l * m * c - a * h * u), i.m33 = 1 - 2 * (f + y) * c, i
            }

            function X(e, t, r) {
                let n = new G;
                return n.m11 = e, n.a = e, n.m22 = t, n.d = t, n.m33 = r, n
            }

            function Y(e, t) {
                let r = new G;
                if (e) {
                    let t = Math.tan(e * Math.PI / 180);
                    r.m21 = t, r.c = t
                }
                if (t) {
                    let e = Math.tan(t * Math.PI / 180);
                    r.m12 = e, r.b = e
                }
                return r
            }

            function B(e) {
                return Y(e, 0)
            }

            function J(e) {
                return Y(0, e)
            }

            function _(e, t) {
                return z([t.m11 * e.m11 + t.m12 * e.m21 + t.m13 * e.m31 + t.m14 * e.m41, t.m11 * e.m12 + t.m12 * e.m22 + t.m13 * e.m32 + t.m14 * e.m42, t.m11 * e.m13 + t.m12 * e.m23 + t.m13 * e.m33 + t.m14 * e.m43, t.m11 * e.m14 + t.m12 * e.m24 + t.m13 * e.m34 + t.m14 * e.m44, t.m21 * e.m11 + t.m22 * e.m21 + t.m23 * e.m31 + t.m24 * e.m41, t.m21 * e.m12 + t.m22 * e.m22 + t.m23 * e.m32 + t.m24 * e.m42, t.m21 * e.m13 + t.m22 * e.m23 + t.m23 * e.m33 + t.m24 * e.m43, t.m21 * e.m14 + t.m22 * e.m24 + t.m23 * e.m34 + t.m24 * e.m44, t.m31 * e.m11 + t.m32 * e.m21 + t.m33 * e.m31 + t.m34 * e.m41, t.m31 * e.m12 + t.m32 * e.m22 + t.m33 * e.m32 + t.m34 * e.m42, t.m31 * e.m13 + t.m32 * e.m23 + t.m33 * e.m33 + t.m34 * e.m43, t.m31 * e.m14 + t.m32 * e.m24 + t.m33 * e.m34 + t.m34 * e.m44, t.m41 * e.m11 + t.m42 * e.m21 + t.m43 * e.m31 + t.m44 * e.m41, t.m41 * e.m12 + t.m42 * e.m22 + t.m43 * e.m32 + t.m44 * e.m42, t.m41 * e.m13 + t.m42 * e.m23 + t.m43 * e.m33 + t.m44 * e.m43, t.m41 * e.m14 + t.m42 * e.m24 + t.m43 * e.m34 + t.m44 * e.m44])
            }
            class G {
                constructor(...e) {
                    if (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0, this.m11 = 1, this.m12 = 0, this.m13 = 0, this.m14 = 0, this.m21 = 0, this.m22 = 1, this.m23 = 0, this.m24 = 0, this.m31 = 0, this.m32 = 0, this.m33 = 1, this.m34 = 0, this.m41 = 0, this.m42 = 0, this.m43 = 0, this.m44 = 1, e.length) {
                        let t = [16, 6].some(t => t === e.length) ? e : e[0];
                        return this.setMatrixValue(t)
                    }
                    return this
                }
                get isIdentity() {
                    return 1 === this.m11 && 0 === this.m12 && 0 === this.m13 && 0 === this.m14 && 0 === this.m21 && 1 === this.m22 && 0 === this.m23 && 0 === this.m24 && 0 === this.m31 && 0 === this.m32 && 1 === this.m33 && 0 === this.m34 && 0 === this.m41 && 0 === this.m42 && 0 === this.m43 && 1 === this.m44
                }
                get is2D() {
                    return 0 === this.m31 && 0 === this.m32 && 1 === this.m33 && 0 === this.m34 && 0 === this.m43 && 1 === this.m44
                }
                setMatrixValue(e) {
                    return "string" == typeof e && e.length && "none" !== e ? Q(e) : [Array, Float64Array, Float32Array].some(t => e instanceof t) ? z(e) : [G, DOMMatrix, Object].some(t => e instanceof t) ? Z(e) : this
                }
                toFloat32Array(e) {
                    return Float32Array.from(R(this, e))
                }
                toFloat64Array(e) {
                    return Float64Array.from(R(this, e))
                }
                toString() {
                    let {
                        is2D: e
                    } = this;
                    return `${e?"matrix":"matrix3d"}(${this.toFloat64Array(e).join(", ")})`
                }
                toJSON() {
                    let {
                        is2D: e,
                        isIdentity: t
                    } = this;
                    return { ...this,
                        is2D: e,
                        isIdentity: t
                    }
                }
                multiply(e) {
                    return _(this, e)
                }
                translate(e, t, r) {
                    let n = t,
                        i = r;
                    return void 0 === n && (n = 0), void 0 === i && (i = 0), _(this, F(e, n, i))
                }
                scale(e, t, r) {
                    let n = t,
                        i = r;
                    return void 0 === n && (n = e), void 0 === i && (i = 1), _(this, X(e, n, i))
                }
                rotate(e, t, r) {
                    let n = e,
                        i = t || 0,
                        s = r || 0;
                    return "number" == typeof e && void 0 === t && void 0 === r && (s = n, n = 0, i = 0), _(this, H(n, i, s))
                }
                rotateAxisAngle(e, t, r, n) {
                    if ([e, t, r, n].some(e => Number.isNaN(+e))) throw TypeError("CSSMatrix: expecting 4 values");
                    return _(this, D(e, t, r, n))
                }
                skewX(e) {
                    return _(this, B(e))
                }
                skewY(e) {
                    return _(this, J(e))
                }
                skew(e, t) {
                    return _(this, Y(e, t))
                }
                transformPoint(e) {
                    let t = this.m11 * e.x + this.m21 * e.y + this.m31 * e.z + this.m41 * e.w,
                        r = this.m12 * e.x + this.m22 * e.y + this.m32 * e.z + this.m42 * e.w,
                        n = this.m13 * e.x + this.m23 * e.y + this.m33 * e.z + this.m43 * e.w,
                        i = this.m14 * e.x + this.m24 * e.y + this.m34 * e.z + this.m44 * e.w;
                    return e instanceof DOMPoint ? new DOMPoint(t, r, n, i) : {
                        x: t,
                        y: r,
                        z: n,
                        w: i
                    }
                }
            }

            function U(e, t, r) {
                var n;
                let i;
                let [s, a, m] = r, [l, o, h] = (i = F(...n = [...t, 0, 1]), [, , , i.m44] = n, [(i = e.multiply(i)).m41, i.m42, i.m43, i.m44]), u = h - m;
                return [(l - s) * (Math.abs(m) / Math.abs(u) || 1) + s, (o - a) * (Math.abs(m) / Math.abs(u) || 1) + a]
            }

            function K(e, t) {
                let r, n, i, a, m, l, o = 0,
                    h = 0,
                    u = d(e),
                    c = t && Object.keys(t);
                if (!t || !c.length) return f(u);
                let y = C(u);
                if (!t.origin) {
                    let {
                        origin: e
                    } = s;
                    Object.assign(t, {
                        origin: e
                    })
                }
                let x = function(e) {
                        let t = new G,
                            {
                                origin: r
                            } = e,
                            [n, i] = r,
                            {
                                translate: s
                            } = e,
                            {
                                rotate: a
                            } = e,
                            {
                                skew: m
                            } = e,
                            {
                                scale: l
                            } = e;
                        return Array.isArray(s) && s.every(e => !Number.isNaN(+e)) && s.some(e => 0 !== e) ? t = t.translate(...s) : "number" != typeof s || Number.isNaN(s) || (t = t.translate(s)), (a || m || l) && (t = t.translate(n, i), Array.isArray(a) && a.every(e => !Number.isNaN(+e)) && a.some(e => 0 !== e) ? t = t.rotate(...a) : "number" != typeof a || Number.isNaN(a) || (t = t.rotate(a)), Array.isArray(m) && m.every(e => !Number.isNaN(+e)) && m.some(e => 0 !== e) ? (t = m[0] ? t.skewX(m[0]) : t, t = m[1] ? t.skewY(m[1]) : t) : "number" != typeof m || Number.isNaN(m) || (t = t.skewX(m)), Array.isArray(l) && l.every(e => !Number.isNaN(+e)) && l.some(e => 1 !== e) ? t = t.scale(...l) : "number" != typeof l || Number.isNaN(l) || (t = t.scale(l)), t = t.translate(-n, -i)), t
                    }(t),
                    {
                        origin: p
                    } = t,
                    g = { ...w
                    },
                    b = [],
                    M = 0,
                    N = "",
                    A = [],
                    P = [];
                if (!x.isIdentity) {
                    for (r = 0, i = u.length; r < i; r += 1) {
                        b = u[r], u[r] && ([N] = b), P[r] = N, "A" === N && (b = $(y[r], g), u[r] = $(y[r], g), v(u, P, r), y[r] = $(y[r], g), v(y, P, r), i = Math.max(u.length, y.length)), M = (b = y[r]).length, g.x1 = +b[M - 2], g.y1 = +b[M - 1], g.x2 = +b[M - 4] || g.x1, g.y2 = +b[M - 3] || g.y1;
                        let e = {
                            s: u[r],
                            c: u[r][0],
                            x: g.x1,
                            y: g.y1
                        };
                        A = [...A, e]
                    }
                    return A.map(e => {
                        switch (N = e.c, b = e.s, N) {
                            case "L":
                            case "H":
                            case "V":
                                return [m, l] = U(x, [e.x, e.y], p), o !== m && h !== l ? b = ["L", m, l] : h === l ? b = ["H", m] : o === m && (b = ["V", l]), o = m, h = l, b;
                            default:
                                for (n = 1, a = b.length; n < a; n += 2)[o, h] = U(x, [+b[n], +b[n + 1]], p), b[n] = o, b[n + 1] = h;
                                return b
                        }
                    })
                }
                return f(u)
            }

            function W(e, t) {
                let {
                    x: r,
                    y: n
                } = e, {
                    x: i,
                    y: s
                } = t;
                return (r * s - n * i < 0 ? -1 : 1) * Math.acos((r * i + n * s) / Math.sqrt((r ** 2 + n ** 2) * (i ** 2 + s ** 2)))
            }

            function ee(e, t) {
                let r = C(e),
                    n = "number" == typeof t,
                    i, s, a, m = [],
                    l = 0,
                    o = 0,
                    h = 0,
                    u = 0,
                    c = [],
                    f = [],
                    y = 0,
                    x = {
                        x: 0,
                        y: 0
                    },
                    p = x,
                    g = x,
                    d = x,
                    b = 0;
                for (let e = 0, M = r.length; e < M; e += 1) a = r[e], [s] = a, m = (i = "M" === s) ? m : [l, o, ...a.slice(1)], i ? ([, h, u] = a, p = x = {
                    x: h,
                    y: u
                }, y = 0, n && t < .001 && (d = x)) : "L" === s ? {
                    length: y,
                    min: x,
                    max: p,
                    point: g
                } = E(...m, (t || 0) - b) : "A" === s ? {
                    length: y,
                    min: x,
                    max: p,
                    point: g
                } = function(e, t, r, n, i, s, a, m, l, o) {
                    let h = "number" == typeof o,
                        u = e,
                        c = t,
                        f = 0,
                        y = [u, c, 0],
                        x = [u, c],
                        p = 0,
                        g = {
                            x: 0,
                            y: 0
                        },
                        d = [{
                            x: u,
                            y: c
                        }];
                    h && o <= 0 && (g = {
                        x: u,
                        y: c
                    });
                    for (let b = 0; b <= 300; b += 1) {
                        if (p = b / 300, {
                                x: u,
                                y: c
                            } = function(e, t, r, n, i, s, a, m, l, o) {
                                let {
                                    abs: h,
                                    sin: u,
                                    cos: c,
                                    sqrt: f,
                                    PI: y
                                } = Math, x = h(r), p = h(n), g = (i % 360 + 360) % 360 * (y / 180);
                                if (e === m && t === l) return {
                                    x: e,
                                    y: t
                                };
                                if (0 === x || 0 === p) return E(e, t, m, l, o).point;
                                let d = (e - m) / 2,
                                    b = (t - l) / 2,
                                    M = c(g) * d + u(g) * b,
                                    v = -u(g) * d + c(g) * b,
                                    N = M ** 2 / x ** 2 + v ** 2 / p ** 2;
                                N > 1 && (x *= f(N), p *= f(N));
                                let A = (x ** 2 * p ** 2 - x ** 2 * v ** 2 - p ** 2 * M ** 2) / (x ** 2 * v ** 2 + p ** 2 * M ** 2);
                                A = A < 0 ? 0 : A;
                                let w = (s !== a ? 1 : -1) * f(A),
                                    C = w * (x * v / p),
                                    P = w * (-p * M / x),
                                    S = c(g) * C - u(g) * P + (e + m) / 2,
                                    k = u(g) * C + c(g) * P + (t + l) / 2,
                                    T = {
                                        x: (M - C) / x,
                                        y: (v - P) / p
                                    },
                                    $ = W({
                                        x: 1,
                                        y: 0
                                    }, T),
                                    q = W(T, {
                                        x: (-M - C) / x,
                                        y: (-v - P) / p
                                    });
                                !a && q > 0 ? q -= 2 * y : a && q < 0 && (q += 2 * y), q %= 2 * y;
                                let O = $ + q * o,
                                    V = x * c(O),
                                    j = p * u(O);
                                return {
                                    x: c(g) * V - u(g) * j + S,
                                    y: u(g) * V + c(g) * j + k
                                }
                            }(e, t, r, n, i, s, a, m, l, p), d = [...d, {
                                x: u,
                                y: c
                            }], f += k(x, [u, c]), x = [u, c], h && f > o && o > y[2]) {
                            let e = (f - o) / (f - y[2]);
                            g = {
                                x: x[0] * (1 - e) + y[0] * e,
                                y: x[1] * (1 - e) + y[1] * e
                            }
                        }
                        y = [u, c, f]
                    }
                    return h && o >= f && (g = {
                        x: m,
                        y: l
                    }), {
                        length: f,
                        point: g,
                        min: {
                            x: Math.min(...d.map(e => e.x)),
                            y: Math.min(...d.map(e => e.y))
                        },
                        max: {
                            x: Math.max(...d.map(e => e.x)),
                            y: Math.max(...d.map(e => e.y))
                        }
                    }
                }(...m, (t || 0) - b) : "C" === s ? {
                    length: y,
                    min: x,
                    max: p,
                    point: g
                } = function(e, t, r, n, i, s, a, m, l) {
                    let o = "number" == typeof l,
                        h = e,
                        u = t,
                        c = 0,
                        f = [h, u, 0],
                        y = [h, u],
                        x = 0,
                        p = {
                            x: 0,
                            y: 0
                        },
                        g = [{
                            x: h,
                            y: u
                        }];
                    o && l <= 0 && (p = {
                        x: h,
                        y: u
                    });
                    for (let d = 0; d <= 300; d += 1) {
                        if (x = d / 300, {
                                x: h,
                                y: u
                            } = function(e, t, r, n, i, s, a, m, l) {
                                let o = 1 - l;
                                return {
                                    x: o ** 3 * e + 3 * o ** 2 * l * r + 3 * o * l ** 2 * i + l ** 3 * a,
                                    y: o ** 3 * t + 3 * o ** 2 * l * n + 3 * o * l ** 2 * s + l ** 3 * m
                                }
                            }(e, t, r, n, i, s, a, m, x), g = [...g, {
                                x: h,
                                y: u
                            }], c += k(y, [h, u]), y = [h, u], o && c > l && l > f[2]) {
                            let e = (c - l) / (c - f[2]);
                            p = {
                                x: y[0] * (1 - e) + f[0] * e,
                                y: y[1] * (1 - e) + f[1] * e
                            }
                        }
                        f = [h, u, c]
                    }
                    return o && l >= c && (p = {
                        x: a,
                        y: m
                    }), {
                        length: c,
                        point: p,
                        min: {
                            x: Math.min(...g.map(e => e.x)),
                            y: Math.min(...g.map(e => e.y))
                        },
                        max: {
                            x: Math.max(...g.map(e => e.x)),
                            y: Math.max(...g.map(e => e.y))
                        }
                    }
                }(...m, (t || 0) - b) : "Q" === s ? {
                    length: y,
                    min: x,
                    max: p,
                    point: g
                } = function(e, t, r, n, i, s, a) {
                    let m = "number" == typeof a,
                        l = e,
                        o = t,
                        h = 0,
                        u = [l, o, 0],
                        c = [l, o],
                        f = 0,
                        y = {
                            x: 0,
                            y: 0
                        },
                        x = [{
                            x: l,
                            y: o
                        }];
                    m && a <= 0 && (y = {
                        x: l,
                        y: o
                    });
                    for (let p = 0; p <= 300; p += 1) {
                        if (f = p / 300, {
                                x: l,
                                y: o
                            } = function(e, t, r, n, i, s, a) {
                                let m = 1 - a;
                                return {
                                    x: m ** 2 * e + 2 * m * a * r + a ** 2 * i,
                                    y: m ** 2 * t + 2 * m * a * n + a ** 2 * s
                                }
                            }(e, t, r, n, i, s, f), x = [...x, {
                                x: l,
                                y: o
                            }], h += k(c, [l, o]), c = [l, o], m && h > a && a > u[2]) {
                            let e = (h - a) / (h - u[2]);
                            y = {
                                x: c[0] * (1 - e) + u[0] * e,
                                y: c[1] * (1 - e) + u[1] * e
                            }
                        }
                        u = [l, o, h]
                    }
                    return m && a >= h && (y = {
                        x: i,
                        y: s
                    }), {
                        length: h,
                        point: y,
                        min: {
                            x: Math.min(...x.map(e => e.x)),
                            y: Math.min(...x.map(e => e.y))
                        },
                        max: {
                            x: Math.max(...x.map(e => e.x)),
                            y: Math.max(...x.map(e => e.y))
                        }
                    }
                }(...m, (t || 0) - b) : "Z" === s && (m = [l, o, h, u], {
                    length: y,
                    min: x,
                    max: p,
                    point: g
                } = E(...m, (t || 0) - b)), n && b < t && b + y >= t && (d = g), f = [...f, p], c = [...c, x], b += y, [l, o] = "Z" !== s ? a.slice(-2) : [h, u];
                return n && t >= b && (d = {
                    x: l,
                    y: o
                }), {
                    length: b,
                    point: d,
                    min: {
                        x: Math.min(...c.map(e => e.x)),
                        y: Math.min(...c.map(e => e.y))
                    },
                    max: {
                        x: Math.max(...f.map(e => e.x)),
                        y: Math.max(...f.map(e => e.y))
                    }
                }
            }

            function et(e) {
                if (!e) return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    x2: 0,
                    y2: 0,
                    cx: 0,
                    cy: 0,
                    cz: 0
                };
                let {
                    min: {
                        x: t,
                        y: r
                    },
                    max: {
                        x: n,
                        y: i
                    }
                } = ee(e), s = n - t, a = i - r;
                return {
                    width: s,
                    height: a,
                    x: t,
                    y: r,
                    x2: n,
                    y2: i,
                    cx: t + s / 2,
                    cy: r + a / 2,
                    cz: Math.max(s, a) + Math.min(s, a) / 2
                }
            }

            function er(e) {
                return ee(e).length
            }

            function en(e, t) {
                return ee(e, t).point
            }
            Object.assign(G, {
                Translate: F,
                Rotate: H,
                RotateAxisAngle: D,
                Scale: X,
                SkewX: B,
                SkewY: J,
                Skew: Y,
                Multiply: _,
                fromArray: z,
                fromMatrix: Z,
                fromString: Q,
                toArray: R
            }), Object.assign(G, {
                Version: "1.0.3"
            });
            class ei {
                constructor(e, t) {
                    let r, n;
                    let i = void 0 === e;
                    if (i || !e.length) throw TypeError(`${l}: "pathValue" is ${i?"undefined":"empty"}`);
                    let a = p(e);
                    if ("string" == typeof a) throw TypeError(a);
                    this.segments = a;
                    let {
                        width: m,
                        height: o,
                        cx: h,
                        cy: u,
                        cz: c
                    } = this.getBBox(), {
                        round: f,
                        origin: y
                    } = t || {};
                    if ("auto" === f) {
                        let e = `${Math.floor(Math.max(m,o))}`.length;
                        r = e >= 4 ? 0 : 4 - e
                    } else Number.isInteger(f) || "off" === f ? r = f : {
                        round: r
                    } = s;
                    if (Array.isArray(y) && y.length >= 2) {
                        let [e, t, r] = y.map(Number);
                        n = [Number.isNaN(e) ? h : e, Number.isNaN(t) ? u : t, Number.isNaN(r) ? c : r]
                    } else n = [h, u, c];
                    return this.round = r, this.origin = n, this
                }
                getBBox() {
                    return et(this.segments)
                }
                getTotalLength() {
                    return er(this.segments)
                }
                getPointAtLength(e) {
                    return en(this.segments, e)
                }
                toAbsolute() {
                    let {
                        segments: e
                    } = this;
                    return this.segments = d(e), this
                }
                toRelative() {
                    let {
                        segments: e
                    } = this;
                    return this.segments = M(e), this
                }
                toCurve() {
                    let {
                        segments: e
                    } = this;
                    return this.segments = q(e), this
                }
                reverse(e) {
                    this.toAbsolute();
                    let {
                        segments: t
                    } = this, r = L(t), n = r.length > 1 ? r : 0, i = n && f(n).map((t, r) => e ? r ? j(t) : p(t) : j(t)), s = [];
                    return s = n ? i.flat(1) : e ? t : j(t), this.segments = f(s), this
                }
                normalize() {
                    let {
                        segments: e
                    } = this;
                    return this.segments = C(e), this
                }
                optimize() {
                    let {
                        segments: e
                    } = this;
                    return this.segments = I(e, this.round), this
                }
                transform(e) {
                    if (!e || "object" != typeof e || "object" == typeof e && !["translate", "rotate", "skew", "scale"].some(t => t in e)) return this;
                    let t = {};
                    Object.keys(e).forEach(r => {
                        t[r] = Array.isArray(e[r]) ? [...e[r]] : Number(e[r])
                    });
                    let {
                        segments: r
                    } = this, [n, i, s] = this.origin, {
                        origin: a
                    } = t;
                    if (Array.isArray(a) && a.length >= 2) {
                        let [e, r, m] = a.map(Number);
                        t.origin = [Number.isNaN(e) ? n : e, Number.isNaN(r) ? i : r, m || s]
                    } else t.origin = [n, i, s];
                    return this.segments = K(r, t), this
                }
                flipX() {
                    return this.transform({
                        rotate: [0, 180, 0]
                    }), this
                }
                flipY() {
                    return this.transform({
                        rotate: [180, 0, 0]
                    }), this
                }
                toString() {
                    return V(this.segments, this.round)
                }
            }

            function es(e) {
                let t = 0,
                    r = 0,
                    n = 0;
                return q(e).map(e => "M" === e[0] ? ([, t, r] = e, 0) : (n = function(e, t, r, n, i, s, a, m) {
                    return 3 * ((m - t) * (r + i) - (a - e) * (n + s) + n * (e - i) - r * (t - s) + m * (i + e / 3) - a * (s + t / 3)) / 20
                }(t, r, ...e.slice(1)), [t, r] = e.slice(-2), n)).reduce((e, t) => e + t, 0)
            }

            function ea(e, t) {
                let r = p(e);
                if ("string" == typeof r) throw TypeError(r);
                let n = [...r],
                    i = er(n),
                    s = n.length - 1,
                    a = 0,
                    m = 0,
                    l = r[0],
                    [o, h] = l.slice(-2);
                if (s <= 0 || !t || !Number.isFinite(t)) return {
                    segment: l,
                    index: 0,
                    length: m,
                    point: {
                        x: o,
                        y: h
                    },
                    lengthAtSegment: a
                };
                if (t >= i) return m = i - (a = er(n = r.slice(0, -1))), {
                    segment: r[s],
                    index: s,
                    length: m,
                    lengthAtSegment: a
                };
                let u = [];
                for (; s > 0;) l = n[s], m = i - (a = er(n = n.slice(0, -1))), i = a, u.push({
                    segment: l,
                    index: s,
                    length: m,
                    lengthAtSegment: a
                }), s -= 1;
                return u.find(({
                    lengthAtSegment: e
                }) => e <= t)
            }

            function em(e, t) {
                let r = p(e),
                    n = C(r),
                    i = er(r),
                    s = e => {
                        let r = e.x - t.x,
                            n = e.y - t.y;
                        return r * r + n * n
                    },
                    a, m, l, o, h = 8,
                    u = 0,
                    c = 0,
                    f = 1 / 0;
                for (let e = 0; e <= i; e += h)(u = s(a = en(n, e))) < f && (m = a, c = e, f = u);
                h /= 2;
                let y = 0,
                    x = 0,
                    g = 0,
                    d = 0;
                for (; h > .5;) g = s(l = en(n, y = c - h)), d = s(o = en(n, x = c + h)), y >= 0 && g < f ? (m = l, c = y, f = g) : x <= i && d < f ? (m = o, c = x, f = d) : h /= 2;
                let b = ea(r, c);
                return {
                    closest: m,
                    distance: Math.sqrt(f),
                    segment: b
                }
            }

            function el(e) {
                if ("string" != typeof e) return !1;
                let t = new y(e);
                for (u(t); t.index < t.max && !t.err.length;) c(t);
                return !t.err.length && "mM".includes(t.segments[0][0])
            }
            let eo = {
                line: ["x1", "y1", "x2", "y2"],
                circle: ["cx", "cy", "r"],
                ellipse: ["cx", "cy", "rx", "ry"],
                rect: ["width", "height", "x", "y", "rx", "ry"],
                polygon: ["points"],
                polyline: ["points"],
                glyph: ["d"]
            };
            Object.assign(ei, {
                CSSMatrix: G,
                parsePathString: p,
                isPathArray: x,
                isCurveArray: A,
                isAbsoluteArray: g,
                isRelativeArray: b,
                isNormalizedArray: N,
                isValidPath: el,
                pathToAbsolute: d,
                pathToRelative: M,
                pathToCurve: q,
                pathToString: V,
                getDrawDirection: function(e) {
                    return es(q(e)) >= 0
                },
                getPathArea: es,
                getPathBBox: et,
                pathLengthFactory: ee,
                getTotalLength: er,
                getPointAtLength: en,
                getClosestPoint: function(e, t) {
                    return em(e, t).closest
                },
                getSegmentOfPoint: function(e, t) {
                    return em(e, t).segment
                },
                getPropertiesAtPoint: em,
                getPropertiesAtLength: ea,
                getSegmentAtLength: function(e, t) {
                    return ea(e, t).segment
                },
                isPointInStroke: function(e, t) {
                    let {
                        distance: r
                    } = em(e, t);
                    return .001 > Math.abs(r)
                },
                clonePath: f,
                splitPath: L,
                fixPath: function(e) {
                    let t = p(e),
                        r = C(t),
                        {
                            length: n
                        } = t,
                        i = "Z" === r.slice(-1)[0][0],
                        [s, a] = r[0].slice(1),
                        [m, l] = r[i ? n - 2 : n - 1].slice(-2);
                    return i && s === m && a === l ? t.slice(0, -1) : t
                },
                roundPath: O,
                optimizePath: I,
                reverseCurve: function(e) {
                    let t = e.slice(1).map((t, r, n) => r ? [...n[r - 1].slice(-2), ...t.slice(1)] : [...e[0].slice(1), ...t.slice(1)]).map(e => e.map((t, r) => e[e.length - r - 2 * (1 - r % 2)])).reverse();
                    return [
                        ["M", ...t[0].slice(0, 2)], ...t.map(e => ["C", ...e.slice(2)])
                    ]
                },
                reversePath: j,
                normalizePath: C,
                transformPath: K,
                shapeToPath: function(e, t) {
                    let r;
                    let n = Object.keys(eo),
                        {
                            tagName: i
                        } = e;
                    if (i && !n.some(e => i === e)) throw TypeError(`${l}: "${i}" is not SVGElement`);
                    let a = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                        m = i || e.type,
                        o = {};
                    o.type = m;
                    let h = eo[m];
                    i ? (h.forEach(t => {
                        o[t] = e.getAttribute(t)
                    }), Object.values(e.attributes).forEach(({
                        name: e,
                        value: t
                    }) => {
                        h.includes(e) || a.setAttribute(e, t)
                    })) : (Object.assign(o, e), Object.keys(o).forEach(e => {
                        h.includes(e) || "type" === e || a.setAttribute(e.replace(/[A-Z]/g, e => `-${e.toLowerCase()}`), o[e])
                    }));
                    let {
                        round: u
                    } = s;
                    return "circle" === m ? r = V(function(e) {
                        let {
                            cx: t,
                            cy: r,
                            r: n
                        } = e;
                        return [
                            ["M", t - n, r],
                            ["a", n, n, 0, 1, 0, 2 * n, 0],
                            ["a", n, n, 0, 1, 0, -2 * n, 0]
                        ]
                    }(o), u) : "ellipse" === m ? r = V(function(e) {
                        let {
                            cx: t,
                            cy: r,
                            rx: n,
                            ry: i
                        } = e;
                        return [
                            ["M", t - n, r],
                            ["a", n, i, 0, 1, 0, 2 * n, 0],
                            ["a", n, i, 0, 1, 0, -2 * n, 0]
                        ]
                    }(o), u) : ["polyline", "polygon"].includes(m) ? r = V(function(e) {
                        let t = [],
                            r = (e.points || "").trim().split(/[\s|,]/).map(Number),
                            n = 0;
                        for (; n < r.length;) t.push([n ? "L" : "M", r[n], r[n + 1]]), n += 2;
                        return "polygon" === e.type ? [...t, ["z"]] : t
                    }(o), u) : "rect" === m ? r = V(function(e) {
                        let t = +e.x || 0,
                            r = +e.y || 0,
                            n = +e.width,
                            i = +e.height,
                            s = +e.rx,
                            a = +e.ry;
                        return s || a ? (s = s || a, a = a || s, 2 * s > n && (s -= (2 * s - n) / 2), 2 * a > i && (a -= (2 * a - i) / 2), [
                            ["M", t + s, r],
                            ["h", n - 2 * s],
                            ["s", s, 0, s, a],
                            ["v", i - 2 * a],
                            ["s", 0, a, -s, a],
                            ["h", 2 * s - n],
                            ["s", -s, 0, -s, -a],
                            ["v", 2 * a - i],
                            ["s", 0, -a, s, -a]
                        ]) : [
                            ["M", t, r],
                            ["h", n],
                            ["v", i],
                            ["H", t],
                            ["Z"]
                        ]
                    }(o), u) : "line" === m ? r = V(function(e) {
                        let {
                            x1: t,
                            y1: r,
                            x2: n,
                            y2: i
                        } = e;
                        return [
                            ["M", t, r],
                            ["L", n, i]
                        ]
                    }(o), u) : "glyph" === m && (r = i ? e.getAttribute("d") : e.d), !!el(r) && (a.setAttribute("d", r), t && i && (e.before(a, e), e.remove()), a)
                },
                options: s
            }, {
                Version: "1.0.5"
            });
            let eh = e => null == e,
                eu = e => {
                    let {
                        width: t,
                        height: r,
                        cx: s,
                        cy: a,
                        rx: m,
                        ry: l,
                        startOffset: o,
                        reversed: h,
                        text: u,
                        svgProps: c,
                        ellipseProps: f,
                        textPathProps: y,
                        textProps: x,
                        tspanProps: p
                    } = e, [g, d] = (0, n.useState)(!1), [b] = (0, n.useState)(`ellipse-id${(0,n.useId)().replaceAll(":","-")}`), M = (0, n.useRef)();
                    if ((0, n.useEffect)(() => {
                            if (M.current) {
                                let e = {
                                        id: b,
                                        type: "ellipse",
                                        rx: m,
                                        ry: l,
                                        cx: s,
                                        cy: a,
                                        style: "fill: none;",
                                        ...f
                                    },
                                    t = M.current,
                                    r = ei.shapeToPath(e, !0),
                                    n = document.getElementById(b);
                                if (n && n.remove(), t.prepend(r), h) {
                                    let e = r.getAttribute("d"),
                                        t = ei.reversePath(e),
                                        n = ei.pathToString(t);
                                    r.setAttribute("d", n)
                                }
                                d(!0)
                            }
                        }, [M.current, h, t, r, c, s, a, m, l, f]), eh(t)) throw Error("ReactCurvedText Error: width is required");
                    if (eh(r)) throw Error("ReactCurvedText Error: height is required");
                    if (eh(s)) throw Error("ReactCurvedText Error: cx is required");
                    if (eh(a)) throw Error("ReactCurvedText Error: cy is required");
                    if (eh(m)) throw Error("ReactCurvedText Error: rx is required");
                    if (eh(l)) throw Error("ReactCurvedText Error: ry is required");
                    if (eh(u)) throw Error("ReactCurvedText Error: text is required");
                    let v = JSON.stringify({
                        width: t,
                        height: r,
                        cx: s,
                        cy: a,
                        rx: m,
                        ry: l,
                        startOffset: o,
                        reversed: h,
                        text: u,
                        svgProps: c,
                        ellipseProps: f,
                        textPathProps: y,
                        textProps: x,
                        tspanProps: p,
                        rendered: g
                    });
                    return n.createElement("svg", i({
                        ref: M,
                        height: r,
                        width: t
                    }, c), n.createElement("text", i({
                        key: v
                    }, x), n.createElement("textPath", i({
                        xlinkHref: `#${b}`,
                        startOffset: o
                    }, y), n.createElement("tspan", p, u))))
                }
        }
    }
]);