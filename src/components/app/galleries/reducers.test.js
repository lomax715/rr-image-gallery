import { galleries, GALLERY_ADD, GALLERY_REMOVE, GALLERY_UPDATE } from './reducers';

it('Has a default of empty array', () => {
  const state = galleries(undefined, {});
  expect(state).toEqual([]);
});

const galleryToAdd = {
  id: 123,
  text: 'Gallery Title'
};

it('Add Gallery', () => {
  const state = galleries([], { type: GALLERY_ADD, payload: galleryToAdd });
  expect(state).toEqual([galleryToAdd]);
});

it('Remove a note', () => {
  const state = galleries([galleryToAdd], { type: GALLERY_REMOVE, payload: 123 });
  expect(state).toEqual([]);
});

it('Updates a note', () => {
  const updated = {
    id: 123,
    text: 'I am an updated title'
  };

  const state = galleries([galleryToAdd], { type: GALLERY_UPDATE, payload: updated });
  expect(state).toEqual([{ ...galleryToAdd, ...updated }]);
});