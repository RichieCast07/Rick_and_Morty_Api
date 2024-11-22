import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  locations: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchLocations();
  }

  fetchLocations(): void {
    const apiUrl = 'https://rickandmortyapi.com/api/location';
    this.http.get<{ results: any[] }>(apiUrl).subscribe({
      next: (response) => {
        this.locations = response.results;
      },
      error: (err) => {
        console.error('Error fetching locations:', err);
      },
    });
  }
}
