import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

import css from '../components/App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  const handleAddContact = value => {
    const existingContact = contacts.find(
      contact => contact.name === value.name
    );
    if (existingContact) {
      alert(`${value.name} is already in contacts`);
      return;
    }

    setContacts(contacts.concat(value));
  };

  const handleFindContact = value => {
    setFilter(value);
  };

  const handleDeleteContact = value => {
    const newList = contacts.filter(contact => contact.id !== value);
    setContacts(newList);
  };

  useEffect(() => {
    const contactsStringified = JSON.stringify(contacts);
    window.localStorage.setItem('contacts', contactsStringified);
  }, [contacts]);

  return (
    <div className={clsx(css.phonebook)}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <h1>Contacts</h1>
      <Filter onFind={handleFindContact} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
