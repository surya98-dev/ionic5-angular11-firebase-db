import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  constructor(public alert:AlertController, public router:Router) { }

  ngOnInit() {
  }

  async simpan(){
    this.showAlert("Data Berhasil Disimpan" , "Data Telah Disimpan");
    console.log("Data Telah Disimpan")
    this.router.navigate(['/halamanutama'])
  }

  async showAlert(header:string, message:string){
    const alert = await this.alert.create({
      header,
      message,
      buttons:["Save"]
    })
    await alert.present()
  }
}