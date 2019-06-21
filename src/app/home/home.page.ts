import { Component } from '@angular/core';

import { NewsApiGlobal } from '../models/newsapi-global.model';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  news: NewsApiGlobal = new NewsApiGlobal();

  constructor(private newsapiService: NewsapiService) {
    
  }


  customAlertOptions: any = {
    header: 'Real time information',
    message: 'discover the latest information published on the web according to your country of choice.',
    translucent: true
  }

  public selectedCuntry = '';

  public selectChangeHandler(event) {
    this.selectedCuntry = event.target.value;
  //  console.log(this.selectedCuntry);
    this.newsapiService.getArticles(event.target.value)
    .then(newsFetched => {
        this.news = newsFetched;
        console.log(this.news);
      }
    )
  }

}
