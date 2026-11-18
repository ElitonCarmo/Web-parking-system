import { HttpClient } from '@angular/common/http';
import { IRepositorio } from '../repositorio/IRepositorio';

export class Repositorio implements IRepositorio {

    urlBase: string = 'http://localhost:23180/';

    constructor(private http: HttpClient) {
    }

    getRequest(service: string) {
        return new Promise(resolve => {
            this.http.get(this.urlBase + service).subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    postRequest(service: string, data: any) {

    }

}