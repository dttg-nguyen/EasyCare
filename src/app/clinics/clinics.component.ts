import { Component, OnInit } from '@angular/core';
import * as clinics from '../data/listOfClinics.json';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css'],
})
export class ClinicsComponent implements OnInit {
  clinics;
  constructor() {}

  ngOnInit(): void {
    this.clinics = (clinics as any).default;
  }
}
