import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';
import { TempService } from '../../components/services/temp-service'; 

@Component({
  selector: 'app-so-gerenciar-page',
  templateUrl: './so-gerenciar-page.component.html'
})
export class SOGerenciarPageComponent implements OnInit, OnDestroy {

  private titulo: string;
  private subTitulo: string;
  listaSO: FirebaseListObservable<any>;

  so = 
  {
    idSO: "",
    nome: ""
  }

  constructor(public af: AngularFire, public router: Router)
  { 
  }

  ngOnInit() {
    this.titulo = "Gerenciar S.O.";
    this.subTitulo = "Inclusão, alteração e exclusão de S.O.";
    this.listaSO = this.af.database.list("/so");
    this.so = TempService.soTemp;
  }

  ngOnDestroy()
  {
    TempService.soTemp = null;
  }

  salvar()
  {
    if (this.so.idSO == "")
    {
      this.so.idSO = UUID.UUID();
      this.listaSO.push(this.so);
    }
    else
    {
      this.af.database.object("/so/" + TempService.soTemp.$key).update(this.so);
    }
    this.router.navigate(['/solistar']);
  }

  deletar()
  {
      this.af.database.object("/so/" + TempService.soTemp.$key).remove();
      this.router.navigate(['/solistar']);
  }

  voltar()
  {
      this.router.navigate(['/solistar']);
  }

}
