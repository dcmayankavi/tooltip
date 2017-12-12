import React, { Component } from 'react';
import logo from './logo.svg';
import './Tooltip.css';

class Tooltip extends Component {
	
	constructor(){
		super();

		this.ToggleState = this.ToggleState.bind(this);
		this.state = {
			activate : false
		}
	}

	ToggleState() {

		this.setState({
			activate : ! this.state.activate
		})
	}

	render() {
		return (
			<div className={this.state.activate ? 'activate tooltip-wrapper' : 'tooltip-wrapper'}>
				<a href="#" className="tooltip-icon" onClick={this.ToggleState} >&#65311;</a>
				<div className="tooltip-content-wrapper">
					<div className="tooltip-title">{this.props.title}</div>
					<div className="tooltip-content">
						{this.props.children}
					</div>
					<span className="tooltip-arrow-icon">&#9654;</span>
				</div>
			</div>
		);
	}
}

export default Tooltip;