"use strict";

var _express = _interopRequireDefault(require("express"));
var _contacts = _interopRequireDefault(require("./routers/contacts"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use('/contacts', _contacts.default);
app.use("/", (req, res) => {
  res.send('welcome to the server home page');
});
app.listen(process.env.PORT || 8080, () => {
  console.log('backend running');
});