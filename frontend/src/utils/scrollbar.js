/* eslint-disable */
"use strict";

import PerfectScrollbar from "perfect-scrollbar";

export var KTUtil = function () {
    return {
        scrollInit: function (element, options) {
            if (!element) {
                return;
            }

            var pluginDefOptions = {
                wheelSpeed: 0.5,
                swipeEasing: true,
                wheelPropagation: false,
                minScrollbarLength: 40,
                maxScrollbarLength: 300,
                suppressScrollX: true,
            };

            // Define init function
            function init() {
                var ps;
                var height;

                // Get extra options via data attributes
                var attrs = element.getAttributeNames();
                if (attrs.length > 0) {
                    attrs.forEach(function (attrName) {
                        // more options; https://github.com/ganlanyuan/tiny-slider#options
                        if (/^data-.*/g.test(attrName)) {
                            if (["scroll", "height", "mobile-height"].includes(optionName) == false) {
                                var optionName = attrName
                                    .replace("data-", "")
                                    .toLowerCase()
                                    .replace(/(?:[\s-])\w/g, function (match) {
                                        return match.replace("-", "").toUpperCase();
                                    });

                                options[optionName] = KTUtil.filterBoolean(element.getAttribute(attrName));
                            }
                        }
                    });
                }

                if (options.height instanceof Function) {
                    height = options.height.call();
                } else {
                    if (KTUtil.isMobileDevice() === true && options.mobileHeight) {
                        height = parseInt(options.mobileHeight);
                    } else {
                        height = parseInt(options.height);
                    }
                }

                if (height === false) {
                    KTUtil.scrollDestroy(element, true);

                    return;
                }

                height = parseInt(height);

                // Destroy scroll on table and mobile modes
                if ((options.mobileNativeScroll || options.disableForMobile) && KTUtil.isMobileDevice() === true) {
                    ps = KTUtil.data(element).get("ps");
                    if (ps) {
                        if (options.resetHeightOnDestroy) {
                            KTUtil.css(element, "height", "auto");
                        } else {
                            KTUtil.css(element, "overflow", "auto");
                            if (height > 0) {
                                KTUtil.css(element, "height", height + "px");
                            }
                        }

                        ps.destroy();
                        ps = KTUtil.data(element).remove("ps");
                    } else if (height > 0) {
                        KTUtil.css(element, "overflow", "auto");
                        KTUtil.css(element, "height", height + "px");
                    }

                    return;
                }

                if (height > 0) {
                    KTUtil.css(element, "height", height + "px");
                }

                if (options.desktopNativeScroll) {
                    KTUtil.css(element, "overflow", "auto");
                    return;
                }

                // Pass options via HTML Attributes
                if (KTUtil.attr(element, "data-window-scroll") == "true") {
                    options.windowScroll = true;
                }

                // Init scroll
                ps = KTUtil.data(element).get("ps");

                if (ps) {
                    ps.update();
                } else {
                    KTUtil.css(element, "overflow", "hidden");
                    KTUtil.addClass(element, "scroll");

                    ps = new PerfectScrollbar(element, options);

                    KTUtil.data(element).set("ps", ps);
                }

                // Remember scroll position in cookie
                var uid = KTUtil.attr(element, "id");
                try {
                    if (uid) {
                        var cookie = KTCookie.getCookie(uid);
                        if (options.rememberPosition === true && cookie) {
                            var pos = parseInt(cookie);
                            if (pos > 0) {
                                element.scrollTop = pos;
                            }
                            element.addEventListener("ps-scroll-y", function () {
                                KTCookie.setCookie(uid, element.scrollTop, {});
                            });
                        }
                    }
                } catch (e) {
                    console.error(e);
                }
            }

            // Init
            init();

            // Handle window resize
            if (options.handleWindowResize) {
                KTUtil.addResizeHandler(function () {
                    init();
                });
            }
        },
        scrollUpdate: function (element) {
            var ps = KTUtil.data(element).get("ps");
            if (ps) {
                ps.update();
            }
        },

        scrollUpdateAll: function (parent) {
            var scrollers = KTUtil.findAll(parent, ".ps");
            for (var i = 0, len = scrollers.length; i < len; i++) {
                KTUtil.scrollUpdate(scrollers[i]);
            }
        },

        scrollDestroy: function (element, resetAll) {
            var ps = KTUtil.data(element).get("ps");

            if (ps) {
                ps.destroy();
                ps = KTUtil.data(element).remove("ps");
            }

            if (element && resetAll) {
                element.style.setProperty("overflow", "");
                element.style.setProperty("height", "");
            }
        },

        filterBoolean: function (val) {
            // Convert string boolean
            if (val === true || val === "true") {
                return true;
            }

            if (val === false || val === "false") {
                return false;
            }

            return val;
        },
        isMobileDevice: function () {
            var test = this.getViewPort().width < this.getBreakpoint("lg") ? true : false;

            if (test === false) {
                // For use within normal web clients
                test = navigator.userAgent.match(/iPad/i) != null;
            }

            return test;
        },
    };
};
