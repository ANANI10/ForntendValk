import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin! : FormGroup

  constructor(private fb : FormBuilder , private authService: AuthService , private router : Router ){}

  ngOnInit(): void {

    this.formLogin = this.fb.group({
      username : this.fb.control(""),
      password : this.fb.control("")
    })
    
  }

  handleLogin(){
    let username = this.formLogin.value.username
    let pwd = this.formLogin.value.password
    console.log("Tentative de connexion avec username :", username);
    this.authService.login(username , pwd).subscribe({
      next : (data) =>{
        console.log("Réponse du backend :", data);
        //this.authService.loadJwtTokenFromLocalStorage()
        this.authService.loadProfile(data);
        console.log("Redirection vers /dashboard");
        this.router.navigateByUrl("/dashboard")
      },
      error : err =>{
        console.log(err)
      }
    })
  }

}
