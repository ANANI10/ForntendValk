import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Employe } from 'src/models/Employe.models';
import { Livraison } from 'src/models/Livraison.models';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  constructor(private http:HttpClient) { }

  listLivraison():Observable<Livraison[]>{
    return this.http.get<Livraison[]>(`${environment.backendhost}/listLivraison`)
  }

  addLivraison(livraisonData: Livraison):Observable<Livraison>{
    return this.http.post<Livraison>(`${environment.backendhost}/addLivraison` , livraisonData)
  }

  updateLivraison(id:number , livraison:Livraison):Observable<Livraison>{
    return this.http.put<Livraison>(`${environment.backendhost}/updateLivraison/${id}`, livraison)
  }

  deleteLivraison(id : number):Observable<Livraison[]>{
    return this.http.delete<Livraison[]>(`${environment.backendhost}/supprimerLivraison/${id}`)
  
  }

  getEmployeOfLivraison(livraisonId: number): Observable<Employe> {
     return this.http.get<Employe>(`${environment.backendhost}/`);
  }

}
