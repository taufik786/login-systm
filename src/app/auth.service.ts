import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  FetchedApi(url: string, params: any = {}, headers: any = new Headers({ 'Content-Type': 'application/json' })) {
    var options = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    params['artl_uuid']='571';
    params['token_param'] = {};
    params['token_param']['device_type'] = 'w';
    params['token_param']['host'] = '';
    let hitObjStr = JSON.stringify(params);
    let encData = this.encryptutf8(hitObjStr);
    let body = JSON.stringify({'data': encData });
    return this.http.post(url, body, options);

  }
  encryptutf8(data) {
    try {
    return btoa(unescape(encodeURIComponent(data)));
    } catch (err) {
    console.log(err);
    return data;
    }
    }


  // register(body: any): Observable<any> {
  //   return this.http.post('https://articleuat.study24x7.net:8443/4.0.0.1/article/getSnglArtlDetails', body)
  // }


}
