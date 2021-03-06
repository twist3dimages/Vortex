import { IExtensionContext } from '../../types/IExtensionContext';
import { activeGameId } from '../../util/selectors';

import settingsReducer from './reducers';
import Starter from './Starter';

function init(context: IExtensionContext): boolean {
  context.registerDashlet('Starter', 2, 2, 100, Starter,
                          undefined, undefined, undefined);

  context.registerReducer(['settings', 'interface'], settingsReducer);

  return true;
}

export default init;
