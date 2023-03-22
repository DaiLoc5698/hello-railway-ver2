"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _database = _interopRequireDefault(require("../database"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const create = async payload => {
  try {
    const id = await (0, _database.default)('contacts').insert(payload);
    return id[0];
  } catch (e) {
    throw e;
  }
};
const update = async (id, payload) => {
  try {
    await (0, _database.default)('contacts').where({
      id: id
    }).update(payload);
    const contact = await (0, _database.default)('contacts').where({
      id: id
    });
    return contact;
  } catch (e) {
    throw e;
  }
};
const del = async id => {
  try {
    await (0, _database.default)('contacts').where({
      id: id
    }).del();
    return id;
  } catch (e) {
    throw e;
  }
};
const gets = async () => {
  try {
    const contacts = await (0, _database.default)('contacts');
    return contacts;
  } catch (e) {
    throw e;
  }
};
const get = async id => {
  try {
    const contact = await (0, _database.default)('contacts').where({
      id: id
    });
    return contact;
  } catch (e) {
    throw e;
  }
};
var _default = {
  get,
  del,
  gets,
  create,
  update
};
exports.default = _default;