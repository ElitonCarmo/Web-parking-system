import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Repositorio } from '../../../repositorio/Repositorio';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //repositorioUsuario = new RepositorioUsuario();


  Repositorio;
  constructor(public navCtrl: NavController, public toastController: ToastController, private http: HttpClient) {
    this.Repositorio = new Repositorio(http);
  }

  ngOnInit() {
  }

  async formLogin(form) 
  {
    this.Repositorio.getRequest(`ServiceUsuario.svc/getUsuario?login=${form.value.login}&senha=${form.value.senha}`).then(data => {
      this.Login(data);
    }).catch(e => console.log(e));   
  }

  async Login(data) {
    if (data.nomeusuario == null || data.codigousuario == 0) {
      const toast = await this.toastController.create({
        message: 'Login ou Senha inválidos, verifique e tente novamente.',
        duration: 2000
      });
      toast.present();
    }
    else
      this.navCtrl.navigateRoot('/hometabs');
  }

}
