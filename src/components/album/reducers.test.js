import { albums, ALBUM_LOAD } from './reducers';

it.skip('Has default empty array', () => {
  const state = albums(undefined, {});
  expect(state).toEqual([]);
});

const albumToLoad = {
  id: 111,
  name: 'Michael\'s Album',
  images: []
};

it('Loads album from API', () => {
  const state = albums([], { type: ALBUM_LOAD, payload: albumToLoad });
  expect(state).toEqual(albumToLoad);
});