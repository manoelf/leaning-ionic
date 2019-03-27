import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public bemvindo:string = "Bem vindo ao IONIC 4 =D";

  constructor(public navCtrl: NavController) {

  }

  public test():void {
    alert("A função funcionou");
  }

  ionViewDidLoad() {
    this.test();
  }

}
