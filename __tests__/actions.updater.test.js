import * as actions from '../src/extensions/updater/actions';

describe('setUpdateChannel', () => {
  it('sets the Update Channel', () => {
    expect(actions.setUpdateChannel('new value')).toEqual({
      type: 'SET_UPDATE_CHANNEL',
      payload: 'new value' ,
    });
  });
});
