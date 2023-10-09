import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProduitService } from 'src/app/Services/produit.service';
import { Produit } from 'src/models/Produit.models';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent {
  produitForm!: FormGroup ;
  constructor(private produitService : ProduitService , private formBuilder: FormBuilder){}

  ngOnInit():void{
    this.initProduitForm();
  }

  initProduitForm(){
    this.produitForm = this.formBuilder.group({
      id: ['', Validators.required],
      nom_produit: ['', Validators.required],
      prix: ['', Validators.required],
      quantite_produit: ['', Validators.required],
      
      // Autres champs de formulaire ici
    });
  }

  onSubmit(){
    if (this.produitForm.valid) {
      const produitData: Produit = this.produitForm.value;

      this.produitService.updateProduit(produitData.id, produitData).subscribe({
        next: (response) => {
          console.log('Produit mise à jour:', response);
        },
        error: (err) => {
          console.log('Erreur de mise à jour:', err);
        }
      });
    }
  }


}
