import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeService } from 'src/app/Services/employe.service';
import { Employe } from 'src/models/Employe.models';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent {

  employeForm!: FormGroup ;
  constructor(private employeService : EmployeService , private formBuilder: FormBuilder){}

  ngOnInit():void{
    this.initEmployeForm();
  }

  initEmployeForm(){
    this.employeForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      date_naissance: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      num_telephone: ['', [Validators.required]],
      salaire: ['', [Validators.required]],
      age: ['', [Validators.required]],
      nationalite: ['', [Validators.required]],
      fonction: ['', [Validators.required]],
      
      // Autres champs de formulaire ici
    });
  }

  onSubmit(){
    if (this.employeForm.valid) {
      const employeData: Employe = this.employeForm.value;

      this.employeService.updateEmploye(employeData.id, employeData).subscribe({
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
