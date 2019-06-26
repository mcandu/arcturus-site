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

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(private http: HttpClient) { }

  getSkills():Observable<Response<Skill>> {
    return this.http.get<Response<Skill>>('https://35.239.247.158/api/bucket/5d10bcf6b5a5b2558c4091dc/data');
  }

  /*getOurworkspace() {
    return this.http.get('https://35.239.247.158/api/bucket/5d10c0ddb5a5b22fc84091df/data');
  }*/

  getTestimonials():Observable<Response<Testimonial>> {
    return this.http.get<Response<Testimonial>>('https://35.239.247.158/api/bucket/5d10cdf3b5a5b23a264091e3/data');
  }

  getHomeSections():Observable<Response<HomeSection>> {
    return this.http.get<Response<HomeSection>>('https://35.239.247.158/api/bucket/5d10ceebb5a5b2715f4091e4/data');
  }

  getTabs():Observable<Response<Tab>> {
    return this.http.get<Response<Tab>>('https://35.239.247.158/api/bucket/5d10d195b5a5b29ddb4091e5/data');
  }

  getPricingTable():Observable<Response<PricingTable>> {
    return this.http.get<Response<PricingTable>>('https://35.239.247.158/api/bucket/5d10d44db5a5b241104091e6/data');
  }

  getHeaderSection():Observable<Response<HeaderSection>>{
    return this.http.get<Response<HeaderSection>>('https://35.239.247.158/api/bucket/5d13562cd5869d41584c5991/data');
  }

}
