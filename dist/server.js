module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var domain = exports.domain = "http://localhost:8080";
var assetsUrl = exports.assetsUrl = "/assets/";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(10);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_React$PureComponent) {
    _inherits(Page, _React$PureComponent);

    function Page() {
        _classCallCheck(this, Page);

        return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
    }

    _createClass(Page, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Header2.default, this.props),
                _react2.default.createElement(
                    'div',
                    { className: 'page-container' },
                    this.props.children
                ),
                _react2.default.createElement(
                    'style',
                    null,
                    '\n                    @media screen and (max-width: 600px) {\n                        .header{\n                            padding-left: 0px !important;\n                            padding-right: 0px !important;\n                        }\n                        .profile-picture{\n                            height: 220px !important;\n                            width: 220px !important;\n                        }\n                    }\n                    @media screen and (max-width: 480px) {\n                        .header-tiles-links{\n                            font-size: 18px !important;\n                        }\n                    }\n                    .page-container{\n                        margin-top: 60px;\n                    }\n                    .header{\n                        background-color: white;\n                        box-shadow: 0px 1px 3px -2px;\n                        height: 60px;\n                        border-bottom: 1px solid #CCC;\n                        position: fixed;\n                        top: 0;\n                        left: 0;\n                        right: 0;\n                        display: flex;\n                        flex-direction: row;\n                        padding-left: 20%;\n                        padding-right: 20%;\n                    }\n                    .header-tiles{\n                        display: flex;\n                        flex: 1;\n                        align-items: center;\n                        justify-content: center;\n                    }\n                    .header-tiles-links{\n                        text-decoration: none;\n                        color: black;\n                        font-size: 20px;\n                    }\n                    .header-tiles .active{\n                        color: green;\n                        font-weight: bold;\n                    }\n                    '
                )
            );
        }
    }]);

    return Page;
}(_react2.default.PureComponent);

exports.default = Page;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _router = __webpack_require__(5);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

server.use('/assets', _express2.default.static('assets'));

(0, _router2.default)({ server: server });

server.listen(8080);
console.log('listening');

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _HomeController = __webpack_require__(6);

var _HomeController2 = _interopRequireDefault(_HomeController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = function router(_ref) {
    var server = _ref.server;

    server.get('/', function (req, res) {
        return _HomeController2.default.portPages({ req: req, res: res, title: 'About' });
    });
    server.get('/technologies', function (req, res) {
        return _HomeController2.default.portPages({ req: req, res: res, title: 'Technologies' });
    });
    server.get('/portfolio', function (req, res) {
        return _HomeController2.default.portPages({ req: req, res: res, title: 'Portfolio' });
    });
    server.get('/contact', function (req, res) {
        return _HomeController2.default.portPages({ req: req, res: res, title: 'Contact' });
    });
};

exports.default = router;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(7);

var _app = __webpack_require__(8);

var _app2 = _interopRequireDefault(_app);

var _template = __webpack_require__(14);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeController = function () {
    function HomeController() {
        _classCallCheck(this, HomeController);
    }

    _createClass(HomeController, null, [{
        key: 'portPages',
        value: function portPages(_ref) {
            var req = _ref.req,
                res = _ref.res,
                title = _ref.title;

            var initialState = { path: req.path, params: req.params };
            var appString = (0, _server.renderToString)(_react2.default.createElement(_app2.default, initialState));
            console.log(appString);
            res.send((0, _template2.default)({
                body: appString,
                title: 'Thomas Charlesworth - ' + title,
                initialState: JSON.stringify(initialState)
            }));
        }
    }]);

    return HomeController;
}();

exports.default = HomeController;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(9);

var _Home2 = _interopRequireDefault(_Home);

var _Technology = __webpack_require__(11);

var _Technology2 = _interopRequireDefault(_Technology);

var _Portfolio = __webpack_require__(12);

var _Portfolio2 = _interopRequireDefault(_Portfolio);

var _Contact = __webpack_require__(13);

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      switch (this.props.path) {
        case '/':
          return _react2.default.createElement(_Home2.default, this.props);
          break;
        case '/technologies':
          return _react2.default.createElement(_Technology2.default, this.props);
          break;
        case '/portfolio':
          return _react2.default.createElement(_Portfolio2.default, this.props);
          break;
        case '/contact':
          return _react2.default.createElement(_Contact2.default, this.props);
          break;
        default:
          return _react2.default.createElement(_Home2.default, this.props);
          break;
      }
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

var _Page = __webpack_require__(2);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Page2.default,
                this.props,
                _react2.default.createElement(
                    'div',
                    { className: 'profile-picture-container' },
                    _react2.default.createElement('img', { className: 'profile-picture', src: _constants.assetsUrl + '/images/me.jpg' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'about-bio' },
                    'I\'m Thomas Charlesworth (British/Thai) and I\'m a web and mobile developer based in Bangkok. I graduated from Stamford International University with a High Distinction in 2017. Having worked on great teams, I have learnt many skills in teamworking and in technologies. Some of those technologies include: React/React-Native, Laravel, Node.Js+Express, Next.Js and Swift IOS. I am currently working fulltime at LightRocket and am also a contractor.'
                ),
                _react2.default.createElement(
                    'center',
                    null,
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Experience'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'about-experience' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        'March 2014 - May 2014: Internship @ MagicBoxAsia - Laravel PHP Developer'
                    ),
                    'This internship involved programming the back-end dashboard for Magic Box Asia\u2019s new website using Laravel PHP framework. I worked on building the functions and tools of the admin side of the website to allow content creators to manage, create and delete content from the main consumer side of the website. This involved working with MySQL database, Amazon S3 and most importantly developing with the Laravel framework.',
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Nov 2016 - Present: Unicity International - Web/Mobile Developer - (Presently a Contractor)'
                    ),
                    'I joined Unicity as a fresh graduate. I first started working on the Angular.js site where we developed 12 e-commerce sites for 12 different branches of Unicity offices around the world. I also moved on to developing a mobile application for Unicity\'s fitness program using React Native. Finally, I am now working on a new version of the e-commerce sites/mobile apps that are now being built on React and React Native.',
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Nov 2017 - Jan 2018: Tencent Thailand - Software Engineer Contractor and React Teacher'
                    ),
                    'After I left my full time job at Unicity, I started contracting for Tencent Thailand and teaching React JS to their developers. I worked on a 3 month project where we rebuilt the joox.com website on Next.Js. Previously it had been written with JQuery using iFrames in order to allow users to navigate the site without stopping the music player. Next.Js allowed us to develop a more performant web app and provided much better SEO rankings for joox.com',
                    _react2.default.createElement(
                        'h3',
                        null,
                        'June 2017 - Present: LightRocket - Software Engineer'
                    ),
                    'I joined the LightRocket team in June 2017 as a contractor working on their new mobile application. However, in Jan 2018 I joined LightRocket fulltime and am now in the process of converting their Kohana sites to React.'
                ),
                _react2.default.createElement(
                    'center',
                    null,
                    _react2.default.createElement(
                        'h1',
                        null,
                        'Academics'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'about-experience' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        'St. Andrews International School Bangkok'
                    ),
                    'IGCSE | Physics \u2013 Computer Studies \u2013 Geography \u2013 Business Studies \u2013 Math \u2013 English',
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Stamford International University Bangkok'
                    ),
                    '(High Distinction) Bsc Hons. Information Technology - GPA: 3.64/4.00'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'center',
                    null,
                    _react2.default.createElement(
                        'a',
                        { className: 'continue-link', href: '' },
                        'Continue to Technologies'
                    )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'style',
                    null,
                    '\n                    h1, h3{\n                        font-weight: 300 !important;\n                    }\n                    h3{\n                        border-bottom: 1px solid #CCC;\n                    }\n                    @media screen and (max-width: 1000px) {\n                        .about-bio{\n                            margin-left: 10% !important;\n                            margin-right: 10% !important;\n                        }\n                        .about-experience{\n                            margin-left: 10% !important;\n                            margin-right: 10% !important; \n                        }\n                    }\n                    @media screen and (max-width: 600px) {\n                        .about-experience{\n                            margin-left: 5% !important;\n                            margin-right: 5% !important; \n                        }\n                    }\n                    .continue-link{\n                        text-decoration: none;\n                    }\n                    .about-experience{\n                        padding-top: 20px;\n                        display: flex;\n                        flex-direction: column;\n                        text-align: left;\n                        margin-left: 20%;\n                        margin-right: 20%;\n                        font-size: 18px;\n                        line-height: 1.5;\n                    }\n                    .about-bio{\n                        padding-top: 20px;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        text-align: center;\n                        margin-left: 20%;\n                        margin-right: 20%;\n                        font-size: 20px;\n                        line-height: 1.5;\n                    }\n                    .profile-picture{\n                        height: 300px;\n                        width: 300px;\n                        border-radius: 150px;\n                    }\n                    .profile-picture-container{\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        padding-top: 20px;\n                    }\n                    '
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tiles = [{ name: 'About', path: '/' }, { name: 'Portfolio', path: '/portfolio' }, { name: 'Technologies', path: '/technologies' }, { name: 'Contact', path: '/contact' }];

var Header = function (_React$PureComponent) {
    _inherits(Header, _React$PureComponent);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'renderTiles',
        value: function renderTiles(data) {
            var _this2 = this;

            var mapped = data.map(function (val) {
                var active = val.path === _this2.props.path ? 'active' : '';
                return _react2.default.createElement(
                    'div',
                    { className: 'header-tiles', key: val.name },
                    _react2.default.createElement(
                        'a',
                        { className: 'header-tiles-links ' + active, href: '' + _constants.domain + val.path },
                        val.name
                    )
                );
            });
            return mapped;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'header' },
                this.renderTiles(tiles)
            );
        }
    }]);

    return Header;
}(_react2.default.PureComponent);

exports.default = Header;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

var _Page = __webpack_require__(2);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Technology = function (_Component) {
    _inherits(Technology, _Component);

    function Technology() {
        _classCallCheck(this, Technology);

        return _possibleConstructorReturn(this, (Technology.__proto__ || Object.getPrototypeOf(Technology)).apply(this, arguments));
    }

    _createClass(Technology, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Page2.default,
                this.props,
                _react2.default.createElement(
                    'style',
                    null,
                    '\n                    @media screen and (max-width: 1000px) {\n\n                    }\n                    '
                )
            );
        }
    }]);

    return Technology;
}(_react.Component);

exports.default = Technology;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

var _Page = __webpack_require__(2);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portfolio = function (_Component) {
    _inherits(Portfolio, _Component);

    function Portfolio() {
        _classCallCheck(this, Portfolio);

        return _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).apply(this, arguments));
    }

    _createClass(Portfolio, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Page2.default,
                this.props,
                _react2.default.createElement(
                    'style',
                    null,
                    '\n                    @media screen and (max-width: 1000px) {\n\n                    }\n                    '
                )
            );
        }
    }]);

    return Portfolio;
}(_react.Component);

exports.default = Portfolio;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

var _Page = __webpack_require__(2);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_Component) {
    _inherits(Contact, _Component);

    function Contact() {
        _classCallCheck(this, Contact);

        return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
    }

    _createClass(Contact, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Page2.default,
                this.props,
                _react2.default.createElement(
                    'style',
                    null,
                    '\n                    @media screen and (max-width: 1000px) {\n\n                    }\n                    '
                )
            );
        }
    }]);

    return Contact;
}(_react.Component);

exports.default = Contact;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(1);

exports.default = function (_ref) {
  var body = _ref.body,
      title = _ref.title,
      initialState = _ref.initialState;

  return '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n        <script>window.__APP_INITIAL_STATE__ = ' + initialState + '</script>\n        <title>' + title + '</title>\n        <link href="https://fonts.googleapis.com/css?family=Raleway:300" rel="stylesheet">\n        <style>\n          html{\n            font-family: \'Raleway\', sans-serif;\n          }\n          body{\n            font-family: \'Raleway\', sans-serif;\n            margin: 0px;\n          }\n        </style>\n      </head>\n      <body>\n        <div id="root">' + body + '</div>\n      </body>\n      <script src="' + _constants.assetsUrl + 'bundle.js"></script>\n    </html>\n  ';
};

/***/ })
/******/ ]);