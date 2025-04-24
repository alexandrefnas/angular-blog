import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover_small:string=""
  @Input()
  cardDescription_small:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
