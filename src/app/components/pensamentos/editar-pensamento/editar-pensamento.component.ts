import { Component, OnInit } from '@angular/core'
import { Pensamento } from '../pensamento'
import { ActivatedRoute, Router } from '@angular/router'
import { PensamentoService } from '../pensamento.service'

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private router: Router, private route: ActivatedRoute, private service: PensamentoService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(id!).subscribe((pensamento) => this.pensamento = pensamento)
  }

  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(() => this.router.navigate(['/listarPensamento']))
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}
