import { ALBUM_ADD, ALBUM_REMOVE, ALBUM_UPDATE, ALBUM_LOAD } from './reducers';
import albumApi from '../../../services/albumApi';

export const doLoadAlbum = api => () => {
  return {
    type: ALBUM_LOAD,
    payload: api.load()
  };
};

export function loadAlbum() {
  return {
    type: ALBUM_LOAD,
    payload: albumApi.load()
  };
}

export function addAlbum(album) {
  return {
    type: ALBUM_ADD,
    payload: albumApi.add(album)
  };
}

export function updateAlbum(album) {
  return {
    type: ALBUM_UPDATE,
    payload: albumApi.update(album)
  };
}

export function removeAlbum(id) {
  return {
    type: ALBUM_REMOVE,
    payload: albumApi.remove(id).then(() => id)
  };
}