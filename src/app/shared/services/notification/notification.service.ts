import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    public snackBar: MatSnackBar,
    private zone: NgZone) { }

  showSuccess(message: string): void {
    // Had an issue with the snackbar being ran outside of angular's zone.
    this.zone.run(() => {
      this.snackBar.open(message, 'Ok', {
        duration: 5000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['blue-snackbar']
      });
    });
  }

  showMessage(message: string, action: string, className: string): void {
    // Had an issue with the snackbar being ran outside of angular's zone.
    this.zone.run(() => {
      this.snackBar.open(message, action, {
        duration: 5000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: [className]
      });
    });
  }

  showError(message: string): void {
    this.zone.run(() => {
      // The second parameter is the text in the button. 
      // In the third, we send in the css class for the snack bar.
      // this.snackBar.open(message, 'X', {panelClass: ['error']});
      this.snackBar.open(message, 'Close', {
        duration: 20000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
        panelClass: ['red-snackbar']
      });
    });
  }
}
