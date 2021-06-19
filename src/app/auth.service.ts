import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  FetchedApi(
    url: string,
    params: any = {},
    headers: any = new Headers({ 'Content-Type': 'application/json' })
  ) {
    var options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    params['artl_uuid'] = '571';
    params['token_param'] = {};
    params['token_param']['device_type'] = 'w';
    params['token_param']['host'] = '';
    let hitObjStr = JSON.stringify(params);
    let encData = this.encryptutf8(hitObjStr);
    let body = JSON.stringify({ data: encData });
    return this.http.post(url, body, options);
  }

  fetchTxtApi(url: string, params: any = {}, headers: any = new Headers({ 'Content-Type': 'application/json' })) {
    var options = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    params['artl_id']='571';
    params['token_param'] = {};
    params['token_param']['device_type'] = 'w';
    params['token_param']['host'] = '';
    let TextObjStr = JSON.stringify(params);
    let encodeText = this.encryptutf8(TextObjStr);
    let body = JSON.stringify({'data': encodeText });
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
}
