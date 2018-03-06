const ID = '5a9edf84d22df00021b2c65b';
const URL = `https://image-gallery-server.herokuapp.com/api/album/${ID}`;

function load() {
  return fetch(URL)
    .then(response => response.json());
}

export default {
  load
};
