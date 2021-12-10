import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { MedicamentoInterface } from '../../models/Medicamento.interface';
import { FarmletServerService } from '../../services/api/farmlet-server.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListMedicamentosInterface } from '../../models/listMedicamentos.interface';

@Component({
  selector: 'app-update-medicamentos',
  templateUrl: './update-medicamentos.component.html',
  styleUrls: ['./update-medicamentos.component.scss']
})
export class UpdateMedicamentosComponent implements OnInit {
  lista_medicamentos_all: ListMedicamentosInterface[];

  constructor( private router:Router, private activatedRoute:ActivatedRoute, private api:FarmletServerService ) { }

  ngOnInit(): void {
    //obtener todos los items de la base de datos
    this.api.getMedicamentosAll().subscribe(data => {
      console.log(data)
      this.lista_medicamentos_all = data;
    });
  }

}
