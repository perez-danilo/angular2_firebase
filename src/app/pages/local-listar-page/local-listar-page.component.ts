import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { TempService } from '../../components/services/temp-service'; 

@Component({
  selector: 'app-local-listar-page',
  templateUrl: './local-listar-page.component.html',
  providers: []
})
export class LocalListarPageComponent implements OnInit {

  private titulo: string;
  private subTitulo: string;
  private textoBusca: string;
  listaLocal: FirebaseListObservable<any>;
  
  constructor(public af: AngularFire, public router: Router) { }

  ngOnInit() {
    this.titulo = "Lista de Locais";
    this.subTitulo = "Locais disponíveis para alocação dos equipamentos";

    this.listaLocal = this.af.database.list("/local",
      {
        query: {
          orderByChild: "nome"
        }
      }
    );
  }

  novo()
  {
    let local = 
    {
      idLocal: "",
      nome: ""
    }
    TempService.localTemp = local;
    this.router.navigate(['/localgerenciar']);
  }

  editar(local)
  {
    TempService.localTemp = local;
    this.router.navigate(['/localgerenciar']);
  }

  buscar()
  {
    this.listaLocal = this.af.database.list("/local",
      {
        query: {
          orderByChild: "nome"
        }
      }
    );
  }

}
