import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-mensalista-detalhado',
  templateUrl: './modal-mensalista-detalhado.page.html',
  styleUrls: ['./modal-mensalista-detalhado.page.scss'],
})
export class ModalMensalistaDetalhadoPage implements OnInit {

  Item: {
    Codigo: '',
    DataPagamento: '',
    DataVencimento: '',
    ValorPago: '',
    ValorAPagar: '',
    CodigoPessoa: '',
    Nome: '',
    CPF: ''
  };

  constructor(private route: ActivatedRoute, private router: Router, public location: Location) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.Item = this.router.getCurrentNavigation().extras.state.Item;
        console.log(this.Item);
      }
    });
  }

  ngOnInit() {
  }

  Voltar() {
    this.location.back();
  }

}
