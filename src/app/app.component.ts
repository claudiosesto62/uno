import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uno';
  public serverResponse: any;

  constructor(private httpClient: HttpClient) {}

  public makePost(): void {
    this.httpClient.post("//localhost:44307/WeatherForecast", {}).subscribe(
      (result: any) => {
        this.serverResponse = JSON.stringify(result);
      },
      ex => {
        this.serverResponse = ex.message
      }
    );
  }

  public setCsrfCookie(): void {
    this.httpClient
      .get("//localhost:44307/WeatherForecast")
      .subscribe((result: any) => {
        this.serverResponse = JSON.stringify(result);
      },
      ex => {
        this.serverResponse = ex.message
      });
}
}
