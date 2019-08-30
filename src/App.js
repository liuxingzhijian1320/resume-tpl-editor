import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from './store'

import Home from './pages/home/home'


class App extends Component {
	render() {
		return (
				<Provider store={store}>
					<BrowserRouter>
						<div>
							<Route path='/' exact component={Home}></Route>
						</div>
					</BrowserRouter>
				</Provider>
			)
	}
}

export default App


