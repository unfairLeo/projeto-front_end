/*
  agendamentos.service.ts
  ---------------------------------------------------------------------------
  Service responsável pelos dados de agendamentos da barbearia.

  Em Angular, um service é uma classe usada para centralizar regras, acesso a
  dados e operações que não deveriam ficar presas diretamente ao HTML.

  Neste projeto, os dados ficam em memória, dentro de um array.
  Com persistência em localStorage para manter os dados entre sessões.
*/

import { Injectable } from '@angular/core';
import { Agendamento, AgendamentoFormData, StatusAgendamento } from '../models/registro.model';

/*
  Tipo auxiliar usado para montar os cards do Dashboard.
*/
interface ResumoAgendamentos {
  total: number;
  confirmados: number;
  pendentes: number;
  concluidos: number;
  cancelados: number;
  valorTotal: number;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  /*
    Chave usada para armazenar dados no localStorage.
  */
  private readonly STORAGE_KEY = 'agendamentos_barbearia_dados';

  /*
    Array privado com os dados iniciais.
  */
  private registros: Agendamento[] = [
    {
      id: 1,
      cliente: 'João Silva',
      servico: 'Corte',
      profissional: 'Barbeiro Carlos',
      dataHora: '2026-05-28T14:00',
      status: 'Confirmado',
      valor: 50,
      telefone: '(11) 98765-4321'
    },
    {
      id: 2,
      cliente: 'Pedro Santos',
      servico: 'Barba',
      profissional: 'Barbeiro Marco',
      dataHora: '2026-05-28T15:30',
      status: 'Confirmado',
      valor: 35,
      telefone: '(11) 99876-5432'
    },
    {
      id: 3,
      cliente: 'Lucas Oliveira',
      servico: 'Combo',
      profissional: 'Barbeiro Carlos',
      dataHora: '2026-05-29T10:00',
      status: 'Pendente',
      valor: 80,
      telefone: '(11) 97654-3210'
    },
    {
      id: 4,
      cliente: 'Fernando Costa',
      servico: 'Alisamento',
      profissional: 'Barbeiro Marco',
      dataHora: '2026-05-29T16:00',
      status: 'Concluído',
      valor: 120,
      telefone: '(11) 96543-2109'
    }
  ];

  private proximoId = 5;

  constructor() {
    this.carregarDoLocalStorage();
  }

  /*
    =========================================================================
    MÉTODOS DE PERSISTÊNCIA (localStorage)
    =========================================================================
  */

  private carregarDoLocalStorage(): void {
    try {
      const dadosSalvos = localStorage.getItem(this.STORAGE_KEY);

      if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);

        if (dados.registros && Array.isArray(dados.registros)) {
          this.registros = dados.registros;
        }

        if (dados.proximoId && typeof dados.proximoId === 'number') {
          this.proximoId = dados.proximoId;
        }
      }
    } catch (erro) {
      console.error('Erro ao carregar dados do localStorage:', erro);
    }
  }

  salvarNoLocalStorage(): void {
    try {
      const dados = {
        registros: this.registros,
        proximoId: this.proximoId,
        dataSalvamento: new Date().toISOString()
      };

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(dados));
    } catch (erro) {
      console.error('Erro ao salvar dados no localStorage:', erro);
    }
  }

  limparDados(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      this.registros = [];
      this.proximoId = 1;
    } catch (erro) {
      console.error('Erro ao limpar dados do localStorage:', erro);
    }
  }

  /*
    =========================================================================
    MÉTODOS DE OPERAÇÃO (CRUD)
    =========================================================================
  */

  listar(): Agendamento[] {
    return [...this.registros];
  }

  buscarPorTexto(texto: string, categoria: string, status: StatusAgendamento | 'Todos'): Agendamento[] {
    const termo = texto.trim().toLowerCase();

    return this.registros.filter((agendamento) => {
      const correspondeTexto =
        !termo ||
        agendamento.cliente.toLowerCase().includes(termo) ||
        agendamento.servico.toLowerCase().includes(termo) ||
        agendamento.profissional.toLowerCase().includes(termo) ||
        agendamento.telefone.toLowerCase().includes(termo);

      const correspondeCategoria = categoria === 'Todas' || agendamento.servico === categoria;
      const correspondeStatus = status === 'Todos' || agendamento.status === status;

      return correspondeTexto && correspondeCategoria && correspondeStatus;
    });
  }

  adicionar(dados: AgendamentoFormData): Agendamento {
    const novoAgendamento: Agendamento = {
      id: this.proximoId,
      ...dados
    };

    this.proximoId++;
    this.registros = [novoAgendamento, ...this.registros];
    this.salvarNoLocalStorage();

    return novoAgendamento;
  }

  atualizar(id: number, dados: AgendamentoFormData): Agendamento | null {
    const indice = this.registros.findIndex((agendamento) => agendamento.id === id);

    if (indice === -1) {
      return null;
    }

    const atualizado: Agendamento = {
      id,
      ...dados
    };

    this.registros[indice] = atualizado;
    this.salvarNoLocalStorage();

    return atualizado;
  }

  excluir(id: number): void {
    this.registros = this.registros.filter((agendamento) => agendamento.id !== id);
    this.salvarNoLocalStorage();
  }

  alternarStatus(id: number): Agendamento | null {
    const agendamento = this.registros.find((item) => item.id === id);

    if (!agendamento) {
      return null;
    }

    const ordem: StatusAgendamento[] = ['Pendente', 'Confirmado', 'Concluído', 'Cancelado'];
    const indiceAtual = ordem.indexOf(agendamento.status);
    const proximoIndice = (indiceAtual + 1) % ordem.length;
    agendamento.status = ordem[proximoIndice];

    this.salvarNoLocalStorage();

    return agendamento;
  }

  listarCategorias(): string[] {
    const servicos = this.registros.map((agendamento) => agendamento.servico);
    return [...new Set(servicos)].sort();
  }

  getResumo(): ResumoAgendamentos {
    return {
      total: this.registros.length,
      confirmados: this.contarPorStatus('Confirmado'),
      pendentes: this.contarPorStatus('Pendente'),
      concluidos: this.contarPorStatus('Concluído'),
      cancelados: this.contarPorStatus('Cancelado'),
      valorTotal: this.registros.reduce((soma, agendamento) => soma + agendamento.valor, 0)
    };
  }

  private contarPorStatus(status: StatusAgendamento): number {
    return this.registros.filter((agendamento) => agendamento.status === status).length;
  }
}
