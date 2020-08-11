
 import React, { Component } from 'react';
import Contacts from './contacts';
import './App.css';


class App extends Component {
      state = {
		loading:false,
        contacts: [],
	  }

		componentDidMount() {
			fetch('https://jsonplaceholder.typicode.com/users')
				.then(res => res.json())
				.then((data) => {
					this.setState({ contacts: data,
									loading:true,
					})
				})
				.catch(console.log)
		}
		render() {
			var { loading,contacts } = this.state;
			if (!loading) {
				return <div> Loading...</div>
			}
			else {
						return (
							<div>
								<Contacts contacts={contacts} />
							</div>
						)
				}
			
			}
		
	
}
export default App;