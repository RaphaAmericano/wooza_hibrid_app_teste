import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

const { Network } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(
    private alertCtrl: AlertController, 
    private router: Router) { }

  public async getNetworkStatus() {
    const status = await Network.getStatus().then(
      async (res) => {
        console.log(res);
        if(!res.connected){
          const alert = await this.alertCtrl.create(
            {
              header: 'Atenção',
              subHeader: 'Sem conexão com a rede',
              message: 'Verifique sua conexão. Não é possível navegar sem ela',
              buttons:[
                {
                  text:'OK',
                  handler: () => {this.router.navigate(['/'])}
                }
              ]
            }
          )
          await alert.present();
        }
      } 
    );
  }

}
