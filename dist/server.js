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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
var domain = exports.domain = "http://localhost:3000";
var assetsUrl = exports.assetsUrl = "/assets";

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

var _Header = __webpack_require__(11);

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


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NextPage = function (_PureComponent) {
    _inherits(NextPage, _PureComponent);

    function NextPage() {
        _classCallCheck(this, NextPage);

        return _possibleConstructorReturn(this, (NextPage.__proto__ || Object.getPrototypeOf(NextPage)).apply(this, arguments));
    }

    _createClass(NextPage, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement("br", null),
                _react2.default.createElement(
                    "center",
                    null,
                    _react2.default.createElement(
                        "a",
                        { className: "continue-link", href: this.props.link },
                        "Continue to ",
                        this.props.page
                    )
                ),
                _react2.default.createElement("br", null),
                _react2.default.createElement(
                    "style",
                    null,
                    "\n                    .continue-link{\n                        text-decoration: none;\n                    }\n                    "
                )
            );
        }
    }]);

    return NextPage;
}(_react.PureComponent);

exports.default = NextPage;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _router = __webpack_require__(6);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

server.use('/assets', _express2.default.static('assets'));

(0, _router2.default)({ server: server });

server.listen(3000);
console.log('listening');

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _HomeController = __webpack_require__(7);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(8);

var _app = __webpack_require__(9);

var _app2 = _interopRequireDefault(_app);

var _template = __webpack_require__(17);

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
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

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

var _Home = __webpack_require__(10);

var _Home2 = _interopRequireDefault(_Home);

var _Technology = __webpack_require__(12);

var _Technology2 = _interopRequireDefault(_Technology);

var _Portfolio = __webpack_require__(14);

var _Portfolio2 = _interopRequireDefault(_Portfolio);

var _Contact = __webpack_require__(16);

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NextPage = __webpack_require__(3);

var _NextPage2 = _interopRequireDefault(_NextPage);

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
                _react2.default.createElement(_NextPage2.default, { link: _constants.domain + '/portfolio', page: 'Portfolio' }),
                _react2.default.createElement(
                    'style',
                    null,
                    '\n                    h1, h3{\n                        font-weight: 300 !important;\n                    }\n                    h3{\n                        border-bottom: 1px solid #CCC;\n                    }\n                    @media screen and (max-width: 1000px) {\n                        .about-bio{\n                            margin-left: 10% !important;\n                            margin-right: 10% !important;\n                        }\n                        .about-experience{\n                            margin-left: 10% !important;\n                            margin-right: 10% !important; \n                        }\n                    }\n                    @media screen and (max-width: 600px) {\n                        .about-experience{\n                            margin-left: 5% !important;\n                            margin-right: 5% !important; \n                        }\n                    }\n                    .continue-link{\n                        text-decoration: none;\n                    }\n                    .about-experience{\n                        padding-top: 20px;\n                        display: flex;\n                        flex-direction: column;\n                        text-align: left;\n                        margin-left: 20%;\n                        margin-right: 20%;\n                        font-size: 18px;\n                        line-height: 1.5;\n                        color: #555;\n                    }\n                    .about-bio{\n                        padding-top: 20px;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        text-align: center;\n                        margin-left: 20%;\n                        margin-right: 20%;\n                        font-size: 20px;\n                        line-height: 1.5;\n                        color: #555;\n                    }\n                    .profile-picture{\n                        height: 300px;\n                        width: 300px;\n                        border-radius: 150px;\n                    }\n                    .profile-picture-container{\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        padding-top: 20px;\n                    }\n                    '
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TechItem = __webpack_require__(13);

var _TechItem2 = _interopRequireDefault(_TechItem);

var _NextPage = __webpack_require__(3);

var _NextPage2 = _interopRequireDefault(_NextPage);

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

        var _this = _possibleConstructorReturn(this, (Technology.__proto__ || Object.getPrototypeOf(Technology)).call(this));

        _this.data = [{
            image: _constants.assetsUrl + '/images/firebase.png',
            title: 'Firebase',
            tech: 'Javascript'
        }, {
            image: _constants.assetsUrl + '/images/mysql.png',
            title: 'MySQL',
            tech: 'SQL'
        }, {
            image: _constants.assetsUrl + '/images/flask.png',
            title: 'Flask',
            tech: 'Python'
        }, {
            image: _constants.assetsUrl + '/images/react.png',
            title: 'React JS + React Native',
            tech: 'Javascript'
        }, {
            image: _constants.assetsUrl + '/images/node.jpg',
            title: 'Node JS',
            tech: 'Javascript'
        }, {
            image: _constants.assetsUrl + '/images/express.png',
            title: 'Express',
            tech: 'Javascript'
        }, {
            image: _constants.assetsUrl + '/images/redux.png',
            title: 'Redux',
            tech: 'Javascript'
        }, {
            image: _constants.assetsUrl + '/images/mobx.png',
            title: 'MobX',
            tech: 'Javascript'
        }, {
            image: _constants.assetsUrl + '/images/laravel.png',
            title: 'Laravel',
            tech: 'PHP'
        }, {
            image: _constants.assetsUrl + '/images/jquery.png',
            title: 'JQuery',
            tech: 'JQuery'
        }, {
            image: _constants.assetsUrl + '/images/bootstrap.png',
            title: 'Bootstrap',
            tech: 'HTML+CSS'
        }];
        _this.renderRow = _this.renderRow.bind(_this);
        return _this;
    }

    _createClass(Technology, [{
        key: 'renderRow',
        value: function renderRow(data) {
            var mapped = data.map(function (val, index) {
                return _react2.default.createElement(_TechItem2.default, { key: index, image: val.image, title: val.title, desc: val.desc, tech: val.tech });
            });
            return mapped;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Page2.default,
                this.props,
                this.renderRow(this.data),
                _react2.default.createElement(_NextPage2.default, { link: _constants.domain + '/contact', page: 'Contact' }),
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PortItem = function (_PureComponent) {
    _inherits(PortItem, _PureComponent);

    function PortItem() {
        _classCallCheck(this, PortItem);

        return _possibleConstructorReturn(this, (PortItem.__proto__ || Object.getPrototypeOf(PortItem)).apply(this, arguments));
    }

    _createClass(PortItem, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    "div",
                    { className: "item-wrapper" },
                    _react2.default.createElement(
                        "div",
                        { className: "item-image" },
                        _react2.default.createElement("img", { src: this.props.image, alt: "LightRocket" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "item-desc" },
                        _react2.default.createElement(
                            "h1",
                            null,
                            this.props.title
                        ),
                        this.props.desc,
                        _react2.default.createElement(
                            "h3",
                            null,
                            this.props.tech
                        )
                    )
                ),
                _react2.default.createElement(
                    "style",
                    null,
                    "\n                    h1, h3{\n                        font-weight: 300 !important;\n                    }\n                    @media screen and (max-width: 1000px) {\n                        .item-wrapper{\n                            margin-right: 10% !important;\n                            margin-left: 10% !important;\n                        }\n                    }\n                    @media screen and (max-width: 800px) {\n                        .item-wrapper{\n                            margin-right: 5% !important;\n                            margin-left: 5% !important;\n                        }\n                    }\n                    @media screen and (max-width: 650px) {\n                        .item-wrapper{\n                            flex-direction: column !important;\n                        }\n                        .item-desc{\n                            padding-top: 20px;\n                        }\n                    }\n                    .item-wrapper{\n                        display: flex;\n                        flex-direction: row;\n                        margin-right: 20%;\n                        margin-left: 20%;\n                        padding-top: 40px;\n                    }\n                    .item-image{\n                        display: flex;\n                        flex: 0.5;\n                        justify-content: center;\n                        align-items: center;\n                    }\n                    .item-image img{\n                        height: 150px;\n                        width: 150px;\n                        border-radius: 75px;\n                        box-shadow: 0px 0px 11px -4px;\n\n                    }\n                    .item-desc{\n                        display: flex;\n                        flex-direction: column;\n                        flex: 0.5;\n                        justify-content: center;\n                        align-items: center;\n                        color: #555;\n                    }\n                    "
                )
            );
        }
    }]);

    return PortItem;
}(_react.PureComponent);

exports.default = PortItem;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NextPage = __webpack_require__(3);

var _NextPage2 = _interopRequireDefault(_NextPage);

var _PortItem = __webpack_require__(15);

var _PortItem2 = _interopRequireDefault(_PortItem);

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

        var _this = _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call(this));

        _this.data = [{
            image: _constants.assetsUrl + '/images/lightrocket.PNG',
            title: 'LightRocket',
            desc: 'LightRocket is an app currently in development for LightRocketMedia.\n                The app automatically syncs the user\'s images to the LightRocket archive platform for photographers.',
            tech: 'React Native (IOS/Android), Redux, LightRocket API service'
        }, {
            image: _constants.assetsUrl + '/images/joox.PNG',
            title: 'Joox',
            desc: 'I spent 3 months with the Tencent Thailand team working on the new Joox website. It was built with Next.js so that\n                 we could get better SEO offered by the serverside rendering.',
            tech: 'ReactJS, Next.JS, Tencent API service'
        }, {
            image: _constants.assetsUrl + '/images/chickenapp.png',
            title: 'Unicity Unishop Mobile App',
            desc: 'Unishop is Unicity International\'s next mobile app for distributors around the world to manage\n                their MLM business. It features many of the tools required for MLM distributors to check their commission statements,\n                 shop for new products and view their genealogy.',
            tech: 'React Native (IOS/Android), MobX, Hydra API service'
        }, {
            image: _constants.assetsUrl + '/images/membercd.png',
            title: 'Unicity Unishop Web App',
            desc: 'Unishop is Unicity International\'s next web app for distributors around the world to manage\n                their MLM business. It features many of the tools required for MLM distributors to check their commission statements,\n                 shop for new products and view their genealogy.',
            tech: 'React JS, MobX, Hydra API service'
        }, {
            image: _constants.assetsUrl + '/images/ifit1.PNG',
            title: 'Unicity Project U',
            desc: 'Project U is a fitness mobile app built for Unicity fitness trainers to manage and coach their fitness team.\n                 It allows participants to track their meals, exercises, weight and much more. Coaches are then able to give feedback \n                 to their participants.',
            tech: 'React Native (IOS/Android), MobX, AWS Lambda + RDS'
        }, {
            image: _constants.assetsUrl + '/images/graph.png',
            title: 'React Native Touchable Graph',
            desc: 'This graph component for React Native allows developers to plot a line graph so that users can interact with their\n                 finger to see the data points. More: https://github.com/rexjrs/react-native-touchable-graph',
            tech: 'React Native (IOS/Android)'
        }];
        _this.renderRow = _this.renderRow.bind(_this);
        return _this;
    }

    _createClass(Portfolio, [{
        key: 'renderRow',
        value: function renderRow(data) {
            var mapped = data.map(function (val, index) {
                return _react2.default.createElement(_PortItem2.default, { key: index, image: val.image, title: val.title, desc: val.desc, tech: val.tech });
            });
            return mapped;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Page2.default,
                this.props,
                this.renderRow(this.data),
                _react2.default.createElement(_NextPage2.default, { link: _constants.domain + '/technologies', page: 'Technologies' }),
                _react2.default.createElement(
                    'style',
                    null,
                    '\n                    h1{\n                        font-weight: 300 !important;\n                    }\n                    @media screen and (max-width: 1000px) {\n                        .item-wrapper{\n                            margin-right: 10% !important;\n                            margin-left: 10% !important;\n                        }\n                    }\n                    @media screen and (max-width: 800px) {\n                        .item-wrapper{\n                            margin-right: 5% !important;\n                            margin-left: 5% !important;\n                        }\n                    }\n                    @media screen and (max-width: 650px) {\n                        .item-wrapper{\n                            flex-direction: column !important;\n                        }\n                        .item-desc{\n                            padding-top: 20px;\n                        }\n                    }\n                    .item-wrapper{\n                        display: flex;\n                        flex-direction: row;\n                        margin-right: 20%;\n                        margin-left: 20%;\n                        padding-top: 40px;\n                    }\n                    .item-image{\n                        display: flex;\n                        flex: 0.5;\n                        justify-content: center;\n                        align-items: center;\n                    }\n                    .item-image img{\n                        max-height: 500px;\n                        box-shadow: 0px 0px 11px -4px;\n                        max-width: 400px;\n                    }\n                    .item-desc{\n                        display: flex;\n                        flex-direction: column;\n                        flex: 0.5;\n                        justify-content: center;\n                        align-items: flex-start;\n                        color: #555;\n                    }\n                    '
                )
            );
        }
    }]);

    return Portfolio;
}(_react.Component);

exports.default = Portfolio;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PortItem = function (_PureComponent) {
    _inherits(PortItem, _PureComponent);

    function PortItem() {
        _classCallCheck(this, PortItem);

        return _possibleConstructorReturn(this, (PortItem.__proto__ || Object.getPrototypeOf(PortItem)).apply(this, arguments));
    }

    _createClass(PortItem, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    "div",
                    { className: "item-wrapper" },
                    _react2.default.createElement(
                        "div",
                        { className: "item-image" },
                        _react2.default.createElement("img", { src: this.props.image, alt: "LightRocket" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "item-desc" },
                        _react2.default.createElement(
                            "h1",
                            null,
                            this.props.title
                        ),
                        this.props.desc,
                        _react2.default.createElement(
                            "h3",
                            null,
                            this.props.tech
                        )
                    )
                ),
                _react2.default.createElement(
                    "style",
                    null,
                    "\n                    h1, h3{\n                        font-weight: 300 !important;\n                    }\n                    @media screen and (max-width: 1000px) {\n                        .item-wrapper{\n                            margin-right: 10% !important;\n                            margin-left: 10% !important;\n                        }\n                    }\n                    @media screen and (max-width: 800px) {\n                        .item-wrapper{\n                            margin-right: 5% !important;\n                            margin-left: 5% !important;\n                        }\n                    }\n                    @media screen and (max-width: 650px) {\n                        .item-wrapper{\n                            flex-direction: column !important;\n                        }\n                        .item-desc{\n                            padding-top: 20px;\n                        }\n                    }\n                    .item-wrapper{\n                        display: flex;\n                        flex-direction: row;\n                        margin-right: 20%;\n                        margin-left: 20%;\n                        padding-top: 40px;\n                    }\n                    .item-image{\n                        display: flex;\n                        flex: 0.5;\n                        justify-content: center;\n                        align-items: center;\n                    }\n                    .item-image img{\n                        max-height: 500px;\n                        box-shadow: 0px 0px 11px -4px;\n                    }\n                    .item-desc{\n                        display: flex;\n                        flex-direction: column;\n                        flex: 0.5;\n                        justify-content: center;\n                        align-items: flex-start;\n                        color: #555;\n                    }\n                    "
                )
            );
        }
    }]);

    return PortItem;
}(_react.PureComponent);

exports.default = PortItem;

/***/ }),
/* 16 */
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
                    'center',
                    null,
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Phone: +66 094-648-1922'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'a',
                        { className: 'links', href: 'mailto:thomas.charlesworths@gmail.com?Subject=I saw your portfolio!', target: '_top' },
                        'thomas.charlesworths@gmail.com'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'a',
                        { className: 'links', href: 'skype:thomas.charlesworthless?userinfo' },
                        'Contact me on Skype'
                    )
                ),
                _react2.default.createElement(
                    'style',
                    null,
                    '\n                    h3{\n                        font-weight: 300 !important;\n                        margin: 0px !important;\n                    }\n                    .links{\n                        text-decoration: none;\n                    }\n                    '
                )
            );
        }
    }]);

    return Contact;
}(_react.Component);

exports.default = Contact;

/***/ }),
/* 17 */
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