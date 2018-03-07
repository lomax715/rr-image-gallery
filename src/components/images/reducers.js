export const IMAGE_LOAD = 'IMAGE_LOAD';
export const IMAGE_ADD = 'IMAGE_ADD';
export const IMAGE_DELETE = 'IMAGE_DELETE';
export const ALBUM_LOAD = 'ALBUM_LOAD';


export function image(state = [], { type, payload }){
  switch(type){
    case IMAGE_LOAD:
      return payload.images;

    case IMAGE_ADD:
      return [
        ...state,
        payload
      ];

    case IMAGE_DELETE:
      return state.filter(image => image.id !== payload);

    default:
      return state;
  }
}

export function album(state = [], { type }){
  switch(type){
    case ALBUM_LOAD:
      return [
        ...state,
      ];

    default:
      return state;
  }
}