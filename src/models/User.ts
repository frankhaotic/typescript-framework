/** User class requirements
 *
 * Represent user data
 * Ability to store, change, retrieve data
 * Notify the rest of the app when data has changed
 * Persist data to an outside server, and later retrieve it
 */

import { Eventing } from './Eventing';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
