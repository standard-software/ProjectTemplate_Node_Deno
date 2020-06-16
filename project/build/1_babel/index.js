"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = test;
exports.run = run;
exports["default"] = exports.test2 = exports.test1 = void 0;

var _lib = _interopRequireDefault(require("./lib1.js"));

var _lib2 = _interopRequireDefault(require("./lib2.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// support
//  const project = require(
function test() {
  return 'result test';
}

function run() {
  console.log(_lib["default"].test1());
  console.log(_lib2["default"].test2());
  console.log(test());
}

run();
var test1 = _lib["default"].test1;
exports.test1 = test1;
var test2 = _lib2["default"].test2; // support
//  const { default: project } = require(

exports.test2 = test2;

var _default = _objectSpread(_objectSpread(_objectSpread({}, _lib["default"]), _lib2["default"]), {}, {
  test: test,
  run: run
});

exports["default"] = _default;