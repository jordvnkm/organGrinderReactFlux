const React = require("react");
const ReactDOM = require("react-dom");
const Dispatcher = require("./dispatcher/dispatcher");
const Organ = require("./components/organ");


document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Organ />, document.getElementById("root"));
});
