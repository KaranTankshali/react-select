import React from 'react';

const Dropdown = React.createClass({
	propTypes: {
		children: React.PropTypes.node,
	},
	render () {
		return this.props.children;
	}
});

module.exports = Dropdown;
