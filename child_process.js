// Generated by CoffeeScript 1.8.0

/* (C) 2014 Narazaka : Licensed under The MIT License - http://narazaka.net/license/MIT?2014 */
var MiyoFilters, child_process;

if (typeof require !== "undefined" && require !== null) {
  child_process = require('child_process');
}

if (typeof MiyoFilters === "undefined" || MiyoFilters === null) {
  MiyoFilters = {};
}

MiyoFilters.spawn = {
  type: 'through',
  filter: function(argument, request, id, stash) {
    var args, command, options;
    command = this.property(argument.spawn, 'command', request, id, stash);
    args = this.property(argument.spawn, 'args', request, id, stash);
    options = this.property(argument.spawn, 'options', request, id, stash);
    child_process.spawn(command, args, options);
    return argument;
  }
};

MiyoFilters.exec = {
  type: 'through',
  filter: function(argument, request, id, stash) {
    var args, callback, command;
    command = this.property(argument.exec, 'command', request, id, stash);
    args = this.property(argument.exec, 'args', request, id, stash);
    callback = this.property(argument.exec, 'callback', request, id, stash);
    child_process.exec(command, args, callback);
    return argument;
  }
};

MiyoFilters.execFile = {
  type: 'through',
  filter: function(argument, request, id, stash) {
    var args, callback, file;
    file = this.property(argument.execFile, 'file', request, id, stash);
    args = this.property(argument.execFile, 'args', request, id, stash);
    callback = this.property(argument.execFile, 'callback', request, id, stash);
    child_process.execFile(file, args, callback);
    return argument;
  }
};

if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
  module.exports = MiyoFilters;
}

//# sourceMappingURL=child_process.js.map
