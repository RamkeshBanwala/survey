import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from '../../services/styles/theme-service';
import { Observable } from 'rxjs/internal/Observable';
import { Option } from '../../../models/Option';
import  *  as  optionsJson  from  'src/assets/options.json';
import { StyleManagerService } from 'src/app/shared/services/styles/style-manager.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss']
})
export class AppToolbarComponent implements OnInit {

  
  options: Array<Option> = optionsJson['default'];
  selectedTheme: Option;
  
  private readonly stylesBasePath = '../assets/styles/prebuilt-themes/';
  @Input() public homeTitle: string;

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
