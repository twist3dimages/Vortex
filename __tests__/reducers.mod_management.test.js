import { settingsReducer } from '../src/extensions/mod_management/reducers/settings';
import { modsReducer } from '../src/extensions/mod_management/reducers/mods';

describe('setPath', () => {
  it('set a path (base, download or installation) for storing things', () => {
    let input = { 'paths': { gameId1: { key1: 'path' } } };
    let result = settingsReducer.reducers.SET_MOD_PATH(input, { gameId: 'gameId1', key: 'key1', path: 'New path' });
    expect(result).toEqual({ 'paths': { gameId1: { key1: 'New path' } } });
  });
  it('fail if the game doesn\'t exist', () => {
    let input = { 'paths': { gameId1: { key1: 'path' } } };
    let result = settingsReducer.reducers.SET_MOD_PATH(input, { gameId: 'gameId2', key: 'key1', path: 'New path' });
    expect(result).toEqual({ 'paths': { gameId1: { key1: 'New path' } } });
  });
});

describe('setActivator', () => {
  it('set the activator to use for this game', () => {
    let input = { 'activator': { gameId1: { activatorId1: 'id' } } };
    let result = settingsReducer.reducers.SET_ACTIVATOR(input, { gameId: 'gameId1', activatorId: 'activatorId1' });
    expect(result).toEqual({ 'activator': { gameId1: 'activatorId1' } });
  });
  it('fail if the game doesn\'t exist', () => {
    let input = { 'activator': { gameId1: { activatorId1: 'id' } } };
    let result = settingsReducer.reducers.SET_ACTIVATOR(input, { gameId: 'gameId2', activatorId: 'activatorId1' });
    expect(result).toEqual({ 'activator': { gameId1: 'activatorId1' } });
  });
});

describe('removeMod', () => {
  it('remove the mod', () => {
    let input = { gameId1: { modId1: 'id' } };
    let result = modsReducer.reducers.REMOVE_MOD(input, { gameId: 'gameId1', modId: 'modId1' });
    expect(result).toEqual({ gameId1: {} });
  });
  it('fail if the game doesn\'t exist', () => {
    let input = { gameId1: { modId1: 'id' } };
    let result = modsReducer.reducers.REMOVE_MOD(input, { gameId: 'gameId2', modId: 'modId1' });
    expect(result).toEqual({ gameId1: {} });
  });
});

describe('setModInstallationPath', () => {
  it('set the mod installation path', () => {
    let input = { gameId1: { modId1: { 'installationPath': { installPath: 'path' } } } };
    let result = modsReducer.reducers.SET_MOD_INSTALLATION_PATH(input, { gameId: 'gameId1', modId: 'modId1', installPath: 'new path' });
    expect(result).toEqual({ gameId1: { modId1: { 'installationPath': 'new path' } } });
  });
  it('fail if the game doesn\'t exist', () => {
    let input = { gameId1: { modId1: { 'installationPath': { installPath: 'path' } } } };
    let result = modsReducer.reducers.SET_MOD_INSTALLATION_PATH(input, { gameId: 'gameId2', modId: 'modId1', installPath: 'new path' });
    expect(result).toEqual({ gameId1: { modId1: { 'installationPath': 'new path' } } });
  });
});

describe('setModAttribute', () => {
  it('set the mod attribute', () => {
    let input = { gameId1: { modId1: { 'attributes': { attribute1: 'value' } } } };
    let result = modsReducer.reducers.SET_MOD_ATTRIBUTE(input, { gameId: 'gameId1', modId: 'modId1', attribute: 'attribute1', value: 'new value' });
    expect(result).toEqual({ gameId1: { modId1: { 'attributes': { attribute1: 'new value' } } } });
  });
  it('fail if the game doesn\'t exist', () => {
    let input = { gameId1: { modId1: { 'attributes': { attribute1: 'value' } } } };
    let result = modsReducer.reducers.SET_MOD_ATTRIBUTE(input, { gameId: 'gameId2', modId: 'modId1', attribute: 'attribute1', value: 'new value' });
    expect(result).toEqual({ gameId1: { modId1: { 'attributes': { attribute1: 'new value' } } } });
  });
});

describe('setModState', () => {
  it('set the mod state', () => {
    let input = { gameId1: { modId1: { 'state': 'value' } } };
    let result = modsReducer.reducers.SET_MOD_STATE(input, { gameId: 'gameId1', modId: 'modId1', modState: 'new value' });
    expect(result).toEqual({ gameId1: { modId1: { 'state': 'new value' } } });
  });
  it('fail if the game doesn\'t exist', () => {
    let input = { gameId1: { modId1: { 'state': 'value' } } };
    let result = modsReducer.reducers.SET_MOD_STATE(input, { gameId: 'gameId2', modId: 'modId1', modState: 'new value' });
    expect(result).toEqual({ gameId1: { modId1: { 'state': 'new value' } } });
  });
});

describe('addMod', () => {
  it('add the mod', () => {
    let input = { gameId1: { modId1: {state: '', id: '', installationPath: '', attributes: {},} } };
    let mod = {
      state: 'installing',
      id: 'modId1',
      installationPath: 'path',
      attributes: {},
    };
    let result = modsReducer.reducers.ADD_MOD(input, { gameId: 'gameId1', mod: mod });
    expect(result).toEqual({ gameId1: {modId1: mod} });
  });
  it('fail if the game doesn\'t exist', () => {
    let input = { gameId1: { modId1: {state: '', id: '', installationPath: '', attributes: {},} } };
    let mod = {
      state: 'installing',
      id: 'modId1',
      installationPath: 'path',
      attributes: {},
    };
    let result = modsReducer.reducers.ADD_MOD(input, { gameId: 'gameId2', mod: mod });
    expect(result).toEqual({ gameId1: {modId1: mod} });
  });
});