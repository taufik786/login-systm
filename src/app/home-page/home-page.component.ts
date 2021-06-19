import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  responseData: any;
  articals: any;
  artMnt: any;
  trendings: any;
  featureCources: any;
  TimeInMnt: any;
  DateFormat: any;
  MongoDatas: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getArticalDetails();
    this.getTextDetail();
  }

  getArticalDetails() {
    this.authService
      .FetchedApi(
        'https://articleuat.study24x7.net:8443/4.0.0.1/article/getSnglArtlDetails'
      )
      .subscribe(data => {
        this.responseData = data;
        // console.log(this.responseData);

        this.articals = this.responseData.related_articles;
        // console.log(this.articals);

        this.trendings = this.responseData.trending_articles;
        // console.log(this.trendings);

        this.featureCources = this.responseData.feature_courses.BANNERS[0];
        // console.log(this.featureCources);

        this.TimeInMnt = Math.floor(this.responseData.ARTICLE_READ_TIME / 60);
        // console.log(this.TimeInMnt);

        this.DateFormat =new Date(this.responseData.UPDATE_DATE_TIME);
        // console.log(this.DateFormat);




        var arr = this.responseData.related_articles;
        arr.forEach((element) => {
          element.ARTICLE_READ_TIME = Math.floor(
            element.ARTICLE_READ_TIME / 60
          );
          this.artMnt = element.ARTICLE_READ_TIME;
          // console.log(this.artMnt);
        });
      });
  }
  getTextDetail(){
    this.authService.fetchTxtApi('https://articleuat.study24x7.net:8443/4.0.0.1/article/getSnglArtlTxtDt')
    .subscribe(
      data=>{
        this.MongoDatas = data;
        console.log(this.MongoDatas);

      }
    );
  }

  decodeURIPostData(data: string) {
    try {
      return decodeURIComponent(
        data.replace(/[\u200B-\u200D\uFEFF\uFFFD]/g, '').trim()
      );
    } catch (e) {
      return data;
    }
  }
}
