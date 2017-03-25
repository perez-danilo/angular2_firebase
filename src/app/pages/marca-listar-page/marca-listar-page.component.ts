import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { TempService } from '../../components/services/temp-service'; 

@Component({
  selector: 'app-marca-listar-page',
  templateUrl: './marca-listar-page.component.html'
})
export class MarcaListarPageComponent implements OnInit {

  private titulo: string;
  private subTitulo: string;
  private textoBusca: string;
  listaMarca: FirebaseListObservable<any>;
  
  constructor(public af: AngularFire, public router: Router) { }

  ngOnInit() {
    this.titulo = "Lista de Marcas";
    this.subTitulo = "Usuários disponíveis para alocação dos Marcas";

    this.listaMarca = this.af.database.list("/marca",
      {
        query: {
          orderByChild: "nome"
        }
      }
    );
  }

  novo()
  {
    let marca = 
    {
      idMarca: "",
      nome: ""
    }
    TempService.marcaTemp = marca;
    this.router.navigate(['/marcagerenciar']);
  }

  editar(marca)
  {
    TempService.marcaTemp = marca;
    this.router.navigate(['/marcagerenciar']);
  }

  buscar()
  {
    this.listaMarca = this.af.database.list("/marca",
      {
        query: {
          orderByChild: "nome"
        }
      }
    );
  }

}
