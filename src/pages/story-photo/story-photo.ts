import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {CameraPreview} from "@ionic-native/camera-preview";
import {CanvasDraw} from "../../components/canvas-draw/canvas-draw";


@Component({
  selector: 'page-story-photo',
  templateUrl: 'story-photo.html',
})
export class StoryPhotoPage {


  //base64 da foto
  srcPhoto = "";
  //array com as cores
  availableColours;
  //modo inicial
  mode = 'camera';
  //componente canvas
  @ViewChild('myCanvasDraw')
  canvas : CanvasDraw


  constructor(public navCtrl: NavController, public navParams: NavParams, private cameraPreview : CameraPreview, private platform : Platform) {
    this.startCamera();
  }

  startCamera(){

    try{
      this.cameraPreview.stopCamera().then(() =>{
        console.log("camera started")

      }).catch(e =>{
        console.log("camera error")
      });
    }catch(e) {

    }
    // start camera
    this.cameraPreview.startCamera({x: 0, y: 0, width:this.platform.width(), height: this.platform.height(), toBack: true, previewDrag: false, tapPhoto: true});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoryPhotoPage');
  }

  ionViewWillLeave(){
    this.cameraPreview.stopCamera();
  }

  /**
   * Switch from back to front cämera
   */
  refresh(){
    this.cameraPreview.switchCamera();
  }

  /**
   * Back button
   */
  back(){
      this.navCtrl.pop()
  }


  //inicia modo brush e slide das cores
  modeBrush(){
    this.mode = 'brush'
    this.availableColours = this.canvas.availableColours;
  }

  //ao salvar vai adicionar ao feed de Story
  save(){
    console.log("TODO")
  }

  //ao finalizar o desenho na foto
  done(){
    this.mode = 'photo';
  }

  takePicture(){

    var self = this;

    const pictureOpts = {
      quality: 80
    }


    //tira a foto e coloca modo 'photo'
    this.cameraPreview.takePicture(pictureOpts).then(base64PictureData =>{
      self.srcPhoto = base64PictureData;
      this.mode = 'photo';

      self.cameraPreview.hide().then(() => {
      })

    });
  }



}
