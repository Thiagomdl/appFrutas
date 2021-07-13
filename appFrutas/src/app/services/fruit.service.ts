import { Injectable } from '@angular/core';
import { Fruit } from './fruit.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FruitService {

  private readonly url = "http://localhost:3001/fruit"

  constructor(private http: HttpClient) { }

  getFruit() {
    return this.http.get<Fruit[]>(this.url)
  }

  // getFruit(): Observable<ResponseFruit[]> {
  //   return this.http.get<ResponseFruit[]>(this.url)
  // }

}
