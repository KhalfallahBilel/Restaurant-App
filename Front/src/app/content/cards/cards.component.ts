import { Component, OnInit } from '@angular/core';
import { CardList } from '../../model/cardList';
import { CardListService } from '../../service/card-list.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards:CardList[];
  constructor(private cardListService : CardListService) { }

  ngOnInit() {
   this.cards=this.cardListService.getCardInfList();
  }

}
