import { StyleManagerService } from "./style-manager.service";
import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {
  constructor(private styleManager: StyleManagerService) {}

  setTheme(themeToSet) {
    this.styleManager.setStyle(
      `node_modules/@angular/material/prebuilt-themes/${themeToSet}.css`
    );
  }
}