import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private list: any[];

  constructor() { }

  ngOnInit() {
    this.list = [];
    this.list.push('lkfdkshf');
    this.list.push('234');
    this.list.push('234sdfsd');
    this.list.push('wrerg');
  }

}
