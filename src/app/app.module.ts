import { LOADING_INTECERPTOR } from './interceptors/loading.interceptor';
import { AuthService } from './Services/auth.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './Pages/firstpage/firstpage.component';
import { HomeComponent } from './Pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './Pages/home/loading/loading.component';
import { SidebarComponent } from './Pages/home/Sidebar/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    HomeComponent,
    LoadingComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    LOADING_INTECERPTOR,
    {
      provide: AuthService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
