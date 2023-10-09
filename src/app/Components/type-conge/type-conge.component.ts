import { Component, OnInit } from '@angular/core';
import { TypeCongeService } from 'src/app/Services/type-conge.service';
import { TypeConge } from 'src/models/TypeConge.models';

@Component({
  selector: 'app-type-conge',
  templateUrl: './type-conge.component.html',
  styleUrls: ['./type-conge.component.css']
})
export class TypeCongeComponent implements OnInit{

  typeConge : TypeConge[] = [];

  ngOnInit(): void {

    this.getAllTypeConge();

  }

  constructor(private typeCongeService : TypeCongeService){}

  getAllTypeConge(){
    this.typeCongeService.getTypeConge().subscribe((type)=>{
      this.typeConge = Object.values(type);
    });
  }

}
