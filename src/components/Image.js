import React from 'react';
import style from './Image.css';

class Image extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			width: '400px',
			height: '100%'
		}
	}
	
	render () {
		return (
		<div className={style.AppImage}>
			<img alt={this.props.alt} src={this.props.src} width={this.state.width} height={this.state.height} />
		</div>
		)
	};
}

export default Image;