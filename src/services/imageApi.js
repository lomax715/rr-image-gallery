const URL = 'https://image-gallery-server.herokuapp.com/api';

// Image

// title (required)
// url (required)
// album (the id of your album, also required)
// description (optional)
// Routes

// POST /api/albums/ { name } return your new album with id
// GET /api/albums/<your-id> return { name, images: [<image-object>] }
// POST /api/images { title, description, url, album: <your-album-id> } return your new image object with id
// DELETE /api/images/<image-id-to-delete>

// GET /api/albums/ get everybody's albums

//ablum id
// {
//   "__v": 0,
//   "name": "heiner",
//   "_id": "5a9ec831d22df00021b2c649",
//   "id": "5a9ec831d22df00021b2c649"
// }
const albumId = '5a9ec831d22df00021b2c649'

function load(albumId){
  return fetch(`${URL}/albums/${albumId}`)
    .then(response => response.json());
}

function addImage(imgObj){
  imgObj.album = albumId;
  return fetch(`${URL}/images`, {
    method: 'POST',
    body: JSON.stringify(imgObj),
    headers: {
      'content-type': 'application/json'
    },

  }).then(response => response.json());
}

function removeImage(imageId){
  return fetch(`${URL}/${imageId}`, {
    method: 'DELETE'
  }).then(response => response.json());
}

export default {
  load,
  addImage,
  removeImage
};