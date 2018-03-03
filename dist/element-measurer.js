(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ElementMeasurer"] = factory();
	else
		root["ElementMeasurer"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/element-measurer.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/element-measurer.ts":
/*!*********************************!*\
  !*** ./src/element-measurer.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Element measurer.
 *
 * @export
 * @class ElementMeasurer
 */
var ElementMeasurer = /** @class */ (function () {
    /**
     * constructor
     * @param target
     */
    function ElementMeasurer(target) {
        if (target === void 0) { target = document.documentElement; }
        this.setTarget(target);
    }
    Object.defineProperty(ElementMeasurer.prototype, "isDocument", {
        /**
         * Returns whether target is document or html element.
         * @return
         */
        get: function () {
            return this.target === document.documentElement
                || this.target === document.body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "isDocumentTarget", {
        /**
         * Returns whether target is document or html element.
         * @deprecated use isDocument instead.
         * @return
         */
        get: function () {
            return this.isDocument;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "clientWidth", {
        /**
         * Returns inner width of an element in pixels.
         * @return
         */
        get: function () {
            return this.isDocument
                ? window.innerWidth
                : this.target.getBoundingClientRect().width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "clientHeight", {
        /**
         * Returns inner height of an element in pixels.
         * @return
         */
        get: function () {
            return this.isDocument
                ? window.innerHeight
                : this.target.getBoundingClientRect().height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "scrollTop", {
        /**
         * Gets or sets the number of pixels that an element's content is scrolled vertically.
         * @return
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "scrollLeft", {
        /**
         * Gets or sets the number of pixels that an element's content is scrolled to the left.
         * @return
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "scrollWidth", {
        /**
         * Returns the width of the entire content of an element.
         * @return
         */
        get: function () {
            return this.target.scrollWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "scrollHeight", {
        /**
         * Returns the height of the entire content of an element.
         * @return
         */
        get: function () {
            return this.target.scrollHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "maxScrollTop", {
        /**
         * Returns maximum top scroll offset possible for the element.
         * @return
         */
        get: function () {
            return this.scrollHeight - this.clientHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "maxScrollLeft", {
        /**
         * Returns maximum left scroll offset possible for the element.
         * @return
         */
        get: function () {
            return this.scrollWidth - this.clientWidth;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set target element.
     * @param  val
     * @return
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
    return ElementMeasurer;
}());
/* harmony default export */ __webpack_exports__["default"] = (ElementMeasurer);


/***/ })

/******/ });
});
//# sourceMappingURL=element-measurer.js.map