const AppDispatcher = require("../dispatcher/dispatcher");
const Store = require("flux/utils").Store;

const KeyStore = new Store(AppDispatcher);

const _keys = [];

KeyStore.__onDispatch = function(payload){
  switch (payload.actionType){
  case ("keyDown"):
    addNote(payload.noteName);
    KeyStore.__emitChange();
    break;
  case ("keyUp"):
    removeNote(payload.noteName);
    KeyStore.__emitChange();
    break;
  }
};

KeyStore.all = function(){
  return _keys.slice();
}

const addNote = function(note){
  if (!_keys.includes(note)){
    _keys.push(note);
  }
}

const removeNote = function(note){
  for (let i = 0 ; i < _keys.length ; i++){
    if (_keys[i] === note){
      _keys.splice(i, 1);
    }
  }
}

module.exports = KeyStore;
