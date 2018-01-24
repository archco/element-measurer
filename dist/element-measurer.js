(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ElementMeasurer"] = factory();
	else
		root["ElementMeasurer"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var ElementMeasurer = /** @class */ (function () {
    function ElementMeasurer(target) {
        if (target === void 0) { target = document.documentElement; }
        this.setTarget(target);
    }
    Object.defineProperty(ElementMeasurer.prototype, "isDocument", {
        get: function () {
            return this.target === document.documentElement
                || this.target === document.body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "isDocumentTarget", {
        /** @deprecated use isDocument instead. */
        get: function () {
            return this.isDocument;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "clientWidth", {
        get: function () {
            return this.isDocument
                ? window.innerWidth
                : this.target.getBoundingClientRect().width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "clientHeight", {
        get: function () {
            return this.isDocument
                ? window.innerHeight
                : this.target.getBoundingClientRect().height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "scrollTop", {
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
        get: function () {
            return this.target.scrollWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "scrollHeight", {
        get: function () {
            return this.target.scrollHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "maxScrollTop", {
        get: function () {
            return this.scrollHeight - this.clientHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementMeasurer.prototype, "maxScrollLeft", {
        get: function () {
            return this.scrollWidth - this.clientWidth;
        },
        enumerable: true,
        configurable: true
    });
    ElementMeasurer.prototype.setTarget = function (val) {
        if (val instanceof HTMLElement) {
            this.target = val;
        }
        else if (val instanceof Element) {
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
/******/ ]);
});
//# sourceMappingURL=element-measurer.js.map