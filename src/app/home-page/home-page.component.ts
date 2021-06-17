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
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getArticalDetails();
  }

  getArticalDetails() {
    this.authService
      .FetchedApi(
        'https://articleuat.study24x7.net:8443/4.0.0.1/article/getSnglArtlDetails'
      )
      .subscribe((data) => {
        this.responseData = data;
        this.articals = this.responseData.related_articles;
        console.log(this.articals);

        var arr = this.responseData.related_articles;
        arr.forEach((element) => {
          element.ARTICLE_READ_TIME = Math.floor(
            element.ARTICLE_READ_TIME / 60
          );
          this.artMnt = element.ARTICLE_READ_TIME;
          console.log(this.artMnt);
        });
      });
  }
  artMnt(artMnt: any) {
    throw new Error('Method not implemented.');
  }

  // TimeShowInMnt(arr) {
  //   arr.forEach((element) => {
  //     element.ARTICLE_READ_TIME = Math.floor(element.ARTICLE_READ_TIME / 60);
  //   });
  //   return arr;
  // }

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
