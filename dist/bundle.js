(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Human = (function () {
  function Human(gender) {
    _classCallCheck(this, Human);

    this.setGender(gender);
  }

  _createClass(Human, [{
    key: 'setGender',
    value: function setGender(gender) {
      this.gender = gender;
    }
  }, {
    key: 'getGender',
    value: function getGender(gender) {
      return this.gender;
    }
  }]);

  return Human;
})();

Human.desc = 'Modern humans (Homo sapiens, primarily ssp. Homo sapiens sapiens) are the only extant members of the hominin clade (or human clade), a branch of the great apes; they are characterized by erect posture and bipedal locomotion, manual dexterity and increased tool use, and a general trend toward larger, more complex brains and societies.';
exports.default = Human;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Human2 = require('./Human.js');

var _Human3 = _interopRequireDefault(_Human2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Male = (function (_Human) {
  _inherits(Male, _Human);

  function Male(name) {
    _classCallCheck(this, Male);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Male).call(this, 'Male'));

    _this.setName(name);
    return _this;
  }

  _createClass(Male, [{
    key: 'setName',
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: 'getName',
    value: function getName(name) {
      return this.name;
    }
  }]);

  return Male;
})(_Human3.default);

Male.desc = 'A male (♂) organism is the physiological sex that produces sperm. Each spermatozoon can fuse with a larger female gamete, or ovum, in the process of fertilization. A male cannot reproduce sexually without access to at least one ovum from a female, but some organisms can reproduce both sexually and asexually. Most male mammals, including male humans, have a Y chromosome, which codes for the production of larger amounts of testosterone to develop male reproductive organs.';
exports.default = Male;

},{"./Human.js":1}],3:[function(require,module,exports){
'use strict';

var _Male = require('./Male.js');

var _Male2 = _interopRequireDefault(_Male);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.dir(_Male2.default.desc);

var male1 = new _Male2.default('Unknown');
console.log(male1.getName());
male1.setName('Nicolas');
console.log(male1.getName());

},{"./Male.js":2}]},{},[1,2,3]);
