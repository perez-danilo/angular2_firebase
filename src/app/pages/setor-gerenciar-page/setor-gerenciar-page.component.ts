import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';
import { TempService } from '../../components/services/temp-service'; 

@Component({
  selector: 'app-setor-gerenciar-page',
  templateUrl: './setor-gerenciar-page.component.html'
})
export class SetorGerenciarPageComponent implements OnInit, OnDestroy {

  private titulo: string;
  private subTitulo: string;
  listaSetor: FirebaseListObservable<any>;

  setor = 
  {
    idSetor: "",
    nome: ""
  }

  constructor(public af: AngularFire, public router: Router)
  { 
  }

  ngOnInit() {
    this.titulo = "Gerenciar Setor";
    this.subTitulo = "Inclusão, alteração e exclusão de setor";
    this.listaSetor = this.af.database.list("/setor");
    this.setor = TempService.setorTemp;
  }

  ngOnDestroy()
  {
    TempService.setorTemp = null;
  }

  salvar()
  {
    if (this.setor.idSetor == "")
    {
      this.setor.idSetor = UUID.UUID();
      this.listaSetor.push(this.setor);
    }
    else
    {
      this.af.database.object("/setor/" + TempService.setorTemp.$key).update(this.setor);
    }
    this.router.navigate(['/setorlistar']);
  }

  deletar()
  {
      this.af.database.object("/setor/" + TempService.setorTemp.$key).remove();
      this.router.navigate(['/setorlistar']);
  }

  voltar()
  {
      this.router.navigate(['/setorlistar']);
  }

}
