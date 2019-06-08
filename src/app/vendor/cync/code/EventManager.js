var EventManager = (function (scope) {
  function EventManager(Cync){
    this.state = {
      eventHistory: []
    };
    this.Cync = Cync;
  }

  var attachedEvents = {};

	EventManager.prototype.trigger = function(eventName, args){
    for(var key in attachedEvents) {
      if(key === eventName) {
        attachedEvents[key](args)
      }
    };
  }

  EventManager.prototype.receiver = function(eventName, callback){
    attachedEvents[eventName] = callback;
  }
  
  scope.EventManager = EventManager;
  return EventManager;
})(typeof exports === 'undefined' ? {} : exports);