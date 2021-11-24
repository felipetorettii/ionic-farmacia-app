import { Injectable } from "@angular/core";
import { Remedio, Tarja } from "./remedios.model";

@Injectable({
    providedIn: 'root'
})
export class RemediosService {
    private remedios: Remedio[]
    private contador = 1;

    constructor() {
        this.remedios = [
            {
                id: 1,
                nome: 'Clonazepam',
                valor: 15.0,
                dataValidade: new Date(2020, 12, 12),
                generico: false,
                precisaReceita: true,
                tarja: Tarja.PRETA
            }
        ]
    }

    public getRemedios() {
        return this.remedios;
    }

    public remove(nome: string) {
      this.remedios = this.remedios.filter((remedio) => remedio.nome !== nome);
    }

    public save(remedio: Remedio) {
      if (remedio.id) {
        // atualizar
      } else {
        const id = this.contador++;
        this.remedios.push({ ...remedio, id });
      }
    }
}