import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';
import { TempService } from '../../components/services/temp-service'; 

@Component({
  selector: 'app-suite-gerenciar-page',
  templateUrl: './suite-gerenciar-page.component.html'
})
export class SuiteGerenciarPageComponent implements OnInit, OnDestroy {

  private titulo: string;
  private subTitulo: string;
  listaSuite: FirebaseListObservable<any>;

  suite = 
  {
    idSuite: "",
    nome: ""
  }

  constructor(public af: AngularFire, public router: Router)
  { 
  }

  ngOnInit() {
    this.titulo = "Gerenciar Suite";
    this.subTitulo = "Inclusão, alteração e exclusão de suite";
    this.listaSuite = this.af.database.list("/suite");
    this.suite = TempService.suiteTemp;
  }

  ngOnDestroy()
  {
    TempService.suiteTemp = null;
  }

  salvar()
  {
    if (this.suite.idSuite == "")
    {
      this.suite.idSuite = UUID.UUID();
      this.listaSuite.push(this.suite);
    }
    else
    {
      this.af.database.object("/suite/" + TempService.suiteTemp.$key).update(this.suite);
    }
    this.router.navigate(['/suitelistar']);
  }

  deletar()
  {
      this.af.database.object("/suite/" + TempService.suiteTemp.$key).remove();
      this.router.navigate(['/suitelistar']);
  }

  voltar()
  {
      this.router.navigate(['/suitelistar']);
  }

}
