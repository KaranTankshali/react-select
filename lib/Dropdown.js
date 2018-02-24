'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = _react2.default.createClass({
	displayName: 'Dropdown',

	propTypes: {
		children: _react2.default.PropTypes.node
	},
	render: function render() {
		return this.props.children;
	}
});

module.exports = Dropdown;