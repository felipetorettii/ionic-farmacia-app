import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'remedios-list',
    loadChildren: () => import('./remedios/remedios-list/remedios-list.module').then( m => m.RemediosListPageModule)
  },
  {
    path: 'remedios-register',
    loadChildren: () => import('./remedios/remedios-register/remedios-register.module').then( m => m.RemediosRegisterPageModule)
  },
  {
    path: 'funcionarios-list',
    loadChildren: () => import('./funcionarios/funcionarios-list/funcionarios-list.module').then( m => m.FuncionariosListPageModule)
  },
  {
    path: 'funcionarios-register',
    loadChildren: () => import('./funcionarios/funcionarios-register/funcionarios-register.module').then( m => m.FuncionariosRegisterPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
