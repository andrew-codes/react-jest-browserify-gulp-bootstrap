/** @jsx React.DOM */
var CheckboxWithLabel = require('./views/CheckboxWithLabel');
var react = require('react');
var el = document.getElementsByTagName('body')[0];
react.renderComponent(<CheckboxWithLabel labelOn="On" labelOff="Off" />, el);
