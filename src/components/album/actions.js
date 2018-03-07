import { ALBUM_LOAD } from './reducers';
import galleryApi from '../../services/galleryApi';

export function loadAlbum() {
  return dispatch => {
    return galleryApi.load()
      .then(album => {
        dispatch({
          type: ALBUM_LOAD,
          payload: album
        });
      });
  };
}