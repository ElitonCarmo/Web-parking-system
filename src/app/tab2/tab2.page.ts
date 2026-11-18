import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Repositorio } from '../../repositorio/Repositorio';
import { HttpClient } from '@angular/common/http';
import { DTOMensalistaPessoa } from 'src/model/DTOMensalistaPessoa';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  Mensalistas: Array<DTOMensalistaPessoa>;
  ShowMensalistas: Array<DTOMensalistaPessoa> = new Array<DTOMensalistaPessoa>();

  Repositorio;

  constructor(public modalController: ModalController, public navCtrl: NavController,
    private router: Router, private http: HttpClient) {

    this.Mensalistas = new Array<DTOMensalistaPessoa>();
    this.ShowMensalistas = new Array<DTOMensalistaPessoa>();
    
    this.Repositorio = new Repositorio(http);
  }

  ngOnInit(): void {

    this.Repositorio.getRequest('ServiceMensalista.svc/getMensalistas').then(data => {
      this.Mensalistas = data;
      this.exibeMensalistas('');
    }).catch(e => console.log(e));

  }

  exibeMensalistas(Texto) {

    if (Texto == '')
      this.ShowMensalistas = this.Mensalistas;
    else
      this.ShowMensalistas = this.Mensalistas.filter(Mensalista => {
        for (let key in Mensalista)
          if (Mensalista[key].toString().toUpperCase().includes(Texto.toUpperCase()))
            return true;

        return false;
      });
  }

  ClickResumo(Item) {
    let navigationExtras: NavigationExtras = {
      state: {
        Item: Item
      }
    };
    this.router.navigate(['mensalistadetalhado'], navigationExtras);
  }

}
