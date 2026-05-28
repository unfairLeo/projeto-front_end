/*
  agendamento.model.ts
  ---------------------------------------------------------------------------
  Este arquivo define o formato dos dados de agendamentos da barbearia.

  Ele não cria tela, não acessa HTML e não salva dados. Sua responsabilidade é
  padronizar a estrutura dos objetos usados no projeto.
*/

/*
  Type com valores fechados para status de agendamento.
*/
export type StatusAgendamento = 'Confirmado' | 'Cancelado' | 'Concluído' | 'Pendente';

/*
  Type com tipos de serviços oferecidos.
*/
export type TipoServico = 'Corte' | 'Barba' | 'Alisamento' | 'Tratamento' | 'Limpeza' | 'Combo';

/*
  Interface principal do agendamento já salvo na aplicação.

  O id aparece aqui porque todo agendamento salvo precisa de identificação.
  Em uma aplicação real, esse id geralmente viria do banco de dados ou da API.
*/
export interface Agendamento {
  id: number;
  cliente: string;
  servico: TipoServico;
  profissional: string;
  dataHora: string;
  status: StatusAgendamento;
  valor: number;
  telefone: string;
}

/*
  Interface usada pelo formulário.

  Ela não tem id porque, ao cadastrar um novo agendamento, o id ainda não existe.
  Neste projeto, o id é gerado pelo service. Em um backend real, seria gerado
  pela API ou pelo banco de dados.
*/
export interface AgendamentoFormData {
  cliente: string;
  servico: TipoServico;
  profissional: string;
  dataHora: string;
  status: StatusAgendamento;
  valor: number;
  telefone: string;
}

// Exportar aliases para manter compatibilidade com importações antigas
export type Registro = Agendamento;
export type RegistroFormData = AgendamentoFormData;
export type StatusRegistro = StatusAgendamento;
