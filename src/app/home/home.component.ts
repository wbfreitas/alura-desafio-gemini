import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { GeminiService } from '../gemini.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   homeForm: FormGroup  = new FormGroup({});  
   loading = false;
   erro = false;
  constructor(private router: Router, private gemini: GeminiService, private fb: FormBuilder) {
    this.homeForm = this.fb.group({
      serie: ['', Validators.required],
      temporada: ['', Validators.required],
      episodio: ['', Validators.required],
    });
  }
  onSubimit() {
    if(!this.homeForm.valid) return;
    this.gemini.setFiltros(
      this.homeForm.get('serie')?.value,
      this.homeForm.get('temporada')?.value,
      this.homeForm.get('episodio')?.value);
      this.loading = true;
      this.erro = false;
      this.gemini.validaSubtitulo().subscribe((ehValido: any)=> {
        if(ehValido.existe) { 
          this.router.navigate(['/resultado'], {skipLocationChange: true});
        } else {
          this.erro = true;
        }
          this.loading = false;
      });

  }

}
