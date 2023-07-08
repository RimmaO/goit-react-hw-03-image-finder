import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '36648375-8210797ad77555d82512d73b2';

export const getImages = async (searchText, page) => {
  const response = await axios(
    `?key=${API_KEY}&q=${searchText}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
  );
  return response.data;
};
