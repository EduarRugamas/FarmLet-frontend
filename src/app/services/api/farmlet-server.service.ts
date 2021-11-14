import { Injectable } from '@angular/core';
import {LoginInterface} from '../../models/login.interface';
import {ResponseInterface} from '../../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmletServerService {

  url: string = "https://farmlet-server.herokuapp.com/v1/"

  constructor( private http: HttpClient ) { }

  loginWithEmail( form:LoginInterface ):Observable<ResponseInterface>{
      let url_login = this.url + "auth/login";
      return this.http.post<ResponseInterface>(url_login, form);
  }

}
