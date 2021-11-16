import { Injectable } from '@angular/core';
import {LoginInterface} from '../../models/login.interface';
import {ResponseInterface} from '../../models/response.interface';
import { ListMedicamentosInterface } from '../../models/listMedicamentos.interface';
import { MedicamentoInterface } from '../../models/Medicamento.interface';
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

  getMedicamentosAll(): Observable<ListMedicamentosInterface[]> {
    let url_get_medicamentos = this.url + "medicamentos";
    return this.http.get<ListMedicamentosInterface[]>(url_get_medicamentos);
  }

  getMedicamento(id): Observable<MedicamentoInterface>{
    let url_get_medicamento = this.url + "medicamentos/id/" + id;
    return this.http.get<MedicamentoInterface>(url_get_medicamento);
  }

}
