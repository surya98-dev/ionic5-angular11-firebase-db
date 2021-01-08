import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tambahdata',
  templateUrl: './tambahdata.page.html',
  styleUrls: ['./tambahdata.page.scss'],
})
export class TambahdataPage implements OnInit {

  constructor(public alert:AlertController, public router:Router) { }

  ngOnInit() {
  }

  async tambahdata(){
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
