import React from 'react';
import '../style.css';

class Card extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				open: false,
				mouseOver: false
			};
			this._clickHandler = this._clickHandler.bind(this);
			this._mouseEnter = this._mouseEnter.bind(this);
			this._mouseLeave = this._mouseLeave.bind(this);
		}
	_mouseEnter(e) {
		e.preventDefault();
		if (this.state.mouseOver === false) {
			console.log(this.props.data.name);
			this.setState({
				mouseOver: true
			})
		}
	}
	_mouseLeave(e) {
		e.preventDefault();
		if (this.state.mouseOver === true) {
			this.setState({
				mouseOver: false
			})
		}
	}
	_clickHandler(e) {
		e.preventDefault();
		if (this.state.open === false) {
			this.setState({
				open: true
			});
		} else {
			this.setState({
				open: false
			});
		}
	}

	render() {
		let cardStyle = {};
			cardStyle = {
				width: '25vw',
				height: '25vw'
			};
		return (
			<div className="card">
                
				<img
					onMouseEnter={this._mouseEnter}
					onMouseLeave={this._mouseLeave}
					onClick={this._clickHandler}
					src={this.props.data.image}
					alt={this.props.data.name}
					style={cardStyle}
				/>
			</div>
		);
	}
}
export default Card;