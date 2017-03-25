import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';
import { TempService } from '../../components/services/temp-service'; 

@Component({
  selector: 'app-usuario-gerenciar-page',
  templateUrl: './usuario-gerenciar-page.component.html'
})
export class UsuarioGerenciarPageComponent implements OnInit, OnDestroy {

  private titulo: string;
  private subTitulo: string;
  listaUsuario: FirebaseListObservable<any>;

  usuario = 
  {
    idUsuario: "",
    nome: ""
  }

  constructor(public af: AngularFire, public router: Router)
  { 
  }

  ngOnInit() {
    this.titulo = "Gerenciar Usuário";
    this.subTitulo = "Inclusão, alteração e exclusão de usuario";
    this.listaUsuario = this.af.database.list("/usuario");
    this.usuario = TempService.usuarioTemp;
  }

  ngOnDestroy()
  {
    TempService.usuarioTemp = null;
  }

  salvar()
  {
    if (this.usuario.idUsuario == "")
    {
      this.usuario.idUsuario = UUID.UUID();
      this.listaUsuario.push(this.usuario);
    }
    else
    {
      this.af.database.object("/usuario/" + TempService.usuarioTemp.$key).update(this.usuario);
    }
    this.router.navigate(['/usuariolistar']);
  }

  deletar()
  {
      this.af.database.object("/usuario/" + TempService.usuarioTemp.$key).remove();
      this.router.navigate(['/usuariolistar']);
  }

  voltar()
  {
      this.router.navigate(['/usuariolistar']);
  }

}
