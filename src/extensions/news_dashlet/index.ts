import { IExtensionContext } from '../../types/IExtensionContext';

import { convertGameId } from '../nexus_integration/util/convertGameId';
import { activeGameId } from '../profile_management/selectors';

import Dashlet from './Dashlet';

function init(context: IExtensionContext): boolean {
  context.registerDashlet('Game News', 1, 3, 200, Dashlet, undefined, () => ({
    title: context.api.translate('News'),
    url: 'http://www.nexusmods.com/games/rss/news/',
    maxLength: 400,
  }));

  context.registerDashlet('New Files', 1, 2, 360, Dashlet,
    () => activeGameId(context.api.store.getState()) !== undefined,
    () => {
      const gameId = convertGameId(activeGameId(context.api.store.getState()));
      return {
        title: context.api.translate('New Files'),
        url: `http://www.nexusmods.com/${gameId}/rss/newtoday/`,
        maxLength: 400,
      };
  });

  return true;
}

export default init;