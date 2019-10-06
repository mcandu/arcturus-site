import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Skill } from '../interfaces/skill';
import { Testimonial } from '../interfaces/testimonial';
import { HomeSection } from '../interfaces/home_section';
import { PricingTable } from '../interfaces/pricing_table';
import { map } from 'rxjs/internal/operators/map';
import { Tab } from '../interfaces/tab';
import { tap, share, startWith } from 'rxjs/operators';
import { HeaderSection } from '../interfaces/header_section';
import { WorkspaceCard } from '../interfaces/workspace_card';

declare var jQuery;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public skills: Observable<Skill>;
  public workspace_cards: Observable<WorkspaceCard>;
  public testimonials: Observable<Testimonial>;
  public homeSections: Observable<HomeSection>
  public tabs: Observable<Tab>;
  public pricingTable: Observable<PricingTable>;
  public headerSection:Observable<HeaderSection>

  constructor(private dataService: DataService) { 
    this.skills = this.dataService.getSkills();

    this.testimonials = this.dataService.getTestimonials().pipe(
      tap(() => {
        setTimeout(() => {
            jQuery('.testimonial-two-dots-bx').owlCarousel({
              loop:true,
              autoplay:true,
              margin:0,
              nav:true,
              dots: true,
              navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
              responsive:{
                0:{
                  items:1
                },
                
                480:{
                  items:1
                },			
                
                991:{
                  items:1
                },
                1000:{
                  items:1
                }
              }
            })
          })
        })
        
    )
    this.homeSections = this.dataService.getHomeSections().pipe(
      startWith({data:[]}),
      tap(console.log),
      share(),
    );

    this.tabs = this.dataService.getTabs();

    this.pricingTable = this.dataService.getPricingTable();

    this.headerSection = this.dataService.getHeaderSection();

    this.workspace_cards = this.dataService.getWorkspaceCard();
  }

  ngOnInit() {

  
    
  }

}
