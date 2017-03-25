import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { TempService } from '../../components/services/temp-service'; 

@Component({
  selector: 'app-setor-listar-page',
  templateUrl: './setor-listar-page.component.html'
})
export class SetorListarPageComponent implements OnInit {

  private titulo: string;
  private subTitulo: string;
  private textoBusca: string;
  listaSetor: FirebaseListObservable<any>;
  
  constructor(public af: AngularFire, public router: Router) { }

  ngOnInit() {
    this.titulo = "Lista de Setores";
    this.subTitulo = "Setores disponíveis para alocação dos equipamentos";

    this.listaSetor = this.af.database.list("/setor",
      {
        query: {
          orderByChild: "nome"
        }
      }
    );
  }

  novo()
  {
    let setor = 
    {
      idSetor: "",
      nome: ""
    }
    TempService.setorTemp = setor;
    this.router.navigate(['/setorgerenciar']);
  }

  editar(setor)
  {
    TempService.setorTemp = setor;
    this.router.navigate(['/setorgerenciar']);
  }

  buscar()
  {
    this.listaSetor = this.af.database.list("/setor",
      {
        query: {
          orderByChild: "nome"
        }
      }
    );
  }

}
