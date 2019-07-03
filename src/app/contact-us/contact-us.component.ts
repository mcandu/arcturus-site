import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ContactCard } from '../interfaces/contact_card';
import { ContactUsSection } from '../interfaces/contact_us_section';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public contact_cards: Observable<ContactCard[]>
  public contact_us_sections: Observable<ContactUsSection[]>

  constructor(private dataService: DataService) { }

  ngOnInit() {
    
    this.contact_cards = this.dataService.getContactCard().pipe(
      map( value => value.data)
    );

    this.contact_us_sections = this.dataService.getContactUsSection().pipe(
      map( value => value.data)
    );

  }

}
