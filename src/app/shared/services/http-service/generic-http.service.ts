import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { QueryStringService } from '../utils/query-string.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class GenericHttpService<T> {
	public url : String;
	public endpointUrl:String;
	constructor(
		private httpClient: HttpClient
		// private endpoint: string // TODO no suitable injection token for parameter
		
	) { 

		this.url = environment.PORTAL_BASE_PATH;
	}

	public create(item: T): Observable<T> {
		return this.httpClient.post<T>(`${this.url}/${this.endpointUrl}`, item);
	}

	public update(item: T): Observable<T> {
		return this.httpClient.put<T>(`${this.url}/${this.endpointUrl}/${item['id']}`, item);
	}

	getById(id: number): Observable<T> {
		return this.httpClient.get<T>(`${this.url}/${this.endpointUrl}/${id}`);
	}

	getAll(queryOptions: string): Observable<T[]> {
		const params = new HttpParams({fromString: queryOptions});
		let url: string  = `${this.url}/${this.endpointUrl}?${params}`;
		return this.httpClient.get<T[]>(url);
	}
	get(): Observable<T> {
		return this.httpClient.get<T>(`${this.url}/${this.endpointUrl}`);
	}

	deleteById(id: number) {
		return this.httpClient.delete(`${this.url}/${this.endpointUrl}/${id}`);
	}
}