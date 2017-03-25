import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';
import { TempService } from '../../components/services/temp-service'; 

@Component({
  selector: 'app-equipamento-gerenciar-page',
  templateUrl: './equipamento-gerenciar-page.component.html'
})
export class EquipamentoGerenciarPageComponent implements OnInit, OnDestroy {

  private titulo: string;
  private subTitulo: string;
  listaEquipamento: FirebaseListObservable<any>;

  equipamento = 
  {
    idEquipamento: "",
    nome: ""
  }

  constructor(public af: AngularFire, public router: Router)
  { 
  }

  ngOnInit() {
    this.titulo = "Gerenciar equipamento";
    this.subTitulo = "Inclusão, alteração e exclusão de equipamento";
    this.listaEquipamento = this.af.database.list("/equipamento");
    this.equipamento = TempService.equipamentoTemp;
  }

  ngOnDestroy()
  {
    TempService.equipamentoTemp = null;
  }

  salvar()
  {
    if (this.equipamento.idEquipamento == "")
    {
      this.equipamento.idEquipamento = UUID.UUID();
      this.listaEquipamento.push(this.equipamento);
    }
    else
    {
      this.af.database.object("/equipamento/" + TempService.equipamentoTemp.$key).update(this.equipamento);
    }
    this.router.navigate(['/equipamentolistar']);
  }

  deletar()
  {
      this.af.database.object("/equipamento/" + TempService.equipamentoTemp.$key).remove();
      this.router.navigate(['/equipamentolistar']);
  }

  voltar()
  {
      this.router.navigate(['/equipamentolistar']);
  }

}
