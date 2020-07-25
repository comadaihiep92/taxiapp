import { Component, OnInit } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

@Component({
  selector: 'app-vehicle-licence',
  templateUrl: './vehicle-licence.page.html',
  styleUrls: ['./vehicle-licence.page.scss'],
})
export class VehicleLicencePage implements OnInit {

  constructor(private fileChooser: FileChooser) { }

  choiseFile() {
    this.fileChooser.open()
    .then(uri => console.log(uri))
    .catch(e => console.log(e));
  }


 

  
  ngOnInit() {
   
  }
  

}
