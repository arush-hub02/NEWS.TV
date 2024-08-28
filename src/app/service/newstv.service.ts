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
    'https://newsapi.org/v2/everything?q=bitcoin&apiKey=3e10b462a97c48d9a796a1f9a19d1976';

  newstvservice(): Observable<any> {
    return this._http.get(this.topHeadlinesNews);
  }

  // top tech news
  toptechNews =
    'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=3e10b462a97c48d9a796a1f9a19d1976';

  newstvtechservice(): Observable<any> {
    return this._http.get(this.toptechNews);
  }

  // top business news
  topbusinessNews =
    'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3e10b462a97c48d9a796a1f9a19d1976';

  newstvbusinessservice(): Observable<any> {
    return this._http.get(this.topbusinessNews);
  }
}
