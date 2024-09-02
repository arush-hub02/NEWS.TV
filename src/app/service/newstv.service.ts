import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewstvService {
  constructor(private _http: HttpClient) {}
  // top headlines
  topHeadlinesNews =
    'https://newsapi.org/v2/everything?q=bitcoin&apiKey=25939a65106c4205be52079f5adc84af';

  newstvservice(): Observable<any> {
    return this._http.get(this.topHeadlinesNews);
  }

  // top tech news
  toptechNews =
    'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=25939a65106c4205be52079f5adc84af';

  newstvtechservice(): Observable<any> {
    return this._http.get(this.toptechNews);
  }

  // top business news
  topbusinessNews =
    'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=25939a65106c4205be52079f5adc84af';

  newstvbusinessservice(): Observable<any> {
    return this._http.get(this.topbusinessNews);
  }
}



//"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.347409088292!2d77.30971408437382!3d28.589352913002585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f433319771%3A0x6b290eb5bc4991b6!2s91springboard!5e0!3m2!1sen!2sin!4v1724907391708!5m2!1sen!2sin"