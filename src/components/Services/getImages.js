const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '36648375-8210797ad77555d82512d73b2';
const getImages = searchText => {
  return fetch(
    `${BASE_URL}?q=${searchText}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};

export default getImages;
