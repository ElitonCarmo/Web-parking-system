import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Repositorio } from '../../repositorio/Repositorio';
import { HttpClient } from '@angular/common/http';
import { DTOMensalistaPessoa } from 'src/model/DTOMensalistaPessoa';

declare var google;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  Mensalistas = [];
  valores = [];
  ObjTotais = {
    receber:0,
    recebido:0
  };
  Repositorio;
  Repositorioteste;

  constructor(public modalController: ModalController, public navCtrl: NavController,
    private router: Router, private http: HttpClient) {

    this.Mensalistas = new Array<DTOMensalistaPessoa>();
    
    this.Repositorio = new Repositorio(http);
    this.Repositorioteste = new Repositorio(http);
  }

  ngOnInit(): void {

    this.Repositorio.getRequest('ServiceMensalista.svc/getTotais').then(data => {
      this.ObjTotais.recebido = data[0].recebido;
      this.ObjTotais.receber = data[0].receber;
    }).catch(e => console.log(e));
    this.Repositorioteste.getRequest('ServiceMensalista.svc/getValores').then(data => {
      this.valores = data;
      this.drawChart();
    }).catch(e => console.log(e));
  }

  getDataMMYYYY(ddMMyyyy) {
    // Separados por /
    var Data = ddMMyyyy.split('/');
    return Data[1] + '/' + Data[2];
  }

  carregaAnalise() {

    var DtAnalise = [['Mês/Ano', 'Total Recebido', 'Total a Receber']];


    this.valores.forEach((Mensalista, index) => {

      let DataVencimentoFormatada = this.getDataMMYYYY(Mensalista.DataVencimento);
      let Posicao = DtAnalise.findIndex(Analise => Analise[0] == DataVencimentoFormatada);
      if (Posicao == -1)
        DtAnalise.push([DataVencimentoFormatada, 0, Mensalista.ValorAPagar]);
      else
        DtAnalise[Posicao][2] += Mensalista.ValorAPagar;
      let DataPagamentoFormatada = this.getDataMMYYYY(Mensalista.DataPagamento);
      if (DataPagamentoFormatada != "01/1900"){
        Posicao = DtAnalise.findIndex(Analise => Analise[0] == DataPagamentoFormatada);
      if (Posicao == -1)
        DtAnalise.push([DataPagamentoFormatada, Mensalista.ValorPago, 0]);
      else
        DtAnalise[Posicao][1] += Mensalista.ValorPago;
      }
      
    });

    console.log(DtAnalise);
    return DtAnalise;
  }

  drawChart() {

    var DtAnalise = this.carregaAnalise();
    var data = google.visualization.arrayToDataTable(
      DtAnalise
    );

    var options = {
      legend: { position: 'top', alignment: 'start' },
      chart: {
        title: 'Análise de Pagamentos',
        subtitle: 'Gerencie o valor Total que foi Recebido e o Valor total a receber por mês',
      },
      bars: 'horizontal'
    };
    var chart = new google.charts.Bar(document.getElementById('barchart_material'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
  }

}
