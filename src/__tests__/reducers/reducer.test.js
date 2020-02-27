import reducer from './../../reducers/reducer';

describe('reducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(reducer({}, { type: null})).toEqual({});
  });
});
