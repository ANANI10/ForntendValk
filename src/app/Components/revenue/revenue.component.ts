import { Component, OnInit } from '@angular/core';
import { RevenueService } from 'src/app/Services/revenue.service';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit{

  sommeRevenuTotal ! : number;

  constructor(private revenueServcie : RevenueService){}

  ngOnInit(): void {
    this.calculerSommeRevenuTotal();
  }

  calculerSommeRevenuTotal() {
    this.revenueServcie.calculerSommeRevenuTotal().subscribe(
      (result: number) => {
        this.sommeRevenuTotal = result;
      },
      error => {
        console.error('Erreur lors de la récupération de la somme du revenu total : ', error);
      }
    );
  }

}
