import { IModInfo, IReference } from 'modmeta-db';
import { safeCreateAction } from 'nmm-api';

export const setSource = safeCreateAction('SET_MOD_CONNECTION_SOURCE',
  (id: string, pos: { x: number, y: number }) => ({ id, pos }));

export const setTarget = safeCreateAction('SET_MOD_CONNECTION_TARGET',
  (id: string, pos: { x: number, y: number }) => ({ id, pos }));

export const setCreateRule = safeCreateAction('SET_MOD_CREATE_RULE',
  (gameId: string, modId: string, reference: IReference, defaultType: string) =>
    ({ gameId, modId, reference, type: defaultType }));

export const closeDialog = safeCreateAction('CLOSE_MOD_DEPENDENCY_DIALOG');

export const setType = safeCreateAction('SET_MOD_RULE_TYPE');