import safeCreateAction from '../../../actions/safeCreateAction';

/**
 * change a path (base, download or installation) for
 * storing things. Supports placeholders
 */
export const setPath: any = safeCreateAction('SET_MOD_PATH',
  (key: string, path: string) => { return { key, path }; });

/**
 * change whether an attribute is displayed in the mod list
 */
export const setModlistAttributeVisible: any = safeCreateAction('SET_MODLIST_ATTRIBUTE_VISIBLE',
  (attributeId: string, visible: boolean) => { return { attributeId, visible }; } );

/**
 * sets if/how to sort by an attribute
 */
export const setModlistAttributeSort: any = safeCreateAction('SET_MODLIST_ATTRIBUTE_SORT',
  (attributeId: string, direction: string) => { return { attributeId, direction }; } );

/**
 * sets the activator to use for this game
 */
// TODO we can't just change the activator, we first need to purge an activation made with the
// previous one
export const setActivator: any = safeCreateAction('SET_ACTIVATOR');
