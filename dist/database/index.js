"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _knex = _interopRequireDefault(require("knex"));
var _knexfile = _interopRequireDefault(require("./knexfile"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const env = process.env.NODE_ENV || 'development';
const options = _knexfile.default[env];
console.log('>>>>>>', options);
var _default = (0, _knex.default)(options);
exports.default = _default;