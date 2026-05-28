import { Injectable } from '@angular/core';
import { Servico } from '../models/servico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {
  private servicos: Servico[] = [
    { id: 1, nome: 'Corte tradicional', descricao: 'Acabamento clássico na tesoura e máquina.', preco: 50, popularidade: 5, categoria: 'Corte' },
    { id: 2, nome: 'Barba premium', descricao: 'Modelagem completa com toalha quente.', preco: 40, popularidade: 4, categoria: 'Barba' },
    { id: 3, nome: 'Combo Caveira', descricao: 'Corte + barba + finalização.', preco: 80, popularidade: 5, categoria: 'Combo' },
    { id: 4, nome: 'Hidratação capilar', descricao: 'Tratamento para brilho e fortalecimento.', preco: 60, popularidade: 3, categoria: 'Tratamento' }
  ];

  listar(): Servico[] {
    return [...this.servicos].sort((a, b) => b.popularidade - a.popularidade);
  }
}
