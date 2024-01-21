import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../../index.interface';

@Injectable({
  providedIn: 'root'
})
export class DiarioService {
  url: string = './../../../../assets/json/diario.json';
  constructor(
    private http: HttpClient
  ) {}

  getDiario() {
    return this.http.get<Client[]>(this.url);
  }

}
