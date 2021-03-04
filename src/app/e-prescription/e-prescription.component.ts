import { Component, OnInit } from '@angular/core';
import * as patientData from '../data/searchPatientResult.json';

@Component({
  selector: 'app-e-prescription',
  templateUrl: './e-prescription.component.html',
  styleUrls: ['./e-prescription.component.css'],
})
export class EPrescriptionComponent implements OnInit {
  date: Date;
  patient;
  constructor() {}

  ngOnInit(): void {
    this.date = new Date();
    this.patient = (patientData as any).default;
  }
}
