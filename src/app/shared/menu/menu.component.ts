import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";

import { Option } from '../../models/Option';
import { ThemeService } from 'src/app/shared/services/theme-service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  

  @Input() options: Array<Option>;
  @Input() theme: Option;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    console.log(this.options);
  }

  constructor(private themeService: ThemeService) {}

  changeTheme(themeToSet) {
    this.themeChange.emit(themeToSet);
  }

}
