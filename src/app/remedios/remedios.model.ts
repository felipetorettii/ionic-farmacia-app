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
    PRETA = 'preta',
    AMARELA = 'amarela',
    VERMELHA = 'vermelha',
    SEM_TARJA = 'sem tarja'
}