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



  getSkills(): Observable<Skill> {
    return this.http.get<Skill>('https://example.spicaengine.com/api/bucket/5d99fa5bc6f8125876ea437a/data');
  }

  getWorkspaceCard() :Observable<WorkspaceCard> {
    return this.http.get<WorkspaceCard>('https://example.spicaengine.com/api/bucket/5d99fb27c6f812c7f9ea437e/data');
  }

  getTestimonials(): Observable<Testimonial> {
    return this.http.get<Testimonial>('https://example.spicaengine.com/api/bucket/5d99fda6c6f8126363ea4382/data');
  }

  getHomeSections(): Observable<Response<HomeSection>> {
    return this.http.get<Response<HomeSection>>('https://example.spicaengine.com/api/bucket/5d9a0a55c6f8121efeea4399/data');
  }

  getTabs(): Observable<Tab> {
    return this.http.get<Tab>('https://example.spicaengine.com/api/bucket/5d99fffbc6f81258f8ea4389/data');
  }

  getPricingTable(): Observable<PricingTable> {
    return this.http.get<PricingTable>('https://example.spicaengine.com/api/bucket/5d9a022dc6f812fbcaea438d/data');
  }

  getHeaderSection(): Observable<HeaderSection> {
    return this.http.get<HeaderSection>('https://example.spicaengine.com/api/bucket/5d9a04f5c6f812380aea4393/data');
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
