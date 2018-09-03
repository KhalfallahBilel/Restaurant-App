import { Injectable } from '@angular/core';
import { CardList } from '../model/cardList';


  
];
@Injectable({
  providedIn: 'root'
})
export class CardListService {

  constructor() { }
  getCardInfList():CardList[]{
    return MOCKCARD;
  }
}
