import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme-service';
import { Observable } from 'rxjs/internal/Observable';
import { Option } from '../../models/Option';
import  *  as  optionsJson  from  '../../../assets/options.json';
import { StyleManagerService } from 'src/app/shared/services/style-manager.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss']
})
export class AppToolbarComponent implements OnInit {

  
  options: Array<Option> = optionsJson['default'];
  selectedTheme: Option;
  private readonly s1tylesBasePath = `../node_modules/@angular/material/prebuilt-themes/`;
  private readonly stylesBasePath = '../assets/styles/prebuilt-themes/';
  

  constructor(private readonly styleManager: StyleManagerService) {}

  ngOnInit() {
    console.log(this.options);
    this.styleManager.setStyle(`${this.stylesBasePath}deeppurple-amber.css`);
  }

  themeChangeHandler(themeToSet: Option) {
    this.selectedTheme = themeToSet;
    console.log(themeToSet);
    this.styleManager.setStyle(`${this.stylesBasePath}${themeToSet.value}.css`);
  }
}
