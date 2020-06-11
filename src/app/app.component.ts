import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-survey-app';
  subtitle = 'sub title';
  homeTitle = 'Karora-Survey Ramkesh Banwala';

  constructor() { }

  /**
   * Clean the browser storage on browser close
   * @param event Browser window close
   */
  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
    this.clearLocalStorage();
  }

  /** When user close the browser window clear data from localStorage */
  private clearLocalStorage() {
    
  }
}
