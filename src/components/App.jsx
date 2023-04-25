import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook/Phonebook';
import { PhoneBookList } from './PhoneBookList/PhoneBookList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmit = event => {
    const id = nanoid();
    const number = event.number;
    const name = event.name;

    const contactsLists = [...this.state.contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ name, id, number });
    }

    this.setState({ contacts: contactsLists });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Phonebook handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <PhoneBookList
          contacts={this.state.contacts}
          number={this.state.number}
        />
      </div>
    );
  }
}
