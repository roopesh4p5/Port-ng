import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educations: any = [
    {
      degree: 'Pursuing my B.Sc (EMC)',
      institution: 'SESHADRIPURAM FIRST GRADE COLLEGE',
      duration: '2020 - 2023',
      aggregate: '85 percentage',
      board: 'Bengaluru City University',
    },
    {
      degree: 'PUC (PCMC)',
      institution: 'INDO ASIAN ACADEMY',
      duration: '2018 - 2020',
      aggregate: '60 percentage',
      board: 'Karnataka Board',
    },
    {
      degree: 'Class 10 (SSLC)',
      institution: 'NEHRU CENTENARY ENGLISH SCHOOL',
      duration: '2017 - 2018',
      aggregate: '89 percentage',
      board: 'Karnataka board',
    },
  ];
  
}