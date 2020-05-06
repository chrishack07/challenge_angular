import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPointBebidas: string =  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
  private urlEndPointCategorias: string = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  private urlEndPointTipoVasos: string = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list';
  private urlEndPointIngredientes: string = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  private urlEndPointTipoAlcoholicas: string = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list';
  
  private bebidas = [];
  private categorias = [];
  private vasos = [];
  private ingredientes =[];
  private alcoholicas = [];

  constructor(private http: HttpClient) { }

  getBebidas(): Observable<any>{
    console.log('ENTRO SERVICIO Drinks');
    return this.http.get<any>(this.urlEndPointBebidas)
    .pipe<any>(map(r => {
      console.log('RESPUESTA Drinks', r.drinks )
      r.drinks.forEach(element => {
        this.bebidas.push(element)
        });
      return this.bebidas;
      }))
  }
  
  getCategorias(): Observable<any>{
    console.log('ENTRO SERVICIO Categories');
    return this.http.get<any>(this.urlEndPointCategorias)
    .pipe<any>(map(r => {
      console.log('RESPUESTA Categories ', r)
      r.drinks.forEach(element => {
        this.categorias.push(element.strCategory)
        });
      return this.categorias;
      }))
  }

  getVasos(): Observable<any>{
    console.log('ENTRO SERVICIO Vasos');
    return this.http.get<any>(this.urlEndPointTipoVasos)
    .pipe<any>(map(r => {
      console.log('RESPUESTA Vasos ', r)
      r.drinks.forEach(element => {
        this.vasos.push(element.strGlass)
        });
      return this.vasos;
      }))
  }

  getIngredientes(): Observable<any>{
    console.log('ENTRO SERVICIO Ingredientes');
    return this.http.get<any>(this.urlEndPointIngredientes)
    .pipe<any>(map(r => {
      console.log('RESPUESTA Ingredientes ', r)
      r.drinks.forEach(element => {
        this.ingredientes.push(element.strIngredient1)
        });
      return this.ingredientes;
      }))
  }

  getAlcoholicas(): Observable<any>{
    console.log('ENTRO SERVICIO Alcoholicas');
    return this.http.get<any>(this.urlEndPointTipoAlcoholicas)
    .pipe<any>(map(r => {
      console.log('RESPUESTA Alcoholicas ', r)
      r.drinks.forEach(element => {
        this.alcoholicas.push(element.strAlcoholic)
        });
      return this.alcoholicas;
      }))
  }

}
