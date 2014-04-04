define(function (require) {
  
  "use strict";
  
  var $                   = require('jquery'),
      _                   = require('underscore'),
      Backbone            = require('backbone'),
      Marionette          = require('marionette'),
      FormView            = require('marionette-formview'),
      Settings            = require('app/models/settings'),
      tpl                 = require('text!tpl/forms/settings.html');
  
  return FormView.extend({
    template: _.template(tpl),
    
    fields: {
      path: {
        el: ".path",
        required: "Please enter a valid path.",
        validations: {
          email: "Please enter a valid path."
        }
      }
    },
    
    initialize: function () {
      var self = this;
    }
  });
  
});