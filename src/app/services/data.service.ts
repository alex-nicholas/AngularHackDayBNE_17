import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';

@Injectable()
export class DataService {
  private _apiAddress: string 
    = `https://jsonplaceholder.typicode.com/Users`;

  constructor(private _httpClient: HttpClient) { }

  getUsers(): Observable<Array<User>> {
    return this._httpClient.get<Array<User>>(this._apiAddress);
  }

  getUser(id: number): Observable<User> {
    return this._httpClient.get<User>(`${this._apiAddress}/${id}`);
  }
}
