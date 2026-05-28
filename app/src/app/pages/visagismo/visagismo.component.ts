import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VisagismoService } from '../../services/visagismo.service';

@Component({
  selector: 'app-visagismo',
  imports: [FormsModule],
  templateUrl: './visagismo.component.html',
  styleUrl: './visagismo.component.css'
})
export class VisagismoComponent {
  private visagismoService = inject(VisagismoService);

  rosto = 'Oval';
  cabelo = 'Liso';
  recomendacoes: string[] = this.visagismoService.recomendar(this.rosto, this.cabelo);

  consultar(): void {
    this.recomendacoes = this.visagismoService.recomendar(this.rosto, this.cabelo);
  }
}
