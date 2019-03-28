import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public bemvindo:string = "Bem vindo ao IONIC 4 =D";
  public lista:Array<string> = ['teste 1', 'teste 2', 'teste 3', 'teste 4', 'teste 5', ];

  constructor(public navCtrl: NavController) {

  }



}
