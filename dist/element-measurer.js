(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ElementMeasurer"] = factory();
	else
		root["ElementMeasurer"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/element-measurer.ts ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementMeasurer": () => (/* binding */ ElementMeasurer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The library class that can measures size of element.
 *
 * @export
 * @class ElementMeasurer
 */
var ElementMeasurer = /** @class */ (function () {
    /**
     * Creates an instance of ElementMeasurer.
     * @param {AllowedTarget} [target=document.documentElement]
     * @memberof ElementMeasurer
     */
    function ElementMeasurer(target) {
        if (target === void 0) { target = document.documentElement; }
        this.setTarget(target);
    }
    Object.defineProperty(ElementMeasurer.prototype, "isDocument", {
        /**
         * Returns whether target is document or html element.
         *
         * @readonly
         * @type {boolean}
         * @memberof ElementMeasurer
         */
        get: function () {
            return this.target === document.documentElement
                || this.target === document.body;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "clientWidth", {
        /**
         * Returns inner width of an element in pixels.
         *
         * @readonly
         * @type {number}
         * @memberof ElementMeasurer
         */
        get: function () {
            return this.isDocument
                ? window.innerWidth
                : this.getRect().width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "clientHeight", {
        /**
         * Returns inner height of an element in pixels.
         *
         * @readonly
         * @type {number}
         * @memberof ElementMeasurer
         */
        get: function () {
            return this.isDocument
                ? window.innerHeight
                : this.getRect().height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "scrollTop", {
        /**
         * Gets or sets the number of pixels that an element's content is scrolled vertically.
         *
         * @type {number}
         * @memberof ElementMeasurer
         */
        get: function () {
            return this.isDocument ? window.pageYOffset : this.target.scrollTop;
        },
        set: function (val) {
            if (this.isDocument) {
                window.scrollTo(this.scrollLeft, val);
            }
            else {
                this.target.scrollTop = val;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "scrollLeft", {
        /**
         * Gets or sets the number of pixels that an element's content is scrolled to the left.
         *
         * @type {number}
         * @memberof ElementMeasurer
         */
        get: function () {
            return this.isDocument ? window.pageXOffset : this.target.scrollLeft;
        },
        set: function (val) {
            if (this.isDocument) {
                window.scrollTo(val, this.scrollTop);
            }
            else {
                this.target.scrollLeft = val;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "scrollWidth", {
        /**
         * Returns the width of the entire content of an element.
         *
         * @readonly
         * @type {number}
         * @memberof ElementMeasurer
         */
        get: function () {
            return this.target.scrollWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "scrollHeight", {
        /**
         * Returns the height of the entire content of an element.
         *
         * @readonly
         * @type {number}
         * @memberof ElementMeasurer
         */
        get: function () {
            return this.target.scrollHeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "maxScrollTop", {
        /**
         * Returns maximum top scroll offset possible for the element.
         *
         * @readonly
         * @type {number}
         * @memberof ElementMeasurer
         */
        get: function () {
            return this.scrollHeight - this.clientHeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "maxScrollLeft", {
        /**
         * Returns maximum left scroll offset possible for the element.
         *
         * @readonly
         * @type {number}
         * @memberof ElementMeasurer
         */
        get: function () {
            return this.scrollWidth - this.clientWidth;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set target element.
     *
     * @param {AllowedTarget} val target element.
     * @returns {this}
     * @memberof ElementMeasurer
     */
    ElementMeasurer.prototype.setTarget = function (val) {
        if (val instanceof HTMLElement || val instanceof Element) {
            this.target = val;
        }
        else if (val === window || val === document) {
            this.target = document.documentElement;
        }
        else if (typeof val === 'string') {
            this.target = document.querySelector(val);
        }
        else {
            throw new TypeError('Target value is not correct type.');
        }
        return this;
    };
    /**
     * Returns top and left values that indicates offset distance to html document.
     * @see https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element#answer-442474
     * @returns {Offsets} {top, left}
     * @memberof ElementMeasurer
     */
    ElementMeasurer.prototype.getOffset = function () {
        var elm = this.target;
        var top = 0;
        var left = 0;
        while (elm && !isNaN(elm.offsetLeft) && !isNaN(elm.offsetTop)) {
            left += elm.offsetLeft - elm.scrollLeft;
            top += elm.offsetTop - elm.scrollTop;
            elm = elm.offsetParent;
        }
        return { top: top, left: left };
    };
    /**
     * Returns DOMRect object of the target element.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
     * @returns {DOMRect}
     * @memberof ElementMeasurer
     */
    ElementMeasurer.prototype.getRect = function () {
        return this.target.getBoundingClientRect();
    };
    return ElementMeasurer;
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ElementMeasurer);

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=element-measurer.js.map