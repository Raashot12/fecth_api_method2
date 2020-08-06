
 import React, { Component } from 'react';
import Contacts from './contacts';
import './App.css';


class App extends Component {
      state = {
        contacts: []
      }
		componentDidMount() {
			fetch('https://jsonplaceholder.typicode.com/users')
				.then(res => res.json())
				.then((data) => {
					this.setState({ contacts: data })
				})
				.catch(console.log)
		}
		render() {
		return (
			<Contacts contacts={this.state.contacts} />
		)
	}
}
export default App;