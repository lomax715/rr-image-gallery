const user = 'ivan';
const URL = `https://image-gallery-server.herokuapp.com/api/${user}/album/`;

const doFetch = (url, options = {}) => {
  return fetch(url, options)
    .then(response => {
      if(response.ok) return response.json();

      return response.json().then(body => {
        if(body.message) throw body.message;
        if(body.error) throw body.error;
        throw body;
      });
    });
};

function load() {
  return doFetch(URL);
}

function add(album) {
  return doFetch(URL, {
    method: 'POST',
    body: JSON.stringify(album),
    headers: {
      'content-type': 'application/json'
    },
  });
}

function update(album) {
  return doFetch(`${URL}/albums/${album.id}`, {
    method: 'PUT',
    body: JSON.stringify(album),
    headers: {
      'content-type': 'application/json'
    },
  });
}

function remove(id) {
  return doFetch(`${URL}/albums/${id}`, {
    method: 'DELETE',
  });
}

export default {
  load,
  add,
  update,
  remove
};