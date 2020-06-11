import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { GenericHttpService } from '../../services/http-service/generic-http.service';
import { environment } from 'src/environments/environment';
import { AppConstants } from 'src/app/constants/app-constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-object-form',
  templateUrl: './object-form.component.html',
  styleUrls: ['./object-form.component.scss']
})
export class ObjectFormComponent implements OnInit {

  private confiSubscription: Subscription;
  constructor(private route: ActivatedRoute,
    private http: HttpClient,
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
          console.log(data);
        })
      }
    );
  }

}
