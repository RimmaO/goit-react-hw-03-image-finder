import PropTypes from 'prop-types';

import { Component } from 'react';
import { toast } from 'react-hot-toast';
import { Button, Form, Header, Input, Span } from './Searchbar.styled';
import { BiSearchAlt } from 'react-icons/bi';

class Searchbar extends Component {
  state = { value: '' }; // value - те що вводимо в input

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.value.trim() === '') {
      return toast.error('Input is empty');
    }
    const query = this.state.value.toLowerCase();
    this.props.onSubmit(query);
  };

  render() {
    return (
      <Header className="searchbar">
        <Form className="form" onSubmit={this.handleSubmit}>
          <Button width="48" height="48" type="submit" className="button">
            <BiSearchAlt size="36" />
            <Span className="button-label">Search</Span>
          </Button>

          <Input
            className="input"
            type="text"
            id="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
