import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ChartService implements OnInit{
  pieChartData !: number[];

  constructor(private http: HttpClient){}
  
  ngOnInit() {
    this.recupererDonneesDiagramme();
  }

  private recupererDonneesDiagramme() {
    this.http.get<number[]>(`${environment.backendhost}/diagramme`).subscribe(
      (data) => {
        this.pieChartData = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des données : ', error);
      }
    );
  }

}
