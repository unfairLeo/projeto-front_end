export interface Servico {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  popularidade: number;
  categoria: 'Corte' | 'Barba' | 'Tratamento' | 'Combo';
}
