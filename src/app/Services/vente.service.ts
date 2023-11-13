import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produit } from 'src/models/Produit.models';
import { Vente } from 'src/models/Vente.models';

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  constructor(private http:HttpClient) { }

  listVente():Observable<Vente[]>{
    return this.http.get<Vente[]>(`${environment.backendhost}/listVente`)
  }

  addVente(venteData: any):Observable<Vente>{
    return this.http.post<Vente>(`${environment.backendhost}/ajouterVente` , venteData)
  }

  updateVente(id:number , vente:Vente):Observable<Vente>{
    return this.http.put<Vente>(`${environment.backendhost}/modifierVente/${id}`, vente)
  }

  deleteVente(id : number):Observable<Vente[]>{
    return this.http.delete<Vente[]>(`${environment.backendhost}/supprimerVente/${id}`)
  
  }

  getProduitById(produitId: number): Observable<Produit> {
    return this.http.get<Produit>(`${environment.backendhost}/getProduit/${produitId}`);
  }
  
}
