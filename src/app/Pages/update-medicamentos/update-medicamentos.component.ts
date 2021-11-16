import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { MedicamentoInterface } from '../../models/Medicamento.interface';
import { FarmletServerService } from '../../services/api/farmlet-server.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-medicamentos',
  templateUrl: './update-medicamentos.component.html',
  styleUrls: ['./update-medicamentos.component.scss']
})
export class UpdateMedicamentosComponent implements OnInit {

  constructor( private router:Router, private activatedRoute:ActivatedRoute, private api:FarmletServerService ) { }

  datosMedicamento: MedicamentoInterface;
  editarMedicamento = new FormGroup({
    nombre: new  FormControl(''),
    descripcion: new FormControl(''),
    precio: new FormControl(''),
    imagen: new FormControl('')
  });

  ngOnInit(): void {
    let MedicamentoId = this.activatedRoute.snapshot.paramMap.get('id');
    let token = this.getToken();
    console.log(`${MedicamentoId}, ${token}`);
    this.api.getMedicamento(MedicamentoId).subscribe( data => {
      this.datosMedicamento = data[0];
      console.log(data)
      
    });
  }

  getToken(){
    return localStorage.getItem('token');
  }


}
