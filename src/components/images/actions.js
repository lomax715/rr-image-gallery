import imageApi from '../../services/imageApi';
import { IMAGE_LOAD } from './reducers';

export function loadImages(){
  return dispatch => {
    return imageApi.load()
      .then(images => {
        dispatch({
          type: IMAGE_LOAD,
          payload: images
        });
      });
  };

}