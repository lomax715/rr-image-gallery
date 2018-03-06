import { albums, ALBUM_ADD, ALBUM_REMOVE, ALBUM_UPDATE } from './reducers';

it('Has a default of empty array', () => {
  const state = albums(undefined, {});
  expect(state).toEqual([]);
});

const albumToAdd = {
  id: 123,
  text: 'Album Title'
};

it('Add Album', () => {
  const state = albums([], { type: ALBUM_ADD, payload: albumToAdd });
  expect(state).toEqual([albumToAdd]);
});

it('Remove a note', () => {
  const state = albums([albumToAdd], { type: ALBUM_REMOVE, payload: 123 });
  expect(state).toEqual([]);
});

it('Updates a note', () => {
  const updated = {
    id: 123,
    text: 'I am an updated title'
  };

  const state = albums([albumToAdd], { type: ALBUM_UPDATE, payload: updated });
  expect(state).toEqual([{ ...albumToAdd, ...updated }]);
});