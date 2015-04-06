var Dispatcher = require('./dispatcher');
var ObjectAssign = require('react/lib/Object.assign');

var AppDispatcher = ObjectAssign(Dispatcher.prototype, {
  handleViewAction: function(action){
    console.log('action', action);
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }
});

module.exports = AppDispatcher;
