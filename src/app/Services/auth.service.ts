import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated : Boolean = false;
  roles : any;
  username : any;
  accesToken : any
  private secretKey: string = environment.secretKey;

  constructor(private http : HttpClient , private router : Router) { }

  public login(username: string ,  password: string){
    let options = {
      headers : new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
    }
    console.log(options)
    let params = new HttpParams()
    .set("username",username).set("password", password);

    console.log("Paramètres de la requête de connexion :", params);
    return this.http.post(`${environment.backendhost}/auth/login` , params ,options)
  }
  
  

  loadProfile(data : any){
    this.isAuthenticated = true
    this.accesToken = data['access-token'];
    let decodedJwt:any = jwtDecode(this.accesToken);
    console.log("Réponse du jwt decoder :", decodedJwt);
    this.username = decodedJwt.sub; 
    this.roles = decodedJwt.scope; 
    window.localStorage.setItem("jwt-token", this.accesToken)
  }


  loadJwtTokenFromLocalStorage(){
    let token = window.localStorage.getItem("jwt-token");
    if(token){
      this.loadProfile({"access-token":token});
      console.log(token)
      //this.router.navigateByUrl("login") apres je vais changer le dashboard en login
      this.router.navigateByUrl("dashboard")
    }

  }

  logout(){
    this.isAuthenticated = false;
    this.accesToken = undefined;
    this.username = undefined;
    this.roles = undefined;
    window.localStorage.removeItem("access-token")
    this.router.navigateByUrl("/login")
  }

}
