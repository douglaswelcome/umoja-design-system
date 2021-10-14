import { ifDefined } from 'lit-html/directives/if-defined.js';

/**
 * Extention of `lit-html/directives/if-defined` which checks if given value is `null` or `undefined`.
 */
export default value => ifDefined(value ?? undefined);