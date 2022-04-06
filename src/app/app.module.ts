import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {GaugeModule} from 'angular-gauge';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { HttpService } from './services/http.service';
import { DetailsComponent } from './components/details/details.component';
import { GameTabsComponent } from './components/game-tabs/game-tabs.component';
import { MapsComponent } from './components/maps/maps.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    DetailsComponent,
    GameTabsComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatIconModule,
    GaugeModule.forRoot(),
    MatSelectModule,
    MatTabsModule

  ],
  providers: [
    HttpService,
    { provide:  HTTP_INTERCEPTORS,  useClass: HttpHeadersInterceptor, multi:  true},
    { provide:  HTTP_INTERCEPTORS,  useClass: HttpErrorInterceptor, multi:  true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
