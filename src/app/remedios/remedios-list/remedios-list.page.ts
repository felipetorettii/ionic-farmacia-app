import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { Remedio } from "../remedios.model";
import { RemediosService } from "../remedios.service";

@Component({
    selector: 'app-remedios-list',
    templateUrl: './remedios-list.page.html',
    styleUrls: ['./remedios-list.page.scss']
})
export class RemediosListPage implements OnInit {
    ngOnInit() {}

    remedios: Remedio[]

    constructor(
        private alertController: AlertController,
        private remediosService: RemediosService
    ) {
        this.remedios = this.remediosService.getRemedios()
    }


    excluir(remedio: Remedio) {
        this.alertController
        .create({
            header: 'Exclusão',
            message: `Você deseja excluir o remédio <b>${remedio.nome}</b>?`,
            buttons: [
            {
                text: 'Sim',
                handler: () => {
                this.remediosService.remove(remedio.nome);
                this.remedios = this.remediosService.getRemedios();
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