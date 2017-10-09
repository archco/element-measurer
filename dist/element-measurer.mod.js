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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ElementMeasurer = function () {
  function ElementMeasurer(target) {
    _classCallCheck(this, ElementMeasurer);

    this._isDocument = false;
    this.setTarget(target);
  }

  // public

  _createClass(ElementMeasurer, [{
    key: 'setTarget',
    value: function setTarget(val) {
      if (val instanceof Element) {
        this.target = val;
      } else if (val === window || val === document) {
        this.target = document.documentElement;
      } else if (typeof val === 'string') {
        this.target = document.querySelector(val);
      } else {
        throw new TypeError('Target value is not correct type.');
      }

      this._checkTarget();
    }

    // private

  }, {
    key: '_checkTarget',
    value: function _checkTarget() {
      if (this.target === document.documentElement || this.target === document.body) {
        this._isDocument = true;
      }
    }
  }, {
    key: 'innerWidth',
    get: function get() {
      return this._isDocument ? window.innerWidth : this.target.getBoundingClientRect().width;
    }
  }, {
    key: 'innerHeight',
    get: function get() {
      return this._isDocument ? window.innerHeight : this.target.getBoundingClientRect().height;
    }
  }, {
    key: 'scrollTop',
    get: function get() {
      return this._isDocument ? window.pageYOffset : this.target.scrollTop;
    }
  }, {
    key: 'scrollLeft',
    get: function get() {
      return this._isDocument ? window.pageXOffset : this.target.scrollLeft;
    }
  }, {
    key: 'scrollWidth',
    get: function get() {
      return this.target.scrollWidth;
    }
  }, {
    key: 'scrollHeight',
    get: function get() {
      return this.target.scrollHeight;
    }
  }, {
    key: 'maxScrollTop',
    get: function get() {
      return this.scrollWidth - this.innerWidth;
    }
  }, {
    key: 'maxScrollLeft',
    get: function get() {
      return this.scrollHeight - this.innerHeight;
    }
  }]);

  return ElementMeasurer;
}();

exports.default = ElementMeasurer;

/***/ })
/******/ ]);
});