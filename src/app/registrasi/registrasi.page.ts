import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-registrasi',
  templateUrl: './registrasi.page.html',
  styleUrls: ['./registrasi.page.scss'],
})
export class RegistrasiPage implements OnInit {

  constructor(public alert:AlertController, public router:Router) { }

  ngOnInit() {
  }

  async login(){
    this.showAlert("Login Berhasil","Selamat Datang");
    console.log("Login Berhasil")
    this.router.navigate(['/halamanutama'])
  }

  async showAlert(header:string, message:string){
    const alert = await this.alert.create({
      header,
      message,
      buttons:["OK"]
    })
    await alert.present()
  }
}
