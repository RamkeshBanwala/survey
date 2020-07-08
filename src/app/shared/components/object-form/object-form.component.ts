import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { GenericHttpService } from '../../services/http-service/generic-http.service';
import { environment } from 'src/environments/environment';
import { AppConstants } from 'src/app/constants/app-constants';
import { HttpClient } from '@angular/common/http';
import { IPageConfiguration } from '../../models/page-configuration-model';
import { IFields } from 'src/app/models/fields-info';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-object-form',
  templateUrl: './object-form.component.html',
  styleUrls: ['./object-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ObjectFormComponent implements OnInit {

  private confiSubscription: Subscription;
  public pageConfigurationData: IPageConfiguration = null;
  public fields: IFields = null;
  public isEdit: boolean = true;
  public frmGroup: FormGroup = new FormGroup({});
  public isSubmitted: false;

  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder,
    private httpService: GenericHttpService<any>
  ) { }

  ngOnInit(): void {
    this.getConfigFile();
  }
  private getConfigFile() {



    this.confiSubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
        this.httpService.endpointUrl = environment.CONFIG_FILES_LOCATION +
          (queryParam['O'] !== undefined ? queryParam['O'] : 0) + AppConstants.JSON;

        this.httpService.get().subscribe((data: any) => {
          this.pageConfigurationData = data;
          this.fields = this.pageConfigurationData.Sections[0]['Fields'];
          console.dir(this.fields);
          const group: any = {};
          let validationsGroup: any[] = [];
          let dataRow: any = {};
          _.forEach(this.fields, function (field) {
            group[field.Name] = validationsGroup.length > 0 ? new FormControl(dataRow[field.Name] || '', validationsGroup)
              : new FormControl(dataRow[field.Name] || '');

          });
          console.dir(group);
          // this.frmGroup = new FormGroup(group);
          this.frmGroup = this.fb.group(group);
          // this.frmGroup = this.fb.group({
          //   sourceField: ['', Validators.required],
          //   targetField: ['', Validators.required]
          // });
        })
      }
    );
  }
  public saveSurvey() {

  }
  public toggleChilds(header, event) {
    const order = header.Order + '.';
    const childs = _.filter(this.fields, (h: IFields) => {
      return ((h.Order && (h.Order.substr(0, order.length).indexOf(order) > -1)) || (h.Order && h.Order == header.Order));
    });
    _.forEach(childs, (h) => {
      h.IsVisible = !h.IsVisible;
    });
    const ele = event.target || event.srcElement;
    console.log("#before#" + ele.className);
    if (ele.className == 'fa fa-minus-square' || ele.className == 'fa fa-minus' 
        || ele.className == 'fa fa-minus ng-star-inserted') {
      ele.className = 'fa fa-plus-square';
    }
    else {
      ele.className = 'fa fa-minus-square';
    }
    console.log("#after#" + ele.className);
  }
}
