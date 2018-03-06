import imageApi from '../../services/imageApi';
import { IMAGE_LOAD, IMAGE_ADD, IMAGE_DELETE } from './reducers';

export function loadImages(){
  return {
    type: IMAGE_LOAD,
    payload: imageApi.load()
  };
}

export function addImage(imgObj){
  return {
    type: IMAGE_ADD,
    payload: imageApi(imgObj)
  };
}

export function removeImage(imageId){
  return {
    type: IMAGE_DELETE,
    payload: imageApi(imageId).then(() => imageId)
  };
}