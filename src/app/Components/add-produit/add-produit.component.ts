import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/Services/produit.service';
import { Produit } from 'src/models/Produit.models';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit{

  produit : Produit |any;
  produitForm!: FormGroup;
  listProduit : any[] = [];
  submitted = false;
  estValide: boolean = true;

  constructor(private produitService: ProduitService, private formBuilder: FormBuilder , private route: ActivatedRoute) {
    this.produitForm = this.formBuilder.group({
      nom_produit: ['', [Validators.required]],
      prix: ['', [Validators.required]],
      quantite_produit: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.fetchAllProduit();
  }

  fetchAllProduit():void{
    this.produitService.listProduit().subscribe({
      next:(response)=>{
        console.log(response);
        this.listProduit = response;
      },
      error(err){
        console.log("Erreur de chargement" , err);
      },
    })
  }

  onAddProduit():void{
    console.log('Méthode onAddChambre appelée');
    this.submitted= true

    if (this.produitForm.valid) {
      console.log('Formulaire Validé');
      console.log(this.produitForm.valid);
      const chambreData = this.produitForm.value;
      this.produitService.addProduit(chambreData).subscribe(produit =>
        this.listProduit.push(produit)),
        this.produitForm.reset();
    }else {
      console.log('Formulaire invalide');
    }
    
  }
 
}


