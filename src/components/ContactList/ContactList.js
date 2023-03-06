import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import css from '../ContactList/ContactList.module.css';

export const ContactList = ({ onDeleteContact, contacts, filter }) => {
  const handleDelete = evt => {
    const deletingContactId = evt.target.id;
    onDeleteContact(deletingContactId);
  };

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
              onClick={handleDelete}
              className={clsx(css.deleteBtn)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
