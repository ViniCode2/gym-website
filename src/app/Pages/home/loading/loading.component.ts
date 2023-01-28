import { LoadingService } from './../../../Services/loading.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html'
})
export class LoadingComponent{

  constructor(
    public loading: LoadingService
  ) {

   }


}
