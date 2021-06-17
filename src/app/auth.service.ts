import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any; // Comment this line then see error

  constructor(private http: HttpClient) { }

  FetchedApi(url: string, params: any = {}, headers: any = new Headers({ 'Content-Type': 'application/json' })) {
    var options = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    if(this.getSessionDataKey('token')){
      params['token'] = this.getSessionDataKey('token');
    }
    params['token_param'] = {};
    params['token_param']['device_type'] = 'w';
    params['token_param']['host'] = '';
    let hitObjStr = JSON.stringify(params);
    let encData = this._encriptionService.encryptutf8(hitObjStr);
    let body = JSON.stringify({'data': encData });
    return this.http.post(url, body, options);

  }

  register(body: any): Observable<any> {
    return this.http.post('https://articleuat.study24x7.net:8443/4.0.0.1/article/getSnglArtlDetails', body)
  }


}
