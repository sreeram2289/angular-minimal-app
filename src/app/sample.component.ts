import { Component } from '@angular/core';
import { Person } from './person';

@Component({
    selector: 'sample',
    templateUrl: './sample.component.html'
})

export class SampleComponent {
    person : Person = {
        id: 1,
        name: 'John Smith',
        phone: '123-46-7890',
        address: '1234 Olive St',
        city: 'Tallahassee',
        state: 'Florida',
        zip: 32301,
        country: 'USA'
      };
}