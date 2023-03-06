import React, { Component } from 'react';
import clsx from 'clsx';

import css from '../Filter/Filter.module.css';

export class Filter extends Component {
  handleChange = evt => {
    let searchingName = evt.target.value;
    return this.props.onChange(searchingName);
  };
  render() {
    return (
      <div className={clsx(css.filter)}>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          onChange={this.handleChange}
          id="filter"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </div>
    );
  }
}
