import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '36648375-8210797ad77555d82512d73b2';

export const getImages = async searchText => {
  const response = await axios(
    `?key=${API_KEY}&q=${searchText}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=12`
  );
  return response.data;
};
