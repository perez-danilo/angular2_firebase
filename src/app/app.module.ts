import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { Routing, RoutingProvider } from './app.routing';

import { AppComponent } from './app.component';
import { HeadbarComponent } from './components/shared/headbar/headbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SubMenuComponent } from './components/shared/sub-menu/sub-menu.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LocalListarPageComponent } from './pages/local-listar-page/local-listar-page.component';
import { LocalGerenciarPageComponent } from './pages/local-gerenciar-page/local-gerenciar-page.component';
import { SetorListarPageComponent } from './pages/setor-listar-page/setor-listar-page.component';
import { SetorGerenciarPageComponent } from './pages/setor-gerenciar-page/setor-gerenciar-page.component';
import { UsuarioListarPageComponent } from './pages/usuario-listar-page/usuario-listar-page.component';
import { UsuarioGerenciarPageComponent } from './pages/usuario-gerenciar-page/usuario-gerenciar-page.component';
import { EquipamentoListarPageComponent } from './pages/equipamento-listar-page/equipamento-listar-page.component';
import { EquipamentoGerenciarPageComponent } from './pages/equipamento-gerenciar-page/equipamento-gerenciar-page.component';
import { MarcaGerenciarPageComponent } from './pages/marca-gerenciar-page/marca-gerenciar-page.component';
import { MarcaListarPageComponent } from './pages/marca-listar-page/marca-listar-page.component';
import { ModeloListarPageComponent } from './pages/modelo-listar-page/modelo-listar-page.component';
import { ModeloGerenciarPageComponent } from './pages/modelo-gerenciar-page/modelo-gerenciar-page.component';
import { SOGerenciarPageComponent } from './pages/so-gerenciar-page/so-gerenciar-page.component';
import { SOListarPageComponent } from './pages/so-listar-page/so-listar-page.component';
import { SuiteListarPageComponent } from './pages/suite-listar-page/suite-listar-page.component';
import { SuiteGerenciarPageComponent } from './pages/suite-gerenciar-page/suite-gerenciar-page.component';

export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
}

@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    FooterComponent,
    SubMenuComponent,
    HomePageComponent,
    LocalListarPageComponent,
    LocalGerenciarPageComponent,
    SetorListarPageComponent,
    SetorGerenciarPageComponent,
    UsuarioListarPageComponent,
    UsuarioGerenciarPageComponent,
    EquipamentoListarPageComponent,
    EquipamentoGerenciarPageComponent,
    MarcaGerenciarPageComponent,
    MarcaListarPageComponent,
    ModeloListarPageComponent,
    ModeloGerenciarPageComponent,
    SOGerenciarPageComponent,
    SOListarPageComponent,
    SuiteListarPageComponent,
    SuiteGerenciarPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
