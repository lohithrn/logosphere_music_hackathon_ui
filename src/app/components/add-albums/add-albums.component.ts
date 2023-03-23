import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
@Component({
  selector: 'app-add-albums',
  templateUrl: './add-albums.component.html',
  styleUrls: ['./add-albums.component.scss'],
})
export class AddAlbumsComponent implements OnInit {
  file_url: any = '../../../assets/images/upload-img.png';
  album_name: any;

  constructor(public alertService:AlertService,public router:Router) {}

  ngOnInit(): void {}

  selectFiles(event: any): void {
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.file_url = event.target.result;
      console.log(this.file_url);
      console.log('event', event);
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  onSubmit() {
   var postData = [
      {album_name:"Arjit Singh"},
      {album_name:"Mika Singh"},
      {album_name:"Sonu Nigam"}
    ]
    localStorage.setItem('albums', JSON.stringify(postData));
    var localstorageData: any = localStorage.getItem('albums');
    localstorageData = JSON.parse(localstorageData);
    // console.log(JSON.parse(localstorageData));
    var newItem = { album_name: this.album_name, img_path: this.file_url };
    localstorageData.push(newItem);
    console.log(localstorageData);
this.alertService.showSuccessAlert("Album Added Successfully");
this.router.navigate(["./albums"]);
  }
}
