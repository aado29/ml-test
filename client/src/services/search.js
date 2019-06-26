import axios from 'axios';

export default (phrase) => {
  return axios({
    url: 'https://reqres.in/api/users',
    method: 'get',
    params: {
      q: phrase,
    },
  })
    .then(data => data.data.data);
};