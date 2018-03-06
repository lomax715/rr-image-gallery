export const ALBUM_LOAD = 'ALBUM_LOAD';

export function albums(state = [], { type, payload }) {
  switch(type) {
    case ALBUM_LOAD:
      return payload;
    default:
      return state;
  }
}
