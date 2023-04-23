import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    { conteudo: 'Estou perdendo o interesse...', autoria: 'Minha mente', modelo: 'modelo2' },
    { conteudo: 'Estou pensando sobre não ter a gente...', autoria: 'Minha mente', modelo: 'modelo1' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
