import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Tile } from '../interfaces/tile';
import { Observable } from 'rxjs';
import { Service } from '../interfaces/service';
import { AgencyCard } from '../interfaces/agency_card';
import { AboutUsSection } from '../interfaces/about_us_section';
import { map } from 'rxjs/operators';
import { Stat } from '../interfaces/stats';
import { SoftboxImage } from '../interfaces/softbox_image';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public tiles: Observable<Tile[]>;
  public services: Observable<Service[]>;
  public agencyCards: Observable<AgencyCard[]>;
  public stats: Observable<Stat[]>;
  public aboutUsSections: Observable<AboutUsSection[]>
  public softBoxImages: Observable<SoftboxImage[]>

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.tiles = this.dataService.getTiles().pipe(
      map(value => value.data)
    );

    this.services = this.dataService.getServices().pipe(
      map(value => value.data)
    );

    this.agencyCards = this.dataService.getAgencyCards().pipe(
      map(value => value.data)
    );

    this.stats = this.dataService.getStats().pipe(
      map(value => value.data)
    );
    
    this.aboutUsSections = this.dataService.getAboutUsSections().pipe(
      map(value => value.data)
    );
    
    this.softBoxImages = this.dataService.getSoftboxImages().pipe(
      map(value => value.data)
    );

  }





}
