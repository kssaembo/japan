import {results} from './results';
// Six stable demonstration assets; retain older variants in the source for replacement.
export const primaryResults=results.filter(r=>r.id.endsWith('_01'));
