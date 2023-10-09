import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Employe } from 'src/models/Employe.models';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http:HttpClient) { }

  listEmploye():Observable<Employe[]>{
    return this.http.get<Employe[]>(`${environment.backendhost}/list`)
  }

  addEmploye(employe:Employe):Observable<Employe>{
    return this.http.post<Employe>(`${environment.backendhost}/employee` , employe)
  }

  updateEmploye(id:number , employe:Employe):Observable<Employe>{
    return this.http.put<Employe>(`${environment.backendhost}/modifier/${id}`, employe)
  }

  deleteEmploye(id : number):Observable<Employe>{
    return this.http.delete<Employe>(`${environment.backendhost}/supprime/${id}`)
  }

  getEmployePage(page: number): Observable<any> {
    // Vous pouvez passer le numéro de page à votre API Django pour récupérer les données de cette page
    return this.http.get<any>(`${environment.backendhost}/list?page=${2}`);
  }
}
