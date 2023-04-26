import { Component, OnInit } from '@angular/core'
import { Pensamento } from '../pensamento'
import { PensamentoService } from '../pensamento.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: '0',
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }

  constructor(private router: Router, private route: ActivatedRoute, private service: PensamentoService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(id!).subscribe((pensamento) => this.pensamento = pensamento)
  }

  excluirPensamento() {
    if (!this.pensamento.id) {
      alert('Erro ao encontrar pensamento.')
      return
    }

    this.service.excluir(this.pensamento.id!).subscribe(() => this.router.navigate(['/listarPensamento']))
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}
