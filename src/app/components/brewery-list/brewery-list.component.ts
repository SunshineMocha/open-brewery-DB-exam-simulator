import { Component, OnInit } from '@angular/core';
import { Breweries } from 'src/app/models/breweries';
import { ConnectionService } from 'src/app/services/connection/connection.service';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrls: ['./brewery-list.component.scss']
})
export class BreweryListComponent implements OnInit{

  breweries: Breweries[] = [];

  constructor(public ConnServ: ConnectionService){
  }

  ngOnInit(): void {
    this.ConnServ.getBreweries().subscribe({
      next: data => this.breweries = data,
      error: err => console.log(err)
    })
  }

}
