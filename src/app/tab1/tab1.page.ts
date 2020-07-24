import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { Platform } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  isInApp:boolean;
  oink : any;

  oinkRating : number = 0;

  constructor(
    private http:HttpClient,
    private nativeHttp: HTTP,
    public plt: Platform,
  ) {
    if (this.plt.url().includes('localhost:8100')) {
      this.isInApp = false;
      console.log('ON OINK WEBSITE')
    }else{
      this.isInApp = true;
      console.log('ON MOBILE DEVICE')
    }

    if(!this.oink){
      this.getOink();
    }
  }

  getOink() {

    let date = this.getOinkId(0, 5);
    console.log('Today\'s number is #' + date);

    if (this.isInApp) {
      //console.log('### GENERATING GENERAL IMAGES ON IOS / ANDROID ###');
      setTimeout(()=>{
        this.nativeHttp.get('https://www.googleapis.com/customsearch/v1?q=pig&start=' + date + '&searchType=image&num=1&key=AIzaSyAPvDEdOoGeldbbmVWShXguFmWFaX79DI8&cx=013483737079049266941:mzydshy4xwi', {}, {})
          .then(data => {
            var mainData = JSON.parse(data.data);
            this.oink = mainData['items'][0]['link'];
            console.log(this.oink);
          }).catch(error => {
            console.log(error)
          });
      });
    }else {
      //console.log('### GENERATING GENERAL IMAGES ON BROWSER ###');
      setTimeout(()=>{
        this.http.get('https://www.googleapis.com/customsearch/v1?q=pig&start=' + date + '&searchType=image&num=1&key=AIzaSyAPvDEdOoGeldbbmVWShXguFmWFaX79DI8&cx=013483737079049266941:mzydshy4xwi').subscribe(
        result => {
          this.oink = result['items'][0]['link'];
          console.log(this.oink);
        }, error => {
          console.log(JSON.stringify(error));
        });
       });
    }
  }

  getOinkId(minId, maxId) {
    var oinkId = this.getCookie('oink');

    if (oinkId !== null) {
      return oinkId;
    }

    var expire = new Date();
    expire.setHours(23,59,59,0);

    oinkId = Math.floor(Math.random()*(maxId - minId + 1) + minId).toString();

    document.cookie = 'oink='+oinkId+';expires='+expire.toUTCString()+';path=/';

    return oinkId;
  }

  getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");

    if (parts.length == 2) {
      return parts.pop().split(";").shift();
    }

    return null;
  }
}
