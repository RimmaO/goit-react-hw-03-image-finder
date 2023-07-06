import { Component } from 'react';
import { Toaster } from 'react-hot-toast';

import Searchbar from './Searchbar/Searchbar';
import SearchInfo from './SearchInfo/SearchInfo';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = { searchText: '', images: [] };

  handleSearch = searchText => {
    this.setState({ searchText });
  };

  render() {
    return (
      <>
        <Toaster />
        <Searchbar handleSearch={this.handleSearch} />
        <SearchInfo searchText={this.state.searchText} />
        <ImageGallery images={this.state.images} />
      </>
    );
  }
}
