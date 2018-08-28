import { Injectable } from '@angular/core';
import { CardList } from '../model/cardList';


const MOCKCARD = [
  new CardList('./assets/img-plats/1.jpg','Nuggets','Voyage Organisé'),
  new CardList('./assets/img-plats/2.jpg','Burger','Voyage Organisé'),
  new CardList('./assets/img-plats/3.jpg','Mlawi','Voyage Organisé')
  
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
