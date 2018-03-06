export const GALLERY_ADD = 'GALLERY_ADD';
export const GALLERY_UPDATE = 'GALLERY_UPDATE';
export const GALLERY_REMOVE = 'GALLERY_REMOVE';
// export const GALLERY_LOAD = 'GALLERY_LOAD';

export function galleries(state = [], { type, payload }) {
  switch(type) {

    case GALLERY_ADD:
      return [
        ...state,
        payload
      ];

    case GALLERY_REMOVE:
      return state.filter(gallery => gallery.id !== payload);

    case GALLERY_UPDATE: {
      const index = state.findIndex(gallery => gallery.id === payload.id);
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