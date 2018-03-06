const user = 'ivan';
const URL = `https://image-gallery-server.herokuapp.com/api/${user}/album`;

function load() {
  return fetch(URL)
    .then(response => response.json());
}

function add(gallery) {
  return fetch(URL, {
    method: 'POST',
    body: JSON.stringify(gallery),
    headers: {
      'content-type': 'application/json'
    },
  }).then(response => response.json());
}

function update(gallery) {
  return fetch(`${URL}/${gallery.id}`, {
    method: 'PUT',
    body: JSON.stringify(gallery),
    headers: {
      'content-type': 'application/json'
    },
  }).then(response => response.json());
}

function remove(id) {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE',
  }).then(response => response.json());
}

export default {
  load,
  add,
  update,
  remove
};