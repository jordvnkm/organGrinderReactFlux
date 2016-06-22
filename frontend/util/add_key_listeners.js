const KeyAction = require('../actions/key_actions');

const mapping = {
  65: "C5",
  83: "D5",
  68: "E5",
  70: "G5",
  74: "A5",
  75: "B5",
  76: "C6"
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
