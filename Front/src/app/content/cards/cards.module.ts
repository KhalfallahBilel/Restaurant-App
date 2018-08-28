import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { ListCardsComponent } from './list-cards/list-cards.component';

@NgModule({
  imports: [
    CommonModule,ListCardsComponent
  ],
  declarations: [CardsComponent],
  exports : [CardsModule]
})
export class CardsModule { }
