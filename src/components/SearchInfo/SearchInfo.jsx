import ErrorCard from 'components/ErrorCard/ErrorCard';
import getImages from 'components/Services/getImages';
import { Component } from 'react';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

class SearchInfo extends Component {
  state = {
    images: null,
    // isLoading: false,
    error: '',
    status: STATUS.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ status: STATUS.PENDING });
      getImages(this.props.searchText)
        .then(response => response.json())
        .then(data => {
          if (data.status === 'ok')
            this.setState({ data: data.hits, status: STATUS.RESOLVED });
          else return Promise.reject(data.message);
        })
        .catch(error => {
          this.setState({ error, status: STATUS.REJECTED });
        });
      // .finally(() => {
      //   this.setState({ isLoading: false });
      // });
    }
  }
  //     .then(response => {
  //     if (!response.ok) {
  //       throw new Error(response.statusText);
  //     }
  //     return response.json();
  //   });
  render() {
    if (this.state.status === STATUS.PENDING)
      return this.state.isLoading && <div>Loading...</div>;
    else if (this.state.status === STATUS.RESOLVED) return <></>;
    else if (this.state.status === STATUS.REJECTED)
      return <ErrorCard>{this.state.error}</ErrorCard>;
    //   return (
    //     <>
    //       {this.state.error && <ErrorCard>{this.state.error}</ErrorCard>}
    //       {this.state.isLoading && <div>Loading...</div>}
    //     </>
    //   );
  }
}

export default SearchInfo;
