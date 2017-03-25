import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';
import { TempService } from '../../components/services/temp-service'; 

@Component({
  selector: 'app-marca-gerenciar-page',
  templateUrl: './marca-gerenciar-page.component.html'
})
export class MarcaGerenciarPageComponent implements OnInit, OnDestroy {

  private titulo: string;
  private subTitulo: string;
  listaMarca: FirebaseListObservable<any>;

  marca = 
  {
    idMarca: "",
    nome: ""
  }

  constructor(public af: AngularFire, public router: Router)
  { 
  }

  ngOnInit() {
    this.titulo = "Gerenciar marca";
    this.subTitulo = "Inclusão, alteração e exclusão de marca";
    this.listaMarca = this.af.database.list("/marca");
    this.marca = TempService.marcaTemp;
  }

  ngOnDestroy()
  {
    TempService.marcaTemp = null;
  }

  salvar()
  {
    if (this.marca.idMarca == "")
    {
      this.marca.idMarca = UUID.UUID();
      this.listaMarca.push(this.marca);
    }
    else
    {
      this.af.database.object("/marca/" + TempService.marcaTemp.$key).update(this.marca);
    }
    this.router.navigate(['/marcalistar']);
  }

  deletar()
  {
      this.af.database.object("/marca/" + TempService.marcaTemp.$key).remove();
      this.router.navigate(['/marcalistar']);
  }

  voltar()
  {
      this.router.navigate(['/marcalistar']);
  }

}
