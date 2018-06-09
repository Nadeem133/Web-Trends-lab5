import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: Person[] = [
    {id: 1, firstName: 'John', lastName: 'Hamilton', dateOfBirth: new Date('01/01/1940')},
    {id: 2, firstName: 'Mathew', lastName: 'Webber', dateOfBirth: new Date('01/01/1975')},
    {id: 3, firstName: 'Martha', lastName: 'Allan', dateOfBirth: new Date('01/01/1980')}
];

  getPeople(person?: Person): Observable<Person[]> {
      
        if(person){
            let results: Person[] = [];
            for(let p of this.people){
              if(person.firstName.toLowerCase() === p.firstName.toLowerCase()){
               results.push(p);
              }
          }
          return of(results);
      }
  return of(this.people);
}

  constructor() { }
}
