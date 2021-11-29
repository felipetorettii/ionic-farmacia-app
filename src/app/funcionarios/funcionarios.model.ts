export interface Funcionario {
    id: number,
    nome: string,
    cpf: string,
    email: string,
    cargo: Cargo,
    dataContratacao: Date,
    dataNascimento: Date
}

export enum Cargo {
    RECEPCIONISTA = 'RECEPCIONISTA',
    SERVICOS_GERAIS = 'SERVICOS_GERAIS',
    SECRETARIO = 'SECRETARIA',
    ESTAGIARIO = 'ESTAGIARIO',
    FARMACEUTICO = 'FARMACEUTICO'
}