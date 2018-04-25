import React, {Component} from 'react';
import './Button.css';

class Button extends Component{
	render(){
		return (
			<button onClick={this.props.action}>{this.props.name}</button>
		);
	}
}

export default Button;