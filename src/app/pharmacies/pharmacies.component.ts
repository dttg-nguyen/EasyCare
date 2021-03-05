import { Component, OnInit } from '@angular/core';
import * as pharmacies from '../data/listOfPharmacies.json';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.css'],
})
export class PharmaciesComponent implements OnInit {
  pharmacies;
  constructor() {}

  ngOnInit(): void {
    this.pharmacies = (pharmacies as any).default;
  }
}
