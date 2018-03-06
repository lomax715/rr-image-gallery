export const ALBUM_ADD = 'ALBUM_ADD';
export const ALBUM_UPDATE = 'ALBUM_UPDATE';
export const ALBUM_REMOVE = 'ALBUM_REMOVE';
// export const ALBUM_LOAD = 'ALBUM_LOAD';

export function albums(state = [], { type, payload }) {
  switch(type) {

    case ALBUM_ADD:
      return [
        ...state,
        payload
      ];

    case ALBUM_REMOVE:
      return state.filter(album => album.id !== payload);

    case ALBUM_UPDATE: {
      const index = state.findIndex(album => album.id === payload.id);
      return [
        ...state.slice(0, index),
        { ...state[index], ...payload },
        ...state.slice(index + 1)
      ];
    }

    default:
      return state;
  }
}