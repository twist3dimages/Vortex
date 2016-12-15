import { createAction } from 'redux-act';

export const loadCategories: any = createAction('LOAD_CATEGORIES',
(gameId: string, categories) => {
      return { gameId, categories };
    });

export const updateCategories: any = createAction('UPDATE_CATEGORIES',
(gameId: string, categories) => {
      return { gameId, categories };
    });