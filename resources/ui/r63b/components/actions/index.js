import React, { Component } from 'react'
import { fullScreen } from '../../utils/class.functions'

export default class Actions extends Component {
	
	constructor(props) {
		super(props)

		this.state = {
			fullScreen: false
		}
	}

	toggleFullscreen = (event) => {
		fullScreen(this.state.fullScreen)
		this.state.fullScreen = this.state.fullScreen ? this.setState({ fullScreen: false }) : this.setState({ fullScreen: true })
	}
 
	render() {
		return (
			<div className='actions'>

				<button className='action-item action-item-arrow'>
					<i className="icon icon-habbo"></i>
					<span className="action-item-expand">WEB</span>
				</button>

				<button className='action-item' onClick={this.toggleFullscreen}>
					<i className="icon icon-fs"></i>
				</button>
			</div>
		)
	}
}