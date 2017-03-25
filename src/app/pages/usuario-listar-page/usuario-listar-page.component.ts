import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { TempService } from '../../components/services/temp-service'; 

@Component({
  selector: 'app-usuario-listar-page',
  templateUrl: './usuario-listar-page.component.html'
})
export class UsuarioListarPageComponent implements OnInit {

  private titulo: string;
  private subTitulo: string;
  private textoBusca: string;
  listaUsuario: FirebaseListObservable<any>;
  
  constructor(public af: AngularFire, public router: Router) { }

  ngOnInit() {
    this.titulo = "Lista de Usuários";
    this.subTitulo = "Usuários disponíveis para alocação dos equipamentos";

    this.listaUsuario = this.af.database.list("/usuario",
      {
        query: {
          orderByChild: "nome"
        }
      }
    );
  }

  novo()
  {
    let usuario = 
    {
      idUsuario: "",
      nome: ""
    }
    TempService.usuarioTemp = usuario;
    this.router.navigate(['/usuariogerenciar']);
  }

  editar(usuario)
  {
    TempService.usuarioTemp = usuario;
    this.router.navigate(['/usuariogerenciar']);
  }

  buscar()
  {
    this.listaUsuario = this.af.database.list("/usuario",
      {
        query: {
          orderByChild: "nome"
        }
      }
    );
  }

}
