const KeyAction = require('../actions/key_actions');

const mapping = {
  65: "C5",
  83: "D5",
  68: "E5",
  70: "F5",
  74: "G5",
  75: "A5",
  76: "B5",
  186: "C6"
}

const addKeyListener = function(){
  let $doc = $(document);
  $doc.on("keyup", (event) => {
    event.preventDefault();
    KeyAction.keyUp(mapping[event.keyCode]);
  });

  $doc.on("keydown", (event) => {
    event.preventDefault();
    KeyAction.keyDown(mapping[event.keyCode]);
  });
}

module.exports = addKeyListener;
