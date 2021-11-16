import { Component, Input, OnInit } from '@angular/core';
import { FarmletServerService } from '../../services/api/farmlet-server.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() lista_items: any;

  constructor( private api:FarmletServerService, private router:Router, private activedRouter:ActivatedRoute ) { }

  ngOnInit(): void {
  }
  
}
