export interface Remedio {
    id: number,
    nome: string,
    valor: number,
    precisaReceita: boolean,
    generico: boolean,
    tarja: Tarja,
    dataValidade: Date
}

export enum Tarja {
    PRETA = 'PRETA',
    AMARELA = 'AMARELA',
    VERMELHA = 'VERMELHA',
    SEM_TARJA = 'SEM_TARJA'
}