import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './style.scss'

class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}


	render(){
		return (
			<div className={styles.wrapper}>
			阿斯顿
			</div>
		)
	}

	// 生命周期
	componentDidMount(){
		
	}


}


const mapStateToProps = (state) =>({
	showBacktop: state.home.get('showBacktop')
})

const mapDispatchToProps = (dispatch) => ({
	

})


export default connect(mapStateToProps,mapDispatchToProps)(Home)