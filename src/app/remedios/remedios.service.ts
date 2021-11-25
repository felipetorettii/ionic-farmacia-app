import { Injectable } from "@angular/core";
import { Remedio, Tarja } from "./remedios.model";

@Injectable({
    providedIn: 'root'
})
export class RemediosService {
    private remedios: Remedio[]
    private contador = 2;

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
        const index = this.remedios.findIndex(r => r.id === remedio.id);
        this.remedios[index] = remedio;
      } else {
        const id = this.contador++;
        this.remedios.push({ ...remedio, id });
      }
    }

    public findById(id: number) {
      return this.remedios.find(remedio => remedio.id === id);
    }
}