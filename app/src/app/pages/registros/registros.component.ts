import { Component, inject } from '@angular/core';
import { EmptyStateComponent } from '../../components/empty-state/empty-state.component';
import { FilterBarComponent, FiltrosRegistros } from '../../components/filter-bar/filter-bar.component';
import { ItemFormComponent } from '../../components/item-form/item-form.component';
import { ItemListComponent } from '../../components/item-list/item-list.component';
import { LoadingErrorComponent } from '../../components/loading-error/loading-error.component';
import { Agendamento, AgendamentoFormData } from '../../models/registro.model';
import { RegistrosService } from '../../services/registros.service';

@Component({
  selector: 'app-registros',
  imports: [
    FilterBarComponent,
    ItemFormComponent,
    ItemListComponent,
    EmptyStateComponent,
    LoadingErrorComponent
  ],
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css'
})
export class RegistrosComponent {
  private registrosService = inject(RegistrosService);

  registros: Agendamento[] = [];
  categorias: string[] = [];
  registroEdicao: Agendamento | null = null;
  carregando = false;
  erro = '';

  private filtrosAtuais: FiltrosRegistros = {
    texto: '',
    categoria: 'Todas',
    status: 'Todos'
  };

  constructor() {
    this.atualizarTela();
  }

  aplicarFiltros(filtros: FiltrosRegistros): void {
    this.filtrosAtuais = filtros;
    this.atualizarTela();
  }

  salvarRegistro(dados: AgendamentoFormData): void {
    if (this.registroEdicao) {
      this.registrosService.atualizar(this.registroEdicao.id, dados);
      this.registroEdicao = null;
    } else {
      this.registrosService.adicionar(dados);
    }

    this.atualizarTela();
  }

  editarRegistro(registro: Agendamento): void {
    this.registroEdicao = { ...registro };
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelarEdicao(): void {
    this.registroEdicao = null;
  }

  excluirRegistro(id: number): void {
    const confirmou = confirm('Deseja excluir este agendamento?');

    if (!confirmou) {
      return;
    }

    this.registrosService.excluir(id);
    this.atualizarTela();
  }

  alternarStatus(id: number): void {
    this.registrosService.alternarStatus(id);
    this.atualizarTela();
  }

  private atualizarTela(): void {
    this.carregando = true;
    this.erro = '';

    setTimeout(() => {
      try {
        this.categorias = this.registrosService.listarCategorias();
        this.registros = this.registrosService.buscarPorTexto(
          this.filtrosAtuais.texto,
          this.filtrosAtuais.categoria,
          this.filtrosAtuais.status
        );
      } catch {
        this.erro = 'Não foi possível carregar os agendamentos.';
      } finally {
        this.carregando = false;
      }
    }, 250);
  }
}
