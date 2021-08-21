import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  /* STUB with the save() method, we need to take care that we respect the entries in the database that already have an id; the Id is provided when the object enters the database, meaning that if it exists on the object that we are saving, we should be making a PUT request, because we'll be updating an existing entry in the db. Otherwise, we'll be making a POST request to enter a new object into the database */

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      // put request
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // post
      return axios.post(this.rootUrl, data);
    }
  }
}
