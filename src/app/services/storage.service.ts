import { Injectable } from '@angular/core';
import ls from 'localstorage-slim';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    ls.config.encrypt = true;
  }
  set(key: string, value: any) {
    ls.set(key, value);
  }
  get(key: any) {
    return ls.get(key);
  }
  remove(key: string) {
    ls.remove(key);
  }
  clear() {
    ls.clear();
  }
}
