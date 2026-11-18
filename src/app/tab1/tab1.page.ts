import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController,
              public navCtrl: NavController) {}

  async Logout() {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Deseja realmente <strong>Sair</strong> ?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.navCtrl.navigateRoot('');
          }
        }
      ]
    });

    await alert.present();
  }

}
