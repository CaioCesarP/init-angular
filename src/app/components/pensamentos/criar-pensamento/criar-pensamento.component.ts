import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'dev',
    modelo: 'modelo1',
  };

  constructor() { }

  ngOnInit(): void { }

  criarPensamento = () => {
    alert(JSON.stringify(this.pensamento))
  };

  cancelar = () => {
    alert('Cancelado!')
  };
}
