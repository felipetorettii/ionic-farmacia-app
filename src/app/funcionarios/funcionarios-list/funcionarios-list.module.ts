import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { FuncionariosListPageRoutingModule } from "./funcionarios-list-routing.module";
import { FuncionariosListPage } from "./funcionarios-list.page";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FuncionariosListPageRoutingModule
    ],
    declarations: [FuncionariosListPage]
})

export class FuncionariosListPageModule {}