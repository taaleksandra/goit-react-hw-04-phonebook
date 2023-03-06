import React, { Component } from 'react';
import clsx from 'clsx';

import css from '../ContactList/ContactList.module.css';

export class ContactList extends Component {
  handleDelete = evt => {
    const { deleteContact } = this.props;
    const deletingContactId = evt.target.id;
    deleteContact(deletingContactId);
  };

  render() {
    const { contacts, filter } = this.props;
    return (
      <ul>
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <li key={contact.id} className={clsx(css.contact)}>
              <span>
                {contact.name}: {contact.number}
              </span>
              <button
                id={contact.id}
                type="button"
                onClick={this.handleDelete}
                className={clsx(css.deleteBtn)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    );
  }
}
