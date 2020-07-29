import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';

@Injectable()
export class WebcamService {

  constructor(private webService: WebRequestService, private router: Router, private http: HttpClient) { }
  

  sendImage(imgUrl:string){

  return this.webService.sendImage(imgUrl);
  }
  
    

  

}