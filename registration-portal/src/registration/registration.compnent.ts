import { Component, OnInit } from '@angular/core';
import { STATE_LIST_CONST } from 'src/shared/constants/state-list.const';
import { COUNTRY_LIST_CONST } from 'src/shared/constants/country-list.const';
import { ICountryAndStateList } from 'src/shared/interface/country.interface';

@Component({
  selector: 'rp-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public selectedCountry: string = ' ';
  public countryAndStateList: ICountryAndStateList[] = COUNTRY_LIST_CONST;
  
  public ngOnInit(): void {
  
  }

  public selectCountry(selectedState: string): void {
   this.selectedCountry = this.countryAndStateList.find(countryList => countryList.state == selectedState).country;
  }
}
