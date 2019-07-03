import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from './interfaces/skill';
import { Observable } from 'rxjs';
import { Response } from './interfaces/response';
import { Testimonial } from './interfaces/testimonial';
import { HomeSection } from './interfaces/home_section';
import { Tab } from './interfaces/tab';
import { PricingTable } from './interfaces/pricing_table';
import { HeaderSection } from './interfaces/header_section';
import { Tile } from './interfaces/tile';
import { AgencyCard } from './interfaces/agency_card';
import { AboutUsSection } from './interfaces/about_us_section';
import { Service } from './interfaces/service';
import { Stat } from './interfaces/stats';
import { SoftboxImage } from './interfaces/softbox_image';
import { ContactCard } from './interfaces/contact_card';
import { ContactUsSection } from './interfaces/contact_us_section';
import { WorkspaceCard } from './interfaces/workspace_card';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }



  getSkills(): Observable<Response<Skill>> {
    return this.http.get<Response<Skill>>('https://35.239.247.158/api/bucket/5d10bcf6b5a5b2558c4091dc/data');
  }

  getWorkspaceCard() :Observable<Response<WorkspaceCard>> {
    return this.http.get<Response<WorkspaceCard>>('https://35.239.247.158/api/bucket/5d10c0ddb5a5b22fc84091df/data');
  }

  getTestimonials(): Observable<Response<Testimonial>> {
    return this.http.get<Response<Testimonial>>('https://35.239.247.158/api/bucket/5d10cdf3b5a5b23a264091e3/data');
  }

  getHomeSections(): Observable<Response<HomeSection>> {
    return this.http.get<Response<HomeSection>>('https://35.239.247.158/api/bucket/5d10ceebb5a5b2715f4091e4/data');
  }

  getTabs(): Observable<Response<Tab>> {
    return this.http.get<Response<Tab>>('https://35.239.247.158/api/bucket/5d10d195b5a5b29ddb4091e5/data');
  }

  getPricingTable(): Observable<Response<PricingTable>> {
    return this.http.get<Response<PricingTable>>('https://35.239.247.158/api/bucket/5d10d44db5a5b241104091e6/data');
  }

  getHeaderSection(): Observable<Response<HeaderSection>> {
    return this.http.get<Response<HeaderSection>>('https://35.239.247.158/api/bucket/5d13562cd5869d41584c5991/data');
  }

  getTiles(): Observable<Response<Tile>> {
    return this.http.get<Response<Tile>>('https://35.239.247.158/api/bucket/5d1488b1669d2a8640efb101/data');
  }

  getServices(): Observable<Response<Service>> {
    return this.http.get<Response<Service>>('https://35.239.247.158/api/bucket/5d1489b9669d2a72f8efb102/data');
  }

  getAgencyCards(): Observable<Response<AgencyCard>> {
    return this.http.get<Response<AgencyCard>>('https://35.239.247.158/api/bucket/5d1491b2669d2a1a41efb103/data');
  }

  getStats(): Observable<Response<Stat>> {
    return this.http.get<Response<Stat>>('https://35.239.247.158/api/bucket/5d1491f3669d2a2e56efb104/data');
  }

  getAboutUsSections(): Observable<Response<AboutUsSection>> {
    return this.http.get<Response<AboutUsSection>>('https://35.239.247.158/api/bucket/5d14973b669d2ac304efb114/data');
  }

  getSoftboxImages(): Observable<Response<SoftboxImage>> {
    return this.http.get<Response<SoftboxImage>>('https://35.239.247.158/api/bucket/5d14b536669d2ab737efb121/data');
  }

  getContactCard(): Observable<Response<ContactCard>> {
    return this.http.get<Response<ContactCard>>('https://35.239.247.158/api/bucket/5d14d0e6669d2a80c0efb12a/data');
  }

  getContactUsSection(): Observable<Response<ContactUsSection>> {
    return this.http.get<Response<ContactUsSection>>('https://35.239.247.158/api/bucket/5d14d041669d2aa206efb127/data');
  }


}
