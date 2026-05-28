import { Component, inject } from '@angular/core';
import { EmptyStateComponent } from '../../components/empty-state/empty-state.component';
import { ListaServicosComponent } from '../../components/lista-servicos/lista-servicos.component';
import { Servico } from '../../models/servico.model';
import { ServicosService } from '../../services/servicos.service';

@Component({
  selector: 'app-servicos',
  imports: [ListaServicosComponent, EmptyStateComponent],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {
  private servicosService = inject(ServicosService);
  servicos: Servico[] = this.servicosService.listar();
}
