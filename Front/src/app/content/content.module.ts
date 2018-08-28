import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContentComponent,CardsComponent],
  exports : [ContentModule]
})
export class ContentModule { }
