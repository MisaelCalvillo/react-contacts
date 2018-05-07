import React, { Component } from 'react';

class ListContacts extends Component {
  render() {
    console.log('Props', this.props);
    return (
      <ol className='contact-list'>
        {this.props.contacts.map((contact) => (
          <li key={contact.id} className='contact-list-item'>  
            <div
              className='contact-avatar'
              style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}
            ></div>
          </li>
        ))}
      </ol>
    );
  }
}

export default ListContacts;