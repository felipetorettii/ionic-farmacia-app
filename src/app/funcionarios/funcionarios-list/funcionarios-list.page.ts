import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { Funcionario } from "../funcionarios.model";
import { FuncionariosService } from "../funcionarios.service";

@Component({
    selector: 'app-funcionarios-list',
    templateUrl: './funcionarios-list.page.html',
    styleUrls: ['./funcionarios-list.page.scss']
})
export class FuncionariosListPage implements OnInit {
    ngOnInit() {}

    funcionarios: Funcionario[]

    constructor(
        private alertController: AlertController,
        private funcionariosService: FuncionariosService
    ) {
        this.funcionarios = this.funcionariosService.getFuncionarios()
    }


    excluir(funcionario: Funcionario) {
        this.alertController
        .create({
            header: 'Exclusão',
            message: `Você deseja excluir o funcionário ${funcionario.nome}?`,
            buttons: [
            {
                text: 'Sim',
                handler: () => {
                this.funcionariosService.remove(funcionario.id);
                this.funcionarios = this.funcionariosService.getFuncionarios();
                },
            },
            {
                text: 'Não',
            },
            ],
        })
        .then((alert) => alert.present());
    }
}