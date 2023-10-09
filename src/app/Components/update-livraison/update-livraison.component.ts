import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivraisonService } from 'src/app/Services/livraison.service';
import { Livraison } from 'src/models/Livraison.models';

@Component({
  selector: 'app-update-livraison',
  templateUrl: './update-livraison.component.html',
  styleUrls: ['./update-livraison.component.css']
})
export class UpdateLivraisonComponent {

  livraisonForm!: FormGroup ;
  constructor(private livraisonService: LivraisonService , private formBuilder: FormBuilder){}

  ngOnInit():void{
    this.initLivraisonForm();
  }

  initLivraisonForm(){
    this.livraisonForm = this.formBuilder.group({
      id: ['', Validators.required],
      date_livraison: ['', Validators.required],
      status: ['', Validators.required],
      lieu: ['', Validators.required],
      adresse: ['', Validators.required],
      
      // Autres champs de formulaire ici
    });
  }

  onSubmit(){
    if (this.livraisonForm.valid) {
      const livraisonData: Livraison = this.livraisonForm.value;

      this.livraisonService.updateLivraison(livraisonData.id, livraisonData).subscribe({
        next: (response) => {
          console.log('Livraison  mise à jour:', response);
        },
        error: (err) => {
          console.log('Erreur de mise à jour:', err);
        }
      });
    }
  }


}
