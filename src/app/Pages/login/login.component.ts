import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FarmletServerService } from '../../services/api/farmlet-server.service';
import { LoginInterface } from '../../models/login.interface';
import { ResponseInterface } from '../../models/response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  errorStatus: boolean = false;
  errorMessage: string = "Correo Electronico o Contrasena incorrectos";

  constructor( private api:FarmletServerService, private router: Router ) { }

  ngOnInit(): void {
    this.checkToken()
  }

  checkToken(){
    if (localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }else if (localStorage.getItem('token') === null){
      this.router.navigate(['login']);
    }
  }


  onLogin(form: LoginInterface){
    // console.log(form);
    this.api.loginWithEmail(form).subscribe(data => {
      console.log(data);
      let responseData: ResponseInterface = data;

      if (responseData.token.access.token != ""){
        localStorage.setItem("token", responseData.token.access.token);
        this.router.navigate(['dashboard']);
        //verifica si se guarda correctamente el token
        // console.log(localStorage.getItem("token"))
      }else {
        this.errorStatus = true;
      }

    });


  }

}
