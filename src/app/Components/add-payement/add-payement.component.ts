import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PayementService } from 'src/app/Services/payement.service';
import { Payement } from 'src/models/Payement.models';

@Component({
  selector: 'app-add-payement',
  templateUrl: './add-payement.component.html',
  styleUrls: ['./add-payement.component.css']
})
export class AddPayementComponent implements OnInit{

  payement : Payement |any;
  payementForm!: FormGroup;
  listPayement : any[] = []

  constructor(private payementService:PayementService, private formBuilder: FormBuilder , private route: ActivatedRoute) {
    this.payementForm = this.formBuilder.group({
      salaire: ['', [Validators.required]],
      date_payement: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.fetchAllPayement();
  }

  fetchAllPayement():void{
    this.payementService.listPayement().subscribe({
      next:(response)=>{
        console.log(response);
        this.listPayement = response;
      },
      error(err){
        console.log("Erreur de chargement" , err);
      },
    })
  }

  onAddPayement():void{
    console.log('Méthode onAddPayement appelée');

    if (this.payementForm.valid) {
      console.log('Formulaire Validé');
      console.log(this.payementForm.valid);
      const venteData = this.payementForm.value;
      this.payementService.addPayement(venteData).subscribe(payement =>
        this.listPayement.push(payement)),
        this.payementForm.reset();
    }else {
      console.log('Formulaire invalide');
    }
    
  }


}
