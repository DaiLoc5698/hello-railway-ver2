"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _contacts = _interopRequireDefault(require("../controllers/contacts"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.get('/', async (req, res) => {
  try {
    const contacts = await _contacts.default.gets();
    res.send(contacts);
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong');
  }
});
router.post('/', async (req, res) => {
  try {
    const payload = req.body;
    const id = await _contacts.default.create(payload);
    res.send({
      id
    });
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong');
  }
});
router.get('/:id', async (req, res) => {
  try {
    const contact = await _contacts.default.get(req.params.id);
    res.send({
      contact
    });
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong');
  }
});
router.put('/:id', async (req, res) => {
  try {
    const payload = req.body;
    const contactId = req.params.id;
    const contact = await _contacts.default.update(contactId, payload);
    res.send({
      contact
    });
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong');
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const contactId = req.params.id;
    const contact = await _contacts.default.del(contactId);
    res.send({
      contact
    });
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong');
  }
});
var _default = router;
exports.default = _default;