import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(
    private http: HttpClient
  ) { }

  getItems(): Observable<Item[]>{
    //return of(ItemS);
    return this.http.get<Item[]>(environment.ITEM);
  }

  create(Item: Item): Observable<Item>{
    return this.http.post<Item>(environment.ITEM, Item, {headers: this.httpHeaders});
  }

  getItem(id): Observable<Item>{
    return this.http.get<Item>(environment.ITEM + id);
  }

  update(Item: Item): Observable<Item>{
    return this.http.put<Item>(environment.ITEM, Item, {headers: this.httpHeaders})
  }

  delete(id: string): Observable<Item>{
    return this.http.delete<Item>(environment.ITEM + id, {headers: this.httpHeaders})
  }


}
