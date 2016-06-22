const React = require("react");
const TONES = require("../constants/tones");
const Note = require("../util/note");
const KeyStore = require("../stores/key_store");

const NoteKey = React.createClass({
  getInitialState: function(){
    return {playingState: "notPlaying"};
  }, 
  componentDidMount: function(){
    let frequency = TONES[this.props.noteName];
    this.note = new Note(frequency);
    this.listener = KeyStore.addListener(this.keyStoreChange);
  },

  keyStoreChange: function(){
    let notes = KeyStore.all();
    if (notes.includes(this.props.noteName)){
      this.note.start();
      this.setState({playingState: "playing"})
    } else {
      this.note.stop();
      this.setState({playingState: "notPlaying"})
    }
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },

  render: function(){
    let classname = "noteKey " + this.state.playingState;
    console.log(classname);
    return (
      <div className={classname}  id={this.props.noteName}>{this.props.noteName}</div>
    )
  }
});

module.exports = NoteKey;
