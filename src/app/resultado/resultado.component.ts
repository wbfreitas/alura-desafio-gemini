import { Component, OnInit } from '@angular/core';
import { GeminiService } from '../gemini.service';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [MatExpansionModule, CommonModule, MatCardModule, MatProgressSpinnerModule, MatIconModule],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.scss'
})
export class ResultadoComponent implements OnInit{
  result: any;
  loading = false;
  questaoSelecionada = -1;
  constructor(public gemini: GeminiService) {
  }
  
  ngOnInit(): void {
    this.gemini.getResult().subscribe(result => {
      this.result = result;
      this.loading = false;
    } );
  }

  opened(agrupador: any) {
    console.log(agrupador);
    console.log('open');
    if(!agrupador?.valor) {
      this.update(agrupador);
    }
  }

  update(agrupador: any) {
      this.loading = true; 
      this.gemini.updateFiltro(agrupador.nome);
  }

  selecionaQuestao(i: number) {
    console.log('click');
    this.questaoSelecionada = i;
  }
}
