(window.webpackJsonp = window.webpackJsonp || []).push([[11], {
    1066: function (e, t) {
    }, 113: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return b
        });
        var a = n(32), r = n(64), c = n(25), o = n(26), i = n(27), s = n(30),
            u = n(31), l = n(0), d = n.n(l), m = n(3), p = n.n(m), g = n(59),
            f = n(39), h = "".concat(f.a.prefixClassName, "-").concat(
            f.a.componentsName.button), b = function (e) {
                function t() {
                    var e, n, a;
                    Object(c.a)(this, t);
                    for (var r = arguments.length, o = new Array(r), u = 0; u < r;
                        u++) {
                        o[u] = arguments[u];
                    }
                    return Object(i.a)(a, (n = a = Object(i.a)(this,
                        (e = Object(s.a)(t)).call.apply(e,
                            [this].concat(o))), a._handleClick = function (e) {
                        var t = a.props, n = t.loading, r = t.disabled,
                            c = t.onClick;
                        n || r || c && c(e)
                    }, n))
                }

                return Object(u.a)(t, e), Object(o.a)(t, [{
                    key: "render", value: function () {
                        var e = this, t = this.props, n = t.className,
                            c = t.children, o = t.type, i = t.size, s = t.disabled,
                            u = (t.onClick, t.loading), l = Object(r.a)(t,
                            ["className", "children", "type", "size", "disabled",
                                "onClick", "loading"]);
                        return d.a.createElement("button", Object.assign({
                            className: p()(h, n, "".concat(h, "--").concat(i),
                                "".concat(h, "--").concat(o),
                                Object(a.a)({}, "".concat(h, "--disabled"), s)),
                            onClick: function (t) {
                                return e._handleClick(t)
                            }
                        }, l), u ? d.a.createElement(g.a, {type: "loading"}) : c)
                    }
                }]), t
            }(d.a.Component);
        b.defaultProps = {
            size: "default",
            type: "default",
            disabled: !1,
            loading: !1
        }
    }, 1131: function (e, t, n) {
    }, 1135: function (e, t, n) {
    }, 1137: function (e, t, n) {
    }, 1139: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAO1UlEQVR4Xu2defRvUxnGP4Z1RROxlDKEJApRJDKFDAlJhiJzEheZhwhZQoYukjljy5ihFYtklhKFIkkSMmSex2i97tfwc3/f3/d7ztn7vHvv8+y17n97P8+7n3c/93x/5+z97slQkwJSoK8Ck0kbKSAF+isgg2h1SIExFJBBtDykgAyiNSAF6imgJ0g93TSqIwrIIB1JtKZZTwEZpJ5uGtURBWSQjiRa06yngAxSTzeN6ogCMkhHEq1p1lNABqmnm0Z1RAEZpCOJrjDNpYGZe/+eAu4DbgX+WQGjmK4ySDGpbDSRjwFbAasBH+2DdDdwCXAMcGMjtowGyyAZJStSqOOB3YAPVcA/HNi6Qv9su8og2aYuSOAXAivVRLoTmKvm2GyGySDZpCp4oK8FQLS/TT4VACdZCBkk2dREDexxYNpADGcBawXCSg5GBkkuJdEDsj+2ZwvM8h3g6MCYScDJIEmkobUgbgIWiMB2D7AQ8GgEbFdIGcRV/lbJrwCWisi4EXBiRHwXaBnERfbWSc/rfeOISXwOsGZMAg9sGcRD9XY5TwK+1QJlkW+0ZJAWVo4jxYQWP+jZtpT3O841CrUMEkXWJED3BvZsMRIZpEWxRdVMge2Ag5tBVB6tn1iVJdMADwU2Bo53ILYXAV914I1KqZ9YUeVtHXwNwN4mebQdgYM8iGNyyiAx1W0X+4vAb9ulHMG2Qm87vGMI4allkPCaeiB+BrjBg7jHaR8hl3Hkj0Ytg0STtjXgOQHbeu7ZNnX6uyf6nGWQ6BJHJZgeeCQqw2DwM4B1BnfLs4cMkmfeLOopgFecw78q8v4u5+mBDOKegtoBvAxMWXt084G2M3jB5jBpI8ggaeenX3QPAzM4hm4VTqzQQ/FNBskvxf9wXpxmzhnzk61exDJIPd28Rv0R+KwXOfACMLUjf+vUMkjrktcmvBRYtvboMAOnAl4KA5UHigySR57OBr7mHOp0wBPOMbROL4O0LnllwuOATSqPCjvASpH+JyxkHmgySNp5si3rtnXds80D3O4ZgCe3DOKp/tjcewD7OIf3OeB65xhc6WUQV/n7klu93MOcQ1vOeXew8/Qn0ssgSaRhRBDrAyc7h2XnSs51jiEJehkkiTS8GcSqwPnOIW0IWCUUNT1BkloDSwJXOkdkP+2OcI4hKXo9QdJIx/zAzc6h7A7s5xxDcvQyiH9KrJC0FZT2bAcAu3gGkCq3DOKbGSu05v11+khgS18Z0mWXQXxzE+ISmyYzOBWwt2ZqfRSQQfyWxnPOO2PtbdnqftPPg1kG8cnTAxUvzQwd5eWAlQlSG6CADNL+Evkb8In2ad9ktCucPc+UOE69OrUMUl2zJiOuAxZtAtBw7B3A3A0xOjVcBmkv3RcBK7ZHNwnTg8AcwPOOMWRHLYO0k7LTgbXboRqVxV4IzFriHYKxNZVBYisMRwGbx6cZk8HMca9zDFnSyyBx07Y/sHNcioHonT7wNFAdvcVqKlHt8bsmsLfJilr/qfYMNFDnQSKtgS0A28Lh2ZYArvEMoARu/cQKn8V1gV+Eh62EWORdHZUUCNRZBgkkZA9mJeDCsJCV0ewaNLsOTS2AAjJIABF7EIsB14aDq4W0HnBarZEaNKoCMkiYhTEvYLe8erZvA8d6BlAitwzSPKsfTqCo2rbAhOZTEcI7FZBBmq2JaYBnm0E0Hr0b8KPGKALQT6wIa8D7wJOdIbez5GqRFNATpL6wTwHvrT+88cjDga0bowhgTAVkkHoL5B5glnpDg4yyulVWv0otsgIySHWBbwHmqz4s2IhfJnAVQrDJpA4kg1TL0NXAF6oNCdrbLtGxr+SvBkUVWF8FZJDhF8evgFWG7x68p1VZtxumngmOLEAZpOEaOAWwr9Rezc6xLw381yuArvLqCTI481ar1rOwmt3sZDtz/zU4VPUIrYAMMrai+zp/Z3ga+HwC21hCr7ts8GSQ/qnaAfixcyYXAezqZzUnBWSQ0YXfNIGNf/Y3h/d1CE7LMh1aGWTSXHwdONM5RSsDViZIzVkBGWRkApYHLnHOiRnU7kVXS0ABGeStJCycwI2uGyRwP2ECyzKdEGSQibn4OPB357RYoQeroaWWkAIyCMwIPOSck+2BQ5xjEP0oCnTdIOOAF51Xxh6AfW9RS1CBrhvkf8Dkjnmxk4B2IlAtUQW6bJDHgOkc83IYsI0jv6iHUKCrBrkLmH0IfWJ1OQ7YLBa4cMMp0EWDWK3aBcNJWBnJqi5+s/IoDXBRoGsGuQxYxkXpiaRW8XAt4GXHGERdQYEuGeRc51td7Qu9mePJCvlRV2cFumKQnzsXObCSpGaO+53zLfqKCnTBIIcCVnnQq/25Z447vQIQb30FSjfIXsAP6svTeKRtX7Enh1VCUctQgZIN4r1t3e4ENHP8PsN1oZB7CpRqELt67AbHLD/Rq11lb83UMlagVIMcDdh1AB7Ntq/YJTZWJkgtcwVKNMhMzm+L1gHOyHxdKPyCf2JZcTev/703BuyVslohCpT4BPF6c7UV8NNC1oWmUfATxOOj4E4JlAjSoo6gQIlPkMt7ZTojyDUq5N6APbXUClSgRIN41NHdGTiwwPXR+SmVaBA7pbeLQ2bttie79UmtIAVKNIh9g7BLZjyaVWQ83oNYnHEUKNEgcwKeGwPtMJQdilIrQIESDWJpuQD4ilN+XuntwbLzJ2qZK1CqQTw/FtqSsBtwbaPixZmvj86HX6pBLLHHOBdGsGJ0ZpKrOr/KMhagZINYWtr+JvLOpXB3zyS64yNTk5RuEEvLjcBCjvm5rWeSWx1jEHVNBbpgEJPG3mrZ2y2vZiZdE7AnilpGCnTFIJaSR4DpHXNzTe/Nmh2mUstEgS4ZxFJir2CncMyNlf5ZwZFf1BUV6JpBpkygaNv5zvW5Ki6RbnfvmkEs2zMADzun/XRgXecYRD+EAl00iMnivR3FYjgB2GSIHKmLowJdNYhJ7l35xGKwE4h2ElEtUQW6bBBLybLApc65OQjY0TkG0fdRoOsGMVnWAM5xXiH7OFeAdJ5+uvQyyMTcWDUS73McuwL7p7tUuhmZDPJW3r+XwE2zVmR7QjeXYpqzlkFG5sUKMOzpnCqrCHmscwyi7ykgg0y6FH6SwOWa6wOnapX6KyCDjJ6DE4ENHNPzam9zo04lOibBqGWQ/gnwvrLtmd7mxiuc10in6WWQsdPvfeDKtsR8Cbip06vUcfIyyGDx7Qq1Tw/uFq3HPcCSwL+jMQi4rwIyyHCL4y5g9uG6Rul1O7CobsiNou2YoDLI8Jo/Bkw3fPfgPe1J5nl0OPiEcgCUQaplyW6PmrzakKC9fwcsHhRRYHqCBFwD44AXA+LVgbLNlcvXGagx1RXQE6S6ZjMCVvPKs9kNWqt6BtAVbhmkXqbnAu6oNzTYqDOBtYOhCWhUBWSQ+gtjYeD6+sODjLQv/hsFQRKIDBJhDSwH/CYCbhXInwHfrTJAfYdXQE+Q4bXq19MKwp3VHKYRwiHA9o0QNFhPkIhrwIovHBcRfxhonUocRqWKffQEqSjYGN3tf3A7X+7ZtgMO9QygNG4ZJGxGfwh8PyxkZTT7o93+eFcLoIAMEkDEd0AcBowPD1sJ0e5pPK/SCHXW3yAtroGTATsV6NmWBq70DKAEbj1B4mXRavB6f+22bfo3x5ti+cgySNwc2//gdpbDqz0HzAPYmRK1GgrIIDVEqzjETgMuUHFMyO6PAnP0LhYNidsJLBmknTTbzVKztUM1Kst9wCyO/NlSyyDtpe5xYNr26CZhss2VczvyZ0ktg7SbttfapZuEzf5g9zxf7zz96vQySHXNmox4F/B8E4AAY68DFguA0wkIGaT9NH8QeLB92hGMl/WufnAOI316GcQnR/a3gFUq8Ww6lTiE+jLIECJF6rII8IdI2MPC2hd/zxKrw8bp1k8GcZP+dWKrmnixbwjY3rFtnGNIll4G8U/NWsAZzmHYtQ97OceQJL0MkkZaNgOOcQ7FLhCyqx/U3qaADJLOcrCLPA90DmdD4CTnGJKil0GSSgf7Ars7h7Q6YDuR1XQ/SJJr4AhgS+fIlgKuco4hCXo9QZJIwyRBnAKs5xya7UC+xTkGd3oZxD0FfQOwD3mrOIc3K3Cvcwyu9DKIq/wDye1nzhIDe8Xt8D7g6bgU6aLLIOnm5o3I7GfOfI5hvgBM7cjvSi2DuMo/NLkdmfU88GRnWT4wdLQFdZRB8knmk4D93PFqnTyVKIN4Lbd6vN4Hrv4CzF8v9DxHySB55W0a4FnnkK92rtTS6vRlkFblDkI2E3B/EKT6IBcAq9Ufns9IGSSfXL09Uqt1dZtz6J04SyKDOK+yBvR2b7qdL/dsE4BtPQOIzS2DxFY4Lv6KwEVxKQaiF32WRAYZmP/kO9hFnqc7R2mHvrxv2YoigQwSRdbWQTcHjmqddSRhkZsbZRDnVRWQfifggIB4VaHsdi079FVUk0GKSif7Abs6TekhwO6PL2pjowzitJoi0h4JbBERfyzoZYArnLij0MogUWR1Bz0N+IZDFDsABzvwRqOUQaJJ6w78a2DllqOwp5f3ceGgU5ZBgsqZHNg1wOItRlXcFhQZpMXV40T1V+CTLXHLIC0JLZqwCti58pnDQo6Kpp9YLYgsijgK2OvX98SBfhPV3p55f7AMOkX9xAoqZ/JgsQ9c2bFgO3lYTJNBiknlUBN5N/DMUD2rd7JqjFaVsagmgxSVzqEm85EI/8u/1Dtl6H3fyVACVOkkg1RRq5y+8wK3BpxOsVveZZCAqyQzKLvI89oAMV8IfDkATpIQMkiSaWktKHv1ewKwfE1GK7Q9vubYLIbJIFmkKWqQ4+D1XcDbV2CxohG2a9jOpRfdZJCi01tpcssCdtOVvYmaqs9I+7vlbOBo4IFK6Jl2lkEyTVzEsO2JYtvW7eeXfdewr/D2bcNqBHfCFG/XVgaJuNIEnb8CMkj+OdQMIiogg0QUV9D5KyCD5J9DzSCiAjJIRHEFnb8CMkj+OdQMIiogg0QUV9D5KyCD5J9DzSCiAjJIRHEFnb8CMkj+OdQMIiogg0QUV9D5KyCD5J9DzSCiAv8HDBCJ2KOdZusAAAAASUVORK5CYII="
    }, 114: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return a
        }), n.d(t, "h", function () {
            return r
        }), n.d(t, "g", function () {
            return c
        }), n.d(t, "e", function () {
            return o
        }), n.d(t, "f", function () {
            return i
        }), n.d(t, "b", function () {
            return s
        }), n.d(t, "c", function () {
            return u
        }), n.d(t, "d", function () {
            return l
        });
        var a = {
                YANTAI: "yantai",
                XIAN: "xian",
                ZHANGJIAGANG: "zhangjiagang",
                GONGYOUYUN: "gongyouyun"
            }, r = "",
            c = "\u8bda\u9080\u60a8\u5171\u5efa\u672c\u5730\u670d\u52a1\u751f\u6001",
            o = "\u7aed\u8bda\u6b22\u8fce\u5de5\u4e1a\u5e94\u7528\uff0c\u5de5\u4e1a\u54c1\u4e0e\u5236\u9020\u670d\u52a1\uff0c\u6559\u80b2\u57f9\u8bad\u7b49\u670d\u52a1\u5546\u5165\u9a7b",
            i = [{
                logo: "/main_assets/cpEnter/product-icon.png",
                title: "\u5de5\u4e1a\u5e94\u7528\u5e02\u573a",
                url: "/main/cloud-resources/home",
                descript: "\u652f\u6301\u4f01\u4e1a\u5ba2\u6237\u4e00\u7ad9\u5f0f\u8d2d\u4e70\u591a\u4e2aSaaS\u5e94\u7528\uff0c\u5373\u4e70\u5373\u7528\uff1b\u4e00\u4e2a\u8d26\u53f7\u901a\u884c\uff1b\u7cbe\u786e\u638c\u63e1\u5458\u5de5\u4f7f\u7528\u72b6\u51b5\uff0c\u6309\u9700\u8d2d\u4e70"
            }, {
                logo: "/main_assets/cpEnter/league-icon.png",
                title: "\u534f\u540c\u5236\u9020\u5e02\u573a",
                url: "/main/i/league",
                descript: "\u4fbf\u4e8e\u4f01\u4e1a\u53d1\u5e03\u9700\u6c42\uff0c\u4ea7\u54c1\uff0c\u53ca\u670d\u52a1\uff0c\u5b9e\u73b0\u4fe1\u606f\u5feb\u901f\u89e6\u8fbe\u76ee\u6807\u4f01\u4e1a"
            }], s = !1, u = !1,
            l = {title: "\u8d44\u8baf\u4e2d\u5fc3", bannerClassName: "banner"}
    }, 1140: function (e, t, n) {
    }, 115: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return o
        });
        var a = n(0), r = n.n(a), c = n(18);

        // TODO delete
        // function o() {
        //     // return r.a.createElement("div", {
        //     //         className: "error-page",
        //     //         style: {
        //     //             width: 800,
        //     //             textAlign: "center",
        //     //             margin: "100px auto 0",
        //     //             padding: "50px",
        //     //             fontSize: "18px",
        //     //             lineHeight: 1.5,
        //     //             color: "#999",
        //     //             border: "1px solid #e0e0e0",
        //     //             backgroundColor: "#fff"
        //     //         }
        //     //     }, r.a.createElement("h2", null, "404"),
        //         r.a.createElement("p", null,
        //             "\u60a8\u8bbf\u95ee\u7684\u9875\u9762\u6ca1\u6709\u627e\u5230\uff01",
        //             r.a.createElement(c.Link, {to: "/"},
        //                 "\u8fd4\u56de\u9996\u9875")))
        // }
    }, 1169: function (e, t, n) {
    }, 1171: function (e, t, n) {
    }, 1173: function (e, t, n) {
    }, 1175: function (e, t, n) {
    }, 1181: function (e, t, n) {
    }, 1183: function (e, t, n) {
    }, 1185: function (e, t, n) {
    }, 1187: function (e, t, n) {
    }, 1189: function (e, t, n) {
    }, 1191: function (e, t, n) {
    }, 1193: function (e, t, n) {
    }, 1195: function (e, t, n) {
    }, 141: function (e, t, n) {
        "use strict";
        n.r(t);
        n(987);
        var a = n(19), r = n(139), c = n(83), o = n(929), i = n(74), s = n(0),
            u = n.n(s), l = n(87);

        function d(e) {
            var t = e.to, n = void 0 === t ? "javascript:;" : t,
                a = e.className, r = e.value, c = e.onClick,
                o = void 0 === c ? function () {
                } : c;
            return u.a.createElement("a", {className: a, href: n, onClick: o},
                r)
        }

        var m = function (e) {
            return e.error ? u.a.createElement("div", null,
                "\u754c\u9762\u52a0\u8f7d\u5931\u8d25!", " ",
                u.a.createElement(d, {
                    onClick: function () {
                        e.retry()
                    }, value: "\u8bf7\u91cd\u8bd5"
                })) : u.a.createElement(l.a, null)
        }, p = n(920), g = n(60), f = n(51);

        function h() {
            var e = Object(a.e)();
            return e.started ? e : (Object(r.a)({
                notification: {notification: o.a},
                router: {history: p.a, loading: m, moduleStrategy: c.b.RESET}
            }), e.use({
                api: i.a,
                hooks: {
                    beforeAjax: f.a.beforeAjax,
                    routeChange: f.a.routeChange,
                    ajaxDone: f.a.ajaxDone
                }
            }), e.use(g.messagesModel), e.start(), e)
        }

        var b = n(25), v = n(26), y = n(27), w = n(30), O = n(31), S = n(3),
            E = n.n(S), C = n(11), j = n.n(C), x = n(28), k = n(967),
            I = n.n(k), N = n(65), _ = n(946), A = n(42), D = n(4), M = n.n(D),
            P = n(43), R = n(23), L = n(114), T = (function () {
            }(), function () {
                function e() {
                }

                return e.prototype.getPortalLogo = function () {
                    return this.SettingLogos && this.SettingLogos.length > 1
                        ? this.SettingLogos[1].SettingIcon : null
                }, e.prototype.getPortalTitle = function () {
                    return this.SettingLogos && this.SettingLogos.length > 1
                        ? this.SettingLogos[1].Platform : null
                }, e.prototype.showWorkDay = function () {
                    return this.ShowWorkDay && this.WorkDay
                        ? "\u5468\u4e00\u81f3\u5468\u4e94" + this.WorkDay.replace(
                        /\s/g, "") : ""
                }, e.prototype.showSaturday = function () {
                    return this.ShowSaturday && this.Saturday ? "\u5468\u516d"
                        + this.Saturday.replace(/\s/g, "") : ""
                }, e.prototype.showSunday = function () {
                    return this.ShowSunday && this.Sunday ? "\u5468\u65e5"
                        + this.Sunday.replace(/\s/g, "") : ""
                }, e.prototype.showDayText = function () {
                    return [this.showWorkDay(), this.showSaturday(),
                        this.showSunday()].filter(function (e) {
                        return "" !== e
                    }).join("; ")
                }, e
            }()), q = n(901), B = n(902), U = n(15), G = [{
                namespace: "app",
                state: {
                    isReady: !1,
                    inlogined: !1,
                    showGlobalFooter: !0,
                    windowHeight: window.innerHeight,
                    headNavlist: [],
                    error: !1,
                    user: {synthesize_role: null, corpId: []},
                    account: new g.Account,
                    Permission: [],
                    corp: {},
                    providerInfo: null,
                    baseSetting: null,
                    urlDomin: null,
                    userStatus: {
                        isLogined: !1,
                        isRealName: !1,
                        isSPAdmin: !1,
                        isInCorp: !1,
                        isProvider: !1,
                        isCPAdmin: !1,
                        isLinkQcloud: void 0
                    },
                    userVip: {isVip: !1, MemberType: 0, ExpireTime: 0}
                },
                flows: {
                    ready: M.a.mark(function e(t, n) {
                        var a, r, c, o, i, s, u, l, d, m, p, g, f, h, b, v;
                        return M.a.wrap(function (e) {
                            for (; ;) {
                                switch (e.prev = e.next) {
                                    case 0:
                                        return t.payload, a = t.callback, r = n.put, c = n.callAction, o = n.select, i = n.all, s = n.call, u = n.context.service, e.next = 4, o(
                                            function (e) {
                                                return e.app
                                            });
                                    case 4:
                                        return l = e.sent, d = l.isReady, e.next = 8, s(
                                            u.getCloudInfo,
                                            {domain: window.location.origin});
                                    case 8:
                                        if (m = e.sent, 0 !== (p = m.resp).Code
                                        || !p.Cloud.Id) {
                                            e.next = 14;
                                            break
                                        }
                                        localStorage.setItem("CLOUD_ID",
                                            p.Cloud.Id), e.next = 15;
                                        break;
                                    case 14:
                                        return e.abrupt("return", !1);
                                    case 15:
                                        if (d) {
                                            e.next = 20;
                                            break
                                        }
                                        return e.next = 18, c({
                                            type: "getUserInfo",
                                            callback: function (e) {
                                                0 === e.Code || Object(
                                                    P.removeAccountInfo)(
                                                    "getUserInfo\u5931\u8d25")
                                            }
                                        });
                                    case 18:
                                        return e.next = 20, c(
                                            {type: "getUserPermission"});
                                    case 20:
                                        return e.next = 22, i(
                                            [c({type: "fetchMessages"}),
                                                c({type: "getBaseSetting"}),
                                                c({type: "getHeadNav"}), c({
                                                type: "initUserStatus",
                                                payload: {needGetUser: !0}
                                            })]);
                                    case 22:
                                        return e.next = 24, s(u.getUrl,
                                            Object(U.e)());
                                    case 24:
                                        return g = e.sent, f = g.resp, localStorage.setItem(
                                            "urlDomin",
                                            JSON.stringify(f)), e.next = 29, r({
                                            type: "change",
                                            payload: {isReady: !0, urlDomin: f}
                                        });
                                    case 29:
                                        return e.next = 31, o(function (e) {
                                            return e.app
                                        });
                                    case 31:
                                        h = e.sent, b = h.account, v = h.urlDomin, a(
                                            b,
                                            v);
                                    case 35:
                                    case"end":
                                        return e.stop()
                                }
                            }
                        }, e)
                    }), fetchMessages: M.a.mark(function e(t, n) {
                        var a, r, c, o;
                        return M.a.wrap(function (e) {
                            for (; ;) {
                                switch (e.prev = e.next) {
                                    case 0:
                                        return t.payload, a = n.callAction, r = n.select, e.next = 4, r(
                                            function (e) {
                                                return e.app
                                            });
                                    case 4:
                                        if (c = e.sent, !(o = c.account)
                                        || !o.AccountId) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 9, a({
                                            type: "messages/fetchMessages",
                                            payload: {Offset: 0, PageSize: 1}
                                        });
                                    case 9:
                                    case"end":
                                        return e.stop()
                                }
                            }
                        }, e)
                    }), getUserInfo: M.a.mark(function e(t, n) {
                        var a, r, c, o, i, s, u, l, d, m, p, f, h, b, v, y;
                        return M.a.wrap(function (e) {
                            for (; ;) {
                                switch (e.prev = e.next) {
                                    case 0:
                                        return t.payload, a = t.callback, r = n.call, n.callAction, c = n.put, o = n.context.service, e.next = 4, r(
                                            o.getUserInfo, Object(U.e)());
                                    case 4:
                                        if (i = e.sent, 0 !== (s = i.resp).Code) {
                                            e.next = 11;
                                            break
                                        }
                                        return u = s.data.Account, l = u.AccountId, d = u.NickName, m = u.Role, p = u.Strategy, f = u.ContactMail, h = u.ContactMobile, b = u.Status, v = u.MasterId, y = {
                                            AccountId: l,
                                            NickName: d,
                                            Role: m,
                                            Strategy: p,
                                            ContactMail: f,
                                            ContactMobile: h,
                                            synthesize_role: m,
                                            corpId: v,
                                            Status: b
                                        }, e.next = 11, c({
                                            type: "change",
                                            payload: {
                                                user: y,
                                                userInfo: s.data,
                                                account: new g.Account(s.Account)
                                            }
                                        });
                                    case 11:
                                        a && a(s);
                                    case 12:
                                    case"end":
                                        return e.stop()
                                }
                            }
                        }, e)
                    }), getUserPermission: M.a.mark(function e(t, n) {
                        var a, r;
                        return M.a.wrap(function (e) {
                            for (; ;) {
                                switch (e.prev = e.next) {
                                    case 0:
                                        return t.payload, t.callback, n.call, n.callAction, a = n.put, n.context.service, e.next = 4, Object(
                                            q.b)(
                                            Object(A.a)({}, B.a.getPermission, {
                                                data: {
                                                    Service: "access-manager-app",
                                                    Module: "access-manager",
                                                    Version: "2019-12-26",
                                                    ProductSource: "sp"
                                                }
                                            }));
                                    case 4:
                                        if (0 !== (r = e.sent).code) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.prev = 6, e.next = 9, a({
                                            type: "change",
                                            payload: {
                                                Permission: r.data.data.Response.Data
                                                    || []
                                            }
                                        });
                                    case 9:
                                        e.next = 15;
                                        break;
                                    case 11:
                                        return e.prev = 11, e.t0 = e.catch(
                                            6), e.next = 15, a({
                                            type: "change",
                                            payload: {Permission: []}
                                        });
                                    case 15:
                                    case"end":
                                        return e.stop()
                                }
                            }
                        }, e, null, [[6, 11]])
                    }), initUserStatus: M.a.mark(function e(t, n) {
                        var a, r, c, o, i, s, u, l, d, m, p, g, f, h, b, v, y;
                        return M.a.wrap(function (e) {
                            for (; ;) {
                                switch (e.prev = e.next) {
                                    case 0:
                                        if (a = t.payload, r = t.meta, c = n.put, n.call, n.context.service, o = n.callAction, i = n.select, !a
                                        || !0 !== a.needGetUser) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 5, o({type: "getUserInfo"});
                                    case 5:
                                        return e.next = 7, i(function (e) {
                                            return e.app
                                        });
                                    case 7:
                                        if (s = e.sent, u = s.account, l = !!u.AccountId, d = 3
                                            === u.Status, m = 10 === u.Role, p = m
                                            && u.SubAccount, g = 1
                                            === u.Role, f = 20
                                            === u.Strategy, h = !1, !(l && L.c
                                            && g)) {
                                            e.next = 19;
                                            break
                                        }
                                        return e.next = 19, c({
                                            type: "getUserVip",
                                            payload: {CorpId: u.MasterId}
                                        });
                                    case 19:
                                        if (b = void 0, !L.b) {
                                            e.next = 26;
                                            break
                                        }
                                        if (!f || m) {
                                            e.next = 26;
                                            break
                                        }
                                        return e.next = 24, o(
                                            {type: "getQcloudStatus"});
                                    case 24:
                                        (v = e.sent) && 0 === v.Code && (b = 3
                                            === v.QCloudAuthStatus);
                                    case 26:
                                        return y = {
                                            isLogined: l,
                                            isRealName: d,
                                            isSPAdmin: m,
                                            isSPSubAdmin: p,
                                            isInCorp: g,
                                            isCPAdmin: f,
                                            isProvider: h,
                                            isLinkQcloud: b
                                        }, e.next = 29, c(
                                            {
                                                type: "change",
                                                payload: {userStatus: y}
                                            });
                                    case 29:
                                        r && r.resolve && r.resolve(y);
                                    case 30:
                                    case"end":
                                        return e.stop()
                                }
                            }
                        }, e)
                    }), getUserVip: M.a.mark(function e(t, n) {
                        var a, r, c, o, i, s, u, l, d;
                        return M.a.wrap(function (e) {
                            for (; ;) {
                                switch (e.prev = e.next) {
                                    case 0:
                                        return a = t.payload, r = n.call, n.callAction, c = n.put, o = n.context.service, i = (a
                                            || {}).CorpId, s = {corp_id: i}, e.next = 6, r(
                                            o.getMemberStatus, Object(U.e)(s));
                                    case 6:
                                        if (u = e.sent, 0 !== (l = u.resp).Code) {
                                            e.next = 13;
                                            break
                                        }
                                        if (!(d = l.Status)) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 13, c({
                                            type: "change",
                                            payload: {
                                                userVip: Object(A.a)({}, d,
                                                    {isVip: d.MemberType > 0})
                                            }
                                        });
                                    case 13:
                                    case"end":
                                        return e.stop()
                                }
                            }
                        }, e)
                    }), getCorpInfo: M.a.mark(function e(t, n) {
                        var a, r, c, o, i, s;
                        return M.a.wrap(function (e) {
                            for (; ;) {
                                switch (e.prev = e.next) {
                                    case 0:
                                        if (a = t.payload, n.put, r = n.call, c = n.context.service, n.callAction, n.select, a.CorpId) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        return e.next = 6, r(c.checkProvider,
                                            Object(U.e)({CorpIds: a.CorpId}));
                                    case 6:
                                        if (o = e.sent, 0 !== (i = o.resp).Code) {
                                            e.next = 15;
                                            break
                                        }
                                        if (s = i.Status, -1 === [2, 5, 6].indexOf(
                                            s)) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.abrupt("return", !0);
                                    case 14:
                                        return e.abrupt("return", !1);
                                    case 15:
                                    case"end":
                                        return e.stop()
                                }
                            }
                        }, e)
                    }), getHeadNav: M.a.mark(function e(t, n) {
                        var a, r, c, o, i;
                        return M.a.wrap(function (e) {
                            for (; ;) {
                                switch (e.prev = e.next) {
                                    case 0:
                                        return Object(_.a)(
                                            t), a = n.put, r = n.call, c = n.context.service, e.next = 4, r(
                                            c.getMenu, Object(U.e)());
                                    case 4:
                                        if (o = e.sent, 0 !== (i = o.resp).Code) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.next = 9, a({
                                            type: "change",
                                            payload: {headNavlist: i.Infos}
                                        });
                                    case 9:
                                        e.next = 12;
                                        break;
                                    case 11:
                                        R.a.error(i.Msg
                                            || "\u83b7\u53d6\u83dc\u5355\u5931\u8d25");
                                    case 12:
                                    case"end":
                                        return e.stop()
                                }
                            }
                        }, e)
                    }), getProvidrInfo: M.a.mark(function e(t, n) {
                        var a, r, c, o, i, s, u, l, d, m;
                        return M.a.wrap(function (e) {
                            for (; ;) {
                                switch (e.prev = e.next) {
                                    case 0:
                                        return a = t.payload, r = t.meta, c = r.resolve, o = r.reject, i = n.call, s = n.put, u = n.context.service, l = {AccountId: a.corpId}, e.next = 5, i(
                                            u.getProviderDetailV2, Object(U.e)(l));
                                    case 5:
                                        if (d = e.sent, 0 !== (m = d.resp).Code) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 10, s({
                                            type: "change",
                                            payload: {
                                                providerInfo: m.ProviderPcDetail
                                                    || null
                                            }
                                        });
                                    case 10:
                                        c && c(), e.next = 14;
                                        break;
                                    case 13:
                                        o && o();
                                    case 14:
                                    case"end":
                                        return e.stop()
                                }
                            }
                        }, e)
                    }), getBaseSetting: M.a.mark(function e(t, n) {
                        var a, r, c, o, i, s, u, l, d, m, p, g, f, h, b, v, y, w, O,
                            S, E, C, j, x;
                        return M.a.wrap(function (e) {
                            for (; ;) {
                                switch (e.prev = e.next) {
                                    case 0:
                                        if (a = t.payload, r = n.put, c = n.call, o = n.context.service, i = n.callAction, s = n.select, e.prev = 2, !a
                                        || !0 !== a.needGetUser) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 6, i({type: "getUserInfo"});
                                    case 6:
                                        return e.next = 8, s(function (e) {
                                            return e.app
                                        });
                                    case 8:
                                        if (u = e.sent, l = u.account, void 0
                                        !== Object(U.b)("Code") && location.search
                                        && sessionStorage.setItem("urlSearch",
                                            location.search), d = null, l.isLogin()) {
                                            e.next = 27;
                                            break
                                        }
                                        if (null !== sessionStorage.getItem(
                                            "urlSearch")) {
                                            e.next = 19;
                                            break
                                        }
                                        return e.next = 16, c(o.getCmsSetting,
                                            Object(U.e)());
                                    case 16:
                                        d = e.sent, e.next = 25;
                                        break;
                                    case 19:
                                        for (g inm = sessionStorage.getItem(
                                            "urlSearch").substring(1).split(
                                            "&"), p = {}, m
                                    )
                                        f = m[g].split(
                                            "=")[0], h = m[g].split(
                                            "=")[1], p[f] = h;
                                        return e.next = 24, c(o.getCmsSetting,
                                            Object(U.e)({Code: p.Code}));
                                    case 24:
                                        d = e.sent;
                                    case 25:
                                        e.next = 30;
                                        break;
                                    case 27:
                                        return e.next = 29, c(o.getCmsSetting,
                                            Object(U.e)({AgentId: l.AgentId}));
                                    case 29:
                                        d = e.sent;
                                    case 30:
                                        if (0 === d.resp.Code) {
                                            e.next = 32;
                                            break
                                        }
                                        throw d.resp.Msg;
                                    case 32:
                                        return (b = d.resp.Setting
                                            || {}).SettingLogos
                                        || (b.SettingLogos = [{
                                            Platform: "",
                                            SettingIcon: ""
                                        }, {Platform: "", SettingIcon: ""}, {
                                            Platform: "",
                                            SettingIcon: ""
                                        }]), v = new T, Object.assign(v, b), 1, b
                                        && b.SettingLogos && b.SettingLogos.length
                                        > 2
                                        && (y = b.SettingLogos.filter(function (e) {
                                            return 1 === e.LogoType
                                        }), w = y[0]
                                            || {}, O = w.SettingIcon, S = w.Platform, E = O, C = S, j = function (e) {
                                            var t = document.querySelector(
                                                'link[rel="icon"]');
                                            null !== t ? t.href = e
                                                : ((t = document.createElement(
                                                "link")).rel = "icon", t.href = e, document.head.appendChild(
                                                t))
                                        }, document.title = C, j(
                                            E)), e.next = 40, r({
                                            type: "change",
                                            payload: {baseSetting: v}
                                        });
                                    case 40:
                                        e.next = 47;
                                        break;
                                    case 42:
                                        e.prev = 42, e.t0 = e.catch(
                                            2), x = "\u63d0\u4ea4\u5931\u8d25", "string"
                                        === typeof e.t0 && (x = e.t0), R.a.error(x);
                                    case 47:
                                    case"end":
                                        return e.stop()
                                }
                            }
                        }, e, null, [[2, 42]])
                    }), getQcloudStatus: M.a.mark(function e(t, n) {
                        var a, r, c, o;
                        return M.a.wrap(function (e) {
                            for (; ;) {
                                switch (e.prev = e.next) {
                                    case 0:
                                        return t.payload, t.callback, a = n.call, r = n.context.service, e.next = 4, a(
                                            r.getPaymentInfo, Object(U.e)());
                                    case 4:
                                        if (c = e.sent, 0 !== (o = c.resp).Code) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return", o);
                                    case 8:
                                    case"end":
                                        return e.stop()
                                }
                            }
                        }, e)
                    })
                }
            }, {
                namespace: "appMsg",
                state: {notice: ""},
                flows: {
                    ready: M.a.mark(function e(t, n) {
                        return M.a.wrap(function (e) {
                            for (; ;) {
                                switch (e.prev = e.next) {
                                    case 0:
                                        t.payload, n.call, n.put, n.callAction, n.all, n.select, n.take, n.context.service;
                                    case 2:
                                    case"end":
                                        return e.stop()
                                }
                            }
                        }, e)
                    })
                }
            }], H = n(6), V = n(115);

        function z() {
            return u.a.createElement("div", {
                    className: "error-page",
                    style: {
                        width: 800,
                        textAlign: "center",
                        margin: "100px auto 0",
                        padding: "50px",
                        fontSize: "18px",
                        lineHeight: 1.5,
                        color: "#999",
                        border: "1px solid #e0e0e0",
                        backgroundColor: "#fff"
                    }
                }, u.a.createElement("h2", null, "\u65e0\u6743\u9650"),
                u.a.createElement("p", null,
                    "\u4f60\u7684\u8d26\u6237\u65e0\u6743\u9650\u8bbf\u95ee\u6b64\u9875\uff0c\u8bf7",
                    u.a.createElement(d, {
                        onClick: function () {
                            Object(N.g)("/")
                        }, value: "\u91cd\u65b0\u767b\u5f55"
                    })))
        }

        var F = n(84), J = (n(1131), n(22)), Q = n(8), W = n(14), Z = n.n(W),
            K = n(918), X = n.n(K), Y = n(54), $ = n.n(Y),
            ee = (n(1135), n(1137), function (e) {
                var t = e.children, a = e.title, r = e.canBack, c = e.back;
                return u.a.createElement("div", {className: "sso-box-new"},
                    u.a.createElement("div", {className: "sso-box-header"},
                        r ? u.a.createElement("img", {
                            className: "box-icon-back",
                            src: n(1139),
                            onClick: c
                        }) : null,
                        u.a.createElement("span", {className: "box-title"}, a)),
                    u.a.createElement("div", {className: "sso-form"}, t))
            }), te = (n(1140), function (e) {
                var t = e.jump, n = Object(s.useState)(1), a = Object(Q.a)(n, 2),
                    r = a[0], c = a[1];
                return u.a.createElement("div", {className: "login-type-content"},
                    [{
                        title: "\u4e0e\u73b0\u6709\u8d26\u53f7\u7ed1\u5b9a",
                        desc: "\u60a8\u53ef\u4ee5\u4e0e\u73b0\u6709\u5de5\u4e1a\u4e91\u8d26\u53f7\u7ed1\u5b9a",
                        activeIndex: 1
                    }, {
                        title: "\u521b\u5efa\u65b0\u8d26\u53f7",
                        desc: "\u60a8\u53ef\u4ee5\u521b\u5efa\u65b0\u7684\u5de5\u4e1a\u4e91\u8d26\u53f7",
                        activeIndex: 2
                    }].map(function (e) {
                        return u.a.createElement("div", {
                                className: "login-type-item ".concat(
                                    r === e.activeIndex ? "active" : ""),
                                onClick: function () {
                                    return c(e.activeIndex)
                                }
                            }, u.a.createElement("img",
                            {src: "/main_assets/avatar.png"}),
                            u.a.createElement("div", {className: "item-content"},
                                u.a.createElement("div", {className: "title"},
                                    e.title),
                                u.a.createElement("div", {className: "desc"},
                                    e.desc)))
                    }), u.a.createElement("div", {className: "tea-form-operate"},
                        u.a.createElement("button", {
                            type: "submit", disabled: !r, onClick: function () {
                                t(r)
                            }, style: {marginTop: "130px"}
                        }, "\u786e\u5b9a")))
            }), ne = n(53), ae = n(21), re = n(56), ce = n(99), oe = n(34),
            ie = function (e) {
                var t = e.type, n = e.login, a = e.BindCode, r = e.wwParams,
                    c = e.baseParams, o = function () {
                        var e = Object(J.a)(M.a.mark(function e(o) {
                            var i, s, u, l, d, m;
                            return M.a.wrap(function (e) {
                                for (; ;) {
                                    switch (e.prev = e.next) {
                                        case 0:
                                            if (i = o.user, s = o.userPsd, "wx"
                                            !== t) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 4, Object(ae.a)(
                                                ae.c.bindWxUser, {
                                                    BindCode: a,
                                                    User: i,
                                                    Password: s,
                                                    Extra: JSON.stringify(c)
                                                });
                                        case 4:
                                            u = e.sent, 0 === (l = u.resp).Code ? n(
                                                l.AuthCode) : R.a.error(
                                                l.Msg), e.next = 14;
                                            break;
                                        case 9:
                                            return e.next = 11, Object(ae.a)(
                                                ae.c.postLogin, {
                                                    login_appid: c.LoginAppId,
                                                    redirect_uri: c.RedirectUri,
                                                    scope: c.scope,
                                                    state: "",
                                                    response_type: "code",
                                                    user: i,
                                                    password: s,
                                                    login_type: 1,
                                                    login_extra: JSON.stringify(r)
                                                });
                                        case 11:
                                            d = e.sent, 0 === (m = d.resp).Code
                                                ? window.location.href = m.redirect_uri
                                                : R.a.error(m.Msg);
                                        case 14:
                                        case"end":
                                            return e.stop()
                                    }
                                }
                            }, e)
                        }));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }(), i = [{
                        name: "user",
                        rules: [].concat(Object(ne.a)(
                            Object(oe.c)("\u624b\u673a\u53f7\u6216\u90ae\u7bb1",
                                50)), [{
                            diy: Object(oe.e)(re.a.mobileEmail),
                            message: "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u8d26\u53f7"
                        }]),
                        getComponent: function (e) {
                            return u.a.createElement("input",
                                Object.assign({type: "text", autoComplete: "no"}, e,
                                    {placeholder: "\u624b\u673a\u53f7/\u90ae\u7bb1"}))
                        }
                    }, {
                        name: "userPsd",
                        rules: [].concat(
                            Object(ne.a)(Object(oe.c)("\u5bc6\u7801", 20)), [{
                                diy: Object(oe.h)(8),
                                message: "\u5bc6\u7801\u957f\u5ea6\u4e0d\u5c11\u4e8e8\u4f4d"
                            }]),
                        getComponent: function (e) {
                            return u.a.createElement("input", Object.assign(
                                {type: "password", autoComplete: "new-password"}, e,
                                {placeholder: "\u5bc6\u7801"}))
                        }
                    }];
                return u.a.createElement(u.a.Fragment, null,
                    u.a.createElement("div", {className: "form-title"},
                        "\u8bf7\u8f93\u5165\u73b0\u6709\u5de5\u4e1a\u4e91\u8d26\u53f7\u5bc6\u7801"),
                    u.a.createElement(ce.a, {onSubmit: o, fields: i},
                        function (e) {
                            return u.a.createElement("button",
                                {type: "submit", disabled: e}, "\u7ed1\u5b9a")
                        }))
            }, se = function (e) {
                var t = e.type, n = e.login, a = e.BindCode, r = e.wwParams,
                    c = e.baseParams, o = c.LoginAppId, i = c.RedirectUri,
                    l = c.scope,
                    d = Object(s.useState)("\u53d1\u9001\u9a8c\u8bc1\u7801"),
                    m = Object(Q.a)(d, 2), p = m[0], g = m[1],
                    f = Object(s.useState)({}), h = Object(Q.a)(f, 2), b = h[0],
                    v = h[1], y = Object(s.useState)(!1), w = Object(Q.a)(y, 2),
                    O = w[0], S = w[1], E = window.TencentCaptcha, C = function () {
                        var e = Object(J.a)(M.a.mark(function e(s) {
                            var u, d, m, p, g, f, h, v;
                            return M.a.wrap(function (e) {
                                for (; ;) {
                                    switch (e.prev = e.next) {
                                        case 0:
                                            if (u = s.uesrPhone, d = s.userCode, m = s.userEmail, p = s.userPsd, "wx"
                                            !== t) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 4, Object(ae.a)(
                                                ae.c.regWxUser,
                                                {
                                                    Tel: u,
                                                    TelTicket: d,
                                                    Email: m,
                                                    Password: p,
                                                    BindCode: a,
                                                    Extra: JSON.stringify(c)
                                                });
                                        case 4:
                                            g = e.sent, 0 === (f = g.resp).Code ? n(
                                                f.AuthCode) : R.a.error(
                                                f.Msg), e.next = 14;
                                            break;
                                        case 9:
                                            return e.next = 11, Object(ae.a)(
                                                ae.c.postRegistered, {
                                                    Email: m,
                                                    Password: p,
                                                    Tel: u,
                                                    TelTicket: d,
                                                    Randstr: b.randstr,
                                                    Ticket: b.ticket,
                                                    RegType: 1,
                                                    RegExtra: JSON.stringify(
                                                        Object(A.a)({}, r, {
                                                            LoginAppId: o,
                                                            RedirectUri: i,
                                                            Scope: l
                                                        }))
                                                });
                                        case 11:
                                            h = e.sent, 0 === (v = h.resp).Code ? n(
                                                v.AuthCode) : R.a.error(v.Msg);
                                        case 14:
                                        case"end":
                                            return e.stop()
                                    }
                                }
                            }, e)
                        }));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }(), j = [{
                        name: "uesrPhone",
                        rules: [].concat(
                            Object(ne.a)(Object(oe.c)("\u624b\u673a\u53f7", 11)), [{
                                diy: Object(oe.e)(re.a.mobile),
                                message: "\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef"
                            }]),
                        getComponent: function (e, t, n) {
                            return u.a.createElement("div",
                                {style: {position: "relative"}},
                                u.a.createElement("input",
                                    Object.assign({type: "text", autoComplete: "no"}, e,
                                        {placeholder: "\u8bf7\u8f93\u5165\u624b\u673a\u53f7"})),
                                u.a.createElement("button", {
                                    disabled: O,
                                    className: "btn-send-code",
                                    onClick: function (e) {
                                        return x(e, t, n)
                                    }
                                }, p))
                        }
                    }, {
                        name: "userCode",
                        rules: [].concat(
                            Object(ne.a)(Object(oe.c)("\u9a8c\u8bc1\u7801", 6)), [{
                                diy: Object(oe.f)(6),
                                message: "\u8bf7\u8f93\u51656\u4f4d\u9a8c\u8bc1\u7801"
                            }]),
                        getComponent: function (e) {
                            return u.a.createElement("input", Object.assign({
                                    maxLength: 6,
                                    type: "text",
                                    autoComplete: "off",
                                    className: "ipt_box_ipt"
                                }, e,
                                {placeholder: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"}))
                        }
                    }, {
                        name: "userEmail",
                        rules: [].concat(Object(ne.a)(Object(oe.c)("\u90ae\u7bb1", 50)),
                            [{
                                diy: Object(oe.e)(re.a.email),
                                message: "\u90ae\u7bb1\u683c\u5f0f\u9519\u8bef"
                            }]),
                        getComponent: function (e) {
                            return u.a.createElement("input",
                                Object.assign({type: "text", autoComplete: "no"}, e,
                                    {placeholder: "\u90ae\u7bb1"}))
                        }
                    }, {
                        name: "userPsd",
                        rules: [].concat(Object(ne.a)(Object(oe.c)("\u5bc6\u7801", 20)),
                            [{
                                diy: Object(oe.h)(8),
                                message: "\u5bc6\u7801\u957f\u5ea6\u4e0d\u5c11\u4e8e8\u4f4d"
                            }]),
                        getComponent: function (e) {
                            return u.a.createElement("input", Object.assign(
                                {type: "password", autoComplete: "new-password"}, e,
                                {placeholder: "\u5bc6\u7801"}))
                        }
                    }], x = function (e, t, n) {
                        e.preventDefault();
                        var a = Object(oe.b)(j[0].rules, t.uesrPhone);
                        a ? R.a.warning(a) : new E("2019866677", function (e) {
                            if (0 == e.ret) {
                                S(!0), v(e);
                                var n = 60, a = setInterval(function () {
                                    --n > 0 ? g("".concat(n,
                                        "\u79d2\u540e\u53ef\u91cd\u65b0\u53d1\u9001"))
                                        : (clearTimeout(a), g(
                                        "\u53d1\u9001\u9a8c\u8bc1\u7801"), S(!1))
                                }, 1e3);
                                k(e.randstr, t.uesrPhone, e.ticket)
                            }
                        }).show()
                    }, k = function () {
                        var e = Object(J.a)(M.a.mark(function e(t, n, a) {
                            var r, c;
                            return M.a.wrap(function (e) {
                                for (; ;) {
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(ae.a)(
                                                ae.c.postTelCode,
                                                {Randstr: t, Tel: n, Ticket: a});
                                        case 2:
                                            r = e.sent, 0 === (c = r.resp).Code
                                                ? R.a.success(
                                                    "\u53d1\u9001\u77ed\u4fe1\u6210\u529f")
                                                : R.a.error(c.Msg);
                                        case 5:
                                        case"end":
                                            return e.stop()
                                    }
                                }
                            }, e)
                        }));
                        return function (t, n, a) {
                            return e.apply(this, arguments)
                        }
                    }();
                return u.a.createElement(ce.a, {onSubmit: C, fields: j},
                    function (e) {
                        return u.a.createElement("button",
                            {type: "submit", disabled: e}, "\u6ce8\u518c")
                    })
            }, ue = function () {
                var e = {
                        LoginAppId: localStorage.getItem("login_appid"),
                        RedirectUri: "".concat(window.location.origin,
                            "/main/checkLogin"),
                        scope: "scope"
                    }, t = $()().location, n = Object(s.useState)(0),
                    a = Object(Q.a)(n, 2), r = a[0], c = a[1],
                    o = Object(s.useState)(), i = Object(Q.a)(o, 2), l = i[0],
                    d = i[1], m = Object(s.useState)({}), p = Object(Q.a)(m, 2),
                    g = p[0], f = p[1], h = Z.a.parse(decodeURIComponent(t.search)),
                    b = h.type, v = function () {
                        var e = Object(J.a)(M.a.mark(function e(t) {
                            return M.a.wrap(function (e) {
                                for (; ;) {
                                    switch (e.prev = e.next) {
                                        case 0:
                                            window.location.href = "/main/checkLogin?code=".concat(
                                                t);
                                        case 1:
                                        case"end":
                                            return e.stop()
                                    }
                                }
                            }, e)
                        }));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }();
                Object(s.useEffect)(function () {
                    !function () {
                        if ("wx" === b) {
                            var e = h.BindCode;
                            d(e)
                        } else {
                            var t = h.CorpId, n = h.UserId, a = h.NickName;
                            f({CorpId: t, UserId: n, NickName: a})
                        }
                    }()
                }, []);
                return u.a.createElement("div", {
                    className: "qcd-loginBox",
                    style: {
                        background: "url(".concat(X.a,
                            ") no-repeat center / cover"),
                        minHeight: window.innerHeight - 54 + "px"
                    }
                }, u.a.createElement(ee, {
                    canBack: r,
                    title: 0 === r ? "\u9009\u62e9\u767b\u5f55\u65b9\u5f0f" : 1
                    === r ? "\u8d26\u53f7\u7ed1\u5b9a"
                        : "\u65b0\u7528\u6237\u6ce8\u518c",
                    back: function () {
                        return c(0)
                    }
                }, u.a.createElement("div",
                    {style: {display: 0 === r ? "" : "none"}},
                    u.a.createElement(te, {
                        jump: function (e) {
                            return c(e)
                        }
                    })), function (t) {
                    var n = {type: b, login: v, BindCode: l};
                    switch (t) {
                        case 1:
                            return u.a.createElement(ie,
                                Object.assign({}, n, {wwParams: g, baseParams: e}));
                        case 2:
                            return u.a.createElement(se,
                                Object.assign({}, n, {wwParams: g, baseParams: e}))
                    }
                }(r)))
            }, le = (n(1171), n(46)), de = {
                "/wuzi": {url: "https://cloud-industry-1257948216.file.myqcloud.com/wemake03030900/wemake1.html"},
                "/fugong": {url: "https://cloud-industry-1257948216.file.myqcloud.com/wemake03030900/wemake2.html"},
                "/fakong": {url: "https://cloud-industry-1257948216.file.myqcloud.com/wemake03030900/wemake3.html"},
                "/xinxi": {url: "https://cloud-industry-1257948216.file.myqcloud.com/wemake03030900/wemake4.html"},
                "/yiliao": {url: "https://cloud-industry-1257948216.file.myqcloud.com/wemake03030900/wemake5.html"},
                "/bangong": {url: "https://cloud-industry-1257948216.file.myqcloud.com/wemake03030900/wemake6.html"},
                "/jiaoyu": {url: "https://cloud-industry-1257948216.file.myqcloud.com/wemake03030900/wemake7.html"},
                "/jinrong": {url: "https://cloud-industry-1257948216.file.myqcloud.com/wemake03030900/wemake8.html"},
                "/dashuju": {url: "https://cloud-industry-1257948216.file.myqcloud.com/wemake03030900/wemake9.html"},
                "/jidi": {url: "https://cloud-industry-1257948216.file.myqcloud.com/wemake03030900/wemake10.html"},
                "/yunlin": {
                    url: (window.location.protocol || "https:")
                        + "//finance.cloud.tencent.com/ttr/web/page/product-recommend.html",
                    accessToken: !0
                },
                "/zjg/dashuju": {url: "https://frontend.imtenrent.com/dashuju"},
                "/frontend/jidi": {url: "https://frontend.imtenrent.com/jidi"},
                "/market": {url: "https://market.imtenrent.com/index"},
                "/service": {url: "https://service-center.imtenrent.com/service_hall"},
                "/demand": {url: "https://demand.imtenrent.com/demand"},
                "/area-cloud": {url: "https://area-cloud.imtenrent.com/index"},
                "/area-cloud/caseList": {url: "https://area-cloud.imtenrent.com/caseList"},
                "/service_hall": {url: "https://service-center.imtenrent.com/service_hall"},
                "/frontend/service_sla": {url: "https://frontend.imtenrent.com/service_sla"},
                "/frontend/secret_sla": {url: "https://frontend.imtenrent.com/secret_sla"},
                "/frontend/about": {url: "https://frontend.imtenrent.com/about"},
                "/service/digital_factory_1": {url: "https://service-center.imtenrent.com/digital_factory_1"},
                "/service/digital_factory_2": {url: "https://service-center.imtenrent.com/digital_factory_2"},
                "/service/digital_factory_3": {url: "https://service-center.imtenrent.com/digital_factory_3"},
                "/service/digital_factory_4": {url: "https://service-center.imtenrent.com/digital_factory_4"},
                "/service/digital_factory_5": {url: "https://service-center.imtenrent.com/digital_factory_5"},
                "/service/diagnosis": {url: "https://service-center.imtenrent.com/diagnosis"},
                "/service/grade": {url: "https://service-center.imtenrent.com/grade"},
                "/service/declare": {url: "https://service-center.imtenrent.com/declare"},
                "/service/finance": {url: "\thttps://service-center.imtenrent.com/finance"},
                "/service/investment": {url: "https://service-center.imtenrent.com/investment"}
            }, me = function () {
                var e = Object(s.useRef)(null),
                    t = Object(x.useSelector)(function (e) {
                        return e.app
                    }).urlDomin, n = $()().location, a = Object(s.useState)(""),
                    r = Object(Q.a)(a, 2), c = r[0], o = r[1], i = 9;
                "page" === n.pathname.split("/")[2] && (i = 11);
                var l = "/" + n.pathname.slice(i), d = de[l], m = n.query || {};

                function p() {
                    return (p = Object(J.a)(M.a.mark(function e() {
                        var t, n, a, r, c, i;
                        return M.a.wrap(function (e) {
                            for (; ;) {
                                switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(ae.a)(
                                            ae.c.getCorpInfo);
                                    case 2:
                                        return t = e.sent, n = t.resp, a = JSON.stringify(
                                            n), e.next = 7, Object(ae.a)(
                                            ae.c.getUserInfo);
                                    case 7:
                                        r = e.sent, c = JSON.stringify(
                                            r.resp), i = JSON.stringify(
                                            {getUserInfo: c, getCorpInfo: a}), o(i);
                                    case 11:
                                    case"end":
                                        return e.stop()
                                }
                            }
                        }, e)
                    }))).apply(this, arguments)
                }

                if (Object(s.useEffect)(function () {
                    return document.body.style.overflow = "hidden", function () {
                        document.body.style.overflow = "auto"
                    }
                }, []), Object(s.useEffect)(function () {
                    c && document.getElementById(
                        "iframe").contentWindow.postMessage(c, "*")
                }, [c]), Object(s.useEffect)(function () {
                    var e = function (e) {
                        if ("object" === typeof e.data
                            && e.data.type) {
                            switch (e.data.type) {
                                case"login":
                                    le.a.getPassportHost();
                                    break;
                                case"corpAuth":
                                    window.location.href = "".concat(t.protocol,
                                        "//").concat(t.console_host,
                                        "/account/enterprise-auth");
                                    break;
                                case"subuserBindMobile":
                                    window.location.href = "".concat(t.protocol,
                                        "//").concat(t.console_host, "/account");
                                    break;
                                case"corpAuth":
                                    window.location.href = "".concat(
                                        window.location.protocol, "//").concat(
                                        window.location.hostname,
                                        "/console/account/enterprise-auth")
                            }
                        }
                    };
                    return window.addEventListener("message", e, !1), function () {
                        window.removeEventListener("message", e)
                    }
                }, []), d && d.url) {
                    var g = d.url, f = g.split("?")[0],
                        h = Z.a.parse(g.split("?")[1]);
                    return m = Object.assign({}, h, m,
                        {CloudId: localStorage.getItem("CLOUD_ID")}), g = f + "?"
                        + Z.a.stringify(m), u.a.createElement("div",
                        {className: "iframe-wrap"}, u.a.createElement("iframe", {
                            ref: e,
                            id: "iframe",
                            title: "iframe",
                            className: "iframe",
                            src: g,
                            style: {minHeight: window.innerHeight - 54 + "px"},
                            onLoad: function () {
                                !function () {
                                    p.apply(this, arguments)
                                }()
                            }
                        }))
                }
                return null
            }, pe = n(904), ge = n.n(pe), fe = n(93), he = n(44),
            be = function e(t, n) {
                t.forEach(function (t) {
                    n(t), t.SubMenus && e(t.SubMenus, n)
                })
            }, ve = function () {
                var e = Object(s.useState)(null), t = Object(Q.a)(e, 2), n = t[0],
                    a = t[1], r = function () {
                        var e = Object(J.a)(M.a.mark(function e() {
                            var t, n, r;
                            return M.a.wrap(function (e) {
                                for (; ;) {
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, Object(ae.a)(
                                                ae.c.getMenu);
                                        case 3:
                                            if (t = e.sent, 0 === (n = t.resp).Code) {
                                                e.next = 7;
                                                break
                                            }
                                            throw n.Msg;
                                        case 7:
                                            r = [], n.Infos && be(n.Infos,
                                                function (e) {
                                                    e.Iframe && r.push(
                                                        {
                                                            Url: e.Url,
                                                            IframeUrl: e.Iframe
                                                        })
                                                }), a(r), e.next = 15;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(0), R.a.error(
                                                e.t0
                                                || "menu-iframe\u8bbe\u7f6e\u83b7\u53d6\u5931\u8d25");
                                        case 15:
                                        case"end":
                                            return e.stop()
                                    }
                                }
                            }, e, null, [[0, 12]])
                        }));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }();
                return Object(s.useEffect)(function () {
                    r()
                }, []), [n, r]
            }, ye = (n(1173), function (e) {
                var t = e.mainPath, n = void 0 === t ? "/main/i/" : t,
                    a = Object(s.useRef)(null),
                    r = Object(x.useSelector)(function (e) {
                        return e.app
                    }).urlDomin, c = $()().location, o = ve(n),
                    i = Object(Q.a)(o, 1)[0], l = Object(s.useState)(null),
                    d = Object(Q.a)(l, 2), m = d[0], p = d[1],
                    g = Object(s.useState)(""), f = Object(Q.a)(g, 2), h = f[0],
                    b = f[1], v = Object(s.useState)(""), y = Object(Q.a)(v, 2),
                    w = y[0], O = y[1], S = Object(s.useState)(""),
                    E = Object(Q.a)(S, 2), C = E[0], j = E[1];

                function k() {
                    return (k = Object(J.a)(M.a.mark(function e() {
                        var t, a, o, i, s, u;
                        return M.a.wrap(function (e) {
                            for (; ;) {
                                switch (e.prev = e.next) {
                                    case 0:
                                        if (!C || c.pathname !== "".concat(n,
                                            "yunlin")) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.next = 3, Object(ae.a)(
                                            ae.c.getUserInfo);
                                    case 3:
                                        return t = e.sent, a = t.resp, e.next = 7, Object(
                                            ae.a)(ae.c.getCorpInfo);
                                    case 7:
                                        o = e.sent, i = o.resp, s = JSON.stringify(
                                            i), u = JSON.stringify({
                                            getUserInfo: JSON.stringify(a),
                                            getCorpInfo: s,
                                            userInfo: a,
                                            urlDomain: r
                                        }), O(u);
                                    case 12:
                                    case"end":
                                        return e.stop()
                                }
                            }
                        }, e)
                    }))).apply(this, arguments)
                }

                var I = function () {
                    var e = Object(J.a)(M.a.mark(function e() {
                        var t, n;
                        return M.a.wrap(function (e) {
                            for (; ;) {
                                switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(fe.request)({
                                            regionId: 1,
                                            serviceType: "imfg",
                                            cmd: "DescribeAuthCode",
                                            data: {
                                                Service: "iam-app",
                                                Module: "openAccess",
                                                Version: "2019-12-26"
                                            },
                                            action: "DescribeAuthCode"
                                        });
                                    case 2:
                                        t = e.sent, n = ge.a.get(t,
                                            "data.data.Response.Data.AuthCode",
                                            "NeedLogin"), b(n);
                                    case 6:
                                    case"end":
                                        return e.stop()
                                }
                            }
                        }, e)
                    }));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }();
                return Object(s.useEffect)(function () {
                    w && document.getElementById(
                        "iframe").contentWindow.postMessage(w, "*")
                }, [w]), Object(s.useEffect)(function () {
                    return p(null), function () {
                        p(null)
                    }
                }, [c]), Object(s.useEffect)(function () {
                    return document.body.style.overflow = "hidden", function () {
                        document.body.style.overflow = "auto"
                    }
                }, []), Object(s.useEffect)(function () {
                    window.top.onhashchange = function (e) {
                    }
                }, []), Object(s.useEffect)(function () {
                    I();
                    var e = function (e) {
                        if ("object" === typeof e.data
                            && e.data.type) {
                            switch (e.data.type) {
                                case"login":
                                    le.a.getPassportHost();
                                    break;
                                case"oAuth-login":
                                    var t = encodeURIComponent(
                                        window.location.href + "?url="
                                        + e.data.redirectUri);
                                    window.location.href = "".concat(
                                        r.protocol + r.passport_host + e.data.data,
                                        "?back_uri=").concat(t);
                                    break;
                                case"third-app-iframe-jump":
                                    window.location.href = e.data.data;
                                    break;
                                case"corpAuth":
                                    window.location.href = "".concat(r.protocol,
                                        "//").concat(r.console_host,
                                        "/account/enterprise-auth");
                                    break;
                                case"third-app-iframe-height":
                                    var a = e.data.data;
                                    a && p(a);
                                    break;
                                case"third-app-iframe-scrollToTop":
                                    var c = document.querySelector("#root");
                                    c && (c.scrollTop = 0);
                                    break;
                                case"tea-app-iframe":
                                    window.history.replaceState(null, "",
                                        "".concat(n).concat(e.data.url.slice(1)));
                                    break;
                                case"industry-web-sdk":
                                    var o = e.data.method;
                                    if ("reportPV" === o
                                    && he.Insight.reportPV(), "reportDirect"
                                    === o) {
                                        var i = e.data.data, s = i.eventCode,
                                            u = i.params;
                                        if (!s) {
                                            return;
                                        }
                                        he.Insight.reportDirect(s, u)
                                    }
                            }
                        }
                    };
                    return window.addEventListener("message", e, !1), function () {
                        window.removeEventListener("message", e)
                    }
                }, []), Object(s.useEffect)(function () {
                    if (i) {
                        if (["example", "league"].find(function (e) {
                            return c.pathname.includes("".concat(n).concat(e))
                        })) {
                            var e = c.pathname.split("/"), t = e.pop(-1), a = !1,
                                r = i.find(function (t) {
                                    return c.pathname === t.Url || (e.join("/")
                                    === t.Url ? (a = !0, !0) : void 0)
                                });
                            if (r && r.IframeUrl) {
                                var o = r.IframeUrl.split("?"),
                                    s = Object(Q.a)(o, 2), u = s[0], l = s[1];
                                l && -1 !== l.indexOf(
                                    "need_authorization_code=true")
                                && (l = l.replace(/need_authorization_code=true/,
                                    "code=".concat(h)));
                                var d = Object.assign({}, Z.a.parse(l),
                                    c.query || {},
                                    {CloudId: localStorage.getItem("CLOUD_ID")}),
                                    m = a ? "".concat(u, "/").concat(t) : u;
                                j(m + "?" + Z.a.stringify(d))
                            }
                        } else {
                            var p = i.find(function (e) {
                                return e.Url === c.pathname
                            });
                            if (p && p.IframeUrl) {
                                if (c.query.url) {
                                    j(
                                        c.query.url);
                                } else {
                                    var g = p.IframeUrl.split("?"),
                                        f = Object(Q.a)(g, 2), b = f[0], v = f[1];
                                    v && -1 !== v.indexOf(
                                        "need_authorization_code=true")
                                    && (v = v.replace(
                                        /need_authorization_code=true/,
                                        "code=".concat(h)));
                                    var y = Object.assign({}, Z.a.parse(v),
                                        c.query || {},
                                        {
                                            CloudId: localStorage.getItem(
                                                "CLOUD_ID")
                                        }),
                                        w = b + "?" + Z.a.stringify(y);
                                    j(w)
                                }
                            }
                        }
                    }
                }, [c, i, h]), C ? u.a.createElement("div",
                    {className: "iframe-wrap", style: m ? {height: m} : null},
                    u.a.createElement("iframe", {
                        ref: a,
                        id: "iframe",
                        title: "iframe",
                        className: "iframe",
                        src: C,
                        style: {
                            minHeight: window.innerHeight - 54 + "px",
                            height: m || "auto"
                        },
                        onLoad: function () {
                            !function () {
                                k.apply(this, arguments)
                            }()
                        }
                    })) : null
            }), we = Object(F.a)(function () {
                return Promise.all([n.e(5), n.e(8), n.e(55), n.e(12)]).then(
                    n.bind(null, 1380))
            }), Oe = Object(F.a)(function () {
                return Promise.all([n.e(5), n.e(8), n.e(55), n.e(12)]).then(
                    n.bind(null, 1373))
            }), Se = Object(F.a)(function () {
                return Promise.all([n.e(5), n.e(8), n.e(55), n.e(12)]).then(
                    n.bind(null, 872))
            }), Ee = Object(F.a)(function () {
                return n.e(13).then(n.bind(null, 1381))
            }), Ce = Object(F.a)(function () {
                return Promise.all([n.e(0), n.e(14)]).then(n.bind(null, 885))
            }), je = Object(F.a)(function () {
                return Promise.all([n.e(10), n.e(15)]).then(n.bind(null, 879))
            }), xe = Object(F.a)(function () {
                return n.e(16).then(n.bind(null, 882))
            }), ke = Object(F.a)(function () {
                return n.e(17).then(n.bind(null, 892))
            }), Ie = Object(F.a)(function () {
                return Promise.all([n.e(0), n.e(18)]).then(n.bind(null, 876))
            }), Ne = Object(F.a)(function () {
                return Promise.all([n.e(0), n.e(19)]).then(n.bind(null, 880))
            }), _e = Object(F.a)(function () {
                return n.e(20).then(n.bind(null, 881))
            }), Ae = Object(F.a)(function () {
                return n.e(21).then(n.bind(null, 863))
            }), De = Object(F.a)(function () {
                return n.e(22).then(n.bind(null, 864))
            }), Me = Object(F.a)(function () {
                return n.e(23).then(n.bind(null, 1377))
            }), Pe = Object(F.a)(function () {
                return Promise.all([n.e(0), n.e(1), n.e(4), n.e(10), n.e(24)]).then(
                    n.bind(null, 873))
            }), Re = Object(F.a)(function () {
                return n.e(25).then(n.bind(null, 865))
            }), Le = Object(F.a)(function () {
                return n.e(26).then(n.bind(null, 866))
            }), Te = Object(F.a)(function () {
                return n.e(27).then(n.bind(null, 867))
            }), qe = Object(F.a)(function () {
                return Promise.all([n.e(0), n.e(28)]).then(n.bind(null, 878))
            }), Be = Object(F.a)(function () {
                return n.e(29).then(n.bind(null, 1378))
            }), Ue = Object(F.a)(function () {
                return Promise.all([n.e(2), n.e(30)]).then(n.bind(null, 886))
            }), Ge = Object(F.a)(function () {
                return n.e(22).then(n.bind(null, 1379))
            }), He = Object(F.a)(function () {
                return n.e(31).then(n.bind(null, 883))
            }), Ve = Object(F.a)(function () {
                return n.e(32).then(n.bind(null, 875))
            }), ze = Object(F.a)(function () {
                return Promise.all([n.e(0), n.e(5), n.e(7), n.e(8), n.e(33)]).then(
                    n.bind(null, 871))
            }), Fe = Object(F.a)(function () {
                return n.e(34).then(n.bind(null, 887))
            }), Je = Object(F.a)(function () {
                return n.e(35).then(n.bind(null, 1382))
            }), Qe = Object(F.a)(function () {
                return Promise.all([n.e(5), n.e(36)]).then(n.bind(null, 894))
            }), We = Object(F.a)(function () {
                return n.e(37).then(n.bind(null, 888))
            }), Ze = Object(F.a)(function () {
                return Promise.all([n.e(7), n.e(38)]).then(n.bind(null, 897))
            }), Ke = Object(F.a)(function () {
                return Promise.all([n.e(7), n.e(38)]).then(n.bind(null, 889))
            }), Xe = Object(F.a)(function () {
                return n.e(39).then(n.bind(null, 868))
            });

        function Ye() {
            var e = Object(a.e)().Router;
            return u.a.createElement(e, null, u.a.createElement(H.Switch, null,
                u.a.createElement(H.Route,
                    {exact: !0, path: "/", component: Se}),
                u.a.createElement(H.Route,
                    {path: "/main/entimprove", component: He}),
                u.a.createElement(H.Route,
                    {path: "/main/league", component: Ee}),
                u.a.createElement(H.Route,
                    {path: "/main/productWall", component: Ce}),
                u.a.createElement(H.Route,
                    {path: "/main/product", component: qe}),
                u.a.createElement(H.Route,
                    {path: "/main/order", component: Ue}),
                u.a.createElement(H.Route,
                    {path: "/main/paycloud", component: xe}),
                u.a.createElement(H.Route,
                    {path: "/main/payment", component: ke}),
                u.a.createElement(H.Route, {path: "/main/news", component: Ie}),
                u.a.createElement(H.Route,
                    {path: "/main/helpCenter", component: Ne}),
                u.a.createElement(H.Route,
                    {path: "/main/jiyun", component: De}),
                u.a.createElement(H.Route,
                    {path: "/main/zhenxuan", component: Ge}),
                u.a.createElement(H.Route,
                    {path: "/main/industryProfile", component: Ae}),
                u.a.createElement(H.Route,
                    {path: "/main/login", component: we}),
                u.a.createElement(H.Route,
                    {path: "/main/register", component: Oe}),
                u.a.createElement(H.Route, {path: "/main/edu", component: je}),
                u.a.createElement(H.Route,
                    {path: "/main/events", component: _e}),
                u.a.createElement(H.Route,
                    {path: "/main/enter-inno", component: Pe}),
                u.a.createElement(H.Route,
                    {path: "/main/community", component: Le}),
                u.a.createElement(H.Route,
                    {path: "/main/solution", component: Ve}),
                u.a.createElement(H.Route, {path: "/main/tr", component: me}),
                u.a.createElement(H.Route, {path: "/main/page", component: me}),
                u.a.createElement(H.Route, {path: "/main/i", component: ye}),
                u.a.createElement(H.Route,
                    {path: "/main/wechat_bind", component: ue}),
                u.a.createElement(H.Route,
                    {path: "/main/wechat", component: ue}),
                u.a.createElement(H.Route,
                    {path: "/main/icon-list", component: Re}),
                u.a.createElement(H.Route,
                    {path: "/main/portal", component: Me}),
                u.a.createElement(H.Route,
                    {path: "/main/openlink", component: Te}),
                u.a.createElement(H.Route,
                    {path: "/main/ErrorPermission", component: z}),
                u.a.createElement(H.Route, {path: "/main/404", component: V.a}),
                u.a.createElement(H.Route,
                    {path: "/main/middlePage", component: Be}),
                u.a.createElement(H.Route,
                    {path: "/main/cloud-resources", component: ze}),
                u.a.createElement(H.Route,
                    {path: "/main/third-app-payment", component: Fe}),
                u.a.createElement(H.Route,
                    {path: "/main/cloud-voucher", component: We}),
                u.a.createElement(H.Route,
                    {path: "/main/third-app", component: Je}),
                u.a.createElement(H.Route,
                    {path: "/main/wecom", component: Qe}),
                u.a.createElement(H.Route,
                    {path: "/main/algorithmic", component: Ze}),
                u.a.createElement(H.Route,
                    {path: "/main/algorithmic-resources", component: Ke}),
                u.a.createElement(H.Route,
                    {path: "/main/tencentcloud", component: Xe}),
                u.a.createElement(H.Route, {component: V.a})))
        }

        n(1175);
        var $e = n(907), et = n.n($e), tt = (n(1181), function (e) {
                function t() {
                    return Object(b.a)(this, t), Object(y.a)(this,
                        Object(w.a)(t).apply(this, arguments))
                }

                return Object(O.a)(t, e), Object(v.a)(t, [{
                    key: "render", value: function () {
                        var e = this.props.baseSetting;
                        return !1 === this.props.visible ? null : e
                            && u.a.createElement("div", {className: "qcd-footer"},
                                u.a.createElement("div",
                                    {className: "qcd-footer-inner"},
                                    u.a.createElement("div",
                                        {className: "qcd-footer-bd"},
                                        u.a.createElement("div",
                                            {className: "qcd-contact-us"},
                                            u.a.createElement("div",
                                                {className: "qcd-footer-box-title"},
                                                "\u8054\u7cfb\u6211\u4eec"),
                                            u.a.createElement("div",
                                                {className: "qcd-footer-box-cont"},
                                                u.a.createElement("ul",
                                                    {className: "qcd-footer-our-info"},
                                                    u.a.createElement("li", null,
                                                        u.a.createElement("span",
                                                            {className: "qcd-footer-our-info-label-new"},
                                                            "Email"),
                                                        u.a.createElement("span",
                                                            {className: "qcd-footer-our-info-text-new"},
                                                            e.ServiceMail)),
                                                    u.a.createElement("li", null,
                                                        u.a.createElement("span",
                                                            {className: "qcd-footer-our-info-label-new"},
                                                            "\u529e\u516c\u5730\u70b9"),
                                                        u.a.createElement("span",
                                                            {className: "qcd-footer-our-info-text-new"},
                                                            e.ContactAddress)))))),
                                    u.a.createElement("div",
                                        {className: "qcd-footer-line"}),
                                    u.a.createElement("div",
                                        {className: "qcd-footer-ft"},
                                        u.a.createElement("div",
                                            {className: "seal-margin-bottom--10"},
                                            u.a.createElement(et.a,
                                                {height: 18, once: !0},
                                                u.a.createElement("a",
                                                    {className: "qcd-info-unit"},
                                                    u.a.createElement("img", {
                                                        src: "/main_assets/tencent-logo.png",
                                                        width: "95px"
                                                    })))), u.a.createElement("div",
                                            {className: "seal-margin-bottom--20 footer-grouplist"},
                                            e.Links && e.Links.map(function (e) {
                                                return u.a.createElement("a", {
                                                    key: e.Name,
                                                    target: "_blank",
                                                    href: e.Url,
                                                    className: "qcd-info-unit"
                                                }, e.Name)
                                            })), u.a.createElement("div",
                                            {className: "seal-margin-bottom--10"},
                                            u.a.createElement("span",
                                                {className: "qcd-info-unit"},
                                                "Copyright \xa9 ", e.Copyright)),
                                        u.a.createElement("a", {
                                            href: e.RecordInfoUrl,
                                            target: "_blank"
                                        }, u.a.createElement("span",
                                            {className: "qcd-ifon-copyright"}, " ",
                                            e.RecordInfo))),
                                    u.a.createElement("div",
                                        {className: "qcd-footer-inner-phone"},
                                        u.a.createElement("img", {
                                            src: "/main_assets/home/phone.svg",
                                            style: {width: 64, margin: "0 auto"},
                                            alt: ""
                                        }), u.a.createElement("div",
                                            {className: "qcd-footer-inner-phone-number"},
                                            e.ServicePhone),
                                        u.a.createElement("div", {
                                                className: "qcd-footer-inner-phone-text",
                                                style: {lineHeight: "20px"}
                                            }, e.ShowWorkDay ? u.a.createElement(
                                            u.a.Fragment, null,
                                            "\u5468\u4e00\u81f3\u5468\u4e94".concat(
                                                e.WorkDay)) : "",
                                            u.a.createElement("br", null),
                                            e.ShowSaturday ? u.a.createElement(
                                                u.a.Fragment, null,
                                                "\u5468\u516d ".concat(e.Saturday))
                                                : "", u.a.createElement("br", null),
                                            e.ShowSunday ? "\u5468\u65e5 ".concat(
                                                e.Sunday) : "")),
                                    e.ShowQRCode && u.a.createElement("div",
                                    {className: "qcd-footer-inner-wechat"},
                                    u.a.createElement("img",
                                        {src: e.QRCode, alt: ""}),
                                    u.a.createElement("div",
                                        {className: "qcd-footer-inner-wechat-number"},
                                        e.QRCodeName))))
                    }
                }]), t
            }(s.Component)), nt = n(18), at = n(97), rt = (n(1183), function (e) {
                var t = Object(s.useState)(!1), n = Object(Q.a)(t, 2), a = n[0],
                    r = n[1], c = e.user, o = e.baseSetting;
                if (o && o.SettingLogos && o.SettingLogos.length > 2) {
                    var i = o.SettingLogos.filter(function (e) {
                            return 2 === e.LogoType
                        })[0] || {}, l = i.SettingIcon, d = i.Platform,
                        m = c && c.Manager && c.Manager.AccountId;
                    return u.a.createElement("div", {
                            style: {
                                background: m
                                    ? "linear-gradient(90deg, orange, transparent)"
                                    : "",
                                display: "flex",
                                alignItems: "center",
                                flex: "0 0 auto"
                            }
                        }, u.a.createElement("div", {
                            className: "logo-wrap",
                            "data-report": "homepage_navi_index",
                            onClick: function () {
                                window.location.href = "/"
                            }
                        }, !!l && u.a.createElement("span", {
                            className: "logo",
                            style: {
                                background: "url(".concat(l, ") no-repeat"),
                                backgroundSize: "25px 25px"
                            }
                        }), u.a.createElement("span", null, d)),
                        m && u.a.createElement(at.a, {
                            onMouseOver: function () {
                                return r(!0)
                            },
                            onMouseLeave: function () {
                                return r(!1)
                            },
                            theme: "light",
                            position: "bottom right",
                            show: a,
                            control: u.a.createElement("p",
                                {style: {width: "300px", lineHeight: "1.5"}},
                                "\u60a8\u5df2\u8fdb\u5165\u5ba2\u6237\uff08",
                                c.Account.AccountName,
                                "\uff09\u7684\u8d26\u53f7\uff0c\u6b63\u5728\u8fdb\u884c\u4ee3\u5ba2\u64cd\u4f5c")
                        }, u.a.createElement("span",
                        {style: {marginRight: "20px", cursor: "default"}},
                        "\u4ee3\u5ba2\u6a21\u5f0f")))
                }
                return null
            }), ct = (n(1185), function (e) {
                function t(e) {
                    var n;
                    return Object(b.a)(this, t), (n = Object(y.a)(this,
                        Object(w.a)(t).call(this, e))).login = function () {
                        le.a.getPassportHost()
                    }, n.register = function () {
                        le.a.getPassportHost(
                            {hostname: "passport", pathname: "register"})
                    }, n.logout = function () {
                        Object(P.logout)().then(function () {
                            window.location.href = "/"
                        })
                    }, n.goConsole = function () {
                        var e = n.props.urlDomin;
                        window.location.href = e.protocol + e.console_host
                    }, n.renderUserBubble = function () {
                        var e = n.props.urlDomin || {}, t = e.protocol,
                            a = e.console_host;
                        return u.a.createElement("div", {className: "user-bubble"},
                            u.a.createElement("li", {className: "head"},
                                u.a.createElement("div", {className: "imgBox"},
                                    u.a.createElement("img",
                                        {src: "/main_assets/avatar.png"}))),
                            u.a.createElement("ul", {className: "list"},
                                u.a.createElement("li", null, u.a.createElement("a",
                                    {href: "".concat(t + a, "/msgcenter/list")},
                                    u.a.createElement("span", null,
                                        "\u6d88\u606f\u4e2d\u5fc3"),
                                    n.msgNum > 0 && u.a.createElement("em", null,
                                    n.msgNum > 99 ? "99+" : n.msgNum)))),
                            u.a.createElement("li", {className: "foot"},
                                u.a.createElement("a", {
                                    onClick: n.logout,
                                    "data-report": "homepage_logout"
                                }, "\u9000\u51fa\u767b\u5f55")))
                    }, n.state = {bubbleIsShow: !1}, n
                }

                return Object(O.a)(t, e), Object(v.a)(t, [{
                    key: "render", value: function () {
                        var e = this, t = this.props.account;
                        return u.a.createElement("div",
                            {className: "qcd-header-unit qcd-header-account"},
                            t.isLogin() ? u.a.createElement(u.a.Fragment, null,
                                u.a.createElement(at.a, {
                                    onMouseOver: function () {
                                        return e.setState({bubbleIsShow: !0})
                                    },
                                    onMouseLeave: function () {
                                        return e.setState({bubbleIsShow: !1})
                                    },
                                    theme: "light",
                                    position: "bottom left",
                                    show: this.state.bubbleIsShow,
                                    control: this.renderUserBubble()
                                }, u.a.createElement("a",
                                    {className: "qcd-account-unit qcd--user"},
                                    u.a.createElement("i", {className: "avatar"}),
                                    u.a.createElement("span",
                                        {className: "username"}, t.getNickName()),
                                    this.msgNum > 0 && u.a.createElement("em",
                                    {className: "dot"}))), u.a.createElement("a", {
                                    onClick: this.goConsole,
                                    className: " qcd-account-unit qcd--unit"
                                }, "\u63a7\u5236\u53f0")) : u.a.createElement(
                                u.a.Fragment, null, u.a.createElement("a", {
                                    onClick: this.login,
                                    className: "qcd-account-unit",
                                    "data-report": "homepage_login"
                                }, "\u767b\u5f55"), u.a.createElement("a", {
                                    onClick: this.register,
                                    className: " qcd-account-unit qcd--unit",
                                    "data-report": "homepage_register"
                                }, "\u6ce8\u518c")))
                    }
                }, {
                    key: "vipPagePower", get: function () {
                        return (this.props.baseSetting || {}).OpenMembers
                    }
                }, {
                    key: "msgNum", get: function () {
                        var e = (this.props.messages || {}).data;
                        return e ? e.UnreadNum : 0
                    }
                }, {
                    key: "inSeven", get: function () {
                        var e = (this.props.userVip || {}).ExpireTime,
                            t = parseInt((new Date).getTime() / 1e3),
                            n = parseInt((e - t) / 86400);
                        return !!e && n <= 7
                    }
                }]), t
            }(u.a.Component)), ot = Object(x.connect)(function (e) {
                return {urlDomin: e.app.urlDomin}
            })(ct), it = n(903), st = n(953), ut = (n(1191), n(970)), lt = n.n(ut),
            dt = n(971), mt = n.n(dt), pt = n(972), gt = n.n(pt), ft = n(973),
            ht = n.n(ft), bt = ["normal", "hot", "new"], vt = function (e) {
                for (var t = $()().location, n = e.links.filter(function (e) {
                    return !1 === e.IsHidden
                }), a = !0, r = 0; r < n.length; r++) {
                    if (n[r].SubMenus
                        && n[r].SubMenus.length > 0) {
                        a = !1;
                        break
                    }
                }
                return n.length > 0 ? a ? u.a.createElement(Ot, e)
                    : u.a.createElement(wt, e) : u.a.createElement("div", {
                    className: "menu ".concat(
                        ("/" === e.menu.Url ? t.pathname === e.menu.Url
                            : (t.pathname + t.search).includes(e.menu.Url))
                            ? "current" : "")
                }, u.a.createElement(Et, {
                    menu: e.menu, tier: 1, cb: function () {
                        try {
                            he.Insight.reportDirect("click_menu", {
                                url: e.menu.Url,
                                product_name: e.menu.Name,
                                is_new_page: e.menu.IsOpen ? 1 : 0,
                                menu_tag: bt[e.menu.Label],
                                menu_level: 1
                            })
                        } catch (t) {
                        }
                    }
                }), yt(e.menu.Label, 1))
            }, yt = function (e, t) {
                switch (e) {
                    case 0:
                        return u.a.createElement(u.a.Fragment, null);
                    case 1:
                        return u.a.createElement("img", {
                            style: {marginLeft: 5, verticalAlign: "middle"},
                            src: 1 === t ? lt.a : mt.a
                        });
                    case 2:
                        return u.a.createElement("img", {
                            style: {marginLeft: 5, verticalAlign: "middle"},
                            src: 1 === t ? gt.a : ht.a
                        });
                    default:
                        return u.a.createElement(u.a.Fragment, null)
                }
            }, wt = function (e) {
                var t = Object(s.useRef)(null), n = Object(s.useState)(56),
                    a = Object(Q.a)(n, 2), r = a[0], c = a[1],
                    o = Object(s.useState)("none"), i = Object(Q.a)(o, 2), l = i[0],
                    d = i[1], m = Object(s.useState)(0), p = Object(Q.a)(m, 2),
                    g = p[0], f = p[1], h = Object(s.useState)(220),
                    b = Object(Q.a)(h, 2), v = b[0], y = b[1],
                    w = Object(x.useSelector)(function (e) {
                        return e.app
                    }).urlDomin,
                    O = Object(s.useState)({menuList: [], subMenuList: []}),
                    S = Object(Q.a)(O, 2), E = S[0], C = S[1];
                Object(s.useEffect)(function () {
                    if (null !== w && w) {
                        var e = w.hiddenMenuList;
                        C(e || {menuList: [], subMenuList: []})
                    }
                }, [w]);
                var j = e.links;
                j = j.filter(function (e) {
                    return !1 === e.IsHidden
                });
                return u.a.createElement("div", {
                        ref: t,
                        className: "menu ".concat(
                            e.menu.Url === window.location.pathname ? "current" : "",
                            " "),
                        onMouseEnter: function (e) {
                            var t = e.currentTarget.getBoundingClientRect(),
                                n = t.width, a = t.x,
                                r = 220 * Math.min(j.length, 6) || 220, o = r / 2 - a,
                                i = (r - n) / 2;
                            window.innerWidth - a - n / 2 - r / 2 < 0 ? i = r
                                - (window.innerWidth - a) : o > 0 && (i = a), c(n), y(
                                r), d("block"), f("-" + i)
                        },
                        onMouseLeave: function () {
                            d("none")
                        }
                    }, u.a.createElement(Et, {
                        menu: e.menu, tier: 1, cb: function () {
                            try {
                                he.Insight.reportDirect("click_menu", {
                                    url: e.menu.Url,
                                    product_name: e.menu.Name,
                                    is_new_page: e.menu.IsOpen ? 1 : 0,
                                    menu_tag: bt[e.menu.Label],
                                    menu_level: 1
                                })
                            } catch (t) {
                            }
                        }
                    }), yt(e.menu.Label, 1),
                    u.a.createElement("div", {className: "childmenu"},
                        u.a.createElement("div", {
                            className: "menu-triggle",
                            style: {display: l, left: r / 2 - 8 + "px"}
                        }), u.a.createElement("div", {
                            className: "sec-menu-wrap",
                            style: {
                                display: l,
                                transform: "translateX(".concat(g, "px)")
                            }
                        }, u.a.createElement("div",
                            {className: "sec-menu-main", style: {width: v}},
                            j.map(function (e) {
                                return u.a.createElement("div",
                                    {className: "sec-menu-item", key: e.MenuID},
                                    u.a.createElement("div",
                                        {className: "sec-menu-title-wrap"},
                                        u.a.createElement("div",
                                            {className: "sec-menu-title"},
                                            u.a.createElement(Et, {
                                                menu: e, tier: 2, cb: function () {
                                                    try {
                                                        he.Insight.reportDirect(
                                                            "click_menu", {
                                                                url: e.Url,
                                                                product_name: e.Name,
                                                                is_new_page: e.IsOpen
                                                                    ? 1 : 0,
                                                                menu_tag: bt[e.Label],
                                                                menu_level: 2
                                                            })
                                                    } catch (t) {
                                                    }
                                                }
                                            }), yt(e.Label, 2))),
                                    u.a.createElement("div",
                                        {className: "third-menu-wrap"},
                                        e.SubMenus && e.SubMenus.filter(
                                        function (t) {
                                            var n = E.menuList.findIndex(
                                                function (t) {
                                                    return t === e.Name
                                                });
                                            return -1 !== n
                                                ? !E.subMenuList[n].includes(t.Name)
                                                : t
                                        }).map(function (e, t) {
                                            return !1 !== e.IsHidden
                                                || u.a.createElement("div", {
                                                    className: "third-menu-item",
                                                    key: t
                                                }, u.a.createElement(Et, {
                                                    key: e.MenuID,
                                                    menu: e,
                                                    index: t,
                                                    cb: function () {
                                                        try {
                                                            he.Insight.reportDirect(
                                                                "click_menu", {
                                                                    url: e.Url,
                                                                    product_name: e.Name,
                                                                    is_new_page: e.IsOpen
                                                                        ? 1 : 0,
                                                                    menu_tag: bt[e.Label],
                                                                    menu_level: 3
                                                                })
                                                        } catch (t) {
                                                        }
                                                        d("none")
                                                    },
                                                    tier: 3
                                                }), yt(e.Label, 2))
                                        })))
                            })))))
            }, Ot = function (e) {
                var t = Object(s.useRef)(null), n = Object(s.useState)(56),
                    a = Object(Q.a)(n, 2), r = a[0], c = a[1],
                    o = Object(s.useState)("none"), i = Object(Q.a)(o, 2), l = i[0],
                    d = i[1], m = Object(s.useState)(0), p = Object(Q.a)(m, 2),
                    g = p[0], f = p[1], h = [];
                return e.links && (h = e.links.filter(function (e) {
                    return !1 === e.IsHidden
                })), u.a.createElement("div", {
                        ref: t,
                        className: "menu ".concat(
                            e.menu.Url === window.location.pathname ? "current" : "",
                            " "),
                        onMouseEnter: function (e) {
                            var t = e.target.getBoundingClientRect().width,
                                n = 88 * Math.ceil(h.length / 5) - 10;
                            c(t);
                            var a = (n - t) / 2, r = n / 2 - e.target.offsetLeft;
                            window.innerWidth - e.target.getBoundingClientRect().x - t
                            / 2 - n / 2 < 0 ? (f("-" + (n - (window.innerWidth
                                - e.target.getBoundingClientRect().x))), d("block")) : r
                            > 0 ? (f("-" + e.target.getBoundingClientRect().x), d(
                                "block")) : (f("-" + a), d("block"))
                        },
                        onMouseLeave: function () {
                            d("none")
                        }
                    }, u.a.createElement(Et, {
                        menu: e.menu, tier: 1, cb: function () {
                            try {
                                he.Insight.reportDirect("click_menu", {
                                    url: e.menu.Url,
                                    product_name: e.menu.Name,
                                    is_new_page: e.menu.IsOpen ? 1 : 0,
                                    menu_tag: bt[e.menu.Label],
                                    menu_level: 1
                                })
                            } catch (t) {
                            }
                        }
                    }), yt(e.menu.Label, 1),
                    u.a.createElement("div", {className: "childmenu"},
                        u.a.createElement("div", {
                            className: "menu-triggle",
                            style: {display: l, left: r / 2 - 8 + "px"}
                        }), u.a.createElement("div", {
                            className: "only-sec-menu-wrap",
                            style: {
                                display: l,
                                transform: "translateX(".concat(g, "px)")
                            }
                        }, u.a.createElement("div", {
                            className: "only-sec-menu",
                            style: {
                                width: h.length > 5 ? 88 * Math.ceil(h.length / 5)
                                    + "px" : "auto"
                            }
                        }, h.map(function (e, t) {
                            return u.a.createElement("div", {
                                className: h.length > 5 ? "only-sec-menu-title"
                                    : "only-sec-menu-title only-sec-column",
                                key: e.MenuID
                            }, u.a.createElement(Et, {
                                menu: e, index: t, tier: 2, cb: function () {
                                    try {
                                        he.Insight.reportDirect("click_menu", {
                                            url: e.Url,
                                            product_name: e.Name,
                                            is_new_page: e.IsOpen ? 1 : 0,
                                            menu_tag: bt[e.Label],
                                            menu_level: 2
                                        })
                                    } catch (t) {
                                    }
                                }
                            }), yt(e.Label, 2))
                        })))))
            }, St = function (e) {
                var t, n = e.children, a = e.menu, r = Object(s.useState)(!1),
                    c = Object(Q.a)(r, 2), o = c[0], i = c[1];
                return (null == (t = a.Name) ? 0 : ("string" != typeof t
                && (t += ""), t.replace(/[^\x00-\xff]/g, "01").length)) >= 20
                    ? u.a.createElement(st.a, {
                        control: a.Name,
                        show: o,
                        className: "third_menu_width",
                        onMouseOver: function () {
                            return i(!0)
                        },
                        onMouseOut: function () {
                            return i(!1)
                        }
                    }, n) : n
            }, Et = function (e) {
                var t = e.menu, n = e.cb, a = e.tier, r = "";
                if (t && t.Url && (r = t.Url.trim()), r) {
                    var c = 2 === t.MenuType ? "cloud" : "";
                    return t.IsOpen ? u.a.createElement(St, {menu: t},
                        u.a.createElement("a", {
                            className: "link ".concat(c),
                            href: r,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: n
                        }, t.Name)) : 0 === r.indexOf("http") ? u.a.createElement(
                        St, {menu: t}, u.a.createElement("a", {
                            href: r,
                            rel: "noopener noreferrer",
                            className: "link ".concat(c),
                            onClick: function () {
                                try {
                                    he.Insight.reportDirect("click_menu", {
                                        url: t.Url,
                                        product_name: t.Name,
                                        is_new_page: t.IsOpen ? 1 : 0,
                                        menu_tag: bt[t.Label],
                                        menu_level: a
                                    })
                                } catch (e) {
                                }
                            }
                        }, t.Name)) : (t.ParentID, u.a.createElement(St, {menu: t},
                        u.a.createElement(nt.Link,
                            {className: "link ".concat(c), onClick: n, to: r},
                            t.Name)))
                }
                return u.a.createElement(St, {menu: t},
                    u.a.createElement("span", {rel: "noopener noreferrer"}, t.Name))
            }, Ct = n(59);
        n(1193);

        function jt(e, t) {
            var n;
            if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function (e, t) {
                    if (!e) {
                        return;
                    }
                    if ("string" === typeof e) {
                        return xt(e, t);
                    }
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) {
                        return Array.from(e);
                    }
                    if ("Arguments" === n
                        || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                            n)) {
                        return xt(e, t)
                    }
                }(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var a = 0, r = function () {
                    };
                    return {
                        s: r, n: function () {
                            return a >= e.length ? {done: !0} : {
                                done: !1,
                                value: e[a++]
                            }
                        }, e: function (e) {
                            throw e
                        }, f: r
                    }
                }
                throw new TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var c, o = !0, i = !1;
            return {
                s: function () {
                    n = e[Symbol.iterator]()
                }, n: function () {
                    var e = n.next();
                    return o = e.done, e
                }, e: function (e) {
                    i = !0, c = e
                }, f: function () {
                    try {
                        o || null == n.return || n.return()
                    } finally {
                        if (i) {
                            throw c
                        }
                    }
                }
            }
        }

        function xt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++) {
                a[n] = e[n];
            }
            return a
        }

        var kt = ["/main/events/vip"], It = Object(x.connect)(function (e) {
            var t = e.app, n = e.router, a = e.messages;
            return {
                user: t.userInfo,
                userStatus: t.userStatus,
                userVip: t.userVip,
                baseSetting: t.baseSetting,
                headNavlist: t.headNavlist,
                router: n,
                messages: a,
                account: t.account
            }
        })(function (e) {
            var t = Object(s.useRef)(), n = e.headNavlist, a = e.baseSetting;
            n = n.filter(function (e) {
                return !1 === e.IsHidden
            }), localStorage.setItem("headNavlist", JSON.stringify(n));
            var r = Object(s.useState)(!1), c = Object(Q.a)(r, 2), o = c[0],
                i = c[1], l = Object(s.useState)(!1), d = Object(Q.a)(l, 2),
                m = d[0], p = d[1], g = Object(s.useState)(0),
                f = Object(Q.a)(g, 2), h = f[0], b = f[1],
                v = Object(s.useState)(0), y = Object(Q.a)(v, 2), w = y[0],
                O = y[1], S = Object(s.useState)(0), E = Object(Q.a)(S, 2),
                C = E[0], j = E[1], x = function () {
                    if (t && t.current) {
                        var e = t.current.querySelectorAll(".menu"),
                            n = t.current.querySelector(".menus-inner-wrap");
                        if (e && n) {
                            var a = n.getBoundingClientRect().width - 78;
                            j(a);
                            var r, c = 0, o = jt(e);
                            try {
                                for (o.s();
                                    !(r = o.n()).done;) {
                                    c += r.value.getBoundingClientRect().width
                                        + 30
                                }
                            } catch (i) {
                                o.e(i)
                            } finally {
                                o.f()
                            }
                            a < (c -= 30) ? (p(!0), b(Math.abs(a - c))) : p(!1)
                        }
                    }
                };
            Object(s.useEffect)(function () {
                return window.addEventListener("resize", x), function () {
                    window.removeEventListener("resize", x)
                }
            }, []), Object(s.useEffect)(function () {
                t && t.current && x()
            }, [n]);
            var k = function () {
                    var t = (e.userStatus || {}).isSPAdmin;
                    return (e.baseSetting || {}).OpenMembers && !t
                }, I = function (e) {
                    O("right" === e ? C - w < h ? w - C : w + h === 0 ? 0 : -h : 0
                    === w ? -h : w + C < 0 ? w + C : 0)
                }, N = (e.userVip || {}).isVip,
                _ = -1 === kt.indexOf(e.router.location.pathname);
            return u.a.createElement(u.a.Fragment, null,
                _ && u.a.createElement("div", {className: "menu-wrap", ref: t},
                u.a.createElement(rt, e),
                u.a.createElement("div", {className: "menus-wrap"},
                    n && n.length > 0 && u.a.createElement("div", {
                        className: "menus-inner-wrap",
                        style: {
                            justifyContent: !1 === m ? "flex-start"
                                : "space-between"
                        }
                    }, m && u.a.createElement("div", {
                        className: "menus-inner-wrap-left", onClick: function () {
                            return I("left")
                        }
                    }, m && u.a.createElement(Ct.a,
                    {className: "seal-icon seal-icon--arrow-left"})),
                    u.a.createElement("div", {
                        className: "menus-inner",
                        style: {marginLeft: "".concat(w, "px")}
                    }, n.map(function (e) {
                        for (var t = e.SubMenus || [], n = 0; n < t.length;
                            n++) {
                            t[n].name = t[n].Name, t[n].path = t[n].Url, t[n].reportid = "homepage_navi_tab_".concat(
                                t[n].Name);
                        }
                        return u.a.createElement(vt, {
                            key: e.MenuID,
                            menu: e,
                            title: e.Name,
                            url: e.Url,
                            links: t || []
                        })
                    })), m && u.a.createElement("div", {
                        className: "menus-inner-wrap-right", onClick: function () {
                            return I("right")
                        }
                    }, m && u.a.createElement(Ct.a,
                    {className: "seal-icon seal-icon--arrow-right"})))),
                u.a.createElement(ot, {
                    user: e.user,
                    account: e.account,
                    userVip: e.userVip,
                    messages: e.messages,
                    baseSetting: e.baseSetting,
                    setDialogVisible: i,
                    vipVisible: k(),
                    vipBtn: function () {
                        return k() && !N && u.a.createElement(nt.Link, {
                                className: " qcd-account-unit qcd-adv",
                                to: "/main/events/vip"
                            },
                            "\u5f00\u901a\u4f1a\u5458\u7acb\u4eab\u591a\u9879\u7279\u6743")
                    }
                })), "/main/events/vip" === e.router.location.pathname
                && u.a.createElement("div", {className: "menu-wrap", ref: t},
                    u.a.createElement(rt, e),
                    u.a.createElement("div", {className: "menus-wrap"},
                        u.a.createElement("div", {
                            className: "menus-inner-wrap",
                            style: {
                                justifyContent: !1 === m ? "flex-start"
                                    : "space-between"
                            }
                        }, u.a.createElement("div", {
                            className: "menus-inner",
                            style: {marginLeft: "20px"}
                        }, u.a.createElement("div",
                            {className: "menu only-first"},
                            u.a.createElement("span", null, "\u4f1a\u5458"))))),
                    u.a.createElement(ot, {
                        user: e.user,
                        account: e.account,
                        userVip: e.userVip,
                        messages: e.messages,
                        baseSetting: e.baseSetting,
                        setDialogVisible: i,
                        vipVisible: k(),
                        vipBtn: function () {
                            return k() && !N && u.a.createElement("a", {
                                className: "qcd-account-unit qcd-adc",
                                onClick: function () {
                                    return i(!0)
                                }
                            }, "\u5f00\u901a\u4f1a\u5458")
                        }
                    })), u.a.createElement(it.a, {
                        className: "dialogLikeBereStyles",
                        visiable: o,
                        title: "\u5f00\u901a\u4f1a\u5458",
                        onOk: function () {
                            return i(!1)
                        },
                        onCancel: function () {
                            return i(!1)
                        },
                        hasCancel: !1
                    }, u.a.createElement("span", null,
                    "\u5f00\u901a\u4f1a\u5458\u8bf7\u62e8\u6253\u5e73\u53f0\u5ba2\u670d\u7535\u8bdd\uff1a"),
                    u.a.createElement("a", null, a && a.ServicePhone)))
        }), Nt = function (e) {
            var t = e.src;
            return u.a.createElement("div", {className: "qcd-aside-layout"},
                u.a.createElement(nt.Link, {
                        to: t,
                        className: "qcd-aside-layout-inner",
                        "data-report": "helpCenter_index"
                    }, u.a.createElement(Ct.a, {type: "message", size: 22}),
                    u.a.createElement("span",
                        {className: "qcd-aside-layout-text"},
                        "\u5e73\u53f0\u5ba2\u670d")))
        }, _t = Object(a.e)(), At = function (e) {
            function t(e) {
                var n;
                return Object(b.a)(this, t), (n = Object(y.a)(this,
                    Object(w.a)(t).call(this,
                        e))).handleWindowResize = j.a.debounce({}, function () {
                    n.props.dispatch({
                        type: "app/change",
                        payload: {windowHeight: window.innerHeight}
                    })
                }, 100), n.setContentHeight = function () {
                    n.setState({contentheight: window.innerHeight - 54})
                }, n.initBeacon = function (e) {
                    window._CONSOLE_ = {config: e}
                }, n.hiddenFooter = function (e) {
                    var t = document.getElementsByClassName("main-footer")[0],
                        n = document.getElementsByClassName("qcd-page")[0];
                    t && n && (n.style.paddingBottom = e ? "0px" : "")
                }, n.handleScriptCreate = function () {
                    n.setState({scriptLoaded: !1})
                }, n.handleScriptError = function () {
                    n.setState({scriptError: !0})
                }, n.handleScriptLoad = function () {
                    var e = n.props, t = e.account, a = e.router;
                    n.setState(
                        {scriptLoaded: !0}), window.IndustrySDK.insight.setAccountId(
                        t.AccountId || "anonymous"), Object(N.h)(a)
                }, n.state = {
                    contentheight: window.innerHeight - 54,
                    scriptLoaded: !1,
                    scriptError: !1
                }, n
            }

            return Object(O.a)(t, e), Object(v.a)(t, [{
                key: "componentDidMount", value: function () {
                    var e = this;
                    window.addEventListener("resize",
                        this.handleWindowResize), window.addEventListener(
                        "resize", this.setContentHeight), this.props.dispatch({
                        type: "app/ready", callback: function (t, n) {
                            var a = n.sentry, r = void 0 === a ? {} : a;
                            if (e.initBeacon(n), r.dsn && r.enable
                            && window.Raven && window.Raven.config(r.dsn,
                                r.config || {}).install(), window.OpenMidas) {
                                var c = n.OpenMidasVersion || "";
                                window.OpenMidas.init(c || "test")
                            }
                        }
                    })
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    window.removeEventListener("resize",
                        this.handleWindowResize), window.removeEventListener(
                        "resize", this.setContentHeight)
                }
            }, {
                key: "render", value: function () {
                    var e = _t.Router, t = this.props.urlDomin || {},
                        n = t.imgcache_host, a = void 0 === n ? "" : n,
                        r = t.uuid, o = void 0 === r ? "" : r;
                    return u.a.createElement("div",
                        {className: E()("qcd-page")},
                        a && u.a.createElement(I.a, {
                            url: "//".concat(a,
                                "/static/industry-sdk-adapter.min.js?v=").concat(o),
                            onCreate: this.handleScriptCreate,
                            onError: this.handleScriptError,
                            onLoad: this.handleScriptLoad
                        }), u.a.createElement(c.a, {resources: G},
                            u.a.createElement(e, null,
                                u.a.createElement(It, null),
                                u.a.createElement("div", {
                                    className: "qcd-body",
                                    style: {
                                        minHeight: this.state.contentheight
                                            + "px"
                                    }
                                }, this.content), u.a.createElement("div",
                                    {className: "main-footer"},
                                    this.renderFooter()),
                                this.props.isAppReady && u.a.createElement(Nt,
                                {src: "/main/helpCenter"}),
                                u.a.createElement(g.UICompatibilityTip, null))))
                }
            }, {
                key: "renderFooter", value: function () {
                    var e = this.props, t = e.baseSetting, n = e.isAppReady;
                    return this.showFooter && n ? u.a.createElement(tt,
                        {baseSetting: t}) : null
                }
            }, {
                key: "showFooter", get: function () {
                    var e = this.props.showGlobalFooter,
                        t = (this.props.router || {}).location,
                        n = -1 === ["/main/industryProfile",
                            "/main/entimprove/apply"].indexOf(t.pathname);
                    return e && n ? (this.hiddenFooter(!1), !0)
                        : (this.hiddenFooter(!0), !1)
                }
            }, {
                key: "content", get: function () {
                    var e = this.props.isAppReady, t = this.state.scriptLoaded;
                    return e && t ? u.a.createElement(Ye, null)
                        : u.a.createElement("div", null)
                }
            }]), t
        }(u.a.PureComponent), Dt = Object(x.connect)(function (e) {
            var t = e.app, n = void 0 === t ? {} : t, a = e.router;
            return {
                showGlobalFooter: n.showGlobalFooter,
                isAppReady: n.isReady,
                baseSetting: n.baseSetting,
                router: a,
                urlDomin: n.urlDomin,
                account: n.account
            }
        })(At), Mt = n(12), Pt = n.n(Mt), Rt = function (e) {
            var t = e.title, n = e.route, a = e.key;
            return {
                title: t, render: function (e, t, r) {
                    var c = h();
                    document.getElementById(
                        "appArea").innerHTML = '<div id="tc-'.concat(a,
                        '"></div>'), c.history.push(n), c.render(
                        "#tc-".concat(a), Dt)
                }, destroy: function () {
                    Pt.a.unmountComponentAtNode(
                        document.getElementById("tc-".concat(a)))
                }
            }
        };
        var Lt = {
            LoginAppId: localStorage.getItem("login_appid"),
            RedirectUri: "".concat(window.location.origin, "/main/checkLogin"),
            scope: "scope"
        }, Tt = function (e) {
            window.location.href = "/main/checkLogin?code=".concat(e)
        }, qt = function (e) {
            window.location.href = "/main/wechat_bind?".concat(
                encodeURIComponent(Z.a.stringify(e)))
        }, Bt = function () {
            var e = Object(J.a)(M.a.mark(function e() {
                var t, n, a, r, c, o, i, s, u, l;
                return M.a.wrap(function (e) {
                    for (; ;) {
                        switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Object(ae.a)(
                                    ae.c.getLoginConfig);
                            case 2:
                                if (t = e.sent, 0 !== (n = t.resp).Code) {
                                    e.next = 18;
                                    break
                                }
                                if (a = n.Data, r = a.LoginAppid, c = a.LoginAppSecret, o = Z.a.parse(
                                    window.location.search), i = o.auth_code) {
                                    e.next = 10;
                                    break
                                }
                                return window.location.href = "/main/login", e.abrupt(
                                    "return");
                            case 10:
                                return s = {
                                    WxCode: i,
                                    LoginAppid: r,
                                    LoginAppSecret: c,
                                    RedirectUri: "".concat(
                                        window.location.origin,
                                        "/main/checkLogin"),
                                    Scope: "all"
                                }, e.next = 13, Object(ae.a)(
                                    ae.c.getUserInfoByAuthCode, s);
                            case 13:
                                return u = e.sent, l = u.resp, e.abrupt(
                                    "return",
                                    l);
                            case 18:
                                R.a.error(n.Msg);
                            case 19:
                            case"end":
                                return e.stop()
                        }
                    }
                }, e)
            }));
            return function () {
                return e.apply(this, arguments)
            }
        }(), Ut = function () {
            var e = Object(J.a)(M.a.mark(function e() {
                var t, n, a, r, c, o;
                return M.a.wrap(function (e) {
                    for (; ;) {
                        switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Object(ae.a)(
                                    ae.c.getWechatAppID);
                            case 2:
                                if (t = e.sent, 0 !== (n = t.resp).Code) {
                                    e.next = 16;
                                    break
                                }
                                if (a = Z.a.parse(
                                    window.location.search), r = a.code) {
                                    e.next = 9;
                                    break
                                }
                                return window.location.href = "/main/login", e.abrupt(
                                    "return");
                            case 9:
                                return e.next = 11, Object(ae.a)(
                                    ae.c.getCode2OpenID, {
                                        code: r,
                                        login_appId: Lt.LoginAppId,
                                        redirect_uri: Lt.RedirectUri,
                                        scope: Lt.scope
                                    });
                            case 11:
                                return c = e.sent, o = c.resp, e.abrupt(
                                    "return",
                                    o);
                            case 16:
                                R.a.error(n.Msg);
                            case 17:
                            case"end":
                                return e.stop()
                        }
                    }
                }, e)
            }));
            return function () {
                return e.apply(this, arguments)
            }
        }();

        function Gt() {
            return (Gt = Object(J.a)(M.a.mark(function e() {
                var t, n, a, r, c, o, i, s, u, l;
                return M.a.wrap(function (e) {
                    for (; ;) {
                        switch (e.prev = e.next) {
                            case 0:
                                if ("wx" !== Z.a.parse(
                                    window.location.search).type) {
                                    e.next = 7;
                                    break
                                }
                                return e.next = 3, Ut();
                            case 3:
                                0 === (t = e.sent).Code
                                    ? (n = t.BindWxStatus, a = t.AuthCode, r = t.BindCode, 1
                                    === n ? Tt(a) : qt({BindCode: r, type: "wx"}))
                                    : R.a.error(t.Msg), e.next = 11;
                                break;
                            case 7:
                                return e.next = 9, Bt();
                            case 9:
                                0 == (c = e.sent).Code
                                    ? (o = c.IndustryStatus, i = c.AuthCode, s = c.CorpId, u = c.UserId, l = c.Name, 1
                                    === o ? Tt(i) : qt({
                                        CorpId: s,
                                        UserId: u,
                                        NickName: l,
                                        type: "ww"
                                    })) : 40017 == c.Code
                                    ? window.location.href = "/sso/wxInstall"
                                    : R.a.error(c.Msg
                                        || "\u83b7\u53d6\u6570\u636e\u5931\u8d25");
                            case 11:
                            case"end":
                                return e.stop()
                        }
                    }
                }, e)
            }))).apply(this, arguments)
        }

        n(1195);
        if ("/main/checkLogin" === window.location.pathname) {
            Object(
                P.checkLoginCode)();
        } else if ("/main/wechat"
            === window.location.pathname) {
            !function () {
                Gt.apply(this, arguments)
            }();
        } else {
            if (window.define) {
                !function (e) {
                    var t = e.businessKey;
                    e.routes.forEach(function (e) {
                        var n = "modules/".concat(t, "/").concat(e.key,
                            "/").concat(
                            e.key);
                        window.define(n, function (t) {
                            return Rt(Object(A.a)({}, e, {require: t}))
                        })
                    })
                }({businessKey: "test", routes: []});
            } else {
                h().render("#root", Dt)
            }
        }
    }, 15: function (e, t, n) {
        "use strict";
        n.d(t, "d", function () {
            return a
        }), n.d(t, "f", function () {
            return r
        }), n.d(t, "c", function () {
            return c
        }), n.d(t, "a", function () {
            return o
        }), n.d(t, "e", function () {
            return i
        }), n.d(t, "b", function () {
            return s
        });
        var a = function (e) {
            var t = this;
            return new Promise(function (n) {
                return t.setState(e, n())
            })
        }, r = function (e) {
            var t = "";
            for (var n in e) {
                t += encodeURIComponent(n) + "="
                    + encodeURIComponent(e[n]) + "&";
            }
            return t = t.slice(0, t.length - 1)
        }, c = function e(t, n, a, r) {
            for (var c = 0; c < t.length; c++) {
                var o = t[c];
                a(o, r), o[n] && o[n].length > 0 && e(o[n], n, a, o)
            }
        };
        var o = function (e) {
            return e ? -1 !== e.indexOf("http://") || -1 !== e.indexOf(
                "https://") || -1 !== e.indexOf("/static/") ? e : "//"
            === e.slice(0, 2) ? "".concat(window.location.protocol).concat(e)
                : "".concat(window.location.protocol, "//").concat(e) : ""
        }, i = function (e) {
            var t = localStorage.getItem("CLOUD_ID");
            return t ? e instanceof FormData === !0 ? (e.append("CloudId",
                t), e) : Object.assign({}, e, {CloudId: t}) : Object.assign({},
                e)
        }, s = function (e) {
            if (e) {
                var t = window.location.search.substring(1).split("&"), n = {};
                for (var a in t) {
                    var r = t[a].split("=")[0], c = t[a].split("=")[1];
                    n[r] = c
                }
                return n[e]
            }
        }
    }, 21: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return g
        }), n.d(t, "b", function () {
            return b
        });
        var a = n(4), r = n.n(a), c = n(8), o = n(22), i = n(74);
        n.d(t, "c", function () {
            return i.a
        });
        var s = n(51), u = n(14), l = n.n(u), d = n(15);

        function m(e) {
            return p.apply(this, arguments)
        }

        function p() {
            return (p = Object(o.a)(r.a.mark(function e(t) {
                var n, a, c, o, i, s, u, d, m, p, g, f, h, b;
                return r.a.wrap(function (e) {
                    for (; ;) {
                        switch (e.prev = e.next) {
                            case 0:
                                for (n = t.method, a = t.url, c = t.params, o = void 0
                                === c ? {} : c, i = t.query, s = {
                                    Accept: "application/json",
                                    "Content-Type": "application/json"
                                }, n = n.toUpperCase(), u = void 0, d = l.a.parseUrl(
                                    a), m = function () {
                                    var e = g[p];
                                    d.url = d.url.replace(":" + e,
                                        function (t) {
                                            if (t) {
                                                return o[e]
                                            }
                                        })
                                }, p = 0, g = Object.keys(o); p < g.length;
                                    p++) {
                                    m();
                                }
                                if (i) {
                                    for (f = function () {
                                        var e = b[h];
                                        d.url = d.url.replace(":" + e,
                                            function (t) {
                                                if (t) {
                                                    return i[e]
                                                }
                                            })
                                    }, h = 0, b = Object.keys(i); h < b.length;
                                        h++) {
                                        f();
                                    }
                                }
                                return d.query = Object.assign({}, d.query,
                                    o), a = d.url + "?" + l.a.stringify(
                                    d.query), "GET" !== n && (o
                                instanceof FormData
                                === !0 ? (s = void 0, u = o)
                                    : u = JSON.stringify(
                                        o)), e.next = 13, fetch(a,
                                    {method: n, headers: s, body: u});
                            case 13:
                                return e.abrupt("return", e.sent);
                            case 14:
                            case"end":
                                return e.stop()
                        }
                    }
                }, e)
            }))).apply(this, arguments)
        }

        var g = function () {
            var e = Object(o.a)(r.a.mark(function e(t, n, a) {
                var o, i, u, l, p, g, f, h;
                return r.a.wrap(function (e) {
                    for (; ;) {
                        switch (e.prev = e.next) {
                            case 0:
                                return o = t.split(" "), i = Object(c.a)(o,
                                    2), u = i[0], l = i[1], p = {url: l}, s.a.beforeAjax(
                                    p), e.next = 5, m({
                                    method: u,
                                    url: p.url,
                                    params: Object(d.e)(n),
                                    query: Object(d.e)(a)
                                });
                            case 5:
                                if (g = e.sent, f = {}, 200 !== g.status) {
                                    e.next = 14;
                                    break
                                }
                                return e.next = 10, g.json();
                            case 10:
                                h = e.sent, f = {
                                    error: null,
                                    origin: g,
                                    req: n,
                                    resp: h
                                }, e.next = 15;
                                break;
                            case 14:
                                f = {
                                    error: null,
                                    origin: g,
                                    req: n,
                                    resp: {
                                        code: g.status,
                                        msg: g.statusText,
                                        success: !1
                                    }
                                };
                            case 15:
                                return s.a.ajaxDone(f, p), e.abrupt("return",
                                    f);
                            case 17:
                            case"end":
                                return e.stop()
                        }
                    }
                }, e)
            }));
            return function (t, n, a) {
                return e.apply(this, arguments)
            }
        }();

        function f(e) {
            return h.apply(this, arguments)
        }

        function h() {
            return (h = Object(o.a)(r.a.mark(function e(t) {
                var n, a, c, o, i, s, u, d, m, p, g, f, h, b;
                return r.a.wrap(function (e) {
                    for (; ;) {
                        switch (e.prev = e.next) {
                            case 0:
                                for (n = t.method, a = t.url, c = t.params, o = void 0
                                === c ? {} : c, i = t.query, s = {
                                    Accept: "application/json",
                                    "Content-Type": "application/json"
                                }, n = n.toUpperCase(), u = void 0, d = l.a.parseUrl(
                                    a), m = function () {
                                    var e = g[p];
                                    d.url = d.url.replace(":" + e,
                                        function (t) {
                                            if (t) {
                                                return o[e]
                                            }
                                        })
                                }, p = 0, g = Object.keys(o); p < g.length;
                                    p++) {
                                    m();
                                }
                                if (i) {
                                    for (f = function () {
                                        var e = b[h];
                                        d.url = d.url.replace(":" + e,
                                            function (t) {
                                                if (t) {
                                                    return i[e]
                                                }
                                            })
                                    }, h = 0, b = Object.keys(i); h < b.length;
                                        h++) {
                                        f();
                                    }
                                }
                                return "GET" !== n ? o instanceof FormData
                                    === !0
                                    ? (s = void 0, u = o) : u = JSON.stringify(
                                        o)
                                    : d.query = Object.assign({}, d.query,
                                        o), a = d.url + "?" + l.a.stringify(
                                    d.query), e.next = 12, fetch(a,
                                    {method: n, headers: s, body: u});
                            case 12:
                                return e.abrupt("return", e.sent);
                            case 13:
                            case"end":
                                return e.stop()
                        }
                    }
                }, e)
            }))).apply(this, arguments)
        }

        var b = function () {
            var e = Object(o.a)(r.a.mark(function e(t, n, a) {
                var o, i, u, l, m, p, g, h;
                return r.a.wrap(function (e) {
                    for (; ;) {
                        switch (e.prev = e.next) {
                            case 0:
                                return o = t.split(" "), i = Object(c.a)(o,
                                    2), u = i[0], l = i[1], m = {url: l}, s.a.beforeAjax(
                                    m), e.next = 5, f({
                                    method: u,
                                    url: m.url,
                                    params: Object(d.e)(n),
                                    query: Object(d.e)(a)
                                });
                            case 5:
                                if (200 !== (p = e.sent).status) {
                                    e.next = 15;
                                    break
                                }
                                return e.next = 9, p.json();
                            case 9:
                                return g = e.sent, h = {
                                    error: null,
                                    origin: p,
                                    req: n,
                                    resp: {data: g}
                                }, s.a.ajaxDone(h), e.abrupt("return",
                                    {error: null, origin: p, req: n, resp: g});
                            case 15:
                                return e.abrupt("return", {
                                    error: null,
                                    origin: p,
                                    req: n,
                                    resp: {
                                        code: p.status,
                                        msg: p.statusText,
                                        success: !1
                                    }
                                });
                            case 16:
                            case"end":
                                return e.stop()
                        }
                    }
                }, e)
            }));
            return function (t, n, a) {
                return e.apply(this, arguments)
            }
        }()
    }, 23: function (e, t, n) {
        "use strict";
        var a, r, c = n(917), o = n(0), i = n.n(o), s = n(12), u = n.n(s),
            l = function (e) {
                clearTimeout(r);
                var t = e.message, n = e.type, o = e.duration,
                    s = void 0 === o ? 2e3 : o;
                a || (a = document.createElement(
                    "div"), document.body.appendChild(a)), u.a.render(
                    i.a.createElement(c.a, {fixed: !0, type: n}, t),
                    a), r = setTimeout(function () {
                    u.a.unmountComponentAtNode(a)
                }, s)
            }, d = {
                success: function (e, t) {
                    l({type: "success", message: e, duration: t})
                }, done: function (e, t) {
                    l({type: "success", message: e, duration: t})
                }, warning: function (e, t) {
                    l({type: "warning", message: e, duration: t})
                }, error: function (e, t) {
                    l({type: "error", message: e, duration: t})
                }, info: function (e, t) {
                    l({type: "info", message: e, duration: t})
                }
            };
        t.a = d
    }, 34: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return l
        }), n.d(t, "b", function () {
            return d
        }), n.d(t, "d", function () {
            return p
        }), n.d(t, "g", function () {
            return g
        }), n.d(t, "h", function () {
            return f
        }), n.d(t, "f", function () {
            return h
        }), n.d(t, "c", function () {
            return b
        }), n.d(t, "e", function () {
            return v
        });
        var a = n(42), r = n(968), c = n.n(r), o = n(133), i = n.n(o),
            s = n(969), u = n.n(s);
        n(56);

        function l(e) {
            return function (t) {
                var n = {};
                return c()(e, function (e, a) {
                    var r = t[a], c = d(e, r, t);
                    n[a] = c
                }), n
            }
        }

        var d = function (e, t, n) {
            var r = void 0;
            if (e && e.length > 0) {
                var c = m(e), o = e[0].spacing;
                if (c || void 0 !== t) {
                    r = function (e, t, n, r) {
                        var c = void 0;
                        switch (e) {
                            case"string":
                                c = function (e, t) {
                                    var n = function (e) {
                                            var t = {};
                                            return e.forEach(function (e) {
                                                t = Object(a.a)({}, t, e)
                                            }), t
                                        }(t), r = n.max, c = n.min, o = n.regex,
                                        i = n.required, s = function (e, t) {
                                            var n = {};
                                            return e.forEach(function (e) {
                                                t.forEach(function (t) {
                                                    void 0 !== e[t]
                                                    && (n[t] = e.message)
                                                })
                                            }), n
                                        }(t, ["max", "min", "regex", "required"]);
                                    if (i && (void 0 === e || ""
                                        === e)) {
                                        return s.required;
                                    }
                                    if (r && e.length > r) {
                                        return s.max;
                                    }
                                    if (c && e.length < c) {
                                        return s.min;
                                    }
                                    if (o && !o.test(e)) {
                                        return s.regex
                                    }
                                }(t, n);
                                break;
                            case"enum":
                                c = function (e, t) {
                                    t.length;
                                    var n = t[0];
                                    if (n.required && (void 0 === e || ""
                                        === e)) {
                                        return n.message;
                                    }
                                    var a = n.enum;
                                    if (!u()(a, e)) {
                                        return n.message, n.message
                                    }
                                }(t, n);
                                break;
                            case"diy":
                                c = function (e, t, n) {
                                    for (var a = m(t), r = 0; r < t.length;
                                        r++) {
                                        var c = t[r];
                                        if ((void 0 === e || "" === e)
                                            && a) {
                                            return c.message;
                                        }
                                        if (c.diy && !c.diy(e,
                                            n)) {
                                            return c.message, c.message
                                        }
                                    }
                                }(t, n, r)
                        }
                        return c
                    }(function (e) {
                        var t = i()(e, function (e) {
                            return void 0 !== e.type
                        });
                        return t ? t.type : "string"
                    }(e), t, e, n);
                }
                return c && "string" === typeof t && -1 !== t.indexOf(" ") && (o
                    ? o && t.match(/^\s+$/)
                    && (r = "\u8f93\u5165\u5185\u5bb9\u4e0d\u5141\u8bb8\u4ec5\u4e3a\u7a7a\u683c")
                    : r = "\u8f93\u5165\u5185\u5bb9\u5305\u542b\u7a7a\u683c"), r
            }
        };

        function m(e) {
            var t = i()(e, function (e) {
                return void 0 !== e.required
            });
            return !!t && t.required
        }

        var p = function (e) {
            return !isNaN(e)
        }, g = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0] : 0;
            return function (t) {
                return t = t.trim(), !e || t.length <= e
            }
        }, f = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0] : 0;
            return function (t) {
                return t = t.trim(), !e || t.length >= e
            }
        }, h = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0] : 6;
            return function (t) {
                return (t = t.trim()).length === e
            }
        }, b = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1] : 100;
            return [{
                required: !0,
                message: "".concat(e, "\u4e0d\u80fd\u4e3a\u7a7a"),
                spacing: !0,
                type: "diy"
            }, {
                diy: g(t),
                message: "".concat(e, "\u6700\u591a").concat(t, "\u4e2a\u5b57")
            }]
        }, v = function (e) {
            return function (t) {
                return t.match(e)
            }
        }
    }, 39: function (e, t, n) {
        "use strict";
        t.a = {
            prefixClassName: "seal",
            componentsName: {
                flexItem: "flex-item",
                flex: "flex",
                tab: "tab",
                icon: "icon",
                input: "input",
                radio: "radio",
                search: "search",
                list: "list",
                button: "button",
                pages: "pages",
                price: "price",
                dialog: "dialog",
                label: "label",
                bubble: "bubble",
                tip: "tip",
                table: "table",
                progress: "progress",
                star: "star",
                badge: "badge",
                process: "process",
                textarea: "textarea",
                dropdown: "dropdown",
                breadCrumbs: "bread-crumbs",
                radioGroup: "radio-group",
                checkboxGroup: "checkbox-group",
                checkbox: "checkbox",
                numberInput: "number-input",
                radioBlock: "radio-block",
                resultBox: "result-box",
                ButtonGroup: "button-group",
                eventBox: "event-box",
                coupon: "coupon",
                eventProcess: "event-process",
                cardList: "card-list",
                panel: "panel",
                dropMenu: "drop-menu",
                select: "select"
            },
            PAGE_BACKGROUND_COLOR: ["#F7F9FC", "#FFF"]
        }
    }, 46: function (e, t, n) {
        "use strict";
        var a = localStorage.getItem("CLOUD_ID");
        t.a = {
            getPassportHost: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0] : {hostname: "passport", pathname: "login"},
                    t = e.hostname, n = e.pathname, r = "";
                r = "login" === n || "register" === n ? "/".concat(t,
                    "/").concat(n, "?back_uri=").concat(
                    encodeURIComponent(location.href), "&cloud_id=").concat(a)
                    : "/".concat(t, "/").concat(n, "&cloud_id=").concat(a);
                var c = localStorage.getItem("urlDomin") && JSON.parse(
                    localStorage.getItem("urlDomin")) || {}, o = c.protocol,
                    i = c.passport_host;
                /^(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}$/.test(
                    location.host) ? window.location.href = r
                    : window.location.href = o + i + r
            }
        }
    }, 51: function (e, t, n) {
        "use strict";
        var a = n(15), r = n(25), c = n(26), o = new (function () {
            function e() {
                Object(r.a)(this,
                    e), this.history = [], this.max = 10, this.listener = {change: []}
            }

            return Object(c.a)(e, [{
                key: "add", value: function (e) {
                    this.history.length >= this.max
                    && this.history.shift(), this.history.push(e), this.trigger(
                        "change")
                }
            }, {
                key: "getlastHistroy", value: function () {
                    return this.history[this.history.length - 2] || ""
                }
            }, {
                key: "isMatch", value: function (e, t) {
                    for (var n = !1, a = 0; a < e.length; a++) {
                        var r = e[a];
                        if (-1 !== t.indexOf(r)) {
                            n = !0;
                            break
                        }
                    }
                    return n
                }
            }, {
                key: "on", value: function (e, t) {
                    var n = this.listener[e] || [];
                    n.push(t), this.listener[e] = n
                }
            }, {
                key: "trigger", value: function (e) {
                    var t = Array.prototype.slice.apply(arguments).slice(1),
                        n = this.listener[e];
                    Array.isArray(n) && n.forEach(function (e) {
                        try {
                            e.apply(this, t)
                        } catch (n) {
                        }
                    })
                }
            }]), e
        }()), i = n(65), s = n(43), u = n(46), l = [], d = {
            beforeAjax: function (e) {
                -1 !== ["moveDoc", "putDocCategory", "deleteDocCategory",
                    "moveCategory", "DeleteCertificate", "DeleteNews",
                    "DeletePatent", "DeletePersonnel", "putDemandCount",
                    "deletePortalServices"].indexOf(e.name) && (e.url = Object(
                    a.f)(e.data, e.url));
                var t = new Date, n = e.url;
                l.push({start: t, url: n})
            }, routeChange: function (e) {
                Object(i.h)(e), o.add(e.location.pathname), window.scrollTo(0,
                    0), document.querySelector(".qcd-page").scrollIntoView(!0)
            }, ajaxDone: function (e, t) {
                try {
                    if (200 !== e.origin.status) {
                        var n = e.origin.headers.get("X-Request-Id")
                            || e.origin.headers.get("requestid");
                        window.Raven.captureMessage(
                            "Promise Error RequestId:" + n, {level: "error"})
                    }
                } catch (o) {
                }
                try {
                    var a = l.find(function (e) {
                        return e.url === t.url
                    }), r = l.findIndex(function (e) {
                        return e.url === t.url
                    });
                    l.splice(r, 1), fetch("/cgi/report", {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({
                            url: a.url,
                            status: e.origin.status,
                            code: e.resp.Code || e.resp.code || 0,
                            time: new Date - a.start
                        })
                    })
                } catch (o) {
                }
                if (e.resp.data && (0 === e.resp.data.Code
                    || e.resp.data.Code)) {
                    var c = e.resp.data.Code;
                    (function (e) {
                        return -1 !== [9001, 9002].indexOf(e)
                    })(c) && setTimeout(function () {
                        Object(s.removeAccountInfo)(), u.a.getPassportHost()
                    }, 800), 40026 === c && Object(s.logout)().then(
                        function () {
                            window.location.reload()
                        })
                }
            }
        };
        t.a = d
    }, 56: function (e, t, n) {
        "use strict";
        t.a = {
            email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            mobile: /^1[3-9]\d{9}$/,
            sensitiveMobile: /^1[3-9]\d{1}\*{4}\d{4}$/,
            tel: /^(0\d{2,3}(-| )\d{7,8}|\d{3}(-| )(\d{3}(-| )\d{4}|\d{4}(-| )\d{3}))$/,
            website: /^(https?):{1}\/\/[-A-Za-z0-9+&@#\/%?=~_|!:,.;]+[-A-Za-z0-9+&@#\/%=~_|]/,
            numberOnly: /^[0-9]*$/,
            registryNo: /(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/,
            msgCaptcha: /^[0-9]{6}$/,
            sPassword: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/,
            wPasseord: /^[0-9a-zA-Z]\w{7,17}$/,
            idCard: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
            noSpecial: /^([a-zA-Z0-9_\s\-]*)$/,
            specialChar: /[0123456789`~!@#$%^&*()_+<>?:"{},.\/;'[\]\xb7\uff01\uffe5\uff08\u2014\u2014\uff09\uff1a\uff1b\u201c\u201d\u2018\u3001\uff0c|\u300a\u3002\u300b\uff1f\u3001\u3010\u3011]/im,
            imgFormat: /\.(png|jpg|jpeg)$/i,
            money: /^([1-9]\d*|0)(\.\d{1,2})?$/,
            posInt: /^[1-9]\d*$/,
            mobileEmail: /(^1[3-9]\d{9}$)|(^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$)/,
            telWithStar: /(\d{3})\d*(\d{4})/
        }
    }, 59: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return b
        });
        var a = n(42), r = n(32), c = n(64), o = n(25), i = n(26), s = n(27),
            u = n(30), l = n(31), d = n(0), m = n.n(d), p = n(3), g = n.n(p),
            f = n(39), h = "".concat(f.a.prefixClassName, "-").concat(
            f.a.componentsName.icon), b = function (e) {
                function t(e) {
                    var n;
                    return Object(o.a)(this, t), (n = Object(s.a)(this,
                        Object(u.a)(t).call(
                            this)))._handleMouseEnter = function () {
                        n.setState({isHover: !0})
                    }, n._handleMouseLeave = function () {
                        n.setState({isHover: !1})
                    }, n.state = {isHover: !1}, n
                }

                return Object(l.a)(t, e), Object(i.a)(t, [{
                    key: "render", value: function () {
                        var e = this, t = this.props, n = t.className, o = t.size,
                            i = t.hover, s = t.type, u = t.style, l = Object(c.a)(t,
                            ["className", "size", "hover", "type", "style"]), d = s;
                        return this.state.isHover && i
                        && (d = i), m.a.createElement("i", Object.assign({
                            className: g()(h, "".concat(h, "--").concat(d), n,
                                Object(r.a)({}, "".concat(h, "--hover"), i)),
                            style: Object(a.a)({
                                width: "".concat(o, "px"),
                                height: "".concat(o, "px")
                            }, u),
                            onMouseEnter: function () {
                                return e._handleMouseEnter()
                            },
                            onMouseLeave: function () {
                                return e._handleMouseLeave()
                            }
                        }, l))
                    }
                }]), t
            }(d.Component)
    }, 65: function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return s
        }), n.d(t, "j", function () {
            return u
        }), n.d(t, "i", function () {
            return l
        }), n.d(t, "a", function () {
            return d
        }), n.d(t, "g", function () {
            return m
        }), n.d(t, "e", function () {
            return p
        }), n.d(t, "d", function () {
            return g
        }), n.d(t, "b", function () {
            return f
        }), n.d(t, "f", function () {
            return h
        }), n.d(t, "h", function () {
            return b
        });
        var a = n(11), r = n.n(a), c = n(44), o = (n(909), n(46)),
            i = r.a.debounce.convert({fixed: !1}),
            s = (r.a.curry(function (e, t) {
                return i(e)(t, {leading: !0})
            }), function (e) {
                return JSON.parse(JSON.stringify(e))
            }), u = function (e) {
                var t = (e = Math.round(100 * parseFloat(e))
                    / 100).toString().split(".");
                return 1 === t.length ? e = e.toString() + ".00" : t.length > 1
                    ? (t[1].length < 2 && (e = e.toString() + "0"), e) : void 0
            }, l = function (e) {
                if (null === e || void 0 === e) {
                    return "-";
                }
                var t = (e = parseFloat(e) / 100).toString().split(".");
                return 1 === t.length ? e = e.toString() + ".00" : t.length > 1
                    ? (t[1].length < 2 && (e = e.toString() + "0"), e) : void 0
            }, d = function (e) {
                var t = (arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1] : {}).ifZeroPadding, n = .01 * e;
                return void 0 !== t && t ? u(.01 * e) : n
            }, m = function () {
                o.a.getPassportHost()
            }, p = function (e) {
                return e / 100
            }, g = function (e, t) {
                var n = {
                    "M+": t.getMonth() + 1,
                    "d+": t.getDate(),
                    "h+": t.getHours(),
                    "m+": t.getMinutes(),
                    "s+": t.getSeconds(),
                    "q+": Math.floor((t.getMonth() + 3) / 3),
                    S: t.getMilliseconds()
                };
                for (var a in/(y+)/.test(e) && (e = e.replace(RegExp.$1,
                    (t.getFullYear() + "").substr(
                        4 - RegExp.$1.length))), n) {
                    new RegExp("(" + a + ")").test(
                        e) && (e = e.replace(RegExp.$1,
                        1 === RegExp.$1.length ? n[a] : ("00" + n[a]).substr(
                            ("" + n[a]).length)));
                }
                return e
            }, f = function (e) {
                var t = e.code, n = e.errObj;
                if (0 === t) {
                    var a = e.data, r = a.code, c = a.data.Response,
                        o = void 0 === c ? {} : c;
                    return 0 === r ? {code: r, Response: o} : {
                        code: r,
                        errMessage: o.Error.Message
                    }
                }
                return {code: t, errMessage: n.message}
            }, h = function (e) {
                if (!e || "0" === e) {
                    return "-";
                }
                var t = e.split(" ");
                return 4 === t.length ? "".concat(t[0], " ").concat(t[1]) : "-"
            }, b = function (e) {
                var t = (JSON.parse(localStorage.getItem("headNavlist"))
                    || []).find(function (t) {
                    return t.Url === e.location.pathname + e.location.search
                });
                t && t.Name && c.Insight.reportDirect("show_page",
                    {url: e.location.pathname, product_name: t.Name})
            }
    }, 74: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return m
        });
        var a = n(8), r = n(11), c = n.n(r), o = n(9), i = o.iamServer,
            s = o.asmServer, u = o.asmServer, l = o.asmServer, d = o.asmServer,
            m = o.asmServer, p = o.asmServer, g = o.asmServer, f = o.asmServer,
            h = o.asmServer, b = o.asmServer,
            v = {getMenu: "GET menus ".concat(o.asmServer)}, y = {
                getToken: "GET oauth/token",
                getUserInfo: "GET account",
                getCorpInfo: "GET account/auth/detail",
                getUrl: "get config ".concat("/c-api"),
                submitCorpName: "POST account/auth/SubmitCorpName",
                getCorpsList: "GET corps/2",
                getPaymentInfo: "GET corp_auth",
                getQcloudUri: "GET corp_qcloud_redirect",
                getMiniprog: "POST account/auth/miniprog",
                fetchMessages: "POST msg_center/msg",
                getCustomerService: "GET customer_service/:corp_id",
                getCustomerServiceSwitch: "GET customer_service_switch",
                postWxStatus: "POST account/unbind/mfa",
                postSendVerifyCode: "POST account/view/send_verify_code_general",
                sendTelCode: "post misc/new_tel_ticket",
                sendEmailCode: "post misc/new_email_ticket",
                updateMobile: "put account/mobile",
                verifyContactInfo: "get account/contact/check",
                getTencenCloud: "GET account/redirect/uri"
            }, w = {
                getSolutionDetail: "GET solution_detail/:id ".concat(o.asmServer),
                solutionApply: "POST solution_apply ".concat(o.asmServer)
            }, O = {
                getCategory: "get colla_category/:CategoryID",
                getInformation: "get scrolling_infos ".concat(m),
                getCardData: "get homepage_index ".concat(m),
                getHomeInfo: "get homepage_index",
                getIndustrial: "get application_index",
                postDemand: "post colla_demand",
                getDemand: "get colla_demands",
                getReleasedDemand: "get colla_released_demands",
                putCollaDemandCount: "post colla_demand_record",
                postBid: "post do_bid",
                getBidList: "post bid_list/:AccountId/:bidState",
                postServer: "post colla_server",
                getServer: "get colla_servers",
                getReleasedServers: "get colla_released_servers",
                getReleasedDemands: "get colla_released_demands",
                getRecommendDemands: "post server/DescribeServerPCRecommends",
                putServeCount: "put colla_server_record",
                getRecommendService: "get colla_server_recommends",
                getDemandAudit: "get colla_audit_demands ".concat(m),
                getServiceAudit: "get colla_audit_servers ".concat(m),
                getProviderAuditDetail: "get service_provider_audit/:cp_audit_id ".concat(
                    l)
            }, S = {
                postCase: "post case ".concat(d),
                deleteCase: "delete case ".concat(d),
                postCaseAudit: "post case_audit ".concat(d),
                getCaseDetail: "get case/:id ".concat(d),
                getCaseList: "post cases ".concat(d),
                getCaseVisitList: "post cases/visit ".concat(d),
                getCaseComment: "get case/:id/comment ".concat(d),
                postCaseRecommend: "post case_recommend ".concat(d),
                getCaseRecommend: "get case_recommend ".concat(d)
            }, E = {
                getEduCategory: "get course_category/:CategoryID",
                getCourse: "post course/:course_id",
                getRecommendList: "get course_recommend",
                postStatistics: "post edu/statistic",
                getHomeRecommendCourseList: "get course_config/:CategoryID  ".concat(
                    o.asmServer),
                getCourseList: "get course/:CategoryID/market",
                postApplyCourse: "post edu/new/apply/user",
                getStudyingList: "get edu/apply_list/user",
                fetchPurchaseList: "get edu/apply_list/master",
                createEduOrder: "post edu/apply/order",
                postCostPay: "post cost_pay",
                costQueryOrder: "post cost_query_order",
                costGetOrder: "post cost_get_order",
                costPay: "get cost_pay",
                getCostBalance: "GET cost_balance/:corp_id",
                getCostAccountList: "GET cost_account",
                getPolicyLevel: "GET entre-inno/policy/levels",
                getPolicyType: "GET entre-inno/policy/types",
                getPolicyList: "GET entre-inno/policies/user",
                getPolicyDetail: "GET entre-inno/policy/id/:policyID",
                fetchCourseOrderStatus: "post edu/apply/get_order",
                confirmPayCourse: "post edu/pay"
            }, C = {
                getModule: "get module_list ".concat(f),
                uploadImg: "post image/upload ".concat(f),
                getDocCategory: "get doc_category/:id ",
                postDocCategory: "post doc_category ",
                deleteDocCategory: "delete doc_category/:id ",
                putDocCategory: "put doc_category/:id ",
                moveDocCategory: "post doc_category_move/:id ",
                postDocument: "post document ",
                deleteDocument: "delete document/:id ",
                putDocument: "put document/:id ",
                getDocument: "get document/:id ",
                postFaq: "post faq ",
                deleteFaq: "delete faq/:id ",
                putFaq: "put faq/:id ",
                getFaq: "get faq ",
                putFaqSwitch: "post faq_switch ",
                postCmsSetting: "post cms_setting ".concat(h),
                getCmsSetting: "get cms_setting ".concat(h),
                putCmsSetting: "put cms_setting ".concat(h),
                postCmsPartner: "post cms_partner ".concat(h),
                getCmsPartner: "get cms_partner ".concat(h),
                putCmsPartner: "put cms_partner ".concat(h),
                postCmsBanner: "post cms_banner ".concat(h),
                getCmsBanner: "get cms_banner ".concat(h),
                putCmsBanner: "put cms_banner ".concat(h),
                delCmsBanner: "delete cms_banner ".concat(h),
                getCmsPhoto: "get cms_photo ".concat(h),
                putCmsPhoto: "put cms_photo ".concat(h),
                delCmsPhoto: "delete cms_photo ".concat(h),
                postCmsNews: "post doc_add_news ".concat(h),
                getSearchCmsNews: "post doc_search_news ".concat(h),
                getCmsNews: "post doc_news ".concat(h),
                putCmsNews: "put doc_news ".concat(h),
                putawayCmsNews: "get doc_news/:id/:state ".concat(h),
                postRecommdCmsNews: "get doc_news/:id ".concat(h),
                getNewsRanks: "post doc_news/hot_news ".concat(o.asmServer),
                getNewsTopics: "post doc_news/hot_topics ".concat(o.asmServer),
                getEntreInnoWorkplaces: "get entre-inno/workspaces/user ".concat(
                    o.asmServer),
                getEntreInnoWorkplace: "get entre-inno/workspace/id/:workspace_id ".concat(
                    o.asmServer),
                postEntreInnoWorkplaceApply: "post entre-inno/workspace/apply ".concat(
                    o.asmServer),
                getEntreInnoUserApply: "get entre-inno/userapply ".concat(
                    o.asmServer),
                postEntreInnoUserApplyReapply: "post entre-inno/userapply/reapply ".concat(
                    o.asmServer),
                getEntreInnoPolicies: "get entre-inno/policies/user ".concat(
                    o.asmServer),
                getArticles: "get community/articles ".concat(o.asmServer),
                getArticle: "get community/articles/details ".concat(o.asmServer),
                postArticle: "post community/articles ".concat(o.asmServer),
                getArticlesByLabel: "get community/labels/articles ".concat(
                    o.asmServer),
                getQuestions: "get community/issues ".concat(o.asmServer),
                getQuestion: "get community/issues/details ".concat(o.asmServer),
                postQuestion: "post community/issues ".concat(o.asmServer),
                getAuthorArticles: "get community/authors/articles ".concat(
                    o.asmServer),
                getAuthorQuestions: "get community/authors/issues ".concat(
                    o.asmServer),
                getAuthorReplies: "get community/authors/replies ".concat(
                    o.asmServer),
                getAuthor: "get community/authors/details ".concat(o.asmServer),
                getTags: "get community/labels ".concat(o.asmServer),
                postTag: "post community/labels ".concat(o.asmServer),
                getExperts: "get community/experts ".concat(o.asmServer),
                getReplies: "get community/authors/issues/replies ".concat(
                    o.asmServer),
                getActivities: "get community/activities ".concat(o.asmServer),
                postMsgboardMsg: "post msgboard/msg ".concat(o.asmServer),
                getMsgboardMsg: "get msgboard/msg ".concat(o.asmServer),
                putMsgboardMsg: "put msgboard/msg ".concat(o.asmServer),
                deleteMsgboardMsg: "delete msgboard/msg ".concat(o.asmServer),
                getMsgboardCommentlist: "get msgboard/commentlist ".concat(
                    o.asmServer),
                getMsgboardReplylist: "get msgboard/replylist ".concat(o.asmServer),
                getMemberStatus: "get member/status ".concat(o.asmServer),
                getMemberRights: "get member/rights ".concat(o.asmServer),
                getWechatAppID: "get wechat/appid /wx",
                getCode2OpenID: "get wechat/login /wx",
                bindUserMail: "post wechat/bind_user_mail /wx",
                getAuthCode: "get wechat/auth_code /wx",
                regWxUser: "post wechat/reg_wx_user /wx",
                bindWxUser: "post wechat/bind_wx_user /wx",
                getUserInfoByAuthCode: "post get_user_info /qywx",
                getHomePageRecommendNews: "get home_page/recommend_news ".concat(
                    o.asmServer)
            }, j = {
                getIndustry: "get industry_whitelist/verify_auth ".concat(b),
                getApplicationRecommend: "get application_recommend ".concat(b)
            }, x = {
                getLoginConfig: "GET node/api/getLoginConfig ".concat(""),
                postLogin: "POST iam/api/v1/login ".concat(""),
                postTelCode: "POST iam/api/v1/misc/tel_ticket ".concat(""),
                postRegistered: "POST iam/api/v1/user/add ".concat("")
            }, k = {
                getCloudInfo: "get cloud/queryCloudByDomain  ".concat(o.asmServer)
            }, I = c.a.mapValues(function (e) {
                if (c.a.isString(e)) {
                    var t = e.split(" "), n = Object(a.a)(t, 3), r = n[0], o = n[1],
                        i = n[2];
                    return "" !== i && null != i ? "".concat(r, " ").concat(i,
                        "/").concat(o) : "".concat(r, " ").concat(u, "/").concat(o)
                }
                return e
            })(v), N = c.a.mapValues(function (e) {
                if (c.a.isString(e)) {
                    var t = e.split(" "), n = Object(a.a)(t, 3), r = n[0], o = n[1],
                        s = n[2];
                    return "" !== s && null !== s && void 0 !== s ? "".concat(r,
                        " ").concat(s, "/").concat(o) : "".concat(r, " ").concat(i,
                        "/").concat(o)
                }
                return e
            })(y), _ = c.a.mapValues(function (e) {
                if (c.a.isString(e)) {
                    var t = e.split(" "), n = Object(a.a)(t, 3), r = n[0], o = n[1],
                        i = n[2];
                    return "" !== i && null !== i && void 0 !== i ? "".concat(r,
                        " ").concat(i, "/").concat(o) : "".concat(r, " ").concat(s,
                        "/").concat(o)
                }
                return e
            })({
                getCategoryList: "GET category/:CategoryID",
                getProduct: "POST products",
                getVersions: "GET product_version",
                getPrice: "GET price",
                getAgreement: "GET agreement/:AgreementID",
                getOrderHistory: "GET order/history",
                createOrder: "POST order",
                getPWallCategory: "GET category/:CategoryID",
                getPWallList: "get product/:CategoryID/market",
                getPWallInfo: "POST products",
                postPay: "POST cost/pay",
                getCPList: "POST product_mgmt/cp-products",
                getSPList: "POST product_mgmt/sp-products",
                getProductDetail: "GET product_mgmt/product",
                buyProduct: "POST product_mgmt/buy-product",
                getOrderInfo: "GET v1/billing/order/detail",
                recharge: "POST v1/billing/recharge",
                getTMarketBalance: "GET v1/billing/balance",
                payOrder: "POST v1/billing/pay",
                getImageList: "GET cloud_mgt/v1/resource/public-images",
                getRechargeState: "GET v1/billing/recharge_state",
                poseDsViewGet: "POST ds_view_get",
                poseDsViewAdd: "POST ds_view_add"
            }), A = c.a.mapValues(function (e) {
                if (c.a.isString(e)) {
                    var t = e.split(" "), n = Object(a.a)(t, 2), r = n[0], o = n[1];
                    return "".concat(r, " ").concat(m, "/").concat(o)
                }
                return e
            })(O), D = c.a.mapValues(function (e) {
                if (c.a.isString(e)) {
                    var t = e.split(" "), n = Object(a.a)(t, 2), r = n[0], o = n[1];
                    return "".concat(r, " ").concat(l, "/").concat(o)
                }
                return e
            })({
                putProvider: "put service_provider_audit",
                getProviderDetail: "get service_provider/:AccountId",
                getPreviewDetail: "get service_provider_audit/:id",
                getProvider: "post service_providers",
                checkProvider: "get service_provider_check ",
                applyGuarantee: "post service_provider_guarantee",
                getRecommendProvider: "get service_provider_recommends ",
                getProviderDetailV2: "post provider/DescribePcProvider"
            }), M = c.a.mapValues(function (e) {
                if (c.a.isString(e)) {
                    var t = e.split(" "), n = Object(a.a)(t, 2), r = n[0], o = n[1];
                    return "".concat(r, " ").concat(d, "/").concat(o)
                }
                return e
            })(S), P = c.a.mapValues(function (e) {
                if (c.a.isString(e)) {
                    var t = e.split(" "), n = Object(a.a)(t, 3), r = n[0], o = n[1],
                        i = n[2];
                    return "" !== i && null !== i && void 0 !== i ? "".concat(r,
                        " ").concat(i, "/").concat(o) : "".concat(r, " ").concat(p,
                        "/").concat(o)
                }
                return e
            })(E), R = c.a.mapValues(function (e) {
                if (c.a.isString(e)) {
                    var t = e.split(" "), n = Object(a.a)(t, 3), r = n[0], o = n[1],
                        i = n[2];
                    return "" !== i && null !== i && void 0 !== i ? "".concat(r,
                        " ").concat(i, "/").concat(o) : "".concat(r, " ").concat(g,
                        "/").concat(o)
                }
                return e
            })({
                getFilters: "get enterprise_portal/filters",
                postPortals: "POST enterprise_portal/portals",
                postSearchPortals: "POST enterprise_portal/search_portals",
                getDetails: "get enterprise_portal/details",
                getNewsDetail: "get enterprise_portal/news/details",
                getAuditNewsDetail: "get enterprise_portal/console/news/details",
                getPatents: "get enterprise_portal/patents",
                getCertificates: "get enterprise_portal/certificates",
                getTalents: "get enterprise_portal/talents",
                getNews: "get enterprise_portal/news",
                getNewsAggregation: "get doc_news_aggregation",
                getDiff: "get enterprise_portal/console/audit/diff"
            }), L = c.a.mapValues(function (e) {
                if (c.a.isString(e)) {
                    var t = e.split(" "), n = Object(a.a)(t, 3), r = n[0], i = n[1],
                        s = n[2];
                    return "" !== s && null !== s && void 0 !== s ? "".concat(r,
                        " ").concat(s, "/").concat(i) : "".concat(r, " ").concat(
                        o.asmServer, "/").concat(i)
                }
                return e
            })(w), T = c.a.mapValues(function (e) {
                if (c.a.isString(e)) {
                    var t = e.split(" "), n = Object(a.a)(t, 3), r = n[0], o = n[1],
                        i = n[2];
                    return "" !== i && null !== i && void 0 !== i ? "".concat(r,
                        " ").concat(i, "/").concat(o) : "".concat(r, " ").concat(f,
                        "/").concat(o)
                }
                return e
            })(C), q = c.a.mapValues(function (e) {
                if (c.a.isString(e)) {
                    var t = e.split(" "), n = Object(a.a)(t, 3), r = n[0], o = n[1],
                        i = n[2];
                    return "" !== i && null !== i && void 0 !== i ? "".concat(r,
                        " ").concat(i, "/").concat(o) : "".concat(r, " ").concat(b,
                        "/").concat(o)
                }
                return e
            })(j), B = c.a.mapValues(function (e) {
                if (c.a.isString(e)) {
                    var t = e.split(" "), n = Object(a.a)(t, 3), r = n[0], o = n[1],
                        i = n[2];
                    return "" !== i && null !== i && void 0 !== i ? "".concat(r,
                        " ").concat(i, "/").concat(o) : "".concat(r, " ").concat("",
                        "/").concat(o)
                }
                return e
            })(x), U = c.a.mapValues(function (e) {
                if (c.a.isString(e)) {
                    var t = e.split(" "), n = Object(a.a)(t, 3), r = n[0], i = n[1],
                        s = n[2];
                    return "" !== s && null !== s && void 0 !== s ? "".concat(r,
                        " ").concat(s, "/").concat(i) : "".concat(r, " ").concat(
                        o.asmServer, "/").concat(i)
                }
                return e
            })(k);
        t.a = Object.assign(I, N, _, A, D, M, P, R, T, q, B, L, U)
    }, 901: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return d
        }), n.d(t, "a", function () {
            return m
        });
        var a = n(4), r = n.n(a), c = n(42), o = n(22), i = n(93), s = n(43),
            u = n(23), l = n(15), d = function () {
                var e = Object(o.a)(r.a.mark(function e(t) {
                    var n, a, o, s, u;
                    return r.a.wrap(function (e) {
                        for (; ;) {
                            switch (e.prev = e.next) {
                                case 0:
                                    return n = t.cmd, a = t.Service, o = t.Module, s = t.data, e.next = 3, Object(
                                        i.request)({
                                        regionId: 1,
                                        serviceType: "imfg",
                                        cmd: n,
                                        data: Object(c.a)({
                                            Service: a,
                                            Module: o,
                                            Version: "2019-12-26"
                                        }, Object(l.e)(s))
                                    });
                                case 3:
                                    return u = e.sent, e.abrupt("return", p(u));
                                case 5:
                                case"end":
                                    return e.stop()
                            }
                        }
                    }, e)
                }));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), m = function () {
                var e = Object(o.a)(r.a.mark(function e(t) {
                    var n, a, o, s, u;
                    return r.a.wrap(function (e) {
                        for (; ;) {
                            switch (e.prev = e.next) {
                                case 0:
                                    return n = t.cmd, a = t.Service, o = t.Module, s = t.data, e.next = 3, Object(
                                        i.request)({
                                        regionId: 1,
                                        serviceType: "imfg",
                                        cmd: n,
                                        data: Object(c.a)({
                                            Service: a,
                                            Module: o,
                                            Version: "2020-05-25"
                                        }, Object(l.e)(s))
                                    });
                                case 3:
                                    return u = e.sent, e.abrupt("return", p(u));
                                case 5:
                                case"end":
                                    return e.stop()
                            }
                        }
                    }, e)
                }));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }(), p = function (e) {
                if (40026 !== e.code) {
                    return e;
                }
                u.a.error(e.errObj.message), Object(s.logout)().then(function () {
                    window.location.reload()
                })
            }
    }, 902: function (e, t, n) {
        "use strict";
        n.d(t, "d", function () {
            return a
        }), n.d(t, "a", function () {
            return r
        }), n.d(t, "b", function () {
            return c
        }), n.d(t, "c", function () {
            return o
        });
        var a = {
            getProductCategories: {
                cmd: "DescribeProductCategories",
                Service: "product-mgmt-app",
                Module: "category"
            },
            getProductList: {
                cmd: "DescribeProducts",
                Service: "product-mgmt-app",
                Module: "product"
            },
            getProductDetail: {
                cmd: "DescribeProduct",
                Service: "product-mgmt-app",
                Module: "product"
            },
            getProductProtocols: {
                cmd: "DescribeProductProtocols",
                Service: "product-mgmt-app",
                Module: "product"
            },
            getDescribeProtocols: {
                cmd: "DescribeProtocol",
                Service: "product-mgmt-app",
                Module: "product"
            },
            getProductPriceInfo: {
                cmd: "DescribeProductPriceInfo",
                Service: "product-mgmt-app",
                Module: "product"
            },
            getServiceDetails: {
                cmd: "DescribeIsv",
                Service: "product-mgmt-app",
                Module: "isv"
            },
            ChkUserLocalIsv: {
                cmd: "ChkUserLocalIsv",
                Service: "product-mgmt-app",
                Module: "isv"
            },
            DescribeRecommendConfigs: {
                cmd: "DescribeRecommendConfigs",
                Service: "product-mgmt-app",
                Module: "product"
            },
            DescribeFrontProducts: {
                cmd: "DescribeFrontProducts",
                Service: "product-mgmt-app",
                Module: "product"
            },
            getDescribeTopTags: {
                cmd: "DescribeTopTags",
                Service: "product-mgmt-app",
                Module: "product"
            }
        }, r = {
            getPermission: {
                cmd: "DescribeAccountPermissions",
                Service: "access-manager-app",
                Module: "access-manager"
            }
        }, c = {
            createOrder: {
                cmd: "CreateOrder",
                Service: "billing-app",
                Module: "billing"
            },
            getOrderDetail: {
                cmd: "DescribeOrder",
                Service: "billing-app",
                Module: "billing"
            },
            buyProduct: {
                cmd: "ConfirmPayment",
                Service: "billing-app",
                Module: "billing"
            },
            getOrderStatus: {
                cmd: "DescribeOrderStatus",
                Service: "billing-app",
                Module: "billing"
            },
            getOrderMsgCoupons: {
                cmd: "DescribeMsgCoupons",
                Service: "billing-app",
                Module: "billing"
            },
            getOrderCoupons: {
                cmd: "DescribeCouponDeduction",
                Service: "billing-app",
                Module: "billing"
            },
            getUserCoupons: {
                cmd: "DescribeCoupon",
                Service: "billing-app",
                Module: "billing"
            },
            createSubsidyApplication: {
                cmd: "CreateSubsidyApplication",
                Service: "billing-app",
                Module: "billing"
            },
            describeSubsidyApplyList: {
                cmd: "DescribeSubsidyApplyList",
                Service: "billing-app",
                Module: "billing"
            }
        }, o = {
            getProductList: {
                cmd: "DescribeAIProducts",
                Service: "ai-market-app",
                Module: "product"
            },
            getProductDetail: {
                cmd: "DescribeAIProduct",
                Service: "ai-market-app",
                Module: "product"
            },
            getProductPriceInfo: {
                cmd: "DescribeAIProductPriceInfo",
                Service: "ai-market-app",
                Module: "product"
            },
            getDescribeTopTags: {
                cmd: "DescribeTopAITags",
                Service: "ai-market-app",
                Module: "tag"
            },
            getCreateProductApply: {
                cmd: "CreateProductApply",
                Service: "ai-market-app",
                Module: "product"
            },
            getServiceDescribeAIIsv: {
                cmd: "DescribeAIIsv",
                Service: "ai-market-app",
                Module: "isv"
            }
        }
    }, 903: function (e, t, n) {
        "use strict";
        var a = n(25), r = n(26), c = n(27), o = n(30), i = n(31), s = n(0),
            u = n.n(s), l = n(113), d = n(908), m = (n(1187), function (e) {
                function t(e) {
                    var n;
                    return Object(a.a)(this, t), (n = Object(c.a)(this,
                        Object(o.a)(t).call(this, e))).state = {}, n
                }

                return Object(i.a)(t, e), Object(r.a)(t, [{
                    key: "render", value: function () {
                        var e = this.props, t = e.visiable, n = e.loading,
                            a = e.title, r = e.okText, c = e.cancelText,
                            o = e.children, i = e.onOk, s = e.onCancel,
                            m = e.hasCancel, p = e.hasFooter;
                        return u.a.createElement(d.a, {
                            className: "dialogLikeBereStyles",
                            show: t,
                            title: a,
                            handlerVisiableChange: s,
                            footer: p ? u.a.createElement("div", null,
                                u.a.createElement(l.a, {
                                    style: {
                                        marginRight: "10px",
                                        padding: "0 24px"
                                    }, loading: n, onClick: i
                                }, r), m && u.a.createElement(l.a, {
                                style: {
                                    backgroundColor: "#fff",
                                    color: "#1f51c8",
                                    border: "1px solid #1f51c8",
                                    padding: "0 24px"
                                }, loading: n, onClick: s
                            }, c)) : null,
                            children: o
                        })
                    }
                }]), t
            }(s.Component));
        m.defaultProps = {
            visiable: !1,
            loading: !1,
            title: "",
            okText: "\u786e\u5b9a",
            cancelText: "\u53d6\u6d88",
            childre: "",
            onOk: function () {
            },
            onCancel: function () {
            },
            hasCancel: !0,
            hasFooter: !0
        }, t.a = function (e) {
            return e.visiable ? u.a.createElement(m, e) : null
        }
    }, 908: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return f
        });
        var a = n(32), r = n(25), c = n(26), o = n(27), i = n(30), s = n(31),
            u = n(0), l = n.n(u), d = n(3), m = n.n(d), p = n(39),
            g = "".concat(p.a.prefixClassName, "-").concat(
                p.a.componentsName.dialog), f = function (e) {
                function t(e) {
                    var n;
                    return Object(r.a)(this, t), (n = Object(o.a)(this,
                        Object(i.a)(t).call(this,
                            e))).__handleDialogVisibility = function (e) {
                        n.props.handlerVisiableChange(e)
                    }, n.state = {isShow: e.show, isMask: e.mask}, n
                }

                return Object(s.a)(t, e), Object(c.a)(t, [{
                    key: "render", value: function () {
                        var e = this, t = this.props, n = t.className,
                            r = t.children, c = t.title, o = t.footer, i = t.show,
                            s = t.bottomHeight, u = void 0 === s ? "40px" : s,
                            d = this.state.isMask;
                        return l.a.createElement(l.a.Fragment, null,
                            l.a.createElement("div", {
                                className: m()("".concat(g, "__wrap"), n,
                                    Object(a.a)({}, "".concat(g, "__wrap--mask"),
                                        d),
                                    Object(a.a)({}, "".concat(g, "--show"), i))
                            }, l.a.createElement("div",
                                {className: m()("".concat(g))},
                                l.a.createElement("div",
                                    {className: "".concat(g, "__hd")},
                                    l.a.createElement("div",
                                        {className: "".concat(g, "__hd-title")}, c),
                                    l.a.createElement("div", {
                                        className: "".concat(g, "__close"),
                                        onClick: function () {
                                            return e.__handleDialogVisibility(!1)
                                        }
                                    })), l.a.createElement("div",
                                    {className: "".concat(g, "__bd")}, r),
                                o && l.a.createElement("div", {
                                    className: "".concat(g, "__ft"),
                                    style: {textAlign: "center", marginTop: u}
                                }, o))))
                    }
                }]), t
            }(u.Component);
        f.defaultProps = {
            mask: !0,
            show: !1,
            handlerVisiableChange: function () {
            }
        }
    }, 909: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return a
        }), n.d(t, "c", function () {
            return r
        }), n.d(t, "a", function () {
            return c
        });
        var a = "".concat("yyyy-M-d", " hh:mm:ss"), r = "yyyy-MM-dd hh:mm:ss",
            c = "yyyy-MM-dd"
    }, 917: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return h
        });
        var a = n(32), r = n(64), c = n(25), o = n(26), i = n(27), s = n(30),
            u = n(31), l = n(0), d = n.n(l), m = n(3), p = n.n(m), g = n(39),
            f = "".concat(g.a.prefixClassName, "-").concat(
                g.a.componentsName.tip), h = function (e) {
                function t() {
                    var e, n, a;
                    Object(c.a)(this, t);
                    for (var r = arguments.length, o = new Array(r), u = 0; u < r;
                        u++) {
                        o[u] = arguments[u];
                    }
                    return Object(i.a)(a, (n = a = Object(i.a)(this,
                        (e = Object(s.a)(t)).call.apply(e,
                            [this].concat(o))), a._handleClose = function () {
                        var e = a.props.onClose;
                        e && e()
                    }, a.getIcon = function (e) {
                        var t = null;
                        return "success" === e || "done" === e
                            ? t = d.a.createElement("svg",
                                {className: "tea-icon", width: "32", height: "32"},
                                d.a.createElement("g", {fill: "#0ABF5B"},
                                    d.a.createElement("path",
                                        {d: "M13.25 17.811l-3.364-3.364-2.121 2.121 3.364 3.364 2.121 2.121 2.121-2.121 7.864-7.864-2.121-2.121z"}),
                                    d.a.createElement("path",
                                        {d: "M15.5 0C6.94 0 0 6.94 0 15.5S6.94 31 15.5 31 31 24.06 31 15.5 24.06 0 15.5 0zm0 28C8.607 28 3 22.393 3 15.5S8.607 3 15.5 3 28 8.607 28 15.5 22.393 28 15.5 28z"})))
                            : "warning" === e ? t = d.a.createElement("svg",
                                {className: "tea-icon", width: "32", height: "32"},
                                d.a.createElement("g",
                                    {fill: "none", fillRule: "evenodd"},
                                    d.a.createElement("path", {d: "M0 0h32v32H0z"}),
                                    d.a.createElement("path", {
                                        d: "M14 23v-3h3v3h-3zm0-5V8h3v10h-3zm1.5 10C22.393 28 28 22.393 28 15.5S22.393 3 15.5 3 3 8.607 3 15.5 8.607 28 15.5 28zm0-28C24.061 0 31 6.939 31 15.5S24.061 31 15.5 31 0 24.061 0 15.5 6.939 0 15.5 0z",
                                        fill: "#FF9D00"
                                    }))) : "error" === e ? t = d.a.createElement(
                                "svg",
                                {className: "tea-icon", width: "32", height: "32"},
                                d.a.createElement("g", {fill: "#E54545"},
                                    d.a.createElement("path",
                                        {d: "M14 20h3v3h-3zm0-12h3v10h-3z"}),
                                    d.a.createElement("path",
                                        {d: "M15.5 0C6.94 0 0 6.94 0 15.5S6.94 31 15.5 31 31 24.06 31 15.5 24.06 0 15.5 0zm0 28C8.607 28 3 22.393 3 15.5S8.607 3 15.5 3 28 8.607 28 15.5 22.393 28 15.5 28z"})))
                                : "info" === e && (t = d.a.createElement("svg",
                                {className: "tea-icon", width: "32", height: "32"},
                                d.a.createElement("g", {fill: "#006EFF"},
                                    d.a.createElement("rect",
                                        {x: "14", y: "8", width: "3", height: "3"}),
                                    d.a.createElement("rect", {
                                        x: "14",
                                        y: "13",
                                        width: "3",
                                        height: "10"
                                    }), d.a.createElement("path",
                                        {d: "M31,15.5C31,6.94,24.06,0,15.5,0S0,6.94,0,15.5S6.94,31,15.5,31S31,24.06,31,15.5z M28,15.5 C28,22.393,22.393,28,15.5,28S3,22.393,3,15.5S8.607,3,15.5,3S28,8.607,28,15.5z"})))), t
                    }, n))
                }

                return Object(u.a)(t, e), Object(o.a)(t, [{
                    key: "render", value: function () {
                        var e = this, t = this.props, n = t.children,
                            c = t.className, o = t.type, i = t.visibility,
                            s = t.onClose, u = t.fixed, l = Object(r.a)(t,
                            ["children", "className", "type", "visibility",
                                "onClose", "fixed"]);
                        return i && d.a.createElement("div", Object.assign({
                            className: p()(f, c,
                                Object(a.a)({}, "".concat(f, "--").concat(o), o),
                                Object(a.a)({}, "".concat(f, "--fixed"), u))
                        }, l), this.getIcon(o), n, s && d.a.createElement("span", {
                            style: {
                                position: "relative",
                                width: "12px",
                                height: "12px",
                                marginLeft: "6px",
                                display: "inline-block"
                            }
                        }, d.a.createElement("i", {
                            className: "".concat(f, "__close"),
                            onClick: function (t) {
                                return e._handleClose()
                            }
                        })))
                    }
                }]), t
            }(d.a.Component);
        h.defaultProps = {visibility: !0, fixed: !1}
    }, 918: function (e, t, n) {
        e.exports = n.p + "static/media/login-register-bg.2c78b9c4.png"
    }, 920: function (e, t, n) {
        "use strict";
        var a = n(35), r = Object(a.createBrowserHistory)({basename: "/"});
        t.a = r
    }, 953: function (e, t, n) {
        "use strict";
        var a = n(0), r = n.n(a), c = n(3), o = n.n(c);
        n(1189);
        t.a = function (e) {
            var t, n, a = e.className, c = e.children, i = e.control,
                s = (e.triangleOffset, e.tootipOffset), u = e.show,
                l = e.onDisabled, d = e.theme, m = e.position,
                p = (void 0 === m ? "" : m).split(" "), g = p[0], f = p[1];
            return r.a.createElement("div", {
                    className: o()("prefixClassName-Tootip", a,
                        (t = {}, t["prefixClassName-Tootip--" + d] = "default"
                            !== d, t)), onClick: function (t) {
                        return function (t) {
                            t.nativeEvent.stopImmediatePropagation();
                            var n = e.onClick;
                            n && n()
                        }(t)
                    }, onMouseOver: function (t) {
                        return function () {
                            var t = e.onMouseOver;
                            t && t()
                        }()
                    }, onMouseOut: function (t) {
                        return function () {
                            var t = e.onMouseOut;
                            t && t()
                        }()
                    }, onMouseLeave: function (t) {
                        return function () {
                            var t = e.onMouseLeave;
                            t && t()
                        }()
                    }
                }, l && r.a.createElement("div", {className: "covertip"}), c,
                u && r.a.createElement("div", {
                    className: o()("prefixClassName-Tootip__inner",
                        (n = {}, n[g] = !!g, n[f] = !!f, n)),
                    style: {left: s + "%"},
                    onClick: function (e) {
                        return e.stopPropagation()
                    }
                }, i))
        }
    }, 97: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return h
        });
        var a = n(32), r = n(8), c = n(25), o = n(26), i = n(27), s = n(30),
            u = n(31), l = n(0), d = n.n(l), m = n(3), p = n.n(m), g = n(39),
            f = "".concat(g.a.prefixClassName, "-").concat(
                g.a.componentsName.bubble), h = function (e) {
                function t(e) {
                    var n;
                    return Object(c.a)(this, t), (n = Object(i.a)(this,
                        Object(s.a)(t).call(this, e)))._handleEvent = function (e) {
                        e.nativeEvent.stopImmediatePropagation();
                        var t = n.props.onClick;
                        t && t()
                    }, n._handleMouseOver = function () {
                        var e = n.props.onMouseOver;
                        e && e()
                    }, n._handleMouseOut = function () {
                        var e = n.props.onMouseOut;
                        e && e()
                    }, n._handleMouseLeave = function () {
                        var e = n.props.onMouseLeave;
                        e && e()
                    }, n
                }

                return Object(u.a)(t, e), Object(o.a)(t, [{
                    key: "render", value: function () {
                        var e, t, n = this, c = this.props, o = c.className,
                            i = c.children, s = c.control, u = c.triangleOffset,
                            l = c.bubbleOffset, m = c.show, g = c.onDisabled,
                            h = c.theme, b = c.position.split(" "),
                            v = Object(r.a)(b, 2), y = v[0], w = v[1];
                        return d.a.createElement("div", {
                                className: p()(f, o,
                                    Object(a.a)({}, "".concat(f, "--").concat(h),
                                        "default" !== h)), onClick: function (e) {
                                    return n._handleEvent(e)
                                }, onMouseOver: function (e) {
                                    return n._handleMouseOver()
                                }, onMouseOut: function (e) {
                                    return n._handleMouseOut()
                                }, onMouseLeave: function (e) {
                                    return n._handleMouseLeave()
                                }
                            }, g && d.a.createElement("div", {className: "covertip"}),
                            i, m && d.a.createElement(d.a.Fragment, null,
                            d.a.createElement("i", {
                                className: p()("".concat(f, "__triangle"),
                                    (e = {}, Object(a.a)(e, y, !!y), Object(a.a)(e,
                                        w, !!w), e)),
                                style: {left: "".concat(u, "%")}
                            }), d.a.createElement("div", {
                                className: p()("".concat(f, "__inner"),
                                    (t = {}, Object(a.a)(t, y, !!y), Object(a.a)(t,
                                        w, !!w), t)),
                                style: {left: "".concat(l, "%")},
                                onClick: function (e) {
                                    return e.stopPropagation()
                                }
                            }, s)))
                    }
                }]), t
            }(d.a.Component);
        h.defaultProps = {theme: "default", position: "bottom"}
    }, 970: function (e, t, n) {
        e.exports = n.p + "static/media/HOT-1.64026975.svg"
    }, 971: function (e, t, n) {
        e.exports = n.p + "static/media/HOT-2.7421e40c.svg"
    }, 972: function (e, t, n) {
        e.exports = n.p + "static/media/NEW-1.6dc30eb4.svg"
    }, 973: function (e, t, n) {
        e.exports = n.p + "static/media/NEW-2.3556b068.svg"
    }, 986: function (e, t, n) {
        e.exports = n(141)
    }, 99: function (e, t, n) {
        "use strict";
        var a = n(4), r = n.n(a), c = n(22), o = n(0), i = n.n(o), s = n(127),
            u = n(900), l = n(34);
        n(1169);

        function d(e, t, n) {
            return e.active && t ? "validating" : e.touched ? !0 === n
                ? "success" : e.error ? "error" : "success" : null
        }

        function m(e, t, n) {
            return "error" === d(e, t, n) && e.error
        }

        t.a = function (e) {
            var t = void 0 !== e.hideLabel && e.hideLabel, n = !1,
                a = function () {
                    var t = Object(c.a)(r.a.mark(function t(a) {
                        return r.a.wrap(function (t) {
                            for (; ;) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (!0 === n) {
                                            t.next = 5;
                                            break
                                        }
                                        return n = !0, t.next = 4, e.onSubmit(
                                            a);
                                    case 4:
                                        n = !1;
                                    case 5:
                                    case"end":
                                        return t.stop()
                                }
                            }
                        }, t)
                    }));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }();
            return i.a.createElement(s.b, Object.assign({}, e, {onSubmit: a}),
                function (n) {
                    var a = n.handleSubmit, o = n.validating, p = n.submitting,
                        g = n.values;
                    return i.a.createElement("form",
                        {onSubmit: a, className: e.className},
                        i.a.createElement(u.a, {hideLabel: t},
                            e.fields.map(function (e) {
                                return !e.isDisplay || e.isDisplay(g)
                                    ? i.a.createElement(s.a, {
                                        key: e.name,
                                        name: e.name,
                                        validateOnBlur: !0,
                                        validateFields: [],
                                        validate: function () {
                                            var t = Object(c.a)(
                                                r.a.mark(function t(n) {
                                                    var a;
                                                    return r.a.wrap(
                                                        function (t) {
                                                            for (; ;) {
                                                                switch (t.prev = t.next) {
                                                                    case 0:
                                                                        if (!0
                                                                            !== e.childRefValidate) {
                                                                            t.next = 4;
                                                                            break
                                                                        }
                                                                        a = e.childRef.current.validate(
                                                                            n), t.next = 11;
                                                                        break;
                                                                    case 4:
                                                                        if ("function"
                                                                            !== typeof e.isAsyncValidate) {
                                                                            t.next = 10;
                                                                            break
                                                                        }
                                                                        return t.next = 7, e.isAsyncValidate(
                                                                            n);
                                                                    case 7:
                                                                        a = t.sent, t.next = 11;
                                                                        break;
                                                                    case 10:
                                                                        a = Object(
                                                                            l.b)(
                                                                            e.rules,
                                                                            n,
                                                                            g);
                                                                    case 11:
                                                                        return t.abrupt(
                                                                            "return",
                                                                            a);
                                                                    case 12:
                                                                    case"end":
                                                                        return t.stop()
                                                                }
                                                            }
                                                        }, t)
                                                }));
                                            return function (e) {
                                                return t.apply(this, arguments)
                                            }
                                        }()
                                    }, function (t) {
                                        var n = t.input, a = t.meta;
                                        return i.a.createElement(u.a.Item, {
                                            required: "function"
                                            === typeof e.required ? e.required()
                                                : !1 !== e.required,
                                            showStatusIcon: !1,
                                            label: e.label,
                                            align: e.align || "middle",
                                            status: d(a, o, e.noDefaultError),
                                            message: m(a, o, e.noDefaultError)
                                        }, e.getComponent(n, g, a))
                                    }) : null
                            })),
                        i.a.createElement(u.a.Action, null, e.children(p, o)))
                })
        }
    }
}, [[986, 57, 54]]]);
//# sourceMappingURL=main.7c721600.chunk.js.map
