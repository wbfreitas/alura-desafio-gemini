import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GeminiService {

  constructor(private http: HttpClient) { }

  private agrupamento: { nome: string; valor: object | null }[] = [
  {nome: 'verbos', valor: null},
  {nome:'artigos', valor: null},
  {nome:'preposições', valor: null},
  {nome:'adverbios', valor: null},
  {nome:'conjugações', valor: null},
  {nome:'adjetivos', valor: null},
  {nome:'expressoes informais', valor: null},
  {nome:'phrasal verbs', valor: null},
  {nome:'pronomes', valor: null},
  {nome:'tradução completa', valor: null},
  {nome:'perguntas', valor: null},
];

  private filtros = {
    "serie": "",
    "temporada": 0,
    "episodio": 0,
  } 

  private result$ = new BehaviorSubject<any>(this.agrupamento); 

  getResult() {
    return this.result$.asObservable();
  }

  setFiltros(serie: string, temporada: number, episodio: number) {
    this.filtros = {serie, temporada, episodio}
    this.agrupamento = this.agrupamento.map(a =>{ a.valor = null; return a});
  }

  validaSubtitulo() {
    return this.http.post('http://localhost:3000/subtitulo-existe', {serie: this.filtros.serie, temporada:this.filtros.temporada,
     episodio: this.filtros.episodio});
  }

  updateFiltro(filter: string) {
    this.http.post('http://localhost:3000/searching', {serie: this.filtros.serie, temporada:this.filtros.temporada,
     episodio: this.filtros.episodio, filter})
    .subscribe(data=> {
      const index = this.agrupamento.findIndex(a => a.nome == filter);
      this.agrupamento[index].valor = data;
      this.result$.next(this.agrupamento);
    });
  }




}
