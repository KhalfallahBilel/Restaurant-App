import { Component, OnInit, Input } from '@angular/core';
import { CardList } from '../../../model/cardList';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input () card:CardList
  constructor() { }

  ngOnInit() {
  }

}
