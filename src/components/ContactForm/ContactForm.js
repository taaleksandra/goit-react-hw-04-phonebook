import React from 'react';
import clsx from 'clsx';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import css from '../ContactForm/ContactForm.module.css';

export const ContactForm = ({ onAdd }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    let contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    form.reset();
    onAdd(contact);
  };

  return (
    <form onSubmit={handleSubmit} className={clsx(css.form)}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="tel">Number</label>
      <input
        id="tel"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={clsx(css.formBtn)}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func,
};
