import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosServicesService {

  data_prod: any[] = [];

  constructor( private http: HttpClient ) {
    console.log('Servicio iniciado');
  }



  getProductos() {
    return this.http.get('http://localhost:4500/producto');

  }

}
