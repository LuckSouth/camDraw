import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera'

@IonicPage()
@Component({
  selector: 'page-teste',
  templateUrl: 'teste.html',
})
export class TestePage {
  public photos : any;
  base64Image: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestePage');
  }

  // takePicture(){
  //   Camera.getPicture({
  //       destinationType: Camera.DestinationType.DATA_URL,
  //       targetWidth: 1000,
  //       targetHeight: 1000
  //   }).then((imageData) => {
  //     // imageData is a base64 encoded string
  //       this.base64Image = "data:image/jpeg;base64," + imageData;
  //   }, (err) => {
  //       console.log(err);
  //   });
  // }

}
