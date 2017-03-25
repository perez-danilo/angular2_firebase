import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { TempService } from '../../components/services/temp-service'; 

@Component({
  selector: 'app-equipamento-listar-page',
  templateUrl: './equipamento-listar-page.component.html',
  providers: []
})
export class EquipamentoListarPageComponent implements OnInit {

  private titulo: string;
  private subTitulo: string;
  private textoBusca: string;
  listaEquipamento: FirebaseListObservable<any>;
  
  constructor(public af: AngularFire, public router: Router) { }

  ngOnInit() {
    this.titulo = "Lista de Equipamentos";
    this.subTitulo = "Equipamentos disponíveis para alocação dos equipamentos";

    this.listaEquipamento = this.af.database.list("/equipamento",
      {
        query: {
          orderByChild: "nome"
        }
      }
    );
  }

  novo()
  {
    let equipamento = 
    {
      idEquipamento: "",
      nome: ""
    }
    TempService.equipamentoTemp = equipamento;
    this.router.navigate(['/equipamentogerenciar']);
  }

  editar(equipamento)
  {
    TempService.equipamentoTemp = equipamento;
    this.router.navigate(['/equipamentogerenciar']);
  }

  buscar()
  {
    this.listaEquipamento = this.af.database.list("/equipamento",
      {
        query: {
          orderByChild: "nome"
        }
      }
    );
  }

}
