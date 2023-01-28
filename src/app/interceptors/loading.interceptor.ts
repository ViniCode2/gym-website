import { LoadingService } from './../Services/loading.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private totalRequests = 0;

  constructor(
    private loadingService: LoadingService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.totalRequests++;
    this.loadingService.setLoading(true);
    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests == 0) {
          this.loadingService.setLoading(false);
        }
      })
    );
  }

}

export const LOADING_INTECERPTOR = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoadingInterceptor,
  multi: true
}
