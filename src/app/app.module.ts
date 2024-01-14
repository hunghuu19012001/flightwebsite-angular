import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './homepage/toolbar/toolbar.component';
import {MatMenuModule} from '@angular/material/menu';
import { BannerComponent } from './homepage/banner/banner.component';
import { MainComponent } from './homepage/main/main.component';
import {MatSelectModule} from '@angular/material/select';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ContentBottomComponent } from './homepage/content-bottom/content-bottom.component';
import { SliderComponent } from './homepage/slider/slider.component';
import { IntroduceComponent } from './homepage/introduce/introduce.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './homepage/footer/footer.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './homepage/home/home.component';
import { FasttrackComponent } from './fasttrack/fasttrack.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BannerComponent,
    MainComponent,
    ContentBottomComponent,
    SliderComponent,
    IntroduceComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    FasttrackComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    SlickCarouselModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    NgxMaterialTimepickerModule
    
  
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
