import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PayementService } from 'src/app/Services/payement.service';
import { Payement } from 'src/models/Payement.models';

@Component({
  selector: 'app-update-payement',
  templateUrl: './update-payement.component.html',
  styleUrls: ['./update-payement.component.css']
})
export class UpdatePayementComponent implements OnInit{

  payementForm!: FormGroup ;
  constructor(private payementService : PayementService , private formBuilder: FormBuilder){}

  ngOnInit():void{
    this.initPayementForm();
  }

  initPayementForm(){
    this.payementForm = this.formBuilder.group({
      id: ['', Validators.required],
      salaire: ['', [Validators.required]],
      date_payement: ['', [Validators.required]],
      status: ['', [Validators.required]]
      
      // Autres champs de formulaire ici
    });
  }

  onSubmit(){
    if (this.payementForm.valid) {
      const payementData: Payement = this.payementForm.value;

      this.payementService.updatePayement(payementData.id, payementData).subscribe({
        next: (response) => {
          console.log('Payement mise à jour:', response);
        },
        error: (err) => {
          console.log('Erreur de mise à jour:', err);
        }
      });
    }
  }



}
