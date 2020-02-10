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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/dropdown.js":
/*!***********************************!*\
  !*** ./src/js/import/dropdown.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  if (!document.querySelector('.js-dropdown')) {
    return;
  }

  var dropdownLinks = document.querySelectorAll('.js-dropdown');
  openDropdawn(document.querySelector('.js-dropdown').parentElement);
  Array.from(dropdownLinks).forEach(function (dropdownLink) {
    dropdownLink.addEventListener('click', function (e) {
      e.preventDefault();
      var parent = dropdownLink.parentElement;
      console.log(parent);

      if (parent.classList.contains('open')) {
        closeDropdawn(parent);
      } else {
        openDropdawn(parent);
      }
    });
  });

  function openDropdawn(elem) {
    elem.classList.add('open');
    var thisBody = elem.querySelector('.dropdawn__body');
    thisBody.style.height = thisBody.scrollHeight + 'px';
  }

  function closeDropdawn(elem) {
    elem.classList.remove('open');
    elem.querySelector('.dropdawn__body').style.height = '';
  }
})();

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/import/popup.js":
/*!********************************!*\
  !*** ./src/js/import/popup.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var openPopupLinks = document.querySelectorAll('.js-openPopup');
  var closePopupLinks = document.querySelectorAll('.js-close-popup');
  Array.from(openPopupLinks).forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      if (document.querySelector('.popup.open')) {
        document.querySelector('.popup.open').classList.remove('open');
      }

      var popupBlock = document.querySelector(link.getAttribute('href'));
      popupBlock.classList.add('open');
    });
  });
  Array.from(closePopupLinks).forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (e.target !== e.currentTarget) {
        return;
      }

      var popupBlock = document.querySelector(link.dataset.popup);
      popupBlock.classList.remove('open');
    });
  });
})();

/***/ }),

/***/ "./src/js/import/sublist.js":
/*!**********************************!*\
  !*** ./src/js/import/sublist.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sublistLink = document.querySelectorAll('.js-sublist');

var sublist =
/*#__PURE__*/
function () {
  function sublist(el) {
    var _this = this;

    _classCallCheck(this, sublist);

    this.el = el.parentElement; // this.sublistBlock = document.querySelector(this.el.getAttribute('href'));

    this.sublistBlock = document.querySelector('#catalog-list');

    if (window.innerWidth > 1139) {
      this.el.addEventListener('mouseover', function () {
        _this.open();
      });
      this.el.addEventListener('mouseleave', function () {
        _this.close();
      });
    } else {
      el.addEventListener('click', function (e) {
        e.preventDefault();

        if (_this.sublistBlock.style.display === 'block') {
          _this.closeMob();
        } else {
          _this.openMob();
        }
      });
    }
  }

  _createClass(sublist, [{
    key: "open",
    value: function open() {
      this.sublistBlock.style.display = 'block';
    }
  }, {
    key: "openMob",
    value: function openMob() {
      var _this2 = this;

      this.sublistBlock.style.position = 'fixed';
      this.sublistBlock.style.display = 'block';
      var height = this.sublistBlock.offsetHeight;
      console.log(height);
      this.sublistBlock.style = '';
      this.sublistBlock.style.transition = 'transform, height .3s ease-out';
      this.sublistBlock.style.display = 'block';
      this.sublistBlock.style.height = '0';
      this.sublistBlock.style.transform = 'scale(0)';
      this.sublistBlock.style.overflow = 'hidden';
      setTimeout(function () {
        _this2.sublistBlock.style.height = "".concat(height, "px");
        _this2.sublistBlock.style.transform = 'scale(1)';
      }, 10);
      setTimeout(function () {
        _this2.sublistBlock.style = '';
        _this2.sublistBlock.style.display = 'block';
      }, 200);
    }
  }, {
    key: "close",
    value: function close() {
      this.sublistBlock.style = '';
    }
  }, {
    key: "closeMob",
    value: function closeMob() {
      var _this3 = this;

      var height = this.sublistBlock.offsetHeight;
      this.sublistBlock.style.height = "".concat(height, "px");
      this.sublistBlock.style.overflow = 'hidden';
      this.sublistBlock.style.transition = 'height .3s ease-out';
      setTimeout(function () {
        _this3.sublistBlock.style.height = '0';
      }, 50);
      setTimeout(function () {
        _this3.sublistBlock.style = '';
      }, 200);
    }
  }]);

  return sublist;
}();

Array.from(sublistLink).forEach(function (e) {
  new sublist(e);
});
document.querySelector('.js-mobMenu').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.js-mobMenu').classList.toggle('active');
  document.querySelector('.header__menu').classList.toggle('active');
});

/***/ }),

/***/ "./src/js/import/tabs_login.js":
/*!*************************************!*\
  !*** ./src/js/import/tabs_login.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var tabsLogin = document.querySelectorAll('.js-tab-login');
  Array.from(tabsLogin).forEach(function (tabLogin) {
    tabLogin.addEventListener('click', function (e) {
      e.preventDefault();

      if (tabLogin.classList.contains('disabled')) {
        return;
      }

      var tabBlock = document.querySelector(tabLogin.getAttribute('href'));
      var activeLink = document.querySelector('.login__link.disabled');
      var activeBlock = document.querySelector('.login__content.active');
      activeLink.classList.remove('disabled');
      tabLogin.classList.add('disabled');
      activeBlock.classList.remove('active');
      tabBlock.classList.add('active');
    });
  });
})();

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _import_sublist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/sublist */ "./src/js/import/sublist.js");
/* harmony import */ var _import_sublist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_import_sublist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _import_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import/dropdown */ "./src/js/import/dropdown.js");
/* harmony import */ var _import_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_import_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _import_tabs_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import/tabs_login */ "./src/js/import/tabs_login.js");
/* harmony import */ var _import_tabs_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_import_tabs_login__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _import_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./import/popup */ "./src/js/import/popup.js");
/* harmony import */ var _import_popup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_import_popup__WEBPACK_IMPORTED_MODULE_5__);







/***/ })

/******/ });
//# sourceMappingURL=main.js.map