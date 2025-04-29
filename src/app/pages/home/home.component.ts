import { Component, OnInit } from '@angular/core';

import  {datafake}  from "src/app/data/datafake";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = ""
  id: number = 0
  photo:any
  index = 0

  question: any
  busca:boolean = false


  constructor() { }

  ngOnInit(): void {
      this.question = datafake
  }

}
