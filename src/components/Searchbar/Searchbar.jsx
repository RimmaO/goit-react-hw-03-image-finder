import { Component } from 'react';
import { toast } from 'react-hot-toast';

class Searchbar extends Component {
  state = { value: '' }; // value - те що вводимо в input

  handleChange = event => {
    this.setState({ value: event.target.value.toLowerCase() }); //БЕЗ деструктиризації
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.value.trim() === '') {
      return toast.error('Input is empty');
    }

    this.props.handleSearch(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header className="searchbar" onSubmit={this.handleSubmit}>
        <form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
