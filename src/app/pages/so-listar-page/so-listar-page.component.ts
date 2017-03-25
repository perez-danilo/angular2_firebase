import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { TempService } from '../../components/services/temp-service'; 

@Component({
  selector: 'app-so-listar-page',
  templateUrl: './so-listar-page.component.html'
})
export class SOListarPageComponent implements OnInit {

  private titulo: string;
  private subTitulo: string;
  private textoBusca: string;
  listaSO: FirebaseListObservable<any>;
  
  constructor(public af: AngularFire, public router: Router) { }

  ngOnInit() {
    this.titulo = "Lista de S.O.";
    this.subTitulo = "Usuários disponíveis para alocação dos S.O.";

    this.listaSO = this.af.database.list("/so",
      {
        query: {
          orderByChild: "nome"
        }
      }
    );
  }

  novo()
  {
    let so = 
    {
      idSO: "",
      nome: ""
    }
    TempService.soTemp = so;
    this.router.navigate(['/sogerenciar']);
  }

  editar(so)
  {
    TempService.soTemp = so;
    this.router.navigate(['/sogerenciar']);
  }

  buscar()
  {
    this.listaSO = this.af.database.list("/so",
      {
        query: {
          orderByChild: "nome"
        }
      }
    );
  }

}
