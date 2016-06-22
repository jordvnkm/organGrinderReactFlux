const React = require("react");
const TONES = require("../constants/tones");
const Note = require("../util/note");
const KeyStore = require("../stores/key_store");

const NoteKey = React.createClass({
  componentDidMount: function(){
    let frequency = TONES[this.props.noteName];
    this.note = new Note(frequency);
    this.listener = KeyStore.addListener(this.keyStoreChange);
  },

  keyStoreChange: function(){
    let notes = KeyStore.all();
    if (notes.includes(this.props.noteName)){
      this.note.start();
    } else {
      this.note.stop();
    }
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },

  render: function(){
    return (
      <div>{this.props.noteName}</div>
    )
  }
});

module.exports = NoteKey;
