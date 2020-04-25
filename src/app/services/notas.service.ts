import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
const dominio = environment.apiUrl;
const httpHeader = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})

export class NotasService {

  constructor(private http: HttpClient) { }

  saveNotas(datos): Observable<any>{
    let url = dominio + '/nota';
    return this.http.post(url, datos, httpHeader);
  }

  getNotas(): Observable<any>{
    let url = dominio + '/nota';
    return this.http.get(url, httpHeader);
  }
}
