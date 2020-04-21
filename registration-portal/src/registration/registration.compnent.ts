import { Component, OnInit } from '@angular/core';
import { STATE_LIST_CONST } from 'src/shared/constants/state-list.const';
import { COUNTRY_LIST_CONST } from 'src/shared/constants/country-list.const';
import { ICountryAndStateList } from 'src/shared/interface/country.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'rp-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public selectedCountry: string = ' ';
  public countryAndStateList: ICountryAndStateList[] = COUNTRY_LIST_CONST;
  public listOfInterests: string[];
  public ageRangeValue: string;
  public showProfileSection: boolean = false;
  public interestListInSentence: string;
  public interestCount: number;

  // form elements
  public firstName: string;
  public lastName: string;
  public age: string;
  public email: string;
  public telephone: string;
  public state: string;
  public country: string;
  public address: string;
  public address1: string;
  public address2: string;
  public companyAddress1: string;
  public companyAddress: string;
  public interests: string;
  public subscribe: boolean;
  public photoUploaded: boolean;

  constructor(
    private route: Router
  ){}

  public ngOnInit(): void {
  
  }

  public selectCountry(selectedState: string): void {
   this.selectedCountry = this.countryAndStateList.find(countryList => countryList.state == selectedState).country;
   this.state = selectedState;
  }

  public showInterest(interests: string): void {
    let interestList = interests.replace(/^\s+|\s+$/g,"").split(/\s*,\s*/);
    this.listOfInterests = interestList.filter((a, b) => interestList.indexOf(a) === b)
    if (interestList.length > 1) {
      this.interestListInSentence =  this.interests.replace(/,(?=[^,]*$)/, ' and');
    }
  }

  public removeInterest(removedInterest: string) {
    let indexOfRemoedInterest = this.listOfInterests.indexOf(removedInterest);
    this.listOfInterests.splice(indexOfRemoedInterest, 1);
    this.interests = this.listOfInterests.join();
  }

  public setAgeRangeValue(ageRange: string) {
    switch(ageRange) {
      case '1' : this.ageRangeValue = 'above 13 years';
                 break;  
      case '2' : this.ageRangeValue = 'above 20 years';
                 break;  
      case '3' : this.ageRangeValue = 'above 30 years'; 
                 break; 
      case '4' : this.ageRangeValue = 'above 45 years';  
                 break;
    }
  }

  public checkPhotoUploaded(isPhotoUploaded: boolean): void {
    this.photoUploaded = isPhotoUploaded;
    console.log('inside function');
  }

  public onSubmit(formData: any): void {
    this.showProfileSection = true;
  }

  public editProfile(): void {
    this.showProfileSection = false;
  }

  public onAgree(): void {
    
  }
}
