import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResults } from '../models/search-results';

@Injectable()
export class UserSearchService {

  constructor(private http: HttpClient) { }

  getUsers(searchTerm: string) {
    const searchApi = 'https://api.github.com/search/users';
    const params = new HttpParams().set('q', searchTerm);

    return this.http.get<SearchResults>(searchApi, { params: params });
  }

}
