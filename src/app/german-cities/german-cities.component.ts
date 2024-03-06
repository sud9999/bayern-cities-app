import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-german-cities',
  templateUrl: './german-cities.component.html',
  styleUrls: ['./german-cities.component.css']
})
export class GermanCitiesComponent implements OnInit {
  germanStatesAndCities: { state: string, cities: string[] }[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getGermanStatesAndCities().subscribe(data => {
      this.germanStatesAndCities = data;
    });
  }

  exportToExcel(): void {
    const dataToExport = this.germanStatesAndCities.map(stateAndCities => {
      return {
        State: stateAndCities.state,
        Cities: stateAndCities.cities.join(', ')
      };
    });

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'German States and Cities');
    
    XLSX.writeFile(wb, 'german_states_and_cities.xlsx');
  }
}
