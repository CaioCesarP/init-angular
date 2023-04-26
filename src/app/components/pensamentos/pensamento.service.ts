import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Pensamento } from './pensamento'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API)
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  excluir(id: string): Observable<Pensamento> {
    const URL = `${this.API}/${id}`
    return this.http.delete<Pensamento>(URL)
  }

  buscarPorId(id: string): Observable<Pensamento> {
    const URL = `${this.API}/${id}`
    return this.http.get<Pensamento>(URL)
  }

}
