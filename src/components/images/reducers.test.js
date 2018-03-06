import { image, IMAGE_LOAD, IMAGE_ADD, IMAGE_DELETE } from './reducers';

describe('image reducers', () => {
 
  it('has empty array as default', () => {
    const state = image(undefined, {});
    expect(state).toEqual([]);
  });

  const imageToAdd = {
    title: 'image',
    url: 'url.com',
    album: 1,
    description: 'new image',
    id: 2
  };

  it('Adds image', () => {
    const state = image([], { type: IMAGE_ADD, payload: imageToAdd });
    expect(state).toEqual([imageToAdd]);
  });

  it('Deletes image', () => {
    const state = image([imageToAdd], { type: IMAGE_DELETE, payload: 2 });
    expect(state).toEqual([]);
  });

  it('loads image', () => {
    const state = image([], { type: IMAGE_LOAD, payload: imageToAdd });
    expect(state).toEqual(imageToAdd);
  });


});