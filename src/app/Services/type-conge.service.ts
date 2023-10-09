import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { TypeConge } from 'src/models/TypeConge.models';

@Injectable({
  providedIn: 'root'
})
export class TypeCongeService {

  constructor(private http : HttpClient) { }

  getTypeConge():Observable<TypeConge[]>{
    return this.http.get<TypeConge[]>(`${environment.backendhost}/typeConge`)
  }
}
