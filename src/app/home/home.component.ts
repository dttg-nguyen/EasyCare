import { Component, OnInit } from '@angular/core';
import * as patientData from '../data/searchPatientResult.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  patient;
  constructor() {}

  ngOnInit(): void {
    this.patient = (patientData as any).default;
  }
}
