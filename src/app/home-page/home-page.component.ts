import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  responseData: any;
  articals: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getArticalDetails();
    this.TimeShowInMnt();
  }

  getArticalDetails() {
    this.authService
      .FetchedApi(
        'https://articleuat.study24x7.net:8443/4.0.0.1/article/getSnglArtlDetails'
      )
      .subscribe(data => {
         this.responseData = data;
        this.articals = this.responseData.related_articles
        console.log(this.articals);
      });
  }

  TimeShowInMnt(arr){
    arr.forEach(element => {
      element.ARTICLE_READ_TIME = Math.floor(element.ARTICLE_READ_TIME/60);
      console.log(element.ARTICLE_READ_TIME);

    });
    return arr;

  }

}
