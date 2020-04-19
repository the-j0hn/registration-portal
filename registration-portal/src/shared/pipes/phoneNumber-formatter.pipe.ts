import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phoneNumberFormatter'
})

export class PhoneNumberFormatter implements PipeTransform {
    transform(tel: string) : string {
        const countryCode: string = '+1';
        let formattedTel : string = '';
        let stateCode: string = '(' + tel.slice(0,3) + ')';
        let telSecondSection: string = ' ' + tel.slice(3, 6) + '-';
        let telThirdSection: string = tel.slice(6,10);

        return (countryCode+ stateCode + telSecondSection + telThirdSection);
    }
}