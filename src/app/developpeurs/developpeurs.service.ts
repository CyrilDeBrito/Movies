import { Injectable } from '@angular/core';
import { Developper } from '../developper.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeveloppeursService {

  apiUrl = `${environment.apiUrl}/devs`;

  constructor(private httpClient: HttpClient) {
  }

  get(): Observable<Array<Developper>> {
    return this.httpClient.get<Array<Developper>>(this.apiUrl);
  }

  getFromId(id: string): Observable<Developper> {
    return this.httpClient.get<Developper>(`${this.apiUrl}/${id}`);
  }

  add(newDeveloppeur: Developper): Observable<Developper> {
    return this.httpClient.post<Developper>(this.apiUrl, newDeveloppeur);
  }

  update(dev: Developper): Observable<Developper> {
    return this.httpClient.put<Developper>(this.apiUrl, dev);
  }

  delete(dev: Developper) {
    return this.httpClient.delete(`${this.apiUrl}/${dev.id}`);
  }

}
