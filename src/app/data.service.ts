import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getGermanStatesAndCities(): Observable<{ state: string, cities: string[] }[]> {
    // Mock data for demonstration
    return of([
      { state: 'Bavaria', cities: ['Munich', 'Nuremberg', 'Augsburg', 'Regensburg', 'Würzburg'] },
      { state: 'Berlin', cities: ['Berlin' , 'Hambuef'] }
      // Add more states and cities here
    ]);
  }
}
