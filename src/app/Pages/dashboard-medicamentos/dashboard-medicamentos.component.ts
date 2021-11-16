import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmletServerService } from '../../services/api/farmlet-server.service';
import { ListMedicamentosInterface } from '../../models/listMedicamentos.interface';

@Component({
  selector: 'app-dashboard-medicamentos',
  templateUrl: './dashboard-medicamentos.component.html',
  styleUrls: ['./dashboard-medicamentos.component.scss']
})
export class DashboardMedicamentosComponent implements OnInit {

  lista_medicamentos_all: ListMedicamentosInterface[];
  registros_medicamentos

  constructor( private api:FarmletServerService, private router:Router ) { }

  ngOnInit(): void {
    this.api.getMedicamentosAll().subscribe(data => {
      console.log(data)
      this.lista_medicamentos_all = data;
      this.registros_medicamentos = this.lista_medicamentos_all.length
    });
  }

}
