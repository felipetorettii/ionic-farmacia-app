import { Injectable } from "@angular/core";
import { Funcionario, Cargo } from "./funcionarios.model";

@Injectable({
    providedIn: 'root'
})
export class FuncionariosService {
    private funcionarios: Funcionario[]
    private contador = 2;

    constructor() {
        this.funcionarios = [
            {
                id: 1,
                nome: 'Mônica',
                cpf: '999.999.999-95',
                email: 'monica@hotmail.com',
                cargo: Cargo.FARMACEUTICO,
                dataContratacao: new Date(2021, 2, 12),
                dataNascimento: new Date(2001, 7, 20)
            }
        ]
    }

    public getFuncionarios() {
        return this.funcionarios;
    }

    public remove(id: number) {
      this.funcionarios = this.funcionarios.filter((funcionario) => funcionario.id !== id);
      this.contador--;
    }

    public save(funcionario: Funcionario) {
      if (funcionario.id) {
        const index = this.funcionarios.findIndex(f => f.id === funcionario.id);
        this.funcionarios[index] = funcionario;
      } else {
        const id = this.contador++;
        this.funcionarios.push({ ...funcionario, id });
      }
    }

    public findById(id: number) {
      return this.funcionarios.find(funcionario => funcionario.id === id);
    }
}