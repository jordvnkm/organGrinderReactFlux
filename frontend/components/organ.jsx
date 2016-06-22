const React = require("react");
const NoteKey = require("./note_key");
const addKeyListeners = require("../util/add_key_listeners");
const TONES = require("../constants/tones");

const Organ = React.createClass({
  componentDidMount: function(){
    addKeyListeners();
  },
  render: function(){
    let notes = Object.keys(TONES).map((noteName) => {
      return <NoteKey key={noteName} noteName={noteName}/>;
    });
    return (
      <div>
        {notes}
      </div>
    );
  }
});


module.exports = Organ;
