import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Filme} from '../../filme';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  filmes: Observable<Filme[]>;

  constructor() { }

  ngOnInit() {
  }

  reloadData(){

    this.filmes = this.FilmesService.getFilmesList();

  }

}
