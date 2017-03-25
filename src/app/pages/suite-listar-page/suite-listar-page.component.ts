import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { TempService } from '../../components/services/temp-service'; 

@Component({
  selector: 'app-suite-listar-page',
  templateUrl: './suite-listar-page.component.html'
})
export class SuiteListarPageComponent implements OnInit {

  private titulo: string;
  private subTitulo: string;
  private textoBusca: string;
  listaSuite: FirebaseListObservable<any>;
  
  constructor(public af: AngularFire, public router: Router) { }

  ngOnInit() {
    this.titulo = "Lista de Suites";
    this.subTitulo = "Usuários disponíveis para alocação dos suite";

    this.listaSuite = this.af.database.list("/suite",
      {
        query: {
          orderByChild: "nome"
        }
      }
    );
  }

  novo()
  {
    let suite = 
    {
      idSuite: "",
      nome: ""
    }
    TempService.suiteTemp = suite;
    this.router.navigate(['/suitegerenciar']);
  }

  editar(suite)
  {
    TempService.suiteTemp = suite;
    this.router.navigate(['/suitegerenciar']);
  }

  buscar()
  {
    this.listaSuite = this.af.database.list("/suite",
      {
        query: {
          orderByChild: "nome"
        }
      }
    );
  }

}
