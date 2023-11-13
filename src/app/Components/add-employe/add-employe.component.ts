import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeService } from 'src/app/Services/employe.service';
import { Employe } from 'src/models/Employe.models';


@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent {

  employe : Employe |any;
  employeForm!: FormGroup;
  listEmploye : any[] = [];
  
  
  

  constructor(private employeService: EmployeService, private formBuilder: FormBuilder , private route: ActivatedRoute) {
    this.employeForm = this.formBuilder.group({
      nom: ['', [Validators.required , Validators.minLength(4), Validators.maxLength(10)]],
      prenom: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      date_naissance: ['', [Validators.required]],
      adresse: ['', [Validators.required , Validators.email]],
      num_telephone: ['', [Validators.required ]],
      salaire: ['', [Validators.required]],
      age: ['', [Validators.required]],
      nationalite: ['', [Validators.required]],
      fonction: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.fetchAllEmploye();
  }

  fetchAllEmploye():void{
    this.employeService.listEmploye().subscribe({
      next:(response)=>{
        console.log(response);
        this.listEmploye = response;
      },
      error(err){
        console.log("Erreur de chargement" , err);
      },
    })
  }

  onAddEmploye():void{
    console.log('Méthode onAddEmploye appelée');

    if (this.employeForm.valid) {
      console.log('Formulaire Validé');
      console.log(this.employeForm.valid);
      const employeData = this.employeForm.value;
      this.employeService.addEmploye(employeData).subscribe(employe =>
        this.listEmploye.push(employe)),
        this.employeForm.reset();
    }else {
      console.log('Formulaire invalide');
    }
    
  }

 

}
