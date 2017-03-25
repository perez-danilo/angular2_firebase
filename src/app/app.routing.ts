import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { LocalListarPageComponent } from './pages/local-listar-page/local-listar-page.component';
import { LocalGerenciarPageComponent } from './pages/local-gerenciar-page/local-gerenciar-page.component';
import { SetorListarPageComponent } from './pages/setor-listar-page/setor-listar-page.component';
import { SetorGerenciarPageComponent } from './pages/setor-gerenciar-page/setor-gerenciar-page.component';
import { UsuarioListarPageComponent } from './pages/usuario-listar-page/usuario-listar-page.component';
import { UsuarioGerenciarPageComponent } from './pages/usuario-gerenciar-page/usuario-gerenciar-page.component';
import { EquipamentoListarPageComponent } from './pages/equipamento-listar-page/equipamento-listar-page.component';
import { EquipamentoGerenciarPageComponent } from './pages/equipamento-gerenciar-page/equipamento-gerenciar-page.component';
import { MarcaListarPageComponent } from './pages/marca-listar-page/marca-listar-page.component';
import { MarcaGerenciarPageComponent } from './pages/marca-gerenciar-page/marca-gerenciar-page.component';
import { ModeloListarPageComponent } from './pages/modelo-listar-page/modelo-listar-page.component';
import { ModeloGerenciarPageComponent } from './pages/modelo-gerenciar-page/modelo-gerenciar-page.component';
import { SOListarPageComponent } from './pages/so-listar-page/so-listar-page.component';
import { SOGerenciarPageComponent } from './pages/so-gerenciar-page/so-gerenciar-page.component';
import { SuiteListarPageComponent } from './pages/suite-listar-page/suite-listar-page.component';
import { SuiteGerenciarPageComponent } from './pages/suite-gerenciar-page/suite-gerenciar-page.component';

const appRoutes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'home', component: HomePageComponent},
    {path: 'locallistar', component: LocalListarPageComponent},
    {path: 'localgerenciar', component: LocalGerenciarPageComponent},
    {path: 'setorlistar', component: SetorListarPageComponent},
    {path: 'setorgerenciar', component: SetorGerenciarPageComponent},
    {path: 'usuariolistar', component: UsuarioListarPageComponent},
    {path: 'usuariogerenciar', component: UsuarioGerenciarPageComponent},
    {path: 'equipamentolistar', component: EquipamentoListarPageComponent},
    {path: 'equipamentogerenciar', component: EquipamentoGerenciarPageComponent},
    {path: 'marcalistar', component: MarcaListarPageComponent},
    {path: 'marcagerenciar', component: MarcaGerenciarPageComponent},
    {path: 'modelolistar', component: ModeloListarPageComponent},
    {path: 'modelogerenciar', component: ModeloGerenciarPageComponent},
    {path: 'solistar', component: SOListarPageComponent},
    {path: 'sogerenciar', component: SOGerenciarPageComponent},
    {path: 'suitelistar', component: SuiteListarPageComponent},
    {path: 'suitegerenciar', component: SuiteGerenciarPageComponent}
];

export const RoutingProvider: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
