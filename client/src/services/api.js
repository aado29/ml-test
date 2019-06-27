import axios from 'axios';

export const search = (phrase) => {
  return axios({
    url: 'http://localhost:3001/api/items',
    method: 'get',
    params: {
      q: phrase,
    },
  })
    .then(data => data.data.items);
};

export const getProduct = (productId) => {
  return axios({
    url: `http://localhost:3001/api/items/${productId}`,
    method: 'get'
  })
    .then(data => data.data.item)
}

export default {
  search,
  getProduct,
};