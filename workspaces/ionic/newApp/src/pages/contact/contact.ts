import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public contatos:Array<object>;
  private baseURL:String;

  constructor(public navCtrl: NavController, public http : Http) {
    this.baseURL = "https://api.themoviedb.org/3/";
    this.contatos = [
      {
      "nome": "Bruno",
      "img": "https://images.unsplash.com/photo-1503430935654-c3847b9289eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      "msg": "Fala parceiro, tudo tranquilo?"
    },
      {
      "nome": "Tcharlys",
      "img": "https://images.unsplash.com/photo-1523278669709-c05da80b6a65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      "msg": "Blezinha mano, tudo massa."
    },
      {
      "nome": "Fernanda",
      "img": "https://i.kinja-img.com/gawker-media/image/upload/s--XPhgJ_a2--/c_scale,f_auto,fl_progressive,q_80,w_800/fjagu4f1yxjka7y7zy2p.jpg",
      "msg": "Opa galera do bem!"
    }
    ];
  }

  private getAPIKey():string  {
    return "cd3cf1610c3a51ffd331f804fef7aaa6";
  }

  ionViwDidLoad() {
    this.http.get(this.baseURL + "movie/latest" + this.getAPIKey()).subscribe(
    data => {
      const obj = (data as any);
      const obj_json = JSON.parse(obj);
      console.log(obj_json);
    },
    erro => {
    console.log(erro);
    }
  );
  }

}
