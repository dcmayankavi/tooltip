import React, { Component } from 'react';
import logo from './logo.svg';
import './Tooltip.css';

class Tooltip extends Component {
	
	constructor(){
		super();

		this.ToggleState = this.ToggleState.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);

		this.state = {
			activate : false
		}
	}

	ToggleState() {

		if ( ! this.state.activate ) {
			// attach/remove event handler
			document.addEventListener( 'click', this.handleOutsideClick, false );
		} else {
			document.removeEventListener( 'click', this.handleOutsideClick, false );
		}

		this.setState({
			activate : ! this.state.activate
		})
	}

	handleOutsideClick( event ) {
		// ignore clicks on the component itself
		if ( this.node.contains( event.target ) ) {
			return;
		}
		this.ToggleState();
	}

	render() {
		return (
			<div ref={node => { this.node = node; }} className={this.state.activate ? 'activate tooltip-wrapper' : 'tooltip-wrapper'}>
				<a href="#" className="tooltip-icon" onClick={this.ToggleState} >&#x2754;</a>
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