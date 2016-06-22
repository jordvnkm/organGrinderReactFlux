const AppDispatcher = require("../dispatcher/dispatcher");



const KeyActions = {
  keyDown: function(noteName){
    AppDispatcher.dispatch({
      actionType: "keyDown",
      noteName: noteName
    });
  },
  keyUp: function(noteName){
    AppDispatcher.dispatch({
      actionType: "keyUp",
      noteName: noteName
    });
  }
};


module.exports = KeyActions;
