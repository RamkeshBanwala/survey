import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppPreBootstrapService {

  constructor() {
  }
  Init() {
      return new Promise<void>((resolve, reject) => {
          console.log('Load all master data here AppPrebootStrap init() called');
          setTimeout(() => {
              console.log('AppInitService Finished');
              resolve();
          }, 6000);
      });
  }
}
