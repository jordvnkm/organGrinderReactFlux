const KeyStore = require("../stores/key_store.js");


const Track = function(attributes) {
  this.name = attributes.name;
  this.roll = attributes.roll;

}

Track.prototype.startRecording = function(){
  this.startTime = new Date();
}

Track.prototype.addNotes = function(myNotes){
  this.roll.push({
    timeSlice: new Date() - this.startTime,
    notes: myNotes;
  });
}

Track.prototype.stopRecording = function(){
  this.addNotes([]);
}


module.exports = Track;
