import { GALLERY_ADD, GALLERY_REMOVE, GALLERY_UPDATE, GALLERY_LOAD } from './reducers';
import galleryApi from '../../../services/galleryApi';

export const doLoadGallery = api => () => {
  return {
    type: GALLERY_LOAD,
    payload: api.load()
  };
};

export function loadGallery() {
  return {
    type: GALLERY_LOAD,
    payload: galleryApi.load()
  };
}

export function addGallery(gallery) {
  return {
    type: GALLERY_ADD,
    payload: galleryApi.add(gallery)
  };
}

export function updateGallery(gallery) {
  return {
    type: GALLERY_UPDATE,
    payload: galleryApi.update(gallery)
  };
}

export function removeGallery(id) {
  return {
    type: GALLERY_REMOVE,
    payload: galleryApi.remove(id).then(() => id)
  };
}