const albumId = '5a9defd1525d4500212b810a';
const URL = 'https://image-gallery-server.herokuapp.com/api';

function load() {
  return fetch(`${URL}/albums/${albumId}`)
    .then(response => response.json());
}

function getAllAlbums() {
  return fetch(`${URL}/albums`)
    .then(response => response.json());
}

function add(image) {
  return fetch(`${URL}/images`, {
    method: 'POST',
    body: JSON.stringify(image),
    headers: {
      'content-type': 'application/json'
    },
  }).then(response => response.json());
}

function remove(id) {
  return fetch(`${URL}/images/${id}`, {
    method: 'DELETE'
  }).then(response => response.json());
}


export default {
  add,
  load,
  getAllAlbums,
  remove
};