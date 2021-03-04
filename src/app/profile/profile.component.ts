import { Component, OnInit } from '@angular/core';
import * as patientData from '../data/searchPatientResult.json';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  patient;
  tableNameSpan: number = 2;
  tableNameSpanColor: string = 'blue';
  constructor() {}

  ngOnInit(): void {
    this.patient = (patientData as any).default;
  }
}
