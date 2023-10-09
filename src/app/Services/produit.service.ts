import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produit } from 'src/models/Produit.models';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }

  listProduit():Observable<Produit[]>{
    return this.http.get<Produit[]>(`${environment.backendhost}/listProduit`)
  }

  addProduit(Produit:Produit):Observable<Produit>{
    return this.http.post<Produit>(`${environment.backendhost}/addProduct` , Produit)
  }

  updateProduit(id:number , Produit:Produit):Observable<Produit>{
    return this.http.put<Produit>(`${environment.backendhost}/updateProduit/${id}`, Produit)
  }

  deleteProduit(id : number):Observable<Produit>{
    return this.http.delete<Produit>(`${environment.backendhost}/deleteProduit/${id}`)
  
  }

  findProduit(id:number):Observable<Produit>{
    return this.http.get<Produit>(`${environment.backendhost}/findby/${id}`)
  }

}
