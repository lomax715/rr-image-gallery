import imageApi from '../../services/imageApi';
import { IMAGE_LOAD, IMAGE_ADD, IMAGE_DELETE } from './reducers';

export function loadImages(albumId){
  return {
    type: IMAGE_LOAD,
    payload: imageApi.load(albumId)
  };
}

export function addImage(imgObj){
  return {
    type: IMAGE_ADD,
    payload: imageApi.add(imgObj)
  };
}

export function removeImage(imageId){
  return {
    type: IMAGE_DELETE,
    payload: imageApi.remove(imageId).then(() => imageId)
  };
}