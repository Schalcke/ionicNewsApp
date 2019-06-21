import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// import 'rxjx/add/opperator/toPromise';
// import 'rxjs/add/opperator/map';

import { NewsApiGlobal } from './models/newsapi-global.model';
// import { HomePage } from './home/home.page';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {


  private baseUrl = 'https://newsapi.org/v2/';
//  private country = '';
  private apiKey = 'fa82f4c61c9b44b0b9ff4d05fc3248d3';

  constructor(private http: Http) {
    //  this.country = this.homePage.selectChangeHandler(event);
    }


  public getArticles(country): any {
    const url = `${this.baseUrl}top-headlines?country=${country}&apiKey=${this.apiKey}`;

    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as NewsApiGlobal)
    .catch(error => console.log('Une ereur est survenu ' + error));
  }
}
