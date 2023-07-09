import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

import { Component } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Wrap } from './App.styled';
import { getImages } from './Services/API';

export class App extends Component {
  state = {
    searchText: '',
    images: [],
    currentPage: 1,
    isLoading: false,
    totalPages: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchText !== this.state.searchText ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.addImages();
    }
  }

  handleSearch = query => {
    this.setState({ searchText: query, images: [], currentPage: 1 });
  };

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  addImages = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await getImages(
        this.state.searchText,
        this.state.currentPage
      );

      if (data.hits.length === 0) {
        return toast.error('Sorry, image not found');
      }

      this.setState(state => ({
        images: [...state.images, ...data.hits],
        isLoading: false,
        error: '',
      }));
    } catch (error) {
      this.setState({ error: 'Something wrong!' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <Wrap>
        <Toaster />
        <Searchbar onSubmit={this.handleSearch} />
        {this.state.images.length > 0 ? (
          <ImageGallery images={this.state.images} />
        ) : (
          <p>Image gallery is empty</p>
        )}
        {this.state.images.length > 0 &&
          this.state.totalPages !== this.state.currentPage &&
          !this.state.isLoading && <Button onClick={this.loadMore} />}
        {this.state.isLoading && <Loader />}
      </Wrap>
    );
  }
}
