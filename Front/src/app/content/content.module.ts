import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { CardsComponent } from './cards/cards.component';
import { CardListComponent } from './cards/card-list/card-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContentComponent, CardsComponent, CardListComponent],
  exports : [ContentComponent]
})
export class ContentModule { }
