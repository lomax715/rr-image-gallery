import { album, ALBUM_LOAD, ALBUMS_LOAD } from './reducers';

it('default empty object', () => {
  const state = album(undefined, {});
  expect(state).toEqual({});
});

it('loads an album', () => {
  const albumToLoad = {
    id: 123,
    name: 'trees',
    images: []
  };
  const state = album({}, { type: ALBUM_LOAD, payload: albumToLoad });
  expect(state).toEqual(albumToLoad);
});