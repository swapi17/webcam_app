import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { WebcamService } from '../../webcam.service';

@Component({
  selector: 'app-camera',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {
  
  

  constructor(private webcamService: WebcamService){

  }
  // toggle webcam on/off
  
  
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
 
  public webcamImage: WebcamImage = null;

 

  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });

      setInterval(this.triggerSnapshot, 30000);
  }

   triggerSnapshot =  ()=>  {
    this.trigger.next();

  }
  

   

  

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

 

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    //this.pictureTaken.emit(webcamImage);
    this.webcamImage = webcamImage;
    console.log(this.webcamImage.imageAsDataUrl);
    this.webcamService.sendImage(this.webcamImage.imageAsDataUrl).subscribe(res => {});
  }

  

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  
  

 


  
}
