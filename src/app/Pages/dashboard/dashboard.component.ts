import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmletServerService } from '../../services/api/farmlet-server.service';
import { ListMedicamentosInterface } from '../../models/listMedicamentos.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private router:Router, private api:FarmletServerService) { }
  registros_medicamentos
  registros_promociones = 10

  ngOnInit(): void {
    this.api.getMedicamentosAll().subscribe(data => {
      console.log(data)
      this.registros_medicamentos = data.length
    });
  }

}
