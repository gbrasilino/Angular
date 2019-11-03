import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmeServiceService {

  private baseUrl = 'http://localhost:8080/filme/';


  constructor(private http: HttpClient) { }

  getFilme(id: number): Observable<any> {
    return  this.http.get('${this.baseUrl}/${id}');

  }


  getFilmeList(): Observable<any> {

    return this.http.get('${this.baseUrl}/listar-filmes');
  }

}
