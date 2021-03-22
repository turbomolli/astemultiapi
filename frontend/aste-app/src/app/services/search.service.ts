import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  getSearch(query): Promise<any> {
    return this.http.get(`${environment.apiUrl}/search?query=${query}`).toPromise();
  }

}
