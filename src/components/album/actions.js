import { ALBUM_LOAD, IMAGE_ADD, IMAGE_DELETE } from './reducers';
import galleryApi from '../../services/galleryApi';


export function loadAlbum() {
  return {
    type: ALBUM_LOAD,
    payload: galleryApi.load()
  };
}

export function addImage() {
  return {
    type: IMAGE_ADD,
    payload: galleryApi.add()
  };
}

export function deleteImage() {
  return {
    type: IMAGE_DELETE,
    payload: galleryApi.remove()
  };
}
