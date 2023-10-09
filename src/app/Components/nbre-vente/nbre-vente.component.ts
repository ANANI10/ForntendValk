import { Component, OnInit } from '@angular/core';
import { NbreVenteService } from 'src/app/Services/nbre-vente.service';

@Component({
  selector: 'app-nbre-vente',
  templateUrl: './nbre-vente.component.html',
  styleUrls: ['./nbre-vente.component.css']
})
export class NbreVenteComponent implements OnInit{

  nombreTotalVentes !: number;

  constructor(private nbreVenteService:NbreVenteService) {}

  ngOnInit(): void {
    this.calculerNombreTotalVente();
  }

  calculerNombreTotalVente() {
    this.nbreVenteService.calculerNombreTotalVentes().subscribe(
      (result: number) => {
        this.nombreTotalVentes = result;
      },
      error => {
        console.error('Erreur lors du calcul du nombre total d\'vente : ', error);
      }
    );
  }
}
