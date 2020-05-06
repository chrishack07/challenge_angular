import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  // private urlEndPoint: string =  'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  private urlEndPoint: string =  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
  private categorias = [];
  constructor(private http: HttpClient) { }

  getCategories(): Observable<any>{
    console.log('ENTRO SERVICIO');
    return this.http.get<any>(this.urlEndPoint)
    .pipe<any>(map(r => {
      console.log('RESPUESTA ', r.drinks )
      r.drinks.forEach(element => {
        this.categorias.push(element)
        });
      return this.categorias;
      }))
    }  

}
