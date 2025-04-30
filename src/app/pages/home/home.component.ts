import { Component, OnInit } from '@angular/core';

import  {datafake}  from "src/app/data/datafake";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  question: any

  constructor() { }

  ngOnInit(): void {
      this.question = datafake
  }

}
