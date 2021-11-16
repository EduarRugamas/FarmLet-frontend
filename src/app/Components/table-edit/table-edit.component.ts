import { Component, OnInit, Input } from '@angular/core';
import { FarmletServerService } from '../../services/api/farmlet-server.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.scss']
})
export class TableEditComponent implements OnInit {
  @Input() lista_items: any;

  constructor(private api:FarmletServerService, private router:Router, private activedRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }

  editItem(id_item){
    console.log(id_item)
    this.router.navigate(['edit-medicamento', id_item]);
  }

}
