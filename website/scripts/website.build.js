(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _dummyService = require('./services/dummy.service.js');

var _dummyService2 = _interopRequireDefault(_dummyService);

var _pageHeaderComponent = require('./components/page-header.component.js');

var _pageHeaderComponent2 = _interopRequireDefault(_pageHeaderComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (app) {
    app.AppComponent = ng.core.Component({
        selector: 'my-app',
        templateUrl: '/website/templates/frontpage.html',
        directives: [_pageHeaderComponent2.default],
        services: [_dummyService2.default]
    }).Class({
        constructor: function constructor() {
            this.pageTitle = "My page title";
        },
        ngOnInit: function ngOnInit() {}
    });

    document.addEventListener('DOMContentLoaded', function () {
        ng.platformBrowserDynamic.bootstrap(app.AppComponent);
    });
})(window.app || (window.app = {}));

},{"./components/page-header.component.js":2,"./services/dummy.service.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ng.core.Component({
    selector: 'page-header',
    templateUrl: '/website/templates/partials/page-header.html'
}).Class({
    constructor: function constructor() {
        this.title = "My title";
    },
    ngOnInit: function ngOnInit() {}
});

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DummnyService = function () {
    function DummnyService() {
        _classCallCheck(this, DummnyService);
    }

    _createClass(DummnyService, [{
        key: "getRandomNumber",
        value: function getRandomNumber() {
            return ~~(Math.random() * 100);
        }
    }]);

    return DummnyService;
}();

exports.default = DummnyService;

},{}]},{},[1])


//# sourceMappingURL=website.build.js.map
