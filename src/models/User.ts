/** User class requirements
 *
 * Represent user data
 * Ability to store, change, retrieve data
 * Notify the rest of the app when data has changed
 * Persist data to an outside server, and later retrieve it
 */

import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

interface UserProps {
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

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  // with the save() method, we need to take care that we respect the entries in the database that already have an id; the Id is provided when the object enters the database, meaning that if it exists on the object that we are saving, we should be making a PUT request, because we'll be updating an existing entry in the db. Otherwise, we'll be making a POST request to enter a new object into the database
  save(): void {
    const id = this.get('id');

    if (id) {
      // put request
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      // post
      axios.post(`http://localhost:3000/users/`, this.data);
    }
  }
}
