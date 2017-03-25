import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';
import { TempService } from '../../components/services/temp-service'; 

@Component({
  selector: 'app-modelo-gerenciar-page',
  templateUrl: './modelo-gerenciar-page.component.html'
})
export class ModeloGerenciarPageComponent implements OnInit, OnDestroy {

  private titulo: string;
  private subTitulo: string;
  listaModelo: FirebaseListObservable<any>;

  modelo = 
  {
    idModelo: "",
    nome: ""
  }

  constructor(public af: AngularFire, public router: Router)
  { 
  }

  ngOnInit() {
    this.titulo = "Gerenciar Modelo";
    this.subTitulo = "Inclusão, alteração e exclusão de modelo";
    this.listaModelo = this.af.database.list("/modelo");
    this.modelo = TempService.modeloTemp;
  }

  ngOnDestroy()
  {
    TempService.modeloTemp = null;
  }

  salvar()
  {
    if (this.modelo.idModelo == "")
    {
      this.modelo.idModelo = UUID.UUID();
      this.listaModelo.push(this.modelo);
    }
    else
    {
      this.af.database.object("/modelo/" + TempService.modeloTemp.$key).update(this.modelo);
    }
    this.router.navigate(['/modelolistar']);
  }

  deletar()
  {
      this.af.database.object("/modelo/" + TempService.modeloTemp.$key).remove();
      this.router.navigate(['/modelolistar']);
  }

  voltar()
  {
      this.router.navigate(['/modelolistar']);
  }

}
