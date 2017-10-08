window["ElementMeasurer"] =
/******/ (function(modules) { // webpackBootstrap
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
exports.WindowSize = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _windowSize = __webpack_require__(1);

var _windowSize2 = _interopRequireDefault(_windowSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ElementMeasurer = function () {
  function ElementMeasurer() {
    var elm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, ElementMeasurer);

    // window and document의 사이즈는 기본으로 제공한다.
    this._elm = null;
    this._docSize = {};
    this._winSize = {};
    this._elmSize = {};

    this.setElement(elm);
    this._process();
  }

  // static

  _createClass(ElementMeasurer, [{
    key: 'setElement',


    // public

    value: function setElement(elm) {
      this._elm = elm;
    }
  }, {
    key: 'getDocumentSize',
    value: function getDocumentSize() {
      return this._docSize;
    }
  }, {
    key: 'getWindowSize',
    value: function getWindowSize() {
      return this._winSize;
    }
  }, {
    key: 'getElementSize',
    value: function getElementSize() {
      return this._elmSize;
    }

    // private

  }, {
    key: '_process',
    value: function _process() {
      // measure doucument.
      // measure window.
      this._winSize = new _windowSize2.default();

      // measure element. (optional)
    }
  }], [{
    key: 'documentSize',
    get: function get() {
      return new ElementMeasurer().getDocumentSize();
    }
  }, {
    key: 'windowSize',
    get: function get() {
      return new ElementMeasurer().getWindowSize();
    }
  }]);

  return ElementMeasurer;
}();

exports.default = ElementMeasurer;
;

exports.WindowSize = _windowSize2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _size = __webpack_require__(2);

var _size2 = _interopRequireDefault(_size);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WindowSize = function (_Size) {
  _inherits(WindowSize, _Size);

  function WindowSize() {
    _classCallCheck(this, WindowSize);

    var _this = _possibleConstructorReturn(this, (WindowSize.__proto__ || Object.getPrototypeOf(WindowSize)).call(this));

    _this.setTarget(window);
    _this.width = window.innerWidth;
    _this.height = window.innerHeight;
    _this.offset = {
      top: window.pageYOffset,
      left: window.pageXOffset
    };
    return _this;
  }

  return WindowSize;
}(_size2.default);

exports.default = WindowSize;
;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Size = function () {
  function Size() {
    _classCallCheck(this, Size);

    this.target = null;
    this.width = 0;
    this.height = 0;
    this.offset = {
      top: 0,
      left: 0
    };
  }

  // public

  _createClass(Size, [{
    key: 'setTarget',
    value: function setTarget(val) {
      if (val === window || val === document || val instanceof Element) {
        this.target = val;
      } else if (typeof val === 'string') {
        this.target = document.querySelector(val);
      } else {
        throw new TypeError('Target value is not correct type.');
      }
    }

    // private

  }, {
    key: '_isWindow',
    value: function _isWindow() {
      return this.target === window || this.target === document;
    }
  }, {
    key: 'offsetX',
    get: function get() {
      return this.offset.left;
    }
  }, {
    key: 'offsetY',
    get: function get() {
      return this.offset.top;
    }
  }, {
    key: 'scrollTop',
    get: function get() {
      return this._isWindow() ? window.pageYOffset : this.target.scrollTop;
    }
  }, {
    key: 'scrollHeight',
    get: function get() {
      return this._isWindow() ? Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) : this.target.scrollHeight;
    }
  }, {
    key: 'innerHeight',
    get: function get() {
      return this._isWindow() ? window.innerHeight : this.target.getBoundingClientRect().height;
    }
  }, {
    key: 'maxScroll',
    get: function get() {
      return this.scrollHeight - this.innerHeight;
    }
  }]);

  return Size;
}();

exports.default = Size;

/***/ })
/******/ ]);
//# sourceMappingURL=element-measurer.js.map