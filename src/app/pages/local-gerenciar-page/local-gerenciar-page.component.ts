import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';
import { TempService } from '../../components/services/temp-service'; 

@Component({
  selector: 'app-local-gerenciar-page',
  templateUrl: './local-gerenciar-page.component.html'
})
export class LocalGerenciarPageComponent implements OnInit, OnDestroy {

  private titulo: string;
  private subTitulo: string;
  listaLocal: FirebaseListObservable<any>;

  local = 
  {
    idLocal: "",
    nome: ""
  }

  constructor(public af: AngularFire, public router: Router)
  { 
  }

  ngOnInit() {
    this.titulo = "Gerenciar local";
    this.subTitulo = "Inclusão, alteração e exclusão de local";
    this.listaLocal = this.af.database.list("/local");
    this.local = TempService.localTemp;
  }

  ngOnDestroy()
  {
    TempService.localTemp = null;
  }

  salvar()
  {
    if (this.local.idLocal == "")
    {
      this.local.idLocal = UUID.UUID();
      this.listaLocal.push(this.local);
    }
    else
    {
      this.af.database.object("/local/" + TempService.localTemp.$key).update(this.local);
    }
    this.router.navigate(['/locallistar']);
  }

  deletar()
  {
      this.af.database.object("/local/" + TempService.localTemp.$key).remove();
      this.router.navigate(['/locallistar']);
  }

  voltar()
  {
      this.router.navigate(['/locallistar']);
  }

}
