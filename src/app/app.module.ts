import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SkillTableComponent } from './components/skill-table/skill-table.component';
import { TabComponent } from './components/tab/tab.component';
import { SliderComponent } from './components/slider/slider.component';
import { Card2Component } from './components/card2/card2.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { TabContainerComponent } from './components/tab-container/tab-container.component';
import { SkillTableImgComponent } from './components/skill-table-img/skill-table-img.component';
import { WorkspaceCardComponent } from './components/workspace-card/workspace-card.component';
import { CardSliderItemComponent } from './components/card-slider-item/card-slider-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ParallaxHeaderComponent } from './components/parallax-header/parallax-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    SkillTableComponent,
    TabComponent,
    SliderComponent,
    Card2Component,
    NewsletterComponent,
    TabContainerComponent,
    SkillTableImgComponent,
    WorkspaceCardComponent,
    CardSliderItemComponent,
    ParallaxHeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
