import { Component, OnInit } from '@angular/core';
import { NbreEmployeService } from 'src/app/Services/nbre-employe.service';

@Component({
  selector: 'app-nbre-employe',
  templateUrl: './nbre-employe.component.html',
  styleUrls: ['./nbre-employe.component.css']
})
export class NbreEmployeComponent implements OnInit{

  nombreTotalEmployes!: number;

  constructor(private nbreEmpService:NbreEmployeService) {}

  ngOnInit(): void {
    this.calculerNombreTotalEmployes();
  }

  calculerNombreTotalEmployes() {
    this.nbreEmpService.calculerNombreTotalEmployes().subscribe(
      (result: number) => {
        this.nombreTotalEmployes = result;
      },
      error => {
        console.error('Erreur lors du calcul du nombre total d\'employés : ', error);
      }
    );
  }
}
