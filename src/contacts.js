
import React from 'react';
import './App.css';


const Contacts = ({ contacts }) => {
	return (
		<div>
			<center><h1>Contact List</h1></center>
			{contacts.map((contact) => (
				<div key={contact.id} className="card">
					<div className="card-body">
						<h5 className="card-title">{contact.name}</h5>
						<h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
						<p className="card-text">{contact.company.bs}</p>
					</div>
				</div>
			))}
		</div>
	)
};

export default Contacts