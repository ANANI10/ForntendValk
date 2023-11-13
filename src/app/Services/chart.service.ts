import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
 

  constructor(private http: HttpClient){}
  
  getDailyRevenueForWeek(date: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.backendhost}/daily-revenue-by-date?date=${date}`);
  }


}
