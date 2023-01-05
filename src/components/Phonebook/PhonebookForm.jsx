import React, { Component } from 'react';
import { ContactInputForm } from './Phonebook.styled';
import PropTypes from 'prop-types';


const shortid = require('shortid');
const inputNameId = shortid.generate();
const inputNumberId = shortid.generate();
const buttonId = shortid.generate();

export class PhonebookForm extends Component {
  state = {
  name: '',
  number: ''
  }

  handelInputChange = e => {
  const { name, value } = e.currentTarget;
  this.setState({[name]: value});
  
  };  

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();

  }

  reset = () => {
    this.setState({ name: '', number: '' });
  }
  render() {
    return (
  <ContactInputForm autoComplete='off' onSubmit={this.handleSubmit}>
<label htmlFor={inputNameId}>Name</label>
<input
  type="text"
  name="name"
  value={this.state.name}
  onChange={this.handelInputChange}
  id={inputNameId}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  />
<label htmlFor={inputNumberId}>Number</label>
<input
  type="tel"
  name="number"
  value={this.state.number}
  onChange={this.handelInputChange}
  id={inputNumberId}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
<button type="submi" id={buttonId}>Add contact</button>
</ContactInputForm>
    );
  }
}

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


