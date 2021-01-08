import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {


  constructor(private actionSheet: ActionSheetController) { }

  ngOnInit() {
  }
    async notify() {
      const actionSheetConst = await this.actionSheet.create({
        header: 'Pilih',
        buttons: [{
          text: 'Hapus',
          role: 'destructive',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Edit',
          handler: () => {
            console.log('Edit clicked');
          }
        },{
            text: 'Home',
            role: 'home',
            handler: () => {
              console.log('Home clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
          }]
        });

      (await actionSheetConst).present()
      console.log("Action Sheet")
    }

  }
