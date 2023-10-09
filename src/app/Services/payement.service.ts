import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Payement } from 'src/models/Payement.models';

@Injectable({
  providedIn: 'root'
})
export class PayementService {

  constructor(private http:HttpClient) { }

  listPayement():Observable<Payement[]>{
    return this.http.get<Payement[]>(`${environment.backendhost}/listPayement`)
  }

  addPayement(payement : Payement):Observable<Payement>{
    return this.http.post<Payement>(`${environment.backendhost}/addPayement` , payement)
  }

  updatePayement(id:number , payement:Payement):Observable<Payement>{
    return this.http.put<Payement>(`${environment.backendhost}/updatePayement/${id}`, payement)
  }

  deletePayement(id : number):Observable<Payement[]>{
    return this.http.delete<Payement[]>(`${environment.backendhost}/deletePayement/${id}`)
  
  }
}
