"use strict";

var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("./database/index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.get("/contacts", async (req, res) => {
  try {
    const contacts = await (0, _index.default)('contacts');
    res.send(contacts);
  } catch (e) {
    res.status(e?.statusCode || 500).send(e?.message || 'Something went wrong');
  }
});
app.use("/", (req, res) => {
  res.send('welcome to the server home page');
});
app.listen(process.env.PORT || 8080, () => {
  console.log('backend running');
});