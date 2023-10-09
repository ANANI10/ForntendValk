import { Component } from '@angular/core';
import { FormGroup, Validators , FormBuilder } from '@angular/forms';
import { VenteService } from 'src/app/Services/vente.service';
import { Vente } from 'src/models/Vente.models';

@Component({
  selector: 'app-update-vente',
  templateUrl: './update-vente.component.html',
  styleUrls: ['./update-vente.component.css']
})
export class UpdateVenteComponent {

  venteForm!: FormGroup ;
  constructor(private venteService:VenteService , private formBuilder: FormBuilder){}

  ngOnInit():void{
    this.initVenteForm();
  }

  initVenteForm(){
    this.venteForm = this.formBuilder.group({
      id: ['', Validators.required],
      date_vente: ['', Validators.required],
      quantite_vendue: ['', Validators.required],
      prix: ['', Validators.required],
      
      // Autres champs de formulaire ici
    });
  }

  onSubmit(){
    if (this.venteForm.valid) {
      const venteData: Vente = this.venteForm.value;

      this.venteService.updateVente(venteData.id, venteData).subscribe({
        next: (response) => {
          console.log('Vente mise à jour:', response);
        },
        error: (err) => {
          console.log('Erreur de mise à jour:', err);
        }
      });
    }
  }

}
