import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { TempService } from '../../components/services/temp-service'; 

@Component({
  selector: 'app-modelo-listar-page',
  templateUrl: './modelo-listar-page.component.html'
})
export class ModeloListarPageComponent implements OnInit {

  private titulo: string;
  private subTitulo: string;
  private textoBusca: string;
  listaModelo: FirebaseListObservable<any>;
  
  constructor(public af: AngularFire, public router: Router) { }

  ngOnInit() {
    this.titulo = "Lista de Modelos";
    this.subTitulo = "Usuários disponíveis para alocação dos modelo";

    this.listaModelo = this.af.database.list("/modelo",
      {
        query: {
          orderByChild: "nome"
        }
      }
    );
  }

  novo()
  {
    let modelo = 
    {
      idModelo: "",
      nome: ""
    }
    TempService.modeloTemp = modelo;
    this.router.navigate(['/modelogerenciar']);
  }

  editar(modelo)
  {
    TempService.modeloTemp = modelo;
    this.router.navigate(['/modelogerenciar']);
  }

  buscar()
  {
    this.listaModelo = this.af.database.list("/modelo",
      {
        query: {
          orderByChild: "nome"
        }
      }
    );
  }

}
