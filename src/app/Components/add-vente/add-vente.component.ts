import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/Services/produit.service';
import { VenteService } from 'src/app/Services/vente.service';
import { Produit } from 'src/models/Produit.models';
import { Vente } from 'src/models/Vente.models';

@Component({
  selector: 'app-add-vente',
  templateUrl: './add-vente.component.html',
  styleUrls: ['./add-vente.component.css']
})
export class AddVenteComponent implements OnInit{

  
  vente!: Vente;
  venteForm!: FormGroup;
  listVente : any[] = [];

  produits !: Produit[];


  constructor(private venteService: VenteService, private produitService: ProduitService ,  private formBuilder: FormBuilder , private route: ActivatedRoute) {
    this.venteForm = this.formBuilder.group({
      date_vente: ['', [Validators.required]],
      quantite_vendue: ['', [Validators.required]],
      prix: ['', [Validators.required]],
      produitId: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.fetchAllVente();
    this.produitService.listProduit().subscribe(data => {
      this.produits = data;
    });
  }

  fetchAllVente():void{
    this.venteService.listVente().subscribe({
      next:(response)=>{
        console.log(response);
        this.listVente = response;
      },
      error(err){
        console.log("Erreur de chargement" , err);
      },
    })
  }

  onAddVente():void{
    console.log('Méthode onAddVente appelée');

    if (this.venteForm.valid) {
      console.log('Formulaire Validé');
      console.log(this.venteForm.valid);
      const venteData = { ...this.venteForm.value, produitId: +this.venteForm.value.produitId };
      this.venteService.addVente(venteData).subscribe(vente =>
        this.listVente.push(vente)),
        this.venteForm.reset();
    }else {
      console.log('Formulaire invalide');
    }
    
  }

}
