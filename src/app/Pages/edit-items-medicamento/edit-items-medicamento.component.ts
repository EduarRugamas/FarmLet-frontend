import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { MedicamentoInterface } from '../../models/Medicamento.interface';
import { FarmletServerService } from '../../services/api/farmlet-server.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListMedicamentosInterface } from '../../models/listMedicamentos.interface';

@Component({
  selector: 'app-edit-items-medicamento',
  templateUrl: './edit-items-medicamento.component.html',
  styleUrls: ['./edit-items-medicamento.component.scss']
})
export class EditItemsMedicamentoComponent implements OnInit {

  lista_medicamentos_all: ListMedicamentosInterface[];

  constructor( private router:Router, private activatedRoute:ActivatedRoute, private api:FarmletServerService ) { }

  datosMedicamento: MedicamentoInterface;

  FormMedicamento = new FormGroup({
    id: new FormControl(''),
    nombre: new  FormControl(''),
    descripcion: new FormControl(''),
    precio: new FormControl(''),
    imagen: new FormControl(''),
    createdAt: new FormControl(''),
    updatedAt: new FormControl('')
  });

  ngOnInit(): void {

    let MedicamentoId = this.activatedRoute.snapshot.paramMap.get('id');
    let token = this.getToken();
    // console.log(`${MedicamentoId}, ${token}`);
    //obtener un medicamento por id
    this.api.getMedicamento(MedicamentoId).subscribe( data => {
      // console.log(data);
      this.datosMedicamento = data;

      this.FormMedicamento.setValue({
        'id': this.datosMedicamento.id,
        'nombre': this.datosMedicamento.nombre,
        'descripcion': this.datosMedicamento.descripcion,
        'precio': this.datosMedicamento.precio,
        'imagen': this.datosMedicamento.imagen,
        'createdAt': this.datosMedicamento.createdAt,
        'updatedAt': this.datosMedicamento.updatedAt

      });

    });

  }
  getToken(){
    return localStorage.getItem('token');
  }

  updateRegistro(editForm: MedicamentoInterface){
    console.log(editForm);
  }

}
