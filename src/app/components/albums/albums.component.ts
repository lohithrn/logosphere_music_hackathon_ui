import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  constructor(
    private storage: StorageService
  ) { }

  album_array : { [key: string]: any }[] = [
    { key1: 'value1', key2: 123 },
    { key1: 'value2', key2: 456 },
    { key1: 'value3', key2: true }
  ];

  ngOnInit(): void {
    this.storage.set('album', this.album_array);
    console.log('get -', this.storage.get('menu'));
  }

}
