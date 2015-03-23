'use strict';

var Reflux = require('reflux');

var actions = Reflux.createActions({
  // Authentication based actions
  'userLogin': {},
  'userLogout': {},

  // Map state
  'baseLayerChange': {},
  'geolocated': {},

  // Application settings
  'sidebarToggled': {},
  'editorPreference': {},

  // Application management
  'uploadTasks': {},

  // Modals
  'openSettings': {},
  'openUpload': {},

  // Dialogs
  'errorDialog': {},

  // Manages to-fix tasks
  'taskEdit': {},
  'taskData': {},
  'taskDone': {},
  'taskActivity': {},
  'taskActivityLoaded': {},

  // common buttons
  'taskSkip': {}
});

module.exports = actions;
